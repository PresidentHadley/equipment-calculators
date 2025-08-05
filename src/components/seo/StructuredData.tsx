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