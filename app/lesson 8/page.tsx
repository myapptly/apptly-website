export default function Lesson8() {
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
            Lesson 8
          </p>

          <h1 className="text-5xl font-black mt-3">
            Build Your Brand
          </h1>

          <p className="text-gray-300 mt-4 text-xl">
            People buy from people they know, like, and trust.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">You Are Your Biggest Advantage</h2>

          <p className="text-gray-300 leading-relaxed">
            Thousands of people can build apps with AI.
            Nobody has your experiences, personality, ideas, or story.
            Your personal journey is something no competitor can copy.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">People Follow People</h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Tell your story.</li>
            <li>✅ Share what you're learning.</li>
            <li>✅ Celebrate small wins.</li>
            <li>✅ Admit mistakes.</li>
            <li>✅ Be helpful every day.</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Build Trust First</h2>

          <p className="text-gray-300 leading-relaxed">
            Don't focus on selling every day.
            Focus on helping people solve problems.
            When you consistently provide value, sales become much easier.
          </p>
        </div>

        <div className="bg-[#0D0D0D] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>

          <p className="text-gray-300 leading-relaxed">
            Write a short story about why you decided to build your app.
            Share it on social media or save it for your website.
            Authentic stories create lasting connections.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Founder's Note</h2>

          <p className="text-gray-300 leading-relaxed">
            You don't need to pretend to be an expert.
            Just be honest about where you are, what you're learning,
            and where you're headed. People appreciate authenticity far
            more than perfection.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="/lesson-7"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ← Previous Lesson
          </a>

          <a
            href="/lesson-9"
            className="bg-[#00FF94] text-black hover:bg-[#00dd80] px-6 py-3 rounded-xl font-bold transition"
          >
            Go To Lesson 9 →
          </a>
        </div>

      </section>
    </main>
  );
} 
