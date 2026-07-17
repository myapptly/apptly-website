"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Bio } from "@/components/bio";
import { Testimonials } from "@/components/testimonials";
import { WhyApptly } from "@/components/WhyApptly";
import { Disclaimer } from "@/components/disclaimer";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navbar />

<Hero />

      <div className="mx-auto h-px w-[90%] max-w-6xl bg-white/10" />

<Features />
<div className="mx-auto h-px w-[90%] max-w-6xl bg-white/10" />
<Bio />
<div className="mx-auto h-px w-[90%] max-w-6xl bg-white/10" />
<Testimonials />
<div className="mx-auto h-px w-[90%] max-w-6xl bg-white/10" />
<WhyApptly />
<div className="mx-auto h-px w-[90%] max-w-6xl bg-white/10" />
<Pricing />
<div className="mx-auto h-px w-[90%] max-w-6xl bg-white/10" />
<Contact />
<Footer /> 
    </main>
  );
}
