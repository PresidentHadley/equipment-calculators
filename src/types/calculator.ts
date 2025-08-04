export interface LoanCalculatorInputs {
  equipmentCost: number
  downPayment: number
  interestRate: number
  termMonths: number
  equipmentType: string
}

export interface LoanCalculatorResults {
  monthlyPayment: number
  totalInterest: number
  totalCost: number
  amortizationSchedule: AmortizationPayment[]
}

export interface LeaseCalculatorInputs {
  equipmentCost: number
  factorRate: number
  termMonths: number
  residualValue: number
  equipmentType: string
}

export interface LeaseCalculatorResults {
  monthlyPayment: number
  totalPayments: number
  totalCost: number
  endOfLeaseOptions: EndOfLeaseOption[]
}

export interface ComparisonInputs {
  equipmentCost: number
  downPayment: number
  loanRate: number
  loanTermMonths: number
  leaseFactorRate: number
  leaseTermMonths: number
  residualValue: number
  equipmentType: string
}

export interface ComparisonResults {
  loan: LoanCalculatorResults
  lease: LeaseCalculatorResults
  recommendation: 'loan' | 'lease'
  savings: number
}

export interface ROICalculatorInputs {
  equipmentCost: number
  monthlyRevenue: number
  monthlyExpenses: number
  termMonths: number
  equipmentType: string
}

export interface ROICalculatorResults {
  totalRevenue: number
  totalExpenses: number
  netProfit: number
  roi: number
  paybackMonths: number
  breakEvenMonth: number
}

export interface AmortizationPayment {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

export interface EndOfLeaseOption {
  type: 'purchase' | 'return' | 'extend'
  cost: number
  description: string
}

export interface CalculatorSession {
  id: string
  calculatorType: CalculatorType
  inputs: Record<string, unknown>
  results: Record<string, unknown>
  createdAt: Date
  ipAddress?: string
  userAgent?: string
}

export interface Lead {
  id: string
  email: string
  phone?: string
  companyName?: string
  equipmentType: string
  loanAmount: number
  calculatorUsed: CalculatorType
  createdAt: Date
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  notes?: string
}

export interface Lender {
  id: string
  name: string
  specialties: string[]
  contactInfo: {
    email: string
    phone: string
    website?: string
  }
  active: boolean
  minLoanAmount?: number
  maxLoanAmount?: number
  minCreditScore?: number
}

export type CalculatorType = 
  | 'equipment-loan'
  | 'equipment-lease'
  | 'lease-vs-buy'
  | 'equipment-roi'
  | 'depreciation'
  | 'construction'
  | 'medical'
  | 'restaurant'
  | 'manufacturing'
  | 'trucks'

export type EquipmentType = 
  | 'construction'
  | 'medical'
  | 'restaurant'
  | 'manufacturing'
  | 'trucks'
  | 'agricultural'
  | 'office'
  | 'technology'
  | 'other'

export interface CalculatorConfig {
  title: string
  description: string
  slug: string
  icon: string
  color: string
  minAmount: number
  maxAmount: number
  defaultInputs: Record<string, unknown>
  isPopular?: boolean
  isNew?: boolean
}