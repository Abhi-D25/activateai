/**
 * ActivateAI Call Copilot - Suggestion Engine
 * 
 * Generates contextual suggestions based on:
 * - Current position in the script
 * - Which questions have been asked/answered
 * - What numbers are still missing
 * - Detected objections
 * 
 * Works without an LLM using rule-based logic.
 */

import {
  SCRIPT_STEPS,
  DISCOVERY_QUESTIONS,
  GUARANTEE_SPOKEN,
  ALWAYS_ASK,
  STEERING_HINTS,
  ScriptStep,
  DiscoveryQuestion
} from './knowledge';
import { ExtractionResult, QuestionStatus, DetectedObjection } from './extractor';
import { TotalLeakCalculation } from './calculator';

// ============================================================================
// TYPES
// ============================================================================

export interface Suggestion {
  type: 'next_question' | 'follow_up' | 'steering' | 'objection_response' | 'script_cue' | 'missing_number';
  priority: 'high' | 'medium' | 'low';
  text: string;
  context?: string;
  action?: string;
}

export interface CallState {
  currentStep: number;
  elapsedMinutes: number;
  questionsAsked: Set<string>;
  questionsAnswered: Set<string>;
  hasJobValue: boolean;
  hasHourlyValue: boolean;
  leakAgreed: boolean;
  agreedLeakAmount: number | null;
  lastObjection: DetectedObjection | null;
  recentTranscript: string[];
}

// ============================================================================
// MAIN SUGGESTION GENERATOR
// ============================================================================

export function generateSuggestions(
  state: CallState,
  extraction: ExtractionResult,
  leakCalculation: TotalLeakCalculation | null
): Suggestion[] {
  const suggestions: Suggestion[] = [];
  
  // 1. Handle any detected objections first (highest priority)
  if (extraction.objections.length > 0) {
    const latestObjection = extraction.objections[extraction.objections.length - 1];
    suggestions.push({
      type: 'objection_response',
      priority: 'high',
      text: getObjectionResponseText(latestObjection),
      context: `They said: "${latestObjection.quote}"`,
      action: 'Handle this before continuing'
    });
  }
  
  // 2. Check for steering needs based on recent transcript
  const steeringNeed = detectSteeringNeed(state.recentTranscript, state.currentStep);
  if (steeringNeed) {
    suggestions.push(steeringNeed);
  }
  
  // 3. Generate step-specific suggestions
  switch (state.currentStep) {
    case 0:
      suggestions.push(...generateOpeningSuggestions(state));
      break;
    case 1:
      suggestions.push(...generateAskSuggestions(state, extraction));
      break;
    case 2:
      suggestions.push(...generateNameLeakSuggestions(state, extraction, leakCalculation));
      break;
    case 3:
      suggestions.push(...generateOfferSuggestions(state, leakCalculation));
      break;
    case 4:
      suggestions.push(...generateBookingSuggestions(state));
      break;
  }
  
  // 4. Always check for missing job value
  if (!state.hasJobValue && state.currentStep >= 1) {
    suggestions.push({
      type: 'missing_number',
      priority: 'medium',
      text: ALWAYS_ASK,
      context: 'Required on every call - we need this for the 30-day value recap'
    });
  }
  
  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  suggestions.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  
  return suggestions;
}

// ============================================================================
// STEP-SPECIFIC SUGGESTION GENERATORS
// ============================================================================

function generateOpeningSuggestions(state: CallState): Suggestion[] {
  const suggestions: Suggestion[] = [];
  
  if (state.elapsedMinutes < 1) {
    suggestions.push({
      type: 'script_cue',
      priority: 'medium',
      text: 'Thanks for jumping on. This is a free technical checkup. About 20 minutes. My only job today is to find where time or money is slipping in the business. No sales pitch at the start. Cool?',
      action: 'Open the call'
    });
  }
  
  suggestions.push({
    type: 'script_cue',
    priority: 'low',
    text: 'I\'ll ask five quick questions, we\'ll name the biggest leak in your words, and if there\'s a clear fix I\'ll show you two flat monthly options. Sound good?',
    action: 'Set expectations, then move to Step 1'
  });
  
  return suggestions;
}

function generateAskSuggestions(state: CallState, extraction: ExtractionResult): Suggestion[] {
  const suggestions: Suggestion[] = [];
  
  // Find unasked questions
  const unaskedQuestions = DISCOVERY_QUESTIONS.filter(
    q => !state.questionsAsked.has(q.id)
  );
  
  if (unaskedQuestions.length > 0) {
    const nextQuestion = unaskedQuestions[0];
    suggestions.push({
      type: 'next_question',
      priority: 'high',
      text: nextQuestion.mainQuestion,
      context: `Topic: ${nextQuestion.topic}`,
      action: `Question ${nextQuestion.id} - dig one layer if they mention pain`
    });
    
    // Also show the follow-up question
    suggestions.push({
      type: 'follow_up',
      priority: 'low',
      text: nextQuestion.followUpQuestion,
      context: `If ${nextQuestion.followUpTrigger}`
    });
  }
  
  // Check for questions that need numbers
  const questionsNeedingNumbers = DISCOVERY_QUESTIONS.filter(q => {
    const asked = state.questionsAsked.has(q.id);
    const answered = state.questionsAnswered.has(q.id);
    return asked && !answered;
  });
  
  for (const q of questionsNeedingNumbers) {
    const numberPrompt = getNumberPromptForQuestion(q);
    if (numberPrompt) {
      suggestions.push({
        type: 'missing_number',
        priority: 'medium',
        text: numberPrompt,
        context: `Get specifics for ${q.topic}`
      });
    }
  }
  
  // If all questions asked, suggest moving to Step 2
  if (unaskedQuestions.length === 0) {
    suggestions.push({
      type: 'script_cue',
      priority: 'high',
      text: 'All five questions covered. Ready to name the leak.',
      action: 'Move to Step 2: Name the leak'
    });
  }
  
  return suggestions;
}

function generateNameLeakSuggestions(
  state: CallState,
  extraction: ExtractionResult,
  leakCalculation: TotalLeakCalculation | null
): Suggestion[] {
  const suggestions: Suggestion[] = [];
  
  // Show the mirroring script
  suggestions.push({
    type: 'script_cue',
    priority: 'high',
    text: 'Here\'s what I\'m hearing. The biggest leak is [their words]. Second is [their words]. Did I get that right?',
    action: 'Mirror back and wait for confirmation'
  });
  
  // If we have enough data, show the calculation prompt
  if (leakCalculation && leakCalculation.totalMonthly > 0) {
    suggestions.push({
      type: 'script_cue',
      priority: 'medium',
      text: `Let\'s put a rough dollar number on it. You said about [X per week/month], and a typical job is about $[Y]. If even [Z] of those slip each month, that\'s roughly $${leakCalculation.totalMonthly}/month. Does that feel low, high, or about right?`,
      action: 'Build the number together'
    });
  } else if (leakCalculation) {
    // Show what numbers we're missing
    const missing = leakCalculation.allMissingInputs;
    if (missing.length > 0) {
      suggestions.push({
        type: 'missing_number',
        priority: 'high',
        text: `Still need: ${missing.join(', ')}`,
        context: 'Get these to calculate the leak'
      });
    }
  }
  
  // Agreement prompt
  suggestions.push({
    type: 'script_cue',
    priority: 'low',
    text: 'So we\'re talking about something like $[agreed]/month tied to [leak in their words]. Fair?',
    action: 'Get their agreement before moving to offer'
  });
  
  return suggestions;
}

function generateOfferSuggestions(
  state: CallState,
  leakCalculation: TotalLeakCalculation | null
): Suggestion[] {
  const suggestions: Suggestion[] = [];
  
  // Check if under $1,000 threshold
  if (state.agreedLeakAmount && state.agreedLeakAmount < 1000) {
    suggestions.push({
      type: 'script_cue',
      priority: 'high',
      text: 'Honestly, I don\'t think you should pay me for this. The leak is under $1,000/month, so a plan would eat most of what it wins back. Here\'s what I\'d do instead, free...',
      context: 'Don\'t sell. Give free tips and check back in 60 days.',
      action: 'Offer free advice, not a plan'
    });
    return suggestions;
  }
  
  // Standard offer
  suggestions.push({
    type: 'script_cue',
    priority: 'high',
    text: 'Okay. Two ways we can fix this. Both are a flat monthly price. No per-session nickel-and-diming.',
    action: 'Introduce the options'
  });
  
  suggestions.push({
    type: 'script_cue',
    priority: 'medium',
    text: 'Get Covered starts at $199 a month. We cover the leak we just named so it stops bleeding while you keep running the business.',
    action: 'Present Get Covered'
  });
  
  suggestions.push({
    type: 'script_cue',
    priority: 'medium',
    text: 'Full Fix is the deeper version. We dig further across the ops gaps we touched and clean them up as one plan.',
    action: 'Present Full Fix'
  });
  
  // THE GUARANTEE - exact wording required
  suggestions.push({
    type: 'script_cue',
    priority: 'high',
    text: GUARANTEE_SPOKEN,
    context: 'SAY THIS EXACT LINE - do not paraphrase',
    action: 'State the guarantee word for word'
  });
  
  // Voice receptionist mention if relevant
  suggestions.push({
    type: 'script_cue',
    priority: 'low',
    text: 'We plug the leak in how work moves: who catches the lead, what happens next, and what stops falling through. If missed calls are the leak, one fix we can put in is a receptionist that answers your calls, books the job, and texts you back.',
    action: 'Only mention voice if missed calls are the leak'
  });
  
  suggestions.push({
    type: 'script_cue',
    priority: 'medium',
    text: 'Which sounds closer to what you need: Get Covered for the one leak, or Full Fix for the wider clean-up?',
    action: 'Close on the choice'
  });
  
  return suggestions;
}

function generateBookingSuggestions(state: CallState): Suggestion[] {
  const suggestions: Suggestion[] = [];
  
  suggestions.push({
    type: 'script_cue',
    priority: 'high',
    text: 'Great. Let\'s pick a start date while we\'re here so this doesn\'t sit in limbo. Looking at your week, what day works to kick off: [Day A] or [Day B]?',
    action: 'Lock a date now'
  });
  
  suggestions.push({
    type: 'script_cue',
    priority: 'medium',
    text: 'Locked: we start [date]. I\'ll send a short recap of the leak we named, the plan you picked, that start date, and the written guarantee.',
    action: 'Confirm the start date'
  });
  
  suggestions.push({
    type: 'script_cue',
    priority: 'medium',
    text: 'Your part is getting us logins and answering questions within a day or two. If that slips, the date slips with it.',
    action: 'Set expectations on their side'
  });
  
  suggestions.push({
    type: 'script_cue',
    priority: 'low',
    text: 'About 30 days after the fix is live, we\'ll send you a short recap showing what it caught, in your numbers.',
    action: 'Mention the 30-day recap'
  });
  
  return suggestions;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getObjectionResponseText(objection: DetectedObjection): string {
  // Simplify the response for display
  const fullResponse = objection.suggestedResponse;
  
  // Extract just the first actionable part
  if (fullResponse.includes('Ask:')) {
    const askPart = fullResponse.split('Ask:')[1]?.split('Then')[0]?.trim();
    if (askPart) {
      return askPart.replace(/"/g, '');
    }
  }
  
  if (fullResponse.includes('Say:')) {
    const sayPart = fullResponse.split('Say:')[1]?.split('"')[1];
    if (sayPart) {
      return sayPart;
    }
  }
  
  return fullResponse.slice(0, 200);
}

function getNumberPromptForQuestion(question: DiscoveryQuestion): string | null {
  switch (question.id) {
    case 'Q1':
      return 'Roughly how many new leads a week? And of those, how many actually become a booked job or sale?';
    case 'Q2':
      return 'Any sense of how many warm leads went quiet in the last month?';
    case 'Q3':
      return 'How many hours a week does that eat for you or your team?';
    case 'Q5':
      return 'About how many of those a week? And what\'s a typical job or order worth when one of those turns into work?';
    default:
      return null;
  }
}

function detectSteeringNeed(recentTranscript: string[], currentStep: number): Suggestion | null {
  const recentText = recentTranscript.join(' ').toLowerCase();
  
  // Check for common drift patterns
  if (recentText.length > 500 && !hasRelevantContent(recentText, currentStep)) {
    return {
      type: 'steering',
      priority: 'medium',
      text: STEERING_HINTS.off_topic,
      context: 'Call may be drifting off topic'
    };
  }
  
  // Check for venting
  const ventingWords = ['frustrating', 'annoyed', 'hate', 'terrible', 'worst', 'drives me crazy'];
  if (ventingWords.some(w => recentText.includes(w))) {
    return {
      type: 'steering',
      priority: 'low',
      text: STEERING_HINTS.venting,
      context: 'Acknowledge, then refocus'
    };
  }
  
  // Check for technical tangent
  const techWords = ['api', 'integration', 'code', 'developer', 'technical', 'backend', 'database'];
  if (techWords.filter(w => recentText.includes(w)).length >= 2) {
    return {
      type: 'steering',
      priority: 'low',
      text: STEERING_HINTS.technical_tangent,
      context: 'Keep it simple and impact-focused'
    };
  }
  
  return null;
}

function hasRelevantContent(text: string, currentStep: number): boolean {
  const stepKeywords: Record<number, string[]> = {
    0: ['checkup', 'free', 'time', 'money', 'leak'],
    1: ['leads', 'calls', 'follow', 'hours', 'tools', 'after hours'],
    2: ['problem', 'cost', 'month', 'dollar', 'leak'],
    3: ['covered', 'fix', 'price', 'monthly', 'guarantee'],
    4: ['start', 'date', 'when', 'begin', 'kick off']
  };
  
  const keywords = stepKeywords[currentStep] || [];
  return keywords.some(k => text.includes(k));
}

// ============================================================================
// CALL STATE MANAGEMENT
// ============================================================================

export function createInitialCallState(): CallState {
  return {
    currentStep: 0,
    elapsedMinutes: 0,
    questionsAsked: new Set(),
    questionsAnswered: new Set(),
    hasJobValue: false,
    hasHourlyValue: false,
    leakAgreed: false,
    agreedLeakAmount: null,
    lastObjection: null,
    recentTranscript: []
  };
}

export function inferStepFromTranscript(transcript: string[]): number {
  const fullText = transcript.join(' ').toLowerCase();
  
  // Look for step markers in reverse order (most specific first)
  if (fullText.includes('start date') || fullText.includes('kick off') || fullText.includes('when can we begin')) {
    return 4;
  }
  
  if (fullText.includes('get covered') || fullText.includes('full fix') || fullText.includes('$199') || fullText.includes('guarantee')) {
    return 3;
  }
  
  if (fullText.includes('biggest leak') || fullText.includes('here\'s what i\'m hearing') || fullText.includes('rough dollar')) {
    return 2;
  }
  
  if (fullText.includes('five question') || fullText.includes('new lead') || fullText.includes('follow up') || fullText.includes('busywork')) {
    return 1;
  }
  
  return 0;
}
