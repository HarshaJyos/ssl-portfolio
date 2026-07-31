"use client";

import Image from "next/image";

const services = [
  {
    title: "Personal Loans",
    points: ["Quick Approvals", "Minimal Documentation", "Flexible Repayment", "Competitive Interest"],
    image: "/assets/imgServicesImage.png",
    shape: "/assets/imgSubtract3.svg"
  },
  {
    title: "Home Loans",
    points: ["Purchase Home", "Balance Transfer", "Loan Top-Up", "Attractive Interest Rates"],
    image: "/assets/imgServicesImage1.png",
    shape: "/assets/imgSubtract4.svg"
  },
  {
    title: "Business Loans",
    points: ["Working Capital", "Business Expansion", "MSME Financing", "Flexible Funding"],
    image: "/assets/imgServicesImage2.png",
    shape: "/assets/imgSubtract5.svg"
  },
  {
    title: "Investment Solutions",
    points: ["Mutual Funds", "SIP Planning", "ELSS", "Right Investing"],
    image: "/assets/imgServicesImage3.png",
    shape: "/assets/imgSubtract6.svg"
  },
  {
    title: "Insurance Solutions",
    points: ["Life Insurance", "Health Insurance", "Term Insurance", "General Insurance"],
    image: "/assets/imgServicesImage4.png",
    shape: "/assets/imgSubtract7.svg"
  },
  {
    title: "Other Services",
    points: ["NRI Services", "Estate Planning", "Education Planning", "Corporate Solutions"],
    image: "/assets/imgOtherServicesImage.png",
    shape: "/assets/imgSubtract7.svg"
  }
];

interface ServicesProps {
  onApply: () => void;
}

export default function Services({ onApply }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-[#188c9c] uppercase block mb-3">LOAN & FINANCIAL SERVICES</span>
          <h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#014865] leading-tight">
            Solutions for Every Financial Need
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#00acb7] rounded-[28px] p-5 transition-all duration-300 shadow-[0px_8px_20px_rgba(0,0,0,0.06)] hover:shadow-xl flex flex-row gap-5 items-stretch min-h-[220px] overflow-hidden"
            >
              {/* Backdrop shape decoration */}
              <div className="absolute right-0 bottom-0 w-24 h-24 opacity-20 pointer-events-none z-0">
                <Image 
                  src={service.shape} 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-contain" 
                  alt="" 
                />
              </div>

              {/* Left Side: Image */}
              <div className="w-[42%] max-w-[150px] aspect-[4/5] rounded-[20px] overflow-hidden flex-shrink-0 relative z-10">
                <Image 
                  src={service.image} 
                  fill 
                  className="object-cover" 
                  alt={service.title} 
                />
              </div>

              {/* Right Side: Text & Button */}
              <div className="flex-1 flex flex-col justify-between py-1 relative z-10">
                <div>
                  {/* Title */}
                  <h3 className="font-['DM_Serif_Display'] text-xl md:text-2xl text-white leading-tight mb-2">
                    {service.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-1">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5 text-xs md:text-sm text-[#014865] font-semibold leading-tight">
                        <span className="w-1.5 h-1.5 bg-[#014865] rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={onApply}
                  className="w-fit bg-[#014865] hover:bg-[#152644] text-white font-bold text-xs md:text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm mt-3"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
