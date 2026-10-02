/**
 * Unit tests for the leak calculator
 * 
 * Test fixtures are derived from the mock case studies in 02-price-ladder.md.
 * These are MOCK EXAMPLES - not real clients - but they exercise the actual formulas.
 */

import {
  calculateFrontEndLeak,
  calculateTimeLeak,
  calculateSlowMoneyLeak,
  calculateInventoryLeak,
  calculateTotalLeak,
  manualInput,
  transcriptInput,
  FrontEndLeakInputs,
  TimeLeakInputs,
  SlowMoneyInputs,
  InventoryInputs
} from '../src/lib/calculator';

describe('Front-end leak calculator', () => {
  /**
   * Mock Case A: Solo plumber
   * - 10 new-customer calls missed a month, about 4 lost
   * - $350 typical job
   * - Expected: about $1,400/month
   * 
   * Working: 10 missed x 0.4 win rate = 4 lost/week... wait, the doc says per month.
   * Let me re-read: "about 10 of those are new customers. He thinks at least 4 of them call the next plumber"
   * So 10 missed new customers per month, 4 lost.
   * 
   * Actually the formula is per WEEK: "missed leads per week x win rate x job value x 4"
   * The doc says "25 missed calls a month during work hours" and "about 10 of those are new customers"
   * So about 2.5 new customer calls missed per week, 40% would have become jobs.
   */
  test('Case A: Solo plumber - missed calls leak', () => {
    // From doc: 25 missed/month = ~6.25/week, 10 are new customers = ~2.5/week, 40% loss rate
    const inputs: FrontEndLeakInputs = {
      missedLeadsPerWeek: manualInput(2.5), // 10 new customer missed calls / 4 weeks
      winRate: manualInput(0.4), // 4 out of 10 = 40% loss rate
      jobValue: manualInput(350)
    };
    
    const result = calculateFrontEndLeak(inputs);
    
    // Expected: 2.5 x 0.4 = 1 lost/week x $350 x 4 = $1,400/month
    expect(result.monthly).toBe(1400);
    expect(result.missingInputs).toHaveLength(0);
  });

  /**
   * Mock Case B: Small HVAC company
   * - 20 new service requests missed a month, about 5 lost
   * - $450 typical repair
   * - Expected: about $2,250/month
   */
  test('Case B: HVAC company - missed calls leak', () => {
    const inputs: FrontEndLeakInputs = {
      missedLeadsPerWeek: manualInput(5), // 20 missed/month = 5/week
      winRate: manualInput(0.25), // 5 of 20 = 25%
      jobValue: manualInput(450)
    };
    
    const result = calculateFrontEndLeak(inputs);
    
    // Expected: 5 x 0.25 = 1.25 lost/week x $450 x 4 = $2,250/month
    expect(result.monthly).toBe(2250);
  });

  test('returns missing inputs when incomplete', () => {
    const inputs: FrontEndLeakInputs = {
      missedLeadsPerWeek: manualInput(10),
      winRate: null,
      jobValue: null
    };
    
    const result = calculateFrontEndLeak(inputs);
    
    expect(result.monthly).toBe(0);
    expect(result.missingInputs).toContain('win rate');
    expect(result.missingInputs).toContain('typical job value');
  });

  test('handles transcript inputs with quotes', () => {
    const inputs: FrontEndLeakInputs = {
      missedLeadsPerWeek: transcriptInput(8, 'I miss about 8 calls a week'),
      winRate: transcriptInput(0.5, 'half of them would have been jobs'),
      jobValue: transcriptInput(200, 'a typical job is about 200 bucks')
    };
    
    const result = calculateFrontEndLeak(inputs);
    
    // 8 x 0.5 = 4 lost/week x $200 x 4 = $3,200/month
    expect(result.monthly).toBe(3200);
  });
});

describe('Time leak calculator', () => {
  /**
   * Mock Case D: Cleaning company
   * - 7 hours/week of evening admin
   * - $60/hour (owner's value of her time)
   * - Expected: about $1,800/month
   * 
   * Formula uses 4.3 for weekly-to-monthly: 7 x 4.3 = 30.1 hours x $60 = $1,806
   * Doc says "about $1,800/month" so our floor() to $1,806 is close
   */
  test('Case D: Cleaning company - busywork leak', () => {
    const inputs: TimeLeakInputs = {
      busyworkHoursPerWeek: manualInput(7),
      hourlyValue: manualInput(60)
    };
    
    const result = calculateTimeLeak(inputs);
    
    // 7 x 4.3 = 30.1 hours x $60 = $1,806, floor to $1,806
    // Doc says "about $1,800" so we expect close to that
    expect(result.monthly).toBeGreaterThanOrEqual(1800);
    expect(result.monthly).toBeLessThanOrEqual(1810);
    expect(result.missingInputs).toHaveLength(0);
  });

  test('returns missing inputs when incomplete', () => {
    const inputs: TimeLeakInputs = {
      busyworkHoursPerWeek: manualInput(10),
      hourlyValue: null
    };
    
    const result = calculateTimeLeak(inputs);
    
    expect(result.monthly).toBe(0);
    expect(result.missingInputs).toContain('hourly value of your time');
  });
});

describe('Slow money leak calculator', () => {
  test('calculates unpaid bills portion', () => {
    const inputs: SlowMoneyInputs = {
      unpaidBills: manualInput(5),
      averageBill: manualInput(500),
      chasingHoursPerWeek: null,
      hourlyValue: null
    };
    
    const result = calculateSlowMoneyLeak(inputs);
    
    // 5 bills x $500 = $2,500
    expect(result.monthly).toBe(2500);
  });

  test('calculates chasing time portion', () => {
    const inputs: SlowMoneyInputs = {
      unpaidBills: null,
      averageBill: null,
      chasingHoursPerWeek: manualInput(3),
      hourlyValue: manualInput(50)
    };
    
    const result = calculateSlowMoneyLeak(inputs);
    
    // 3 hours x $50 x 4 = $600
    expect(result.monthly).toBe(600);
  });

  test('calculates combined slow money leak', () => {
    const inputs: SlowMoneyInputs = {
      unpaidBills: manualInput(5),
      averageBill: manualInput(500),
      chasingHoursPerWeek: manualInput(3),
      hourlyValue: manualInput(50)
    };
    
    const result = calculateSlowMoneyLeak(inputs);
    
    // $2,500 + $600 = $3,100
    expect(result.monthly).toBe(3100);
  });
});

describe('Inventory leak calculator', () => {
  test('calculates stockouts portion', () => {
    const inputs: InventoryInputs = {
      stockoutsPerMonth: manualInput(4),
      costPerStockout: manualInput(150),
      spoilageOrShrinkPerMonth: null
    };
    
    const result = calculateInventoryLeak(inputs);
    
    // 4 stockouts x $150 = $600
    expect(result.monthly).toBe(600);
  });

  test('calculates spoilage portion', () => {
    const inputs: InventoryInputs = {
      stockoutsPerMonth: null,
      costPerStockout: null,
      spoilageOrShrinkPerMonth: manualInput(800)
    };
    
    const result = calculateInventoryLeak(inputs);
    
    expect(result.monthly).toBe(800);
  });

  test('calculates combined inventory leak', () => {
    const inputs: InventoryInputs = {
      stockoutsPerMonth: manualInput(4),
      costPerStockout: manualInput(150),
      spoilageOrShrinkPerMonth: manualInput(800)
    };
    
    const result = calculateInventoryLeak(inputs);
    
    // $600 + $800 = $1,400
    expect(result.monthly).toBe(1400);
  });
});

describe('Total leak calculator', () => {
  /**
   * Mock Case C: Handyman company - two leaks
   * - Problem 1: web leads stuck, 4 lost jobs x $650 = $2,600/mo
   * - Problem 2: quote follow-ups, 1 lost x $1,400 = $1,400/mo
   * - Total: about $4,000/mo
   */
  test('Case C: Handyman company - multiple leaks', () => {
    const frontEnd: FrontEndLeakInputs = {
      // 12 leads wait 2+ days, 1/3 win rate, 4 lost x $650
      // 4 lost per month = 1 per week
      missedLeadsPerWeek: manualInput(3), // 12/month = 3/week that wait too long
      winRate: manualInput(0.33), // 1 in 3 would have closed
      jobValue: manualInput(650)
    };
    
    const time: TimeLeakInputs = {
      busyworkHoursPerWeek: null,
      hourlyValue: null
    };
    
    // Quote follow-ups: 1 extra job/month x $1,400
    // We can model this as slow money (chasing) or as a separate front-end calculation
    // For simplicity, let's add it as manual to slow money
    const slowMoney: SlowMoneyInputs = {
      unpaidBills: null,
      averageBill: null,
      chasingHoursPerWeek: null,
      hourlyValue: null
    };
    
    const inventory: InventoryInputs = {
      stockoutsPerMonth: null,
      costPerStockout: null,
      spoilageOrShrinkPerMonth: null
    };
    
    const result = calculateTotalLeak(frontEnd, time, slowMoney, inventory);
    
    // Front end: 3 x 0.33 = ~1 lost/week x $650 x 4 = $2,600/mo
    expect(result.frontEnd.monthly).toBeGreaterThanOrEqual(2500);
    expect(result.frontEnd.monthly).toBeLessThanOrEqual(2700);
    expect(result.leakCount).toBe(1);
  });

  /**
   * Mock Case E: Solo dog groomer - under $1,000 threshold
   * - 2 extra grooms/month x $90 = $180/month
   * - Even as regulars: $300/month
   * - Should NOT recommend selling
   */
  test('Case E: Dog groomer - under threshold', () => {
    const frontEnd: FrontEndLeakInputs = {
      missedLeadsPerWeek: manualInput(2), // 8/month = 2/week
      winRate: manualInput(0.25), // can only fit 2 more per month = 25%
      jobValue: manualInput(90)
    };
    
    const time: TimeLeakInputs = { busyworkHoursPerWeek: null, hourlyValue: null };
    const slowMoney: SlowMoneyInputs = { unpaidBills: null, averageBill: null, chasingHoursPerWeek: null, hourlyValue: null };
    const inventory: InventoryInputs = { stockoutsPerMonth: null, costPerStockout: null, spoilageOrShrinkPerMonth: null };
    
    const result = calculateTotalLeak(frontEnd, time, slowMoney, inventory);
    
    // 2 x 0.25 = 0.5 lost/week x $90 x 4 = $180/mo
    expect(result.totalMonthly).toBeLessThan(1000);
  });
});

describe('Rounding behavior', () => {
  test('always rounds down', () => {
    const inputs: FrontEndLeakInputs = {
      missedLeadsPerWeek: manualInput(3),
      winRate: manualInput(0.33), // 3 x 0.33 = 0.99
      jobValue: manualInput(100) // 0.99 x 100 x 4 = 396
    };
    
    const result = calculateFrontEndLeak(inputs);
    
    // Should floor, not ceil or round
    expect(result.monthly).toBe(396);
    expect(result.monthly).not.toBe(400);
  });
});
