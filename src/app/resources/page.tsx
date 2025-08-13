import { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbStructuredData, ItemListStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Resources | Equipment Financing Guides, Glossary, Tools',
  description: 'Guides, glossary, and tools for equipment financing. Learn factor rates, residuals, Section 179, and compare loan vs lease vs ROI.',
  alternates: { canonical: 'https://equipmentcalculators.com/resources' }
}

const resources = [
  { title: 'All Calculators', href: '/calculators' },
  { title: 'Glossary', href: '/glossary' },
  { title: 'Equipment Loan Calculator', href: '/calculators/equipment-loan' },
  { title: 'Equipment Lease Calculator', href: '/calculators/equipment-lease' },
  { title: 'Lease vs Buy Calculator', href: '/calculators/lease-vs-buy' },
  { title: 'Equipment ROI Calculator', href: '/calculators/equipment-roi' },
  { title: 'Construction Equipment', href: '/calculators/construction' },
  { title: 'Medical Equipment', href: '/calculators/medical' },
  { title: 'Restaurant Equipment', href: '/calculators/restaurant' },
  { title: 'Manufacturing Equipment', href: '/calculators/manufacturing' },
]

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Resources', url: 'https://equipmentcalculators.com/resources' }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData name="Resources" items={resources.map(r => ({ name: r.title, url: `https://equipmentcalculators.com${r.href}` }))} />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
      <p className="text-lg text-muted-foreground mb-8">All the guides, calculators, and definitions in one place.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {resources.map((r) => (
          <div key={r.href} className="p-5 border rounded-lg">
            <Link href={r.href} className="text-blue-600 hover:underline text-lg font-semibold">{r.title}</Link>
            <div className="text-sm text-muted-foreground mt-1">{r.href.replace('/calculators/', '').replace('/', ' ').replace('-', ' ').toUpperCase()}</div>
          </div>
        ))}
      </div>

      {/* External Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">External Resources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://sbacalculators.com"
              target="_blank"
              rel="noopener"
              className="text-blue-600 hover:underline"
            >
              SBA Loan Calculators (SBACalculators.com)
            </a>
            <span className="block text-sm text-muted-foreground">Calculate SBA 7(a) and 504 loan payments, fees, and amortization.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}


