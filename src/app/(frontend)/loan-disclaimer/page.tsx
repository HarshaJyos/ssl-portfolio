import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Loan Disclaimer | SSL Fintech',
  description: 'Compliance disclosure clarifying that SSL Solutions is a referral aggregator / DSA facilitator, not a direct lender.',
}

export default function LoanDisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Disclaimer
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            Loan Disclaimer
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Important regulatory disclosures regarding our referral aggregator model.
          </p>
        </section>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-6 text-sm text-gray-600 leading-relaxed">
          
          <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865] mb-4">Compliance Disclosures</h2>
          
          <p>
            Please note and read the following disclaimer regarding the services, operations, and information provided by **SSL Solutions** (doing business as **SSL Fintech**):
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">1. Non-Lender Status</h3>
          <p>
            SSL Solutions is a Direct Sales Agent (DSA) / aggregator referral business. We are NOT a bank, a registered Non-Banking Financial Company (NBFC), a microfinance institution, or a direct lender. We do not provide loans, extend lines of credit, or offer financing directly to individuals or businesses.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">2. Third-Party Credit Approvals</h3>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-800">
            <strong>Credit Disclaimer:</strong> All credit evaluations, interest rates, processing fees, terms of sanction, and final loan approvals are decided solely by the credit committees and underwriting teams of our partner Banks and NBFCs. SSL Solutions makes no guarantees regarding loan approvals, rate options, or disbursal timelines.
          </div>

          <h3 className="font-bold text-base text-[#014865] mt-6">3. Rates & Administrative Charges</h3>
          <p>
            Interest rates (starting from 9.99% up to 26% per annum) and administrative processing fees (ranging from ₹4,000 to 1.5% of the loan amount) listed on this website are illustrative parameters representing current market rates offered by partner lenders. Actual rates and fees depend on the applicant\'s credit rating, business profile, income level, and final terms of sanction from the lender.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">4. Financial Advisory Warning</h3>
          <p>
            The content provided on this website is for informational and referral purposes only and does not constitute financial, investment, legal, or tax advice. Applicants are advised to review loan agreements, terms of sanction, and amortization schedules carefully with their financial advisor before executing any binding contracts with partner banks or NBFCs.
          </p>

        </div>

      </div>
    </main>
  )
}
