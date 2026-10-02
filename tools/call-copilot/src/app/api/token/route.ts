/**
 * Token minting endpoint for Deepgram streaming API
 * 
 * This endpoint mints short-lived JWT tokens via Deepgram's /v1/auth/grant
 * endpoint so the long-lived API key never reaches the browser.
 * 
 * Security measures:
 * - Constant-time comparison for access key
 * - Short-lived tokens (300 seconds default, configurable)
 * - No logging of request bodies or transcript text
 */

import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;
const COPILOT_ACCESS_KEY = process.env.COPILOT_ACCESS_KEY;

const TOKEN_TTL_SECONDS = 300;

function constantTimeCompare(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  const aBuffer = Buffer.from(a, 'utf8');
  const bBuffer = Buffer.from(b, 'utf8');
  if (aBuffer.length !== bBuffer.length) {
    const dummy = Buffer.alloc(aBuffer.length);
    timingSafeEqual(aBuffer, dummy);
    return false;
  }
  return timingSafeEqual(aBuffer, bBuffer);
}

export async function POST(request: NextRequest) {
  const accessKey = request.headers.get('x-access-key') || '';
  
  if (!COPILOT_ACCESS_KEY) {
    return NextResponse.json(
      { error: 'Server not configured' },
      { status: 500 }
    );
  }
  
  if (!constantTimeCompare(accessKey, COPILOT_ACCESS_KEY)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  if (!DEEPGRAM_API_KEY) {
    return NextResponse.json(
      { error: 'Speech-to-text not configured' },
      { status: 500 }
    );
  }
  
  try {
    const grantResponse = await fetch('https://api.deepgram.com/v1/auth/grant', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${DEEPGRAM_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_to_live_in_seconds: TOKEN_TTL_SECONDS
      })
    });
    
    if (!grantResponse.ok) {
      const errorText = await grantResponse.text();
      console.error('Deepgram grant error status:', grantResponse.status);
      return NextResponse.json(
        { error: 'Failed to mint temporary token' },
        { status: 502 }
      );
    }
    
    const grantData = await grantResponse.json();
    
    if (!grantData.access_token) {
      console.error('Deepgram grant response missing access_token');
      return NextResponse.json(
        { error: 'Invalid response from speech service' },
        { status: 502 }
      );
    }
    
    return NextResponse.json({
      token: grantData.access_token,
      expiresIn: TOKEN_TTL_SECONDS,
      endpoint: 'wss://api.deepgram.com/v1/listen',
      params: {
        model: 'nova-3',
        language: 'en',
        smart_format: true,
        encoding: 'linear16',
        sample_rate: 16000,
        channels: 1,
        mip_opt_out: true
      }
    });
  } catch (error) {
    console.error('Token generation failed');
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    configured: {
      deepgram: !!DEEPGRAM_API_KEY,
      accessKey: !!COPILOT_ACCESS_KEY
    }
  });
}
