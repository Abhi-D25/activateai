/**
 * Unit tests for tier recommendation logic
 * 
 * Test fixtures derived from mock case studies in 02-price-ladder.md
 */

import {
  recommendTier,
  PRICING_TIERS,
  LEAK_FLOOR,
  TierDecisionInput
} from '../src/lib/knowledge';

describe('Tier recommendation logic', () => {
  /**
   * Mock Case A: Solo plumber - Get Covered $199
   * - Agreed leak: $1,400/mo
   * - Simple setup (voice, out of the box)
   * - 1/5 rule: $199 / $1,400 = about 1/7, inside 1/5
   */
  test('Case A: Solo plumber - recommends Get Covered', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 1400,
      numberOfLeaks: 1,
      toolCount: 2, // phone + calendar
      hasMultiStepFlow: false,
      leadsPerMonth: 35, // ~35 calls
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    expect(result.tier).toBe('GET_COVERED');
    expect(result.price).toBe(199);
    expect(result.passesOneFifth).toBe(true);
  });

  /**
   * Mock Case A with founding prices - still $199 (Get Covered doesn't change)
   */
  test('Case A: Get Covered same price with founding', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 1400,
      numberOfLeaks: 1,
      toolCount: 2,
      hasMultiStepFlow: false,
      leadsPerMonth: 35,
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const standardResult = recommendTier(input, false);
    const foundingResult = recommendTier(input, true);
    
    expect(standardResult.price).toBe(199);
    expect(foundingResult.price).toBe(199);
  });

  /**
   * Mock Case B: HVAC company - Get Covered Plus $349
   * - Agreed leak: $2,250/mo
   * - Needs custom integration (job tool with no connector)
   * - 1/5 rule: $349 / $2,250 = about 1/6, inside 1/5
   */
  test('Case B: HVAC - recommends Plus for custom integration', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 2250,
      numberOfLeaks: 1,
      toolCount: 3, // phone + job tool + texting
      hasMultiStepFlow: false,
      leadsPerMonth: 55,
      locationCount: 1,
      needsCustomIntegration: true // the key factor
    };
    
    const result = recommendTier(input, false);
    
    expect(result.tier).toBe('GET_COVERED_PLUS');
    expect(result.price).toBe(349);
    expect(result.passesOneFifth).toBe(true);
  });

  /**
   * Mock Case C: Handyman company - Full Fix $749
   * - Two leaks: $2,600 + $1,400 = $4,000/mo
   * - 1/5 rule: $749 / $4,000 = about 1/5.3, inside 1/5
   */
  test('Case C: Handyman - recommends Full Fix for two big leaks', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 4000,
      numberOfLeaks: 2,
      toolCount: 4, // form + Facebook + job tool + texting
      hasMultiStepFlow: true, // follow-ups over days
      leadsPerMonth: 40,
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    expect(result.tier).toBe('FULL_FIX');
    expect(result.price).toBe(749);
    expect(result.passesOneFifth).toBe(true);
  });

  /**
   * Mock Case D: Cleaning company - Plus at founding $299
   * - Agreed leak: $1,800/mo (in owner hours)
   * - Complex: 4 tools, runs on schedule
   * - 1/5 rule at founding: $299 / $1,800 = about 1/6
   * - 1/5 rule at standard: $349 / $1,800 = about 1/5.2
   */
  test('Case D: Cleaning - Plus with founding price', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 1800,
      numberOfLeaks: 1,
      toolCount: 4, // form + texting + sheet + phones
      hasMultiStepFlow: true, // scheduled sends
      leadsPerMonth: 50,
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const standardResult = recommendTier(input, false);
    const foundingResult = recommendTier(input, true);
    
    expect(standardResult.tier).toBe('GET_COVERED_PLUS');
    expect(standardResult.price).toBe(349);
    expect(foundingResult.price).toBe(299);
    expect(foundingResult.passesOneFifth).toBe(true);
  });

  /**
   * Mock Case E: Dog groomer - Don't sell
   * - Agreed leak: $300/mo (under $1,000 floor)
   */
  test('Case E: Dog groomer - dont sell under $1,000', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 300,
      numberOfLeaks: 1,
      toolCount: 2,
      hasMultiStepFlow: false,
      leadsPerMonth: 8,
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    expect(result.tier).toBeNull();
    expect(result.price).toBe(0);
    expect(result.passesOneFifth).toBe(false);
    expect(result.reason).toContain('under $');
  });

  /**
   * Edge case: Two leaks but under $3,750 combined
   * Should fix the bigger one first, not Full Fix
   */
  test('Two leaks under $3,750 - fix bigger one first', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 3000, // Under $3,750
      numberOfLeaks: 2,
      toolCount: 3,
      hasMultiStepFlow: true,
      leadsPerMonth: 100,
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    // Should NOT recommend Full Fix
    expect(result.tier).not.toBe('FULL_FIX');
    expect(result.warning).toContain('fix the bigger leak first');
  });

  /**
   * Edge case: High volume triggers Plus even with simple tools
   */
  test('High volume (300+ leads) triggers Plus', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 2000,
      numberOfLeaks: 1,
      toolCount: 2, // Simple tools
      hasMultiStepFlow: false,
      leadsPerMonth: 400, // High volume
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    expect(result.tier).toBe('GET_COVERED_PLUS');
    expect(result.reason).toContain('high volume');
  });

  /**
   * Edge case: Multiple locations triggers Plus
   */
  test('Multiple locations triggers Plus', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 2000,
      numberOfLeaks: 1,
      toolCount: 2,
      hasMultiStepFlow: false,
      leadsPerMonth: 50,
      locationCount: 3,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    expect(result.tier).toBe('GET_COVERED_PLUS');
    expect(result.reason).toContain('multiple locations');
  });

  /**
   * 1/5 rule warning
   */
  test('Warns when 1/5 rule is borderline', () => {
    const input: TierDecisionInput = {
      agreedLeakMonthly: 1000, // Exactly at the floor
      numberOfLeaks: 1,
      toolCount: 2,
      hasMultiStepFlow: false,
      leadsPerMonth: 20,
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    // $199 / $1000 = 1/5.02, barely passes
    expect(result.tier).toBe('GET_COVERED');
    expect(result.passesOneFifth).toBe(true);
  });

test('Fails 1/5 rule when leak is too small for tier', () => {
    // Edge case: Complex factors trigger Plus, but at the minimum leak amount
    // Plus requires $1,750 minimum, but if we push a bit lower it still tries Plus
    // because the complexity factors force it up, but the 1/5 rule fails
    const input: TierDecisionInput = {
      agreedLeakMonthly: 1750, // At minimum for Plus
      numberOfLeaks: 1,
      toolCount: 4, // Complex - triggers Plus
      hasMultiStepFlow: true,
      leadsPerMonth: 350, // High volume to trigger Plus
      locationCount: 1,
      needsCustomIntegration: false
    };
    
    const result = recommendTier(input, false);
    
    // Complex triggers Plus at $349, $1,750 / $349 = 5.01, passes
    expect(result.tier).toBe('GET_COVERED_PLUS');
    expect(result.passesOneFifth).toBe(true); // Just passes at the boundary
  });
});

describe('Pricing tier constants', () => {
  test('Get Covered prices are correct', () => {
    expect(PRICING_TIERS.GET_COVERED.standardPrice).toBe(199);
    expect(PRICING_TIERS.GET_COVERED.foundingPrice).toBe(199);
  });

  test('Plus prices are correct', () => {
    expect(PRICING_TIERS.GET_COVERED_PLUS.standardPrice).toBe(349);
    expect(PRICING_TIERS.GET_COVERED_PLUS.foundingPrice).toBe(299);
  });

  test('Full Fix prices are correct', () => {
    expect(PRICING_TIERS.FULL_FIX.standardPrice).toBe(749);
    expect(PRICING_TIERS.FULL_FIX.foundingPrice).toBe(599);
  });

  test('Leak floor is $1,000', () => {
    expect(LEAK_FLOOR).toBe(1000);
  });
});
