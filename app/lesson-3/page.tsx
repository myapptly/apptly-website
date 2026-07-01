export default function Lesson3() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
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
            Lesson 3
          </p>
          <h1 className="text-5xl font-black mt-3">Build with AI</h1>
          <p className="text-gray-300 mt-4 text-xl">
            You do not need to code from scratch. You need to learn how to clearly tell AI what you want.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">AI Is Your Building Partner</h2>
          <p className="text-gray-300 leading-relaxed">
            AI can help you plan, write, design, debug, and improve your app. Your job is not to become
            a professional programmer overnight. Your job is to describe the app clearly, test what AI
            creates, and keep improving it one step at a time.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">The Simple AI App-Building Process</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Describe the problem your app solves</li>
            <li>✅ Ask AI for a simple version first</li>
            <li>✅ Test what it gives you</li>
            <li>✅ Fix one issue at a time</li>
            <li>✅ Improve the design after the basic app works</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Good First Prompt</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Use this prompt when you are ready to begin:
          </p>

          <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-5 text-gray-200">
            I want to build a simple app for beginners. The app should help [who it helps] solve
            [the problem]. Please give me a simple version first, with the main features, page layout,
            and step-by-step build plan.
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Common Beginner Mistakes</h2>
          <ul className="space-y-3 text-gray-300">
            <li>❌ Trying to build too many features at once</li>
            <li>❌ Changing the design before the basic app works</li>
            <li>❌ Starting over instead of fixing one issue</li>
            <li>❌ Asking AI vague questions</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Assignment</h2>
          <p className="text-gray-300 leading-relaxed">
            Take the app idea you chose in Lesson 2 and write a clear AI prompt for it. Your prompt should
            explain who the app helps, what problem it solves, and what simple first version you want to build.
          </p>
          <p className="text-[#00FF94] font-bold mt-4">
            Your goal today: create one clear AI build prompt for your first app.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/lesson-2" className="bg-gray-700 px-6 py-3 rounded-xl">
            Previous Lesson
          </a>

          <a href="/lesson-4" className="bg-[#00FF94] text-black font-bold px-6 py-3 rounded-xl">
            Go to Lesson 4
          </a>
        </div>
      </section>
    </main>
  );
} 
