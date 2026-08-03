import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | SSL Fintech',
  description: 'Incorporated in 2018, SSL Fintech is a partner of NJ Wealth, committed to helping clients fulfill their financial goals with smart investment assessments.',
}

export default function AboutPage() {
  const stats = [
    { label: 'Happy Clients', value: '6,000+' },
    { label: 'Years of Experience', value: '20+' },
    { label: 'Awards Won', value: '10+' },
  ]

  const values = [
    { title: 'Client Centric Approach', desc: 'Our services are tailored entirely around our clients\' unique needs and risk profiles.' },
    { title: 'Rich Product Basket', desc: 'A comprehensive suite of mutual funds, insurance, NPS, PMS, and loan products.' },
    { title: 'Focus on Customer Satisfaction', desc: 'Dedicated client support ensuring simple, worry-free execution at every step.' },
    { title: 'Value Added Services', desc: 'Continuous monitoring, portfolio rebalancing, and expert advisory support.' },
    { title: 'Right Experience & Skills', desc: 'Over 20+ years of expertise in tax laws, insurance, and wealth distribution.' },
    { title: 'Driven by Passion', desc: 'We are passionate about helping you achieve financial security and a peaceful retirement.' },
  ]

  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Hero Section & Breadcrumbs */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; About Us
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#014865]">
            About SSL Fintech
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Partnering with NJ Wealth to deliver fast-track financial options, robust wealth creation, and retirement security.
          </p>
        </section>

        {/* Our Story Block (Combined Top and Bottom) */}
        <section className="shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 rounded-[40px] overflow-hidden bg-white">
          {/* Top Story Panel (White) */}
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-6">
              <div className="text-sm font-semibold text-[#00acb7] uppercase tracking-wider">
                OUR STORY
              </div>
              <h2 className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-[#014865]">
                Helping Clients Prosper Since 2018
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Incorporated in 2018, SSL Fintech operates as a proud partner of <strong className="font-bold">NJ Wealth</strong>. Over the years, we have grown to support more than <strong className="font-bold">6,000+ satisfied clients</strong> across India in securing their financial future.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to helping our clients fulfill their short-term and long-term financial needs with highly customized, smart investment assessments.
                  </p>
                </div>
                <div className="space-y-4 bg-[#f6f3f3]/50 p-6 rounded-2xl border border-gray-100">
                  <p className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#00acb7] font-bold shrink-0">•</span>
                    <span><strong>Accreditation:</strong> We are a certified Mutual Fund and Insurance distributor recognized by the NSE (National Stock Exchange) and AMFI (Association of Mutual Funds of India).</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#00acb7] font-bold shrink-0">•</span>
                    <span><strong>Expertise:</strong> Our advisory partners leverage specialized knowledge in mutual fund distribution, general insurance, tax planning laws, and credit facilities.</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#00acb7] font-bold shrink-0">•</span>
                    <span><strong>Core Purpose:</strong> To provide fast-track loan approvals, optimize investment portfolios, and guide our clients toward a worry-free retirement life.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Stats Banner (Teal) */}
          <div className="bg-gradient-to-r from-[#00acb7] to-[#00728a] p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              {stats.map((stat, idx) => (
                <div key={idx} className="pt-6 md:pt-0 md:px-6 first:pt-0 first:pl-0">
                  <div className="font-['Manrope'] font-extrabold text-4xl md:text-5xl mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values Tabs / Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-[0px_6px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00acb7]/10 flex items-center justify-center text-[#00acb7]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide the most ideal wealth building solutions that optimize our clients&apos; overall financial well-being and security.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0px_6px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00acb7]/10 flex items-center justify-center text-[#00acb7]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To reach a maximum number of families and deliver simple, unbiased, and uncluttered guidance that results in actionable, worthwhile wealth planning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0px_6px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00acb7]/10 flex items-center justify-center text-[#00acb7]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built on integrity, transparency, value-creation, and prioritizing client needs over products in every single transaction.
            </p>
          </div>
        </section>

        {/* Founder Bio Card */}
        <section className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[#00acb7] text-sm font-semibold tracking-wider uppercase">LEADERSHIP</span>
            <h2 className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-[#014865]">Meet Our Founder</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg shrink-0 relative">
              <Image
                src="/assets/founder.png"
                alt="Raja Mylaravarapu"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">Raja Mylaravarapu</h3>
              <p className="text-[#00acb7] font-semibold text-sm">ARN-302874 (AMFI-Registered Mutual Fund Distributor)</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                With <strong className="font-bold">over 20+ years of active experience</strong> in financial markets, Raja has guided thousands of families through loan acquisitions, retirement allocations, and tax-efficient investments. He leads SSL Fintech on the principles of values-driven client care and unbiased counseling.
              </p>
              <p className="text-gray-500 italic text-xs">
                Initial Registration: 01/08/2024 • Validity until: 24/07/2027
              </p>
            </div>
          </div>
        </section>

        {/* Why Us / Strengths Grid */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-[#014865]">
              Why Choose SSL Fintech?
            </h2>
            <p className="text-gray-600 max-w-md mx-auto text-sm">
              We leverage strong tools and a structured process to support your overall well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#00acb7]/30 transition-all hover:shadow-[0px_8px_30px_rgba(0,0,0,0.04)] space-y-3">
                <h4 className="font-semibold text-lg text-[#014865]">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
