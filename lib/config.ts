// Site configuration using environment variables
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'ForkedOcean',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Your Ocean. Your Control.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://forkedocean.com',
  
  // Feature flags
  features: {
    terminal: process.env.NEXT_PUBLIC_ENABLE_TERMINAL === 'true',
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  },

  // Social links
  links: {
    github: 'https://github.com/forkedocean',
    twitter: 'https://twitter.com/forkedocean',
  }
} as const

export type SiteConfig = typeof siteConfig