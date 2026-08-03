"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { db } from '@/utilities/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'Personal Loan',
    amount: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      // 1. Submit to Payload CMS Forms Endpoint
      const submissionData = [
        { field: "fullname", value: formData.name },
        { field: "email", value: formData.email },
        { field: "Phone Number", value: Number(formData.phone) },
        { field: "Loan Type", value: formData.loanType },
        { field: "Required Amount", value: Number(formData.amount) }
      ]

      const cmsResponse = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: "6a702a51b92a0e9ad6d87deb",
          submissionData,
        }),
      })

      if (!cmsResponse.ok) {
        throw new Error("Payload CMS form submission failed");
      }

      // 2. Submit to Firebase Firestore Backup (Wrapped inside a safe try-catch in case of Firebase permission issues)
      try {
        await addDoc(collection(db, 'inquiries'), {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          loanType: formData.loanType,
          amount: Number(formData.amount),
          submittedAt: serverTimestamp(),
        })
      } catch (firestoreError) {
        console.warn("Firestore backup write failed due to security/permission rules:", firestoreError);
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: 'Personal Loan',
        amount: '',
      })
    } catch (error) {
      console.error('Submission failed:', error)
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
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#00acb7] shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
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
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#00acb7] shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-sm uppercase text-[#00acb7]">Call Us</h4>
                  <p className="text-sm text-white/80 pt-1">+91 90256 65100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#00acb7] shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Required Service</label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm bg-white"
                  >
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Investmets">Investment</option>
                  </select>
                </div>
                {/* Required Amount */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Required Amount</label>
                  <input
                    type="number"
                    required
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="₹ 5,00,000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00acb7] text-sm"
                  />
                </div>
              </div>

              {/* Submit states */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                  ✔ Thank You for choosing sslfintech.
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
