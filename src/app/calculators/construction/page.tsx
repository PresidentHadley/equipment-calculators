import { Metadata } from 'next'
import { EquipmentLoanCalculator } from '@/components/calculators/EquipmentLoanCalculator'
import { EquipmentLeaseCalculator } from '@/components/calculators/EquipmentLeaseCalculator'
import { LeaseVsBuyCalculator } from '@/components/calculators/LeaseVsBuyCalculator'
import { EquipmentROICalculator } from '@/components/calculators/EquipmentROICalculator'
import { FAQStructuredData, BreadcrumbStructuredData, ItemListStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Construction Equipment Financing Calculators | Loans, Leases, ROI',
  description: 'Free construction equipment financing calculators. Model equipment loans, leases (factor rates), lease vs buy, and ROI for excavators, skid steers, and more.',
  keywords: 'construction equipment loan calculator, construction equipment lease calculator, excavator financing, skid steer financing, lease vs buy construction equipment',
  openGraph: {
    title: 'Construction Equipment Financing Calculators',
    description: 'Calculate payments for construction equipment loans and leases, compare lease vs buy, and estimate ROI.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/construction',
    images: [
      { url: 'https://equipmentcalculators.com/api/og?title=Construction%20Equipment&subtitle=Loans%2C%20Leases%2C%20ROI%2C%20Compare', width: 1200, height: 630 }
    ]
  },
  alternates: {
    canonical: 'https://equipmentcalculators.com/calculators/construction'
  }
}

export default function ConstructionCalculatorsPage() {
  const faqs = [
    {
      question: 'What interest rates are typical for construction equipment?',
      answer: 'Well-qualified borrowers commonly see 7-12% APR on loans; leases use factor rates around 0.022–0.032 depending on term and equipment age.'
    },
    {
      question: 'Is leasing or buying better for construction equipment?',
      answer: 'Leasing can lower monthly payments and preserve capital; buying builds equity. Use the Lease vs Buy tool below to see which saves more for your scenario.'
    },
    {
      question: 'What terms are common?',
      answer: 'Loans often run 36–84 months; leases 24–60 months. Heavy equipment may qualify for longer terms.'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Calculators', url: 'https://equipmentcalculators.com/#calculators' },
    { name: 'Construction Equipment', url: 'https://equipmentcalculators.com/calculators/construction' }
  ]

  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData
        name="Construction Equipment Calculators"
        items={[
          { name: 'Equipment Loan Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-loan', description: 'Monthly payments and amortization' },
          { name: 'Equipment Lease Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-lease', description: 'Factor rates and residuals' },
          { name: 'Lease vs Buy Calculator', url: 'https://equipmentcalculators.com/calculators/lease-vs-buy', description: 'Side-by-side comparison' },
          { name: 'Equipment ROI Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-roi', description: 'Payback and ROI' }
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Equipment Financing Calculators</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Model loans, leases, lease vs buy, and ROI for excavators, skid steers, dozers, lifts, and more.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Loan Calculator</h2>
            <EquipmentLoanCalculator
              className=""
              defaults={{
                equipmentCost: 120000,
                downPayment: 24000,
                interestRate: 8.5,
                termMonths: 60,
                equipmentType: 'Construction Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Lease Calculator</h2>
            <EquipmentLeaseCalculator
              className=""
              defaults={{
                equipmentCost: 120000,
                factorRate: 0.028,
                termMonths: 36,
                residualValue: 42000,
                equipmentType: 'Construction Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Lease vs Buy Calculator</h2>
            <LeaseVsBuyCalculator
              className=""
              defaults={{
                equipmentCost: 120000,
                downPayment: 24000,
                loanRate: 8.5,
                loanTermMonths: 60,
                leaseFactorRate: 0.028,
                leaseTermMonths: 36,
                residualValue: 42000,
                equipmentType: 'Construction Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment ROI Calculator</h2>
            <EquipmentROICalculator
              className=""
              defaults={{
                equipmentCost: 120000,
                monthlyRevenue: 18000,
                monthlyExpenses: 6000,
                termMonths: 60,
                equipmentType: 'Construction Equipment'
              }}
            />
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Construction Financing Tips</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>New equipment typically qualifies for longer terms and lower rates than used.</li>
              <li>Factor rates in leases are not APR; use the tools to compare true total costs.</li>
              <li>Include maintenance, fuel, and operator costs when modeling ROI.</li>
            </ul>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              Explore other industries: <a className="underline" href="/calculators/medical">Medical</a> · <a className="underline" href="/calculators/restaurant">Restaurant</a> · <a className="underline" href="/calculators/manufacturing">Manufacturing</a>
            </div>
          </section>

          {/* Long-Form SEO Section */}
          <section className="max-w-4xl mx-auto mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Construction Equipment Financing: Complete Guide</h2>
            <p className="text-muted-foreground">
              Construction equipment financing is typically structured as a term loan or lease. Rates vary by credit profile,
              equipment age, and term length. Use our calculators above to model monthly payments and total cost.
            </p>
            <h3 className="text-xl font-semibold">What Impacts Your Rate</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Business time-in-operation and credit scores</li>
              <li>Loan-to-value (LTV) and down payment</li>
              <li>Equipment category, age, and resale strength</li>
            </ul>
            <h3 className="text-xl font-semibold">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Match term length to useful life and project pipeline</li>
              <li>Pre-qualify with multiple lenders for rate/term comparison</li>
              <li>Factor in maintenance, transport, and insurance in ROI</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}


