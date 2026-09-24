# 🚨 Quick Fix for kilax-8hq8.vercel.app

Your Vercel deployment exists but the API is failing because of missing environment variables.

## ✅ Step 1: Check Current Environment Variables

```powershell
cd d:\kilax-hosted\kilaxhostedattg
vercel env ls
```

## 🔑 Step 2: Add Required Environment Variables

You need to add these 4 variables:

### Variable 1: MAKYPAY_API_KEY
```powershell
vercel env add MAKYPAY_API_KEY
```
When prompted, enter: `maky_v1_pub_FmtAvovF06zOeYPdLvR0`
Select: **Production, Preview, Development** (press Space to select all, Enter to confirm)

### Variable 2: MAKYPAY_API_SECRET
```powershell
vercel env add MAKYPAY_API_SECRET
```
When prompted, enter: `maky_v1_sec_8xhMPz7kXzhkWEkNhqcKrCiX11MQQaZV`
Select: **Production, Preview, Development**

### Variable 3: SUPABASE_URL
```powershell
vercel env add SUPABASE_URL
```
When prompted, enter your Supabase URL: `https://YOUR-PROJECT.supabase.co`
Select: **Production, Preview, Development**

**Where to find it:** Supabase Dashboard → Settings → API → Project URL

### Variable 4: SUPABASE_SERVICE_KEY
```powershell
vercel env add SUPABASE_SERVICE_KEY
```
When prompted, enter your Supabase service role key
Select: **Production, Preview, Development**

**Where to find it:** Supabase Dashboard → Settings → API → Project API keys → **service_role** (click "Reveal" to copy)

⚠️ **Important**: This is a SECRET key - never share it or commit it to Git!

## 🚀 Step 3: Redeploy

```powershell
cd d:\kilax-hosted\kilaxhostedattg
vercel --prod
```

This will:
1. Upload your updated code (with express, cors, axios dependencies)
2. Build with the environment variables
3. Deploy to production

## ✅ Step 4: Test Your API

After deployment completes (about 1-2 minutes), test:

```powershell
.\test-api.ps1 -ApiUrl "https://kilax-8hq8.vercel.app"
```

Or test manually:
```powershell
curl https://kilax-8hq8.vercel.app/api/health
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

## 🗄️ Step 5: Setup Database (If Not Done)

1. Go to Supabase Dashboard → SQL Editor
2. Copy contents of `database-setup.sql`
3. Paste and click **Run**

## 📱 Step 6: Update Flutter App

Edit your Flutter app config:

**File**: `d:\Kilax\conven\conven\Kilax\lib\config\app_config.dart`

Change:
```dart
static const String _fallbackBackendUrl = 'https://www.kilaxmovies.com';
```

To:
```dart
static const String _fallbackBackendUrl = 'https://kilax-8hq8.vercel.app';
```

Then rebuild your app:
```bash
cd d:\Kilax\conven\conven\Kilax
flutter clean
flutter pub get
flutter build apk --release
```

## 🎉 Done!

Your payment system should now work:
- ✅ API endpoint active at `https://kilax-8hq8.vercel.app/api/makypay/...`
- ✅ Mobile money payments working
- ✅ Card payments working
- ✅ No more "endpoint disabled" errors
- ✅ No more Chinese character issue (also fixed in Flutter code)

## 🔍 Troubleshooting

### Problem: Still getting 500 error after deployment

**Check Vercel logs:**
```powershell
vercel logs
```

Look for errors like:
- `Missing required environment variable: MAKYPAY_API_KEY` → Add the missing variable
- `Authentication failed` → Check SUPABASE_SERVICE_KEY is correct

### Problem: Environment variables not updating

**Pull latest environment variables:**
```powershell
vercel env pull
```

Then redeploy:
```powershell
vercel --prod
```

### Problem: Can't find Supabase service key

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Settings** (gear icon in sidebar)
4. Click **API**
5. Scroll to "Project API keys"
6. Find **service_role** key
7. Click "Reveal" and copy

## 📞 Need Help?

Check the full `DEPLOYMENT-GUIDE.md` for detailed instructions.
