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
                "@type": "WebSite",
                "name": "SSL Fintech",
                "alternateName": "SSL Fintech Private Limited",
                "url": "https://www.sslfintech.org"
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
  title: {
    default: 'SSL Fintech | Personal Loans & Mutual Funds Bengaluru',
    template: '%s | SSL Fintech',
  },
  description: 'Leading loan aggregator and financial broker (DSA) in Bengaluru. Connecting customers with top Banks and NBFC partners for personal loans, business loans, and wealth solutions.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@sslfintech',
    site: '@sslfintech',
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
