"use client";

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
          <img
            src="/apptly-logo1.png"
            alt="APPTLY"
            className="h-28 w-auto object-contain md:h-32"
          />
        </div>

        <div className="flex gap-5">
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

<nav className="mx-auto mt-5 flex max-w-6xl flex-wrap justify-center gap-3 border-t border-slate-800 pt-4 text-sm font-semibold">
  
  <a
    href="#digital-card"
    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
  >
    Packages
  </a>

  <a
    href="#compare"
    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
  >
    Compare
  </a>

  <a
    href="#work"
    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
  >
    Our Work
  </a>

  <a
  href="#fees"
  className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
>
  No Surprise Fees
</a> 

  <button
    onClick={handleShare}
    className="rounded-lg px-3 py-2 text-emerald-400 hover:bg-slate-800"
  >
    Share APPTLY
  </button>
</nav> 

      </header>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-400">
            AFFORDABLE WEBSITES & APPS FOR SMALL BUSINESS
          </p>

          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
  Put Your Business
  <br />
  <span className="text-emerald-400">
    In Your Customers&apos; Pocket.
  </span>
</h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            APPTLY builds affordable, professional websites, business apps, and 
            digital business cards for small businesses — with simple one-time 
            pricing and no required monthly APPTLY maintenance fee. 
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
            One-time build price. APPTLY builds it for you, then turns it over to you.
          </p>
        
        <div className="mt-10 text-center">
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
  </a>
</div> 
        
        </div>
      </section>

{/* DIGITAL BUSINESS CARD */}
      <section id="digital-card" className="bg-slate-950 px-6 py-8">
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
              <li>✓ One business photo or logo</li>
              <li>✓ Custom app icon</li>
              <li>✓ Email link</li>
              <li>✓ Business hours</li>
            </ul>

          <a
              href="/checkout?package=digital-card"
              target="_blank"
              rel="noopener noreferrer" 
  className="inline-block mt-8 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-bold text-slate-950"
>
  Buy Digital Business Card — $99
</a> 

          </div>
        
        <div className="mt-10 text-center">
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
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
                Built For You. Yours To Keep.
              </h3>
              <p className="text-slate-300">
                We build your app, show you how it works and turn it over to you.
                No required monthly APPTLY maintenance fee.
              </p>
            </div>
            <a
              href="/checkout?package=starter-app"
              target="_blank"
              rel="noopener noreferrer" 
            className="inline-block rounded-xl bg-emerald-500 
            px-8 py-4 text-lg font-bold text-slate-950"
            >
              Buy Starter App — $199
            </a> 

          </div>
       
       <div className="mt-10 text-center">
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
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
              A more complete business app for businesses that need more
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
              <p>✓ One revision before final handoff</p>
              <p>✓ Complete owner handoff</p>
            </div>

            <div className="mt-10 rounded-xl bg-slate-950 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-emerald-400">
                More Capability. Still Yours.
              </h3>
              <p className="text-slate-300">
                Keep important business information current yourself - with no
                required monthly APPTLY maintenance fee.
              </p>
            </div>
          <a
            href="/checkout?package=business-app" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-500 
            px-8 py-4 text-lg font-bold text-slate-950"
            >
              Buy Business App — $299
          </a> 

          </div>
       
       <div className="mt-10 text-center">
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
  </a>
</div> 
       
        </div>
      </section>
      {/* APPTLY COMPLETE PACKAGE */}
      <section id="website-app" className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-500 bg-slate-950 p-8 md:p-12">

            <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-emerald-300">
              ★ BEST VALUE
            </p> 

            <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
              APPTLY Complete
            </p>

            <h2 className="text-3xl font-bold">
              Website + Business App
            </h2>

            <div className="my-6">
              <span className="text-6xl font-extrabold">$449</span>
              <span className="ml-2 text-slate-400">one-time build price</span>
            </div>

            <p className="mb-4 text-lg text-slate-300">
              A complete business presence with a professional website and an 
              installable app for your customers.
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
              <p>✓ Owner-editable content where needed</p>
              <p>✓ Contact/request forms</p>
              <p>✓ Testimonials & reviews</p>
              <p>✓ Frequently asked questions</p>
              <p>✓ Booking, ordering or payment links</p>
              <p>✓ Custom app icon & QR code</p>
              <p>✓ Basic SEO setup & sitemap</p>
              <p>✓ Enhanced desktop design</p>
              <p>✓ Mobile-first responsive design</p>
              <p>✓ Up to 2 revisions before final handoff</p>
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
            href="/checkout?package=website-app" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-emerald-500 
          px-8 py-4 text-lg font-bold text-slate-950"
          >
           Buy Website + Business App — $449
          </a>  

          </div>

<div className="mt-10 text-center">
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
  </a>
</div>

          {/* DOMAIN & LAUNCH SETUP */}
<section className="border-t border-slate-800 px-6 py-16">
  <div className="mx-auto max-w-5xl">
    <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 md:p-10">

      <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
        Optional Launch Help
      </p>

      <h2 className="text-3xl font-extrabold md:text-4xl">
        Need Help Getting Online?
      </h2>

      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        Already have a domain? Great — we’ll help connect it to your new
        APPTLY website. Need one? We can help you choose, purchase, and
        properly connect your business domain.
      </p>

      <div className="mt-8 grid gap-4 text-slate-200 md:grid-cols-2">
        <p>✓ Domain selection and setup assistance</p>
        <p>✓ DNS connection to your APPTLY website</p>
        <p>✓ HTTPS and security setup</p>
        <p>✓ Launch verification</p>
        <p>✓ Your domain stays in your name</p>
        <p>✓ You keep control of your accounts</p>
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
        <p className="font-bold text-emerald-300">
          No hosting lock-in.
        </p>

        <p className="mt-2 text-slate-300">
          APPTLY does not mark up your domain or require you to purchase
          hosting from us. Any domain, email, hosting, or third-party service
          charges are paid directly to the provider.
        </p>
      </div>

    </div>
  </div>
</section> 

        </div>
      </section>

<section id="fees" className="mx-auto max-w-5xl px-6 py-8"> 
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

    <div className="mt-10 text-center">
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
  </a>
</div> 

  </div>
</section>

{/* PRICE COMPARISON */}
      <section id="compare" className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
              Compare Your Options
            </p>

            <h2 className="text-3xl font-extrabold md:text-5xl">
              Different Ways to Get a Business Website or App
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
              From do-it-yourself app builders to full-service agencies,
              pricing and responsibility can vary dramatically.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-white">
                DIY App Builder
              </h3>

              <p className="mt-4 text-3xl font-extrabold text-emerald-400">
                ~$36–$199+/mo
              </p>

              <p className="mt-4 text-slate-300">
                You build and manage the app yourself using a no-code platform.
              </p>

              <p className="mt-5 text-sm font-semibold text-slate-400">
                Best for: People comfortable building and maintaining their own app.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
  <h3 className="text-xl font-bold text-white">
              Replit AI
             </h3>

             <p className="mt-4 text-3xl font-extrabold text-emerald-400">
             Free–$95+/mo
            </p>

  <p className="mt-4 text-slate-300">
    AI helps you build the website or app, but you still build, manage, and maintain the project yourself. Paid plans and additional usage can add ongoing costs.
  </p>

  <p className="mt-5 text-sm font-semibold text-slate-400">
    Best for: People comfortable using AI tools to build and manage their own project.
  </p>
</div> 

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-white">
                Freelancer
              </h3>

              <p className="mt-4 text-3xl font-extrabold text-emerald-400">
                Hundreds–Thousands
              </p>

              <p className="mt-4 text-slate-300">
                A freelancer builds the project for you. Pricing and ongoing
                support vary widely.
              </p>

              <p className="mt-5 text-sm font-semibold text-slate-400">
                Best for: Custom projects with flexible budgets.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
  <h3 className="text-xl font-bold text-white">
    The Website Inventor
  </h3>

  <p className="mt-4 text-3xl font-extrabold text-emerald-400">
    $249–$749+
  </p>

  <p className="mt-4 text-slate-300">
    A done-for-you website service with packages ranging from smaller
    business websites to larger sites with booking, CRM, and other
    business features.
  </p>

  <p className="mt-5 text-sm font-semibold text-slate-400">
    Best for: Businesses wanting a professionally built traditional website.
  </p>
</div> 

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-white">
                Development Agency
              </h3>

              <p className="mt-4 text-3xl font-extrabold text-emerald-400">
                $12,000–$300,000+
              </p>

              <p className="mt-4 text-slate-300">
                Full custom development with larger teams, complex systems,
                and enterprise-level capabilities.
              </p>

              <p className="mt-5 text-sm font-semibold text-slate-400">
                Best for: Large or highly complex applications.
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500 bg-slate-950 p-6">

<div className="flex justify-center mb-6"> 
  <img
    src="/apptly-logo1.png"
    alt="APPTLY"
    className="w-full max-w-sm h-auto object-contain"
  />
</div>

<div className="mt-5 text-center">
  <h3 className="text-4xl font-extrabold text-white md:text-5xl">
    BUILT FOR YOU
  </h3>

  <p className="mt-3 text-4xl font-extrabold text-emerald-400">
    $99–$449
    <span className="ml-3 text-xl uppercase">
      One Time
    </span>
  </p>

  <p className="mt-5 text-lg text-slate-200">
    No learning an app builder. No AI prompting. No development-agency price tag.
  </p>

  <p className="mt-2 text-xl font-bold text-emerald-400">
    Tell us what you want — we build it and turn it over to you.
  </p>
</div>

<p className="mt-8 mx-auto max-w-3xl text-center text-sm text-slate-400"> 
            Comparison ranges are general market examples and may change.
            Complex features, third-party services, and unusually high usage
            may affect total cost.
          </p>

 </div>
          
<div className="mt-10 text-center md:col-span-4"> 
  <a
    href="#top"
    className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
  >
    ↑ Back to Top
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

      <h2 className="text-3xl font-extrabold md:text-4xl">
        Don&apos;t Just Take Our Word for It.
        <br />
        <span className="text-emerald-400">
          See What We&apos;ve Built.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
        Real projects built for real businesses and organizations.
      </p>
    </div>

    <div className="space-y-6">

      {/* BEI CAPELLI */}
      <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-6">
        <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
          Bei Capelli Salon
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          Digital Business Web App
        </h3>

        <img
          src="/bei-capelli-home.png"
          alt="Bei Capelli Salon digital business card"
          className="mb-5 w-full rounded-xl border border-slate-700"
        />

        <p className="text-slate-300">
          An elegant digital business card designed for a local salon,
          giving customers quick access to contact information, hours,
          pricing, photos, directions and social media.
        </p>

        <a
          href="https://bei-capelli-salon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950"
        >
          View Bei Capelli Project
        </a>
      </div>

      {/* NEW HOPE */}
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

      {/* SKY-VUE */}
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

      {/* CAROLINA VACUUMS */}
      <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-6">
        <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
          Carolina Vacuums &amp; More
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          Business Website App
        </h3>

        <img
          src="/carolina-vacuums-home.png"
          alt="Carolina Vacuums & More business app homepage"
          className="mb-5 w-full rounded-xl border border-slate-700"
        />

        <p className="text-slate-300">
          A custom business app built around an established retail brand,
          giving customers quick access to locations, service, products
          and existing website resources.
        </p>

        <a
          href="https://carolina-vacuums-app.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950"
        >
          View Carolina Vacuums Project
        </a>
      </div>

      {/* APPTLY */}
      <div className="rounded-2xl border border-emerald-500 bg-slate-900 p-6">
        <p className="mb-2 font-bold uppercase tracking-wider text-emerald-400">
          APPTLY
        </p>

        <h3 className="mb-4 text-2xl font-bold">
          Business Website + App
        </h3>

        <img
          src="/apptly-logo1.png"
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

    </div>

    <div className="mt-10 text-center">
      <a
        href="#top"
        className="inline-block rounded-lg border border-emerald-500 px-4 py-2 text-sm font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950"
      >
        ↑ Back to Top
      </a>
    </div>

  </div>
</section> 

      {/* FOOTER */}
<footer className="px-6 py-10 text-center text-sm text-slate-400">
  <div className="mb-4 flex flex-wrap justify-center gap-5">
   
    <a href="/terms" className="hover:text-emerald-400">
      Terms
    </a>

    <a href="/privacy" className="hover:text-emerald-400">
      Privacy
    </a>
  </div>

  <p>
    © 2026 APPTLY. Affordable websites and apps for small businesses.
  </p>
      </footer>
    </main>
  );
}
  


