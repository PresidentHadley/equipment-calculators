import { Metadata } from 'next'
import { EquipmentLoanCalculator } from '@/components/calculators/EquipmentLoanCalculator'
import { EquipmentLeaseCalculator } from '@/components/calculators/EquipmentLeaseCalculator'
import { LeaseVsBuyCalculator } from '@/components/calculators/LeaseVsBuyCalculator'
import { EquipmentROICalculator } from '@/components/calculators/EquipmentROICalculator'
import { FAQStructuredData, BreadcrumbStructuredData, ItemListStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Restaurant Equipment Financing Calculators | Loans, Leases, ROI',
  description: 'Free restaurant equipment financing calculators. Model equipment loans, leases (factor rates), lease vs buy, and ROI for kitchen and foodservice equipment.',
  keywords: 'restaurant equipment loan calculator, restaurant equipment lease calculator, commercial kitchen financing, lease vs buy restaurant equipment',
  openGraph: {
    title: 'Restaurant Equipment Financing Calculators',
    description: 'Calculate payments for restaurant equipment loans and leases, compare lease vs buy, and estimate ROI.',
    type: 'website',
    url: 'https://equipmentcalculators.com/calculators/restaurant',
    images: [
      { url: 'https://equipmentcalculators.com/api/og?title=Restaurant%20Equipment&subtitle=Loans%2C%20Leases%2C%20ROI%2C%20Compare', width: 1200, height: 630 }
    ]
  },
  alternates: {
    canonical: 'https://equipmentcalculators.com/calculators/restaurant'
  }
}

export default function RestaurantCalculatorsPage() {
  const faqs = [
    {
      question: 'What rates are common for restaurant equipment?',
      answer: 'Depending on credit and equipment, loans often range 9–15% APR; lease factor rates around 0.026–0.035 are typical for smaller-ticket items.'
    },
    {
      question: 'What terms should I expect?',
      answer: 'Many restaurant deals run 24–60 months. Shorter terms reduce total interest but raise monthly payments.'
    },
    {
      question: 'Can I bundle multiple items?',
      answer: 'Yes. Many lenders allow bundling multiple pieces of kitchen equipment into a single financing agreement.'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Calculators', url: 'https://equipmentcalculators.com/#calculators' },
    { name: 'Restaurant Equipment', url: 'https://equipmentcalculators.com/calculators/restaurant' }
  ]

  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData
        name="Restaurant Equipment Calculators"
        items={[
          { name: 'Equipment Loan Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-loan' },
          { name: 'Equipment Lease Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-lease' },
          { name: 'Lease vs Buy Calculator', url: 'https://equipmentcalculators.com/calculators/lease-vs-buy' },
          { name: 'Equipment ROI Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-roi' }
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurant Equipment Financing Calculators</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Model loans, leases, lease vs buy, and ROI for ovens, refrigeration, prep stations, POS hardware, and more.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Loan Calculator</h2>
            <EquipmentLoanCalculator
              className=""
              defaults={{
                equipmentCost: 60000,
                downPayment: 12000,
                interestRate: 10.5,
                termMonths: 48,
                equipmentType: 'Restaurant Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Lease Calculator</h2>
            <EquipmentLeaseCalculator
              className=""
              defaults={{
                equipmentCost: 60000,
                factorRate: 0.03,
                termMonths: 36,
                residualValue: 12000,
                equipmentType: 'Restaurant Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Lease vs Buy Calculator</h2>
            <LeaseVsBuyCalculator
              className=""
              defaults={{
                equipmentCost: 60000,
                downPayment: 12000,
                loanRate: 10.5,
                loanTermMonths: 48,
                leaseFactorRate: 0.03,
                leaseTermMonths: 36,
                residualValue: 12000,
                equipmentType: 'Restaurant Equipment'
              }}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment ROI Calculator</h2>
            <EquipmentROICalculator
              className=""
              defaults={{
                equipmentCost: 60000,
                monthlyRevenue: 8000,
                monthlyExpenses: 3000,
                termMonths: 48,
                equipmentType: 'Restaurant Equipment'
              }}
            />
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Restaurant Financing Tips</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Account for installation, ventilation, and electrical upgrades in total cost.</li>
              <li>Seasonality can impact cash flow—try longer terms for smoother payments.</li>
              <li>Leasing can simplify equipment upgrades as your menu evolves.</li>
            </ul>
            <div className="text-center mt-6 text-sm text-muted-foreground">
              Explore other industries: <a className="underline" href="/calculators/construction">Construction</a> · <a className="underline" href="/calculators/medical">Medical</a> · <a className="underline" href="/calculators/manufacturing">Manufacturing</a>
            </div>
          </section>

          {/* Long-Form SEO Section */}
          <section className="max-w-4xl mx-auto mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Restaurant Equipment Financing: Complete Guide</h2>
            <p className="text-muted-foreground">
              Restaurant equipment financing frequently uses shorter terms and may bundle multiple items into a single agreement.
              Use the calculators above to estimate payments and ROI, including expected sales lift and labor savings.
            </p>
            <h3 className="text-xl font-semibold">Key Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Installation costs (ventilation, electrical, plumbing)</li>
              <li>Warranty and service plan terms</li>
              <li>Menu changes driving utilization and revenue</li>
            </ul>
            <h3 className="text-xl font-semibold">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Model seasonality using conservative revenue assumptions</li>
              <li>Consider leasing for frequent upgrades (e.g., POS systems)</li>
              <li>Negotiate installation and delivery timelines with financing</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}


