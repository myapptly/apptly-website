import { Eyebrow, PageShell, ReviewSpot } from "../../components/MarketingShell";

const projects = [
  {
    name: "Santa Larry",
    type: "Mobile-First Business App",
    image: "https://app.goes2u.com/santa%20cover.png",
    href: "https://app.goes2u.com",
    copy: "A branded Santa experience with booking tools, shareable QR access, public events, gallery content and a magical interactive Letters to Santa feature.",
  },
  {
    name: "Bei Capelli Salon",
    type: "Digital Business Web App",
    image: "/bei-capelli-home.png",
    href: "https://bei-capelli-salon.vercel.app",
    copy: "A polished salon experience with pricing, photos, bios, directions and one-tap customer contact.",
  },
  {
    name: "New Hope Baptist Church",
    type: "Church Website + App",
    image: "/new-hope-home.png",
    href: "https://new-hope-baptist-seven.vercel.app",
    copy: "Sermons, events, education, photos and secure owner-managed content in one accessible home.",
  },
  {
    name: "Sky-Vue Skateland",
    type: "Small-Business App",
    image: "/sky-vue-home.png",
    href: "https://sky-vue-skateland.vercel.app",
    copy: "A mobile-first experience built around an established local brand, current events and owner-managed content.",
  },
  {
    name: "Carolina Vacuums & More",
    type: "Business Website App",
    image: "/carolina-vacuums-home.png",
    href: "https://carolina-vacuums-app.vercel.app",
    copy: "Locations, service, products and website resources brought together for customers on the go.",
  },
];

export default function WorkPage() {
  return (
    <PageShell>
      <section className="border-b border-white/10 px-6 py-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Our Work</Eyebrow>
          <h1 className="text-3xl font-black tracking-tight md:whitespace-nowrap md:text-5xl">
            Real businesses. <span className="text-emerald-400">Real working projects.</span>
          </h1>
          <p className="mt-4 max-w-5xl text-base leading-7 text-slate-300 md:text-lg">
            No stock demos. Explore APPTLY projects built for local businesses and organizations, then open the live experiences yourself.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl shadow-black/10"
            >
              <div className="bg-slate-950 p-3">
                <img
                  src={project.image}
                  alt={`${project.name} APPTLY project`}
                  className="aspect-[16/6.2] w-full rounded-2xl object-cover object-top"
                />
              </div>

              <div className="px-7 pb-6 pt-4">
                <h2 className="text-2xl font-black text-white">{project.name}</h2>
                <p className="mt-2 leading-6 text-slate-300">{project.copy}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl border border-emerald-400 px-5 py-2.5 font-black text-emerald-400 transition hover:bg-emerald-400 hover:text-slate-950"
                  >
                    View Live Project ↗
                  </a>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
                    {project.type}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <ReviewSpot
            source="Claude · Independent evaluation"
            score="8/10 product offering"
            quote="Real, functioning delivered products — not just mockups."
            note="Claude independently inspected a live APPTLY project and highlighted the visible, working output while also noting that APPTLY is still building its track record."
          />
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-black">See something close to what you need?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          APPTLY builds around your business rather than forcing you into somebody else&apos;s template.
        </p>
        <a
          href="/services"
          className="mt-7 inline-flex rounded-xl bg-emerald-400 px-6 py-3 font-black text-slate-950"
        >
          See Services & Pricing →
        </a>
      </section>
    </PageShell>
  );
}
