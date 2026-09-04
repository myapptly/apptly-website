import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winston-Salem Web Design for Small Businesses | APPTLY",
  description:
    "Affordable small-business web design in Winston-Salem, NC. APPTLY builds professional websites, business web apps and digital business cards with clear one-time pricing.",
  alternates: {
    canonical: "https://www.myapptly.com/winston-salem-web-design",
  },
  openGraph: {
    title: "Winston-Salem Web Design for Small Businesses | APPTLY",
    description:
      "Professional websites and business web apps for Winston-Salem small businesses, with clear one-time pricing and no required monthly APPTLY maintenance fee.",
    url: "https://www.myapptly.com/winston-salem-web-design",
    type: "website",
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.myapptly.com/winston-salem-web-design#service",
  name: "Winston-Salem Small Business Web Design",
  serviceType: "Small Business Website Design and Business Web Apps",
  provider: {
    "@id": "https://www.myapptly.com/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "Winston-Salem",
    containedInPlace: {
      "@type": "State",
      name: "North Carolina",
    },
  },
  url: "https://www.myapptly.com/winston-salem-web-design",
};

const services = [
  {
    title: "Small-Business Website Design",
    copy:
      "A professional, mobile-friendly website built around your services, brand, contact information and the actions you want customers to take.",
  },
  {
    title: "Business Web Apps",
    copy:
      "A mobile-first business experience that can bring together services, photos, forms, reviews, announcements, booking, payments and other customer tools.",
  },
  {
    title: "Digital Business Cards",
    copy:
      "A polished, affordable mobile page for your business details, contact links, directions, social profiles, hours and branding.",
  },
];

const faqs = [
  {
    q: "How much does a small-business website cost with APPTLY?",
    a: "APPTLY uses clear one-time build pricing. Current packages range from $99 for a Digital Business Card to $449 for a Website + Business App package.",
  },
  {
    q: "Do I need to know anything about coding or website design?",
    a: "No. APPTLY handles the design and build. You provide the business information, preferences and decisions that make the finished project yours.",
  },
  {
    q: "Does APPTLY charge a monthly maintenance fee?",
    a: "APPTLY does not require a monthly maintenance fee. If your project needs a paid third-party service, that cost is identified before approval.",
  },
  {
    q: "Can APPTLY work with businesses outside Winston-Salem?",
    a: "Yes. APPTLY is based in Winston-Salem and works with businesses and organizations throughout the Piedmont Triad and beyond.",
  },
];

export default function WinstonSalemWebDesignPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />

      <header className="border-b border-white/10 bg-slate-950 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3" aria-label="APPTLY home">
            <img src="/apptly-logo.png" alt="APPTLY" className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <div className="font-black tracking-[0.16em]">APPTLY</div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">Built For You.</div>
            </div>
          </a>
          <a
            href="/#services"
            className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
          >
            View Packages
          </a>
        </div>
      </header>

      <section className="border-b border-emerald-400/20 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-400">
            Winston-Salem, North Carolina
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Small-Business Web Design in Winston-Salem
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            APPTLY builds affordable professional websites, business web apps and digital business cards for Winston-Salem small businesses and organizations. The process is straightforward, the pricing is clear and the finished project is built around your business rather than a generic template.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/#work"
              className="rounded-xl border border-white/20 px-6 py-3.5 font-black text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              See Our Work
            </a>
            <a
              href="/#services"
              className="rounded-xl bg-emerald-400 px-6 py-3.5 font-black text-slate-950 transition hover:bg-emerald-300"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-400">What APPTLY builds</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">A practical online presence for the way customers use the web now.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Most customers are looking from a phone. APPTLY focuses on fast, clear, mobile-friendly experiences that make it easy to understand what you do and take the next step.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <h3 className="text-xl font-black text-emerald-400">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-400">Who we build for</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Local businesses that need a professional presence without an agency-sized bill.</h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>
              APPTLY projects can fit salons, churches, restaurants, retail stores, service businesses, contractors, local organizations and other small businesses that need customers to find information and take action quickly.
            </p>
            <p>
              Common features include click-to-call and text links, directions, hours, services, pricing, photo galleries, forms, reviews, announcements, booking links, payment links, QR codes and installable home-screen access.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-400">Clear pricing</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Know the APPTLY build price before you begin.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              APPTLY packages currently range from $99 to $449 depending on what your business needs. There is no required monthly APPTLY maintenance fee.
            </p>
          </div>
          <div className="mt-9 text-center">
            <a
              href="/#services"
              className="inline-flex rounded-xl bg-emerald-400 px-6 py-3.5 font-black text-slate-950 transition hover:bg-emerald-300"
            >
              Compare APPTLY Packages →
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-400">Frequently asked questions</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">What Winston-Salem business owners usually want to know.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-xl font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-400/20 bg-slate-900 px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-400">Ready when you are</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">Give your Winston-Salem business a better home online.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            See the APPTLY packages, choose the closest fit and start with a clear one-time price.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/#services"
              className="rounded-xl bg-emerald-400 px-6 py-3.5 font-black text-slate-950 transition hover:bg-emerald-300"
            >
              View Packages
            </a>
            <a
              href="/start-your-project"
              className="rounded-xl border border-white/20 px-6 py-3.5 font-black text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Tell Us About Your Business
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 APPTLY. Winston-Salem web design and business web apps for small businesses.</p>
        <a href="/" className="mt-2 inline-block font-bold text-emerald-400">← Back to APPTLY</a>
      </footer>
    </main>
  );
}
