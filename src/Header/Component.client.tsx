'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import { CMSLink } from '@/components/Link'

interface HeaderClientProps {
  data: Header
  isHome?: boolean
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, isHome = false }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    setMobileMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const navItems = data?.navItems || [
    { link: { type: 'custom', url: '/', label: 'Home' } },
    { link: { type: 'custom', url: '/about', label: 'About Us' } },
    { link: { type: 'custom', url: '/offerings', label: 'Offerings' } },
    { link: { type: 'custom', url: '/tools', label: 'Tools' } },
    { link: { type: 'custom', url: '/contact', label: 'Contact Us' } },
  ]



  return (
    <header 
      className={`${isHome ? 'absolute top-0 left-0 right-0' : 'relative'} z-50 pt-8 px-4 md:px-12 max-w-7xl mx-auto w-full`} 
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="bg-white rounded-full px-6 py-4 flex items-center justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 max-w-5xl mx-auto w-full">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold text-[#014865]">
          {navItems.map((item, i) => {
            if (!item || !item.link) return null
            return (
              <CMSLink
                key={i}
                {...item.link}
                appearance="link"
                className="hover:text-[#00acb7] transition-colors text-[#014865]"
              />
            )
          })}
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
          {navItems.map((item, i) => {
            if (!item || !item.link) return null
            return (
              <CMSLink
                key={i}
                {...item.link}
                appearance="link"
                className="py-2 text-lg font-medium text-[#014865] hover:text-[#00acb7] border-b border-gray-100 block"
              />
            )
          })}
        </div>
      )}
    </header>
  )
}
