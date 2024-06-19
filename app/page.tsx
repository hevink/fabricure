"use client";

import Faq from "@/components/landing-page/Faq";
import Hero from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-20">
      <Hero />
      <Faq />
    </div>
  );
}
