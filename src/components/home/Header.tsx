"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 pt-8 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="bg-white rounded-full px-6 py-4 flex items-center justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 max-w-5xl mx-auto">

        {/* Logo - Png Image and Text Name beside it */}
        <div className="flex items-center gap-3">
          <Image 
            src="/assets/logo.png" 
            width={36} 
            height={36} 
            className="h-9 w-auto object-contain" 
            alt="SSL Fintech Icon" 
            priority
          />
          <span className="font-['Manrope'] font-extrabold text-2xl text-[#014865] tracking-wider uppercase">
            sslfintech
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold text-[#014865]">
          <a href="#home" className="hover:text-[#00acb7] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#00acb7] transition-colors">Us Services</a>
          <a href="#why-us" className="hover:text-[#00acb7] transition-colors">Why SSL Fintech</a>
          <a href="#insights" className="hover:text-[#00acb7] transition-colors">Insights</a>
          <a href="#contact" className="hover:text-[#00acb7] transition-colors">Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#014865] hover:text-[#00acb7] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-3xl p-6 shadow-xl flex flex-col gap-4 border border-gray-100 relative z-50">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium text-[#014865] hover:text-[#00acb7] border-b border-gray-100">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium text-[#014865] hover:text-[#00acb7] border-b border-gray-100">Us Services</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium text-[#014865] hover:text-[#00acb7] border-b border-gray-100">Why SSL Fintech</a>
          <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium text-[#014865] hover:text-[#00acb7] border-b border-gray-100">Insights</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium text-[#014865] hover:text-[#00acb7] border-b border-gray-100">Contact</a>
        </div>
      )}
    </header>
  );
}
