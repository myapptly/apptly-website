"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Build with AI",
    body: "Learn how to use AI to create real apps — even if you've never written a single line of code.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M22 4 L10 22 H19 L17 36 L30 16 H21 Z" stroke="#39FF8C" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Launch Your App",
    body: "Publish your app to the web or app stores with step-by-step guidance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15" stroke="#39FF8C" strokeWidth="2.5" />
        <path d="M5 20 H35 M20 5 C25 11 25 29 20 35 M20 5 C15 11 15 29 20 35" stroke="#39FF8C" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Monetize It",
    body: "Turn your app into a real business with real paying customers.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="6" y="14" width="28" height="20" rx="2" stroke="#39FF8C" strokeWidth="2.5" />
        <path d="M6 20 H34" stroke="#39FF8C" strokeWidth="2.5" />
        <path d="M13 27 H21" stroke="#39FF8C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 8 L20 14 L27 8" stroke="#39FF8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Grow Your Audience",
    body: "Learn practical marketing strategies to attract your first users and customers.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M6 30 L15 20 L22 26 L34 10" stroke="#39FF8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M25 10 H34 V19" stroke="#39FF8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="bg-[#0D0F0C] px-6 py-20 text-[#EDE9E2] md:px-[6vw]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#39FF8C]">
            No fluff, no filler
          </p>
          <h2 className="font-black uppercase tracking-tight text-[clamp(1.8rem,3.4vw,2.6rem)]">
            What You&apos;ll Learn
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#9A9E92]">
            Everything you need to go from idea to profitable app — organized into clear, actionable lessons.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-white/10 bg-[#14170F] p-6 transition-colors hover:border-[#39FF8C]/40"
            >
              <div className="mb-5 h-10 w-10">{item.icon}</div>
              <h3 className="mb-2 font-black text-lg">
                <span className="text-[#39FF8C]">{item.title.split(" ")[0]}</span>{" "}
                {item.title.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-sm leading-relaxed text-[#9A9E92]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
