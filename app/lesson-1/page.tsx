export default function LessonOne() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-4xl mx-auto space-y-8">
        <a href="/dashboard" className="text-[#00FF94] font-bold">
          ← Back to Dashboard
        </a>

        <img
  src="/new%20logo.png"
  alt="APPTLY Logo"
  className="mx-auto w-[300px] max-w-full h-auto"
/>

        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Lesson 1
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-3">
            Welcome to APPTLY
          </h1>
          <p className="text-gray-300 text-xl mt-4">
          Follow the steps, complete each action, and build your first real AI-powered app.          
          </p>

         <div className="mt-10 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
  <h2 className="text-2xl font-bold">Need Help Along the Way?</h2>

  <p className="text-gray-300 leading-relaxed">
    If you ever get stuck while building, Lesson 11 explains the complete APPTLY workflow:
    ChatGPT, GitHub, Vercel, screenshots, testing, fixing, and repeating.
  </p>

  <a
    href="/lesson-11"
    className="inline-block px-6 py-3 rounded-xl bg-[#00FF94] text-black font-semibold hover:opacity-90 transition"
  >
    Go To Lesson 11 For Help →
  </a>
</div>
         
        <div className="my-10">
  <img
    src="/welcome to apptly.png"
    alt="Welcome To Apptly"
    className="w-full rounded-2xl border border-[#00FF94]/30 shadow-2xl"
  />
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
          <h2 className="text-2xl font-bold">Quick App-Idea Brainstorm</h2>
          <p className="text-gray-300 leading-relaxed">
            Open a notebook or document and write down three app ideas. They do not have to be perfect. Start with problems you understand, hobbies you enjoy, or things people ask you for help with.
          </p>
          <p className="text-[#00FF94] font-bold">
            Your goal today is simple: choose one idea worth exploring.
          </p>
        </div>

          <div className="bg-[#1A1A1A] border border-[#00FF94]/30 rounded-2xl p-6 space-y-4">
  <h2 className="text-2xl font-bold text-[#00FF94]">
    Your First Tiny Build: Hello World
  </h2>

  <p className="text-gray-300 leading-relaxed">
    Before building a full app, start with the smallest possible win. Ask AI to
    help you create a simple page that says hello.
  </p>

  <div className="bg-black/40 border border-white/10 rounded-xl p-5">
    <p className="text-gray-300 font-bold mb-2">Copy this prompt:</p>
    <p className="text-gray-200 leading-relaxed">
      Act as an app-building coach. Help me create a very simple starter app
      page that says: Hello World. Keep it beginner-friendly. Explain each step
      clearly and tell me exactly where to paste the code.
    </p>
  </div>

  <p className="text-gray-300 leading-relaxed">
    The goal is not to build something impressive yet. The goal is to prove that
    you can ask AI for help, follow instructions, make a small change, and see it
    work.
  </p>

  <p className="text-[#00FF94] font-bold">
    Small wins create confidence.
  </p>
</div> 

<section className="mt-12 rounded-2xl bg-gray-900 p-6">
  <h2 className="text-2xl font-bold text-white mb-4">
    Lesson 1 Action Step
  </h2>

  <p className="text-gray-300 mb-4">
    Choose three businesses you already know. For each business, answer:
  </p>

  <ol className="list-decimal space-y-3 pl-6 text-gray-200">
    <li>What problem does the business repeatedly face?</li>
    <li>
      Could an app save time, improve service, increase sales, or organize
      information?
    </li>
    <li>What would the simplest useful version of that app do?</li>
  </ol>

  <p className="mt-5 font-semibold text-emerald-400">
    Do not worry about how to build it yet. Begin by learning how to recognize
    valuable problems.
  </p>
</section>

        </div>

        <div className="mb-8 rounded-2xl border border-green-500/30 bg-[#121212] p-5">
  <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#00E676]">
    Your Blueprint Progress
  </p>

  <div className="flex items-center gap-2 text-xl sm:text-2xl">
    <span className="text-[#00E676]">●</span>
    <span className="text-[#00E676]">▶</span>
    <span className="ml-2 text-base font-bold text-white">
      9% Complete · 1 of 11 Lessons
    </span>
  </div>
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
