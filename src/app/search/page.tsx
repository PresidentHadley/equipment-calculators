import { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData'
import { Suspense } from 'react'
import SearchClient from './search-client'

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

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const params = await searchParams
  const initial = typeof params?.q === 'string' ? params.q : Array.isArray(params?.q) ? params.q[0] : ''
  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Search', url: 'https://equipmentcalculators.com/search' }
  ]
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <BreadcrumbStructuredData items={breadcrumbs} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Search</h1>
      <Suspense>
        <SearchClient initialQuery={initial} pages={pages} />
      </Suspense>
    </div>
  )
}


