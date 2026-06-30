export default function Lesson2() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold hover:underline">
          ← Back to Dashboard
        </a>

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
          <a href="/lesson-1" className="bg-gray-700 px-6 py-3 rounded-xl">
            Previous Lesson
          </a>

          <a href="/dashboard" className="bg-[#00FF94] text-black font-bold px-6 py-3 rounded-xl">
            Return to Dashboard
          </a>
        </div>
      </section>
    </main>
  );
} 
