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

