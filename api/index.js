/**
 * Kilax MakyPay Payment Gateway Backend API
 * 
 * Secure proxy server that handles MakyPay payment requests
 * - Keeps API secrets server-side (never exposed to mobile app)
 * - Authenticates requests using Supabase JWT tokens
 * - Logs transactions to Supabase database
 * - Validates and sanitizes all inputs
 */

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Environment variables validation
const requiredEnvVars = [
  'MAKYPAY_API_KEY',
  'MAKYPAY_API_SECRET',
  'SUPABASE_URL',
  'SUPABASE_SERVICE_KEY'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
}

// Initialize Supabase Admin Client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// MakyPay API Configuration
const MAKYPAY_API_BASE = 'https://wire-api.makylegacy.com/api/v1';
const MAKYPAY_AUTH = Buffer.from(
  `${process.env.MAKYPAY_API_KEY}:${process.env.MAKYPAY_API_SECRET}`
).toString('base64');

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-client-platform']
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

/**
 * Authentication Middleware
 * Verifies Supabase JWT token from Authorization header
 */
async function authenticateRequest(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Missing or invalid authorization header',
        message: 'Please sign in to continue'
      });
    }

    const token = authHeader.substring(7);
    
    // Verify JWT token with Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return res.status(401).json({
        error: 'Invalid authentication token',
        message: 'Please sign in again'
      });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({
      error: 'Authentication failed',
      message: error.message
    });
  }
}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Kilax MakyPay API',
    version: '1.0.0'
  });
});

/**
 * POST /api/makypay/initiate
 * Initiate mobile money or card payment collection
 */
app.post('/api/makypay/initiate', authenticateRequest, async (req, res) => {
  try {
    const { phoneNumber, amount, description, userId, paymentMethod = 'mobile_money' } = req.body;

    // Validate inputs
    if (!amount || !userId) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'amount and userId are required'
      });
    }

    if (paymentMethod === 'mobile_money' && !phoneNumber) {
      return res.status(400).json({
        error: 'Missing phone number',
        message: 'phoneNumber is required for mobile money payments'
      });
    }

    if (amount < 500 || amount > 10000000) {
      return res.status(400).json({
        error: 'Invalid amount',
        message: 'Amount must be between 500 and 10,000,000 UGX'
      });
    }

    // Verify userId matches authenticated user
    if (userId !== req.user.id) {
      return res.status(403).json({
        error: 'User ID mismatch',
        message: 'Cannot initiate payment for another user'
      });
    }

    // Generate a unique UUID v4 reference for this transaction (required by MakyPay)
    const transactionReference = uuidv4();

    let paymentData, endpoint, requestBody, paymentMethodType;

    // MakyPay uses the same endpoint for both mobile money and card payments
    endpoint = `${MAKYPAY_API_BASE}/collections/collect-money`;

    if (paymentMethod === 'card') {
      // Card payment - as per MakyPay docs
      requestBody = new URLSearchParams({
        method: 'card',
        amount: amount.toString(),
        country: 'UG',
        reference: transactionReference,
        description: description || 'Kilax Subscription Payment',
        callback_url: process.env.MAKYPAY_CALLBACK_URL || `${process.env.VERCEL_URL}/api/makypay/callback`
      }).toString();
      paymentMethodType = 'makypay_card';
    } else {
      // Mobile money payment - as per MakyPay docs
      requestBody = new URLSearchParams({
        phone_number: phoneNumber,
        amount: amount.toString(),
        country: 'UG',
        reference: transactionReference,
        description: description || 'Kilax Subscription Payment',
        callback_url: process.env.MAKYPAY_CALLBACK_URL || `${process.env.VERCEL_URL}/api/makypay/callback`
      }).toString();
      paymentMethodType = 'makypay_mobile_money';
    }

    // Call MakyPay API with logging
    console.log('MakyPay Request:', {
      endpoint,
      body: requestBody,
      paymentMethod
    });

    const response = await axios.post(endpoint, requestBody, {
      headers: {
        'Authorization': `Basic ${MAKYPAY_AUTH}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      timeout: 30000
    });

    paymentData = response.data?.data || response.data;
    const transaction = paymentData.transaction || {};
    const collection = paymentData.collection || {};

    // Log transaction to database
    const { data: insertedTransaction, error: insertError } = await supabase
      .from('makypay_transactions')
      .insert({
        user_id: userId, // Supabase handles UUID conversion
        uuid: transaction.uuid || transaction.transaction_id,
        reference: transaction.reference || transaction.uuid || `ref-${Date.now()}`,
        amount: collection.amount?.raw || amount,
        currency: collection.amount?.currency || 'UGX',
        phone_number: paymentMethod === 'mobile_money' ? (collection.phone_number || phoneNumber) : null,
        payment_method: paymentMethodType,
        status: transaction.status || 'processing',
        description: description || 'Payment',
        provider: collection.provider || (paymentMethod === 'card' ? 'card' : 'mtn'),
        response_data: paymentData
      })
      .select();

    if (insertError) {
      console.error('❌ Database insert FAILED:', JSON.stringify(insertError, null, 2));
      console.error('Attempted to insert:', {
        user_id: userId,
        uuid: transaction.uuid || transaction.transaction_id,
        reference: transaction.reference || transaction.uuid,
        amount: collection.amount?.raw || amount
      });
      // Continue anyway - transaction is initiated with MakyPay
    } else {
      console.log('✅ Transaction saved to database:', insertedTransaction);
    }

    res.json({
      success: true,
      uuid: transaction.uuid || transaction.transaction_id,
      reference: transaction.reference || transaction.uuid,
      status: transaction.status || 'processing',
      amount: collection.amount?.raw || amount,
      currency: collection.amount?.currency || 'UGX',
      phoneNumber: collection.phone_number || phoneNumber,
      provider: collection.provider || (paymentMethod === 'card' ? 'card' : 'mtn'),
      redirectUrl: paymentData.redirect_url || '',
      message: response.data?.message || 'Payment initiated successfully',
      description: description
    });

  } catch (error) {
    console.error('Payment initiation error:', error.response?.data || error.message);
    console.error('Full error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      headers: error.response?.headers
    });
    
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || error.response?.data?.error || 'Payment initiation failed',
      message: error.response?.data?.message || error.message,
      details: error.response?.data
    });
  }
});

/**
 * POST /api/makypay/collect (deprecated - use /initiate)
 * Initiate mobile money payment collection
 */
app.post('/api/makypay/collect', authenticateRequest, async (req, res) => {
  try {
    const { phoneNumber, amount, description, userId } = req.body;

    // Validate inputs
    if (!phoneNumber || !amount || !userId) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'phoneNumber, amount, and userId are required'
      });
    }

    if (amount < 500 || amount > 10000000) {
      return res.status(400).json({
        error: 'Invalid amount',
        message: 'Amount must be between 500 and 10,000,000 UGX'
      });
    }

    // Verify userId matches authenticated user
    if (userId !== req.user.id) {
      return res.status(403).json({
        error: 'User ID mismatch',
        message: 'Cannot initiate payment for another user'
      });
    }

    // Call MakyPay API
    const response = await axios.post(
      `${MAKYPAY_API_BASE}/collections/mobile-money`,
      {
        phone_number: phoneNumber,
        amount: amount,
        currency: 'UGX',
        description: description || 'Kilax Subscription Payment',
        callback_url: process.env.MAKYPAY_CALLBACK_URL || `${process.env.VERCEL_URL}/api/makypay/callback`
      },
      {
        headers: {
          'Authorization': `Basic ${MAKYPAY_AUTH}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    const paymentData = response.data;

    // Log transaction to database
    await supabase.from('makypay_transactions').insert({
      user_id: userId,
      uuid: paymentData.uuid || paymentData.transaction_id,
      reference: paymentData.reference || paymentData.uuid,
      amount: amount,
      currency: 'UGX',
      phone_number: phoneNumber,
      payment_method: 'makypay_mobile_money',
      status: paymentData.status || 'pending',
      description: description,
      provider_response: paymentData
    });

    res.json({
      success: true,
      uuid: paymentData.uuid || paymentData.transaction_id,
      reference: paymentData.reference || paymentData.uuid,
      status: paymentData.status || 'pending',
      message: paymentData.message || 'Payment initiated successfully',
      description: description
    });

  } catch (error) {
    console.error('Mobile money collection error:', error.response?.data || error.message);
    
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || 'Payment initiation failed',
      message: error.response?.data?.message || error.message
    });
  }
});

/**
 * POST /api/makypay/card/collect
 * Initiate card payment collection
 */
app.post('/api/makypay/card/collect', authenticateRequest, async (req, res) => {
  try {
    const { amount, description, userId } = req.body;

    if (!amount || !userId) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'amount and userId are required'
      });
    }

    if (amount < 500 || amount > 10000000) {
      return res.status(400).json({
        error: 'Invalid amount',
        message: 'Amount must be between 500 and 10,000,000 UGX'
      });
    }

    if (userId !== req.user.id) {
      return res.status(403).json({
        error: 'User ID mismatch',
        message: 'Cannot initiate payment for another user'
      });
    }

    // Call MakyPay Card API
    const response = await axios.post(
      `${MAKYPAY_API_BASE}/collections/card`,
      {
        amount: amount,
        currency: 'UGX',
        description: description || 'Kilax Subscription Payment',
        return_url: process.env.MAKYPAY_RETURN_URL || 'https://kilaxmovies.com/payment/success',
        callback_url: process.env.MAKYPAY_CALLBACK_URL || `${process.env.VERCEL_URL}/api/makypay/callback`
      },
      {
        headers: {
          'Authorization': `Basic ${MAKYPAY_AUTH}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    const paymentData = response.data;

    // Log transaction
    await supabase.from('makypay_transactions').insert({
      user_id: userId,
      uuid: paymentData.uuid || paymentData.transaction_id,
      reference: paymentData.reference || paymentData.uuid,
      amount: amount,
      currency: 'UGX',
      payment_method: 'makypay_card',
      status: paymentData.status || 'pending',
      description: description,
      provider_response: paymentData
    });

    res.json({
      success: true,
      uuid: paymentData.uuid || paymentData.transaction_id,
      reference: paymentData.reference || paymentData.uuid,
      redirectUrl: paymentData.payment_url || paymentData.redirect_url || '',
      status: paymentData.status || 'pending',
      message: paymentData.message || 'Card payment initiated',
      description: description
    });

  } catch (error) {
    console.error('Card collection error:', error.response?.data || error.message);
    
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || 'Card payment initiation failed',
      message: error.response?.data?.message || error.message
    });
  }
});

/**
 * GET /api/makypay/status
 * Check transaction status (query parameter version)
 */
app.get('/api/makypay/status', authenticateRequest, async (req, res) => {
  try {
    const transactionId = req.query.transactionId;

    if (!transactionId) {
      return res.status(400).json({
        error: 'Missing transaction ID',
        message: 'transactionId query parameter is required'
      });
    }

    console.log('Checking transaction status:', transactionId);

    // First check our local database
    const { data: localTransaction, error: dbError } = await supabase
      .from('makypay_transactions')
      .select('*')
      .eq('uuid', transactionId)
      .single();

    if (!localTransaction) {
      console.log('Transaction not found in database');
      return res.status(404).json({
        error: 'Transaction not found',
        message: 'Transaction not found in database'
      });
    }

    console.log('Local transaction status:', localTransaction.status);

    // Try to get latest status from MakyPay
    try {
      const response = await axios.get(
        `${MAKYPAY_API_BASE}/transactions/${transactionId}`,
        {
          headers: {
            'Authorization': `Basic ${MAKYPAY_AUTH}`,
            'Accept': 'application/json'
          },
          timeout: 10000
        }
      );

      console.log('MakyPay status response:', response.data);

      const responseData = response.data?.data || response.data;
      const transaction = responseData.transaction || responseData;

      // Update local database with latest status
      await supabase
        .from('makypay_transactions')
        .update({
          status: transaction.status,
          provider_reference: transaction.provider_reference,
          provider_response: responseData,
          updated_at: new Date().toISOString()
        })
        .eq('uuid', transactionId);

      return res.json({
        success: true,
        uuid: transaction.uuid || transactionId,
        reference: transaction.reference,
        status: transaction.status,
        amount: transaction.amount?.raw || transaction.amount || localTransaction.amount,
        currency: transaction.amount?.currency || transaction.currency || 'UGX',
        provider: transaction.provider || localTransaction.provider || 'unknown',
        providerReference: transaction.provider_reference,
        source: 'makypay'
      });
    } catch (makyPayError) {
      console.log('MakyPay API error, using database status:', makyPayError.response?.status);
      
      // MakyPay failed, return database status (this is normal during processing)
      return res.json({
        success: true,
        uuid: localTransaction.uuid,
        reference: localTransaction.reference,
        status: localTransaction.status || 'processing',
        amount: localTransaction.amount,
        currency: localTransaction.currency || 'UGX',
        provider: localTransaction.provider || 'unknown',
        providerReference: localTransaction.provider_reference,
        source: 'database'
      });
    }

  } catch (error) {
    console.error('Status check error:', error.message);
    
    res.status(500).json({
      error: 'Status check failed',
      message: error.message
    });
  }
});

/**
 * GET /api/makypay/status/:uuid
 * Check transaction status (path parameter version)
 */
app.get('/api/makypay/status/:uuid', authenticateRequest, async (req, res) => {
  try {
    const { uuid } = req.params;

    if (!uuid) {
      return res.status(400).json({
        error: 'Missing transaction UUID',
        message: 'UUID parameter is required'
      });
    }

    // Check MakyPay API for status
    const response = await axios.get(
      `${MAKYPAY_API_BASE}/transactions/${uuid}`,
      {
        headers: {
          'Authorization': `Basic ${MAKYPAY_AUTH}`
        },
        timeout: 15000
      }
    );

    const statusData = response.data;

    // Update local database
    await supabase
      .from('makypay_transactions')
      .update({
        status: statusData.status,
        provider_response: statusData,
        updated_at: new Date().toISOString()
      })
      .eq('uuid', uuid);

    res.json({
      success: true,
      uuid: statusData.uuid || uuid,
      reference: statusData.reference,
      status: statusData.status,
      amount: statusData.amount,
      currency: statusData.currency || 'UGX',
      providerReference: statusData.provider_reference
    });

  } catch (error) {
    console.error('Status check error:', error.response?.data || error.message);
    
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || 'Status check failed',
      message: error.response?.data?.message || error.message
    });
  }
});

/**
 * POST /api/makypay/complete
 * Complete subscription after successful payment
 */
app.post('/api/makypay/complete', authenticateRequest, async (req, res) => {
  try {
    const { userId, transactionId, subscriptionPlan, subscriptionDuration } = req.body;

    if (!userId || !transactionId || !subscriptionPlan) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'userId, transactionId, and subscriptionPlan are required'
      });
    }

    if (userId !== req.user.id) {
      return res.status(403).json({
        error: 'User ID mismatch'
      });
    }

    // Verify transaction exists in our database
    const { data: transaction, error: transactionError } = await supabase
      .from('makypay_transactions')
      .select('*')
      .eq('uuid', transactionId)
      .eq('user_id', userId)
      .single();

    console.log('Transaction lookup result:', { transaction, transactionError });

    if (!transaction) {
      return res.status(404).json({
        error: 'Transaction not found',
        message: 'Transaction not found in database'
      });
    }

    console.log('Transaction status:', transaction.status);

    // If transaction is still processing, try to update status from MakyPay
    if (transaction.status === 'processing') {
      try {
        console.log('Transaction still processing, checking MakyPay API...');
        const makyPayResponse = await axios.get(
          `${MAKYPAY_API_BASE}/transactions/${transactionId}`,
          {
            headers: {
              'Authorization': `Basic ${MAKYPAY_AUTH}`,
              'Accept': 'application/json'
            },
            timeout: 10000
          }
        );

        const makyPayData = makyPayResponse.data?.data || makyPayResponse.data;
        const makyPayTransaction = makyPayData.transaction || makyPayData;
        
        console.log('MakyPay status:', makyPayTransaction.status);

        // Update local transaction with MakyPay status
        if (makyPayTransaction.status) {
          await supabase
            .from('makypay_transactions')
            .update({
              status: makyPayTransaction.status,
              provider_reference: makyPayTransaction.provider_reference,
              provider_response: makyPayData,
              updated_at: new Date().toISOString()
            })
            .eq('uuid', transactionId);

          transaction.status = makyPayTransaction.status;
        }
      } catch (makyPayError) {
        console.error('Failed to check MakyPay status:', makyPayError.response?.data || makyPayError.message);
        // Continue with local status if MakyPay check fails
      }
    }

    if (transaction.status !== 'completed' && transaction.status !== 'succeeded' && transaction.status !== 'sandbox') {
      return res.status(400).json({
        error: 'Transaction not completed',
        message: `Payment status is ${transaction.status}. It must be completed before activating subscription.`,
        currentStatus: transaction.status
      });
    }

    // Calculate expiry
    const now = new Date();
    const durationDays = subscriptionDuration || 30;
    const expiresAt = new Date(now.getTime() + (durationDays * 24 * 60 * 60 * 1000));

    // Upsert subscription record (update if exists, insert if new)
    const { data: subscriptionData, error: insertError } = await supabase
      .from('subscriptions')
      .upsert({
        user_id: userId,
        plan: subscriptionPlan,
        payment_method: transaction.payment_method || 'makypay_mobile_money',
        subscribed_at: now.toISOString(),
        end_date: expiresAt.toISOString(),
        transaction_uuid: transactionId,
        started_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        status: 'active',
        updated_at: now.toISOString()
      }, {
        onConflict: 'user_id'
      })
      .select();

    if (insertError) {
      console.error('Subscription insert error:', insertError);
      throw insertError;
    }

    console.log('Subscription created:', subscriptionData);

    res.json({
      success: true,
      message: 'Subscription activated successfully',
      expiresAt: expiresAt.toISOString(),
      subscription: subscriptionData
    });

  } catch (error) {
    console.error('Subscription completion error:', error);
    
    res.status(500).json({
      error: 'Subscription activation failed',
      message: error.message
    });
  }
});

/**
 * POST /api/makypay/complete-subscription (deprecated - use /complete)
 * Complete subscription after successful payment
 */
app.post('/api/makypay/complete-subscription', authenticateRequest, async (req, res) => {
  try {
    const { userId, transactionUuid, subscriptionPlan, subscriptionDuration, paymentMethod } = req.body;

    if (!userId || !transactionUuid || !subscriptionPlan) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'userId, transactionUuid, and subscriptionPlan are required'
      });
    }

    if (userId !== req.user.id) {
      return res.status(403).json({
        error: 'User ID mismatch'
      });
    }

    // Verify transaction is completed
    const { data: transaction } = await supabase
      .from('makypay_transactions')
      .select('*')
      .eq('uuid', transactionUuid)
      .eq('user_id', userId)
      .single();

    if (!transaction) {
      return res.status(404).json({
        error: 'Transaction not found'
      });
    }

    if (transaction.status !== 'completed' && transaction.status !== 'successful') {
      return res.status(400).json({
        error: 'Transaction not completed',
        message: 'Payment must be completed before activating subscription'
      });
    }

    // Calculate expiry
    const now = new Date();
    const expiresAt = new Date(now.getTime() + (subscriptionDuration * 24 * 60 * 60 * 1000));

    // Insert new subscription record (each payment creates a new record)
    const { error: insertError } = await supabase
      .from('user_subscriptions')
      .insert({
        user_id: userId,
        subscription_type: subscriptionPlan,
        payment_method: paymentMethod,
        transaction_uuid: transactionUuid,
        started_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        status: 'active',
        updated_at: now.toISOString()
      });

    if (insertError) {
      throw insertError;
    }

    res.json({
      success: true,
      message: 'Subscription activated successfully',
      expiresAt: expiresAt.toISOString()
    });

  } catch (error) {
    console.error('Subscription completion error:', error);
    
    res.status(500).json({
      error: 'Subscription activation failed',
      message: error.message
    });
  }
});

/**
 * POST /api/makypay/callback
 * Webhook endpoint for MakyPay payment notifications
 */
app.post('/api/makypay/callback', async (req, res) => {
  try {
    console.log('MakyPay callback received:', req.body);

    const { uuid, status, reference, amount } = req.body;

    if (uuid) {
      // Update transaction status
      await supabase
        .from('makypay_transactions')
        .update({
          status: status,
          provider_response: req.body,
          updated_at: new Date().toISOString()
        })
        .eq('uuid', uuid);
    }

    res.json({ success: true, message: 'Callback processed' });
  } catch (error) {
    console.error('Callback processing error:', error);
    res.status(500).json({ error: 'Callback processing failed' });
  }
});

/**
 * POST /api/makypay/test-subscription
 * TEST ENDPOINT: Simulate a completed payment and activate subscription WITHOUT real money
 * Remove this endpoint in production!
 */
app.post('/api/makypay/test-subscription', authenticateRequest, async (req, res) => {
  try {
    const { userId, subscriptionPlan, subscriptionDuration } = req.body;

    if (!userId || !subscriptionPlan) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'userId and subscriptionPlan are required'
      });
    }

    // Verify userId matches authenticated user
    if (userId !== req.user.id) {
      return res.status(403).json({
        error: 'User ID mismatch',
        message: 'Cannot activate subscription for another user'
      });
    }

    const testTransactionUuid = uuidv4();
    const now = new Date();
    const durationDays = subscriptionDuration || 30;
    const expiresAt = new Date(now.getTime() + (durationDays * 24 * 60 * 60 * 1000));

    // 1. Create a fake completed transaction in database
    const { data: testTransaction, error: transactionError } = await supabase
      .from('makypay_transactions')
      .insert({
        user_id: userId,
        uuid: testTransactionUuid,
        reference: `TEST-${uuidv4()}`,
        amount: 0,
        currency: 'UGX',
        phone_number: '256000000000',
        payment_method: 'test_payment',
        status: 'completed',
        description: `TEST: ${subscriptionPlan}`,
        provider: 'test',
        response_data: { test: true, message: 'Test transaction - no money charged' }
      })
      .select()
      .single();

    if (transactionError) {
      console.error('Test transaction creation error:', transactionError);
      throw transactionError;
    }

    console.log('✅ Test transaction created:', testTransaction);

    // 2. Upsert subscription (same logic as real payment)
    const { data: subscriptionData, error: insertError } = await supabase
      .from('subscriptions')
      .upsert({
        user_id: userId,
        plan: subscriptionPlan,
        payment_method: 'test_payment',
        subscribed_at: now.toISOString(),
        end_date: expiresAt.toISOString(),
        transaction_uuid: testTransactionUuid,
        started_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        status: 'active',
        updated_at: now.toISOString()
      }, {
        onConflict: 'user_id'
      })
      .select();

    if (insertError) {
      console.error('Test subscription insert error:', insertError);
      throw insertError;
    }

    console.log('✅ Test subscription created:', subscriptionData);

    res.json({
      success: true,
      message: '🎉 TEST subscription activated successfully (NO MONEY CHARGED)',
      test: true,
      expiresAt: expiresAt.toISOString(),
      subscription: subscriptionData,
      transaction: testTransaction
    });

  } catch (error) {
    console.error('Test subscription error:', error);
    
    res.status(500).json({
      error: 'Test subscription activation failed',
      message: error.message
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `The endpoint ${req.path} does not exist`,
    availableEndpoints: [
      'GET /api/health',
      'POST /api/makypay/collect',
      'POST /api/makypay/card/collect',
      'GET /api/makypay/status/:uuid',
      'POST /api/makypay/complete-subscription'
    ]
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: error.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Kilax MakyPay API server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔐 CORS origin: ${process.env.CORS_ORIGIN || '*'}`);
});

module.exports = app;
