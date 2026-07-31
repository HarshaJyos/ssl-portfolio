"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "SSL Fintech made my personal loan process quick & hassle-free. They explained every step & helped me get the best option.",
    name: "Rachana C.",
    location: "Bangalore",
    image: "/assets/imgEllipse32.png"
  },
  {
    quote: "I was looking for Home loan and SSL Fintech helped me to find the best interest rate. The entire process was smooth and transparent.",
    name: "Sushil B.",
    location: "Bangalore",
    image: "/assets/imgEllipse33.png"
  },
  {
    quote: "Their guidance helped us secure a business loan much faster than expected.",
    name: "Johnson M.",
    location: "Bangalore",
    image: "/assets/imgEllipse34.png"
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  // Auto-scrolling timer for testimonials carousel
  useEffect(() => {
    if (isTestimonialPaused) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500); // Change slide every 4.5 seconds
    return () => clearInterval(timer);
  }, [isTestimonialPaused]);

  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#dedede] rounded-[45px] p-8 md:p-16 relative shadow-md">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-[#014865] uppercase block mb-3">CLIENT SUCCESS STORIES</span>
          <h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#014865] leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel Row */}
        <div 
          onMouseEnter={() => setIsTestimonialPaused(true)}
          onMouseLeave={() => setIsTestimonialPaused(false)}
          className="relative w-full max-w-6xl mx-auto flex items-center px-6 lg:px-12 z-10"
        >
          
          {/* Prev Triangle Arrow Button */}
          <button
            onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 text-[#00acb7] hover:text-[#014865] transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M14 7l-5 5 5 5V7z" />
            </svg>
          </button>

          {/* Carousel Cards Track Wrapper */}
          <div className="w-full relative h-[290px] sm:h-[250px] lg:h-[240px] overflow-hidden">
            {testimonials.map((t, index) => {
              const isCenter = index === activeTestimonial;
              const isLeft = index === ((activeTestimonial - 1 + testimonials.length) % testimonials.length);
              const isRight = index === ((activeTestimonial + 1) % testimonials.length);

              let cardClass = "absolute left-1/2 transition-all duration-500 ease-in-out pointer-events-none opacity-0 scale-75";
              
              if (isCenter) {
                cardClass = "absolute left-1/2 -translate-x-1/2 z-20 scale-100 lg:scale-105 opacity-100 shadow-[0px_12px_24px_rgba(0,0,0,0.06)] bg-white rounded-[32px] p-6 sm:p-8 flex flex-col justify-between w-full max-w-[90%] sm:max-w-[450px] md:max-w-[480px] lg:max-w-[440px] h-full border border-gray-100 transition-all duration-500 ease-in-out pointer-events-auto";
              } else if (isLeft) {
                cardClass = "absolute left-1/2 -translate-x-[165%] z-10 scale-90 opacity-40 bg-white/90 rounded-[24px] p-6 w-full max-w-[280px] xl:max-w-[320px] h-[90%] border border-black/5 transition-all duration-500 ease-in-out hidden lg:flex flex-col justify-between pointer-events-none";
              } else if (isRight) {
                cardClass = "absolute left-1/2 translate-x-[65%] z-10 scale-90 opacity-40 bg-white/90 rounded-[24px] p-6 w-full max-w-[280px] xl:max-w-[320px] h-[90%] border border-black/5 transition-all duration-500 ease-in-out hidden lg:flex flex-col justify-between pointer-events-none";
              }

              return (
                <div key={index} className={cardClass}>
                  <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed font-normal mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Image
                      src={t.image}
                      width={48}
                      height={48}
                      className={`rounded-full object-cover shadow-sm flex-shrink-0 transition-all duration-500 ${
                        isCenter ? "w-12 h-12 border-2 border-[#00acb7]" : "w-9 h-9 border border-gray-200"
                      }`}
                      alt={t.name}
                    />
                    <div>
                      <h4 className={`font-bold text-[#014865] leading-tight transition-all duration-500 ${isCenter ? "text-lg" : "text-sm"}`}>
                        {t.name}
                      </h4>
                      <p className={`text-gray-500 font-semibold transition-all duration-500 ${isCenter ? "text-xs mt-0.5" : "text-[10px]"}`}>
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Triangle Arrow Button */}
          <button
            onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 text-[#00acb7] hover:text-[#014865] transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-3 justify-center mt-10 z-10 relative">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? "bg-[#00728a] w-7"
                  : "bg-[#00728a]/30 hover:bg-[#00728a]/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
