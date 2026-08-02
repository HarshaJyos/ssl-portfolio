"use client";

import { useState } from "react";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Offerings from "@/components/home/Offerings";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import CtaBanner from "@/components/home/CtaBanner";
import Footer from "@/components/home/Footer";
import ApplyModal from "@/components/home/ApplyModal";

export default function Home() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#f6f3f3] font-sans">
      {/* HEADER AND HERO WRAPPER WITH FIGMA GRADIENT BACKGROUND */}
      <div className="w-full bg-gradient-to-b from-[#00c6c9] via-[#00c6c9]/45 to-white relative">
        <Header />
        <Hero onApply={() => setApplyModalOpen(true)} />
      </div>

      <Stats />
      <AboutUs />
      <Services onApply={() => setApplyModalOpen(true)} />
      <Process />
      <Offerings onApply={() => setApplyModalOpen(true)} />
      <Testimonials />
      <Insights />
      <CtaBanner onApply={() => setApplyModalOpen(true)} />
      <Footer />

      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
