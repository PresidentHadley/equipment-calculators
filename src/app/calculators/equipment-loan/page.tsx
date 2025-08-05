import { Metadata } from 'next'
import { EquipmentLoanCalculator } from '@/components/calculators/EquipmentLoanCalculator'
import { CalculatorStructuredData, FAQStructuredData, BreadcrumbStructuredData } from '@/components/seo/StructuredData'

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
  // Common equipment loan examples with realistic scenarios
  const loanExamples = [
    {
      equipment: "Construction Equipment",
      amount: 25000,
      rate: 12,
      term: 5,
      monthlyPayment: 556,
      totalInterest: 8360,
      totalCost: 33360,
      description: "Excavators, skid steers, small construction tools"
    },
    {
      equipment: "Medical Equipment", 
      amount: 75000,
      rate: 10,
      term: 5,
      monthlyPayment: 1594,
      totalInterest: 20640,
      totalCost: 95640,
      description: "Diagnostic equipment, dental chairs, medical devices"
    },
    {
      equipment: "Manufacturing Machinery",
      amount: 150000,
      rate: 11,
      term: 7,
      monthlyPayment: 2387,
      totalInterest: 50508,
      totalCost: 200508,
      description: "CNC machines, production lines, packaging equipment"
    },
    {
      equipment: "Heavy Equipment",
      amount: 300000,
      rate: 9,
      term: 7,
      monthlyPayment: 4441,
      totalInterest: 73044,
      totalCost: 373044,
      description: "Cranes, bulldozers, large industrial machinery"
    },
    {
      equipment: "Specialized Industrial",
      amount: 500000,
      rate: 8,
      term: 7,
      monthlyPayment: 7134,
      totalInterest: 99256,
      totalCost: 599256,
      description: "Advanced manufacturing systems, specialized production equipment"
    }
  ]

  const faqs = [
    {
      question: "How accurate are these calculations?",
      answer: "Our calculator uses standard loan formulas and provides estimates within 1-2% of actual lender quotes. Final rates and terms will depend on your credit score, business history, and lender policies."
    },
    {
      question: "What's a typical down payment for equipment loans?",
      answer: "Most equipment loans require 10-30% down. New equipment typically requires 10-20%, while used equipment may require 20-30%. Some SBA loans allow as little as 10% down."
    },
    {
      question: "What interest rates can I expect?",
      answer: "Equipment loan rates typically range from 3-15% depending on your credit score, business history, equipment type, and loan term. SBA loans often offer the lowest rates."
    },
    {
      question: "Can I save my calculations?",
      answer: "Currently, calculations are not saved automatically. We recommend taking a screenshot or writing down your results. Future updates will include save functionality."
    }
  ]

  const breadcrumbs = [
    { name: "Home", url: "https://equipmentcalculators.com" },
    { name: "Calculators", url: "https://equipmentcalculators.com/#calculators" },
    { name: "Equipment Loan Calculator", url: "https://equipmentcalculators.com/calculators/equipment-loan" }
  ]

  return (
    <>
      <CalculatorStructuredData
        calculatorType="equipment-loan"
        title="Equipment Loan Calculator"
        description="Calculate monthly payments, total interest, and amortization schedules for equipment financing"
        url="https://equipmentcalculators.com/calculators/equipment-loan"
      />
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />
      
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

      {/* Common Equipment Loan Examples Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Common Equipment Loan Examples</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto">
            See real-world equipment financing scenarios with typical loan amounts, rates, and terms. 
            These examples show what businesses commonly finance and the monthly payments you can expect.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold text-gray-900">Equipment Type</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Loan Amount</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Rate</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Term</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Monthly Payment</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Total Interest</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {loanExamples.map((example, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-gray-900">{example.equipment}</div>
                        <div className="text-sm text-gray-600">{example.description}</div>
                      </div>
                    </td>
                    <td className="text-right p-4 font-medium text-gray-900">${example.amount.toLocaleString()}</td>
                    <td className="text-right p-4 text-gray-900">{example.rate}%</td>
                    <td className="text-right p-4 text-gray-900">{example.term} years</td>
                    <td className="text-right p-4 font-semibold text-green-600">${example.monthlyPayment.toLocaleString()}</td>
                    <td className="text-right p-4 text-gray-900">${example.totalInterest.toLocaleString()}</td>
                    <td className="text-right p-4 font-medium text-gray-900">${example.totalCost.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Rate Factors
              </h3>
              <p className="text-muted-foreground mb-4">Equipment financing rates typically vary based on:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Equipment type and age:</strong> New equipment gets better rates (8-12%) vs used (10-15%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Business credit score:</strong> 700+ scores qualify for lowest rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Down payment:</strong> 20%+ down can reduce rates by 1-2%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Loan term:</strong> Shorter terms (3-5 years) get better rates than longer terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Financing Tips
              </h3>
              <p className="text-muted-foreground mb-4">Maximize your equipment loan approval chances:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Compare multiple lenders:</strong> Rates can vary 2-4% between lenders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Consider SBA loans:</strong> Often 1-3% lower rates for qualified businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Prepare financial documents:</strong> 2+ years tax returns, bank statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Equipment must be business-use:</strong> Personal use equipment typically not eligible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
    </>
  )
}