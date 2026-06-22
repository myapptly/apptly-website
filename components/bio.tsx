"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Bio() {
  return (
    <section id="about" className="py-14 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FF94]/20 rounded-2xl blur-2xl scale-110" />
              <Image
                src="https://galaxy-prod.tlcdn.com/gen/user_37MJjcymE8bOUM2E9geQUee0w5V/d1fe5648-5c3c-4a9e-a2d0-2197eb4f209b.jpg"
                alt="Terry Bledsoe — APPTLY Founder"
                width={400}
                height={400}
                className="relative rounded-2xl object-cover border-2 border-[#00FF94]/30"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-[#00FF94] font-bold text-sm uppercase tracking-widest mb-2">Meet the Founder</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Terry Bledsoe</h2>
            </div>

            <blockquote className="text-xl font-bold text-[#00FF94] italic border-l-4 border-[#00FF94] pl-4">
              &ldquo;I&apos;m 72 years old — and I built APPTLY. If I can do it, anyone can.&rdquo;
            </blockquote>

            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                I got into app development out of curiosity — wondering what was possible if I really learned how to use AI.
                I&apos;ve always wanted to be self-sufficient. I&apos;ve achieved it a few times in my life, but there was always
                a job waiting to pull me back in.
              </p>
              <p>
                APPTLY came from years of learning, experimenting, and refusing to quit. By using AI to its full
                potential, I built something real — step by step, day by day.
              </p>
              <p>
                The desire to help others comes naturally to me. I was raised by parents who dedicated their lives
                to serving people. If something I&apos;ve learned can make your journey easier, that&apos;s reason enough to share it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
