export default function Lesson2() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">

        <a
          href="/dashboard"
          className="text-[#00FF94] font-bold hover:underline"
        >
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
            Every successful app begins with solving one real problem.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Great App Ideas Usually...
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Solve a problem you already understand</li>
            <li>✅ Save people time</li>
            <li>✅ Make life easier</li>
            <li>✅ Help businesses earn or save money</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Your Assignment
          </h2>

          <p className="text-gray-300">
            Write down 10 app ideas. Don't judge them yet. Some of the best businesses began as simple ideas.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="/lesson-1"
            className="bg-gray-700 px-6 py-3 rounded-xl"
          >
            Previous Lesson
          </a>

          <a
            href="/dashboard"
            className="bg-[#00FF94] text-black font-bold px-6 py-3 rounded-xl"
          >
            Return to Dashboard
          </a>
        </div>

      </section>
    </main>
  );
} 
