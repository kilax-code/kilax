# Kilax MakyPay Backend API

Secure backend proxy for MakyPay payment gateway integration with the Kilax mobile app.

## 🚀 Features

- ✅ Secure API key storage (server-side only)
- ✅ Supabase JWT authentication
- ✅ Mobile Money payments (MTN & Airtel)
- ✅ Card payments (Visa & Mastercard)
- ✅ Transaction status checking
- ✅ Automatic subscription activation
- ✅ Database transaction logging
- ✅ Webhook support for payment callbacks

## 📋 Prerequisites

1. **Vercel Account** - [Sign up here](https://vercel.com/signup)
2. **MakyPay Account** - Get your API credentials from [MakyPay](https://makypay.com)
3. **Supabase Project** - Your existing Supabase project

## 🔧 Setup Instructions

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Configure Environment Variables

Create a `.env` file (use `.env.example` as template):

```bash
MAKYPAY_API_KEY=maky_v1_pub_FmtAvovF06zOeYPdLvR0
MAKYPAY_API_SECRET=maky_v1_sec_8xhMPz7kXzhkWEkNhqcKrCiX11MQQaZV
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
```

### 3. Deploy to Vercel

```bash
# Login to Vercel
vercel login

# Deploy (from the kilaxhostedattg directory)
vercel

# Add environment variables via Vercel dashboard or CLI:
vercel env add MAKYPAY_API_KEY
vercel env add MAKYPAY_API_SECRET
vercel env add SUPABASE_URL
vercel env add SUPABASE_SERVICE_KEY

# Redeploy with environment variables
vercel --prod
```

### 4. Update Flutter App Configuration

After deployment, update your Flutter app's backend URL:

```dart
// In lib/config/app_config.dart
static const String _fallbackBackendUrl = 'https://your-vercel-url.vercel.app';
```

Or set it via environment variable:
```bash
flutter run --dart-define=BACKEND_URL=https://your-vercel-url.vercel.app
```

## 🔌 API Endpoints

### Health Check
```http
GET /api/health
```

### Mobile Money Payment
```http
POST /api/makypay/collect
Authorization: Bearer {supabase_jwt_token}
Content-Type: application/json

{
  "phoneNumber": "256771234567",
  "amount": 1000,
  "description": "Kilax Premium Subscription",
  "userId": "user-uuid"
}
```

### Card Payment
```http
POST /api/makypay/card/collect
Authorization: Bearer {supabase_jwt_token}
Content-Type: application/json

{
  "amount": 1000,
  "description": "Kilax Premium Subscription",
  "userId": "user-uuid"
}
```

### Check Transaction Status
```http
GET /api/makypay/status/{transaction_uuid}
Authorization: Bearer {supabase_jwt_token}
```

### Complete Subscription
```http
POST /api/makypay/complete-subscription
Authorization: Bearer {supabase_jwt_token}
Content-Type: application/json

{
  "userId": "user-uuid",
  "transactionUuid": "transaction-uuid",
  "subscriptionPlan": "Basic Premium One Day",
  "subscriptionDuration": 1,
  "paymentMethod": "makypay_mobile_money"
}
```

## 🗄️ Database Setup

Create the required tables in Supabase:

```sql
-- MakyPay transactions table
CREATE TABLE IF NOT EXISTS makypay_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  uuid TEXT NOT NULL UNIQUE,
  reference TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'UGX',
  phone_number TEXT,
  payment_method TEXT NOT NULL,
  status TEXT NOT NULL,
  description TEXT,
  provider_response JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User subscriptions table (if not exists)
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  subscription_type TEXT NOT NULL,
  payment_method TEXT,
  transaction_uuid TEXT,
  started_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create indexes
CREATE INDEX idx_makypay_user_id ON makypay_transactions(user_id);
CREATE INDEX idx_makypay_uuid ON makypay_transactions(uuid);
CREATE INDEX idx_makypay_status ON makypay_transactions(status);
```

## 🧪 Testing

Test the API locally:

```bash
# Install dependencies
cd api
npm install

# Start development server
node index.js
```

Test with curl:

```bash
# Health check
curl https://your-vercel-url.vercel.app/api/health

# Test payment (requires valid JWT token)
curl -X POST https://your-vercel-url.vercel.app/api/makypay/collect \
  -H "Authorization: Bearer YOUR_SUPABASE_JWT" \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber":"256771234567","amount":1000,"userId":"user-uuid","description":"Test"}'
```

## 🔒 Security Notes

- ✅ API secrets are stored in Vercel environment variables (never in code)
- ✅ All endpoints require Supabase JWT authentication
- ✅ User ID validation prevents payment for other users
- ✅ Input validation on all payment amounts and parameters
- ✅ CORS configuration limits access to authorized domains

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables are set correctly
3. Ensure Supabase service role key has proper permissions
4. Check MakyPay API credentials are valid

## 📄 License

Private - Kilax Movies Platform
