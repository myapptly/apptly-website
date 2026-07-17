"use client";

export function WhyApptly() {
  const comparisons = [
    {
      name: "Coursera – AI Apps Specialization",
      price: "$199/year",
      note: "Bundled subscription, not standalone",
    },
    {
      name: "DeepLearning.AI – Build with Andrew",
      price: "$25–30/month",
      note: "Ongoing membership required",
    },
    {
      name: "No Code MBA",
      price: "Subscription",
      note: "Recurring monthly cost",
    },
    {
      name: "Udemy Vibe Coding Courses",
      price: "$20–90",
      note: "One-time, but prototype-level only",
    },
  ];

  return (
    <section className="py-14 px-6 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4">
          Why <span className="text-[#00FF94]">APPTLY</span>?
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Most courses charge you monthly to keep learning. APPTLY charges you once, and you keep it forever.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/10 rounded-2xl p-6"
            >
              <p className="text-white font-semibold mb-1">{c.name}</p>
              <p className="text-gray-400 text-sm mb-2">{c.note}</p>
              <p className="text-red-400 font-bold">{c.price}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#003322] border-2 border-[#00FF94] rounded-2xl p-8 mt-8 text-center">
          <p className="text-white font-semibold mb-1">APPTLY</p>
          <p className="text-gray-300 text-sm mb-2">
            Full real-world course — idea to live app, payments, and launch
          </p>
          <p className="text-[#00FF94] text-3xl font-bold">$37</p>
          <p className="text-gray-400 text-sm">One payment. Lifetime access.</p>
        </div>
      </div>
    </section>
  );
} 
