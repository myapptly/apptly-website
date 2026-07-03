export default function Lesson6() {
  return (
    <main className="min-h-screen bg-[#000000] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold hover:underline">
          ← Back to Dashboard
        </a>

        <img
          src="/new logo.png"
          alt="APPTLY Logo"
          className="mx-auto w-[300px] max-w-full h-auto"
        />

        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Lesson 6
          </p>
          <h1 className="text-5xl font-black mt-3">Grow Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            Your first version is only the beginning. Growth comes from listening,
            improving, and showing up consistently.
          </p>
        </div>

        <div className="my-10">
          <img
            src="/build to profit.png"
            alt="Grow Your App"
            className="w-full rounded-2xl border border-[#00FF94]/30 shadow-2xl"
          />
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Version 1 Is Not the Finish Line</h2>
          <p className="text-gray-300 leading-relaxed">
            Launching your app is a major accomplishment, but it is not the end.
            It is the start of learning what people actually need, what confuses them,
            and what would make your app more useful.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The best apps do not become great because they launch perfectly. They become
            great because they keep improving.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Listen Before You Add</h2>
          <p className="text-gray-300 leading-relaxed">
            Beginners often make the mistake of adding more features too quickly.
            More features can make an app harder to use, harder to explain, and harder
            to finish.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Before you add anything new, ask what your users are actually doing.
            Watch where they get stuck. Notice what questions they ask. Their confusion
            is feedback.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Questions to Ask Users</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ What confused you?</li>
            <li>✅ What did you like?</li>
            <li>✅ What did you ignore?</li>
            <li>✅ What did you wish was easier?</li>
            <li>✅ What would make this more useful?</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Improve One Thing at a Time</h2>
          <p className="text-gray-300 leading-relaxed">
            Do not try to rebuild the whole app every time you get an idea.
            That creates confusion and slows you down.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Pick one improvement. Make it. Test it. Then move to the next one.
            Simple progress repeated over time is how real apps grow.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Use AI as Your App Advisor</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI can help you improve your app after launch. Ask it questions like:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>💬 How can I make this page clearer?</li>
            <li>💬 What might confuse a beginner?</li>
            <li>💬 What should I improve before adding new features?</li>
            <li>💬 How can I make this app feel more professional?</li>
          </ul>
        </div>

        <div className="bg-[#000000] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Write down three things you can improve in your app this week. Do not add
            three new features. Improve what already exists.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Little Reminder</h2>
          <p className="text-gray-300 leading-relaxed">
            A simple app that keeps getting better is more valuable than a complicated
            app that never gets finished.
          </p>
        </div>

        <div className="flex justify-between items-center mt-10">
  <a
    href="/lesson-5"
    className="px-6 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 transition"
  >
    ← Previous Lesson
  </a>

  <a
    href="/lesson-7"
    className="px-6 py-3 rounded-xl bg-[#00FF94] text-black font-semibold hover:opacity-90 transition"
  >
    Go To Lesson 7 →
  </a>
</div> 

      </section>
    </main>
  );
} 
