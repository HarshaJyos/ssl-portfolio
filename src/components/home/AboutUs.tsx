"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, Eye, User, Play } from "lucide-react";

export default function AboutUs() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="why-us" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#dedede] rounded-[45px] overflow-hidden p-8 md:p-16 flex flex-col xl:flex-row gap-12 items-stretch shadow-md relative">

        {/* Left Column: Vision/Mission/Values */}
        <div className="w-full xl:w-[55%] flex flex-col justify-between relative z-10">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#014865] uppercase block mb-2">ABOUT SSL FINTECH</span>
            <h2 className="font-['DM_Serif_Display'] text-3xl md:text-5xl text-[#188c9c] leading-tight mb-6">
              Helping You Find the Right Financial Solution
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              We help individuals and businesses secure the right loan with transparent guidance while also offering investment and wealth planning services to support their long-term financial goals.
            </p>
          </div>

          <div className="space-y-6">

            {/* Mission */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#00acb7] rounded-full text-white">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['DM_Serif_Display'] text-xl text-[#014865] mb-1">Our Mission</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To simplify access to the right loan solutions while providing trusted financial guidance that helps individuals, families, and businesses achieve lasting financial security.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#00acb7] rounded-full text-white">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['DM_Serif_Display'] text-xl text-[#014865] mb-1">Our Vision</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the most trusted financial partner for loan services, while supporting every stage of our clients&apos; financial journey through smart investment and wealth solutions.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#00acb7] rounded-full text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['DM_Serif_Display'] text-xl text-[#014865] mb-1">Our Values</h4>
                <p className="text-gray-800 font-medium text-sm leading-relaxed">
                  Trust &bull; Transparency &bull; Client First &bull; Excellence
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: White Card with Founder details & Media player */}
        <div className="w-full xl:w-[45%] flex items-center justify-center relative">

          {/* Overlapping background teal circles behind card */}
          <div className="absolute left-[-20px] bottom-[-20px] w-48 h-48 bg-[#00acb7] rounded-full pointer-events-none z-0"></div>
          <div className="absolute right-[-45px] top-[15%] w-60 h-60 bg-[#00acb7] rounded-full pointer-events-none z-0"></div>

          {/* White Card */}
          <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-lg relative z-10 flex flex-col justify-between">

            {/* Dashed outer border */}
            <div className="absolute inset-4 border border-black/10 border-dashed rounded-2xl pointer-events-none"></div>

            {/* Video container */}
            <div className="relative aspect-video w-full rounded-2xl border border-gray-200 flex items-center justify-center bg-black cursor-pointer group mb-6 overflow-hidden z-10">
              {isVideoPlaying ? (
                <video
                  className="w-full h-full object-contain"
                  src="https://pub-2f0315f512294496ab0e8d3f17562fa5.r2.dev/sslfintech_HomeAbout_UsOfferin.mp4"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : (
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-16 h-16 bg-[#00acb7] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-current ml-1 text-white" />
                </button>
              )}
            </div>

            {/* Founder Description */}
            <div className="flex items-center gap-4 relative z-10 px-2">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/assets/founder.png"
                  alt="Raja Mylaravarapu"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">MEET OUR FOUNDER</span>
                <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865] leading-tight">
                  Raja Mylaravarapu
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  20+ years of experience in financial services
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
