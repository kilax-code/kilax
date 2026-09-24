# 🚀 Kilax MakyPay Backend - Vercel Deployment Guide

Complete step-by-step guide to deploy your MakyPay payment backend to Vercel.

---

## 📋 Prerequisites Checklist

- [ ] Vercel account ([Sign up free](https://vercel.com/signup))
- [ ] Node.js installed (v18 or higher)
- [ ] Git installed
- [ ] MakyPay API credentials
- [ ] Supabase project with service role key

---

## 🔧 Step 1: Prepare Your Environment

### 1.1 Install Vercel CLI

```bash
npm install -g vercel
```

### 1.2 Login to Vercel

```bash
vercel login
```

Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email).

---

## 🗄️ Step 2: Setup Supabase Database

### 2.1 Run Database Setup

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Copy the contents of `database-setup.sql`
4. Paste and click **Run**
5. Verify you see "Database setup completed successfully!"

### 2.2 Get Your Supabase Service Role Key

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy your **service_role** key (under "Project API keys")
3. ⚠️ **IMPORTANT**: Keep this secret! Never commit to Git!

---

## 🔑 Step 3: Get MakyPay Credentials

You already have these in your Flutter app config:

- **API Key**: `maky_v1_pub_FmtAvovF06zOeYPdLvR0`
- **API Secret**: `maky_v1_sec_8xhMPz7kXzhkWEkNhqcKrCiX11MQQaZV`

---

## 📦 Step 4: Install Dependencies

```bash
cd d:\kilax-hosted\kilaxhostedattg
cd api
npm install
```

---

## 🧪 Step 5: Test Locally (Optional but Recommended)

### 5.1 Create `.env` file

```bash
# In the root directory (d:\kilax-hosted\kilaxhostedattg)
copy .env.example .env
```

### 5.2 Edit `.env` with your values

```env
MAKYPAY_API_KEY=maky_v1_pub_FmtAvovF06zOeYPdLvR0
MAKYPAY_API_SECRET=maky_v1_sec_8xhMPz7kXzhkWEkNhqcKrCiX11MQQaZV
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_SERVICE_KEY=YOUR_SERVICE_ROLE_KEY
```

### 5.3 Test locally

```bash
cd api
node index.js
```

You should see:
```
✅ Kilax MakyPay API server running on port 3000
```

Test health endpoint:
```bash
curl http://localhost:3000/api/health
```

---

## 🌐 Step 6: Deploy to Vercel

### 6.1 Initialize Vercel Project

```bash
# Make sure you're in d:\kilax-hosted\kilaxhostedattg
cd d:\kilax-hosted\kilaxhostedattg
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → `kilax-payment-api` (or your choice)
- **Directory?** → `.` (current directory)
- **Override settings?** → No

Vercel will deploy and give you a URL like:
```
https://kilax-payment-api.vercel.app
```

### 6.2 Add Environment Variables

You have two options:

**Option A: Using Vercel CLI**

```bash
vercel env add MAKYPAY_API_KEY
# Paste: maky_v1_pub_FmtAvovF06zOeYPdLvR0
# Select: Production, Preview, Development

vercel env add MAKYPAY_API_SECRET
# Paste: maky_v1_sec_8xhMPz7kXzhkWEkNhqcKrCiX11MQQaZV

vercel env add SUPABASE_URL
# Paste: https://YOUR-PROJECT.supabase.co

vercel env add SUPABASE_SERVICE_KEY
# Paste: YOUR_SERVICE_ROLE_KEY
```

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - `MAKYPAY_API_KEY`
   - `MAKYPAY_API_SECRET`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`

### 6.3 Redeploy with Environment Variables

```bash
vercel --prod
```

---

## ✅ Step 7: Verify Deployment

### 7.1 Test Health Endpoint

```bash
curl https://YOUR-VERCEL-URL.vercel.app/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "service": "Kilax MakyPay API",
  "version": "1.0.0"
}
```

### 7.2 Check Vercel Logs

```bash
vercel logs
```

Or visit: `https://vercel.com/YOUR-USERNAME/kilax-payment-api`

---

## 📱 Step 8: Update Flutter App

### 8.1 Update App Config

Edit `d:\Kilax\conven\conven\Kilax\lib\config\app_config.dart`:

```dart
static const String _fallbackBackendUrl = 'https://YOUR-VERCEL-URL.vercel.app';
```

Replace `YOUR-VERCEL-URL` with your actual Vercel deployment URL.

### 8.2 Rebuild Your App

```bash
cd d:\Kilax\conven\conven\Kilax
flutter clean
flutter pub get
flutter build apk --release
```

---

## 🧪 Step 9: Test Payment Flow

### 9.1 Test Mobile Money Payment

1. Open your Kilax app
2. Go to Premium Plans
3. Select a subscription
4. Choose "Mobile Money"
5. Enter a test phone number: `256771234567`
6. Click "Pay Now"

### 9.2 Monitor Logs

Watch Vercel logs in real-time:

```bash
vercel logs --follow
```

---

## 🔒 Security Checklist

- [x] API secrets stored in Vercel environment variables (not in code)
- [x] `.env` file added to `.gitignore`
- [x] Supabase RLS policies enabled
- [x] JWT authentication required on all endpoints
- [x] User ID validation prevents cross-user payments
- [x] CORS configured properly

---

## 🐛 Troubleshooting

### Problem: "404 Not Found" on API endpoints

**Solution**: Check `vercel.json` routing configuration. Make sure it exists and points to `api/index.js`.

### Problem: "Authentication failed"

**Solution**: 
1. Verify Supabase JWT token is being sent in Flutter app
2. Check `SUPABASE_SERVICE_KEY` is set correctly in Vercel
3. Test token with: `curl -H "Authorization: Bearer YOUR_TOKEN" https://your-url.vercel.app/api/health`

### Problem: "Missing required environment variable"

**Solution**: Add the missing variable in Vercel dashboard, then redeploy:
```bash
vercel --prod
```

### Problem: MakyPay API errors

**Solution**: 
1. Verify MakyPay credentials are correct
2. Check MakyPay API status
3. Test with MakyPay's test environment first

---

## 📊 Monitoring

### View Deployment Logs

```bash
vercel logs
vercel logs --follow  # Real-time logs
```

### View in Dashboard

Visit: `https://vercel.com/YOUR-USERNAME/kilax-payment-api`

### Check Database Transactions

In Supabase:
```sql
SELECT * FROM makypay_transactions 
ORDER BY created_at DESC 
LIMIT 10;
```

---

## 🎉 Success Indicators

You'll know everything is working when:

1. ✅ Health endpoint returns `{"status": "ok"}`
2. ✅ Flutter app shows payment screen without error banner
3. ✅ Payment initiation returns transaction UUID
4. ✅ Transactions appear in Supabase `makypay_transactions` table
5. ✅ Mobile money prompts appear on phone
6. ✅ Successful payments activate subscriptions

---

## 📞 Need Help?

- **Vercel Issues**: [Vercel Support](https://vercel.com/support)
- **MakyPay Issues**: [MakyPay Support](https://makypay.com/support)
- **Supabase Issues**: [Supabase Discord](https://discord.supabase.com)

---

## 🚀 Next Steps

After successful deployment:

1. Test with small amounts first
2. Monitor logs for any errors
3. Set up Vercel production environment
4. Configure custom domain (optional)
5. Set up monitoring alerts
6. Document your API for your team

---

**Congratulations! Your MakyPay payment backend is now live! 🎊**
