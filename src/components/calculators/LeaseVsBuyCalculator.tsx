'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDebouncedCallback } from 'use-debounce'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, BarChart3, CheckCircle, AlertCircle } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

import { 
  calculateMonthlyPayment,
  calculateLeasePayment,
  calculateTotalInterest,
  formatCurrency,
  formatPercentage 
} from '@/lib/utils'
import type { ComparisonResults, ComparisonInputs } from '@/types/calculator'

const comparisonSchema = z.object({
  equipmentCost: z.number().min(1000).max(10000000),
  downPayment: z.number().min(0).max(9999999),
  loanRate: z.number().min(0.1).max(30),
  loanTermMonths: z.number().min(12).max(120),
  leaseFactorRate: z.number().min(0.001).max(0.1),
  leaseTermMonths: z.number().min(12).max(84),
  residualValue: z.number().min(0).max(9999999),
  equipmentType: z.string().min(1)
})

type ComparisonFormData = z.infer<typeof comparisonSchema>

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

interface LeaseVsBuyCalculatorProps {
  onResultsChange?: (results: ComparisonResults | null) => void
  className?: string
  defaults?: Partial<ComparisonInputs>
}

export function LeaseVsBuyCalculator({ onResultsChange, className, defaults }: LeaseVsBuyCalculatorProps) {
  const [results, setResults] = useState<ComparisonResults | null>(null)
  const [isCalculating] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const { 
    register, 
    watch, 
    setValue, 
    formState: { errors },
    getValues 
  } = useForm<ComparisonFormData>({
    resolver: zodResolver(comparisonSchema),
    defaultValues: {
      equipmentCost: 100000,
      downPayment: 20000,
      loanRate: 6.5,
      loanTermMonths: 60,
      leaseFactorRate: 0.025,
      leaseTermMonths: 36,
      residualValue: 30000,
      equipmentType: 'Construction Equipment',
      ...(defaults ?? {})
    }
  })

  const watchedValues = watch()

  const calculateResults = useCallback((values: ComparisonFormData) => {
    try {
      comparisonSchema.parse(values)
      
      // Loan calculations
      const loanAmount = values.equipmentCost - values.downPayment
      const loanMonthlyPayment = calculateMonthlyPayment(loanAmount, values.loanRate, values.loanTermMonths)
      const loanTotalInterest = calculateTotalInterest(loanAmount, loanMonthlyPayment, values.loanTermMonths)
      const loanTotalCost = loanAmount + loanTotalInterest + values.downPayment
      
      // Lease calculations
      const leaseMonthlyPayment = calculateLeasePayment(
        values.equipmentCost, 
        values.leaseFactorRate, 
        values.leaseTermMonths, 
        values.residualValue
      )
      const leaseTotalPayments = leaseMonthlyPayment * values.leaseTermMonths
      const leaseTotalCost = leaseTotalPayments + values.residualValue // If purchased at end
      
      // Generate amortization for loan only (lease doesn't build equity)
      const loanAmortization = []
      let remainingBalance = loanAmount
      const monthlyRate = values.loanRate / 100 / 12
      
      for (let month = 1; month <= values.loanTermMonths; month++) {
        const interestPayment = remainingBalance * monthlyRate
        const principalPayment = loanMonthlyPayment - interestPayment
        remainingBalance -= principalPayment
        
        loanAmortization.push({
          month,
          payment: loanMonthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, remainingBalance),
        })
      }
      
      return {
        loan: {
          monthlyPayment: loanMonthlyPayment,
          totalInterest: loanTotalInterest,
          totalCost: loanTotalCost,
          amortizationSchedule: loanAmortization
        },
        lease: {
          monthlyPayment: leaseMonthlyPayment,
          totalPayments: leaseTotalPayments,
          totalCost: leaseTotalCost,
          endOfLeaseOptions: [
            { type: 'return' as const, cost: 0, description: 'Return equipment' },
            { type: 'purchase' as const, cost: values.residualValue, description: 'Purchase for residual value' },
            { type: 'extend' as const, cost: values.equipmentCost * 0.15, description: 'Extend lease (fair market value)' }
          ]
        },
        recommendation: (loanTotalCost < leaseTotalCost ? 'loan' : 'lease') as 'loan' | 'lease',
        savings: Math.abs(loanTotalCost - leaseTotalCost)
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
  }, [watchedValues.equipmentCost, watchedValues.downPayment, watchedValues.loanRate, watchedValues.loanTermMonths, 
      watchedValues.leaseFactorRate, watchedValues.leaseTermMonths, watchedValues.residualValue, debouncedCalculate])

  const loanAmount = watchedValues.equipmentCost - watchedValues.downPayment
  const downPaymentPercentage = (watchedValues.downPayment / watchedValues.equipmentCost) * 100
  const residualPercentage = (watchedValues.residualValue / watchedValues.equipmentCost) * 100

  return (
    <div className={className}>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Input Form */}
        <Card className="xl:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Lease vs Buy Comparison
            </CardTitle>
            <CardDescription>
              Compare equipment financing options side-by-side to make the best decision.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Equipment Cost"
                type="number"
                prefix="$"
                error={errors.equipmentCost?.message}
                {...register('equipmentCost', { 
                  valueAsNumber: true,
                  onChange: (e) => {
                    const cost = parseFloat(e.target.value) || 0
                    // Auto-adjust dependent values
                    if (watchedValues.downPayment > cost) {
                      setValue('downPayment', Math.floor(cost * 0.2))
                    }
                    if (watchedValues.residualValue > cost * 0.8) {
                      setValue('residualValue', Math.floor(cost * 0.3))
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

            {/* Loan Section */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3 text-blue-600">Loan Options</h3>
              
              <div className="space-y-4">
                <Slider
                  label="Down Payment"
                  value={[watchedValues.downPayment]}
                  onValueChange={(value) => setValue('downPayment', value[0])}
                  min={0}
                  max={watchedValues.equipmentCost * 0.5}
                  step={1000}
                  formatValue={(value) => `${formatCurrency(value)} (${((value / watchedValues.equipmentCost) * 100).toFixed(1)}%)`}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Slider
                    label="Interest Rate"
                    value={[watchedValues.loanRate]}
                    onValueChange={(value) => setValue('loanRate', value[0])}
                    min={0.1}
                    max={25}
                    step={0.1}
                    formatValue={(value) => formatPercentage(value)}
                  />
                  
                  <Slider
                    label="Loan Term"
                    value={[watchedValues.loanTermMonths]}
                    onValueChange={(value) => setValue('loanTermMonths', value[0])}
                    min={12}
                    max={120}
                    step={12}
                    formatValue={(value) => `${value} mo (${(value / 12).toFixed(1)} yr)`}
                  />
                </div>
              </div>
            </div>

            {/* Lease Section */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3 text-green-600">Lease Options</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Slider
                    label="Factor Rate"
                    value={[watchedValues.leaseFactorRate]}
                    onValueChange={(value) => setValue('leaseFactorRate', value[0])}
                    min={0.001}
                    max={0.08}
                    step={0.001}
                    formatValue={(value) => formatPercentage(value * 100, 3)}
                  />
                  
                  <Slider
                    label="Lease Term"
                    value={[watchedValues.leaseTermMonths]}
                    onValueChange={(value) => setValue('leaseTermMonths', value[0])}
                    min={12}
                    max={84}
                    step={12}
                    formatValue={(value) => `${value} mo (${(value / 12).toFixed(1)} yr)`}
                  />
                </div>
                
                <Slider
                  label="Residual Value"
                  value={[watchedValues.residualValue]}
                  onValueChange={(value) => setValue('residualValue', value[0])}
                  min={0}
                  max={watchedValues.equipmentCost * 0.8}
                  step={1000}
                  formatValue={(value) => `${formatCurrency(value)} (${((value / watchedValues.equipmentCost) * 100).toFixed(1)}%)`}
                />
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg text-sm">
              <div className="font-medium mb-2">Quick Summary</div>
              <div className="space-y-1 text-muted-foreground">
                <div>Equipment: {formatCurrency(watchedValues.equipmentCost)}</div>
                <div>Loan Amount: {formatCurrency(loanAmount)}</div>
                <div>Residual: {formatCurrency(watchedValues.residualValue)} ({residualPercentage.toFixed(1)}%)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Display */}
        <div className="xl:col-span-2 space-y-6">
          {results ? (
            <div className="space-y-6">
                {/* Recommendation Card */}
                <Card className={`border-2 ${results.recommendation === 'loan' ? 'border-blue-500 bg-blue-50' : 'border-green-500 bg-green-50'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {results.recommendation === 'loan' ? (
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      Recommendation: {results.recommendation === 'loan' ? 'Buy with Loan' : 'Lease'}
                    </CardTitle>
                    <CardDescription>
                      {results.recommendation === 'loan' 
                        ? `Buying saves you ${formatCurrency(results.savings)} over the equipment&apos;s lifetime`
                        : `Leasing saves you ${formatCurrency(results.savings)} in total costs`
                      }
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Side-by-side comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Loan Results */}
                  <Card className={results.recommendation === 'loan' ? 'border-blue-500' : ''}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-600">
                        <DollarSign className="h-5 w-5" />
                        Equipment Loan
                        {results.recommendation === 'loan' && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-blue-600 mb-1">Monthly Payment</div>
                        <div className="text-2xl font-bold text-blue-700">
                          {formatCurrency(results.loan.monthlyPayment)}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Down Payment</span>
                          <span className="font-medium">{formatCurrency(watchedValues.downPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Interest</span>
                          <span className="font-medium">{formatCurrency(results.loan.totalInterest)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 font-semibold">
                          <span>Total Cost</span>
                          <span>{formatCurrency(results.loan.totalCost)}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>You own the equipment</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Build equity over time</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Depreciation tax benefits</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Lease Results */}
                  <Card className={results.recommendation === 'lease' ? 'border-green-500' : ''}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="h-5 w-5" />
                        Equipment Lease
                        {results.recommendation === 'lease' && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-600 mb-1">Monthly Payment</div>
                        <div className="text-2xl font-bold text-green-700">
                          {formatCurrency(results.lease.monthlyPayment)}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total Payments</span>
                          <span className="font-medium">{formatCurrency(results.lease.totalPayments)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Purchase Option</span>
                          <span className="font-medium">{formatCurrency(watchedValues.residualValue)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 font-semibold">
                          <span>Total Cost (if purchased)</span>
                          <span>{formatCurrency(results.lease.totalCost)}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Lower monthly payments</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Preserve working capital</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-orange-600">
                          <AlertCircle className="h-4 w-4" />
                          <span>No ownership unless purchased</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Additional Details Button */}
                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full md:w-auto"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    {showDetails ? 'Hide' : 'Show'} Detailed Analysis
                  </Button>
                </div>

                {/* Detailed Analysis */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>Cash Flow Analysis</CardTitle>
                          <CardDescription>
                            Compare the financial impact over the full equipment lifecycle
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Monthly Cash Flow Impact</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span>Loan Payment:</span>
                                  <span className="text-blue-600 font-medium">
                                    {formatCurrency(results.loan.monthlyPayment)}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Lease Payment:</span>
                                  <span className="text-green-600 font-medium">
                                    {formatCurrency(results.lease.monthlyPayment)}
                                  </span>
                                </div>
                                <div className="flex justify-between border-t pt-2 font-semibold">
                                  <span>Monthly Difference:</span>
                                  <span className={results.loan.monthlyPayment > results.lease.monthlyPayment ? 'text-green-600' : 'text-blue-600'}>
                                    {formatCurrency(Math.abs(results.loan.monthlyPayment - results.lease.monthlyPayment))}
                                    <span className="text-muted-foreground ml-1">
                                      ({results.loan.monthlyPayment > results.lease.monthlyPayment ? 'lease saves' : 'loan saves'})
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Key Considerations</h4>
                              <div className="space-y-2 text-sm text-muted-foreground">
                                <div>• Tax implications vary by business structure</div>
                                <div>• Lease may include maintenance packages</div>
                                <div>• Loan builds equity, lease preserves capital</div>
                                <div>• Equipment depreciation affects both options</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Enter equipment details to compare financing options
            </div>
          )}
        </div>
      </div>
    </div>
  )
}