import Image from "next/image";

export default function Insights() {
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
          <a href="#" className="text-sm font-bold text-[#00728a] hover:text-[#188c9c] hover:underline mt-4 md:mt-0 flex items-center gap-2">
            <span>View All Articles</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Article 1 */}
          <div className="group flex flex-col bg-gray-50 rounded-[28px] overflow-hidden shadow border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
              <Image 
                src="/assets/imgArticleImage1.png" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Health Insurance" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-['DM_Serif_Display'] text-2xl md:text-[28px] text-gray-800 group-hover:text-[#00728a] transition-colors leading-tight mb-4">
                  Health Insurance vs Reinvesting Itself<br />From Illness to Wellness
                </h3>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                <span>June 26, 2025</span>
                <span>&bull;</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group flex flex-col bg-gray-50 rounded-[28px] overflow-hidden shadow border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
              <Image 
                src="/assets/imgArticleImage.png" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Child College Savings" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-['DM_Serif_Display'] text-2xl md:text-[28px] text-gray-800 group-hover:text-[#00728a] transition-colors leading-tight mb-4">
                  Your Child&apos;s Dream College<br />Will Cost – How Much?
                </h3>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                <span>June 29, 2025</span>
                <span>&bull;</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
