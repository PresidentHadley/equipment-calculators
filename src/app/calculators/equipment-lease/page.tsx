import { Metadata } from 'next'
import { EquipmentLeaseCalculator } from '@/components/calculators/EquipmentLeaseCalculator'
import { BreadcrumbStructuredData, FAQStructuredData, HowToStructuredData, QAPageStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Equipment Lease Calculator - Free Equipment Leasing Calculator | EquipmentCalculators.com',
  description: 'Calculate equipment lease payments using factor rates, residual values, and end-of-lease options. Free equipment leasing calculator with instant results.',
  keywords: 'equipment lease calculator, equipment leasing, factor rate calculator, lease payments, business equipment lease',
  openGraph: {
    title: 'Equipment Lease Calculator - Free Equipment Leasing Calculator',
    description: 'Calculate equipment lease payments using factor rates, residual values, and end-of-lease options. Get instant results.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/equipment-lease',
    images: [
      {
        url: 'https://equipmentcalculators.com/api/og?title=Equipment%20Lease%20Calculator&subtitle=Factor%20Rates%2C%20Residuals%2C%20Options',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipment Lease Calculator - Free Equipment Leasing Calculator',
    description: 'Calculate equipment lease payments using factor rates and residual values.',
    images: ['https://equipmentcalculators.com/api/og?title=Equipment%20Lease%20Calculator&subtitle=Factor%20Rates%2C%20Residuals%2C%20Options']
  }
}

export default function EquipmentLeasePage() {
  // Common equipment lease examples with realistic scenarios
  const leaseExamples = [
    {
      equipment: "Office Equipment",
      amount: 30000,
      factorRate: 0.025,
      term: 3,
      residual: 9000,
      monthlyPayment: 750,
      totalPayments: 27000,
      description: "Copiers, phone systems, computers"
    },
    {
      equipment: "Medical Equipment", 
      amount: 80000,
      factorRate: 0.020,
      term: 4,
      residual: 24000,
      monthlyPayment: 1600,
      totalPayments: 76800,
      description: "Diagnostic machines, dental equipment"
    },
    {
      equipment: "Construction Equipment",
      amount: 120000,
      factorRate: 0.030,
      term: 5,
      residual: 30000,
      monthlyPayment: 3600,
      totalPayments: 216000,
      description: "Excavators, skid steers, loaders"
    },
    {
      equipment: "Manufacturing Machinery",
      amount: 200000,
      factorRate: 0.022,
      term: 5,
      residual: 50000,
      monthlyPayment: 4400,
      totalPayments: 264000,
      description: "CNC machines, production equipment"
    },
    {
      equipment: "Restaurant Equipment",
      amount: 45000,
      factorRate: 0.035,
      term: 3,
      residual: 9000,
      monthlyPayment: 1575,
      totalPayments: 56700,
      description: "Commercial ovens, refrigeration, POS systems"
    }
  ]

  const faqs = [
    { question: 'What is a factor rate?', answer: 'A factor rate is a decimal (e.g., 0.025) used in leases to calculate payments. It is not an APR but correlates with one.' },
    { question: 'What is residual value?', answer: 'Residual is the estimated value at lease end. Higher residual means lower monthly payments.' }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: 'https://equipmentcalculators.com' },
        { name: 'Calculators', url: 'https://equipmentcalculators.com/#calculators' },
        { name: 'Equipment Lease Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-lease' }
      ]} />
      <FAQStructuredData faqs={faqs} />
      <QAPageStructuredData qa={[
        { question: 'Can I negotiate residual value?', answer: 'Residuals are set by lessors, but different structures (FMV, $1 buyout, 10% purchase option) change end-of-lease cost.' },
        { question: 'Are lease payments tax deductible?', answer: 'Operating lease payments are typically deductible as a business expense; consult your tax advisor.' },
        { question: 'What if I exceed usage limits?', answer: 'Some leases include usage limits and excess wear-and-tear clauses. Review terms and estimate usage honestly.' }
      ]} />
      <HowToStructuredData
        name="How to use the Equipment Lease Calculator"
        steps={[
          { name: 'Enter equipment cost', text: 'Total value of equipment to lease.' },
          { name: 'Choose factor rate', text: 'Typical factor rates range from 0.015–0.040 based on credit and term.' },
          { name: 'Set lease term', text: 'Usually 24–60 months.' },
          { name: 'Set residual value', text: 'Estimated value at lease end (15–50% typical depending on equipment).' },
          { name: 'Review results', text: 'See monthly lease payment and total payments. Compare end-of-lease options.' }
        ]}
      />
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Equipment Lease Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Calculate lease payments using <a href="/glossary#factor-rate" className="underline">factor rates</a>, <a href="/glossary#residual-value" className="underline">residual values</a>, and compare end-of-lease options. 
          Get instant equipment leasing numbers to make informed decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>✓ Factor rate calculations</span>
          <span>✓ End-of-lease options</span>
          <span>✓ Free to use</span>
          <span>✓ Mobile optimized</span>
        </div>
      </div>

      {/* Common Equipment Lease Examples Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Common Equipment Lease Examples</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto">
            See typical equipment leasing scenarios with factor rates, residual values, and monthly payments. 
            These examples show what businesses commonly lease and the costs you can expect.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold text-gray-900">Equipment Type</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Equipment Value</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Factor Rate</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Term</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Residual Value</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Monthly Payment</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Total Payments</th>
                </tr>
              </thead>
              <tbody>
                {leaseExamples.map((example, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-gray-900">{example.equipment}</div>
                        <div className="text-sm text-gray-600">{example.description}</div>
                      </div>
                    </td>
                    <td className="text-right p-4 font-medium text-gray-900">${example.amount.toLocaleString()}</td>
                    <td className="text-right p-4 text-gray-900">{(example.factorRate * 100).toFixed(2)}%</td>
                    <td className="text-right p-4 text-gray-900">{example.term} years</td>
                    <td className="text-right p-4 text-gray-900">${example.residual.toLocaleString()}</td>
                    <td className="text-right p-4 font-semibold text-green-600">${example.monthlyPayment.toLocaleString()}</td>
                    <td className="text-right p-4 font-medium text-gray-900">${example.totalPayments.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Factor Rate Guide
              </h3>
              <p className="text-muted-foreground mb-4">Equipment lease factor rates typically range:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Technology equipment:</strong> 1.5-3.0% (0.015-0.030) due to rapid depreciation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Medical equipment:</strong> 2.0-2.5% (0.020-0.025) for specialized devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Construction equipment:</strong> 2.5-3.5% (0.025-0.035) for heavy machinery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Manufacturing equipment:</strong> 2.0-3.0% (0.020-0.030) depending on complexity</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Lease Benefits
              </h3>
              <p className="text-muted-foreground mb-4">Why businesses choose equipment leasing:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Lower monthly payments:</strong> Typically 20-30% less than loan payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Tax advantages:</strong> Lease payments are typically 100% tax deductible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Technology updates:</strong> Easier to upgrade to newer equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Preserve cash flow:</strong> Keep working capital for operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <EquipmentLeaseCalculator className="mb-12" />

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">How Equipment Leasing Works</h2>
          <p className="text-muted-foreground">
            Understanding factor rates, residual values, and your end-of-lease options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Lease Terms</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong><a href="/glossary#factor-rate" className="underline">Factor Rate</a>:</strong> The lease cost per dollar of equipment value (typically 0.015-0.040)</li>
              <li>• <strong><a href="/glossary#residual-value" className="underline">Residual Value</a>:</strong> Estimated equipment value at lease end (affects payments)</li>
              <li>• <strong>Lease Term:</strong> Length of the lease agreement (usually 24-60 months)</li>
              <li>• <strong>End-of-Lease Options:</strong> Return, purchase, or extend your lease</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Lease Payment Components</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Depreciation:</strong> Equipment cost minus residual value</li>
              <li>• <strong>Finance Charge:</strong> Interest on the total equipment value</li>
              <li>• <strong>Monthly Payment:</strong> Depreciation + finance charge divided by term</li>
              <li>• <strong>Total Cost:</strong> All payments plus purchase option (if exercised)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Factor Rate Guide */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Understanding Factor Rates</h2>
        
        <div className="bg-muted rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">0.015 - 0.020</div>
              <div className="font-semibold mb-1">Excellent Rate</div>
              <div className="text-sm text-muted-foreground">
                Strong credit, established business, new equipment
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">0.020 - 0.030</div>
              <div className="font-semibold mb-1">Good Rate</div>
              <div className="text-sm text-muted-foreground">
                Good credit, moderate risk, standard terms
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">0.030 - 0.040+</div>
              <div className="font-semibold mb-1">Higher Rate</div>
              <div className="text-sm text-muted-foreground">
                Newer business, used equipment, higher risk
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When to Lease vs Buy */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">When to Consider Leasing</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Leasing Advantages</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Lower monthly payments</li>
              <li>• Preserve working capital</li>
              <li>• Potential tax benefits</li>
              <li>• Easy equipment upgrades</li>
              <li>• Maintenance may be included</li>
              <li>• Off-balance-sheet financing</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Buying Advantages</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Own the equipment</li>
              <li>• Build equity over time</li>
              <li>• Depreciation tax benefits</li>
              <li>• No mileage/usage restrictions</li>
              <li>• Lower total cost long-term</li>
              <li>• Can sell anytime</li>
            </ul>
          </div>
        </div>
      </div>

      {/* End of Lease Options */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">End-of-Lease Options</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Return Equipment</h3>
            <p className="text-muted-foreground mb-4">
              Return the equipment to the lessor with no additional cost (subject to normal wear and tear).
            </p>
            <div className="text-sm font-medium text-green-600">$0 Cost</div>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Purchase Equipment</h3>
            <p className="text-muted-foreground mb-4">
              Buy the equipment for the pre-determined residual value set at lease signing.
            </p>
            <div className="text-sm font-medium text-blue-600">Residual Value</div>
          </div>
          
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Extend Lease</h3>
            <p className="text-muted-foreground mb-4">
              Continue leasing at fair market value rates (typically month-to-month).
            </p>
            <div className="text-sm font-medium text-orange-600">Fair Market Rate</div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What&apos;s a typical factor rate for equipment leasing?</summary>
            <p className="text-muted-foreground mt-2">
              Factor rates typically range from 0.015 to 0.040, depending on credit quality, equipment type, 
              and lease term. A 0.025 factor rate is roughly equivalent to 6% APR financing.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How is residual value determined?</summary>
            <p className="text-muted-foreground mt-2">
              Residual value is the estimated worth of equipment at lease end, typically 15-50% of original cost. 
              It&apos;s based on equipment type, useful life, and market demand. Higher residual = lower payments.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Can I pay off a lease early?</summary>
            <p className="text-muted-foreground mt-2">
              Most leases can be paid off early, but there may be penalties or fees. You&apos;ll typically pay 
              the remaining payments plus the residual value, minus any early payoff discounts.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What happens if I damage the equipment?</summary>
            <p className="text-muted-foreground mt-2">
              You&apos;re responsible for maintaining the equipment and any damage beyond normal wear and tear. 
              Most lessors require insurance coverage. Review the lease agreement for specific terms.
            </p>
          </details>
        </div>
      </div>

      {/* In-Depth Guide */}
      <div className="max-w-4xl mx-auto mt-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">In-Depth Guide: Equipment Leasing</h2>
        <p className="text-muted-foreground text-lg text-center">
          Understand factor rates, residual values, and how to compare leases against loans.
        </p>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Choosing a Lease Structure</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>FMV (Fair Market Value): lower payments, option to purchase at market price</li>
              <li>$1 Buyout: higher payments, but ownership transfer at end for $1</li>
              <li>10% Purchase Option: middle ground between FMV and $1 buyout</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">Factors that Impact Factor Rates</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Credit profile and time in business</li>
              <li>Equipment age and resale value volatility</li>
              <li>Lease term and residual assumptions</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">When Leasing Makes Sense</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Rapidly evolving technology and frequent upgrades</li>
              <li>Need to preserve working capital</li>
              <li>Desire for lower monthly payments vs total cost</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Related Calculators & Resources */}
      <div className="max-w-4xl mx-auto mt-16 space-y-6">
        <h2 className="text-3xl font-bold text-center">Related Calculators & Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Compare or Explore</h3>
            <ul className="space-y-1 text-blue-600">
              <li><a className="hover:underline" href="/calculators/lease-vs-buy">Lease vs Buy Calculator</a></li>
              <li><a className="hover:underline" href="/calculators/equipment-loan">Equipment Loan Calculator</a></li>
              <li><a className="hover:underline" href="/calculators/equipment-roi">Equipment ROI Calculator</a></li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Industry Pages</h3>
            <ul className="space-y-1 text-blue-600">
              <li><a className="hover:underline" href="/calculators/construction">Construction Equipment</a></li>
              <li><a className="hover:underline" href="/calculators/medical">Medical Equipment</a></li>
              <li><a className="hover:underline" href="/calculators/restaurant">Restaurant Equipment</a></li>
              <li><a className="hover:underline" href="/calculators/manufacturing">Manufacturing Equipment</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          See definitions in the <a className="underline" href="/glossary">Equipment Financing Glossary</a>.
        </div>
      </div>
    </div>
  )
}