"use client"
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'

export default function SearchClient({ initialQuery, pages }: { initialQuery: string; pages: Array<{ title: string; href: string }> }) {
  const [query, setQuery] = useState(initialQuery)
  const results = useMemo(() => {
    const q = (query || '').toLowerCase().trim()
    if (!q) return pages
    return pages.filter(p => p.title.toLowerCase().includes(q))
  }, [query, pages])

  return (
    <>
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
    </>
  )
}


