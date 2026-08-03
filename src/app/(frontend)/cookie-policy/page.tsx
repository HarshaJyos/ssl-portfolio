import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | SSL Fintech',
  description: 'Understand how cookies and session storage are utilized on the SSL Solutions portal.',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Cookie Policy
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl text-[#014865]">
            Cookie Policy
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Details of cookie usage and tracking tools on our website.
          </p>
        </section>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] space-y-6 text-sm text-gray-600 leading-relaxed">
          
          <h2 className="text-2xl font-['DM_Serif_Display'] text-[#014865] mb-4">Cookie Policy</h2>
          
          <p>
            This Cookie Policy explains how **SSL Solutions** (operating as **SSL Fintech**) uses cookies and similar technologies to recognize you when you visit our website.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">1. What are Cookies?</h3>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">2. Cookies We Use</h3>
          <p>
            We do not use any advanced tracking, profiling, or cross-site tracking cookies. We only use standard, essential session cookies and local storage tokens required for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maintaining server sessions and website navigation states.</li>
            <li>Remembering form inputs temporarily during submission transitions.</li>
            <li>Optimizing page loading performance and static asset caching.</li>
          </ul>

          <h3 className="font-bold text-base text-[#014865] mt-6">3. Third-Party Analytics</h3>
          <p>
            If applicable, we may use basic analytics services (such as Firebase Analytics or Google Analytics) to monitor anonymous traffic patterns (e.g. daily visitor count, browser type). These tools do not collect personal identify information, and we do not compile user profiles.
          </p>

          <h3 className="font-bold text-base text-[#014865] mt-6">4. Controlling Cookies</h3>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though some layout functions or form transitions might operate slower.
          </p>

        </div>

      </div>
    </main>
  )
}
