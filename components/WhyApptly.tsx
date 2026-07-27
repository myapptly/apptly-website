"use client";

import { motion } from "framer-motion";

const competitors = [
  { name: "Coursera — AI Apps Specialization", note: "Bundled subscription, not standalone", cost: "$199/year" },
  { name: "DeepLearning.AI — Build with Andrew", note: "Ongoing membership required", cost: "$25–30/month" },
  { name: "No Code MBA", note: "Recurring monthly cost", cost: "Subscription" },
  { name: "Udemy Vibe Coding Courses", note: "One-time, but prototype-level only", cost: "$20–90" },
];

export function WhyApptly() {
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
            Do the math yourself
          </p>
          <h2 className="font-black uppercase tracking-tight text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Why APPTLY
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {competitors.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-[#C1442E]/20 bg-[#14170F] p-6"
            >
              <h3 className="mb-1 font-bold">{c.name}</h3>
              <p className="mb-3 text-sm text-[#9A9E92]">{c.note}</p>
              <p className="font-mono text-lg font-bold text-[#C1442E]">{c.cost}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-2xl border-2 border-[#39FF8C] bg-gradient-to-br from-[#39FF8C]/10 to-[#2DD4BF]/5 p-10 text-center"
        >
          <h3 className="mb-2 text-2xl font-black">APPTLY</h3>
          <p className="mb-4 text-[#D8DBD2]">
            Full real-world course — idea to live app, payments, and launch
          </p>
          <p className="mb-1 font-mono text-5xl font-black text-[#39FF8C]">$37</p>
          <p className="text-sm text-[#9A9E92]">One payment and it belongs to you</p>
        </motion.div>
      </div>
    </section>
  );
} 
