# Check Vercel Environment Variables

Write-Host "`n🔍 Checking Vercel Environment Variables" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Fetching environment variables from Vercel..." -ForegroundColor Yellow

$envVars = vercel env ls 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to fetch environment variables" -ForegroundColor Red
    Write-Host "Make sure you're logged in: vercel login`n" -ForegroundColor Yellow
    exit 1
}

Write-Host $envVars

Write-Host "`n📋 Required Variables:" -ForegroundColor Cyan
Write-Host "  - MAKYPAY_API_KEY" -ForegroundColor White
Write-Host "  - MAKYPAY_API_SECRET" -ForegroundColor White
Write-Host "  - SUPABASE_URL" -ForegroundColor White
Write-Host "  - SUPABASE_SERVICE_KEY`n" -ForegroundColor White

Write-Host "To add missing variables:" -ForegroundColor Yellow
Write-Host "  vercel env add VARIABLE_NAME`n" -ForegroundColor Green
