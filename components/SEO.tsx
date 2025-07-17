'use client'

import Head from 'next/head'
import { siteConfig } from '@/lib/config'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  noindex = false 
}: SEOProps) {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const seoDescription = description || siteConfig.description
  const seoCanonical = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoCanonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:creator" content="@forkedocean" />
      
      {/* Additional meta tags */}
      <meta name="author" content="ForkedMind" />
      <meta name="creator" content="ForkedMind" />
      <meta name="publisher" content="ForkedOcean" />
    </Head>
  )
}