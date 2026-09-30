"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the minimum monthly income requirement for a loan at SSL Fintech?",
    answer:
      "Salaried individuals applying for personal or business loans through SSL Fintech must have a minimum monthly income of ₹25,000.",
  },
  {
    question: "What are the interest rates for loans at SSL Fintech?",
    answer:
      "As an aggregator, SSL Fintech connects you to partner banks and NBFCs with loan interest rates starting from 9.99% up to 26% per annum, depending on the lender's credit policies.",
  },
  {
    question: "Does SSL Fintech charge any consultation or service fees?",
    answer:
      "No, SSL Fintech does not charge applicants any service fee, brokerage commission, or consulting charges. Customers only pay the standard administrative processing fees directly to the sanctioning bank or NBFC.",
  },
  {
    question: "How long does SSL Fintech retain customer data?",
    answer:
      "To guarantee customer confidentiality, all personal information and loan inquiry documents are permanently and securely deleted from our databases exactly 30 days after form submission.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-12 max-w-5xl mx-auto" id="faq">
      <div className="text-center space-y-4 mb-14">
        <span className="text-xs md:text-sm font-bold tracking-widest text-[#00acb7] uppercase">
          Got Questions?
        </span>
        <h2 className="font-['DM_Serif_Display'] text-3xl md:text-5xl text-[#014865]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base">
          Everything you need to know about our loan aggregation and advisory process.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                isOpen
                  ? "border-[#00acb7] shadow-[0px_4px_25px_rgba(0,172,183,0.12)]"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-base md:text-lg text-[#014865]">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "bg-[#00acb7] text-white rotate-180" : "bg-gray-100 text-[#014865]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 md:px-8 pb-6 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
