'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDebouncedCallback } from 'use-debounce'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Calendar, FileText } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

import { 
  calculateLeasePayment,
  formatCurrency,
  formatPercentage 
} from '@/lib/utils'
import type { LeaseCalculatorResults } from '@/types/calculator'

const leaseSchema = z.object({
  equipmentCost: z.number().min(1000).max(10000000),
  factorRate: z.number().min(0.001).max(0.1),
  termMonths: z.number().min(12).max(84),
  residualValue: z.number().min(0).max(9999999),
  equipmentType: z.string().min(1)
})

type LeaseFormData = z.infer<typeof leaseSchema>

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

const endOfLeaseOptions = [
  { type: 'return' as const, description: 'Return equipment to lessor', costPercentage: 0 },
  { type: 'purchase' as const, description: 'Purchase for residual value', costPercentage: 100 },
  { type: 'extend' as const, description: 'Extend lease (fair market value)', costPercentage: 15 }
]

interface EquipmentLeaseCalculatorProps {
  onResultsChange?: (results: LeaseCalculatorResults | null) => void
  className?: string
}

export function EquipmentLeaseCalculator({ onResultsChange, className }: EquipmentLeaseCalculatorProps) {
  const [results, setResults] = useState<LeaseCalculatorResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showLeaseDetails, setShowLeaseDetails] = useState(false)

  const { 
    register, 
    watch, 
    setValue, 
    formState: { errors },
    getValues 
  } = useForm<LeaseFormData>({
    resolver: zodResolver(leaseSchema),
    defaultValues: {
      equipmentCost: 100000,
      factorRate: 0.025, // 2.5% factor rate (typical)
      termMonths: 36,
      residualValue: 30000, // 30% residual typical for 36 months
      equipmentType: 'Construction Equipment'
    }
  })

  const watchedValues = watch()

  const calculateResults = useCallback((values: LeaseFormData) => {
    try {
      leaseSchema.parse(values)
      const monthlyPayment = calculateLeasePayment(
        values.equipmentCost, 
        values.factorRate, 
        values.termMonths, 
        values.residualValue
      )
      
      const totalPayments = monthlyPayment * values.termMonths
      const totalCost = totalPayments + values.residualValue // If purchased
      
      return {
        monthlyPayment,
        totalPayments,
        totalCost,
        endOfLeaseOptions: endOfLeaseOptions.map(option => ({
          ...option,
          cost: option.type === 'purchase' 
            ? values.residualValue 
            : option.type === 'extend'
            ? values.equipmentCost * (option.costPercentage / 100)
            : 0
        }))
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
  }, [watchedValues.equipmentCost, watchedValues.factorRate, watchedValues.termMonths, watchedValues.residualValue, debouncedCalculate])

  const residualPercentage = (watchedValues.residualValue / watchedValues.equipmentCost) * 100
  const factorRatePercent = watchedValues.factorRate * 100

  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Equipment Lease Calculator
            </CardTitle>
            <CardDescription>
              Calculate lease payments using factor rates, residual values, and end-of-lease options.
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
                    // Auto-adjust residual value if it exceeds equipment cost
                    if (watchedValues.residualValue > cost) {
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

            <div>
              <Slider
                label="Factor Rate"
                value={[watchedValues.factorRate]}
                onValueChange={(value) => setValue('factorRate', value[0])}
                min={0.001}
                max={0.08}
                step={0.001}
                formatValue={(value) => `${formatPercentage(value * 100, 3)} (${formatPercentage((value * 100) * 2, 1)} APR equiv.)`}
              />
              <div className="text-xs text-muted-foreground mt-1">
                Factor rate is the lease cost per dollar of equipment value. Lower is better.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Slider
                  label="Lease Term"
                  value={[watchedValues.termMonths]}
                  onValueChange={(value) => setValue('termMonths', value[0])}
                  min={12}
                  max={84}
                  step={12}
                  formatValue={(value) => `${value} months (${(value / 12).toFixed(1)} years)`}
                />
              </div>
              
              <div>
                <Slider
                  label="Residual Value"
                  value={[watchedValues.residualValue]}
                  onValueChange={(value) => setValue('residualValue', value[0])}
                  min={0}
                  max={watchedValues.equipmentCost * 0.8}
                  step={1000}
                  formatValue={(value) => `${formatCurrency(value)} (${((value / watchedValues.equipmentCost) * 100).toFixed(1)}%)`}
                />
                <div className="text-xs text-muted-foreground mt-1">
                  Estimated equipment value at lease end. Higher residual = lower payments.
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-2">Lease Summary</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Equipment Cost</div>
                  <div>{formatCurrency(watchedValues.equipmentCost)}</div>
                </div>
                <div>
                  <div className="font-medium">Residual Value</div>
                  <div>{formatCurrency(watchedValues.residualValue)} ({residualPercentage.toFixed(1)}%)</div>
                </div>
                <div>
                  <div className="font-medium">Factor Rate</div>
                  <div>{formatPercentage(factorRatePercent, 3)}</div>
                </div>
                <div>
                  <div className="font-medium">Lease Term</div>
                  <div>{watchedValues.termMonths} months</div>
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
              Lease Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-xl text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5" />
                        <span className="text-sm opacity-90">Monthly Lease Payment</span>
                      </div>
                      <div className="text-3xl font-bold">{formatCurrency(results.monthlyPayment)}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-card border rounded-lg p-4">
                        <div className="text-xs text-muted-foreground mb-1">Total Payments</div>
                        <div className="text-lg font-semibold text-blue-600">
                          {formatCurrency(results.totalPayments)}
                        </div>
                      </div>
                      <div className="bg-card border rounded-lg p-4">
                        <div className="text-xs text-muted-foreground mb-1">Total Cost (if purchased)</div>
                        <div className="text-lg font-semibold">
                          {formatCurrency(results.totalCost)}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setShowLeaseDetails(!showLeaseDetails)}
                      className="w-full"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      {showLeaseDetails ? 'Hide' : 'View'} End-of-Lease Options
                    </Button>

                    <AnimatePresence>
                      {showLeaseDetails && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="border rounded-lg p-4 space-y-3">
                            <div className="text-sm font-medium mb-3">End-of-Lease Options</div>
                            {results.endOfLeaseOptions.map((option, index) => (
                              <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <div>
                                  <div className="font-medium text-sm capitalize">{option.type}</div>
                                  <div className="text-xs text-muted-foreground">{option.description}</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-semibold">{formatCurrency(option.cost)}</div>
                                  {option.type === 'purchase' && (
                                    <div className="text-xs text-muted-foreground">
                                      Total: {formatCurrency(results.totalCost)}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Enter equipment details to see lease calculations
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}