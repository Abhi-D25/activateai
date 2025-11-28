import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(request: Request) {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown';

  // Check rate limit
  if (!rateLimit(ip)) {
    return NextResponse.json({
      success: false,
      message: 'Too many requests. Please try again later.',
    }, { status: 429 });
  }

  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.industry) {
      return NextResponse.json({
        success: false,
        message: 'Name, phone number, and industry are required.',
      }, { status: 400 });
    }

    // Prepare webhook payload
    const payload = {
      arguments: [
        {
          name: "content",
          value: `In a British accent, call ${body.name} in ${body.industry} industry at ${body.phone}. Greet the user: 'Hey! This is Axel from ActivateAI! Is this ${body.name}?'. Once user confirms, start **Scenario 21:** "Outbound Call to User".`
        }
      ]
    };

    const webhookUrl = 'https://hooks.newo.ai/IFclaQpn8udxG4TTo6qksw';
    const apiKey = process.env.NEWO_WEBHOOK_API_KEY;

    // Call the webhook from the server side
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey && { 'Authorization': `Bearer ${apiKey}` }),
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Demo call scheduled successfully.',
    });

  } catch (error) {
    console.error('Error scheduling demo call:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to schedule demo call. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
