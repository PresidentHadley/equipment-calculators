import { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbStructuredData, ItemListStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Equipment Financing Glossary | Factor Rate, Residual, Section 179',
  description: 'Plain-english definitions for equipment financing terms: factor rate, residual value, Section 179, amortization, ROI, and more.',
  alternates: { canonical: 'https://equipmentcalculators.com/glossary' }
}

const terms: Array<{ term: string; definition: string }> = [
  { term: 'Factor Rate', definition: 'A decimal number (e.g., 0.025) used in leasing to calculate payments. Not the same as APR but correlates with it.' },
  { term: 'Residual Value', definition: 'Estimated equipment value at the end of a lease term. Higher residual generally lowers monthly payments.' },
  { term: 'Section 179', definition: 'A U.S. tax deduction allowing businesses to expense qualifying equipment in the year of purchase, up to annual limits.' },
  { term: 'Bonus Depreciation', definition: 'An additional tax deduction allowing accelerated depreciation of qualifying equipment.' },
  { term: 'Amortization', definition: 'The process of paying off a loan over time through regular payments of principal and interest.' },
  { term: 'APR', definition: 'Annual Percentage Rate, the yearly cost of borrowing including interest and fees, expressed as a percentage.' },
  { term: 'ROI', definition: 'Return on Investment; measures profitability relative to the initial cost.' },
  { term: 'Lease Term', definition: 'The length of a lease agreement, typically measured in months (e.g., 36, 48, 60).' },
  { term: 'Down Payment', definition: 'Upfront cash paid at purchase; reduces the loan amount and monthly payments.' }
]

export default function GlossaryPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Glossary', url: 'https://equipmentcalculators.com/glossary' }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <BreadcrumbStructuredData items={breadcrumbs} />
      <ItemListStructuredData
        name="Equipment Financing Glossary"
        items={terms.map(t => ({ name: t.term, url: `https://equipmentcalculators.com/glossary#${encodeURIComponent(t.term.toLowerCase().replace(/\s+/g,'-'))}` }))}
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Financing Glossary</h1>
      <p className="text-lg text-muted-foreground mb-8">Plain-English definitions of key terms used in equipment financing and leasing.</p>

      <div className="space-y-6">
        {terms.map((t) => (
          <div key={t.term} id={t.term.toLowerCase().replace(/\s+/g,'-')} className="p-5 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{t.term}</h2>
            <p className="text-muted-foreground">{t.definition}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        Explore calculators: <Link className="underline" href="/calculators/equipment-loan">Loan</Link> · <Link className="underline" href="/calculators/equipment-lease">Lease</Link> · <Link className="underline" href="/calculators/lease-vs-buy">Lease vs Buy</Link> · <Link className="underline" href="/calculators/equipment-roi">ROI</Link>
      </div>
    </div>
  )
}


