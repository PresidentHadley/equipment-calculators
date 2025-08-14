import { Metadata } from 'next'
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact | EquipmentCalculators.com',
  description: 'Contact EquipmentCalculators.com. Send a message and we will get back to you shortly.',
  alternates: { canonical: 'https://equipmentcalculators.com/contact' }
}

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://equipmentcalculators.com' },
    { name: 'Contact', url: 'https://equipmentcalculators.com/contact' }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <BreadcrumbStructuredData items={breadcrumbs} />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-3">Contact</h1>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Have a question or feature request? Send a message below.
          </p>
          <ContactClient />
        </div>
        <div className="bg-muted rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4">Why Use Our Tools?</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>✓ Accurate calculations built on industry-standard methods</li>
            <li>✓ No email required to use the calculators</li>
            <li>✓ Free to use, no hidden fees or agendas</li>
          </ul>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Looking for SBA Loans?</h3>
            <a href="https://sbacalculators.com" target="_blank" rel="noopener" className="underline text-blue-600">Try SBACalculators.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}


