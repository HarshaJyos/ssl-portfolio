"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { db } from '@/utilities/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'personal',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      // Save data directly to Firestore 'inquiries' collection
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        submittedAt: serverTimestamp(),
      })
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: 'personal',
        message: '',
      })
    } catch (error) {
      console.error('Firestore save failed:', error)
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Contact Us
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#014865]">
            Get in Touch
          </h1>
          <p className="max-w-md mx-auto text-gray-600 text-sm leading-relaxed">
            Have questions about loans or dynamic investments? Drop us a message, and our team will reach out.
          </p>
        </section>

        {/* Content columns */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Office and Address Info */}
          <div className="bg-[#014865] text-white p-8 md:p-12 rounded-[40px] flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <h2 className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-white">
                SSL Fintech
              </h2>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                We are committed to providing fast-track loan distributions, wealth planning, and retirement guidance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">📍</span>
                <div>
                  <h4 className="font-semibold text-sm uppercase text-[#00acb7]">Registered Office</h4>
                  <p className="text-sm text-white/80 leading-relaxed pt-1">
                    295 SRR Layout Ajagondanahalli,<br />
                    Near Green Garden School,<br />
                    Bangalore 560087
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">📞</span>
                <div>
                  <h4 className="font-semibold text-sm uppercase text-[#00acb7]">Call Us</h4>
                  <p className="text-sm text-white/80 pt-1">+91 90256 65100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0">✉</span>
                <div>
                  <h4 className="font-semibold text-sm uppercase text-[#00acb7]">Email Us</h4>
                  <p className="text-sm text-white/80 pt-1">support@sslfintech.org</p>
                </div>
              </div>
            </div>

            <p className="text-white/40 text-xs">
              © 2026 SSL Fintech. AMFI-Registered Mutual Fund Distributor (ARN-302874).
            </p>
          </div>

          {/* Firestore Inquiries Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865] mb-6">Send an Inquiry</h3>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm"
                  />
                </div>
              </div>

              {/* Subject / Loan Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Required Service</label>
                <select
                  value={formData.loanType}
                  onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm bg-white"
                >
                  <option value="personal">Personal Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="home">Home Loan</option>
                  <option value="mutual-funds">Mutual Fund / SIP Investments</option>
                  <option value="insurance">Insurance Planning</option>
                  <option value="other">Other Inquiries</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">How can we help?</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm"
                />
              </div>

              {/* Submit states */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                  ✔ Inquiry sent successfully! Our advisors will contact you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                  ⨯ Something went wrong. Please check your inputs and try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#00728a] hover:bg-[#00acb7] text-white py-3 rounded-xl font-bold transition-all text-sm shadow-md disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

        </section>

      </div>
    </main>
  )
}
