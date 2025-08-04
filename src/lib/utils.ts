import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPercentage(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`
}

export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  termMonths: number
): number {
  if (annualRate === 0) {
    return principal / termMonths
  }
  
  const monthlyRate = annualRate / 100 / 12
  const payment = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)
  
  return payment
}

export function calculateTotalInterest(
  principal: number,
  monthlyPayment: number,
  termMonths: number
): number {
  return monthlyPayment * termMonths - principal
}

export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  termMonths: number
): Array<{
  payment: number
  principal: number
  interest: number
  balance: number
  month: number
}> {
  const monthlyRate = annualRate / 100 / 12
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termMonths)
  const schedule = []
  let remainingBalance = principal
  
  for (let month = 1; month <= termMonths; month++) {
    const interestPayment = remainingBalance * monthlyRate
    const principalPayment = monthlyPayment - interestPayment
    remainingBalance -= principalPayment
    
    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance: Math.max(0, remainingBalance),
    })
  }
  
  return schedule
}

export function calculateLeasePayment(
  equipmentCost: number,
  factorRate: number,
  termMonths: number,
  residualValue: number = 0
): number {
  // Convert factor rate to interest rate if needed
  const interestRate = factorRate > 1 ? factorRate / 2400 : factorRate / 100 / 12
  
  const depreciationAmount = equipmentCost - residualValue
  const depreciationPayment = depreciationAmount / termMonths
  const financePayment = (equipmentCost + residualValue) * interestRate
  
  return depreciationPayment + financePayment
}

export function calculateROI(
  initialInvestment: number,
  monthlyRevenue: number,
  monthlyExpenses: number,
  termMonths: number
): {
  totalRevenue: number
  totalExpenses: number
  netProfit: number
  roi: number
  paybackMonths: number
} {
  const totalRevenue = monthlyRevenue * termMonths
  const totalExpenses = monthlyExpenses * termMonths
  const netProfit = totalRevenue - totalExpenses - initialInvestment
  const roi = (netProfit / initialInvestment) * 100
  
  // Calculate payback period
  const monthlyProfit = monthlyRevenue - monthlyExpenses
  const paybackMonths = monthlyProfit > 0 ? initialInvestment / monthlyProfit : 0
  
  return {
    totalRevenue,
    totalExpenses,
    netProfit,
    roi,
    paybackMonths,
  }
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function roundToTwo(num: number): number {
  return Math.round(num * 100) / 100
}