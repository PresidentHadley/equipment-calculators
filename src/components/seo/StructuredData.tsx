import { CalculatorType } from '@/types/calculator'

interface CalculatorStructuredDataProps {
  calculatorType: CalculatorType
  title: string
  description: string
  url: string
}

export function CalculatorStructuredData({
  calculatorType,
  title,
  description,
  url
}: CalculatorStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Calculator",
    "name": title,
    "description": description,
    "url": url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "creator": {
      "@type": "Person",
      "name": "Patrick Hadley",
      "jobTitle": "Equipment Financing Expert"
    },
    "provider": {
      "@type": "Organization",
      "name": "EquipmentCalculators.com",
      "url": "https://equipmentcalculators.com",
      "description": "Free equipment financing calculators built by a 20+ year industry expert"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "softwareRequirements": "Modern web browser with JavaScript enabled",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface BusinessStructuredDataProps {
  name: string
  description: string
  url: string
}

export function BusinessStructuredData({
  name,
  description,
  url
}: BusinessStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name,
    "description": description,
    "url": url,
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Patrick Hadley",
      "jobTitle": "Equipment Financing Expert",
      "hasCredential": "20+ years equipment financing experience"
    },
    "serviceType": "Equipment Financing Calculators",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Equipment Financing Calculators",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Loan Calculator",
            "description": "Calculate monthly payments, total interest, and amortization schedules"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Lease Calculator",
            "description": "Calculate lease payments using factor rates and residual values"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lease vs Buy Calculator",
            "description": "Compare equipment leasing versus buying with ROI analysis"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    },
    "sameAs": [
      "https://github.com/PresidentHadley/equipment-calculators"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface FAQStructuredDataProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface ItemListStructuredDataProps {
  name?: string
  items: Array<{
    name: string
    url: string
    description?: string
  }>
}

export function ItemListStructuredData({ name, items }: ItemListStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name ?? 'Calculators',
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebPage",
        "name": item.name,
        "url": item.url,
        ...(item.description ? { description: item.description } : {})
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface WebsiteStructuredDataProps {
  url: string
  name: string
  searchUrlTemplate?: string
}

export function WebsiteStructuredData({ url, name, searchUrlTemplate }: WebsiteStructuredDataProps) {
  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": name
  }

  if (searchUrlTemplate) {
    structuredData.potentialAction = {
      "@type": "SearchAction",
      "target": `${url}${searchUrlTemplate}`,
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface SiteNavigationStructuredDataProps {
  items: Array<{ name: string; url: string }>
}

export function SiteNavigationStructuredData({ items }: SiteNavigationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "SiteNavigationElement",
      "position": index + 1,
      "name": item.name,
      "url": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface HowToStructuredDataProps {
  name: string
  description?: string
  steps: Array<{ name: string; text: string }>
}

export function HowToStructuredData({ name, description, steps }: HowToStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    ...(description ? { description } : {}),
    "step": steps.map((s, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": s.name,
      "text": s.text
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface QAPageStructuredDataProps {
  qa: Array<{
    question: string
    answer: string
  }>
}

export function QAPageStructuredData({ qa }: QAPageStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": qa.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}