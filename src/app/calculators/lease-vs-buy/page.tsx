import { Metadata } from 'next'
import { LeaseVsBuyCalculator } from '@/components/calculators/LeaseVsBuyCalculator'

export const metadata: Metadata = {
  title: 'Lease vs Buy Calculator - Equipment Financing Comparison | EquipmentCalculators.com',
  description: 'Compare equipment leasing vs buying with side-by-side ROI analysis, cash flow impact, and total cost comparison. Make informed equipment financing decisions.',
  keywords: 'lease vs buy calculator, equipment financing comparison, lease or buy equipment, equipment ROI calculator, business equipment financing',
  openGraph: {
    title: 'Lease vs Buy Calculator - Equipment Financing Comparison',
    description: 'Compare equipment leasing vs buying with side-by-side analysis. See which option saves you money.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/lease-vs-buy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lease vs Buy Calculator - Equipment Financing Comparison',
    description: 'Compare equipment leasing vs buying with detailed financial analysis.',
  }
}

export default function LeaseVsBuyPage() {
  // Common lease vs buy comparison examples
  const comparisonExamples = [
    {
      equipment: "Small Business IT Setup",
      amount: 25000,
      loanRate: 12,
      loanTerm: 4,
      loanPayment: 658,
      leaseRate: 0.030,
      leaseTerm: 3,
      leasePayment: 750,
      recommendation: "Lease",
      savings: 2280,
      description: "Computers, servers, networking equipment"
    },
    {
      equipment: "Medical Practice Equipment",
      amount: 100000,
      loanRate: 10,
      loanTerm: 7,
      loanPayment: 1661,
      leaseRate: 0.025,
      leaseTerm: 5,
      leasePayment: 2500,
      recommendation: "Loan",
      savings: 18540,
      description: "X-ray machines, diagnostic equipment"
    },
    {
      equipment: "Manufacturing Machinery",
      amount: 200000,
      loanRate: 9,
      loanTerm: 7,
      loanPayment: 3217,
      leaseRate: 0.022,
      leaseTerm: 5,
      leasePayment: 4400,
      recommendation: "Loan",
      savings: 28980,
      description: "CNC machines, automated production lines"
    },
    {
      equipment: "Restaurant Equipment",
      amount: 75000,
      loanRate: 11,
      loanTerm: 5,
      loanPayment: 1636,
      leaseRate: 0.035,
      leaseTerm: 3,
      leasePayment: 2625,
      recommendation: "Loan",
      savings: 15540,
      description: "Commercial kitchen, POS systems, seating"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lease vs Buy Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Compare equipment leasing versus buying with side-by-side ROI analysis, cash flow impact, and total cost comparison. 
          Get instant recommendations to make the best financing decision for your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>✓ Side-by-side comparison</span>
          <span>✓ Cash flow analysis</span>
          <span>✓ Smart recommendations</span>
          <span>✓ Mobile optimized</span>
        </div>
      </div>

      {/* Common Lease vs Buy Examples Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Common Lease vs Buy Scenarios</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto">
            See real comparisons between leasing and buying equipment across different industries. 
            These examples show typical scenarios and which option typically provides better value.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold text-gray-900">Equipment Type</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Equipment Cost</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Loan Payment</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Lease Payment</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Recommendation</th>
                  <th className="text-right p-4 font-semibold text-gray-900">Savings</th>
                </tr>
              </thead>
              <tbody>
                {comparisonExamples.map((example, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-gray-900">{example.equipment}</div>
                        <div className="text-sm text-gray-600">{example.description}</div>
                      </div>
                    </td>
                    <td className="text-right p-4 font-medium text-gray-900">${example.amount.toLocaleString()}</td>
                    <td className="text-center p-4">
                      <div className="text-sm text-gray-600">{example.loanRate}% • {example.loanTerm}yr</div>
                      <div className="font-medium text-gray-900">${example.loanPayment}/mo</div>
                    </td>
                    <td className="text-center p-4">
                      <div className="text-sm text-gray-600">{(example.leaseRate * 100).toFixed(1)}% • {example.leaseTerm}yr</div>
                      <div className="font-medium text-gray-900">${example.leasePayment}/mo</div>
                    </td>
                    <td className="text-center p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        example.recommendation === 'Loan' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {example.recommendation}
                      </span>
                    </td>
                    <td className="text-right p-4 font-semibold text-green-600">${example.savings.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                When to Buy (Loan)
              </h3>
              <p className="text-muted-foreground mb-4">Consider buying equipment when:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Long-term use:</strong> Equipment will be used for 5+ years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Slow depreciation:</strong> Equipment holds value well over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Ownership benefits:</strong> Need to modify or customize equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Strong cash flow:</strong> Can afford higher monthly payments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                When to Lease
              </h3>
              <p className="text-muted-foreground mb-4">Consider leasing equipment when:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Technology equipment:</strong> Computers, software, communication systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Preserve cash flow:</strong> Need lower monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Tax advantages:</strong> 100% deductible lease payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Upgrade flexibility:</strong> Want latest equipment every few years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <LeaseVsBuyCalculator className="mb-12" />

      {/* Decision Framework */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Decision Framework</h2>
          <p className="text-muted-foreground">
            Key factors to consider when choosing between leasing and buying equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Choose Buying When:</h3>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>✓ You plan to keep equipment long-term (5+ years)</li>
                <li>✓ Equipment has strong resale value</li>
                <li>✓ You want to build business equity</li>
                <li>✓ Depreciation tax benefits are important</li>
                <li>✓ You have sufficient down payment capital</li>
                <li>✓ Total cost savings matter most</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Choose Leasing When:</h3>
              <ul className="space-y-2 text-sm text-green-600">
                <li>✓ You need to preserve working capital</li>
                <li>✓ Equipment becomes obsolete quickly</li>
                <li>✓ Lower monthly payments are critical</li>
                <li>✓ You want newer equipment regularly</li>
                <li>✓ Maintenance is included in lease</li>
                <li>✓ Off-balance-sheet financing preferred</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Impact Scenarios */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Common Scenarios</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Growing Business</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Need equipment but cash flow is tight. Want to preserve capital for growth opportunities.
            </p>
            <div className="text-sm font-medium text-green-600">
              → Usually favor leasing
            </div>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Established Company</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Strong cash position, looking for long-term asset ownership and maximum ROI.
            </p>
            <div className="text-sm font-medium text-blue-600">
              → Usually favor buying
            </div>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Technology Equipment</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Equipment becomes obsolete quickly. Need latest technology and easy upgrades.
            </p>
            <div className="text-sm font-medium text-green-600">
              → Usually favor leasing
            </div>
          </div>
        </div>
      </div>

      {/* Tax Considerations */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Tax Considerations</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Equipment Purchase Tax Benefits</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>Section 179 Deduction:</strong> Deduct full equipment cost in year of purchase (up to $1.16M in 2024)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>Bonus Depreciation:</strong> 100% first-year depreciation for qualifying equipment
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>MACRS Depreciation:</strong> Spread depreciation over equipment&apos;s useful life
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Equipment Lease Tax Benefits</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>Operating Expense:</strong> Lease payments are fully deductible as business expense
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>Off-Balance Sheet:</strong> Operating leases don&apos;t appear as debt on balance sheet
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong>Immediate Deduction:</strong> Start deducting payments immediately, no depreciation schedule
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Tax laws are complex and change frequently. Always consult with a qualified tax professional 
            to understand how equipment financing decisions will impact your specific tax situation.
          </p>
        </div>
      </div>

      {/* Cash Flow Impact */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Cash Flow Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Equipment Purchase Impact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Initial Cash Outlay:</span>
                <span className="font-medium text-red-600">High (10-30% down)</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Cash Flow:</span>
                <span className="font-medium text-orange-600">Higher payments</span>
              </div>
              <div className="flex justify-between">
                <span>Working Capital:</span>
                <span className="font-medium text-red-600">Reduced</span>
              </div>
              <div className="flex justify-between">
                <span>Asset Value:</span>
                <span className="font-medium text-green-600">Builds equity</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 mb-4">Equipment Lease Impact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Initial Cash Outlay:</span>
                <span className="font-medium text-green-600">Low (1-3 months)</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Cash Flow:</span>
                <span className="font-medium text-green-600">Lower payments</span>
              </div>
              <div className="flex justify-between">
                <span>Working Capital:</span>
                <span className="font-medium text-green-600">Preserved</span>
              </div>
              <div className="flex justify-between">
                <span>Asset Value:</span>
                <span className="font-medium text-orange-600">No equity (unless purchased)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Which option is typically cheaper overall?</summary>
            <p className="text-muted-foreground mt-2">
              Buying is usually cheaper in total cost if you keep the equipment for its full useful life. 
              However, leasing can be more cost-effective if you upgrade equipment frequently or need to preserve working capital.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do tax benefits compare between leasing and buying?</summary>
            <p className="text-muted-foreground mt-2">
              Both offer tax benefits, but differently. Purchases allow depreciation deductions and potential Section 179/bonus depreciation. 
              Leases provide immediate expense deductions. The best choice depends on your tax situation and timing needs.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What about equipment that becomes obsolete quickly?</summary>
            <p className="text-muted-foreground mt-2">
              For technology and equipment that becomes obsolete quickly (computers, medical equipment, some manufacturing tools), 
              leasing often makes more sense as it provides easier upgrade paths and reduces obsolescence risk.
            </p>
          </details>
          
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Can I switch from lease to purchase during the term?</summary>
            <p className="text-muted-foreground mt-2">
              Many leases include early purchase options, but terms vary. You&apos;ll typically pay remaining lease payments plus 
              the residual value, minus any early purchase discounts. Review your lease agreement for specific terms.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}