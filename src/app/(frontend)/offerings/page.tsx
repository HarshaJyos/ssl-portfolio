import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Our Offerings | SSL Fintech',
  description: 'Explore our complete product basket including Mutual Funds, Equity & ETFs, NPS, PMS, Loans, and Insurance options tailored to your needs.',
}

export default function OfferingsPage() {
  const products = [
    {
      title: 'Mutual Funds',
      desc: 'A professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds provide economies of scale, professional fund management, and high diversification.',
    },
    {
      title: 'Equity and ETFs',
      desc: 'Participate directly in stock markets via company shares or spread risk using Exchange-Traded Funds (ETFs) designed to track indexes passively at lower costs.',
    },
    {
      title: 'National Pension System (NPS)',
      desc: 'A government-backed retirement savings scheme offering powerful tax advantages, market-linked growth options, and regular pension annuities.',
    },
    {
      title: 'Portfolio Management Services (PMS)',
      desc: 'A sophisticated wealth management offering bespoke portfolios managed by SEBI-registered professionals. Tailored for HNIs (minimum investment of Rs. 50 Lakh).',
    },
    {
      title: 'Loan against Mutual Funds',
      desc: 'Unlock immediate liquidity using your existing mutual fund units as collateral. Secure quick funding without disrupting your long-term compounding growth.',
    },
    {
      title: 'Insurance Solutions',
      desc: 'Secure your family\'s future with life, health, and general insurance policies that guarantee financial coverage in times of crisis or damage.',
    },
  ]

  const loans = [
    {
      title: 'Personal Loan',
      purpose: 'Instant funds for immediate personal expenditures with zero collateral.',
      benefit: 'Rate of Interest starting at 9.75%.',
    },
    {
      title: 'Business Loan',
      purpose: 'Strategic capital funding designed to scale working capacity and operations.',
      benefit: 'High eligibility thresholds calculated on business turn-over.',
    },
    {
      title: 'Home Loan',
      purpose: 'Long-term financing to purchase, build, or top-up your residential property.',
      benefit: 'Flexible repayment tenure extending up to 30 years.',
    },
    {
      title: 'Auto Loan',
      purpose: 'Quick asset financing to get your next personal or commercial vehicle.',
      benefit: 'Fast-track document processing and rapid approvals.',
    },
    {
      title: 'Mortgage Loan (LAP)',
      purpose: 'Unlock high-quantum capital by collateralizing your residential or commercial property.',
      benefit: 'Significantly lower interest rates compared to personal loans.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header section */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Offerings
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#014865]">
            Our Product Basket
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 text-lg leading-relaxed">
            SSL Fintech offers a comprehensive, single point of access to an array of robust wealth management and credit solutions.
          </p>
        </section>

        {/* Loan Offerings Grid */}
        <section id="loans" className="space-y-10">
          <div className="border-l-4 border-[#00acb7] pl-4">
            <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">Loan & Credit Services</h2>
            <p className="text-gray-500 text-sm">Flexible funding options with competitive interest rates.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loans.map((loan, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:border-[#00acb7]/20 transition-all">
                <div className="space-y-3">
                  <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">{loan.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-gray-700">Purpose:</strong> {loan.purpose}</p>
                </div>
                <div className="bg-[#f6f3f3] p-4 rounded-xl text-[#00728a] text-sm font-semibold">
                  Key Benefit: {loan.benefit}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Basket Grid */}
        <section id="wealth-investments" className="space-y-10">
          <div className="border-l-4 border-[#00acb7] pl-4">
            <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">Wealth & Investment Products</h2>
            <p className="text-gray-500 text-sm">Grow your capital and secure future retirement needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.06)] hover:border-[#00acb7]/20 transition-all">
                <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">{prod.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation Required Section */}
        <section className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">Documentation Required</h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">Keep these files ready for quick loan application approvals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#f6f3f3] p-8 rounded-3xl space-y-6 border border-gray-200">
              <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00acb7]"></span>
                Salaried Individuals
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> PAN Card Identification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> Aadhaar Card (Address Proof)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> Last 3 Months Salary Slips
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> Last 6 Months Salary Bank Statements
                </li>
              </ul>
            </div>

            <div className="bg-[#f6f3f3] p-8 rounded-3xl space-y-6 border border-gray-200">
              <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00acb7]"></span>
                Self-Employed Individuals
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> PAN Card Identification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> Aadhaar Card (Address Proof)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> 2-3 Years Income Tax Returns (ITR)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> Last 12 Months Bank Statements
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00acb7] font-bold">✔</span> Proof of Business (GST/Registration)
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
