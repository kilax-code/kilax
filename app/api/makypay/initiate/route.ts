import { NextRequest, NextResponse } from 'next/server';
import { MakyPayService } from '@/lib/makypay';
import { supabase } from '@/lib/supabase';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    const { userId, phoneNumber, amount, description, paymentMethod = 'mobile_money', captchaToken } = await request.json();

    if (!userId || !amount || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Bot protection: Verify reCAPTCHA token
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'Security verification required. Please complete the captcha.' },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : undefined;

    const captchaResult = await verifyRecaptcha(captchaToken, 0.5, clientIp);
    if (!captchaResult.success) {
      return NextResponse.json(
        { error: captchaResult.error || 'Security verification failed. Please try again.' },
        { status: 403 }
      );
    }

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
