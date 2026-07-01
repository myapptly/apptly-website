export default function LessonOne() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold">
          ← Back to Dashboard
        </a>

        <img
  src="/new%20logo.png"
  alt="APPTLY Logo"
  className="mx-auto w-[300px] max-w-full h-auto"
/> 

        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Lesson 1
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-3">
            Welcome to APPTLY
          </h1>
          <p className="text-gray-300 text-xl mt-4">
          Follow the steps, complete each action, and build your first real AI-powered app.          
          </p>
          
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">What APPTLY Is</h2>
          <p className="text-gray-300 leading-relaxed">
            APPTLY is a step-by-step learning platform that helps ordinary people use AI tools to build real apps, launch them, and begin thinking like app owners.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You do not need to know how to code. You do not need to be young, technical, or experienced. You just need curiosity, patience, and a willingness to follow the process.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">What You'll Build</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Your first AI-powered app idea</li>
            <li>✅ A simple working app structure</li>
            <li>✅ A plan to launch and improve it</li>
            <li>✅ A path toward monetizing your idea</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Your First Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Open a notebook or document and write down three app ideas. They do not have to be perfect. Start with problems you understand, hobbies you enjoy, or things people ask you for help with.
          </p>
          <p className="text-[#00FF94] font-bold">
            Your goal today is simple: choose one idea worth exploring.
          </p>
        </div>

        <section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    How App Builders Make Money
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mb-6">
    You do not need to invent the next Facebook or create a complicated
    app-store product to make money building apps. Many professional app
    builders earn income by solving ordinary problems for businesses,
    organizations, and individuals.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    {[
      [
        "Build Custom Apps for Clients",
        "A business pays you to create an app designed around its specific needs.",
      ],
      [
        "Create Internal Business Tools",
        "Build tools for employees, inventory, appointments, estimates, inspections, customers, or daily operations.",
      ],
      [
        "Build Subscription Apps",
        "Create an app that customers or businesses pay to use monthly or annually.",
      ],
      [
        "Sell One App to Many Businesses",
        "Build an app for one industry, then customize and sell it to several similar businesses.",
      ],
      [
        "Charge Setup and Customization Fees",
        "Start with a reusable app and personalize the logo, colors, services, forms, and information for each client.",
      ],
      [
        "Offer Maintenance and Updates",
        "Charge clients for ongoing support, new features, content changes, and troubleshooting.",
      ],
      [
        "Create Lead-Generation Apps",
        "Help businesses collect contact information, quote requests, appointments, and qualified prospects.",
      ],
      [
        "Build Booking and Scheduling Systems",
        "Create an easier way for customers to schedule services, consultations, classes, or appointments.",
      ],
      [
        "Create Membership or Training Apps",
        "Help coaches, instructors, associations, and course creators deliver content to paying members.",
      ],
      [
        "Sell App Templates",
        "Build reusable app foundations that other creators or businesses can purchase and customize.",
      ],
      [
        "Offer App Consulting",
        "Help a business identify its problems and determine what kind of app or digital tool it needs.",
      ],
      [
        "Partner with Marketing Agencies",
        "Provide app-building services to agencies that want to offer more solutions to their own clients.",
      ],
    ].map(([title, description]) => (
      <div
        key={title}
        className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5"
      >
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    ))}
  </div>
</section>

<section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Businesses That May Need an App
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mb-6">
    Almost any organization with customers, employees, appointments,
    information, or repetitive tasks may benefit from an app.
  </p>

  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {[
      "Restaurants, food trucks, bakeries, and caterers",
      "Hair salons, barbershops, spas, and nail salons",
      "Plumbers, electricians, HVAC companies, roofers, and landscapers",
      "Real estate agents, property managers, and home inspectors",
      "Doctors, dentists, chiropractors, therapists, and caregivers",
      "Gyms, personal trainers, yoga studios, and sports coaches",
      "Churches, charities, clubs, and nonprofit organizations",
      "Schools, tutors, daycare centers, and training companies",
      "Retail stores, boutiques, antique shops, and specialty businesses",
      "Hotels, vacation rentals, tour operators, and travel planners",
      "Event planners, wedding professionals, photographers, and entertainers",
      "Auto repair shops, detailers, and transportation companies",
      "Pet groomers, dog walkers, boarding facilities, and veterinarians",
      "Accountants, attorneys, insurance agents, and financial professionals",
      "Senior-living communities and home-care services",
      "Cleaning companies, pest-control services, and repair businesses",
      "Local associations, networking groups, and membership organizations",
      "Consultants, coaches, speakers, and independent professionals",
    ].map((business) => (
      <div
        key={business}
        className="rounded-lg border border-gray-700 bg-gray-900/70 p-4 text-gray-200"
      >
        {business}
      </div>
    ))}
  </div>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-3">
    Think Like a Professional App Builder
  </h2>

  <p className="text-gray-200 leading-relaxed">
    A client may not need a complicated app in the Apple App Store or Google
    Play. The best solution might be a simple web app, customer portal,
    booking tool, employee dashboard, membership area, or mobile-friendly
    business system.
  </p>

  <p className="text-gray-200 leading-relaxed mt-4">
    Your job is not merely to build something impressive. Your job is to
    identify a real problem and create something useful that saves time,
    improves service, increases sales, or organizes information.
  </p>
</section>

    <section className="mt-12 rounded-2xl border border-emerald-500/40 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-3">
    Build Your First Portfolio
  </h2>

  <p className="text-gray-200 leading-relaxed">
    Before asking strangers to pay you, consider building one or two simple
    apps for friends, family members, local organizations, or businesses you
    already know.
  </p>

  <p className="text-gray-200 leading-relaxed mt-4">
    Offer these first projects free or at a very low introductory price in
    exchange for honest feedback, a testimonial, and permission to show the
    finished app in your portfolio.
  </p>

  <p className="text-gray-200 leading-relaxed mt-4">
    Choose small projects with a clear purpose. Do not promise a huge,
    complicated system. Build something useful, finish it professionally,
    and make sure the person actually uses it.
  </p>

  <div className="mt-5 rounded-xl border border-gray-700 bg-black/30 p-5">
    <h3 className="text-xl font-semibold text-white mb-3">
      After Each Project, Ask For:
    </h3>

    <ul className="list-disc space-y-2 pl-6 text-gray-300">
      <li>An honest written review or testimonial</li>
      <li>Permission to display the app in your portfolio</li>
      <li>Permission to mention the business or organization by name</li>
      <li>A referral to another person who may need an app</li>
      <li>Specific feedback about what the app improved or made easier</li>
    </ul>
  </div>

  <p className="mt-5 font-semibold text-emerald-400">
    Two completed apps and two strong testimonials give you something real
    to show, discuss, promote, and brag about when approaching paying clients.
  </p>
</section>  

<section className="mt-12 rounded-2xl bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Lesson 1 Action Step
  </h2>

  <p className="text-gray-300 mb-4">
    Choose three businesses you already know. For each business, answer:
  </p>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>What problem does the business repeatedly face?</li>
    <li>
      Could an app save time, improve service, increase sales, or organize
      information?
    </li>
    <li>What would the simplest useful version of that app do?</li>
  </ol>

  <p className="mt-5 font-semibold text-emerald-400">
    Do not worry about how to build it yet. Begin by learning how to recognize
    valuable problems.
  </p>
</section>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/lesson-2"
            className="bg-[#00FF94] text-black font-bold px-6 py-4 rounded-full text-center"
          >
            Go to Lesson 2
          </a>
          <a
            href="/dashboard"
            className="bg-white text-black font-bold px-6 py-4 rounded-full text-center"
          >
            Return to Dashboard
          </a>
        </div>
      </section>
    </main>
  );
}
