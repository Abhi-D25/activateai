import { NextResponse } from 'next/server';

interface TrackClickBody {
  leadId: string;
  timestamp: string;
  page: string;
  utmSource?: string;
  utmMedium?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    const body: TrackClickBody = await request.json();

    // Validate required field
    if (!body.leadId) {
      return NextResponse.json(
        { success: false, error: 'leadId is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const webhookUrl = 'https://cartersunny.app.n8n.cloud/webhook/email_click_tracker';

    // Forward to n8n webhook
    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leadId: body.leadId,
        timestamp: body.timestamp,
        page: body.page,
        utmSource: body.utmSource,
        utmMedium: body.utmMedium,
      }),
    });

    if (!n8nResponse.ok) {
      console.error('Failed to forward to n8n:', n8nResponse.status);
      return NextResponse.json(
        { success: false, error: 'Failed to forward tracking data' },
        { status: 502, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { success: true },
      { headers: corsHeaders }
    );

  } catch (error) {
    console.error('Error processing track-click request:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
