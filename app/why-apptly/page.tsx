import { Eyebrow, PageShell, ReviewSpot } from "../../components/MarketingShell";

const benefits = [
  ["Built For You", "We do the building. You make the business decisions."],
  ["Clear Pricing", "Know the APPTLY build price before you start."],
  ["Mobile First", "Designed for the screen your customers carry everywhere."],
  ["No Required APPTLY Maintenance Fee", "Third-party costs, if needed, are identified before approval."],
  ["Owner Handoff", "Your domain and business accounts stay under your control."],
  ["Human Service", "A straightforward relationship with the person building your project."],
];

export default function WhyApptlyPage() {
  return (
    <PageShell>
      <section className="border-b border-white/10 px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Why APPTLY</Eyebrow>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl lg:whitespace-nowrap">
            Built for small business. <span className="text-emerald-400">Not built to trap you.</span>
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
            A practical, done-for-you alternative for owners who want professional digital tools without agency-sized pricing or a DIY learning curve.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h2 className="text-lg font-black text-emerald-400 md:text-xl">{title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-9 md:py-10">
        <div className="mx-auto max-w-4xl">
          <ReviewSpot
            source="ChatGPT · Independent evaluation"
            score="9/10 concept · 9/10 pricing"
            quote="Very sensible for small local businesses."
            note="The independent evaluation praised APPTLY's transparent pricing, done-for-you approach and mobile-first small-business focus."
          />
        </div>
      </section>

      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Local & practical</Eyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl lg:whitespace-nowrap">
            Winston-Salem roots. Small-business focus.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
            APPTLY serves small businesses and organizations in Winston-Salem, the Piedmont Triad and beyond. The goal is simple: make it easier for customers to find you, trust you and take action.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/work" className="rounded-xl border border-white/20 px-5 py-3 font-black">See Our Work</a>
            <a href="/services" className="rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950">See Pricing</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
