import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/payload-types";

interface InsightsProps {
  posts?: Post[]
}

export default function Insights({ posts = [] }: InsightsProps) {
  // If no posts are fetched or present, collapse the entire section
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section id="insights" className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#00acb7] uppercase block mb-3">LATEST INSIGHTS</span>
            <h2 className="font-['DM_Serif_Display'] text-3xl md:text-5xl text-[#014865] leading-tight">
              Financial Insights & Market Updates
            </h2>
          </div>
          <Link href="/posts" className="text-sm font-bold text-[#00728a] hover:text-[#188c9c] hover:underline mt-4 md:mt-0 flex items-center gap-2">
            <span>View All Articles</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className={posts.length === 1 ? "flex justify-center" : "grid grid-cols-1 lg:grid-cols-2 gap-10"}>
          {posts.map((post) => {
            const { title, slug, heroImage, publishedAt, createdAt } = post
            const imageUrl = typeof heroImage === 'object' && heroImage?.url ? heroImage.url : '/assets/imgArticleImage.png'
            const imageAlt = typeof heroImage === 'object' && heroImage?.alt ? heroImage.alt : title

            const dateStr = publishedAt
              ? new Date(publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : new Date(createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })

            return (
              <Link
                key={post.id}
                href={`/posts/${slug}`}
                className={`group flex flex-col bg-gray-50 rounded-[28px] overflow-hidden shadow border border-gray-100 hover:shadow-xl transition-all duration-300 ${posts.length === 1 ? 'max-w-3xl w-full' : ''}`}
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={imageAlt}
                    sizes="(max-w-7xl) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-['DM_Serif_Display'] text-2xl md:text-[28px] text-gray-800 group-hover:text-[#00728a] transition-colors leading-tight mb-4 line-clamp-2">
                      {title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                    <span>{dateStr}</span>
                    <span>&bull;</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
