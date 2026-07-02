export default function Lesson5() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold hover:underline">
          ← Back to Dashboard
        </a>

        <img
  src="/new%20logo.png"
  alt="APPTLY Logo"
  className="mx-auto w-[300px] max-w-full h-auto"
/> 

        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Lesson 5
          </p>
          <h1 className="text-5xl font-black mt-3">Monetize Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            A useful app can become more than a project. It can become income.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Start Simple</h2>
          <p className="text-gray-300 leading-relaxed">
            You do not need thousands of users to make money from an app. A small number of people
            paying for something useful can create real income over time.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Ways to Make Money</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Monthly subscriptions</li>
            <li>✅ One-time purchases</li>
            <li>✅ Paid templates or downloads</li>
            <li>✅ Service add-ons</li>
            <li>✅ Affiliate commissions</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Pricing Questions</h2>
          <ul className="space-y-3 text-gray-300">
            <li>1. What problem does the app solve?</li>
            <li>2. How often will someone use it?</li>
            <li>3. Does it save time, money, or frustration?</li>
            <li>4. Who would gladly pay for this?</li>
            <li>5. What is a simple first price to test?</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Do Not Guess Forever</h2>
          <p className="text-gray-300 leading-relaxed">
            Pricing is something you test. Start with a simple offer, show it to real people, and watch
            what happens. If nobody buys, improve the offer. If people buy quickly, you may be underpriced.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Message from Terry</h2>
          <p className="text-gray-300 leading-relaxed">
            You do not need thousands of customers. A handful of happy customers paying every month can
            change your financial future. Keep learning, keep improving, and keep building.
          </p>
        </div>

        <section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Choose the Right Revenue Model
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mb-6">
    There is no single correct way to make money from an app. Choose the model
    that best matches the customer, the problem, and the amount of continuing
    work the app requires.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    {[
      [
        "One-Time Purchase",
        "Charge one price for permanent access. This works well for simple tools, guides, calculators, templates, and focused apps.",
      ],
      [
        "Monthly or Annual Subscription",
        "Charge recurring access when the app provides continuing value, fresh content, saved data, support, or regular improvements.",
      ],
      [
        "Custom Client Project",
        "A business pays you to build an app specifically for its needs. Pricing may include planning, design, development, and setup.",
      ],
      [
        "Setup Plus Monthly Support",
        "Charge an initial build or setup fee, followed by a monthly fee for hosting, maintenance, content changes, and assistance.",
      ],
      [
        "Reusable Industry App",
        "Build one useful system for a particular industry, then customize and sell it to several similar businesses.",
      ],
      [
        "Free App With Paid Extras",
        "Offer a useful basic version at no charge, then sell advanced features, premium tools, services, or upgrades.",
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

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Price the Result, Not Merely the Hours
  </h2>

  <p className="text-gray-300 leading-relaxed mb-5">
    Customers are usually paying for the result your app creates—not simply
    the number of hours you spent building it.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-gray-700 bg-black/20 p-5">
      <h3 className="text-xl font-semibold text-emerald-400 mb-2">
        Lower-Value Result
      </h3>
      <p className="text-gray-300">
        A simple personal checklist may be useful, but it probably does not
        justify a high price.
      </p>
    </div>

    <div className="rounded-xl border border-gray-700 bg-black/20 p-5">
      <h3 className="text-xl font-semibold text-emerald-400 mb-2">
        Higher-Value Result
      </h3>
      <p className="text-gray-300">
        An app that helps a business capture leads, reduce missed appointments,
        or prepare estimates faster may create measurable financial value.
      </p>
    </div>
  </div>

  <p className="mt-5 font-semibold text-emerald-400">
    The greater the useful result, the easier it is to justify a meaningful
    price.
  </p>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    A Simple Client-Pricing Structure
  </h2>

  <p className="text-gray-200 leading-relaxed mb-5">
    When building for a business, separate the project into clear charges
    instead of quoting one unexplained number.
  </p>

  <div className="space-y-4">
    {[
      [
        "Planning Fee",
        "Understanding the business, identifying the problem, outlining the app, and defining the first version.",
      ],
      [
        "Build Fee",
        "Creating the pages, features, forms, calculations, branding, and working app.",
      ],
      [
        "Setup Fee",
        "Connecting the domain, payment system, accounts, email, data, or other services.",
      ],
      [
        "Training Fee",
        "Showing the client how to use, manage, and update the app.",
      ],
      [
        "Maintenance Fee",
        "Providing continued support, updates, corrections, backups, and minor changes.",
      ],
    ].map(([title, description]) => (
      <div
        key={title}
        className="rounded-xl border border-emerald-500/30 bg-black/30 p-5"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    ))}
  </div>
</section>

<section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Understand Your Costs
  </h2>

  <p className="text-gray-300 leading-relaxed mb-6">
    Revenue is not the same as profit. Before choosing a price, list every cost
    required to build, operate, deliver, and support the app.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    {[
      "App-building platform fees",
      "Website and domain expenses",
      "Hosting or database charges",
      "Payment-processing fees",
      "Email or messaging services",
      "AI usage or software subscriptions",
      "Advertising and sales expenses",
      "Your time for support and updates",
    ].map((cost) => (
      <div
        key={cost}
        className="flex gap-3 rounded-xl border border-gray-700 bg-gray-900 p-4"
      >
        <span className="text-emerald-400">✓</span>
        <p className="text-gray-200">{cost}</p>
      </div>
    ))}
  </div>

  <p className="mt-5 text-gray-300">
    Your selling price must leave enough money after these expenses to make the
    project worthwhile.
  </p>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Use Simple Revenue Math
  </h2>

  <p className="text-gray-300 leading-relaxed mb-5">
    You do not need millions of users. A focused offer can create meaningful
    revenue with a realistic number of customers.
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-xl border border-gray-700 bg-black/20 p-5 text-center">
      <p className="text-3xl font-bold text-emerald-400">$37</p>
      <p className="mt-2 text-gray-300">× 25 sales</p>
      <p className="mt-3 text-xl font-semibold text-white">$925</p>
    </div>

    <div className="rounded-xl border border-gray-700 bg-black/20 p-5 text-center">
      <p className="text-3xl font-bold text-emerald-400">$97</p>
      <p className="mt-2 text-gray-300">× 10 sales</p>
      <p className="mt-3 text-xl font-semibold text-white">$970</p>
    </div>

    <div className="rounded-xl border border-gray-700 bg-black/20 p-5 text-center">
      <p className="text-3xl font-bold text-emerald-400">$500</p>
      <p className="mt-2 text-gray-300">× 2 clients</p>
      <p className="mt-3 text-xl font-semibold text-white">$1,000</p>
    </div>
  </div>

  <p className="mt-5 text-gray-300">
    These examples are revenue before expenses, but they show why a small,
    specific audience can still support a real business.
  </p>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-black/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    Create a Clear Offer
  </h2>

  <p className="text-gray-300 leading-relaxed mb-5">
    People should quickly understand what they receive, what problem it solves,
    what it costs, and what happens after they pay.
  </p>

  <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
    <p className="text-gray-200 leading-relaxed">
      I help <span className="font-semibold text-emerald-400">[customer]</span>{" "}
      solve <span className="font-semibold text-emerald-400">[problem]</span>{" "}
      with <span className="font-semibold text-emerald-400">[app or service]</span>.
      The customer receives{" "}
      <span className="font-semibold text-emerald-400">[deliverables]</span>{" "}
      for <span className="font-semibold text-emerald-400">[price]</span>.
    </p>
  </div>

  <div className="mt-6 rounded-xl border border-gray-700 bg-gray-900 p-5">
    <p className="font-semibold text-white mb-2">Example:</p>
    <p className="text-gray-300 leading-relaxed">
      I help independent cleaning businesses prepare customer estimates faster
      with a customized quote-calculator app. The client receives branded
      estimate pages, service selections, automatic totals, mobile access, and
      setup assistance for a one-time price of $497.
    </p>
  </div>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Test Before You Complicate the Offer
  </h2>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>Choose one customer group.</li>
    <li>Offer one clearly defined result.</li>
    <li>Select one simple price.</li>
    <li>Show the offer to real potential customers.</li>
    <li>Listen carefully to their questions and objections.</li>
    <li>Improve the offer before adding more pricing levels or features.</li>
  </ol>

  <p className="mt-5 font-semibold text-emerald-400">
    A simple offer that sells is better than a complicated pricing plan that
    confuses everyone.
  </p>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    Protect the Customer and Yourself
  </h2>

  <p className="text-gray-200 leading-relaxed mb-5">
    For custom client work, put the important terms in writing before beginning.
  </p>

  <ul className="list-disc space-y-3 pl-6 text-gray-200">
    <li>What the app will include</li>
    <li>What is not included</li>
    <li>The total price and payment schedule</li>
    <li>The estimated delivery schedule</li>
    <li>How many revisions are included</li>
    <li>Who pays continuing software or hosting costs</li>
    <li>What support is included after delivery</li>
    <li>What happens when the client requests additional work</li>
  </ul>

  <p className="mt-5 text-gray-300">
    Clear expectations prevent misunderstandings and help you look
    professional.
  </p>
</section>

<section className="mt-12 rounded-2xl bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Your Lesson 5 Monetization Plan
  </h2>

  <p className="text-gray-300 mb-5">
    Write down the following decisions for your first app:
  </p>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>Who is most likely to pay for it?</li>
    <li>What valuable result will they receive?</li>
    <li>Will you charge once, repeatedly, or for a custom service?</li>
    <li>What expenses must the price cover?</li>
    <li>What is one reasonable starting price to test?</li>
    <li>Where will the customer pay?</li>
   
<li>How will the customer receive access or delivery?</li>
<li>What support or updates will be included?</li>
</ol>

<div className="mt-6 rounded-xl border border-emerald-500/40 bg-black/30 p-5">
  <p className="font-semibold text-emerald-400 mb-2">
    Complete this sentence:
  </p>

  <p className="text-lg text-white">
    I will offer __________ to __________ for __________ because it helps
    them __________.
  </p>
</div>
</section> 

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Assignment</h2>
          <p className="text-gray-300 leading-relaxed">
            Choose one possible way your app could make money. Write down your first simple offer and
            one price you would be willing to test.
          </p>
          <p className="text-[#00FF94] font-bold mt-4">
            Your goal today: create one simple monetization plan for your app.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
  <a
    href="/lesson-5"
    className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-semibold transition"
  >
    ← Previous Lesson
  </a>

  <a
    href="/lesson-7"
    className="bg-[#00FF94] text-black hover:bg-[#00dd80] px-6 py-3 rounded-xl font-bold transition"
  >
    Next Lesson →
  </a>
</div> 

      </section>
    </main>
  );
} 
