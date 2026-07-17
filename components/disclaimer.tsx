"use client";

import { motion } from "framer-motion";

export function Disclaimer() {
  return (
    <section className="py-14 px-6 bg-[#111111]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10 space-y-5"
        >
          <div>
            <p className="text-[#00FF94] font-bold text-sm uppercase tracking-widest mb-2">Keeping It Real</p>
            <h2 className="text-3xl font-black">A Realistic Note</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            APPTLY is not a get-rich-quick program. There are no income guarantees here — none.
            Building an app takes time, patience, and a willingness to learn.
          </p>

          <div className="border-t border-white/10 pt-5">
            <p className="text-gray-400 mb-4">But here are some questions worth sitting with:</p>
            <div className="space-y-3">
              {[
                "What if you spent the next 90 days learning something that could change your situation?",
                "What if the app you keep putting off is closer than you think?",
                "How would a few extra dollars each month help you?",
                "What if the only thing standing between you and something different — is starting?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#00FF94] font-black mt-0.5">→</span>
                  <p className="text-white font-medium italic">&ldquo;{q}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 text-center">
            <p className="text-2xl font-black text-[#00FF94]">No promises. Just possibility.</p>
          </div>
          <div className="border-t border-white/10 pt-5">
  <p className="text-[#00FF94] font-bold text-sm uppercase tracking-widest mb-2">Refund Policy</p>
  <h2 className="text-3xl font-black mb-3">7-Day Money-Back Guarantee</h2>
  <p className="text-gray-300 leading-relaxed">
    We want you to be satisfied with APPTLY. If you&apos;re not completely satisfied, you may request a full refund within 7 days of your purchase date.
  </p>
  <p className="text-gray-300 leading-relaxed mt-3">
    To request a refund, email support@myapptly.com with your purchase email address and order details. Refunds are typically processed within 5–7 business days and returned to your original payment method.
  </p>
  <p className="text-gray-300 leading-relaxed mt-3">
    Please note: access to course materials will be revoked upon refund approval. Refund requests submitted after the 7-day window will be evaluated on a case-by-case basis.
  </p>
</div> 

        </motion.div>
      </div>
    </section>
  );
}
