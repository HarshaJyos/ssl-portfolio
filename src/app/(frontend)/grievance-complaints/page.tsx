import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Grievance & Complaints | SSL Fintech',
  description: 'Understand the dispute escalation and grievance channels for SSL Solutions and our lending partners.',
}

export default function GrievanceComplaintsPage() {
  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Grievance & Complaints
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            Grievance Redressal
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            We are dedicated to resolving customer concerns with speed and transparency.
          </p>
        </section>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-6 text-sm text-gray-600 leading-relaxed">
          
          <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865] mb-4">Grievance & Dispute Channels</h2>
          
          <p>
            At **SSL Solutions** (operating as **SSL Fintech**), customer satisfaction is our core value. If you have any complaints, feedback, or grievances regarding our loan referral process or staff behavior, please utilize the redressal mechanism below:
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">1. First Level Escalation (SSL Fintech)</h3>
          <p>
            You can direct any initial concerns regarding form submissions, document verification assistance, or consultant interactions to our official support representatives:
          </p>
          <ul className="list-none pl-0 space-y-1 text-xs">
            <li><strong>Email Support:</strong> support@sslfintech.org</li>
            <li><strong>Customer Helpline:</strong> +91 90256 65100</li>
            <li><strong>Mailing Address:</strong> Grievance Cell, SSL Solutions, 295 SRR Layout, Ajagondanahalli, Bangalore 560087</li>
          </ul>

          <h3 className="font-bold text-base text-[#014865] mt-6">2. Second Level Escalation (Lending Partners)</h3>
          <div className="bg-[#b2ebed]/20 p-4 rounded-xl border border-[#00acb7]/10 my-4 text-[#014865]/90">
            <strong>Lender Disputes:</strong> Since SSL Solutions is a referral aggregator (DSA) and not a credit provider, all grievances regarding loan disbursement delays, interest rate changes, collection behaviors, account balances, or EMI schedules must be registered directly with the respective sanctioning Bank or NBFC through their official customer redressal channels.
          </div>

          <h3 className="font-bold text-base text-[#014865] mt-6">3. Regulatory Ombudsman</h3>
          <p>
            If a dispute regarding your credit account remains unresolved or has not been addressed to your satisfaction by the lending Bank/NBFC within 30 days of submission, you have the right to appeal directly to the Banking Ombudsman appointed by the Reserve Bank of India (RBI).
          </p>

        </div>

      </div>
    </main>
  )
}
