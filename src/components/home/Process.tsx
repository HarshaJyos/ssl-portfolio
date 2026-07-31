import Image from "next/image";
import { Target, Activity, Network, Wallet, TrendingUp } from "lucide-react";

const processSteps = [
  {
    title: "Tell Us Your Requirement",
    icon: Target
  },
  {
    title: "Assess Your Profile",
    icon: Activity
  },
  {
    title: "Find the Right Loan Eligible",
    icon: Network
  },
  {
    title: "Approval & Processing",
    icon: Wallet
  },
  {
    title: "Funds Credited",
    icon: TrendingUp
  }
];

export default function Process() {
  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto relative">

      {/* Overlapping background Figma vector shapes behind the process card */}
      {/* Left Side Shapes */}
      <div className="absolute left-[-250px] xl:left-[-334px] top-[80px] w-[361px] h-[464px] pointer-events-none z-0">
        <Image 
          src="/assets/imgSubtract4.svg" 
          width={361} 
          height={464} 
          className="w-full h-full object-contain" 
          alt="" 
        />
      </div>
      <div className="absolute left-[-220px] xl:left-[-301px] top-[244px] w-[361px] h-[464px] pointer-events-none z-0">
        <Image 
          src="/assets/imgSubtract3.svg" 
          width={361} 
          height={464} 
          className="w-full h-full object-contain" 
          alt="" 
        />
      </div>

      {/* Right Side Shapes */}
      <div className="absolute right-[-210px] xl:right-[-272px] top-[301px] w-[291px] h-[374px] pointer-events-none z-0" style={{ transform: "scaleY(-1)" }}>
        <Image 
          src="/assets/imgSubtract5.svg" 
          width={291} 
          height={374} 
          className="w-full h-full object-contain" 
          alt="" 
        />
      </div>
      <div className="absolute right-[-210px] xl:right-[-272px] top-[479px] w-[291px] h-[374px] pointer-events-none z-0" style={{ transform: "scaleY(-1)" }}>
        <Image 
          src="/assets/imgSubtract6.svg" 
          width={291} 
          height={374} 
          className="w-full h-full object-contain" 
          alt="" 
        />
      </div>

      <div className="bg-[#dedede] rounded-[45px] overflow-hidden p-8 md:p-16 relative z-10 shadow-md">

        {/* Title */}
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-[#014865] uppercase block mb-3">OUR PROCESS</span>
          <h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#014865] leading-tight">
            A Simple Process for<br />Your Personal Loan
          </h2>
        </div>

        {/* Grid of Steps */}
        <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center lg:justify-between gap-y-12 gap-x-8 lg:gap-x-6 relative z-10">
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="flex-shrink-0 w-[160px] md:w-[180px] lg:w-auto lg:flex-1 flex flex-col items-center relative">

                {/* Circle Container */}
                <div className="w-32 h-32 bg-[#00acb7] rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-all duration-300 relative z-10">
                  <StepIcon className="w-12 h-12 text-white z-10" />
                </div>

                {/* Title */}
                <h3 className="font-['DM_Serif_Display'] text-lg text-[#014865] mt-6 max-w-[150px] leading-snug text-center z-10">
                  {step.title}
                </h3>

                {/* Connecting Dashed Arrow (Centered on Circle Vertically) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-16 -translate-y-1/2 left-[calc(50%+72px)] right-[calc(-50%+72px)] items-center justify-center z-0">
                    <div className="w-full flex items-center">
                      <div className="flex-1 border-t-2 border-dashed border-[#00acb7] opacity-60"></div>
                      <svg className="w-4 h-4 text-[#00acb7] flex-shrink-0 -ml-1 opacity-60" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
