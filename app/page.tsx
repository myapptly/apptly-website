export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="border-b border-slate-800 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-emerald-400">APPTLY</h1>
            <p className="text-sm text-slate-400">
              Built For You. Managed By You.
            </p>
          </div>

          <a
            href="#starter"
            className="rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950"
          >
            See Our Apps
          </a>
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

          <a
            href="#starter"
            className="inline-block rounded-xl bg-emerald-500 px-8 py-4 text-lg font-bold text-slate-950"
          >
            Apps Starting at $149
          </a>

          <p className="mt-5 text-sm text-slate-400">
            One-time build price. No required monthly maintenance fee from APPTLY.
          </p>
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
              <span className="text-6xl font-extrabold">$149</span>
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
            href="https://buy.stripe.com/8x2eVd5Q3dRIg5R1Ivc3m08" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block rounded-xl bg-emerald-500 
            px-8 py-4 text-lg font-bold text-slate-950"
            >
              Buy Starter App — $149
            </a> 

          </div>
        </div>
      </section>

      {/* BUSINESS PACKAGE */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-8 md:p-12">

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Business
            </p>

            <h2 className="text-3xl font-bold">
              Business App
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$249</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-4 text-lg text-slate-300">
              A more complete business app for companies that need more
              content, customer interaction and owner-controlled updates.
            </p>

            <p className="mb-8 font-semibold text-emerald-400">
              Everything in the $149 Starter App, plus:
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
            href="https://buy.stripe.com/28E00ja6jeVM8Dp3QDc3m09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-500 
            px-8 py-4 text-lg font-bold text-slate-950"
            >
              Buy Enhanced Business App — $249
          </a> 

          </div>
        </div>
      </section>
      {/* BUSINESS PLUS PACKAGE */}
      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-950 p-8 md:p-12">

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Business Plus
            </p>

            <h2 className="text-3xl font-bold">
              Website + Business App
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$349</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-4 text-lg text-slate-300">
              A complete business presence with both a professional website-style
              experience and an installable app for your customers.
            </p>

            <p className="mb-8 font-semibold text-emerald-400">
              Everything in the $249 Business App, plus:
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
            href="https://buy.stripe.com/7sY8wP3HVaFw4n972Pc3m0a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-500 
          px-8 py-4 text-lg font-bold text-slate-950"
          >
           Buy Business Plus — $349
          </a>  

          </div>
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

