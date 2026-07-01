export default function Lesson2() {
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
            Lesson 2
          </p>
          <h1 className="text-5xl font-black mt-3">
            Choose Your First App Idea
          </h1>
          <p className="text-gray-300 mt-4 text-xl">
            Your first app does not need to be huge. It needs to solve one clear problem.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Start With Problems, Not Features</h2>
          <p className="text-gray-300 leading-relaxed">
            Most beginners start by asking, “What kind of app can I build?” A better question is:
            “What problem do I understand well enough to help solve?” Good app ideas usually come
            from everyday frustration, repeated questions, wasted time, messy systems, or things
            people already pay for.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Examples of Simple App Ideas</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ A cleaning quote calculator for a local service business</li>
            <li>✅ A meal planning app for people with simple dietary goals</li>
            <li>✅ A customer follow-up tracker for a small shop</li>
            <li>✅ A habit tracker for someone learning a new skill</li>
            <li>✅ A local event finder for a club, lodge, church, or neighborhood</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Bad Idea vs. Better Idea</h2>
          <p className="text-gray-300 mb-3">
            ❌ Bad first idea: “I want to build the next Facebook.”
          </p>
          <p className="text-gray-300">
            ✅ Better first idea: “I want to build a simple app that helps my local club manage events,
            reminders, and sign-ups.”
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Assignment</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Write down 10 possible app ideas. Do not judge them yet. The goal is not perfection.
            The goal is momentum.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>1. What problem do people ask you for help with?</li>
            <li>2. What do you know from your work or life experience?</li>
            <li>3. What process could be made simpler?</li>
            <li>4. What could save someone time?</li>
            <li>5. What could help a small business earn or save money?</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Pick Your Best Idea</h2>
          <p className="text-gray-300 leading-relaxed">
            After you list your ideas, choose one that is simple, useful, and realistic. Your first app
            should not try to do everything. It should do one helpful thing clearly.
          </p>
          <p className="text-[#00FF94] font-bold mt-4">
            Your goal today: choose one app idea worth exploring.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">

          <section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Use the Four-Part Idea Test
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mb-6">
    A strong first app idea does not need to be revolutionary. It should pass
    four simple tests.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        1. A Clear Problem
      </h3>
      <p className="text-gray-300 leading-relaxed">
        The app should solve a frustration, delay, repeated task, missed
        opportunity, or organizational problem.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        2. A Specific User
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Identify exactly who will use it. “Small-business owners” is broad.
        “Independent house cleaners” is specific.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        3. A Simple First Version
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Your first version should perform one valuable job clearly instead of
        trying to include every possible feature.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        4. A Real Benefit
      </h3>
      <p className="text-gray-300 leading-relaxed">
        The app should save time, reduce mistakes, improve service, organize
        information, increase sales, or make life easier.
      </p>
    </div>
  </div>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    Turn a Problem Into an App Idea
  </h2>

  <p className="text-gray-200 leading-relaxed mb-5">
    Use this simple sentence to shape your idea:
  </p>

  <div className="rounded-xl border border-gray-700 bg-black/30 p-5 text-lg text-white">
    My app will help <span className="text-emerald-400">a specific user</span>{" "}
    solve <span className="text-emerald-400">a clear problem</span> by providing{" "}
    <span className="text-emerald-400">one useful solution</span>.
  </div>

  <div className="mt-6 space-y-4 text-gray-300">
    <p>
      <strong className="text-white">Example:</strong> My app will help
      independent house cleaners create faster customer estimates by providing
      a simple room-by-room quote calculator.
    </p>

    <p>
      <strong className="text-white">Example:</strong> My app will help a local
      church manage volunteers by providing one place for schedules, reminders,
      and sign-ups.
    </p>

    <p>
      <strong className="text-white">Example:</strong> My app will help pet
      groomers reduce missed appointments by sending customers booking
      confirmations and reminders.
    </p>
  </div>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Validate the Idea Before You Build
  </h2>

  <p className="text-gray-300 leading-relaxed mb-5">
    Speak with at least three people who might actually use the app. You are not
    trying to sell them yet. You are trying to understand whether the problem
    is real.
  </p>

  <ul className="list-disc space-y-3 pl-6 text-gray-200">
    <li>How do you handle this problem now?</li>
    <li>What is the most frustrating part of the current process?</li>
    <li>How often does the problem happen?</li>
    <li>What does the problem cost in time, money, mistakes, or lost business?</li>
    <li>What would make a simple solution genuinely useful?</li>
  </ul>

  <p className="mt-5 font-semibold text-emerald-400">
    Do not merely ask, “Do you like my app idea?” People may say yes to be
    polite. Ask about their real behavior, frustrations, and current solutions.
  </p>
</section>

<section className="mt-12 rounded-2xl bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Lesson 2 Final Choice
  </h2>

  <p className="text-gray-300 mb-5">
    Review your ten ideas and choose the one that scores best in these areas:
  </p>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>I understand the problem.</li>
    <li>I know who the intended user is.</li>
    <li>The first version can remain simple.</li>
    <li>The app provides a clear and useful benefit.</li>
    <li>I can speak with real potential users about it.</li>
  </ol>

  <div className="mt-6 rounded-xl border border-emerald-500/40 bg-black/30 p-5">
    <p className="font-semibold text-emerald-400 mb-2">
      Complete this sentence:
    </p>

    <p className="text-lg text-white">
      My first app will help __________ solve __________ by __________.
    </p>
  </div>

  <p className="mt-5 text-gray-300">
    This will be the app idea you carry into the next lesson. You may improve
    or change it later, but for now, make a decision and move forward.
  </p>
</section> 

          <a href="/lesson-1" className="bg-gray-700 px-6 py-3 rounded-xl">
            Previous Lesson
          </a>

          <a href="/lesson-3" className="bg-[#00FF94] text-black font-bold px-6 py-3 rounded-xl">
            Go to Lesson 3
          </a>
        </div>
      </section>
    </main>
  );
} 
