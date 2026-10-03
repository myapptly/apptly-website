import { Eyebrow, PageShell, ReviewSpot } from "../../components/MarketingShell";

const packages = [
  {
    name: "Digital Business Card",
    price: "$99",
    promise: "Know me & contact me.",
    copy: "Everything essential about you or your business on one phone-sized page.",
    href: "/checkout?package=digital-card",
    included: [
      "One cellphone-size mobile page",
      "Name and business name/title",
      "One photo or logo",
      "Short description of what you do",
      "Phone with Call and Text actions",
      "Address with Directions",
      "Business hours",
      "Website or social link, when applicable",
      "Save Contact and Share, when appropriate",
    ],
    value: "A focused, professionally built mobile presence without paying for a larger website or app you do not need.",
  },
  {
    name: "Starter Business App",
    price: "$199",
    promise: "Explore my business.",
    copy: "A simple installable business app that lets customers learn more and take the next step.",
    href: "/checkout?package=starter-app",
    included: [
      "Everything appropriate from the Digital Business Card",
      "Services with descriptions",
      "About the business",
      "Multiple photos or a small gallery",
      "Social media links",
      "QR sharing",
      "Home-screen app installation",
      "Simple app navigation",
      "One primary customer action such as Book, Request a Quote, Order or Contact",
    ],
    value: "More than a digital card: customers can explore your business in an installable app without the cost and complexity of a traditional custom app project.",
  },
  {
    name: "Business App",
    price: "$299",
    promise: "Do business with me.",
    copy: "An expanded business app with interactive tools that help turn visitors into customers.",
    href: "/checkout?package=business-app",
    included: [
      "Everything appropriate from the Starter Business App",
      "Expanded services and business content",
      "Customer reviews or testimonials",
      "Contact, quote, service-request or inquiry forms",
      "Booking or appointment links",
      "Payment or order links, when appropriate",
      "Promotions, specials or announcements",
      "Expanded gallery capability",
      "Staff or service categories, when needed",
      "More customized calls-to-action and designated editable content, when practical",
    ],
    value: "Interactive business functionality at a clear one-time build price, without automatically committing to the larger scope of a full website project.",
  },
  {
    name: "Website + Business App",
    price: "$449",
    promise: "My complete online presence.",
    copy: "A professional small-business website plus an installable Business App.",
    href: "/checkout?package=website-app",
    included: [
      "Everything appropriate from the Business App",
      "Professional multi-page website — up to 5 core pages",
      "Responsive desktop, tablet and mobile design",
      "Installable Business App experience",
      "Business branding, supplied photos and content",
      "Contact or inquiry forms",
      "Maps, directions, phone, text and social connections",
      "Reviews or testimonials",
      "Booking or payment links, when applicable",
      "Basic on-page SEO: titles, descriptions, headings and search-friendly structure",
      "Domain connection and launch assistance",
      "QR sharing and project handoff",
    ],
    value: "A complete website-and-app package at one clear build price. Traditional agency projects can involve larger project fees and ongoing service charges; APPTLY keeps the scope focused and the price transparent.",
    note: "Designed for professional informational and service-business websites. E-commerce stores, large product catalogs, custom databases, complex integrations, extensive custom functionality or unusually large sites require a separate quote.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="border-b border-white/10 px-6 py-9 md:py-11">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Services & Pricing</Eyebrow>
          <h1 className="text-4xl font-black leading-tight md:text-5xl xl:whitespace-nowrap">
            Clear choices. <span className="text-emerald-400">Clear one-time prices.</span>
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Start with what you want customers to be able to do. APPTLY handles the technical part.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <article
              key={pkg.name}
              className={`flex flex-col rounded-3xl border p-6 ${
                i === 3 ? "border-emerald-400 bg-emerald-400/10" : "border-white/10 bg-slate-900"
              }`}
            >
              <h2 className="text-lg font-black md:text-xl">{pkg.name}</h2>
              <div className="mt-2 text-4xl font-black">{pkg.price}</div>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">one-time build price</p>
              <p className="mt-4 font-black text-emerald-400">{pkg.promise}</p>
              <p className="mt-2 flex-1 text-[15px] leading-6 text-slate-300 md:text-base">{pkg.copy}</p>

              <details className="mt-5 rounded-xl border border-white/10 bg-slate-950/50 p-4">
                <summary className="cursor-pointer font-black text-emerald-400">See What&apos;s Included</summary>
                <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-300">
                  {pkg.included.map((item) => <li key={item}>✓ {item}</li>)}
                </ul>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <h3 className="font-black text-white">The APPTLY Value</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{pkg.value}</p>
                </div>
                {pkg.note && <p className="mt-4 text-xs leading-5 text-slate-400">{pkg.note}</p>}
              </details>

              <a href={pkg.href} className="mt-5 rounded-xl bg-emerald-400 px-4 py-3 text-center font-black text-slate-950 transition hover:bg-emerald-300">
                Choose This Package
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-white/10 bg-slate-900 p-6 text-sm leading-6 text-slate-300">
          <h2 className="font-black text-white">Domains & third-party costs</h2>
          <p className="mt-2">
            Use a domain you already own, or APPTLY can obtain one for you at additional cost. Future domain renewals are your responsibility. APPTLY&apos;s listed prices are one-time build prices. Third-party costs such as domain registration or renewal, hosting, payment processing, premium services or other outside providers are separate and remain the customer&apos;s responsibility.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-10 md:py-12">
        <div className="mx-auto max-w-4xl">
          <ReviewSpot
            source="Google Gemini · Independent evaluation"
            score="9/10 value & pricing"
            quote="Highly recommended for local small businesses seeking an affordable digital upgrade without monthly recurring fees."
            note="Gemini highlighted APPTLY's one-time pricing and straightforward done-for-you model."
          />
        </div>
      </section>

      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>How it works</Eyebrow>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["1", "Tell Us", "Tell us about your business and what customers need."],
              ["2", "We Build", "APPTLY designs and builds it for you."],
              ["3", "You Review", "Review the finished experience and request included revisions."],
              ["4", "We Launch", "We help launch it and hand it over."],
            ].map(([n, t, c]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <span className="font-black text-emerald-400">{n}</span>
                <h3 className="mt-3 text-xl font-black">{t}</h3>
                <p className="mt-2 leading-6 text-slate-300">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
