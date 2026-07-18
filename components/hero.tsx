"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-[#0D0F0C] text-[#EDE9E2] overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#39FF8C]/10 blur-3xl" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-7 md:px-[6vw]">
        <div className="flex items-center gap-2.5">
          <img src="/APPTLY%20logo.png" alt="APPTLY" className="h-7 w-auto" />
          <span className="font-black text-2xl tracking-wide">APPTLY</span>
        </div>
        <a
          href="#pricing"
          className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold hover:border-[#39FF8C] hover:text-[#39FF8C] transition-colors"
        >
          Get APPTLY — $37
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-10 md:grid-cols-[0.85fr_1.15fr] md:gap-[5vw] md:px-[6vw] md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-start gap-4"
        >
          <h1 className="font-black uppercase leading-[1.02] tracking-tight text-[clamp(2rem,4vw,3.2rem)]">
            Build Your First
            <br />
            AI App —
            <br />
            <span className="text-[#39FF8C]">Even If You Can&apos;t Code</span>
          </h1>

          <p className="text-xl font-extrabold text-[#39FF8C] leading-snug">
            We figured it out so you don&apos;t have to.
          </p>

          <p className="text-lg font-bold text-white leading-relaxed">
            Learn to build, launch, and grow real AI apps.
            <br />
            No coding experience required.
          </p>

          <div className="flex w-full max-w-[280px] items-center gap-3 border-t border-white/5 pt-4">
            <svg className="h-7 w-7 flex-shrink-0" viewBox="0 0 40 40" fill="none">
              <path d="M6 14 L20 24 L34 14" stroke="#39FF8C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 22 L20 32 L34 22" stroke="#39FF8C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-center gap-2">
              <div className="text-base font-bold uppercase tracking-widest text-white">
                72-year-old veteran.
                <br />
                Zero clue about code.
                <br />
                Built this anyway.
              </div>
              <span className="rotate-[-8deg] rounded border-2 border-[#C1442E] px-2 py-1 text-[0.65rem] font-black tracking-widest text-[#C1442E]">
                PROOF
              </span>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4">
            <p className="font-black uppercase leading-[1.05] text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Build an app
              <br />
              for under
              <br />
              <span className="text-[#39FF8C]">$100.</span>
            </p>
            <p className="mt-1 text-sm text-[#9A9E92]">This one&apos;s included.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col items-start gap-9"
        >
          <div
            className="w-full max-w-sm -rotate-2 rounded-t bg-[#F7F3EA] p-6 pb-9 text-[#1C1B19] shadow-2xl"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 92%, 95% 100%, 90% 92%, 85% 100%, 80% 92%, 75% 100%, 70% 92%, 65% 100%, 60% 92%, 55% 100%, 50% 92%, 45% 100%, 40% 92%, 35% 100%, 30% 92%, 25% 100%, 20% 92%, 15% 100%, 10% 92%, 5% 100%, 0% 92%)",
            }}
          >
            <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col items-start gap-9"
        >
          <div className="flex items-center gap-2.5">
            <img src="/APPTLY%20logo.png" alt="APPTLY" className="h-10 w-auto" />
            <span className="font-black text-3xl tracking-wide">APPTLY</span>
          </div>

          <div
            className="w-full max-w-sm -rotate-2 rounded-t bg-[#F7F3EA] p-6 pb-9 text-[#1C1B19] shadow-2xl"> 
          
<div className="mb-3 border-b border-dashed border-[#C9C3B4] pb-3 text-center font-mono text-xs uppercase tracking-widest text-[#6B6E5F]">
              Cost to launch — receipt
            </div>

            <div className="flex justify-between py-1.5 font-mono text-sm">
              <span>Domain name</span>
              <span className="font-medium">$12</span>
            </div>
            <div className="flex justify-between py-1.5 font-mono text-sm">
              <span>Hosting (Vercel, free tier)</span>
              <span className="font-medium">$0</span>
            </div>
            <div className="flex justify-between py-1.5 font-mono text-sm">
              <span>Code storage (GitHub, free)</span>
              <span className="font-medium">$0</span>
            </div>
            <div className="flex justify-between py-1.5 font-mono text-sm">
              <span>AI tools (1 month)</span>
              <span className="font-medium">$20</span>
            </div>
            <div className="flex justify-between py-1.5 font-mono text-sm">
              <span>APPTLY course</span>
              <span className="font-medium">$37</span>
            </div>

            <hr className="my-3 border-t border-dashed border-[#C9C3B4]" />

            <div className="flex items-baseline justify-between font-mono">
              <span className="text-xs uppercase tracking-wide text-[#6B6E5F]">Total to launch</span>
              <span className="text-3xl font-bold text-[#C1442E]">$69</span>
            </div>
          </div>

          <div className="relative z-20 flex flex-wrap items-center gap-5 mt-4">
            <span className="text-sm text-[#9A9E92]">One-time payment. Lifetime access.</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black/40" />
    </section>
  );
} 
