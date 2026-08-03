"use client";

import Image from "next/image";

const offerings = [
  {
    title: "Mutual Funds",
    desc: "Grow your wealth with smart investments.",
    image: "/assets/imgServiceImage3.png"
  },
  {
    title: "Insurance",
    desc: "Protect your family and your future.",
    image: "/assets/imgServiceImage.png"
  },
  {
    title: "Retirement Planning",
    desc: "Plan today for a stress-free retirement.",
    image: "/assets/imgServiceImage1.png"
  },
  {
    title: "Loans",
    desc: "Achieve your dreams with the right financing.",
    image: "/assets/imgCategoryImage.png"
  },
  {
    title: "Portfolio Management",
    desc: "For Better returns.",
    image: "/assets/imgServiceImage2.png"
  }
];

interface OfferingsProps {
  onApply: () => void;
}

export default function Offerings({ onApply }: OfferingsProps) {
  return (
    <section className="py-20 px-4 md:px-12 bg-white relative overflow-hidden">

      {/* Soft decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#b2ebed]/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-[#014865] uppercase block mb-3">FEATURED OFFERINGS</span>
          <h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#014865] leading-tight">
            Plans to Build Your Wealth<br />and Secure Your Future
          </h2>
        </div>

        {/* Offerings layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-end p-6 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 min-h-[450px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={offering.image} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={offering.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#014865] via-[#014865]/40 to-transparent opacity-90"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-white flex flex-col gap-2">
                <h3 className="font-['DM_Serif_Display'] text-2xl leading-tight">
                  {offering.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {offering.desc}
                </p>

                {/* Interactive details button inside card */}
                <button
                  onClick={onApply}
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#a7f3f0] hover:underline"
                >
                  <span>Get Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
