import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | SSL Fintech',
  description: 'Learn how SSL Solutions handles, processes, and protects your confidential data under our strict 30-day retention policies.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Privacy Policy
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            Privacy Policy
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Your privacy and confidentiality are our highest priorities.
          </p>
        </section>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-6 text-sm text-gray-600 leading-relaxed">
          
          <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865] mb-4">Privacy & Data Handling</h2>
          <p>
            This Privacy Policy governs the manner in which **SSL Solutions** (doing business as **SSL Fintech**) collects, uses, maintains, and discloses information collected from users of the website.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">1. Customer Information We Collect</h3>
          <p>
            When you apply for a loan or make an inquiry through our platform, we collect confidential information required to assess eligibility. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Required Loan Amount and Loan Type</li>
          </ul>

          <h3 className="font-bold text-base text-[#014865] mt-6">2. Data Sharing and Lenders</h3>
          <p>
            SSL Solutions is a loan aggregator and facilitator (DSA), not a direct lender. To process your loan inquiry, we share your submitted details with our verified partner Banks and NBFCs over secure, official channels (such as authenticated email or encrypted communication networks). We do not sell or rent your personal information to third-party marketing companies.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">3. Data Retention and 30-Day Auto-Deletion</h3>
          <div className="bg-[#b2ebed]/20 p-4 rounded-xl border border-[#00acb7]/10 my-4">
            <p className="font-semibold text-[#014865] text-xs uppercase mb-1">Confidentiality Guarantee</p>
            <p className="text-[#014865]/80 text-xs">
              To guarantee maximum security, we enforce a strict data deletion policy. All sensitive user inquiry details, documents, and contact information collected through our web forms are permanently deleted from our temporary storage databases exactly 30 days after submission.
            </p>
          </div>

          <h3 className="font-bold text-base text-[#014865] mt-6">4. Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, your data handling, or wish to request immediate deletion of your details before the 30-day window, you can contact our representative at:
          </p>
          <ul className="list-none pl-0 space-y-1 text-xs">
            <li><strong>Email:</strong> support@sslfintech.org</li>
            <li><strong>Phone:</strong> +91 90256 65100</li>
            <li><strong>Office Address:</strong> 295 SRR Layout, Ajagondanahalli, Whitefield, Bangalore 560087</li>
          </ul>

        </div>

      </div>
    </main>
  )
}
