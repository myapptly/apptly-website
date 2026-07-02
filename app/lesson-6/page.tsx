export default function Lesson6() {
  return (
    <main className="min-h-screen bg-[#000000] text-white px-6 py-10">
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
            Lesson 6
          </p>
          <h1 className="text-5xl font-black mt-3">Grow Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            Your first version is only the beginning. Growth comes from listening, improving, and showing up consistently.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Version 1 Is Not the Finish Line</h2>
          <p className="text-gray-300 leading-relaxed">
            Launching your app is a major accomplishment, but it is not the end. It is the start of learning what people actually need, what they understand, and what they are willing to use.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            The best apps do not become great because they launch perfectly. They become great because they keep improving.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Listen to Feedback</h2>
          <p className="text-gray-300 leading-relaxed">
            Every user comment is a clue. When someone says something is confusing, slow, missing, or hard to understand, they are giving you information you can use.
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li>✅ What confused them?</li>
            <li>✅ What did they like?</li>
            <li>✅ What did they ignore?</li>
            <li>✅ What did they ask for?</li>
            <li>✅ What would make the app easier?</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Improve One Thing at a Time</h2>
          <p className="text-gray-300 leading-relaxed">
            Do not try to rebuild the whole app every time you get an idea. That creates confusion and slows you down.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Pick one improvement. Make it. Test it. Then move to the next one.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Use AI as Your App Advisor</h2>
          <p className="text-gray-300 leading-relaxed">
            AI can help you improve your app after launch. Ask it questions like:
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li>💬 How can I make this page clearer?</li>
            <li>💬 What might confuse a beginner?</li>
            <li>💬 What should I improve before adding new features?</li>
            <li>💬 How can I make this app feel more professional?</li>
          </ul>
        </div>

        <div className="bg-[#0d0d0d] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Write down three things you can improve in your app this week. Do not add three new features. Improve what already exists.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Cliff&apos;s Tip</h2>
          <p className="text-gray-300 leading-relaxed">
            A simple app that keeps getting better is more valuable than a complicated app that never gets finished.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
  <a
    href="/lesson-5"
    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition"
  >
    ← Previous Lesson
  </a>

  <a
    href="/lesson-7"
    className="bg-[#00FF94] text-black hover:bg-[#00dd80] px-6 py-3 rounded-xl font-bold transition"
  >
    Go To Lesson 7 →
  </a>
</div> 

      </section>
    </main>
  );
} 
