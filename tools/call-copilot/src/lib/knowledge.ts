/**
 * ActivateAI Call Copilot - Knowledge Module
 * 
 * Distilled from:
 * - 01-call-script.md (approved Sep 29)
 * - 02-price-ladder.md (source of truth for pricing)
 * - 03-battlecard.md (internal objection responses)
 * - 04-scope-template.md
 * - 05-30-day-value-recap.md
 */

// ============================================================================
// SCRIPT STRUCTURE
// ============================================================================

export interface ScriptStep {
  id: number;
  name: string;
  duration: string;
  description: string;
  keyActions: string[];
}

export const SCRIPT_STEPS: ScriptStep[] = [
  {
    id: 0,
    name: 'Open',
    duration: '1 min',
    description: 'Introduce the free technical checkup and set expectations',
    keyActions: [
      'Thank them for joining',
      'Explain this is a free 20-minute checkup',
      'Clarify: "My only job today is to find where time or money is slipping"',
      'Get agreement to proceed'
    ]
  },
  {
    id: 1,
    name: 'Ask',
    duration: '8 min',
    description: 'Ask all five discovery questions and dig one layer on anything that hurts',
    keyActions: [
      'Ask all five questions',
      'Dig one layer on pain points',
      'Write down their exact words',
      'ALWAYS get their typical job or order value',
      'Never invent numbers'
    ]
  },
  {
    id: 2,
    name: 'Name the leak',
    duration: '4 min',
    description: 'Mirror their problem back and build a rough monthly cost together',
    keyActions: [
      'Pick the one or two biggest problems',
      'Mirror their words back',
      'Build a rough dollar number together',
      'Get them to agree on the leak amount'
    ]
  },
  {
    id: 3,
    name: 'Offer the fix',
    duration: '5 min',
    description: 'Present Get Covered or Full Fix with the guarantee',
    keyActions: [
      'Present two flat monthly options',
      'Say the guarantee word for word',
      'If missed calls are the leak, mention AI receptionist as one possible fix',
      'Ask: "Which sounds closer to what you need?"'
    ]
  },
  {
    id: 4,
    name: 'Book the next step',
    duration: '2 min',
    description: 'Lock a start date before hanging up',
    keyActions: [
      'Lock a start date while on the call',
      'Confirm: "Your part is getting us logins within a day or two"',
      'Mention the 30-day value recap',
      'Do not leave with "I\'ll think about it" - get a date or a clear no'
    ]
  }
];

// ============================================================================
// DISCOVERY QUESTIONS
// ============================================================================

export interface DiscoveryQuestion {
  id: string;
  topic: string;
  mainQuestion: string;
  followUpTrigger: string;
  followUpQuestion: string;
  leakType: LeakType;
}

export type LeakType = 'front_end' | 'time' | 'slow_money' | 'inventory' | 'after_hours';

export const DISCOVERY_QUESTIONS: DiscoveryQuestion[] = [
  {
    id: 'Q1',
    topic: 'Leads',
    mainQuestion: 'When a new lead comes in, what happens next? Who grabs it, and how fast?',
    followUpTrigger: 'slow or unclear response',
    followUpQuestion: 'Roughly how many new leads a week? And of those, how many actually become a booked job or sale?',
    leakType: 'front_end'
  },
  {
    id: 'Q2',
    topic: 'Follow-ups',
    mainQuestion: 'After someone doesn\'t answer or says "later," how do you follow up? Is that written down somewhere, or does it live in your head?',
    followUpTrigger: 'messy or unclear process',
    followUpQuestion: 'Any sense of how many warm leads went quiet in the last month?',
    leakType: 'front_end'
  },
  {
    id: 'Q3',
    topic: 'Busywork',
    mainQuestion: 'What work eats the most of your week that isn\'t selling or delivering? Scheduling, reminders, quotes, paperwork, chasing people?',
    followUpTrigger: 'they name something specific',
    followUpQuestion: 'How many hours a week does that eat for you or your team?',
    leakType: 'time'
  },
  {
    id: 'Q4',
    topic: 'Tools that don\'t talk',
    mainQuestion: 'What tools do you use day to day? Phone, texts, email, CRM, booking, invoices, inventory?',
    followUpTrigger: 'after listing tools',
    followUpQuestion: 'Where do you re-type the same info, or lose something between tools?',
    leakType: 'time'
  },
  {
    id: 'Q5',
    topic: 'After-hours',
    mainQuestion: 'What happens when someone calls or messages after you close, or while you\'re with a customer?',
    followUpTrigger: 'they miss them',
    followUpQuestion: 'About how many of those a week? And what\'s a typical job or order worth when one of those turns into work?',
    leakType: 'after_hours'
  }
];

// Required on every call
export const ALWAYS_ASK = 'What\'s a typical job or order worth to you?';

// ============================================================================
// GUARANTEE TEXT (exact wording required)
// ============================================================================

export const GUARANTEE_SPOKEN = `If the problem we agree to fix isn't fixed by the date we set, we keep working on it free, and your monthly plan doesn't start until it's fixed. That date assumes we get the logins and answers we need from you. If we're waiting on you, it moves.`;

export const GUARANTEE_WRITTEN = `Guarantee: We agree to fix [exact problem, in your words]. It counts as fixed when it passes these checks and is accepted under Section 4: [simple check you can see, e.g. every new web lead gets a text back within 5 minutes and shows up in your CRM]. Target date: [date]. If it isn't fixed by then, we keep working on it at no charge, and your monthly plan starts only once it's fixed. The date moves one day for every day we're waiting on access, logins, or answers from you, or on an outside vendor, and we'll tell you in writing whenever we're waiting. If you change or add to the problem, we'll agree on a new date together. If it still isn't fixed 30 days after the target date, either of us can end things and you owe nothing. This guarantee covers the one problem above, not new requests.`;

// ============================================================================
// PRICING TIERS
// ============================================================================

export interface PricingTier {
  name: string;
  standardPrice: number;
  foundingPrice: number;
  description: string;
  includedFeatures: string[];
  offerWhen: string;
  minLeakForOneFifth: number;
}

export const PRICING_TIERS: Record<string, PricingTier> = {
  GET_COVERED: {
    name: 'Get Covered',
    standardPrice: 199,
    foundingPrice: 199,
    description: 'One leak, one trigger, up to 2 tools the owner already has',
    includedFeatures: [
      'One leak fixed',
      'Keep it working',
      'Small tweaks up to 30 minutes/month'
    ],
    offerWhen: 'Agreed leak is $1,000/mo or more and the fix is simple',
    minLeakForOneFifth: 1000
  },
  GET_COVERED_PLUS: {
    name: 'Get Covered Plus',
    standardPrice: 349,
    foundingPrice: 299,
    description: 'One leak that needs 3+ tools, multi-step flow, 300+ leads/mo, or 2+ locations',
    includedFeatures: [
      'One complex leak fixed',
      'Keep it working',
      'Small tweaks up to 60 minutes/month'
    ],
    offerWhen: 'The fix is complex and the agreed leak is $1,750/mo or more',
    minLeakForOneFifth: 1750
  },
  FULL_FIX: {
    name: 'Full Fix',
    standardPrice: 749,
    foundingPrice: 599,
    description: 'Up to 3 leaks, each with own checks and target date',
    includedFeatures: [
      'Up to 3 leaks fixed',
      '2 change items/month after acceptance',
      'Replies within 1 business day',
      '20-minute monthly check-in'
    ],
    offerWhen: '2 or more leaks that add up to $3,750/mo or more',
    minLeakForOneFifth: 3750
  }
};

export const FOUNDING_PRICE_RULES = {
  maxClients: 5,
  deadline: '2027-01-31',
  holdPeriod: '6 months after acceptance',
  requirement: 'A short testimonial with a real number'
};

export const LEAK_FLOOR = 1000; // Don't sell if agreed leak is under this

// ============================================================================
// OBJECTIONS AND RESPONSES (internal - never read to client)
// ============================================================================

export interface Objection {
  trigger: string[];
  internalName: string;
  response: string;
}

export const OBJECTIONS: Objection[] = [
  {
    trigger: ['think about it', 'need to think', 'let me think'],
    internalName: 'Stall - needs to think',
    response: `Ask: "Totally fair. What's your main concern? What are you afraid might happen if we start?" Then address that one thing. Close options: Main concern close, Hypothetical ("If this were a perfect fit, would you start?"), Best case/worst case with guarantee, or 1-to-10 scale.`
  },
  {
    trigger: ['ai phone thing', 'robot depot', 'robotdepot', 'ai phone again', 'that ai thing'],
    internalName: 'RobotDepot customer skepticism',
    response: `Say: "Straight answer: it can be part of the fix, but it's not where we start. We start with where money and time leak in the business. If missed calls are the leak, an AI receptionist that answers, books, and texts back is one fix we can put in. If calls aren't the leak, we don't push it."`
  },
  {
    trigger: ['already tried', 'tried an ai', 'ai receptionist sucked', 'didn\'t work', 'bad experience'],
    internalName: 'Previous bad AI experience',
    response: `Ask: "That's fair. What happened? Did it not pick up, say the wrong thing, not book, or did people just hang up?" Then: "We do it the other way around. We start with what's leaking. Before you pay a cent, it has to pass checks we agree on. If what broke last time was [their words], that's one of the checks."`
  },
  {
    trigger: ['$97', 'ninety-seven', 'someone quoted', 'cheaper option', 'too expensive'],
    internalName: 'Price comparison / cheaper quote',
    response: `Say: "Could be a fair deal. Before you compare, a few questions: what is it fixing, what's included, and who fixes it when it breaks? You said missed calls cost you about $[agreed] a month. Ours is $199 a month, flat. No setup fee, you don't pay until it passes checks you sign off on. Ask them: is there a per-minute charge on top, and what does a busy month cost? I won't drop the price, but if you want to start smaller, we can fix just the biggest piece first."`
  }
];

// ============================================================================
// VOICE RECEPTIONIST SPECIFICS
// ============================================================================

export const VOICE_RECEPTIONIST_NOTES = {
  positioning: 'One possible fix when missed calls are the leak, never the headline',
  standardSetup: {
    tier: 'GET_COVERED',
    price: 199,
    includes: [
      'Answers when you can\'t',
      'Takes booking request (caller\'s chosen time) or callback',
      'Texts owner to confirm',
      'Writes to existing CRM/job tool connector',
      'After-hours rules',
      'Texts owner or caller'
    ],
    limitations: [
      'Google Calendar: can\'t check open slots, only books the time caller asks for',
      'Square: can\'t reschedule, must cancel and rebook'
    ]
  },
  movesToPlus: 'Only when it needs an integration that isn\'t available out of the box and requires a custom build'
};

// ============================================================================
// TIER DECISION RULES
// ============================================================================

export interface TierDecisionInput {
  agreedLeakMonthly: number;
  numberOfLeaks: number;
  toolCount: number;
  hasMultiStepFlow: boolean;
  leadsPerMonth: number;
  locationCount: number;
  needsCustomIntegration: boolean;
}

export function recommendTier(input: TierDecisionInput, useFoundingPrices: boolean): TierRecommendation {
  const { agreedLeakMonthly, numberOfLeaks, toolCount, hasMultiStepFlow, leadsPerMonth, locationCount, needsCustomIntegration } = input;
  
  // Rule 1: Under $1,000/month - don't sell
  if (agreedLeakMonthly < LEAK_FLOOR) {
    return {
      tier: null,
      price: 0,
      reason: `Agreed leak ($${agreedLeakMonthly}/mo) is under $${LEAK_FLOOR}. Don't sell a monthly plan. Give one free tip and the first three things to set up themselves, and check back in 60 days.`,
      passesOneFifth: false
    };
  }
  
  // Determine complexity factors
  const isComplex = toolCount >= 3 || hasMultiStepFlow || leadsPerMonth > 300 || locationCount >= 2 || needsCustomIntegration;
  
  // Rule 4: Two or more leaks adding to $3,750+
  if (numberOfLeaks >= 2 && agreedLeakMonthly >= 3750) {
    const tier = PRICING_TIERS.FULL_FIX;
    const price = useFoundingPrices ? tier.foundingPrice : tier.standardPrice;
    const ratio = agreedLeakMonthly / price;
    const passesOneFifth = ratio >= 5;
    
    return {
      tier: 'FULL_FIX',
      price,
      reason: `${numberOfLeaks} leaks totaling $${agreedLeakMonthly}/mo. Full Fix at $${price}/mo gives 1/${ratio.toFixed(1)} ratio.`,
      passesOneFifth,
      warning: !passesOneFifth ? `Price ratio is 1/${ratio.toFixed(1)}, should be 1/5 or better` : undefined
    };
  }
  
  // Two leaks under $3,750 - fix bigger one first
  if (numberOfLeaks >= 2 && agreedLeakMonthly < 3750) {
    // Suggest Get Covered or Plus for the bigger leak, then Add a leak later
    const tier = isComplex ? PRICING_TIERS.GET_COVERED_PLUS : PRICING_TIERS.GET_COVERED;
    const price = useFoundingPrices ? tier.foundingPrice : tier.standardPrice;
    const ratio = agreedLeakMonthly / price;
    
    return {
      tier: isComplex ? 'GET_COVERED_PLUS' : 'GET_COVERED',
      price,
      reason: `Two leaks but only $${agreedLeakMonthly}/mo total. Fix the bigger one on ${tier.name} first, then Add a leak later.`,
      passesOneFifth: ratio >= 5,
      warning: `Two leaks but under $3,750. Don't push Full Fix - fix the bigger leak first.`
    };
  }
  
  // Rule 3: Complex one-leak scenario
  if (isComplex && agreedLeakMonthly >= 1750) {
    const tier = PRICING_TIERS.GET_COVERED_PLUS;
    const price = useFoundingPrices ? tier.foundingPrice : tier.standardPrice;
    const ratio = agreedLeakMonthly / price;
    const passesOneFifth = ratio >= 5;
    
    return {
      tier: 'GET_COVERED_PLUS',
      price,
      reason: `Complex fix (${toolCount >= 3 ? '3+ tools' : ''}${hasMultiStepFlow ? ', multi-step flow' : ''}${leadsPerMonth > 300 ? ', high volume' : ''}${locationCount >= 2 ? ', multiple locations' : ''}${needsCustomIntegration ? ', custom integration needed' : ''}). Plus at $${price}/mo gives 1/${ratio.toFixed(1)} ratio.`,
      passesOneFifth,
      warning: !passesOneFifth ? `Price ratio is 1/${ratio.toFixed(1)}, should be 1/5 or better` : undefined
    };
  }
  
  // Rule 2: Simple one-leak scenario
  const tier = PRICING_TIERS.GET_COVERED;
  const price = useFoundingPrices ? tier.foundingPrice : tier.standardPrice;
  const ratio = agreedLeakMonthly / price;
  const passesOneFifth = ratio >= 5;
  
  return {
    tier: 'GET_COVERED',
    price,
    reason: `Simple fix with agreed leak of $${agreedLeakMonthly}/mo. Get Covered at $${price}/mo gives 1/${ratio.toFixed(1)} ratio.`,
    passesOneFifth,
    warning: !passesOneFifth ? `Price ratio is 1/${ratio.toFixed(1)}, should be 1/5 or better. Consider shrinking scope.` : undefined
  };
}

export interface TierRecommendation {
  tier: string | null;
  price: number;
  reason: string;
  passesOneFifth: boolean;
  warning?: string;
}

// ============================================================================
// STEERING HINTS
// ============================================================================

export const STEERING_HINTS: Record<string, string> = {
  off_topic: 'Gently steer back: "That\'s interesting - let me make a note. Going back to [current question topic]..."',
  no_numbers: 'Need specifics: "Roughly how many per week?" or "What would you say that costs you in a typical month?"',
  rushing: 'Slow down: "Let me make sure I have this right before we move on..."',
  venting: 'Acknowledge, then refocus: "That sounds frustrating. Let me ask - when that happens, about how often is it?"',
  technical_tangent: 'Keep it simple: "Makes sense. For now, let\'s focus on the impact - how much time does that eat up?"'
};

// ============================================================================
// COPY TEMPLATES FOR SUMMARIES
// ============================================================================

export const SUMMARY_TEMPLATES = {
  scopeRecap: {
    problem: '[FILL: the problem, in their exact words]',
    checks: [
      '[FILL: specific pass/fail check 1]',
      '[FILL: specific pass/fail check 2]',
      '[FILL: specific pass/fail check 3, optional]'
    ],
    targetDate: '[FILL: agreed target date]',
    guarantee: GUARANTEE_WRITTEN
  },
  day30Recap: {
    whatWeFixed: '[FILL: the problem, in their words]',
    metrics: [
      '[#] missed calls got a text back',
      '[#] new leads got an answer in under 5 minutes',
      '[#] follow-ups went out without anyone having to remember',
      '[#] bookings came in through the fix'
    ],
    roughValue: 'You told us a typical job is worth about $[job value]. [#] of these turned into booked work, so that could be worth about $[# x job value]. We only counted the ones that booked, not every lead.',
    comparison: 'On our call we put this leak at about $[agreed leak] a month. Your plan is $[plan price] a month. In 30 days the fix caught about $[rough value] of work you\'d likely have missed.'
  }
};
