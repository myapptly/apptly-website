export default function Lesson4() {
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
            Lesson 4
          </p>
          <h1 className="text-5xl font-black mt-3">Launch Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            Your first launch does not need to be perfect. It needs to be real.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Do Not Wait for Perfect</h2>
          <p className="text-gray-300 leading-relaxed">
            Many beginners never launch because they keep trying to make everything perfect.
            A simple working version is enough to start. Real people will teach you what to improve.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your First Users</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Friends and family</li>
            <li>✅ Local business owners</li>
            <li>✅ Facebook groups</li>
            <li>✅ Existing customers or contacts</li>
            <li>✅ People who already have the problem your app solves</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">What to Ask for Feedback</h2>
          <ul className="space-y-3 text-gray-300">
            <li>1. What confused you?</li>
            <li>2. What did you like?</li>
            <li>3. What felt unnecessary?</li>
            <li>4. What would make this more useful?</li>
            <li>5. Would you use this again?</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Improve One Thing at a Time</h2>
          <p className="text-gray-300 leading-relaxed">
            Do not rebuild the whole app after your first feedback. Pick one important improvement,
            fix it, test again, and keep moving. Small improvements create real progress.
          </p>
        </div>

        <section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Start With a Soft Launch
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mb-6">
    A soft launch means sharing your app with a small group before promoting it
    publicly. This gives you time to find confusing instructions, broken
    buttons, missing information, and features that need improvement.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        Soft Launch
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Share the app with five to ten trusted users. Watch how they use it,
        collect feedback, and correct the most important problems.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-500/30 bg-gray-900 p-5">
      <h3 className="text-xl font-semibold text-white mb-2">
        Public Launch
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Promote the app more broadly after the basic experience works and your
        first users understand its value.
      </p>
    </div>
  </div>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Your Pre-Launch Checklist
  </h2>

  <div className="space-y-3 text-gray-200">
    {[
      "The app loads correctly on both a computer and a phone.",
      "The main buttons and links work.",
      "The instructions are easy to understand.",
      "The app clearly explains who it helps and what it does.",
      "Users can complete the app’s main task.",
      "Spelling, prices, contact information, and branding are correct.",
      "You have tested the app yourself more than once.",
      "You have saved or committed the latest working version.",
    ].map((item) => (
      <div
        key={item}
        className="flex gap-3 rounded-lg border border-gray-700 bg-black/20 p-4"
      >
        <span className="text-emerald-400">✓</span>
        <p>{item}</p>
      </div>
    ))}
  </div>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    Invite Your First Test Users
  </h2>

  <p className="text-gray-200 leading-relaxed mb-5">
    Do not merely send someone a link and ask whether they like it. Give them a
    specific task to complete and ask them to describe their experience.
  </p>

  <div className="rounded-xl border border-gray-700 bg-black/30 p-5">
    <p className="font-semibold text-white mb-3">
      Sample invitation:
    </p>

    <p className="text-gray-300 leading-relaxed">
      I am testing a new app that helps [type of user] accomplish [main
      purpose]. Would you try it and complete [specific task]? Please tell me
      anything that is confusing, difficult, unnecessary, or especially
      helpful. Honest feedback will help me improve it.
    </p>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-3xl font-bold text-emerald-400 mb-4">
    Organize the Feedback
  </h2>

  <p className="text-gray-300 leading-relaxed mb-6">
    Not every suggestion should become a feature. Record the feedback and
    separate it into useful categories.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
    {[
      [
        "Critical Problems",
        "The app crashes, a button does not work, information is missing, or the main task cannot be completed.",
      ],
      [
        "Confusing Areas",
        "Users do not understand the wording, navigation, instructions, or purpose of a feature.",
      ],
      [
        "Useful Improvements",
        "Changes that make the existing app faster, clearer, easier, or more valuable.",
      ],
      [
        "Future Ideas",
        "Interesting features that are not necessary for the first working version.",
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
    Decide What to Fix First
  </h2>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>Fix anything that prevents the app from working.</li>
    <li>Correct anything that confuses several users.</li>
    <li>Improve the app’s main task before adding new features.</li>
    <li>Save design improvements until the basic experience works.</li>
    <li>Keep future ideas on a separate list instead of building them now.</li>
  </ol>

  <p className="mt-5 font-semibold text-emerald-400">
    One finished, useful app is more valuable than ten unfinished features.
  </p>
</section>

<section className="mt-12 rounded-2xl border border-emerald-500/40 bg-black/30 p-6">
  <h2 className="text-2xl font-bold text-emerald-400 mb-4">
    Ask for a Testimonial
  </h2>

  <p className="text-gray-300 leading-relaxed mb-5">
    When someone has used the app successfully, ask for a short statement you
    can use in your portfolio or marketing.
  </p>

  <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-gray-200">
    The app helped me __________. Before using it, I struggled with __________.
    The most useful part was __________. I would recommend it to __________.
  </div>

  <p className="mt-5 text-gray-300">
    Always ask permission before publishing a person’s name, business name,
    photograph, or testimonial.
  </p>
</section>

<section className="mt-12 rounded-2xl bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Your Lesson 4 Launch Report
  </h2>

  <p className="text-gray-300 mb-5">
    After your soft launch, write down:
  </p>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>Who tested the app</li>
    <li>What task you asked them to complete</li>
    <li>What worked well</li>
    <li>What confused them</li>
    <li>The most important problem you corrected</li>
    <li>One improvement you will make next</li>
  </ol>

  <p className="mt-5 font-semibold text-emerald-400">
    Launching is not the end of building. It is the beginning of learning from
    real users.
  </p>
</section> 

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Assignment</h2>
          <p className="text-gray-300 leading-relaxed">
            Share your app idea or first version with at least five people. Write down their feedback
            without arguing or defending the app.
          </p>
          <p className="text-[#00FF94] font-bold mt-4">
            Your goal today: collect feedback and choose the top three improvements.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/lesson-3" className="bg-gray-700 px-6 py-3 rounded-xl">
            Previous Lesson
          </a>

          <a href="/lesson-5" className="bg-[#00FF94] text-black font-bold px-6 py-3 rounded-xl">
            Go to Lesson 5
          </a>
        </div>
      </section>
    </main>
  );
} 
