# Kilax MakyPay Backend - Automated Deployment Script
# Run this script to deploy your backend to Vercel

Write-Host "`n🚀 Kilax MakyPay Backend Deployment Script" -ForegroundColor Cyan
Write-Host "=========================================`n" -ForegroundColor Cyan

# Check if Vercel CLI is installed
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI is not installed." -ForegroundColor Red
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install Vercel CLI. Please install manually:" -ForegroundColor Red
        Write-Host "   npm install -g vercel" -ForegroundColor White
        exit 1
    }
}

Write-Host "✅ Vercel CLI is installed`n" -ForegroundColor Green

# Check if user is logged in to Vercel
Write-Host "Checking Vercel login status..." -ForegroundColor Yellow
$loginCheck = vercel whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "You need to login to Vercel." -ForegroundColor Yellow
    Write-Host "Running: vercel login`n" -ForegroundColor White
    vercel login
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to login to Vercel" -ForegroundColor Red
        exit 1
    }
}

Write-Host "✅ Logged in to Vercel`n" -ForegroundColor Green

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Set-Location api
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Set-Location ..
Write-Host "✅ Dependencies installed`n" -ForegroundColor Green

# Deploy to Vercel
Write-Host "Deploying to Vercel..." -ForegroundColor Yellow
Write-Host "(This may take a few minutes)`n" -ForegroundColor White

vercel --prod

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Deployment successful!`n" -ForegroundColor Green

# Reminder about environment variables
Write-Host "⚠️  IMPORTANT: Don't forget to set environment variables!" -ForegroundColor Yellow
Write-Host "================================================`n" -ForegroundColor Yellow
Write-Host "Required environment variables:" -ForegroundColor White
Write-Host "  - MAKYPAY_API_KEY" -ForegroundColor Cyan
Write-Host "  - MAKYPAY_API_SECRET" -ForegroundColor Cyan
Write-Host "  - SUPABASE_URL" -ForegroundColor Cyan
Write-Host "  - SUPABASE_SERVICE_KEY`n" -ForegroundColor Cyan

Write-Host "Set them using:" -ForegroundColor White
Write-Host "  vercel env add MAKYPAY_API_KEY" -ForegroundColor Green
Write-Host "  vercel env add MAKYPAY_API_SECRET" -ForegroundColor Green
Write-Host "  vercel env add SUPABASE_URL" -ForegroundColor Green
Write-Host "  vercel env add SUPABASE_SERVICE_KEY`n" -ForegroundColor Green

Write-Host "After setting variables, redeploy with:" -ForegroundColor White
Write-Host "  vercel --prod`n" -ForegroundColor Green

Write-Host "📖 For detailed instructions, see DEPLOYMENT-GUIDE.md`n" -ForegroundColor Cyan

Write-Host "🎉 Script completed successfully!" -ForegroundColor Green
