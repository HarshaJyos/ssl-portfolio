import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = 'https://www.sslfintech.org'
  const dateFallback = new Date()

  // Fetch dynamic pages from Payload CMS (if any custom pages exist)
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
        publishedAt: true,
      },
    })
    posts = results.docs || []
  } catch (e) {
    console.error('Error fetching sitemap posts', e)
  }

  // Fallback posts if database query was empty or disconnected
  if (posts.length === 0) {
    posts = [
      {
        slug: 'personal-loans-in-bengaluru-complete-2026-guide',
        updatedAt: '2026-08-03T16:08:02.679Z',
      },
      {
        slug: 'personal-loan-eligibility-for-salaried-employees-in-bengaluru--minimum-salary--documents',
        updatedAt: '2026-08-10T12:00:00.000Z',
      },
      {
        slug: 'best-personal-loan-interest-rates-in-bangalore-2026--bank-vs-nbfc-comparison',
        updatedAt: '2026-08-15T12:00:00.000Z',
      },
    ]
  }

  // High-value Core static pages - Excluded /search to adhere to Google search quality guidelines
  const staticRoutes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/offerings', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/loan-eligibility', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/how-it-works', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/tools', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/posts', priority: 0.8, changeFrequency: 'daily' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/terms-and-conditions', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/loan-disclaimer', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/cookie-policy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/grievance-complaints', priority: 0.5, changeFrequency: 'yearly' },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: dateFallback,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const EXCLUDED_SLUGS = ['home', 'calculators', 'about', 'offerings', 'client-service', 'tools', 'login', 'contact', 'resources', 'search']

  const pageEntries: MetadataRoute.Sitemap = pages
    .filter((page) => page?.slug && !EXCLUDED_SLUGS.includes(page.slug))
    .map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: page.updatedAt ? new Date(page.updatedAt) : dateFallback,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  const postEntries: MetadataRoute.Sitemap = posts
    .filter((post) => post?.slug)
    .map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : (post.publishedAt ? new Date(post.publishedAt) : dateFallback),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  return [...staticEntries, ...pageEntries, ...postEntries]
}

