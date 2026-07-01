"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
          Build Your First AI App{" "}
          
          <span className="text-[#00FF94]">Even If You Can't Code</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Learn to build, launch, and grow real AI apps with simple step-by-step guidance. No coding experience required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#pricing"
            className="flex items-center gap-2 bg-[#00FF94] text-black font-black px-10 py-4 rounded-full text-lg hover:bg-[#00e085] transition-all hover:scale-105 shadow-lg shadow-[#00FF94]/20"
          >
            <CheckCircle className="w-5 h-5" />
            Get APPTLY Now for $37
          </a>
        </div>

        <p className="text-gray-500 text-sm">One-time payment - Lifetime access - No monthly fees</p>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-white/10">
          {[
            [
  { value: "1 Price", label: "Simple Offer" },
  { value: "Lifetime", label: "Access" },
  { value: "Step-by-Step", label: "Guided Learning" },
] 
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-[#00FF94]">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
