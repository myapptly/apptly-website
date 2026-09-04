"use client";

import type { ReactNode } from "react";

const packages = [
  {
    id: "digital-card",
    name: "Digital Business Card",
    fit: "I need a professional online presence",
    price: "$99",
    detail:
      "A polished mobile home for your contact information, hours, directions, branding and essential business details.",
    href: "/checkout?package=digital-card",
  },
  {
    id: "starter",
    name: "Starter Business App",
    fit: "I want customers to connect from their phone",
    price: "$199",
    detail:
      "Your services, photos, social links, QR code, sharing and home-screen app capability in one simple experience.",
    href: "/checkout?package=starter-app",
  },
  {
    id: "business",
    name: "Business App",
    fit: "I need more features and customer interaction",
    price: "$299",
    detail:
      "A fuller business app with expanded content, forms, announcements, reviews, booking or payment links and editable content.",
    href: "/checkout?package=business-app",
  },
  {
    id: "website-app",
    name: "Website + Business App",
    fit: "I want the complete business presence",
    price: "$449",
    detail:
      "A professional website plus an installable business web app, responsive design, basic SEO, custom branding and complete handoff.",
    href: "/checkout?package=website-app",
    featured: true,
  },
];

const projects = [
  {
    name: "Bei Capelli Salon",
    type: "Digital Business Web App",
    image: "/bei-capelli-home.png",
    href: "https://bei-capelli-salon.vercel.app",
    copy:
      "A polished salon experience with pricing, photos, bios, directions and one-tap customer contact.",
  },
  {
    name: "New Hope Baptist Church",
    type: "Church Website + App",
    image: "/new-hope-home.png",
    href: "https://new-hope-baptist-seven.vercel.app",
    copy:
      "Sermons, events, education, photos and secure owner-managed content in one accessible home.",
  },
  {
    name: "Sky-Vue Skateland",
    type: "Small-Business App",
    image: "/sky-vue-home.png",
    href: "https://sky-vue-skateland.vercel.app",
    copy:
      "A mobile-first experience built around an established local brand and its existing online resources.",
  },
  {
    name: "Carolina Vacuums & More",
    type: "Business Website App",
    image: "/carolina-vacuums-home.png",
    href: "https://carolina-vacuums-app.vercel.app",
    copy:
      "Locations, service, products and website resources brought together for customers on the go.",
  },
];

const faqs = [
  {
    question: "What does APPTLY build for small businesses?",
    answer:
      "APPTLY builds professional small-business websites, installable business web apps and digital business cards designed around your brand, customers and goals.",
  },
  {
    question: "How much does an APPTLY website or business app cost?",
    answer:
      "APPTLY uses clear one-time build pricing. Current packages range from $99 for a Digital Business Card to $449 for a Website + Business App package.",
  },
  {
    question: "Does APPTLY charge a required monthly maintenance fee?",
    answer:
      "No. APPTLY does not require a monthly maintenance fee. If a project needs a paid third-party service, that cost is identified before approval.",
  },
  {
    question: "Does APPTLY work with Winston-Salem businesses?",
    answer:
      "Yes. APPTLY is based in Winston-Salem, North Carolina and works with small businesses and organizations in Winston-Salem, the Piedmont Triad and beyond.",
  },
  {
    question: "Can customers add an APPTLY business web app to their phone?",
    answer:
      "Yes. Eligible APPTLY business web apps can be designed so customers can add them to their phone home screen for quick access without a traditional app-store download.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-emerald-400">
      {children}
    </p>
  );
}

export default function HomePage() {
  const handleShare = async () => {
    const shareData = {
      title: "APPTLY",
      text: "Your business. In their pocket.",
      url: "https://www.myapptly.com/",
    };

    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(shareData.url);
      alert("APPTLY link copied!");
    }
  };

  return (
    <main id="top" className="min-h-screen scroll-smooth bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur-xl md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="APPTLY home">
            <img
              src="/apptly-logo.png"
              alt="APPTLY"
              className="h-11 w-11 rounded-xl object-cover"
            />
            <div className="leading-none">
              <div className="text-lg font-black tracking-[0.16em]">APPTLY</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                Built For You.
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#work" className="transition hover:text-emerald-400">Work</a>
            <a href="#services" className="transition hover:text-emerald-400">Services</a>
            <a href="#comparison" className="transition hover:text-emerald-400">Value</a>
            <a href="#process" className="transition hover:text-emerald-400">Process</a>
            <a href="#why" className="transition hover:text-emerald-400">Why APPTLY</a>
            <button onClick={handleShare} className="transition hover:text-emerald-400">Share</button>
          </nav>

          <a
            href="#services"
            className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
          >
            Start Your Project
          </a>
        </div>

        <div className="mx-auto mt-3 flex max-w-7xl justify-center gap-5 overflow-x-auto border-t border-white/5 pt-2 text-xs font-bold text-slate-400 md:hidden">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#comparison">Value</a>
          <a href="#process">Process</a>
          <a href="#why">Why APPTLY</a>
          <button onClick={handleShare} className="whitespace-nowrap">Share</button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-emerald-400/20 px-6 py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-4xl rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <SectionLabel>Winston-Salem web design • business web apps</SectionLabel>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Your Business.<br />
            <span className="text-emerald-400">In Their Pocket.</span>
          </h1>
          <p className="mt-6 text-lg font-black tracking-wide text-emerald-300 md:text-2xl">
            Big-business polish. Small-business pricing.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            <strong className="text-white">Professional doesn&apos;t have to mean expensive.</strong>{" "}
            APPTLY builds affordable small-business websites, business web apps and digital business cards in Winston-Salem, North Carolina, with designs built around your business, customers and brand.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="rounded-xl bg-emerald-400 px-6 py-3.5 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              See What We Build
            </a>
            <a
              href="#services"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-black transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Find Your Fit
            </a>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <strong className="block text-white">One upfront price</strong>
              No mystery agency quote.
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <strong className="block text-white">Done for you</strong>
              No DIY learning curve.
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <strong className="block text-white">Yours to keep</strong>
              Built for your business.
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-28 border-b border-white/10 bg-slate-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>01 — See what we build</SectionLabel>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">Real businesses. Real projects.</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                No stock demos. These are working APPTLY projects built for local small businesses and organizations.
              </p>
            </div>
            <a href="#services" className="font-black text-emerald-400">Find your fit ↓</a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-emerald-400/50"
              >
                <div className="overflow-hidden border-b border-white/10 bg-slate-900 p-3">
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    className="aspect-[16/10] w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-black">{project.name}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{project.copy}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-black text-white transition hover:text-emerald-400"
                  >
                    View Live Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 border-b border-emerald-400/20 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionLabel>02 — What do you need?</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">Choose by what fits your business.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              You do not need to know the technical terminology. Start with what you want your customers to be able to do.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl border p-7 ${
                  pkg.featured ? "border-emerald-400 bg-emerald-400/10" : "border-white/10 bg-slate-900"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-950">
                    Best Value
                  </span>
                )}
                <p className="pr-16 text-sm font-bold leading-6 text-emerald-400">{pkg.fit}</p>
                <h3 className="mt-5 text-xl font-black">{pkg.name}</h3>
                <div className="mt-3 text-4xl font-black">{pkg.price}</div>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">one-time build price</p>
                <p className="mt-5 flex-1 leading-7 text-slate-300">{pkg.detail}</p>
                <a
                  href={pkg.href}
                  className="mt-7 rounded-xl bg-emerald-400 px-4 py-3 text-center font-black text-slate-950 transition hover:bg-emerald-300"
                >
                  Choose {pkg.name}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              Not sure which one fits? Start with the closest match. We can make sure you are in the right package before the project begins.
            </p>
            <a href="#comparison" className="mt-5 inline-block font-black text-emerald-400">See the value ↓</a>
          </div>
        </div>
      </section>

      <section id="comparison" className="scroll-mt-28 border-b border-white/10 bg-slate-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>03 — Professional without the agency-sized price</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">
              Take a look at the work.<br />
              <span className="text-emerald-400">Then take a look at the price.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Professional web design commonly runs into the thousands. APPTLY was created to give small businesses a polished, professionally built option at a much smaller one-time build price.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
            <div className="grid grid-cols-[1.25fr_1fr_1fr] border-b border-white/10 bg-white/5 px-4 py-4 text-xs font-black uppercase tracking-wider sm:px-6">
              <div>What you&apos;re comparing</div>
              <div className="text-center text-slate-400">Professional market</div>
              <div className="text-center text-emerald-400">APPTLY</div>
            </div>
            {[
              ["Professionally designed website", "Often $1,500+", "From $199"],
              ["Website + business web app", "Often thousands", "$449"],
              ["Pricing before you begin", "Often quote-based", "Clear upfront price"],
              ["APPTLY monthly maintenance fee", "May be recurring", "$0"],
              ["Project handoff", "Varies", "Yours to keep"],
            ].map(([label, market, apptly]) => (
              <div
                key={label}
                className="grid grid-cols-[1.25fr_1fr_1fr] items-center border-b border-white/10 px-4 py-5 text-sm last:border-b-0 sm:px-6 sm:text-base"
              >
                <div className="font-bold text-white">{label}</div>
                <div className="text-center text-slate-400">{market}</div>
                <div className="text-center font-black text-emerald-400">{apptly}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-5 text-slate-500">
            Market pricing varies by provider, project size, features and ongoing services. Comparison is intended as general context for professionally designed small-business websites; third-party domain, hosting or service costs may apply when needed.
          </p>
          <div className="mt-7 text-center">
            <a href="#process" className="font-black text-emerald-400">See how APPTLY works ↓</a>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 border-b border-emerald-400/20 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>04 — How APPTLY works</SectionLabel>
          <h2 className="text-3xl font-black md:text-5xl">From idea to launch. Without the runaround.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Tell Us", "Tell us about your business, your customers and what you need."],
              ["02", "We Build", "APPTLY designs and builds the project for you."],
              ["03", "You Review", "You see the finished experience and request the included revisions."],
              ["04", "We Launch", "We help launch it, show you how it works and hand it over."],
            ].map(([n, t, c]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <span className="text-sm font-black text-emerald-400">{n}</span>
                <h3 className="mt-6 text-xl font-black">{t}</h3>
                <p className="mt-3 leading-7 text-slate-300">{c}</p>
              </div>
            ))}
          </div>
          <a href="#why" className="mt-8 inline-block font-black text-emerald-400">Why APPTLY? ↓</a>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 border-b border-white/10 bg-slate-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>05 — Why APPTLY?</SectionLabel>
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">Built for small business. Not built to trap you.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                APPTLY keeps the process understandable: clear packages, practical technology and a project built around your brand rather than forcing your business into a generic template.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Built For You.", "We do the building. You make the business decisions."],
                ["Clear Pricing.", "Know the APPTLY build price before you start."],
                ["Mobile First.", "Designed for the screen your customers carry everywhere."],
                ["No Surprise APPTLY Fees.", "If a project needs a paid third-party service, we identify it before approval."],
                ["Owner Handoff.", "Your domain and business accounts stay under your control."],
                ["Human Service.", "A straightforward relationship with the person building your project."],
              ].map(([t, c]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                  <h3 className="font-black text-emerald-400">{t}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-emerald-400/20 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-12">
          <SectionLabel>06 — Winston-Salem & the Piedmont Triad</SectionLabel>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">Local small-business web design, built to be practical.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                APPTLY is based in Winston-Salem, NC and builds affordable websites, business web apps and digital business cards for small businesses and organizations throughout the Piedmont Triad and beyond. Whether you run a salon, church, retail shop, service business, restaurant or local organization, the goal is the same: make it easier for customers to find you, trust you and take action.
              </p>
              <a
                href="/winston-salem-web-design"
                className="mt-7 inline-flex rounded-xl bg-emerald-400 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-300"
              >
                Winston-Salem Web Design →
              </a>
            </div>
            <div className="grid gap-3 text-sm text-slate-300">
              <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
                <strong className="block text-lg text-white">Small-Business Websites</strong>
                Professional, mobile-friendly websites built around your services and customers.
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
                <strong className="block text-lg text-white">Business Web Apps</strong>
                Installable, mobile-first experiences that keep your business one tap away.
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
                <strong className="block text-lg text-white">Digital Business Cards</strong>
                A polished, affordable way to put your essential business information in one place.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>07 — Frequently asked questions</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">Straight answers before you start.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <h3 className="text-xl font-black text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-400/30 bg-slate-950 p-8 shadow-2xl shadow-emerald-950/20 md:p-14">
          <SectionLabel>Ready when you are</SectionLabel>
          <h2 className="text-3xl font-black md:text-5xl">Put your business in their pocket.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Choose the package that best fits what you need and begin your APPTLY project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#services" className="rounded-xl bg-emerald-400 px-6 py-3.5 font-black text-slate-950">
              Start Your Project
            </a>
            <button onClick={handleShare} className="rounded-xl border border-white/20 px-6 py-3.5 font-black text-white">
              Share APPTLY
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <strong className="text-white">APPTLY</strong>
            <span className="ml-2 text-emerald-400">Built For You.</span>
            <p className="mt-1">© 2026 APPTLY. Professional websites and business web apps for small businesses.</p>
          </div>
          <div className="flex gap-5">
            <a href="/winston-salem-web-design" className="hover:text-emerald-400">Winston-Salem Web Design</a>
            <a href="/terms" className="hover:text-emerald-400">Terms</a>
            <a href="/privacy" className="hover:text-emerald-400">Privacy</a>
            <a href="#top" className="hover:text-emerald-400">Top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
