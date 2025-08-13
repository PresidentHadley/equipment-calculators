import { Metadata } from 'next'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { useMemo, useState } from 'react'

export const metadata: Metadata = {
  title: 'Search | EquipmentCalculators.com',
  description: 'Search calculators and content across EquipmentCalculators.com.'
}

const pages = [
  { title: 'Equipment Loan Calculator', href: '/calculators/equipment-loan' },
  { title: 'Equipment Lease Calculator', href: '/calculators/equipment-lease' },
  { title: 'Lease vs Buy Calculator', href: '/calculators/lease-vs-buy' },
  { title: 'Equipment ROI Calculator', href: '/calculators/equipment-roi' },
  { title: 'Construction Equipment Calculators', href: '/calculators/construction' },
  { title: 'Medical Equipment Calculators', href: '/calculators/medical' },
  { title: 'Restaurant Equipment Calculators', href: '/calculators/restaurant' },
  { title: 'Manufacturing Equipment Calculators', href: '/calculators/manufacturing' },
  { title: 'About EquipmentCalculators.com', href: '/about' },
]

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const initial = typeof searchParams?.q === 'string' ? searchParams.q : ''
  const [query, setQuery] = useState(initial)

  const results = useMemo(() => {
    const q = (query || '').toLowerCase().trim()
    if (!q) return pages
    return pages.filter(p => p.title.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Search</h1>
      <div className="mb-6">
        <Input
          label="Search calculators and pages"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try: equipment loan, lease vs buy, construction..."
        />
      </div>
      <ul className="space-y-2">
        {results.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="text-blue-600 hover:underline">{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


