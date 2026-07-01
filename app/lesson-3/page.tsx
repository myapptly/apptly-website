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

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">AI Is Your Building Partner</h2>
          <p className="text-gray-300 leading-relaxed">
            AI can help you plan, write, design, debug, and improve your app. Your job is not to become
            a professional programmer overnight. Your job is to describe the app clearly, test what AI
            creates, and keep improving it one step at a time.
          </p>
        </div>

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
