import { Eyebrow, PageShell, ReviewSpot } from "../../components/MarketingShell";

const packages = [
  ["Digital Business Card", "$99", "A professional mobile home for contact information, hours, directions, branding and essential details.", "/checkout?package=digital-card"],
  ["Starter Business App", "$199", "Services, photos, social links, QR sharing and home-screen app capability in one simple experience.", "/checkout?package=starter-app"],
  ["Business App", "$299", "Expanded content, forms, announcements, reviews, booking or payment links and editable content.", "/checkout?package=business-app"],
  ["Website + Business App", "$449", "A professional website plus installable business web app, responsive design, basic SEO, branding and handoff.", "/checkout?package=website-app"],
];

export default function ServicesPage() {
  return <PageShell>
    <section className="border-b border-white/10 px-6 py-16 md:py-20"><div className="mx-auto max-w-7xl"><Eyebrow>Services & Pricing</Eyebrow><h1 className="max-w-4xl text-4xl font-black md:text-6xl">Clear choices. <span className="text-emerald-400">Clear one-time prices.</span></h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Start with what you want customers to be able to do. APPTLY handles the technical part.</p></div></section>
    <section className="px-6 py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">{packages.map(([name,price,copy,href],i)=><article key={name} className={`flex flex-col rounded-3xl border p-7 ${i===3?"border-emerald-400 bg-emerald-400/10":"border-white/10 bg-slate-900"}`}><h2 className="text-xl font-black">{name}</h2><div className="mt-3 text-4xl font-black">{price}</div><p className="mt-1 text-xs uppercase tracking-wider text-slate-500">one-time build price</p><p className="mt-5 flex-1 leading-7 text-slate-300">{copy}</p><a href={href} className="mt-7 rounded-xl bg-emerald-400 px-4 py-3 text-center font-black text-slate-950">Choose This Package</a></article>)}</div></section>
    <section className="border-y border-white/10 bg-slate-900 px-6 py-14"><div className="mx-auto max-w-4xl"><ReviewSpot source="Google Gemini · Independent evaluation" score="9/10 value & pricing" quote="Highly recommended for local small businesses seeking an affordable digital upgrade without monthly recurring fees." note="Gemini highlighted APPTLY's one-time pricing and straightforward done-for-you model." /></div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl"><Eyebrow>How it works</Eyebrow><div className="grid gap-4 md:grid-cols-4">{[["1","Tell Us","Tell us about your business and what customers need."],["2","We Build","APPTLY designs and builds it for you."],["3","You Review","Review the finished experience and request included revisions."],["4","We Launch","We help launch it and hand it over."]].map(([n,t,c])=><div key={n} className="rounded-2xl border border-white/10 bg-slate-900 p-6"><span className="font-black text-emerald-400">{n}</span><h3 className="mt-5 text-xl font-black">{t}</h3><p className="mt-2 leading-7 text-slate-300">{c}</p></div>)}</div></div></section>
  </PageShell>;
}
