import { Metadata } from 'next'
import Link from 'next/link'
import { ItemListStructuredData, BreadcrumbStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'All Equipment Calculators | Loans, Leases, ROI, Lease vs Buy',
  description: 'Browse all equipment financing calculators and industry-specific tools. Loans, leases, ROI, and lease vs buy calculators for construction, medical, restaurant, and manufacturing.',
  alternates: { canonical: 'https://equipmentcalculators.com/calculators' }
}

const calculators = [
  { title: 'Equipment Loan Calculator', href: '/calculators/equipment-loan' },
  { title: 'Equipment Lease Calculator', href: '/calculators/equipment-lease' },
  { title: 'Lease vs Buy Calculator', href: '/calculators/lease-vs-buy' },
  { title: 'Equipment ROI Calculator', href: '/calculators/equipment-roi' },
]

const industries = [
  { title: 'Construction Equipment', href: '/calculators/construction' },
  { title: 'Medical Equipment', href: '/calculators/medical' },
  { title: 'Restaurant Equipment', href: '/calculators/restaurant' },
  { title: 'Manufacturing Equipment', href: '/calculators/manufacturing' },
]

export default function CalculatorsHubPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Calculators', url: 'https://equipmentcalculators.com/calculators' }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData
        name="All Calculators"
        items={[...calculators, ...industries].map(i => ({ name: i.title, url: `https://equipmentcalculators.com${i.href}` }))}
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-6">All Equipment Calculators</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Pick a calculator or browse by industry. All are free and require no signup.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Core Calculators</h2>
          <ul className="space-y-2">
            {calculators.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-blue-600 hover:underline">{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Industry Calculators</h2>
          <ul className="space-y-2">
            {industries.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-blue-600 hover:underline">{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


