"use client";

import { motion } from "framer-motion";
import { Zap, DollarSign, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Build with AI",
    description: "Learn to use the latest AI tools to build real apps — no coding degree required. If I can do it at 72, you can do it too.",
  },
  {
    icon: Globe,
    title: "Launch Your App",
    description: "From idea to live app on the App Store and Google Play. Step-by-step guidance the whole way through.",
  },
  {
    icon: DollarSign,
    title: "Monetize It",
    description: "Learn how to set up subscriptions, payments, and pricing that actually makes sense for your market.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Audience",
    description: "Simple social media strategies to get your app in front of the right people — without being a marketing guru.",
  },
];

export function Features() {
  return (
    <section className="py-14 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            What You&apos;ll <span className="text-[#00FF94]">Learn</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to go from idea to profitable app — organized into clear, actionable lessons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:border-[#00FF94]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#00FF94]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#00FF94]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
