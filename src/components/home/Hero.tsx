"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface HeroProps {
  onApply: () => void;
}

export default function Hero({ onApply }: HeroProps) {
  return (
    <section id="home" className="relative z-10 px-4 pt-12 pb-0 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 min-h-[500px]">

        {/* Left Column: Hero Text & Badges */}
        <div className="w-full lg:w-[65%] xl:w-[60%] flex flex-col text-left pb-16">

          {/* Title */}
          <h1 className="font-['DM_Serif_Display'] text-4xl md:text-6xl lg:text-[72px] leading-tight text-white font-normal mb-6 max-w-3xl">
            Personal Loans Made Simple.<br className="hidden md:inline" />
            Fast, Simple &amp; Trusted.
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-[#014865]/90 font-semibold leading-relaxed mb-8 max-w-2xl">
            Helping individuals, families and businesses secure the right financing with expert guidance on Personal Loans, Home Loans, Business Loans, Vehicle Loans and smart investment solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={onApply}
              className="bg-[#014865] hover:bg-[#152644] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:scale-105 group"
            >
              <span>Apply for a Loan</span>
              <span className="w-8 h-8 rounded-full bg-white text-[#014865] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4 text-[#014865]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <a
              href="#services"
              className="border-2 border-[#014865] text-[#014865] hover:bg-[#014865]/5 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300"
            >
              <span>Explore Financial Services</span>
              <span className="w-8 h-8 rounded-full bg-[#014865]/10 text-[#014865] flex items-center justify-center">
                <Play className="w-4 h-4 fill-[#014865] text-[#014865] ml-1" />
              </span>
            </a>
          </div>

          {/* AMFI / SEBI Registered Badges */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-[#014865]/20 text-[#014865]">
            {/* AMFI */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/imgHeaderLogoImage.png"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                alt="AMFI Logo"
              />
              <div>
                <h4 className="font-['DM_Serif_Display'] text-base font-semibold leading-tight text-[#014865]">AMFI Registered</h4>
                <p className="text-xs text-[#014865]/70">Mutual Fund Distributor</p>
              </div>
            </div>
            {/* SEBI */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/imgHeaderBadgeImage.png"
                width={40}
                height={32}
                className="w-10 h-8 object-contain"
                alt="SEBI Logo"
              />
              <div>
                <h4 className="font-['DM_Serif_Display'] text-base font-semibold leading-tight text-[#014865]">SEBI Registered</h4>
                <p className="text-xs text-[#014865]/70">Investment Advisor</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Image with Soft Circle backdrop (Hidden on small screens) */}
        <div className="hidden lg:flex lg:w-[35%] xl:w-[40%] relative items-end justify-center self-end pointer-events-none">
          {/* Blue Circle Backdrop */}
          <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[75%] bg-[#b2ebed]/30 rounded-full filter blur-xl pointer-events-none z-0"></div>

          <div className="relative w-full max-w-[420px] aspect-[4/5] z-10 -mb-px flex items-end">
            <Image
              src="/assets/imgSsl2.png"
              width={420}
              height={525}
              style={{ height: "auto" }}
              className="w-full object-contain object-bottom"
              alt="Personal Loans Made Simple"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
