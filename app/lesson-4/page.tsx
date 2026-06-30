export default function Lesson4() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold hover:underline">
          ← Back to Dashboard
        </a>

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
