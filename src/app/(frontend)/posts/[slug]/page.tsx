import type { Metadata } from 'next'
import Link from 'next/link'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import { formatAuthors } from '@/utilities/formatAuthors'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
      collection: 'posts',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    })

    const params = posts.docs.map(({ slug }) => {
      return { slug }
    })

    return params
  } catch (error) {
    console.warn('Database connection failed during posts [slug] generateStaticParams, skipping.')
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  const authorName = (post.populatedAuthors ? formatAuthors(post.populatedAuthors) : null) || 'SSL Fintech Editorial Team'
  const postDate = post.publishedAt || post.createdAt
  const modDate = post.updatedAt || postDate

  return (
    <article className="pt-8 pb-16">
      <PageClient />

      {/* JSON-LD BlogPosting and BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.meta?.description || `Read about ${post.title} from SSL Fintech.`,
              url: `https://www.sslfintech.org/posts/${decodedSlug}`,
              datePublished: postDate,
              dateModified: modDate,
              author: {
                '@type': 'Person',
                name: authorName,
              },
              publisher: {
                '@type': 'Organization',
                name: 'SSL Fintech Private Limited',
                url: 'https://www.sslfintech.org',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.sslfintech.org/assets/logo.png',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.sslfintech.org/posts/${decodedSlug}`,
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.sslfintech.org',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://www.sslfintech.org/posts',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: post.title,
                  item: `https://www.sslfintech.org/posts/${decodedSlug}`,
                },
              ],
            },
          ]),
        }}
      />

      {/* Breadcrumb UI */}
      <div className="container mb-6">
        <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
          <Link href="/" className="hover:underline">Home</Link> &gt;{' '}
          <Link href="/posts" className="hover:underline">Blog</Link> &gt;{' '}
          <span className="text-gray-500 normal-case line-clamp-1 inline">{post.title}</span>
        </div>
      </div>

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-8 pt-8">
        <div className="container max-w-[52rem]">
          <RichText className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} />

          {/* Internal Linking & Conversion Box */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#014865] to-[#00354b] text-white space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00d2de]">Need Financing in Bengaluru?</span>
            <h3 className="font-['DM_Serif_Display'] text-2xl md:text-3xl">Get Customized Loan Offers from Top Banks &amp; NBFCs</h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              SSL Fintech helps salaried professionals and business owners secure personal loans starting at competitive interest rates with zero consultation charges.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#00acb7] hover:bg-[#00d2de] text-white font-semibold text-sm transition-colors shadow-md"
              >
                Apply for Loan
              </Link>
              <Link
                href="/loan-eligibility"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                Check Eligibility Criteria
              </Link>
              <Link
                href="/tools"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          )}
        </div>
      </div>
    </article>
  )
}


export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post, canonicalPath: `/posts/${decodedSlug}` })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'posts',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  } catch (error) {
    console.warn(`Database connection failed when querying post "${slug}"`)
    return null
  }
})
