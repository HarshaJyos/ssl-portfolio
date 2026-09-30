import React from 'react'
import ToolsClient from './ToolsClient'

export const metadata = {
  title: 'Financial Tools & Calculators | EMI, SIP & Goal Planners | SSL Fintech',
  description: 'Calculate loan EMI payments, amortization schedules, SIP returns, and delay costs with free financial calculators from SSL Fintech Bengaluru.',
  alternates: {
    canonical: '/tools',
  },
  openGraph: {
    title: 'Financial Tools & Calculators | EMI, SIP & Goal Planners | SSL Fintech',
    description: 'Calculate loan EMI payments, amortization schedules, SIP returns, and delay costs with free financial calculators from SSL Fintech Bengaluru.',
    url: '/tools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sslfintech.org"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Financial Tools & Calculators",
                "item": "https://www.sslfintech.org/tools"
              }
            ]
          })
        }}
      />
      <ToolsClient />
    </>
  )
}

