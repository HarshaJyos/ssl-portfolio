import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Manrope, DM_Serif_Display, Inter, Plus_Jakarta_Sans } from "next/font/google";
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-general-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={`${manrope.variable} ${dmSerifDisplay.variable} ${inter.variable} ${plusJakartaSans.variable} h-full antialiased`} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col bg-[#f6f3f3] text-black">
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          
          <Footer />
        </Providers>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FinancialService",
                "name": "SSL Fintech Private Limited",
                "alternateName": "SSL Fintech",
                "url": "https://www.sslfintech.org",
                "logo": "https://www.sslfintech.org/assets/logo.png",
                "description": "Leading loan aggregator and financial broker (DSA) in Bengaluru. Connecting customers with top Banks and NBFC partners for personal loans, business loans, and home loans.",
                "telephone": "+91 90256 65100",
                "email": "support@sslfintech.org",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "295 SRR Layout, Ajagondanahalli, Whitefield",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560087",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "12.9698",
                  "longitude": "77.7500"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 90256 65100",
                  "contactType": "customer support",
                  "email": "support@sslfintech.org",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "kn", "te"]
                },
                "founder": {
                  "@type": "Person",
                  "name": "Raja Mylavarapu",
                  "jobTitle": "Founder",
                  "description": "AMFI-registered mutual fund distributor (ARN-302874) with over 20+ years of expertise in wealth management, tax laws, and loan consultation."
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Bengaluru"
                },
                "priceRange": "$$",
                "knowsAbout": ["Personal Loans", "Business Loans", "Home Loans", "Mutual Fund Investments", "Retirement Planning"]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the minimum monthly income requirement for a loan at SSL Fintech?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Salaried individuals applying for personal or business loans through SSL Fintech must have a minimum monthly income of ₹25,000."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the interest rates for loans at SSL Fintech?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "As an aggregator, SSL Fintech connects you to partner banks and NBFCs with loan interest rates starting from 9.99% up to 26% per annum, depending on the lender's credit policies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does SSL Fintech charge any consultation or service fees?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, SSL Fintech does not charge applicants any service fee, brokerage commission, or consulting charges. Customers only pay the standard administrative processing fees directly to the sanctioning bank or NBFC."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does SSL Fintech retain customer data?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "To guarantee customer confidentiality, all personal information and loan inquiry documents are permanently and securely deleted from our databases exactly 30 days after form submission."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: "SSL Fintech | Personal Loans Made Simple",
  description: "Helping individuals, families, and businesses secure the right financing with expert guidance on Personal Loans, Home Loans, Business Loans, and smart investment solutions.",
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
