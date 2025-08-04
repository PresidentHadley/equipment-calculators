// Analytics tracking utilities

interface CalculatorEvent {
  calculatorType: string
  action: 'started' | 'completed' | 'results_viewed' | 'shared'
  value?: number
  equipment_type?: string
  loan_amount?: number
}

interface ConversionEvent {
  event: 'calculator_to_lead' | 'calculator_to_contact' | 'calculator_to_about'
  calculator_source: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

export function trackCalculatorEvent(event: CalculatorEvent) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: 'calculator',
      event_label: event.calculatorType,
      value: event.value,
      custom_parameters: {
        equipment_type: event.equipment_type,
        loan_amount: event.loan_amount,
      }
    })
  }

  // Vercel Analytics (automatically tracks page views)
  // Custom events can be added here if needed

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Calculator Event:', event)
  }
}

export function trackConversion(event: ConversionEvent) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'lead_generation',
      event_label: event.event,
      value: event.value,
      custom_parameters: {
        calculator_source: event.calculator_source,
      }
    })
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Conversion Event:', event)
  }
}

export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_title: title,
      page_location: url,
    })
  }
}

// Performance tracking
export function trackWebVitals(metric: {
  name: string
  value: number
  id: string
  rating?: string
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.rating || 'unknown',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }
}