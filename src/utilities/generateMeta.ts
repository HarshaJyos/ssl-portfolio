import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/assets/og-image.png'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null
  canonicalPath?: string
}): Promise<Metadata> => {
  const { doc, canonicalPath } = args

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title
    ? doc?.meta?.title + ' | SSL Fintech'
    : 'SSL Fintech | Personal Loans & Mutual Funds Bengaluru'

  const resolvedCanonical = canonicalPath || (doc?.slug ? (doc.slug === 'home' ? '/' : `/${doc.slug}`) : '/')

  return {
    description: doc?.meta?.description || 'Leading loan aggregator and financial advisory in Bengaluru. Connecting customers with top Banks and NBFC partners for personal and business loans.',
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || 'Leading loan aggregator and financial advisory in Bengaluru. Connecting customers with top Banks and NBFC partners for personal and business loans.',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: resolvedCanonical,
    }),
    title,
    alternates: {
      canonical: resolvedCanonical,
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
