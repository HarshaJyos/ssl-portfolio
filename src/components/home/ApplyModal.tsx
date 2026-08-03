"use client";

import { useState } from "react";
import { db } from "@/utilities/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "Personal Loan",
    amount: ""
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      // 1. Submit to Payload CMS Forms Endpoint
      const submissionData = [
        { field: "fullname", value: formData.name },
        { field: "email", value: formData.email },
        { field: "Phone Number", value: Number(formData.phone) },
        { field: "Loan Type", value: formData.loanType },
        { field: "Required Amount", value: Number(formData.amount) }
      ];

      const cmsResponse = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: "6a702a51b92a0e9ad6d87deb",
          submissionData,
        }),
      });

      if (!cmsResponse.ok) {
        throw new Error("Payload CMS form submission failed");
      }

      // 2. Submit to Firebase Firestore (Wrapped inside a safe try-catch in case of Firebase permission issues)
      try {
        await addDoc(collection(db, 'inquiries'), {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          loanType: formData.loanType,
          amount: Number(formData.amount),
          submittedAt: serverTimestamp(),
        });
      } catch (firestoreError) {
        console.warn("Firestore backup write failed due to security/permission rules:", firestoreError);
      }

      setStatus('success');
      setFormData({ name: "", email: "", phone: "", loanType: "Personal Loan", amount: "" });
      
      // Auto-close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);

    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="font-['DM_Serif_Display'] text-3xl text-[#014865] mb-2 leading-tight">
          Apply for a Loan
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Complete this quick form and our financial expert will call you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-600 uppercase block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              placeholder="John Doe"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#00acb7] transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 uppercase block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              placeholder="john@example.com"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#00acb7] transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 uppercase block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              required
              placeholder="+91 98765 43210"
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#00acb7] transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-600 uppercase block mb-1">Loan Type</label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleFormChange}
                className="w-full bg-gray-50 border border-gray-200 px-3 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#00acb7] transition-all bg-white"
              >
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Investmets">Investment</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 uppercase block mb-1">Required Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
                required
                placeholder="₹ 5,00,000"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#00acb7] transition-all"
              />
            </div>
          </div>

          {/* Submission Alerts */}
          {status === 'success' && (
            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs font-semibold">
              ✔ Application submitted successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
              ⨯ Error saving application. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#00728a] hover:bg-[#014865] text-white py-4 rounded-2xl font-bold tracking-wide mt-2 transition-all duration-300 shadow-md active:scale-[0.98] disabled:opacity-50"
          >
            {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}
