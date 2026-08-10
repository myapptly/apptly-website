"use client"

export default function HomePage() {
  const handleShare = async () => {
    const shareData = {
      title: "APPTLY",
      text: "Affordable custom websites and apps built for your business.",
      url: "https://myapptly.com",
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert("APPTLY link copied!");
    }
  }; 

  return (
    <main id="top" className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="border-b border-slate-800 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-emerald-400">APPTLY</h1>
            <p className="text-sm text-slate-400">
              Built For You. Managed By You.
            </p>
          </div>

 <div className="flex gap-3">
  <a
    href="#starter"
    className="rounded-lg bg-emerald-500 px-5 py-3 font-bold text-white"
  >
    See Our Apps
  </a>

  <button
    onClick={handleShare}
    className="rounded-lg border border-emerald-500 px-5 py-3 font-bold text-emerald-400"
  >
    Share APPTLY
  </button>
</div> 
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-400">
            Affordable Apps for Small Business
          </p>

          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
  Put Your Business
  <br />
  <span className="text-emerald-400">
    In Your Customers&apos; Pocket.
  </span>
</h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            APPTLY builds simple, professional business apps that make it easy
            for customers to find your services, contact you, get directions
            and stay connected.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
  <a
    href="#digital-card"
    className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950"
  >
    $99 Digital Card
  </a>

  <a
    href="#starter"
    className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950"
  >
    $199 Starter App
  </a>

  <a
    href="#business"
    className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950"
  >
    $299 Business App
  </a>

  <a
    href="#website-app"
    className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950"
  >
    $449 Website + App
  </a>
</div>

          <p className="mt-5 text-sm text-slate-400">
            One-time build price. No required monthly maintenance fee from APPTLY.
          </p>
        </div>
      </section>

{/* DIGITAL BUSINESS CARD */}
      <section id="digital-card" className="bg-slate-950 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-8 md:p-12">

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Digital Business Card
            </p>

            <h2 className="text-3xl font-bold">
              Digital Business Card
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$99</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-6 text-lg text-slate-300">
              A simple, professional mobile presence that puts your essential
              business information one tap away.
            </p>

            <ul className="space-y-3 text-slate-200">
              <li>✓ Business name and branding</li>
              <li>✓ Tap-to-call phone button</li>
              <li>✓ Directions and map link</li>
              <li>✓ One business photo</li>
              <li>✓ Custom app icon</li>
              <li>✓ Email link</li>
              <li>✓ Business hours</li>
            </ul>

          <a
  href="https://buy.stripe.com/4gM00j6U7dRI8Dpdrdc3m0b"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-bold text-slate-950"
>
  Buy Digital Business Card — $99
</a> 

          </div>
        </div>
      </section> 

      {/* STARTER PACKAGE */}
      <section id="starter" className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-950 p-8 md:p-12">

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Starter
            </p>

            <h2 className="text-3xl font-bold">
              Starter Business App
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$199</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-8 text-lg text-slate-300">
              Everything your customers need to connect with your business,
              right from their phone.
            </p>

            <div className="grid gap-4 text-lg sm:grid-cols-2">
              <p>✓ Business name & branding</p>
              <p>✓ About your business</p>
              <p>✓ Up to 6 services</p>
              <p>✓ Business hours</p>
              <p>✓ Tap-to-call button</p>
              <p>✓ Email button</p>
              <p>✓ Directions & map link</p>
              <p>✓ Social media links</p>
              <p>✓ Up to 5 photos</p>
              <p>✓ Share button</p>
              <p>✓ Home-screen app capability</p>
              <p>✓ Custom app icon</p>
              <p>✓ Business QR code</p>
              <p>✓ Mobile & desktop friendly</p>
            </div>

            <div className="mt-10 rounded-xl bg-slate-900 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-emerald-400">
                Built For You. Managed By You.
              </h3>
              <p className="text-slate-300">
                We build your app, show you how it works and turn it over to you.
                No required monthly APPTLY maintenance plan.
              </p>
            </div>
            <a 
            href="https://buy.stripe.com/28EdR9bancNE3j50Erc3m0c" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block rounded-xl bg-emerald-500 
            px-8 py-4 text-lg font-bold text-slate-950"
            >
              Buy Starter App — $199
            </a> 

          </div>
        </div>
      </section>

      {/* BUSINESS PACKAGE */}
      <section id= "business" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-8 md:p-12">

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Business
            </p>

            <h2 className="text-3xl font-bold">
              Business App
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$299</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-4 text-lg text-slate-300">
              A more complete business app for companies that need more
              content, customer interaction and owner-controlled updates.
            </p>

            <p className="mb-8 font-semibold text-emerald-400">
              Everything in the $199 Starter App, plus:
            </p>

            <div className="grid gap-4 text-lg sm:grid-cols-2">
              <p>✓ Multiple sections or pages</p>
              <p>✓ Expanded services</p>
              <p>✓ Expanded photo gallery</p>
              <p>✓ Customer contact/request form</p>
              <p>✓ Specials & announcements</p>
              <p>✓ Testimonials & reviews</p>
              <p>✓ Frequently asked questions</p>
              <p>✓ Booking or payment links</p>
              <p>✓ Enhanced custom branding</p>
              <p>✓ Owner-editable content</p>
              <p>✓ One revision before handoff</p>
              <p>✓ Complete owner handoff</p>
            </div>

            <div className="mt-10 rounded-xl bg-slate-950 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-emerald-400">
                More Capability. Still Yours.
              </h3>
              <p className="text-slate-300">
                Keep important business information current yourself without
                paying APPTLY a required monthly maintenance fee.
              </p>
            </div>
          <a
            href="https://buy.stripe.com/8x2eVd92f6pgbPBevhc3m0e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-500 
            px-8 py-4 text-lg font-bold text-slate-950"
            >
              Buy Business App — $299
          </a> 

          </div>
        </div>
      </section>
      {/* BUSINESS PLUS PACKAGE */}
      <section id="website-app" className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-950 p-8 md:p-12">

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Business Plus
            </p>

            <h2 className="text-3xl font-bold">
              Website + Business App
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$449</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-4 text-lg text-slate-300">
              A complete business presence with both a professional website-style
              experience and an installable app for your customers.
            </p>

            <p className="mb-8 font-semibold text-emerald-400">
              Everything in the $299 Business App, plus:
            </p>

            <div className="grid gap-4 text-lg sm:grid-cols-2">
              <p>✓ Website + installable web app</p>
              <p>✓ Full multi-page or multi-section design</p>
              <p>✓ Homepage, About, Services & Contact</p>
              <p>✓ Expanded services or products</p>
              <p>✓ Larger gallery or portfolio</p>
              <p>✓ Owner-editable changing content</p>
              <p>✓ Contact/request forms</p>
              <p>✓ Testimonials & reviews</p>
              <p>✓ Frequently asked questions</p>
              <p>✓ Booking, ordering or payment links</p>
              <p>✓ Custom app icon & QR code</p>
              <p>✓ Basic search-engine setup</p>
              <p>✓ Enhanced desktop design</p>
              <p>✓ Mobile-first responsive design</p>
              <p>✓ Up to 2 revisions before handoff</p>
              <p>✓ Complete owner handoff</p>
            </div>

            <div className="mt-10 rounded-xl bg-slate-900 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-emerald-400">
                Your Website. Your App. Your Business.
              </h3>
              <p className="text-slate-300">
                APPTLY builds the complete package, shows you how to manage it
                and turns it over to you.
              </p>
            </div>
          <a
            href="https://buy.stripe.com/7sY28rdiv3d43j5af1c3m0d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-500 
          px-8 py-4 text-lg font-bold text-slate-950"
          >
           Buy Website + Business App — $449
          </a>  

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
  <div className="rounded-2xl border border-emerald-500/30 bg-slate-900 p-8">
    <h2 className="text-3xl font-bold text-white">
      No Surprise App Fees
    </h2>

    <p className="mt-4 text-lg text-slate-300">
      APPTLY is designed to keep ongoing app costs as low as possible.
      For standard small-business apps, our goal is $0 in monthly APPTLY
      hosting or maintenance fees.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-3">
      <div>
        <h3 className="font-bold text-emerald-400">Standard Apps</h3>
        <p className="mt-2 text-slate-300">
          Simple business apps can often operate with no additional monthly
          app cost.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-emerald-400">Interactive Apps</h3>
        <p className="mt-2 text-slate-300">
          Apps with features such as dashboards, databases, or photo uploads
          are built using no-cost services whenever practical.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-emerald-400">Advanced Apps</h3>
        <p className="mt-2 text-slate-300">
          If your project requires a paid third-party service, heavy usage,
          e-commerce, or specialized hosting, we will identify that before
          you approve the project.
        </p>
      </div>
    </div>

    <p className="mt-8 font-semibold text-white">
      You will never be surprised by an APPTLY-related charge.
    </p>

    <p className="mt-2 text-sm text-slate-400">
      Existing expenses such as your domain name, website hosting, payment
      processing, or other third-party services remain separate.
    </p>
  </div>
</section>

      {/* OUR WORK */}
<section id="work" className="bg-slate-950 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
        Our Work
      </p>

      <h2 className="text-3xl font-extrabold md:text-5xl">
        Don&apos;t Just Take Our Word for It.
        <br />
        <span className="text-emerald-400">See What We&apos;ve Built.</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
        Real projects built for real businesses and organizations.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-6">
        <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
          APPTLY
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          Business Website + App
        </h3>

        <img
        src="/apptly-home.png"
        alt="APPTLY website and app homepage"
        className="mb-5 w-full rounded-xl border border-slate-700"
      /> 

        <p className="text-slate-300">
          A mobile-first business website and installable app with custom
          branding, service packages, responsive design and secure Stripe
          purchasing.
        </p>
      
        <a
          href="#top"
          className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950"
        >
        View APPTLY
      </a> 
      </div>

      <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-6">
        <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
          New Hope Baptist Church
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          Church Website + App
        </h3>

        <img
          src="/new-hope-home.png"
          alt="New Hope Baptist Church website and app homepage"
          className="mb-5 w-full rounded-xl border border-slate-700"
        /> 

        <p className="text-slate-300">
          A custom church experience featuring sermons, special events,
          Bible College information, photos and secure owner-managed content.
        </p>
     
        <a
  href="https://new-hope-baptist-seven.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950"
>
  View New Hope Project
</a> 
      </div>

      <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-6">
        <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
          Sky-Vue Skateland
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          Small-Business App
        </h3>

        <img
          src="/sky-vue-home.png"
          alt="Sky-Vue Skateland business app homepage"
          className="mb-5 w-full rounded-xl border border-slate-700"
        />

        <p className="text-slate-300">
          A custom business app designed around an established local brand,
          giving customers quick access to business information, online
          resources and existing website content.
        </p>

        <a
          href="https://sky-vue-skateland.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950"
        >
          View Sky-Vue Project
        </a> 
     
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-sm text-slate-400">
        <p>© 2026 APPTLY. Affordable websites and apps for small businesses.</p>
      </footer>

    </main>
  );
} 

