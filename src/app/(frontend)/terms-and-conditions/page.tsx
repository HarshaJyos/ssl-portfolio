import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | SSL Fintech',
  description: 'Review the terms of service, broker aggregator disclosures, and loan sanction rules of SSL Solutions.',
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Terms & Conditions
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            Terms & Conditions
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Please read these terms carefully before utilizing our loan consultation services.
          </p>
        </section>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-6 text-sm text-gray-600 leading-relaxed">
          
          <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865] mb-4">Terms of Service</h2>
          <p>
            Welcome to the website of **SSL Solutions** (operating as **SSL Fintech**). By accessing this website or submitting a loan inquiry, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">1. Nature of Services</h3>
          <p>
            SSL Solutions acts solely as a **Direct Sales Agent (DSA) / Aggregator**. We assist in referring profiles and facilitating loan documentation between applicants and our partner Banks or NBFCs. We do not issue loans directly, approve loan sanctions, or establish credit terms.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">2. Sole Discretion of Lenders</h3>
          <div className="bg-[#b2ebed]/20 p-4 rounded-xl border border-[#00acb7]/10 my-4 text-[#014865]/90">
            <strong>Sole Discretion Rule:</strong> All loan approvals, credit criteria validations, interest rates, and loan disbursements are at the absolute and sole discretion of the respective partner Bank or NBFC. SSL Solutions has no authority or influence over the credit decisions made by our partner lenders.
          </div>

          <h3 className="font-bold text-base text-[#014865] mt-6">3. Accuracy of Information Provided</h3>
          <p>
            Users are solely responsible for ensuring the accuracy, completeness, and legitimacy of all information and documentation provided to us. Supplying false or misleading details may result in rejection of the inquiry by the lending bank and termination of services.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">4. No Upfront Charges / Fees</h3>
          <p>
            Apart from standard processing and administrative fees charged directly by the lending Banks and NBFCs, SSL Solutions does not charge applicants any service fee, broker commission, or consulting charges.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">5. Indemnification</h3>
          <p>
            SSL Solutions and its representatives shall not be held liable for any losses, damages, or disputes arising between the borrower and the partner Bank/NBFC during the application process or subsequent loan lifecycle.
          </p>

        </div>

      </div>
    </main>
  )
}
