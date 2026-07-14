export default function Lesson7() {
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
            Lesson 7
          </p>
          <h1 className="text-5xl font-black mt-3">Market Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            The best app in the world will not succeed if nobody knows it exists.
          </p>
        </div>

        <div className="my-10">
          
        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Marketing Is Not Begging</h2>
          <p className="text-gray-300 leading-relaxed">
            Marketing is not about annoying people, bragging, or trying to sound like a big company.
            Marketing simply means helping the right people discover something that may help them.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If your app solves a real problem, people need a way to find it, understand it,
            and decide whether it is for them.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Start With One Simple Message</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Do not try to explain everything your app does. Start with one clear sentence:
          </p>
          <div className="bg-black/40 border border-[#00FF94]/30 rounded-xl p-5 text-gray-200">
            My app helps <span className="text-[#00FF94] font-bold">[who]</span> do{" "}
            <span className="text-[#00FF94] font-bold">[what]</span> so they can{" "}
            <span className="text-[#00FF94] font-bold">[benefit]</span>.
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Where to Share First</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Your personal Facebook page</li>
            <li>✅ Facebook groups where the topic fits</li>
            <li>✅ Instagram posts or stories</li>
            <li>✅ TikTok or YouTube Shorts</li>
            <li>✅ LinkedIn if your app helps professionals or businesses</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Do Not Sell Too Hard at First</h2>
          <p className="text-gray-300 leading-relaxed">
            In the beginning, your goal is not to sound like an expert marketer. Your goal is to start
            conversations. Share what you built, why you built it, who it helps, and what you are learning.
          </p>
          <p className="text-gray-300 leading-relaxed">
            People are often more interested in the story behind the app than the app itself.
            Let them follow the journey.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Let AI Help You Market</h2>
          <ul className="space-y-3 text-gray-300">
            <li>💬 Write a Facebook post about today's update.</li>
            <li>💬 Turn this into a LinkedIn post.</li>
            <li>💬 Give me five short posts for X.</li>
            <li>💬 Create a 30-second TikTok script.</li>
            <li>💬 Write an email announcing my launch.</li>
          </ul>
        </div>

        <div className="bg-[#000000] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Post something about your app today. It does not have to sell. Just share your progress.
            People love following builders.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Little Reminder</h2>
          <p className="text-gray-300 leading-relaxed">
            Marketing is not convincing people to buy. It is helping the right people discover something
            that can genuinely help them.
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
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">▶</span>

    <span className="ml-2 text-base font-bold text-white">
      64% Complete · 7 of 11 Lessons
    </span>
  </div>
</div> 

        <div className="flex gap-4 mt-10">
          <a
            href="/lesson-6"
            className="px-6 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 transition"
          >
            ← Previous Lesson
          </a>

          <a
            href="/lesson-8"
            className="px-6 py-3 rounded-xl bg-[#00FF94] text-black font-semibold hover:opacity-90 transition"
          >
            Go To Lesson 8 →
          </a>
        </div>
      </section>
    </main>
  );
} 
