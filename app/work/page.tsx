import { Eyebrow, PageShell, ReviewSpot } from "../../components/MarketingShell";

const projects = [
  { name: "Bei Capelli Salon", type: "Digital Business Web App", image: "/bei-capelli-home.png", href: "https://bei-capelli-salon.vercel.app", copy: "A polished salon experience with pricing, photos, bios, directions and one-tap customer contact." },
  { name: "New Hope Baptist Church", type: "Church Website + App", image: "/new-hope-home.png", href: "https://new-hope-baptist-seven.vercel.app", copy: "Sermons, events, education, photos and secure owner-managed content in one accessible home." },
  { name: "Sky-Vue Skateland", type: "Small-Business App", image: "/sky-vue-home.png", href: "https://sky-vue-skateland.vercel.app", copy: "A mobile-first experience built around an established local brand, current events and owner-managed content." },
  { name: "Carolina Vacuums & More", type: "Business Website App", image: "/carolina-vacuums-home.png", href: "https://carolina-vacuums-app.vercel.app", copy: "Locations, service, products and website resources brought together for customers on the go." },
];

export default function WorkPage() {
  return (
    <PageShell>
      <section className="border-b border-white/10 px-6 py-16 md:py-20"><div className="mx-auto max-w-7xl"><Eyebrow>Our Work</Eyebrow><h1 className="max-w-4xl text-4xl font-black md:text-6xl">Real businesses. <span className="text-emerald-400">Real working projects.</span></h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">No stock demos. Explore APPTLY projects built for local businesses and organizations, then open the live experiences yourself.</p></div></section>
      <section className="px-6 py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">{projects.map((p) => <article key={p.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900"><div className="border-b border-white/10 bg-slate-950 p-3"><img src={p.image} alt={`${p.name} APPTLY project`} className="aspect-[16/10] w-full rounded-2xl object-cover object-top" /></div><div className="p-7"><p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">{p.type}</p><h2 className="mt-2 text-2xl font-black">{p.name}</h2><p className="mt-3 leading-7 text-slate-300">{p.copy}</p><a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-black text-emerald-400">View Live Project →</a></div></article>)}</div></section>
      <section className="border-y border-white/10 bg-slate-900 px-6 py-14"><div className="mx-auto max-w-4xl"><ReviewSpot source="Claude · Independent evaluation" score="8/10 product offering" quote="Real, functioning delivered products — not just mockups." note="Claude independently inspected a live APPTLY project and highlighted the visible, working output while also noting that APPTLY is still building its track record." /></div></section>
      <section className="px-6 py-16 text-center"><h2 className="text-3xl font-black">See something close to what you need?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">APPTLY builds around your business rather than forcing you into somebody else&apos;s template.</p><a href="/services" className="mt-7 inline-flex rounded-xl bg-emerald-400 px-6 py-3 font-black text-slate-950">See Services & Pricing →</a></section>
    </PageShell>
  );
}
