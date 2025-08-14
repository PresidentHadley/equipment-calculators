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
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <BreadcrumbStructuredData items={breadcrumbs} />
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-muted-foreground mb-8">Have a question or feature request? Send a message below.</p>
      <ContactClient />
    </div>
  )
}


