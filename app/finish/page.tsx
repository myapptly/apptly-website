export default function FinishPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-5xl mx-auto space-y-10 text-center">
        <img
          src="/finish2.png"
          alt="Congratulations APPTLY completion"
          className="w-full rounded-2xl border border-[#00FF94]/30 shadow-2xl"
        />

        <div className="bg-[#1A1A1A] border border-[#00FF94]/30 rounded-2xl p-6 text-left space-y-4">
          <h1 className="text-4xl font-black text-[#00FF94]">
            Congratulations!
          </h1>
          <h2 className="text-2xl font-bold">
            You&apos;re officially an AI app builder.
          </h2>
          <p className="text-gray-300 leading-relaxed">
            You didn&apos;t just finish a course. You learned how to take an idea,
            work with AI, edit code, use screenshots, commit changes in GitHub,
            publish with Vercel, test your work, and keep improving.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 text-left space-y-4">
          <h2 className="text-2xl font-bold text-white">Meet Cliff</h2>
          <p className="text-gray-300 leading-relaxed">
            I call my AI Partner <strong>Cliff</strong> because I watched 
            <em> Cheers</em>. Cliff Clavin was the mailman who always seemed to
            have an answer for everything — even when nobody asked.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My Cliff is a little different. He explains code, fixes mistakes,
            helps create graphics, troubleshoots problems, and keeps helping
            when you get stuck.
          </p>
          <p className="text-[#00FF94] font-bold">
            AI is not your replacement. It is your building partner.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 text-left space-y-4">
          <h2 className="text-2xl font-bold">Remember This</h2>
          <p className="text-gray-300 leading-relaxed">
            The best apps are not built by AI alone. They are built by people who
            learn how to work with AI.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You build. AI helps. You launch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            className="bg-[#00FF94] text-black font-bold px-8 py-4 rounded-full text-center"
          >
            Return to Dashboard
          </a>
          <a
            href="/lesson-1"
            className="bg-white text-black font-bold px-8 py-4 rounded-full text-center"
          >
            Start Again
          </a>
        </div>
      </section>
    </main>
  );
} 
