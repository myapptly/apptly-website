export default function Lesson9() {
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
            Lesson 9
          </p>
          <h1 className="text-5xl font-black mt-3">Scale Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            Grow smarter by improving what works, automating what repeats, and listening to your users.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Growth Does Not Mean Doing Everything</h2>
          <p className="text-gray-300 leading-relaxed">
            Scaling your app does not mean adding every feature, chasing every customer, or working every hour of the day.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Real growth comes from doing more of what works and less of what wastes your time.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Improve What Already Works</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Which feature do users like most?</li>
            <li>✅ What problem does your app solve best?</li>
            <li>✅ What do people ask for again and again?</li>
            <li>✅ What makes users come back?</li>
            <li>✅ What part of the app creates the most value?</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Use AI to Save Time</h2>
          <p className="text-gray-300 leading-relaxed">
            As your app grows, repetitive tasks will appear. AI can help you handle those tasks faster.
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li>🤖 Draft customer replies</li>
            <li>🤖 Create social media posts</li>
            <li>🤖 Write FAQs and help pages</li>
            <li>🤖 Summarize customer feedback</li>
            <li>🤖 Suggest new features based on user comments</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Build a Simple Community</h2>
          <p className="text-gray-300 leading-relaxed">
            You do not need a huge audience. You need a small group of people who care about the problem your app solves.
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li>👥 Email list</li>
            <li>👥 Facebook group</li>
            <li>👥 Customer feedback form</li>
            <li>👥 User success stories</li>
            <li>👥 Early adopter updates</li>
          </ul>
        </div>

        <div className="bg-[#0d0d0d] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Write down three improvements you could make over the next 30 days.
            Then choose the one improvement that would help your users the most and start there.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Little Reminder</h2>
          <p className="text-gray-300 leading-relaxed">
            Success rarely comes from one giant breakthrough. It comes from hundreds of small improvements that add up over time.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="/lesson-8"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ← Previous Lesson
          </a>

          <a
            href="/lesson-10"
            className="bg-[#00FF94] text-black hover:bg-[#00dd80] px-6 py-3 rounded-xl font-bold transition"
          >
            Go To Lesson 10 →
          </a>
        </div>
      </section>
    </main>
  );
} 
