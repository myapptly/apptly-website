export default function Lesson3() {
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
            Lesson 3
          </p>
          <h1 className="text-5xl font-black mt-3">Build with AI</h1>
          <p className="text-gray-300 mt-4 text-xl">
            You do not need to code from scratch. You need to learn how to clearly tell AI what you want.
          </p>
        </div>

        <div className="my-10">
  
</div>
        
        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">AI Is Your Building Partner</h2>
          <p className="text-gray-300 leading-relaxed">
            AI can help you plan, write, design, debug, and improve your app. Your job is not to become
            a professional programmer overnight. Your job is to describe the app clearly, test what AI
            creates, and keep improving it one step at a time.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF94]/30 rounded-2xl p-6 space-y-5">
  <h2 className="text-3xl font-bold text-[#00FF94]">
    The APPTLY Build Path
  </h2>

  <p className="text-gray-300 leading-relaxed">
    Building an app with AI is not one magic step. It is a repeatable process.
    Once you understand the path, the whole thing becomes much less confusing.
  </p>

  <div className="grid gap-4">
    {[
      ["💡", "1. Define Your App Idea", "Choose one clear problem your app will solve."],
      ["🤖", "2. Prompt AI Clearly", "Tell AI exactly what you want the app to do."],
      ["💻", "3. Ask AI to Write the Code", "Let AI create the first working version."],
      ["📋", "4. Move the Code into GitHub", "Use GitHub to store, edit, and protect your project files."],
      ["🧩", "5. Choose a Building Method", "Continue with AI-generated code and GitHub, or use FlutterFlow to build screens and features visually."],
      ["🗄️", "6. Add Firestore When Your App Needs Data", "Use Firestore when your app must save accounts, customer information, appointments, messages, progress, or other changing data."], 
      ["🔧", "7. Edit and Improve", "Make small changes, ask AI for help, and fix problems one step at a time."],
      ["🚀", "8. Deploy with Vercel", "Publish the app online so you can test it in a real browser."],
      ["📱", "9. Test on Laptop and Phone", "Check how the app looks and works on different screens."],
      ["📸", "10. Use Screenshots", "Show AI exactly what is happening when something looks wrong or breaks."],
      ["🎨", "11. Add Graphics and Branding", "Upload images, logos, banners, and screenshots into your public folder."],
      ["📧", "12. Connect Email and Contact Forms", "Make sure users can contact you and receive replies."],
      ["💳", "13. Add Payments with Stripe", "Use Stripe when you are ready to sell access, services, or products."],
      ["🌐", "14. Connect a Domain with Namecheap", "Use a domain provider like Namecheap so your app has a real web address."],
      ["📣", "15. Launch and Market", "Share your app, collect feedback, improve it, and keep building."]
    ].map(([icon, title, description]) => (
      <div
        key={title}
        className="rounded-xl border border-white/10 bg-black/30 p-4"
      >
        <h3 className="text-xl font-bold text-white">
          {icon} {title}
        </h3>
        <p className="text-gray-300 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    ))}
  </div>

        <p className="text-[#00FF94] font-bold">
    Cliff&apos;s Tip: Do not try to remember everything at once. Follow the path,
    complete one step, then move to the next.
  </p>
</div>

        <section className="rounded-2xl border border-[#00FF94]/30 bg-[#1A1A1A] p-6">
  <h2 className="mb-4 text-3xl font-bold text-[#00FF94]">
    Two Ways to Build Your App
  </h2>

  <p className="mb-6 leading-relaxed text-gray-300">
    AI can help you build an app through written code, but code is not your
    only option. Some apps can also be created visually with FlutterFlow.
    The best method depends on what you are building and how you prefer to work.
  </p>

  <div className="grid gap-5 md:grid-cols-2">
    <div className="rounded-xl border border-white/10 bg-black/30 p-5">
      <h3 className="mb-3 text-xl font-bold text-white">
        💻 AI, GitHub, and Vercel
      </h3>

      <p className="leading-relaxed text-gray-300">
        In this method, AI helps write the code, GitHub stores the project
        files, and Vercel publishes the app online. This gives you direct
        control over the code and works especially well for websites and
        browser-based applications.
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-black/30 p-5">
      <h3 className="mb-3 text-xl font-bold text-white">
        🧩 FlutterFlow
      </h3>

      <p className="leading-relaxed text-gray-300">
        FlutterFlow is a visual app-building platform. You create pages,
        buttons, forms, navigation, and other features by arranging elements
        on the screen. It can be useful for mobile apps and interactive apps
        that need more than a basic website.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
    <h3 className="mb-3 text-xl font-bold text-emerald-400">
      🗄️ Where Firestore Fits
    </h3>

    <p className="leading-relaxed text-gray-300">
      Firestore is a cloud database available through Google Firebase. It gives
      an app a place to save and retrieve information. You may need it when an
      app includes user accounts, customer records, appointments, messages,
      saved preferences, lesson progress, products, or other information that
      must remain available after the user closes the app.
    </p>

    <p className="mt-4 leading-relaxed text-gray-300">
      FlutterFlow can connect to Firebase and Firestore, allowing a visual app
      to work with real users and real saved data. Firestore is not required
      for every simple first app. Add it only when the app needs to remember
      information.
    </p>
  </div>

  <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
    <p className="font-bold text-[#00FF94]">
      Cliff&apos;s Tip:
    </p>

    <p className="mt-2 leading-relaxed text-gray-300">
      Do not choose a tool because it sounds advanced. Choose the simplest
      method that can produce a useful first version. You can always add a
      visual builder, user accounts, or a database after the basic idea works.
    </p>
  </div>
</section>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">The Simple AI App-Building Process</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Describe the problem your app solves</li>
            <li>✅ Ask AI for a simple version first</li>
            <li>✅ Test what it gives you</li>
            <li>✅ Fix one issue at a time</li>
            <li>✅ Improve the design after the basic app works</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Good First Prompt</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Use this prompt when you are ready to begin:
          </p>

          <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-5 text-gray-200">
            I want to build a simple app for beginners. The app should help [who it helps] solve
            [the problem]. Please give me a simple version first, with the main features, page layout,
            and step-by-step build plan.
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Common Beginner Mistakes</h2>
          <ul className="space-y-3 text-gray-300">
            <li>❌ Trying to build too many features at once</li>
            <li>❌ Changing the design before the basic app works</li>
            <li>❌ Starting over instead of fixing one issue</li>
            <li>❌ Asking AI vague questions</li>
          </ul>
        </div>

        <section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    The Five Parts of a Strong AI Build Prompt
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mb-6">
    AI gives better results when you clearly explain the user, the problem,
    the purpose, the features, and the desired appearance.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        1. Identify the User
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Explain exactly who will use the app, such as independent cleaners,
        restaurant customers, church volunteers, or personal trainers.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        2. Describe the Problem
      </h3>
      <p className="text-gray-300 leading-relaxed">
        State the frustration, repeated task, delay, missed opportunity, or
        organizational problem the app should solve.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        3. Explain the Main Purpose
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Describe the one most important job the first version of the app must
        perform.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        4. List Essential Features
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Include only the features needed for the basic version. Save extra
        ideas for later improvements.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5 md:col-span-2">
      <h3 className="text-xl font-semibold text-white mb-2">
        5. Describe the Look and Experience
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Tell AI whether the app should feel professional, friendly, modern,
        simple, colorful, elegant, bold, or designed for easy mobile use.
      </p>
    </div>
  </div>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    A Better Prompt Formula
  </h2>

  <div className="rounded-xl border border-gray-700 bg-black/30 p-5 text-gray-200 leading-relaxed">
    Build a simple app for{" "}
    <span className="font-semibold text-emerald-400">[specific users]</span>.
    The app should help them solve{" "}
    <span className="font-semibold text-emerald-400">[specific problem]</span>.
    The main purpose is{" "}
    <span className="font-semibold text-emerald-400">[main job]</span>. Include{" "}
    <span className="font-semibold text-emerald-400">[essential features]</span>.
    Make the design{" "}
    <span className="font-semibold text-emerald-400">[style and colors]</span>.
    Begin with a simple working version and explain each step clearly for a
    beginner.
  </div>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Example of a Detailed Build Prompt
  </h2>

  <div className="rounded-xl border border-gray-700 bg-black/30 p-5 text-gray-200 leading-relaxed">
    Build a simple mobile-friendly app for independent house cleaners. The app
    should help them create customer estimates faster. Include a customer-name
    field, room selections, optional services, automatic price totals, and a
    printable estimate summary. Use a clean professional design with white,
    dark blue, and green. Start with the simplest working version and explain
    every step clearly for someone who does not know how to code.
  </div>
</section>

<section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Build in Small Conversations
  </h2>

  <p className="text-gray-300 leading-relaxed mb-6">
    Do not ask AI to create an enormous finished app in one attempt. Work in
    small stages so you can test each part before adding more.
  </p>

  <div className="space-y-4">
    {[
      "First, ask AI to create the basic page structure.",
      "Next, test whether the page loads and the buttons work.",
      "Then, add one important feature.",
      "Test the feature before requesting another one.",
      "Improve the colors, spacing, and branding after the basic app works.",
      "Save or commit every successful version before making another change.",
    ].map((step, index) => (
      <div
        key={step}
        className="flex gap-4 rounded-xl border border-gray-700 bg-gray-900 p-4"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-bold text-black">
          {index + 1}
        </div>
        <p className="text-gray-200">{step}</p>
      </div>
    ))}
  </div>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    When Something Goes Wrong
  </h2>

  <p className="text-gray-300 leading-relaxed mb-5">
    Errors are normal. Give AI specific information instead of saying only,
    “It does not work.”
  </p>

  <ul className="list-disc space-y-3 pl-6 text-gray-200">
    <li>Copy and paste the exact error message.</li>
    <li>Explain what you expected to happen.</li>
    <li>Explain what happened instead.</li>
    <li>Show the relevant code or send a clear screenshot.</li>
    <li>Ask AI to change only the part causing the problem.</li>
    <li>Test the correction before making another change.</li>
  </ul>

  <div className="mt-6 rounded-xl border border-emerald-500/30 bg-black/30 p-5">
    <p className="font-semibold text-emerald-400 mb-2">
      Helpful troubleshooting prompt:
    </p>

    <p className="text-gray-200 leading-relaxed">
      This is the exact error I received: [paste error]. I expected [expected
      result], but instead [actual result]. Please identify the likely cause
      and give me one small correction at a time. Do not rewrite unrelated
      parts of the app.
    </p>
  </div>
</section>

<section className="mt-12 rounded-2xl bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Your Lesson 3 Build Brief
  </h2>

  <p className="text-gray-300 mb-5">
    Before moving to Lesson 4, write one complete build prompt containing:
  </p>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>The specific person or business that will use the app</li>
    <li>The clear problem the app will solve</li>
    <li>The app’s most important purpose</li>
    <li>Three to five essential first-version features</li>
    <li>The desired colors, style, and mobile experience</li>
    <li>A request for simple beginner-friendly instructions</li>
  </ol>

  <p className="mt-5 font-semibold text-emerald-400">
    Clear instructions create better apps. You do not need to know every
    technical term—you need to communicate what the app should accomplish.
  </p>
</section>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Assignment</h2>
          <p className="text-gray-300 leading-relaxed">
            Take the app idea you chose in Lesson 2 and write a clear AI prompt for it. Your prompt should
            explain who the app helps, what problem it solves, and what simple first version you want to build.
          </p>
          <p className="text-[#00FF94] font-bold mt-4">
            Your goal today: create one clear AI build prompt for your first app.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-green-500/30 bg-[#121212] p-5">
  <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#00E676]">
    Your Blueprint Progress
  </p>

  <div className="flex items-center gap-2 text-xl sm:text-2xl">
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">▶</span>
    <span className="ml-2 text-base font-bold text-white">
      27% Complete · 3 of 11 Lessons
    </span>
  </div>
</div> 

        <div className="flex flex-wrap gap-4">
          <a href="/lesson-2" className="bg-gray-700 px-6 py-3 rounded-xl">
            Previous Lesson
          </a>

          <a href="/lesson-4" className="bg-[#00FF94] text-black font-bold px-6 py-3 rounded-xl">
            Go to Lesson 4
          </a>
        </div>
      </section>
    </main>
  );
} 
