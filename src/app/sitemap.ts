import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    'https://www.sslfintech.org'

  const dateFallback = new Date()

  // Fetch dynamic pages from Payload CMS
  let pages: any[] = []
  try {
    const payload = await getPayload({ config })
    const results = await payload.find({
      collection: 'pages',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })
    pages = results.docs || []
  } catch (e) {
    console.error('Error fetching sitemap pages', e)
  }

  // Fetch dynamic posts from Payload CMS
  let posts: any[] = []
  try {
    const payload = await getPayload({ config })
    const results = await payload.find({
      collection: 'posts',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })
    posts = results.docs || []
  } catch (e) {
    console.error('Error fetching sitemap posts', e)
  }

  // Core static pages
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/offerings',
    '/tools',
    '/how-it-works',
    '/loan-eligibility',
    '/privacy-policy',
    '/terms-and-conditions',
    '/loan-disclaimer',
    '/cookie-policy',
    '/grievance-complaints',
    '/search',
    '/posts',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: dateFallback,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const pageEntries = pages
    .filter((page) => page?.slug && page?.slug !== 'home')
    .map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: page.updatedAt ? new Date(page.updatedAt) : dateFallback,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  const postEntries = posts
    .filter((post) => post?.slug)
    .map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : dateFallback,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  return [...staticEntries, ...pageEntries, ...postEntries]
}
