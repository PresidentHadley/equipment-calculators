import { Metadata } from 'next'
import { EquipmentLoanCalculator } from '@/components/calculators/EquipmentLoanCalculator'

export const metadata: Metadata = {
  title: 'Equipment Loan Calculator - Free Equipment Financing Calculator | EquipmentCalculators.com',
  description: 'Calculate monthly payments, total interest, and amortization schedule for equipment loans. Free equipment financing calculator with instant results.',
  keywords: 'equipment loan calculator, equipment financing, monthly payment calculator, business loan calculator',
  openGraph: {
    title: 'Equipment Loan Calculator - Free Equipment Financing Calculator',
    description: 'Calculate monthly payments, total interest, and amortization schedule for equipment loans. Get instant results.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/equipment-loan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipment Loan Calculator - Free Equipment Financing Calculator',
    description: 'Calculate monthly payments, total interest, and amortization schedule for equipment loans.',
  }
}

export default function EquipmentLoanPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Equipment Loan Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Calculate monthly payments, total interest, and see your complete amortization schedule. 
          Get instant equipment financing numbers to make informed decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>✓ No email required</span>
          <span>✓ Instant calculations</span>
          <span>✓ Free to use</span>
          <span>✓ Mobile optimized</span>
        </div>
      </div>

      {/* Calculator */}
      <EquipmentLoanCalculator className="mb-12" />

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">How the Equipment Loan Calculator Works</h2>
          <p className="text-muted-foreground">
            Our calculator uses standard loan formulas to give you accurate equipment financing estimates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What You Need to Know</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Equipment Cost:</strong> Total price of the equipment you want to finance</li>
                          <li>• <strong>Down Payment:</strong> Amount you&apos;ll pay upfront (typically 10-30%)</li>
            <li>• <strong>Interest Rate:</strong> Annual interest rate for equipment loans (usually 3-15%)</li>
              <li>• <strong>Loan Term:</strong> Length of the loan in months (12-120 months typical)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What You&apos;ll Get</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Monthly Payment:</strong> Exact amount you&apos;ll pay each month</li>
              <li>• <strong>Total Interest:</strong> Total interest paid over the life of the loan</li>
              <li>• <strong>Total Cost:</strong> Equipment cost plus all interest and fees</li>
              <li>• <strong>Payment Schedule:</strong> Month-by-month breakdown of payments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* When to Use Section */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">When to Use This Calculator</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Before Talking to Lenders</h3>
            <p className="text-muted-foreground">
              Know your numbers before you start shopping. Get realistic payment estimates to set your budget.
            </p>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Comparing Loan Options</h3>
            <p className="text-muted-foreground">
              Test different down payments, terms, and rates to find the best financing structure for your business.
            </p>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Budget Planning</h3>
            <p className="text-muted-foreground">
              See how equipment payments fit into your monthly cash flow and business budget.
            </p>
          </div>
        </div>
      </div>

      {/* Equipment Types Section */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Equipment Types We Cover</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Construction Equipment',
            'Medical Equipment',
            'Restaurant Equipment', 
            'Manufacturing Equipment',
            'Trucks & Vehicles',
            'Agricultural Equipment',
            'Office Equipment',
            'Technology Equipment'
          ].map((type) => (
            <div key={type} className="text-center p-4 bg-muted rounded-lg">
              <span className="font-medium">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How accurate are these calculations?</summary>
            <p className="text-muted-foreground mt-2">
              Our calculator uses standard loan formulas and provides estimates within 1-2% of actual lender quotes. 
              Final rates and terms will depend on your credit score, business history, and lender policies.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What&apos;s a typical down payment for equipment loans?</summary>
            <p className="text-muted-foreground mt-2">
              Most equipment loans require 10-30% down. New equipment typically requires 10-20%, 
              while used equipment may require 20-30%. Some SBA loans allow as little as 10% down.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What interest rates can I expect?</summary>
            <p className="text-muted-foreground mt-2">
              Equipment loan rates typically range from 3-15% depending on your credit score, 
              business history, equipment type, and loan term. SBA loans often offer the lowest rates.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Can I save my calculations?</summary>
            <p className="text-muted-foreground mt-2">
              Currently, calculations are not saved automatically. We recommend taking a screenshot 
              or writing down your results. Future updates will include save functionality.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}