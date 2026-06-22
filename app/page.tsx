"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Bio } from "@/components/bio";
import { Disclaimer } from "@/components/disclaimer";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Bio />
      <Disclaimer />
      <Contact />
      <Footer />
    </main>
  );
}
