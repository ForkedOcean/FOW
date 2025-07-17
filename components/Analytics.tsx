'use client'

import { useEffect } from 'react'
import { siteConfig } from '@/lib/config'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (...args: any[]) => void
  }
}

export default function Analytics() {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV !== 'production' || !siteConfig.features.analytics) {
      return
    }

    // Google Analytics
    if (siteConfig.analytics.googleAnalyticsId) {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        window.gtag = function() {
          // @ts-ignore
          dataLayer.push(arguments)
        }
        window.gtag('js', new Date())
        window.gtag('config', siteConfig.analytics.googleAnalyticsId!)
      }
    }

    // Plausible Analytics
    if (siteConfig.analytics.plausibleDomain) {
      const script = document.createElement('script')
      script.src = 'https://plausible.io/js/script.js'
      script.defer = true
      script.setAttribute('data-domain', siteConfig.analytics.plausibleDomain)
      document.head.appendChild(script)
    }
  }, [])

  return null
}