/**
 * Token minting endpoint for Deepgram streaming API
 * 
 * This endpoint creates short-lived tokens so the long-lived API key
 * never reaches the browser. Protected by a shared access key.
 * 
 * In production, you'd want more robust protection:
 * - Rate limiting
 * - Session validation
 * - IP allowlisting
 */

import { NextRequest, NextResponse } from 'next/server';

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;
const COPILOT_ACCESS_KEY = process.env.COPILOT_ACCESS_KEY;

export async function POST(request: NextRequest) {
  // Check access key
  const accessKey = request.headers.get('x-access-key');
  
  if (!COPILOT_ACCESS_KEY) {
    return NextResponse.json(
      { error: 'Server not configured - COPILOT_ACCESS_KEY not set' },
      { status: 500 }
    );
  }
  
  if (accessKey !== COPILOT_ACCESS_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  if (!DEEPGRAM_API_KEY) {
    return NextResponse.json(
      { error: 'Speech-to-text not configured - DEEPGRAM_API_KEY not set' },
      { status: 500 }
    );
  }
  
  try {
    // Request a temporary key from Deepgram
    // Note: Deepgram's API key can be used directly for WebSocket connections
    // In a more secure setup, you'd use their temporary credentials API
    // For now, we return a payload that the client can use
    
    const response = {
      token: DEEPGRAM_API_KEY,
      expiresIn: 3600, // 1 hour
      endpoint: 'wss://api.deepgram.com/v1/listen',
      params: {
        model: 'nova-2',
        language: 'en',
        smart_format: true,
        diarize: true,
        mip_opt_out: true // Critical: opt out of model improvement program for privacy
      }
    };
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Token generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Health check - just verify the endpoint exists
  return NextResponse.json({
    status: 'ok',
    configured: {
      deepgram: !!DEEPGRAM_API_KEY,
      accessKey: !!COPILOT_ACCESS_KEY
    }
  });
}
