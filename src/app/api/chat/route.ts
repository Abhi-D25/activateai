// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { chatConfig } from '@/lib/chatConfig';

// N8N webhook URL - using your actual webhook URL
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://cartersunny.app.n8n.cloud/webhook-test/76fdfa0a-ec6a-43b3-9c79-b8bfb9a79d58';

// Rate limiting implementation
const RATE_LIMITS = new Map<string, { count: number, timestamp: number }>();

// Clean up rate limit data older than 1 hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of RATE_LIMITS.entries()) {
    if (now - data.timestamp > 3600000) { // 1 hour in milliseconds
      RATE_LIMITS.delete(ip);
    }
  }
}, 300000); // Run every 5 minutes

// Helper to check rate limits
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const maxRequestsPerMinute = chatConfig.rateLimit.maxRequestsPerMinute;
  
  // Get or initialize rate limit data
  const rateData = RATE_LIMITS.get(ip) || { count: 0, timestamp: now };
  
  // Reset counter if more than a minute has passed
  if (now - rateData.timestamp > 60000) {
    rateData.count = 1;
    rateData.timestamp = now;
    RATE_LIMITS.set(ip, rateData);
    return true;
  }
  
  // Increment counter and check if limit exceeded
  rateData.count++;
  RATE_LIMITS.set(ip, rateData);
  
  return rateData.count <= maxRequestsPerMinute;
}

export async function POST(request: Request) {
  // Enable debug logging if needed
  const DEBUG = chatConfig.advanced.debugMode;
  
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit (if enabled)
    if (chatConfig.rateLimit.maxRequestsPerMinute > 0 && !checkRateLimit(ip)) {
      return NextResponse.json({
        success: false,
        error: 'Rate limit exceeded',
        response: 'You\'re sending messages too quickly. Please wait a moment before trying again.'
      }, { status: 429 });
    }
    
    // Parse the incoming request body
    const body = await request.json();
    
    // Validate message format
    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json({
        success: false,
        error: 'Invalid message format',
        response: 'Your message couldn\'t be processed. Please try again.'
      }, { status: 400 });
    }
    
    // Log the incoming request
    if (DEBUG) {
      console.log('Received chat message:', { 
        message: body.message.substring(0, 100) + (body.message.length > 100 ? '...' : ''),
        timestamp: new Date().toISOString(),
        ip: ip 
      });
    }
    
    // For GET webhooks, we need to encode parameters in the URL
    // Create URL parameters for the message and metadata
    const params = new URLSearchParams({
      message: body.message,
      source: 'website_chat',
      timestamp: new Date().toISOString(),
      userId: body.userId || 'anonymous',
    });
    
    // Add history as a JSON string if provided
    if (Array.isArray(body.history) && body.history.length > 0) {
      // Only include the last 10 messages for performance
      const recentHistory = body.history.slice(-10);
      params.append('history', JSON.stringify(recentHistory));
    }
    
    // Add additional metadata
    params.append('userAgent', request.headers.get('user-agent') || 'unknown');
    params.append('referer', request.headers.get('referer') || 'unknown');
    params.append('sessionId', body.sessionId || `session_${Date.now()}`);
    
    // Build the full URL with parameters
    const fullUrl = `${N8N_WEBHOOK_URL}?${params.toString()}`;
    
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    try {
      // Forward the message to n8n workflow using GET
      const n8nResponse = await fetch(fullUrl, {
        method: 'GET',
        signal: controller.signal
      });
      
      // Clear the timeout since we got a response
      clearTimeout(timeoutId);
      
      // Check if the request was successful
      if (!n8nResponse.ok) {
        // Log the error details
        const errorText = await n8nResponse.text();
        console.error('Error from n8n:', n8nResponse.status, errorText);
        
        // Return an error response
        return NextResponse.json(
          { 
            success: false, 
            error: `Failed to process message: ${n8nResponse.status}`,
            response: 'Sorry, I encountered an error processing your request. Our team has been notified.'
          }, 
          { status: 502 }
        );
      }
      
      // Parse the n8n response
      const data = await n8nResponse.json();
      
      // Enhanced response logging
      if (DEBUG) {
        console.log('Response from n8n:', {
          success: true,
          responseLength: data.response ? data.response.length : 0,
          timestamp: new Date().toISOString()
        });
      }
      
      // Ensure the response has the expected format
      if (!data.response && !data.message) {
        console.warn('n8n returned an unexpected response format:', data);
      }
      
      // Return the response to the client
      return NextResponse.json({
        success: true,
        response: data.response || data.message || 'I processed your request, but no specific response was returned.',
        metadata: data.metadata || {} // Any additional metadata from n8n
      });
      
    } catch (fetchError: any) {
      // Handle fetch abortion (timeout)
      if (fetchError.name === 'AbortError') {
        console.error('Request to n8n timed out');
        return NextResponse.json({
          success: false,
          error: 'Request timeout',
          response: 'I\'m taking longer than expected to process your request. Please try again in a moment.'
        }, { status: 504 });
      }
      
      // Re-throw for the outer catch block
      throw fetchError;
    }
    
  } catch (error) {
    // Log any errors
    console.error('Error in chat API route:', error);
    
    // Return an error response
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        response: 'Sorry, something went wrong on our end. Please try again later.'
      }, 
      { status: 500 }
    );
  }
}