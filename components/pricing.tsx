"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShoppingCart, Star } from "lucide-react";

const plans = [
  {
    name: "Founding Member",
    emoji: "🚀",
    price: "$37",
    period: "one-time payment",
    description: "Become a founding member and get lifetime access to APPTLY.",
    features: [
      "Lifetime access",
      "All 10 core lessons",
      "Future course updates included",
      "Build unlimited AI apps",
      "Apps for any business or industry",
      "Founding Member pricing",
    ],
    link: "https://buy.stripe.com/28EfZh3HV290bPB3QDc3m07",
    popular: true,
    color: "border-[#00FF94]",
    btnColor: "bg-[#00FF94] text-black hover:bg-[#00dd88]",
  },
]; 

export function Pricing() {
  return (
    <section id="pricing" className="py-14 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            Become a <span className="text-[#00FF94]">Founding Member</span>
          </h2>
          <p className="text-gray-400 text-lg">
            One-time payment - Lifetime access - All future updates included
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-[#1A1A1A] rounded-2xl p-8 border-2 ${plan.color} flex flex-col ${plan.popular ? "scale-105 shadow-2xl shadow-[#00FF94]/10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FF94] text-black text-xs font-black px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> FOUNDING OFFER
                </div>
              )}

              <div className="mb-5">
                <div className="text-2xl mb-1">{plan.emoji} {plan.name}</div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-400 mb-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#00FF94] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 ${plan.btnColor} font-bold py-4 rounded-xl text-sm transition-all hover:scale-105`}
              >
                <ShoppingCart className="w-4 h-4" />
                Get Lifetime Access - $37
              </a>
              <p className="mt-4 text-center text-sm font-semibold text-[#00FF94]">
  Founding-member price: $37 for a limited time.
</p>

<p className="mt-1 text-center text-sm text-gray-400">
  Lock in lifetime access before the price increases.
</p> 
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          ✅ One-time payment - Lifetime access - No monthly fees
        </p>
      </div>
    </section>
  );
}
