import { NextRequest, NextResponse } from 'next/server';
import { MakyPayService, MakyPayWebhook } from '@/lib/makypay';

export async function POST(request: NextRequest) {
  try {
    // Optional secret verification if configured
    const webhookSecret = process.env.MAKYPAY_WEBHOOK_SECRET;
    if (webhookSecret) {
      const { searchParams } = new URL(request.url);
      const providedSecret = searchParams.get('secret') || request.headers.get('x-webhook-secret');
      if (providedSecret !== webhookSecret) {
        console.error('MakyPay Webhook: Invalid or missing secret');
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
      }
    }

    const payload = await request.json();
    console.log('MakyPay Webhook received:', JSON.stringify(payload, null, 2));
    
    await MakyPayService.handleWebhook(payload);
    
    return NextResponse.json({ status: 'success', message: 'Webhook processed' });
  } catch (error) {
    console.error('Webhook processing error:', error);
    // Return 200 to acknowledge receipt and prevent webhook retry flooding
    return NextResponse.json(
      { status: 'acknowledged', message: 'Webhook received' },
      { status: 200 }
    );
  }
}

