import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { MakyPayService } from '@/lib/makypay';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { checkRateLimit } from '@/lib/rate-limiter';

// Rate limit constants
const IP_RATE_LIMIT = 5;          // max requests per IP
const IP_RATE_WINDOW_MS = 5 * 60 * 1000;  // 5 minutes
const USER_RATE_LIMIT = 5;        // max requests per user
const USER_RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export async function POST(request: NextRequest) {
  try {
    const { userId, phoneNumber, amount, description, paymentMethod = 'mobile_money', captchaToken } = await request.json();

    if (!userId || !amount || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ── 1. Server-side authentication verification ──
    // Verify the caller is actually logged in and the userId matches their session.
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required. Please sign in again.' },
        { status: 401 }
      );
    }

    const accessToken = authHeader.replace('Bearer ', '');
    const supabaseAuth = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );
    const { data: { user: authUser }, error: authError } = await supabaseAuth.auth.getUser();

    if (authError || !authUser) {
      return NextResponse.json(
        { error: 'Session expired. Please sign in again.' },
        { status: 401 }
      );
    }

    if (authUser.id !== userId) {
      console.warn(`Auth mismatch: session user ${authUser.id} tried to pay as ${userId}`);
      return NextResponse.json(
        { error: 'User identity mismatch.' },
        { status: 403 }
      );
    }

    // ── 2. Rate limiting ──
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    const ipCheck = checkRateLimit(`pay:ip:${clientIp}`, IP_RATE_LIMIT, IP_RATE_WINDOW_MS);
    if (!ipCheck.allowed) {
      return NextResponse.json(
        { error: `Too many payment requests. Please try again in ${ipCheck.retryAfterSeconds} seconds.` },
        { status: 429 }
      );
    }

    const userCheck = checkRateLimit(`pay:user:${userId}`, USER_RATE_LIMIT, USER_RATE_WINDOW_MS);
    if (!userCheck.allowed) {
      return NextResponse.json(
        { error: `Too many payment requests. Please try again in ${userCheck.retryAfterSeconds} seconds.` },
        { status: 429 }
      );
    }

    // ── 3. Bot protection: Verify reCAPTCHA token ──
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'Security verification required. Please complete the captcha.' },
        { status: 400 }
      );
    }

    const captchaResult = await verifyRecaptcha(captchaToken, 0.7, clientIp);
    if (!captchaResult.success) {
      return NextResponse.json(
        { error: captchaResult.error || 'Security verification failed. Please try again.' },
        { status: 403 }
      );
    }

    // ── 4. Process payment ──
    const host = request.headers.get('host') || 'localhost:4577';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;
    // MakyPay API crashes with 500 if callback_url contains localhost
    const callbackUrl = baseUrl.includes('localhost') ? undefined : `${baseUrl}/api/makypay/webhook`;

    let result;
    
    if (paymentMethod === 'card') {
      result = await MakyPayService.collectCard({
        userId,
        amount,
        description,
        callbackUrl,
      });
    } else {
      if (!phoneNumber) {
        return NextResponse.json({ error: 'Phone number required for mobile money' }, { status: 400 });
      }
      
      result = await MakyPayService.collectMobileMoney({
        userId,
        phoneNumber,
        amount,
        description,
        callbackUrl,
      });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { error: error.message || 'Payment initiation failed' },
      { status: 500 }
    );
  }
}
