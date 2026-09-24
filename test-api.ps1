# Kilax MakyPay Backend - API Testing Script
# Tests your deployed backend API

param(
    [Parameter(Mandatory=$true)]
    [string]$ApiUrl
)

Write-Host "`n🧪 Kilax MakyPay API Testing Script" -ForegroundColor Cyan
Write-Host "====================================`n" -ForegroundColor Cyan

Write-Host "Testing API at: $ApiUrl`n" -ForegroundColor White

# Test 1: Health Check
Write-Host "Test 1: Health Check Endpoint" -ForegroundColor Yellow
Write-Host "------------------------------" -ForegroundColor White

try {
    $response = Invoke-RestMethod -Uri "$ApiUrl/api/health" -Method Get
    
    if ($response.status -eq "ok") {
        Write-Host "✅ Health check passed!" -ForegroundColor Green
        Write-Host "   Service: $($response.service)" -ForegroundColor White
        Write-Host "   Version: $($response.version)" -ForegroundColor White
        Write-Host "   Timestamp: $($response.timestamp)`n" -ForegroundColor White
    } else {
        Write-Host "⚠️  Health check returned unexpected status" -ForegroundColor Yellow
        Write-Host $response
    }
} catch {
    Write-Host "❌ Health check failed!" -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)`n" -ForegroundColor Red
}

# Test 2: 404 Handling
Write-Host "Test 2: 404 Error Handling" -ForegroundColor Yellow
Write-Host "------------------------------" -ForegroundColor White

try {
    $response = Invoke-RestMethod -Uri "$ApiUrl/api/nonexistent" -Method Get -ErrorAction Stop
    Write-Host "⚠️  Expected 404 but request succeeded" -ForegroundColor Yellow
} catch {
    if ($_.Exception.Response.StatusCode -eq 404) {
        Write-Host "✅ 404 handling works correctly`n" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Unexpected error: $($_.Exception.Message)`n" -ForegroundColor Yellow
    }
}

# Test 3: Authentication Required
Write-Host "Test 3: Authentication Protection" -ForegroundColor Yellow
Write-Host "------------------------------" -ForegroundColor White

try {
    $response = Invoke-RestMethod -Uri "$ApiUrl/api/makypay/collect" -Method Post -ErrorAction Stop
    Write-Host "⚠️  Expected 401 but request succeeded" -ForegroundColor Yellow
} catch {
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host "✅ Authentication protection works correctly`n" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Unexpected status code: $($_.Exception.Response.StatusCode)`n" -ForegroundColor Yellow
    }
}

# Summary
Write-Host "`n📊 Test Summary" -ForegroundColor Cyan
Write-Host "===============" -ForegroundColor Cyan
Write-Host "API URL: $ApiUrl" -ForegroundColor White
Write-Host "`nBasic tests completed. For full testing:" -ForegroundColor White
Write-Host "1. Test with valid Supabase JWT token" -ForegroundColor Yellow
Write-Host "2. Test payment initiation" -ForegroundColor Yellow
Write-Host "3. Test transaction status checking" -ForegroundColor Yellow
Write-Host "4. Test in your Flutter app`n" -ForegroundColor Yellow

Write-Host "See DEPLOYMENT-GUIDE.md for detailed testing instructions.`n" -ForegroundColor Cyan
