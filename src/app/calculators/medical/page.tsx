import { Metadata } from 'next'
import { EquipmentLoanCalculator } from '@/components/calculators/EquipmentLoanCalculator'
import { EquipmentLeaseCalculator } from '@/components/calculators/EquipmentLeaseCalculator'
import { LeaseVsBuyCalculator } from '@/components/calculators/LeaseVsBuyCalculator'
import { EquipmentROICalculator } from '@/components/calculators/EquipmentROICalculator'
import { FAQStructuredData, BreadcrumbStructuredData, ItemListStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Medical Equipment Financing Calculators | Loans, Leases, ROI',
  description: 'Free medical equipment financing calculators. Model equipment loans, leases (factor rates), lease vs buy, and ROI for imaging, dental, and clinical devices.',
  keywords: 'medical equipment loan calculator, medical equipment lease calculator, dental equipment financing, imaging equipment financing, lease vs buy medical equipment',
  openGraph: {
    title: 'Medical Equipment Financing Calculators',
    description: 'Calculate payments for medical equipment loans and leases, compare lease vs buy, and estimate ROI.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/medical',
    images: [
      { url: 'https://equipmentcalculators.com/api/og?title=Medical%20Equipment&subtitle=Loans%2C%20Leases%2C%20ROI%2C%20Compare', width: 1200, height: 630 }
    ]
  },
  alternates: {
    canonical: 'https://equipmentcalculators.com/calculators/medical'
  }
}

export default function MedicalCalculatorsPage() {
  const faqs = [
    {
      question: 'What rates are typical for medical equipment financing?',
      answer: 'Medical equipment often qualifies for competitive terms: loans around 6–10% APR; lease factor rates around 0.020–0.028 depending on credit and term.'
    },
    {
      question: 'Is leasing common in healthcare?',
      answer: 'Yes. Leasing is popular due to rapid tech refresh cycles. Compare lease vs buy below to quantify the benefit.'
    },
    {
      question: 'Can I finance used medical equipment?',
      answer: 'Yes, though rates and residual assumptions may differ versus new devices.'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Calculators', url: 'https://equipmentcalculators.com/#calculators' },
    { name: 'Medical Equipment', url: 'https://equipmentcalculators.com/calculators/medical' }
  ]

  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData
        name="Medical Equipment Calculators"
        items={[
          { name: 'Equipment Loan Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-loan' },
          { name: 'Equipment Lease Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-lease' },
          { name: 'Lease vs Buy Calculator', url: 'https://equipmentcalculators.com/calculators/lease-vs-buy' },
          { name: 'Equipment ROI Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-roi' }
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Equipment Financing Calculators</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Model loans, leases, lease vs buy, and ROI for imaging systems, dental chairs, diagnostic and clinical devices.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Loan Calculator</h2>
            <EquipmentLoanCalculator
              className=""
              defaults={{
                equipmentCost: 150000,
                downPayment: 15000,
                interestRate: 7.0,
                termMonths: 72,
                equipmentType: 'Medical Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Lease Calculator</h2>
            <EquipmentLeaseCalculator
              className=""
              defaults={{
                equipmentCost: 150000,
                factorRate: 0.024,
                termMonths: 48,
                residualValue: 45000,
                equipmentType: 'Medical Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Lease vs Buy Calculator</h2>
            <LeaseVsBuyCalculator
              className=""
              defaults={{
                equipmentCost: 150000,
                downPayment: 15000,
                loanRate: 7.0,
                loanTermMonths: 72,
                leaseFactorRate: 0.024,
                leaseTermMonths: 48,
                residualValue: 45000,
                equipmentType: 'Medical Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment ROI Calculator</h2>
            <EquipmentROICalculator
              className=""
              defaults={{
                equipmentCost: 150000,
                monthlyRevenue: 25000,
                monthlyExpenses: 7000,
                termMonths: 60,
                equipmentType: 'Medical Equipment'
              }}
            />
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Healthcare Financing Tips</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Consider tech refresh needs; shorter lease terms can align with upgrade cycles.</li>
              <li>Evaluate service contracts and warranties in total cost of ownership.</li>
              <li>Tax treatment differs for loans vs leases; consult your advisor.</li>
            </ul>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              Explore other industries: <a className="underline" href="/calculators/construction">Construction</a> · <a className="underline" href="/calculators/restaurant">Restaurant</a> · <a className="underline" href="/calculators/manufacturing">Manufacturing</a>
            </div>
          </section>

          {/* Long-Form SEO Section */}
          <section className="max-w-4xl mx-auto mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Medical Equipment Financing: Complete Guide</h2>
            <p className="text-muted-foreground">
              Medical equipment often qualifies for competitive terms due to high utilization and strong revenue potential.
              Use the calculators above to compare loan vs lease and model ROI based on expected procedure volumes.
            </p>
            <h3 className="text-xl font-semibold">Key Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Maintenance and calibration contracts impact total cost</li>
              <li>Upgrade cycles favor leasing for certain modalities</li>
              <li>Reimbursement rates affect ROI projections</li>
            </ul>
            <h3 className="text-xl font-semibold">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Validate demand with conservative utilization assumptions</li>
              <li>Compare FMV leases vs $1 buyout for technology equipment</li>
              <li>Coordinate financing with installation and training timelines</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}


