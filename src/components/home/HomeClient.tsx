"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Offerings from "@/components/home/Offerings";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import CtaBanner from "@/components/home/CtaBanner";
import ApplyModal from "@/components/home/ApplyModal";
import type { Post } from "@/payload-types";

interface HomeClientProps {
  initialPosts: Post[]
}

export default function HomeClient({ initialPosts }: HomeClientProps) {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#f6f3f3] font-sans">
      {/* HERO WRAPPER WITH FIGMA GRADIENT BACKGROUND */}
      <div className="w-full bg-gradient-to-b from-[#00c6c9] via-[#00c6c9]/45 to-white relative">
        <Hero onApply={() => setApplyModalOpen(true)} />
      </div>

      <Stats />
      <AboutUs />
      <Services onApply={() => setApplyModalOpen(true)} />
      <Process />
      <Offerings onApply={() => setApplyModalOpen(true)} />
      <Testimonials />
      <Insights posts={initialPosts} />
      <CtaBanner onApply={() => setApplyModalOpen(true)} />

      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </div>
  );
}
