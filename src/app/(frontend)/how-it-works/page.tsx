import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works | SSL Fintech',
  description: 'Learn about our simple aggregator/DSA model to apply and compare loan options from top banks and NBFC partners.',
}

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      title: 'Submit Application',
      desc: 'Fill out our secure loan inquiry form on the website with your basic details, required loan amount, and preferred loan type.'
    },
    {
      step: '02',
      title: 'Profile Assessment',
      desc: 'Our loan experts review your application details against standard lending partner criteria, such as minimum salary requirements.'
    },
    {
      step: '03',
      title: 'Bank & NBFC Comparison',
      desc: 'We match your profile against our list of top bank and NBFC partners to retrieve the best rates (ranging from 9.99% to 26%).'
    },
    {
      step: '04',
      title: 'Document Facilitation',
      desc: 'We assist you in gathering and submitting the necessary documents directly to the selected lender without any extra fee.'
    },
    {
      step: '05',
      title: 'Sanction & Disbursal',
      desc: 'The lender validates your documentation, makes the final credit approval, and disburses the funds directly to your account.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; How It Works
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            How It Works
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Discover our simple, fast-track process for connecting you to the best lending options.
          </p>
        </section>

        {/* Process Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865]">Our Aggregator Model</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              SSL Fintech operates purely under a Direct Sales Agent (DSA) / Aggregator model. We do not extend credit or provide loans directly to customers. Instead, we act as a bridge, utilizing our relationships with leading Banks and NBFCs to find the most suitable, competitive financing option for you.
            </p>
          </div>

          {/* Steps list */}
          <div className="space-y-6 pt-4">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-6 items-start pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                <span className="font-['DM_Serif_Display'] text-4xl text-[#00acb7] leading-none shrink-0">
                  {item.step}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-[#014865]">{item.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-[#b2ebed]/20 p-6 rounded-2xl border border-[#00acb7]/10 text-center">
            <h4 className="font-semibold text-sm text-[#014865] mb-1">No Consultative Fees</h4>
            <p className="text-[#014865]/80 text-xs leading-relaxed max-w-lg mx-auto">
              We never charge any upfront service charges, commissions, or consulting fees. You only pay standard processing fees directly to the sanctioning Bank/NBFC upon approval.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}
