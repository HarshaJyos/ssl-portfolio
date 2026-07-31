"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

interface CtaBannerProps {
  onApply: () => void;
}

export default function CtaBanner({ onApply }: CtaBannerProps) {
  return (
    <section id="contact" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-[#014865] via-[#005e71] to-[#00acb7] rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border-b-8 border-[#00acb7]/40">

        {/* Graphics background */}
        <div className="absolute left-[-50px] bottom-[-50px] w-64 h-64 opacity-25">
          <Image 
            src="/assets/imgSubtract1.svg" 
            width={256} 
            height={256} 
            className="w-full h-full object-contain rotate-45" 
            alt="" 
          />
        </div>

        {/* Left info */}
        <div className="w-full lg:w-[55%] text-white z-10">
          <h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl leading-tight mb-6">
            Get the Right<br />Personal Loan, Faster
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md">
            Secure the funds you need with quick approvals, competitive interest rates, and expert guidance every step of the way.
          </p>

          {/* Quick action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onApply}
              className="bg-white hover:bg-gray-100 text-[#00728a] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              <span>Apply for a Personal Loan</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              onClick={onApply}
              className="border-2 border-white/50 hover:border-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 hover:bg-white/5"
            >
              <span>Explore Loan Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right contacts */}
        <div className="w-full lg:w-[40%] bg-white/10 backdrop-blur-md border border-white/25 p-8 rounded-3xl text-white z-10 flex flex-col gap-6 w-full max-w-md shadow-lg">

          {/* Call */}
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-white">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase text-white/55 font-bold tracking-widest block">Call Us</span>
              <a href="tel:+919025665100" className="text-xl md:text-2xl font-semibold hover:text-[#a7f3f0] transition-colors">
                +91 90256 65100
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase text-white/55 font-bold tracking-widest block">Email Us</span>
              <a href="mailto:support@sslfintech.org" className="text-xl md:text-2xl font-semibold hover:text-[#a7f3f0] transition-colors">
                support@sslfintech.org
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
