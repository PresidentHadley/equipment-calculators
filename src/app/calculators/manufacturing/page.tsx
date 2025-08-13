import { Metadata } from 'next'
import { EquipmentLoanCalculator } from '@/components/calculators/EquipmentLoanCalculator'
import { EquipmentLeaseCalculator } from '@/components/calculators/EquipmentLeaseCalculator'
import { LeaseVsBuyCalculator } from '@/components/calculators/LeaseVsBuyCalculator'
import { EquipmentROICalculator } from '@/components/calculators/EquipmentROICalculator'
import { FAQStructuredData, BreadcrumbStructuredData, ItemListStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Manufacturing Equipment Financing Calculators | Loans, Leases, ROI',
  description: 'Free manufacturing equipment financing calculators. Model equipment loans, leases (factor rates), lease vs buy, and ROI for CNC, production lines, and more.',
  keywords: 'manufacturing equipment loan calculator, manufacturing equipment lease calculator, CNC financing, production line financing, lease vs buy manufacturing equipment',
  openGraph: {
    title: 'Manufacturing Equipment Financing Calculators',
    description: 'Calculate payments for manufacturing equipment loans and leases, compare lease vs buy, and estimate ROI.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/manufacturing',
    images: [
      { url: 'https://equipmentcalculators.com/api/og?title=Manufacturing%20Equipment&subtitle=Loans%2C%20Leases%2C%20ROI%2C%20Compare', width: 1200, height: 630 }
    ]
  },
  alternates: {
    canonical: 'https://equipmentcalculators.com/calculators/manufacturing'
  }
}

export default function ManufacturingCalculatorsPage() {
  const faqs = [
    {
      question: 'What rates are common for manufacturing equipment?',
      answer: 'Strong borrowers may see 7–11% APR on loans; lease factor rates around 0.022–0.030 depending on term, equipment age, and collateral strength.'
    },
    {
      question: 'How long can I finance?',
      answer: 'Heavier manufacturing assets can qualify for 60–84 month loans and 36–60 month leases.'
    },
    {
      question: 'Can I finance used CNC machines?',
      answer: 'Yes. Lenders often require inspections and may adjust terms based on age and hours.'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Calculators', url: 'https://equipmentcalculators.com/#calculators' },
    { name: 'Manufacturing Equipment', url: 'https://equipmentcalculators.com/calculators/manufacturing' }
  ]

  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData
        name="Manufacturing Equipment Calculators"
        items={[
          { name: 'Equipment Loan Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-loan' },
          { name: 'Equipment Lease Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-lease' },
          { name: 'Lease vs Buy Calculator', url: 'https://equipmentcalculators.com/calculators/lease-vs-buy' },
          { name: 'Equipment ROI Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-roi' }
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing Equipment Financing Calculators</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Model loans, leases, lease vs buy, and ROI for CNC machines, production lines, packaging systems, and more.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Loan Calculator</h2>
            <EquipmentLoanCalculator
              className=""
              defaults={{
                equipmentCost: 200000,
                downPayment: 40000,
                interestRate: 9.0,
                termMonths: 84,
                equipmentType: 'Manufacturing Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Lease Calculator</h2>
            <EquipmentLeaseCalculator
              className=""
              defaults={{
                equipmentCost: 200000,
                factorRate: 0.027,
                termMonths: 60,
                residualValue: 50000,
                equipmentType: 'Manufacturing Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Lease vs Buy Calculator</h2>
            <LeaseVsBuyCalculator
              className=""
              defaults={{
                equipmentCost: 200000,
                downPayment: 40000,
                loanRate: 9.0,
                loanTermMonths: 84,
                leaseFactorRate: 0.027,
                leaseTermMonths: 60,
                residualValue: 50000,
                equipmentType: 'Manufacturing Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment ROI Calculator</h2>
            <EquipmentROICalculator
              className=""
              defaults={{
                equipmentCost: 200000,
                monthlyRevenue: 30000,
                monthlyExpenses: 10000,
                termMonths: 72,
                equipmentType: 'Manufacturing Equipment'
              }}
            />
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Manufacturing Financing Tips</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Package installation and tooling costs into financing where possible.</li>
              <li>Consider productivity gains in ROI modeling, not just revenue.</li>
              <li>Explore Section 179 and bonus depreciation benefits with your CPA.</li>
            </ul>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              Explore other industries: <a className="underline" href="/calculators/construction">Construction</a> · <a className="underline" href="/calculators/medical">Medical</a> · <a className="underline" href="/calculators/restaurant">Restaurant</a>
            </div>
          </section>

          {/* Long-Form SEO Section */}
          <section className="max-w-4xl mx-auto mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Manufacturing Equipment Financing: Complete Guide</h2>
            <p className="text-muted-foreground">
              Manufacturing assets often qualify for longer loan terms due to durable collateral and strong productivity gains.
              Use the calculators above to compare cost of ownership versus leasing flexibility.
            </p>
            <h3 className="text-xl font-semibold">Key Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Installation, tooling, and training timelines</li>
              <li>Throughput increases and quality improvements</li>
              <li>Preventive maintenance and uptime targets</li>
            </ul>
            <h3 className="text-xl font-semibold">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Align term with asset life and production forecasts</li>
              <li>Benchmark ROI on productivity, not just top-line revenue</li>
              <li>Use lease options for rapidly evolving peripherals</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}


