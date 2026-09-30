import React from 'react'
import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact Us | SSL Fintech',
  description: 'Reach out to our Bengaluru financial team. Apply for personal loans, business loans, or schedule wealth and mutual fund advisory.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | SSL Fintech',
    description: 'Reach out to our Bengaluru financial team. Apply for personal loans, business loans, or schedule wealth and mutual fund advisory.',
    url: '/contact',
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
                "name": "Contact Us",
                "item": "https://www.sslfintech.org/contact"
              }
            ]
          })
        }}
      />
      <ContactClient />
    </>
  )
}

