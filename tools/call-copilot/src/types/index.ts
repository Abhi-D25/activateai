/**
 * ActivateAI Call Copilot - Type Definitions
 */

// ============================================================================
// AUDIO & TRANSCRIPTION
// ============================================================================

export interface AudioSource {
  id: string;
  label: string;
  type: 'mic' | 'tab' | 'system';
  stream: MediaStream | null;
  isActive: boolean;
}

export interface TranscriptSegment {
  id: string;
  speaker: 'abhi' | 'prospect' | 'unknown';
  text: string;
  timestamp: number;
  confidence: number;
  isFinal: boolean;
}

export interface TranscriptionState {
  isConnected: boolean;
  isListening: boolean;
  error: string | null;
  segments: TranscriptSegment[];
}

// ============================================================================
// CALL STATE
// ============================================================================

export interface LeakValues {
  frontEnd: {
    missedLeadsPerWeek: number | null;
    winRate: number | null;
    jobValue: number | null;
  };
  time: {
    busyworkHoursPerWeek: number | null;
    hourlyValue: number | null;
  };
  slowMoney: {
    unpaidBills: number | null;
    averageBill: number | null;
    chasingHoursPerWeek: number | null;
    hourlyValue: number | null;
  };
  inventory: {
    stockoutsPerMonth: number | null;
    costPerStockout: number | null;
    spoilageOrShrinkPerMonth: number | null;
  };
}

export interface LockedField {
  field: string;
  value: number;
  source: 'manual' | 'transcript';
  quote?: string;
}

export interface CallSession {
  id: string;
  startTime: number;
  businessName: string;
  contactName: string;
  currentStep: number;
  leakValues: LeakValues;
  lockedFields: Map<string, LockedField>;
  questionsAsked: Set<string>;
  agreedLeak: number | null;
  selectedTier: string | null;
  objectionsSeen: string[];
  notes: string;
}

// ============================================================================
// UI STATE
// ============================================================================

export type AppMode = 'idle' | 'live' | 'demo' | 'post-call';

export interface AppState {
  mode: AppMode;
  session: CallSession | null;
  transcription: TranscriptionState;
  useFoundingPrices: boolean;
  hasLLMKey: boolean;
  hasSTTKey: boolean;
  demoSpeed: number;
}

// ============================================================================
// POST-CALL
// ============================================================================

export interface PostCallSummary {
  businessName: string;
  contactName: string;
  callDate: string;
  leaksIdentified: Array<{
    type: string;
    description: string;
    monthlyAmount: number;
  }>;
  agreedLeak: number;
  recommendedTier: string;
  recommendedPrice: number;
  objectionsSeen: string[];
  nextStep: string;
  notes: string;
}

export interface ScopeRecapFields {
  problemDescription: string;
  checks: string[];
  targetDate: string;
  toolsInvolved: string[];
  loginsNeeded: string[];
}

export interface Day30RecapFields {
  metricsToTrack: string[];
  typicalJobValue: number;
  expectedImprovement: string;
}

// ============================================================================
// DEMO MODE
// ============================================================================

export interface DemoScenario {
  id: string;
  name: string;
  description: string;
  businessType: string;
  transcript: DemoTranscriptLine[];
  expectedLeaks: string[];
  expectedTier: string;
}

export interface DemoTranscriptLine {
  speaker: 'abhi' | 'prospect';
  text: string;
  delayMs: number;
}
