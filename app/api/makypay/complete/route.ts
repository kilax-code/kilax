import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { MakyPayService } from '@/lib/makypay';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { userId, transactionId, subscriptionPlan, subscriptionDuration = 30 } = await request.json();

    if (!userId || !transactionId || !subscriptionPlan) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ── 1. Server-side authentication verification ──
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
      console.warn(`Auth mismatch on complete: session user ${authUser.id} tried to activate for ${userId}`);
      return NextResponse.json(
        { error: 'User identity mismatch.' },
        { status: 403 }
      );
    }

    // ── 2. Complete subscription activation ──
    await MakyPayService.completeSubscriptionPayment({
      userId,
      transactionId,
      subscriptionPlan,
      subscriptionDuration,
    });

    return NextResponse.json({ status: 'success', message: 'Subscription activated' });
  } catch (error: any) {
    console.error('Subscription completion error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to complete subscription' },
      { status: 500 }
    );
  }
}

