"use client";

import { useState } from "react";

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your loan application for ${formData.loanType} of ₹${formData.amount} has been submitted successfully.`);
    onClose();
    setFormData({ name: "", email: "", phone: "", loanType: "Personal Loan", amount: "" });
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
                className="w-full bg-gray-50 border border-gray-200 px-3 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#00acb7] transition-all"
              >
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Investment Setup">Investment</option>
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

          <button
            type="submit"
            className="w-full bg-[#00728a] hover:bg-[#014865] text-white py-4 rounded-2xl font-bold tracking-wide mt-2 transition-all duration-300 shadow-md active:scale-[0.98]"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
