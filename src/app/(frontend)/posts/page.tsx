import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  let posts;
  try {
    const payload = await getPayload({ config: configPromise })
    posts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit: 12,
      overrideAccess: false,
      select: {
        title: true,
        slug: true,
        categories: true,
        meta: true,
      },
    })
  } catch (error) {
    console.warn('Database connection failed during posts query, fallback to empty list.')
    posts = {
      docs: [],
      page: 1,
      totalDocs: 0,
      totalPages: 1,
    }
  }

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      
      {/* Breadcrumb Schema */}
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
                "name": "Blog & Guides",
                "item": "https://www.sslfintech.org/posts"
              }
            ]
          })
        }}
      />

      <div className="container mb-12">
        <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase mb-4">
          <Link href="/" className="hover:underline">Home</Link> &gt; Blog &amp; Insights
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#014865] mb-4">
            Financial Insights &amp; Guides
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
            Stay informed with expert guidance on personal loans, interest rate comparisons, banking eligibility criteria, and wealth management strategies in Bengaluru.
          </p>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  const title = 'Fintech Blog & Loan Guides | SSL Fintech'
  const description = 'Expert financial advice, credit insights, and personal loan guides in Bengaluru from SSL Fintech.'

  return {
    title,
    description,
    alternates: {
      canonical: '/posts',
    },
    openGraph: mergeOpenGraph({
      title,
      description,
      url: '/posts',
    }),
    twitter: {
      card: 'summary_large_image',
      creator: '@sslfintech',
      site: '@sslfintech',
      title,
      description,
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
}

