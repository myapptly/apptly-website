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

         <div className="space-y-6">
  <div>
    <p className="text-[#00FF94] font-bold text-sm uppercase tracking-widest mb-2">
      Meet the Founder
    </p>

    <h2 className="text-4xl md:text-5xl font-black leading-tight">
      Terry Bledsoe
    </h2>
  </div>

  <blockquote className="text-xl font-bold text-[#00FF94] italic border-l-4 border-[#00FF94] pl-4">
    &ldquo;At 72 years old, I built APPTLY without knowing how to code. If I
    can learn this, so can you.&rdquo;
  </blockquote>

  <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
    <p>
      I did not spend my life working in technology. I spent decades in bars,
      restaurants, business ownership, retail, customer service, and sales.
      For most of my life, I believed that creating an app belonged to a
      completely different world—a world of programmers, computer experts,
      complicated terminology, and abilities I simply did not have.
    </p>

    <p>
      Then artificial intelligence began changing what was possible.
    </p>

    <p>
      I became curious about whether an ordinary person could use AI to build
      something real. I did not have a computer-science degree, a development
      team, or a large budget. I did not even know where to begin. I simply
      started asking questions, following instructions, making mistakes,
      correcting them, and taking one step after another.
    </p>

    <p>
      Some days were frustrating. Things broke. Instructions did not always
      work the first time. I often felt confused and wondered whether I had
      gotten in over my head.
    </p>

    <p className="font-semibold text-white">
      But I kept going.
    </p>

    <p>
      Eventually, I built a working app. Then I created a website, connected
      payments, developed a member dashboard, designed lessons, and turned
      everything I had learned into APPTLY.
    </p>

    <p>
      That experience changed the way I think about technology—and about what
      ordinary people are capable of learning.
    </p>

    <p>
      I created APPTLY for people who have spent years telling themselves,
      &ldquo;I could never do that.&rdquo; It was created for the restaurant
      worker, salesperson, retiree, small-business owner, caregiver,
      tradesperson, dreamer, and everyday person who has an idea but does not
      believe they possess the technical ability to bring it to life.
    </p>

    <p>
      APPTLY does not pretend that building something useful requires no
      effort. It takes patience, thought, testing, persistence, and a
      willingness to learn. But the tools available today make it possible for
      people like us to accomplish things that once required an entire
      technical team.
    </p>

    <p>
      You do not need to know everything before you begin. You need a clear
      next step, understandable guidance, and the willingness to keep moving
      forward.
    </p>
  </div>

  <div className="rounded-2xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-6">
    <p className="text-lg font-semibold text-white leading-relaxed">
      I built APPTLY because I believe ordinary people can create extraordinary
      things when someone helps them see that the door is open.
    </p>

    <p className="mt-4 text-gray-300 leading-relaxed">
      If APPTLY helps one person create a useful app, serve a business, earn
      additional income, discover a new ability, or build a better future,
      then every hour invested in creating it will have been worthwhile.
    </p>
  </div>

           <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 space-y-5">

  <h2 className="text-4xl font-black">
    You Don't Need a <span className="text-[#00FF94]">Fortune</span> to Build an App
  </h2>

  <p className="text-gray-300 leading-relaxed">
    One of the biggest myths about creating an app is that you need thousands of
    dollars, a team of programmers, and months of development.
  </p>

  <p className="text-gray-300 leading-relaxed">
    That used to be true.
  </p>

  <p className="text-gray-300 leading-relaxed">
    I built APPTLY using affordable tools that are available to almost anyone.
    My direct startup costs were well under <span className="text-[#00FF94] font-bold">$100</span>.
    The biggest investment wasn't money—it was curiosity, persistence, and a willingness to learn.
  </p>

  <div className="bg-[#111111] border border-[#00FF94]/30 rounded-xl p-6 space-y-2">

    <p>✅ Domain name: About $10</p>
    <p>✅ GitHub: Free</p>
    <p>✅ Vercel hosting: Free</p>
    <p>✅ Stripe: Free until you make a sale</p>
    <p>✅ AI tools: Affordable monthly subscription</p>

  </div>

  <div className="bg-[#003322] border border-[#00FF94] rounded-xl p-6">

    <p className="text-2xl font-bold text-white">
      If a 72-year-old Air Force Veteran and restaurant veteran could build and launch an AI app...
    </p>

    <p className="text-[#00FF94] text-xl font-bold mt-4">
      Imagine what you can build.
    </p>

  </div>

</div> 

            </div>
        </motion.div>
      </div>
    </section>
  );
}
