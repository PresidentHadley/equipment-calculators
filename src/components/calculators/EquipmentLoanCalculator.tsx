'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDebouncedCallback } from 'use-debounce'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Calendar } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

import { 
  calculateMonthlyPayment, 
  calculateTotalInterest, 
  generateAmortizationSchedule,
  formatCurrency,
  formatPercentage 
} from '@/lib/utils'
import type { LoanCalculatorResults, LoanCalculatorInputs } from '@/types/calculator'

const loanSchema = z.object({
  equipmentCost: z.number().min(1000).max(10000000),
  downPayment: z.number().min(0).max(9999999),
  interestRate: z.number().min(0.1).max(30),
  termMonths: z.number().min(12).max(120),
  equipmentType: z.string().min(1)
})

type LoanFormData = z.infer<typeof loanSchema>

const equipmentTypes = [
  'Construction Equipment',
  'Medical Equipment', 
  'Restaurant Equipment',
  'Manufacturing Equipment',
  'Trucks & Vehicles',
  'Agricultural Equipment',
  'Office Equipment',
  'Technology Equipment',
  'Other'
]

interface EquipmentLoanCalculatorProps {
  onResultsChange?: (results: LoanCalculatorResults | null) => void
  className?: string
  defaults?: Partial<LoanCalculatorInputs>
}

export function EquipmentLoanCalculator({ onResultsChange, className, defaults }: EquipmentLoanCalculatorProps) {
  const [results, setResults] = useState<LoanCalculatorResults | null>(null)
  const [isCalculating] = useState(false)
  const [showAmortization, setShowAmortization] = useState(false)

  const { 
    register, 
    watch, 
    setValue, 
    formState: { errors },
    getValues 
  } = useForm<LoanFormData>({
    resolver: zodResolver(loanSchema),
    defaultValues: {
      equipmentCost: 100000,
      downPayment: 20000,
      interestRate: 6.5,
      termMonths: 60,
      equipmentType: 'Construction Equipment',
      ...(defaults ?? {})
    }
  })

  const watchedValues = watch()

  const calculateResults = useCallback((values: LoanFormData) => {
    try {
      loanSchema.parse(values)
      const loanAmount = values.equipmentCost - values.downPayment
      const monthlyPayment = calculateMonthlyPayment(loanAmount, values.interestRate, values.termMonths)
      const totalInterest = calculateTotalInterest(loanAmount, monthlyPayment, values.termMonths)
      const totalCost = loanAmount + totalInterest + values.downPayment
      const amortizationSchedule = generateAmortizationSchedule(loanAmount, values.interestRate, values.termMonths)
      
      return {
        monthlyPayment,
        totalInterest,
        totalCost,
        amortizationSchedule
      }
    } catch {
      return null
    }
  }, [])

  const debouncedCalculate = useDebouncedCallback(() => {
    const values = getValues()
    const calculationResults = calculateResults(values)
    
    if (calculationResults) {
      setResults(calculationResults)
      onResultsChange?.(calculationResults)
    } else {
      setResults(null)
      onResultsChange?.(null)
    }
  }, 150)

  useEffect(() => {
    debouncedCalculate()
  }, [watchedValues.equipmentCost, watchedValues.downPayment, watchedValues.interestRate, watchedValues.termMonths, debouncedCalculate])

  const loanAmount = watchedValues.equipmentCost - watchedValues.downPayment
  const downPaymentPercentage = (watchedValues.downPayment / watchedValues.equipmentCost) * 100

  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Equipment Loan Calculator
            </CardTitle>
            <CardDescription>
              Calculate monthly payments, total interest, and see your complete amortization schedule.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Equipment Cost"
                type="number"
                prefix="$"
                error={errors.equipmentCost?.message}
                {...register('equipmentCost', { 
                  valueAsNumber: true,
                  onChange: (e) => {
                    const cost = parseFloat(e.target.value) || 0
                    // Auto-adjust down payment if it exceeds equipment cost
                    if (watchedValues.downPayment > cost) {
                      setValue('downPayment', Math.floor(cost * 0.2))
                    }
                  }
                })}
              />
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Equipment Type</label>
                <select
                  className="calculator-input flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  {...register('equipmentType')}
                >
                  {equipmentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Slider
                label="Down Payment"
                value={[watchedValues.downPayment]}
                onValueChange={(value) => setValue('downPayment', value[0])}
                min={0}
                max={watchedValues.equipmentCost * 0.5}
                step={1000}
                formatValue={(value) => `${formatCurrency(value)} (${((value / watchedValues.equipmentCost) * 100).toFixed(1)}%)`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Slider
                  label="Interest Rate"
                  value={[watchedValues.interestRate]}
                  onValueChange={(value) => setValue('interestRate', value[0])}
                  min={0.1}
                  max={25}
                  step={0.1}
                  formatValue={(value) => formatPercentage(value)}
                />
              </div>
              
              <div>
                <Slider
                  label="Loan Term"
                  value={[watchedValues.termMonths]}
                  onValueChange={(value) => setValue('termMonths', value[0])}
                  min={12}
                  max={120}
                  step={12}
                  formatValue={(value) => `${value} months (${(value / 12).toFixed(1)} years)`}
                />
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Loan Summary</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Loan Amount</div>
                  <div>{formatCurrency(loanAmount)}</div>
                </div>
                <div>
                  <div className="font-medium">Down Payment</div>
                  <div>{formatCurrency(watchedValues.downPayment)} ({downPaymentPercentage.toFixed(1)}%)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Display */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Loan Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-xl text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5" />
                        <span className="text-sm opacity-90">Monthly Payment</span>
                      </div>
                      <div className="text-3xl font-bold">{formatCurrency(results.monthlyPayment)}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-card border rounded-lg p-4">
                        <div className="text-xs text-muted-foreground mb-1">Total Interest</div>
                        <div className="text-lg font-semibold text-orange-600">
                          {formatCurrency(results.totalInterest)}
                        </div>
                      </div>
                      <div className="bg-card border rounded-lg p-4">
                        <div className="text-xs text-muted-foreground mb-1">Total Cost</div>
                        <div className="text-lg font-semibold">
                          {formatCurrency(results.totalCost)}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setShowAmortization(!showAmortization)}
                      className="w-full"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {showAmortization ? 'Hide' : 'View'} Payment Schedule
                    </Button>

                    <AnimatePresence>
                      {showAmortization && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="border rounded-lg p-4 max-h-64 overflow-y-auto">
                            <div className="text-sm font-medium mb-3">Amortization Schedule</div>
                            <div className="space-y-2">
                              {results.amortizationSchedule.slice(0, 12).map((payment, index) => (
                                <div key={index} className="flex justify-between text-xs">
                                  <span>Month {payment.month}</span>
                                  <span>{formatCurrency(payment.payment)}</span>
                                  <span className="text-muted-foreground">{formatCurrency(payment.balance)}</span>
                                </div>
                              ))}
                              {results.amortizationSchedule.length > 12 && (
                                <div className="text-xs text-center text-muted-foreground pt-2">
                                  ... and {results.amortizationSchedule.length - 12} more payments
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Enter equipment details to see loan calculations
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}