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
              &ldquo;I&apos;m 72 years old. I built APPTLY without knowing how to code. If I can do it, so can you.&rdquo;
            </blockquote>

            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                I didn't set out to become a software developer. I spent decades in the bar and restaurant business and later in retail and sales. Like many people, I believed programming an app was something only programmers could do.
              </p>
              <p>
                Then I discovered AI.
              </p>
              <p>
                What started as mere curiosity turned into an obsession with learning. Step-by-step, I used AI to build a real app, launch a working website, and create APPTLY.
              </p>
              <p>
                I created APPTLY because I believe that us "Ordinary People" can create extraordinary things with today's AI tools. You don't need years of coding experience. You just need the proper guidance, the willingness to learn, and the confidence to take the first step.
              </p> 
              <p>
                If APPTLY can help just one person create a better life and future for themselves, the every hour I have invested in developing this app will have been worth it.
              </p>  
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
