import { supabase, supabaseAdmin } from './supabase';

export class MakyPayService {
  private static readonly BASE_URL = 'https://wire-api.makylegacy.com/api/v1';

  private static getAuthHeader(): string {
    const authHeader = process.env.MAKYPAY_BASE64_AUTH;
    if (authHeader) return `Basic ${authHeader}`;

    const apiKey = process.env.MAKYPAY_API_KEY;
    const apiSecret = process.env.MAKYPAY_API_SECRET;
    if (apiKey && apiSecret) {
      return `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;
    }
    throw new MakyPayException('MakyPay credentials not configured. Please set MAKYPAY_BASE64_AUTH or MAKYPAY_API_KEY and MAKYPAY_API_SECRET in environment variables.');
  }

  private static extractErrorMessage(data: any, httpStatus: number): string {
    if (!data) return `API request failed with status ${httpStatus}`;
    return (
      data.message ||
      data.error ||
      data.data?.message ||
      (Array.isArray(data.errors) ? data.errors.join('; ') : null) ||
      (typeof data.errors === 'string' ? data.errors : null) ||
      `API request failed with status ${httpStatus}`
    );
  }

  private static async request<T>(
    endpoint: string,
    options: { method?: string; body?: any; isFormData?: boolean } = {}
  ): Promise<T> {
    const { method = 'GET', body, isFormData = false } = options;
    const headers: Record<string, string> = {
      Authorization: this.getAuthHeader(),
      Accept: 'application/json',
    };
    let requestBody: any;
    if (body) {
      if (isFormData) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        requestBody = new URLSearchParams(body).toString();
      } else {
        headers['Content-Type'] = 'application/json';
        requestBody = JSON.stringify(body);
      }
    }
    try {
      const response = await fetch(`${this.BASE_URL}${endpoint}`, { method, headers, body: requestBody });
      const responseText = await response.text();
      let data: any;
      try {
        data = JSON.parse(responseText);
      } catch {
        console.error('MakyPay returned non-JSON response:', responseText.substring(0, 500));
        throw new MakyPayException(`MakyPay returned invalid response (HTTP ${response.status})`);
      }

      if (!response.ok || (data && data.status === 'error')) {
        const errorMsg = this.extractErrorMessage(data, response.status);
        throw new MakyPayException(errorMsg);
      }
      return data;
    } catch (error) {
      if (error instanceof MakyPayException) throw error;
      throw new MakyPayException(`Network error: ${error}`);
    }
  }

  static formatPhoneNumber(phone: string): string {
    phone = phone.replace(/\D/g, '');
    if (!phone.startsWith('256')) {
      phone = '256' + (phone.startsWith('0') ? phone.substring(1) : phone);
    }
    if (phone.length !== 12) {
      throw new MakyPayException('Invalid phone number format. Expected 12 digits (256XXXXXXXXX)');
    }
    return phone;
  }

  static detectProvider(phone: string): 'mtn' | 'airtel' | 'unknown' {
    const formatted = this.formatPhoneNumber(phone);
    // MTN: 256 + (77, 78, 76, 79, 39, 31)
    if (/^256(77|78|76|79|39|31)/.test(formatted)) return 'mtn';
    // Airtel: 256 + (70, 74, 75, 73)
    if (/^256(70|74|75|73)/.test(formatted)) return 'airtel';
    return 'unknown';
  }

  static generateReference(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  static async collectMobileMoney(params: {
    userId: string;
    phoneNumber: string;
    amount: number;
    description: string;
    callbackUrl?: string;
  }): Promise<MakyPayCollectionResult> {
    const { userId, phoneNumber, amount, description, callbackUrl } = params;
    if (amount < 500 || amount > 10000000) {
      throw new MakyPayException('Amount must be between 500 and 10,000,000 UGX');
    }
    const formattedPhone = this.formatPhoneNumber(phoneNumber);
    const provider = this.detectProvider(formattedPhone);
    if (provider === 'unknown') {
      const prefix = formattedPhone.substring(3, 5);
      throw new MakyPayException(
        `Unsupported phone prefix (0${prefix}). MakyPay supports MTN (077/078/076/079/039/031) and Airtel (070/073/074/075) only.`
      );
    }

    const reference = this.generateReference();
    const requestBody: any = {
      phone_number: formattedPhone,
      amount: Math.round(amount),
      country: 'UG',
      reference,
      description: description.substring(0, 255),
    };
    if (callbackUrl) requestBody.callback_url = callbackUrl;

    const response = await this.request<MakyPayApiResponse>('/collections/collect-money', {
      method: 'POST',
      body: requestBody,
      isFormData: true,
    });

    const txData = response.data?.transaction;
    const colData = response.data?.collection;

    const result: MakyPayCollectionResult = {
      uuid: txData?.uuid || reference,
      reference: txData?.reference || reference,
      status: txData?.status || 'processing',
      amount: colData?.amount?.raw || amount,
      phoneNumber: colData?.phone_number || formattedPhone,
      provider: (colData?.provider as any) || provider,
      description,
      isCompleted: txData?.status === 'completed' || txData?.status === 'succeeded',
      isFailed: txData?.status === 'failed',
      isPending: txData?.status === 'processing' || txData?.status === 'pending',
    };
    await this.storeTransaction(userId, result, 'collection');
    return result;
  }

  static async collectCard(params: {
    userId: string;
    amount: number;
    description: string;
    callbackUrl?: string;
  }): Promise<MakyPayCardResult> {
    const { userId, amount, description, callbackUrl } = params;
    const reference = this.generateReference();
    const requestBody: any = {
      method: 'card',
      amount: Math.round(amount),
      country: 'UG',
      reference,
      description: description.substring(0, 255),
    };
    if (callbackUrl) requestBody.callback_url = callbackUrl;

    const response = await this.request<MakyPayCardApiResponse>('/collections/collect-money', {
      method: 'POST',
      body: requestBody,
      isFormData: true,
    });

    const txData = response.data?.transaction;

    const result: MakyPayCardResult = {
      uuid: txData?.uuid || reference,
      reference: txData?.reference || reference,
      redirectUrl: response.data?.redirect_url || '',
      status: txData?.status || 'processing',
      amount,
      description,
    };
    await this.storeTransaction(userId, { ...result, phoneNumber: '', provider: 'card' }, 'collection');
    return result;
  }

  static async checkTransactionStatus(transactionId: string): Promise<MakyPayTransaction> {
    const response = await this.request<any>(`/transactions/${transactionId}`);
    const tx = response.data?.transaction || response.data || {};
    const amountVal = typeof tx.amount === 'object' ? (tx.amount?.raw || 0) : (tx.amount || 0);
    return {
      uuid: tx.uuid || transactionId,
      reference: tx.reference || '',
      status: tx.status || 'processing',
      amount: amountVal,
      provider: tx.provider || 'unknown',
      providerReference: tx.provider_reference || response.data?.collection?.provider_transaction_id,
      createdAt: tx.created_at || new Date().toISOString(),
      updatedAt: tx.updated_at || new Date().toISOString(),
    };
  }

  static async getBalance(): Promise<{ balance: number; currency: string }> {
    const response = await this.request<any>('/wallet/balance');
    const bal = response.data?.balance || response.data?.account?.available_balance || response.data?.account?.balance;
    return {
      balance: bal?.raw || (typeof bal === 'number' ? bal : 0),
      currency: bal?.currency || 'UGX',
    };
  }

  static async getAccount(): Promise<any> {
    return this.request<any>('/account');
  }

  static async completeSubscriptionPayment(params: {
    userId: string;
    transactionId: string;
    subscriptionPlan: string;
    subscriptionDuration?: number;
  }): Promise<void> {
    const { userId, transactionId, subscriptionPlan, subscriptionDuration } = params;
    
    if (!supabaseAdmin) {
      throw new MakyPayException('Server configuration error: SUPABASE_SERVICE_ROLE_KEY is not set');
    }

    const transaction = await this.checkTransactionStatus(transactionId);
    const isSuccess = ['completed', 'succeeded', 'sandbox'].includes((transaction.status || '').toLowerCase());
    if (!isSuccess) {
      throw new MakyPayException(`Payment not completed. Status: ${transaction.status}`);
    }

    // Look up authoritative plan from plans table
    const planNameNormalized = subscriptionPlan.toLowerCase().trim();
    let durationDays = subscriptionDuration || 30;
    let canonicalPlanName = planNameNormalized;

    try {
      const { data: planRecord } = await supabaseAdmin
        .from('plans')
        .select('name, duration_in_days, amount')
        .ilike('name', planNameNormalized)
        .maybeSingle();

      if (planRecord) {
        durationDays = planRecord.duration_in_days || durationDays;
        canonicalPlanName = planRecord.name.toLowerCase();
      }
    } catch (e) {
      console.warn('Plan duration lookup fallback to defaults:', e);
    }

    const now = new Date();
    const expiryDate = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

    // Check if user already has an active subscription of the same or higher expiry
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('subscription, subscription_expiry_date, subscription_start_date')
      .eq('id', userId)
      .maybeSingle();

    if (profile?.subscription_expiry_date) {
      const currentExpiry = new Date(profile.subscription_expiry_date);
      // If subscription was activated in the last 2 minutes, avoid duplicate runs
      if (currentExpiry > now && (now.getTime() - new Date(profile.subscription_start_date || 0).getTime() < 120000)) {
        console.log(`Subscription for user ${userId} was just activated. Skipping duplicate activation.`);
        return;
      }
    }

    // 1. Update user profile FIRST (this is the critical write for access control)
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .update({
        subscription: canonicalPlanName,
        subscription_start_date: now.toISOString(),
        subscription_expiry_date: expiryDate.toISOString(),
      })
      .eq('id', userId);

    if (profileError) {
      console.error('CRITICAL: Profile subscription update failed:', profileError);
      throw new MakyPayException('Failed to activate subscription in profile');
    }

    // 2. Insert subscription ledger record (non-critical)
    const { error: subscriptionError } = await supabaseAdmin.from('subscriptions').insert({
      user_id: userId,
      plan: canonicalPlanName,
      payment_method: 'makypay_mobile_money',
      subscribed_at: now.toISOString(),
    });
    if (subscriptionError) {
      console.error('Non-critical: Subscriptions ledger insert warning:', subscriptionError);
    }

    // 3. Mark transaction as completed in DB
    await this.updateTransactionStatus(transactionId, 'completed', null);
  }

  static async sendMoney(params: {
    phoneNumber: string;
    amount: number;
    description: string;
    callbackUrl?: string;
  }): Promise<MakyPayCollectionResult> {
    const { phoneNumber, amount, description, callbackUrl } = params;
    if (amount < 500 || amount > 10000000) {
      throw new MakyPayException('Amount must be between 500 and 10,000,000 UGX');
    }
    const formattedPhone = this.formatPhoneNumber(phoneNumber);
    const reference = this.generateReference();
    const requestBody: any = {
      phone_number: formattedPhone,
      amount: Math.round(amount),
      country: 'UG',
      reference,
      description: description.substring(0, 255),
    };
    if (callbackUrl) requestBody.callback_url = callbackUrl;

    const response = await this.request<MakyPayApiResponse>('/disbursements/send-money', {
      method: 'POST',
      body: requestBody,
      isFormData: true,
    });

    const txData = response.data?.transaction;
    return {
      uuid: txData?.uuid || reference,
      reference: txData?.reference || reference,
      status: txData?.status || 'processing',
      amount,
      phoneNumber: formattedPhone,
      provider: this.detectProvider(formattedPhone),
      description,
      isCompleted: txData?.status === 'completed' || txData?.status === 'succeeded',
      isFailed: txData?.status === 'failed',
      isPending: txData?.status === 'processing' || txData?.status === 'pending',
    };
  }

  static async createPaymentLink(params: {
    title: string;
    amount: number;
    paymentMethods?: ('mobile_money' | 'card')[];
  }): Promise<{ url: string; uuid: string }> {
    const { title, amount, paymentMethods = ['mobile_money', 'card'] } = params;
    if (amount < 100 || amount > 1000000) {
      throw new MakyPayException('Amount must be between 100 and 1,000,000 UGX');
    }
    const response = await this.request<any>('/payment-links', {
      method: 'POST',
      body: { title, type: 'payment', amount: Math.round(amount), is_fixed: true, currency: 'UGX', country: 'UG', payment_methods: paymentMethods },
    });
    return {
      url: response.data?.payment_url || `https://wire-api.makylegacy.com/pay/${response.data?.uuid}`,
      uuid: response.data?.uuid,
    };
  }

  static async verifyPhone(phoneNumber: string): Promise<any> {
    const formattedPhone = this.formatPhoneNumber(phoneNumber);
    const response = await this.request<any>('/phone-verification/verify', {
      method: 'POST',
      body: { phone_number: formattedPhone },
    });
    return response.data;
  }

  static async handleWebhook(payload: any): Promise<void> {
    // Support both direct payload and wrapped payload ({ data: ... })
    const eventPayload = payload?.data?.transaction ? payload.data : payload;
    const eventType: string = payload.event_type || eventPayload?.event_type || '';
    const transaction = eventPayload?.transaction;
    const collection = eventPayload?.collection;

    if (!transaction?.uuid && !transaction?.reference) {
      console.warn('Webhook received without transaction identifier:', payload);
      return;
    }

    const txId = transaction.uuid || transaction.reference;
    const isCompleted = eventType === 'collection.completed' || transaction.status === 'completed' || transaction.status === 'succeeded';
    const isFailed = eventType === 'collection.failed' || eventType === 'collection.cancelled' || transaction.status === 'failed';

    await this.updateTransactionStatus(
      txId,
      transaction.status || (isCompleted ? 'completed' : isFailed ? 'failed' : 'processing'),
      isFailed ? 'Payment failed or cancelled' : null
    );

    if (isCompleted) {
      // Find the associated transaction record to retrieve user_id and plan
      let txRecord: any = null;
      if (supabaseAdmin) {
        const { data } = await supabaseAdmin
          .from('makypay_transactions')
          .select('user_id, description, amount')
          .or(`transaction_uuid.eq.${txId},reference.eq.${txId}`)
          .maybeSingle();
        txRecord = data;
      }

      if (txRecord?.user_id && txRecord?.description) {
        const planMatch = txRecord.description.match(/(basic|standard|premium|pro|enterprise)/i);
        const planName = planMatch ? planMatch[1].toLowerCase() : 'basic';

        await this.completeSubscriptionPayment({
          userId: txRecord.user_id,
          transactionId: txId,
          subscriptionPlan: planName,
        });
      }
    }
  }

  private static async storeTransaction(
    userId: string,
    transaction: any,
    type: 'collection' | 'disbursement'
  ): Promise<void> {
    try {
      const dbClient = supabaseAdmin || supabase;
      const { error } = await dbClient.from('makypay_transactions').insert({
        user_id: userId,
        transaction_uuid: transaction.uuid,
        reference: transaction.reference,
        amount: transaction.amount,
        currency: 'UGX',
        phone_number: transaction.phoneNumber || 'unknown',
        provider: transaction.provider || null,
        status: transaction.status || 'processing',
        description: transaction.description || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      if (error) console.error('Error storing makypay tx:', error);
    } catch (error) {
      console.error('Failed to store transaction:', error);
    }
  }

  private static async updateTransactionStatus(
    uuidOrRef: string,
    status: string,
    errorMessage: string | null
  ): Promise<void> {
    try {
      const updateData: any = { status, updated_at: new Date().toISOString() };
      if (errorMessage) updateData.error_message = errorMessage;
      const dbClient = supabaseAdmin || supabase;
      const { error } = await dbClient
        .from('makypay_transactions')
        .update(updateData)
        .or(`transaction_uuid.eq.${uuidOrRef},reference.eq.${uuidOrRef}`);
      if (error) console.error('Failed to update transaction:', error);
    } catch (error) {
      console.error('Failed to update transaction:', error);
    }
  }

  static async getTransactionHistory(userId: string): Promise<any[]> {
    try {
      const { data, error } = await supabase
        .from('makypay_transactions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) { console.error('Failed to get transactions:', error); return []; }
      return data || [];
    } catch (error) {
      console.error('Failed to get transactions:', error);
      return [];
    }
  }
}

export interface MakyPayCollectionResult {
  uuid: string;
  reference: string;
  status: string;
  amount: number;
  phoneNumber: string;
  provider: 'mtn' | 'airtel' | 'unknown' | 'card';
  description: string;
  isCompleted: boolean;
  isFailed: boolean;
  isPending: boolean;
}

export interface MakyPayCardResult {
  uuid: string;
  reference: string;
  redirectUrl: string;
  status: string;
  amount: number;
  description: string;
}

export interface MakyPayTransaction {
  uuid: string;
  reference: string;
  status: string;
  amount: number;
  provider: string;
  providerReference?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MakyPayWebhook {
  event_type: 'collection.completed' | 'collection.failed' | 'collection.cancelled' | 'disbursement.completed' | 'disbursement.failed';
  transaction: {
    uuid: string;
    reference: string;
    status: string;
    amount: { formatted: string; raw: number; currency: string };
  };
  collection?: { provider: string; phone_number: string; provider_reference?: string; provider_transaction_id?: string };
  metadata?: { response_timestamp: string };
}

interface MakyPayApiResponse {
  status: string;
  message: string;
  data: {
    transaction: { uuid: string; reference: string; status: string };
    collection: {
      amount: { formatted: string; raw: number; currency: string };
      provider: string;
      phone_number: string;
    };
  };
}

interface MakyPayCardApiResponse {
  status: string;
  message: string;
  data: {
    transaction: { uuid: string; reference: string; status: string };
    redirect_url: string;
    collection: {
      amount: { formatted: string; raw: number; currency: string };
      provider: string;
    };
  };
}

export class MakyPayException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MakyPayException';
  }
}

