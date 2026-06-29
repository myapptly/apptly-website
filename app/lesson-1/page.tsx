export default function LessonOne() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold">
          ← Back to Dashboard
        </a>

        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Lesson 1
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-3">
            Welcome to APPTLY
          </h1>
          <p className="text-gray-300 text-xl mt-4">
            This is where your AI app-building journey begins.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">What APPTLY Is</h2>
          <p className="text-gray-300 leading-relaxed">
            APPTLY is a step-by-step learning platform that helps ordinary people use AI tools to build real apps, launch them, and begin thinking like app owners.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You do not need to know how to code. You do not need to be young, technical, or experienced. You just need curiosity, patience, and a willingness to follow the process.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">What You'll Build</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Your first AI-powered app idea</li>
            <li>✅ A simple working app structure</li>
            <li>✅ A plan to launch and improve it</li>
            <li>✅ A path toward monetizing your idea</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Your First Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Open a notebook or document and write down three app ideas. They do not have to be perfect. Start with problems you understand, hobbies you enjoy, or things people ask you for help with.
          </p>
          <p className="text-[#00FF94] font-bold">
            Your goal today is simple: choose one idea worth exploring.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/lesson-2"
            className="bg-[#00FF94] text-black font-bold px-6 py-4 rounded-full text-center"
          >
            Go to Lesson 2
          </a>
          <a
            href="/dashboard"
            className="bg-white text-black font-bold px-6 py-4 rounded-full text-center"
          >
            Return to Dashboard
          </a>
        </div>
      </section>
    </main>
  );
}
