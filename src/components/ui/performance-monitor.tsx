'use client'

import { useEffect } from 'react'
import { trackWebVitals } from '@/lib/analytics'

export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== 'undefined') {
      // Web Vitals will be imported dynamically to avoid affecting bundle size
      import('web-vitals').then((webVitals) => {
        if (webVitals.onCLS) webVitals.onCLS(trackWebVitals)
        if (webVitals.onINP) webVitals.onINP(trackWebVitals)
        if (webVitals.onFCP) webVitals.onFCP(trackWebVitals)
        if (webVitals.onLCP) webVitals.onLCP(trackWebVitals)
        if (webVitals.onTTFB) webVitals.onTTFB(trackWebVitals)
      }).catch(() => {
        // Silently fail if web-vitals is not available
      })
    }

    // Basic performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor navigation timing
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            
            // Track loading performance
            if (navEntry.loadEventEnd > 0) {
              const loadTime = navEntry.loadEventEnd - navEntry.startTime
              console.log('Page Load Time:', loadTime + 'ms')
            }
          }
        }
      })

      // Observer for navigation and resource timing
      try {
        observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint'] })
      } catch {
        // Some browsers might not support all entry types
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return null // This component doesn't render anything
}