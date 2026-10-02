/**
 * LLM Suggestions Endpoint
 * 
 * Generates contextual suggestions using Claude API.
 * Falls back silently to rule-based suggestions when:
 * - ANTHROPIC_API_KEY is not set
 * - API call fails
 * - Rate limited
 * 
 * Security:
 * - Constant-time access key comparison
 * - No logging of transcript text or suggestions
 */

import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const COPILOT_ACCESS_KEY = process.env.COPILOT_ACCESS_KEY;

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

interface SuggestRequest {
  recentTranscript: string[];
  currentStep: number;
  hasJobValue: boolean;
  hasHourlyValue: boolean;
  leakAmount: number | null;
  questionsAsked: string[];
}

interface Suggestion {
  type: 'question' | 'response' | 'next_step' | 'warning';
  priority: 'high' | 'medium' | 'low';
  text: string;
  reason?: string;
}

const SYSTEM_PROMPT = `You are a sales call assistant for ActivateAI, helping a salesperson during a discovery call with a small business owner. Your job is to suggest what to say or ask next based on the conversation.

Context:
- This is a free 20-minute technical checkup call
- The goal is to identify where time or money is "leaking" in their business
- There are 5 discovery questions: Leads, Follow-ups, Busywork, Tools that don't talk, After-hours
- After identifying the leak, we offer Get Covered ($199/mo) or Full Fix ($749/mo)
- The guarantee: "If the problem we agree to fix isn't fixed by the date we set, we keep working on it free, and your monthly plan doesn't start until it's fixed"

Rules:
1. Keep suggestions short and actionable (1-2 sentences max)
2. Use plain, conversational language (no jargon)
3. Never invent numbers - only reference what the prospect said
4. If they mention a problem, dig one layer deeper before moving on
5. Always try to get their typical job or order value
6. Mirror their words back when naming the leak

Respond with a JSON array of 1-3 suggestions, each with:
- type: "question" | "response" | "next_step" | "warning"
- priority: "high" | "medium" | "low"
- text: What to say or do
- reason: Brief explanation (optional)`;

export async function POST(request: NextRequest) {
  const accessKey = request.headers.get('x-access-key') || '';
  
  if (!COPILOT_ACCESS_KEY) {
    return NextResponse.json({ suggestions: [], fallback: true });
  }
  
  if (!constantTimeCompare(accessKey, COPILOT_ACCESS_KEY)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  if (!ANTHROPIC_API_KEY) {
    return NextResponse.json({ suggestions: [], fallback: true });
  }

  let body: SuggestRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { recentTranscript, currentStep, hasJobValue, hasHourlyValue, leakAmount, questionsAsked } = body;

  if (!recentTranscript || !Array.isArray(recentTranscript)) {
    return NextResponse.json({ suggestions: [], fallback: true });
  }

  const userMessage = `Current step: ${currentStep} (0=Open, 1=Ask, 2=Name the leak, 3=Offer the fix, 4=Book next step)
Has job value: ${hasJobValue}
Has hourly value: ${hasHourlyValue}
Agreed leak amount: ${leakAmount ? `$${leakAmount}/mo` : 'not yet agreed'}
Questions asked: ${questionsAsked.length > 0 ? questionsAsked.join(', ') : 'none yet'}

Recent transcript (last few exchanges):
${recentTranscript.slice(-6).join('\n')}

What should I say or ask next?`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      return NextResponse.json({ suggestions: [], fallback: true });
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '';

    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      return NextResponse.json({ suggestions: [], fallback: true });
    }

    const suggestions: Suggestion[] = JSON.parse(jsonMatch[0]);
    
    const validSuggestions = suggestions
      .filter(s => s.type && s.priority && s.text)
      .slice(0, 3);

    return NextResponse.json({ suggestions: validSuggestions, fallback: false });
  } catch {
    return NextResponse.json({ suggestions: [], fallback: true });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    configured: {
      anthropic: !!ANTHROPIC_API_KEY,
      accessKey: !!COPILOT_ACCESS_KEY
    }
  });
}
