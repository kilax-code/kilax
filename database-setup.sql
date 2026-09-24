-- Kilax MakyPay Backend Database Setup
-- Run this in your Supabase SQL Editor

-- 1. Create makypay_transactions table
CREATE TABLE IF NOT EXISTS makypay_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  uuid TEXT NOT NULL UNIQUE,
  reference TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'UGX' NOT NULL,
  phone_number TEXT,
  payment_method TEXT NOT NULL,
  status TEXT NOT NULL,
  description TEXT,
  provider_response JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_makypay_user_id ON makypay_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_makypay_uuid ON makypay_transactions(uuid);
CREATE INDEX IF NOT EXISTS idx_makypay_status ON makypay_transactions(status);
CREATE INDEX IF NOT EXISTS idx_makypay_created_at ON makypay_transactions(created_at DESC);

-- 3. Create user_subscriptions table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
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

-- 4. Create indexes for subscriptions
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_expires_at ON user_subscriptions(expires_at);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE makypay_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

-- 6. Create RLS policies for makypay_transactions
-- Users can view their own transactions
CREATE POLICY "Users can view own transactions"
  ON makypay_transactions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can do everything (for backend API)
CREATE POLICY "Service role full access"
  ON makypay_transactions
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'service_role');

-- 7. Create RLS policies for user_subscriptions
-- Users can view their own subscription
CREATE POLICY "Users can view own subscription"
  ON user_subscriptions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can do everything (for backend API)
CREATE POLICY "Service role full subscription access"
  ON user_subscriptions
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'service_role');

-- 8. Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 9. Add triggers for updated_at
CREATE TRIGGER update_makypay_transactions_updated_at
  BEFORE UPDATE ON makypay_transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_subscriptions_updated_at
  BEFORE UPDATE ON user_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 10. Grant permissions
GRANT ALL ON makypay_transactions TO service_role;
GRANT SELECT ON makypay_transactions TO authenticated;
GRANT ALL ON user_subscriptions TO service_role;
GRANT SELECT ON user_subscriptions TO authenticated;

-- Success message
SELECT 'Database setup completed successfully!' AS message;
