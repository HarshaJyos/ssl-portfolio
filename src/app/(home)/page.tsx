import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HomeClient from "@/components/home/HomeClient";

export const revalidate = 60 // Revalidate cache every 60 seconds

export default async function Home() {
  let posts: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'posts',
      limit: 2,
      sort: '-createdAt',
      overrideAccess: false,
    })
    posts = result.docs || []
  } catch (error) {
    console.warn('Failed to fetch home page blogs dynamically, fallback to empty list.', error)
  }

  return <HomeClient initialPosts={posts} />
}
