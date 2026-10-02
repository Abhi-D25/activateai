/**
 * ActivateAI Call Copilot - Deterministic Extractor
 * 
 * Extracts numbers, phrases, and objections from transcript text
 * without requiring an LLM. Used as fallback when no API key is set.
 */

import { LeakInput, transcriptInput } from './calculator';
import { OBJECTIONS, DISCOVERY_QUESTIONS, LeakType } from './knowledge';

// ============================================================================
// NUMBER EXTRACTION
// ============================================================================

export interface ExtractedNumber {
  value: number;
  unit: string | null;
  context: string;
  quote: string;
  confidence: 'high' | 'medium' | 'low';
}

const NUMBER_WORDS: Record<string, number> = {
  'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
  'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
  'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
  'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20,
  'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
  'eighty': 80, 'ninety': 90, 'hundred': 100, 'thousand': 1000,
  'a few': 3, 'several': 5, 'couple': 2, 'a couple': 2, 'few': 3,
  'half': 0.5, 'quarter': 0.25, 'third': 0.33
};

const MONEY_PATTERNS = [
  /\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/gi, // $1,234.56
  /(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)\s*(?:dollars?|bucks?)/gi, // 1234 dollars
  /about\s*\$?(\d+)/gi, // about $500
  /around\s*\$?(\d+)/gi, // around 500
  /roughly\s*\$?(\d+)/gi, // roughly 350
  /maybe\s*\$?(\d+)/gi, // maybe 200
  /like\s*\$?(\d+)/gi, // like 300
];

const TIME_PATTERNS = [
  /(\d+)\s*(?:hours?|hrs?)\s*(?:a\s*|per\s*)?(?:week|day|month)/gi,
  /(?:about|around|maybe|like)\s*(\d+)\s*hours?/gi,
  /(\d+)\s*to\s*(\d+)\s*hours?/gi, // range like "5 to 10 hours"
];

const COUNT_PATTERNS = [
  /(\d+)\s*(?:calls?|leads?|customers?|clients?|jobs?|orders?|appointments?|bookings?)/gi,
  /(?:about|around|maybe|like|roughly)\s*(\d+)\s*(?:a\s*|per\s*)?(?:week|day|month)/gi,
  /miss(?:ed|ing)?\s*(?:about|around)?\s*(\d+)/gi, // missing/missed X
  /lose\s*(?:about|around)?\s*(\d+)/gi, // lose X
  /(\d+)\s*(?:percent|%)/gi,
];

/**
 * Extract money amounts from text
 */
export function extractMoney(text: string): ExtractedNumber[] {
  const results: ExtractedNumber[] = [];
  const normalizedText = text.toLowerCase();
  
  for (const pattern of MONEY_PATTERNS) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(normalizedText)) !== null) {
      const rawValue = match[1].replace(/,/g, '');
      const value = parseFloat(rawValue);
      
      if (!isNaN(value) && value > 0) {
        // Get surrounding context
        const start = Math.max(0, match.index - 30);
        const end = Math.min(text.length, match.index + match[0].length + 30);
        const quote = text.slice(start, end).trim();
        
        // Determine context
        const context = inferMoneyContext(normalizedText, match.index);
        
        results.push({
          value,
          unit: 'dollars',
          context,
          quote,
          confidence: determineConfidence(match[0])
        });
      }
    }
  }
  
  // Also check for word numbers with money context
  for (const [word, num] of Object.entries(NUMBER_WORDS)) {
    const moneyPattern = new RegExp(`(${word})\\s*(?:hundred|thousand)?\\s*(?:dollars?|bucks?)`, 'gi');
    let match;
    while ((match = moneyPattern.exec(normalizedText)) !== null) {
      let value = num;
      if (match[0].includes('hundred')) value *= 100;
      if (match[0].includes('thousand')) value *= 1000;
      
      const start = Math.max(0, match.index - 30);
      const end = Math.min(text.length, match.index + match[0].length + 30);
      
      results.push({
        value,
        unit: 'dollars',
        context: inferMoneyContext(normalizedText, match.index),
        quote: text.slice(start, end).trim(),
        confidence: 'medium'
      });
    }
  }
  
  return deduplicateNumbers(results);
}

/**
 * Extract time/hour amounts from text
 */
export function extractHours(text: string): ExtractedNumber[] {
  const results: ExtractedNumber[] = [];
  const normalizedText = text.toLowerCase();
  
  for (const pattern of TIME_PATTERNS) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(normalizedText)) !== null) {
      // Handle ranges - take the midpoint
      let value: number;
      if (match[2]) {
        value = (parseFloat(match[1]) + parseFloat(match[2])) / 2;
      } else {
        value = parseFloat(match[1]);
      }
      
      if (!isNaN(value) && value > 0 && value < 168) { // Max hours in a week
        const start = Math.max(0, match.index - 20);
        const end = Math.min(text.length, match.index + match[0].length + 20);
        
        results.push({
          value,
          unit: inferTimeUnit(match[0]),
          context: 'time',
          quote: text.slice(start, end).trim(),
          confidence: match[2] ? 'medium' : 'high' // Ranges are less certain
        });
      }
    }
  }
  
  // Check for word numbers
  for (const [word, num] of Object.entries(NUMBER_WORDS)) {
    if (num <= 0 || num > 80) continue;
    const hourPattern = new RegExp(`(${word})\\s*hours?`, 'gi');
    let match;
    while ((match = hourPattern.exec(normalizedText)) !== null) {
      const start = Math.max(0, match.index - 20);
      const end = Math.min(text.length, match.index + match[0].length + 20);
      
      results.push({
        value: num,
        unit: 'hours/week',
        context: 'time',
        quote: text.slice(start, end).trim(),
        confidence: 'medium'
      });
    }
  }
  
  return deduplicateNumbers(results);
}

/**
 * Extract counts (calls, leads, jobs, etc.)
 */
export function extractCounts(text: string): ExtractedNumber[] {
  const results: ExtractedNumber[] = [];
  const normalizedText = text.toLowerCase();
  
  for (const pattern of COUNT_PATTERNS) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(normalizedText)) !== null) {
      const value = parseFloat(match[1]);
      
      if (!isNaN(value) && value > 0 && value < 10000) {
        const start = Math.max(0, match.index - 20);
        const end = Math.min(text.length, match.index + match[0].length + 30);
        
        results.push({
          value,
          unit: inferCountUnit(match[0]),
          context: inferCountContext(match[0]),
          quote: text.slice(start, end).trim(),
          confidence: 'high'
        });
      }
    }
  }
  
  return deduplicateNumbers(results);
}

// ============================================================================
// OBJECTION DETECTION
// ============================================================================

export interface DetectedObjection {
  objectionKey: string;
  trigger: string;
  quote: string;
  suggestedResponse: string;
}

/**
 * Detect objections in prospect speech
 */
export function detectObjections(text: string): DetectedObjection[] {
  const results: DetectedObjection[] = [];
  const normalizedText = text.toLowerCase();
  
  for (const objection of OBJECTIONS) {
    for (const trigger of objection.trigger) {
      if (normalizedText.includes(trigger.toLowerCase())) {
        // Find the quote context
        const idx = normalizedText.indexOf(trigger.toLowerCase());
        const start = Math.max(0, idx - 20);
        const end = Math.min(text.length, idx + trigger.length + 40);
        
        results.push({
          objectionKey: objection.internalName,
          trigger,
          quote: text.slice(start, end).trim(),
          suggestedResponse: objection.response
        });
        break; // Only match once per objection type
      }
    }
  }
  
  return results;
}

// ============================================================================
// QUESTION TRACKING
// ============================================================================

export interface QuestionStatus {
  questionId: string;
  topic: string;
  asked: boolean;
  answered: boolean;
  extractedData: ExtractedNumber[];
}

const QUESTION_INDICATORS: Record<string, string[]> = {
  'Q1': ['lead', 'leads', 'new customer', 'inquiry', 'inquiries', 'grabs it', 'respond'],
  'Q2': ['follow up', 'follow-up', 'followup', 'later', 'quiet', 'went cold', 'ghosted'],
  'Q3': ['busywork', 'busy work', 'paperwork', 'scheduling', 'admin', 'hours a week'],
  'Q4': ['tools', 'crm', 'booking', 'software', 're-type', 'retype', 'lose something'],
  'Q5': ['after hours', 'after-hours', 'close', 'with a customer', 'miss calls', 'evening', 'weekend']
};

/**
 * Track which questions have been asked/answered based on transcript
 */
export function trackQuestions(transcriptSegments: string[]): QuestionStatus[] {
  const fullText = transcriptSegments.join(' ').toLowerCase();
  
  return DISCOVERY_QUESTIONS.map(q => {
    const indicators = QUESTION_INDICATORS[q.id] || [];
    const asked = indicators.some(ind => fullText.includes(ind));
    
    // Check if there seems to be numerical data for this question
    const extractedData: ExtractedNumber[] = [];
    if (asked) {
      if (q.id === 'Q1' || q.id === 'Q2' || q.id === 'Q5') {
        extractedData.push(...extractCounts(fullText));
        extractedData.push(...extractMoney(fullText));
      } else if (q.id === 'Q3') {
        extractedData.push(...extractHours(fullText));
      }
    }
    
    return {
      questionId: q.id,
      topic: q.topic,
      asked,
      answered: extractedData.length > 0,
      extractedData
    };
  });
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function inferMoneyContext(text: string, position: number): string {
  const before = text.slice(Math.max(0, position - 50), position).toLowerCase();
  
  if (before.includes('job') || before.includes('order') || before.includes('typical') || before.includes('average')) {
    return 'job_value';
  }
  if (before.includes('hour') || before.includes('time') || before.includes('worth')) {
    return 'hourly_value';
  }
  if (before.includes('bill') || before.includes('invoice') || before.includes('owe')) {
    return 'bill_value';
  }
  if (before.includes('lose') || before.includes('lost') || before.includes('miss') || before.includes('cost')) {
    return 'loss_value';
  }
  
  return 'unknown';
}

function inferTimeUnit(match: string): string {
  if (match.includes('day')) return 'hours/day';
  if (match.includes('month')) return 'hours/month';
  return 'hours/week';
}

function inferCountUnit(match: string): string {
  if (match.includes('call')) return 'calls';
  if (match.includes('lead')) return 'leads';
  if (match.includes('customer') || match.includes('client')) return 'customers';
  if (match.includes('job') || match.includes('order')) return 'jobs';
  if (match.includes('percent') || match.includes('%')) return 'percent';
  return 'count';
}

function inferCountContext(match: string): string {
  if (match.includes('miss') || match.includes('lose') || match.includes('lost')) {
    return 'missed';
  }
  return 'total';
}

function determineConfidence(match: string): 'high' | 'medium' | 'low' {
  if (match.includes('about') || match.includes('around') || match.includes('maybe') || match.includes('like') || match.includes('roughly')) {
    return 'medium';
  }
  return 'high';
}

function deduplicateNumbers(numbers: ExtractedNumber[]): ExtractedNumber[] {
  const seen = new Set<string>();
  return numbers.filter(n => {
    const key = `${n.value}-${n.context}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ============================================================================
// COMBINED EXTRACTION
// ============================================================================

export interface ExtractionResult {
  money: ExtractedNumber[];
  hours: ExtractedNumber[];
  counts: ExtractedNumber[];
  objections: DetectedObjection[];
  jobValue: LeakInput | null;
  hourlyValue: LeakInput | null;
}

/**
 * Run all extractors on a piece of text
 */
export function extractAll(text: string): ExtractionResult {
  const money = extractMoney(text);
  const hours = extractHours(text);
  const counts = extractCounts(text);
  const objections = detectObjections(text);
  
  // Try to identify job value and hourly value
  const jobValueMatch = money.find(m => m.context === 'job_value');
  const hourlyValueMatch = money.find(m => m.context === 'hourly_value');
  
  return {
    money,
    hours,
    counts,
    objections,
    jobValue: jobValueMatch ? transcriptInput(jobValueMatch.value, jobValueMatch.quote) : null,
    hourlyValue: hourlyValueMatch ? transcriptInput(hourlyValueMatch.value, hourlyValueMatch.quote) : null
  };
}
