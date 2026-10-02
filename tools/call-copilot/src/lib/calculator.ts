/**
 * ActivateAI Call Copilot - Leak Calculator Module
 * 
 * Formulas from requirements:
 * - Front end: missed leads per week x win rate x job value x 4
 * - Time: busywork hours per week x hourly value x 4
 * - Slow money: unpaid or late bills x average bill, plus chasing hours x hourly value x 4
 * - Inventory: stockouts x cost per stockout, plus spoilage or shrink
 * 
 * All results are monthly and rounded down.
 */

export interface LeakInput {
  source: 'transcript' | 'manual';
  quote?: string; // The quote from the transcript where this number came from
  value: number;
  locked?: boolean; // If true, manual edit - don't overwrite with transcript data
}

export interface FrontEndLeakInputs {
  missedLeadsPerWeek: LeakInput | null;
  winRate: LeakInput | null; // as decimal, e.g., 0.4 for 40%
  jobValue: LeakInput | null;
}

export interface TimeLeakInputs {
  busyworkHoursPerWeek: LeakInput | null;
  hourlyValue: LeakInput | null;
}

export interface SlowMoneyInputs {
  unpaidBills: LeakInput | null;
  averageBill: LeakInput | null;
  chasingHoursPerWeek: LeakInput | null;
  hourlyValue: LeakInput | null;
}

export interface InventoryInputs {
  stockoutsPerMonth: LeakInput | null;
  costPerStockout: LeakInput | null;
  spoilageOrShrinkPerMonth: LeakInput | null;
}

export interface LeakCalculation {
  monthly: number;
  formula: string;
  breakdown: string;
  missingInputs: string[];
}

/**
 * Calculate front-end leak (missed leads/calls)
 * Formula: missed leads per week x win rate x job value x 4
 */
export function calculateFrontEndLeak(inputs: FrontEndLeakInputs): LeakCalculation {
  const missingInputs: string[] = [];
  
  if (!inputs.missedLeadsPerWeek) missingInputs.push('missed leads per week');
  if (!inputs.winRate) missingInputs.push('win rate');
  if (!inputs.jobValue) missingInputs.push('typical job value');
  
  if (missingInputs.length > 0) {
    return {
      monthly: 0,
      formula: 'missed leads/week x win rate x job value x 4',
      breakdown: 'Need more numbers to calculate',
      missingInputs
    };
  }
  
  const missedLeads = inputs.missedLeadsPerWeek!.value;
  const winRate = inputs.winRate!.value;
  const jobValue = inputs.jobValue!.value;
  
  // Calculate: missed x win rate = lost jobs, x job value x 4 weeks
  const lostJobsPerWeek = missedLeads * winRate;
  const monthlyLeak = Math.floor(lostJobsPerWeek * jobValue * 4);
  
  return {
    monthly: monthlyLeak,
    formula: 'missed leads/week x win rate x job value x 4',
    breakdown: `${missedLeads} missed/week x ${(winRate * 100).toFixed(0)}% win rate = ${lostJobsPerWeek.toFixed(1)} lost/week x $${jobValue} x 4 = $${monthlyLeak}/mo`,
    missingInputs: []
  };
}

/**
 * Calculate time leak (busywork)
 * Formula: busywork hours per week x hourly value x 4
 */
export function calculateTimeLeak(inputs: TimeLeakInputs): LeakCalculation {
  const missingInputs: string[] = [];
  
  if (!inputs.busyworkHoursPerWeek) missingInputs.push('busywork hours per week');
  if (!inputs.hourlyValue) missingInputs.push('hourly value of your time');
  
  if (missingInputs.length > 0) {
    return {
      monthly: 0,
      formula: 'busywork hours/week x hourly value x 4',
      breakdown: 'Need more numbers to calculate',
      missingInputs
    };
  }
  
  const hours = inputs.busyworkHoursPerWeek!.value;
  const hourlyValue = inputs.hourlyValue!.value;
  
  // Use 4.3 for more accurate weekly-to-monthly conversion (as per price ladder doc)
  const monthlyHours = hours * 4.3;
  const monthlyLeak = Math.floor(monthlyHours * hourlyValue);
  
  return {
    monthly: monthlyLeak,
    formula: 'busywork hours/week x hourly value x 4.3',
    breakdown: `${hours} hours/week x 4.3 = ${monthlyHours.toFixed(0)} hours/mo x $${hourlyValue}/hr = $${monthlyLeak}/mo`,
    missingInputs: []
  };
}

/**
 * Calculate slow money leak (collections/late payments)
 * Formula: unpaid bills x average bill + chasing hours x hourly value x 4
 */
export function calculateSlowMoneyLeak(inputs: SlowMoneyInputs): LeakCalculation {
  const missingInputs: string[] = [];
  let monthlyLeak = 0;
  const parts: string[] = [];
  
  // Calculate unpaid bills portion if we have the inputs
  if (inputs.unpaidBills && inputs.averageBill) {
    const unpaidPortion = Math.floor(inputs.unpaidBills.value * inputs.averageBill.value);
    monthlyLeak += unpaidPortion;
    parts.push(`${inputs.unpaidBills.value} unpaid bills x $${inputs.averageBill.value} = $${unpaidPortion}`);
  } else {
    if (!inputs.unpaidBills) missingInputs.push('number of unpaid/late bills');
    if (!inputs.averageBill) missingInputs.push('average bill amount');
  }
  
  // Calculate chasing time portion if we have the inputs
  if (inputs.chasingHoursPerWeek && inputs.hourlyValue) {
    const chasingPortion = Math.floor(inputs.chasingHoursPerWeek.value * inputs.hourlyValue.value * 4);
    monthlyLeak += chasingPortion;
    parts.push(`${inputs.chasingHoursPerWeek.value} chasing hrs/week x $${inputs.hourlyValue.value}/hr x 4 = $${chasingPortion}`);
  }
  
  if (parts.length === 0) {
    return {
      monthly: 0,
      formula: 'unpaid bills x avg bill + chasing hours x hourly value x 4',
      breakdown: 'Need more numbers to calculate',
      missingInputs
    };
  }
  
  return {
    monthly: monthlyLeak,
    formula: 'unpaid bills x avg bill + chasing hours x hourly value x 4',
    breakdown: parts.join(' + ') + ` = $${monthlyLeak}/mo`,
    missingInputs
  };
}

/**
 * Calculate inventory leak (stockouts + spoilage)
 * Formula: stockouts x cost per stockout + spoilage/shrink
 */
export function calculateInventoryLeak(inputs: InventoryInputs): LeakCalculation {
  const missingInputs: string[] = [];
  let monthlyLeak = 0;
  const parts: string[] = [];
  
  // Calculate stockouts portion
  if (inputs.stockoutsPerMonth && inputs.costPerStockout) {
    const stockoutPortion = Math.floor(inputs.stockoutsPerMonth.value * inputs.costPerStockout.value);
    monthlyLeak += stockoutPortion;
    parts.push(`${inputs.stockoutsPerMonth.value} stockouts x $${inputs.costPerStockout.value} = $${stockoutPortion}`);
  } else if (inputs.stockoutsPerMonth || inputs.costPerStockout) {
    if (!inputs.stockoutsPerMonth) missingInputs.push('stockouts per month');
    if (!inputs.costPerStockout) missingInputs.push('cost per stockout');
  }
  
  // Add spoilage/shrink
  if (inputs.spoilageOrShrinkPerMonth) {
    const spoilage = Math.floor(inputs.spoilageOrShrinkPerMonth.value);
    monthlyLeak += spoilage;
    parts.push(`$${spoilage} spoilage/shrink`);
  }
  
  if (parts.length === 0) {
    return {
      monthly: 0,
      formula: 'stockouts x cost + spoilage/shrink',
      breakdown: 'Need more numbers to calculate',
      missingInputs
    };
  }
  
  return {
    monthly: monthlyLeak,
    formula: 'stockouts x cost + spoilage/shrink',
    breakdown: parts.join(' + ') + ` = $${monthlyLeak}/mo`,
    missingInputs
  };
}

/**
 * Calculate total monthly leak from all sources
 */
export interface TotalLeakCalculation {
  frontEnd: LeakCalculation;
  time: LeakCalculation;
  slowMoney: LeakCalculation;
  inventory: LeakCalculation;
  totalMonthly: number;
  leakCount: number;
  allMissingInputs: string[];
}

export function calculateTotalLeak(
  frontEnd: FrontEndLeakInputs,
  time: TimeLeakInputs,
  slowMoney: SlowMoneyInputs,
  inventory: InventoryInputs
): TotalLeakCalculation {
  const frontEndCalc = calculateFrontEndLeak(frontEnd);
  const timeCalc = calculateTimeLeak(time);
  const slowMoneyCalc = calculateSlowMoneyLeak(slowMoney);
  const inventoryCalc = calculateInventoryLeak(inventory);
  
  const leaks = [frontEndCalc, timeCalc, slowMoneyCalc, inventoryCalc];
  const activeLeak = leaks.filter(l => l.monthly > 0);
  
  return {
    frontEnd: frontEndCalc,
    time: timeCalc,
    slowMoney: slowMoneyCalc,
    inventory: inventoryCalc,
    totalMonthly: leaks.reduce((sum, l) => sum + l.monthly, 0),
    leakCount: activeLeak.length,
    allMissingInputs: [...new Set(leaks.flatMap(l => l.missingInputs))]
  };
}

/**
 * Input helper: Create a LeakInput from a number
 */
export function manualInput(value: number): LeakInput {
  return { source: 'manual', value, locked: true };
}

export function transcriptInput(value: number, quote: string): LeakInput {
  return { source: 'transcript', value, quote, locked: false };
}
