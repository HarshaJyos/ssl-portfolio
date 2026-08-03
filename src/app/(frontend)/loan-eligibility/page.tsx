import React from 'react'
import Link from 'next/link'
import { Coins, BarChart2, CreditCard } from 'lucide-react'

export const metadata = {
  title: 'Loan Eligibility Criteria | SSL Fintech',
  description: 'Understand the parameters and criteria required by banks and NBFC partners to qualify for personal and business loans.',
}

export default function LoanEligibilityPage() {
  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Loan Eligibility
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            Loan Eligibility
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Review the baseline parameters requested by our partner Banks and NBFCs.
          </p>
        </section>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865]">Core Parameters</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lending criteria are determined solely by the credit policies of our respective banking and NBFC partners. However, below are the standard baseline criteria commonly required for assessment:
            </p>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-start">
              <span className="text-2xl text-[#00acb7] mb-2"><Coins className="w-8 h-8" /></span>
              <h3 className="font-bold text-sm text-[#014865] mt-2 mb-1">Minimum Income</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Minimum monthly salary of ₹25,000 is required for salaried applicants.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-start">
              <span className="text-2xl text-[#00acb7] mb-2"><BarChart2 className="w-8 h-8" /></span>
              <h3 className="font-bold text-sm text-[#014865] mt-2 mb-1">FOIR Limit</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Fixed Obligation to Income Ratio (FOIR) up to 75% depending on lender checks.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-start">
              <span className="text-2xl text-[#00acb7] mb-2"><CreditCard className="w-8 h-8" /></span>
              <h3 className="font-bold text-sm text-[#014865] mt-2 mb-1">Lending Ranges</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Unsecured personal/business loans starting from ₹1 Lakh up to ₹1 Crore.</p>
            </div>
          </div>

          {/* Section details */}
          <div className="space-y-6 pt-4 text-sm text-gray-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[#014865]">1. Salaried Individuals Criteria</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm">
                <li>Minimum Age: 21 Years (at time of application).</li>
                <li>Employment Status: Salaried employee at a private, public, or government enterprise.</li>
                <li>Work Experience: Minimum 1 year in employment with at least 6 months at the current employer.</li>
                <li>Credit Score: A CIBIL score of 700+ is generally preferred for competitive interest rates.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-base text-[#014865]">2. Self-Employed Individuals / Businesses</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm">
                <li>Minimum Age: 25 Years (at time of application).</li>
                <li>Business Vintage: Minimum 3 years of active operation with audited financials.</li>
                <li>Lending Limit (Secured): No limit, completely dependent on evaluated property values.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
