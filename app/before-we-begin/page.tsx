export default function BeforeWeBegin() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
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
            Before We Begin
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-3">
            What You're Really About to Do
          </h1>
          <p className="text-gray-300 text-xl mt-4">
            AI can help you build apps, but you still need a process. This page explains what that process really looks like.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#00FF94]">Welcome to APPTLY</h2>
          <p className="text-gray-300 leading-relaxed">
            If you're reading this, there's a good chance you've never built an app before.
            Maybe you've never written a line of code. Maybe you've heard of AI but have no idea
            how people are using it to build software.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If that's you, you're exactly who I wrote APPTLY for.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Forget the Magic Button Idea</h2>
          <p className="text-gray-300 leading-relaxed">
            One of the biggest misconceptions about AI is that you type an idea into ChatGPT
            and a finished app magically appears. It doesn't work that way.
          </p>
          <p className="text-gray-300 leading-relaxed">
            AI is an incredible assistant, but it still needs someone to organize the project,
            make decisions, test the results, and keep everything moving.
          </p>
          <p className="text-[#00FF94] font-bold">
            You're not becoming a software engineer. You're becoming the project manager of your own app.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">

          <div className="my-8">
  <img
    src="/before-we-begin.png"
    alt="Before We Begin"
    className="w-full rounded-2xl border border-[#00FF94]/30 shadow-2xl"
  />
</div>
          
          <h2 className="text-2xl font-bold">Your Laptop Is Your Workshop</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ An AI platform like ChatGPT</li>
            <li>✅ GitHub to store your project</li>
            <li>✅ Vercel to publish your app</li>
            <li>✅ Your email account for confirmations and codes</li>
            <li>✅ Google Chrome with several tabs open</li>
            <li>✅ Your cellphone for verification and testing</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">The Real Process</h2>
          <p className="text-gray-300 leading-relaxed">
            Open your laptop. Open AI. Describe your app idea. Write a prompt.
            Read the response. Copy code. Paste code into GitHub. Commit changes.
            Wait for Vercel. Test the app. Find what doesn't work. Go back to AI.
            Explain the problem. Get updated code. Copy, paste, commit, deploy,
            refresh, test again.
          </p>
          <p className="text-[#00FF94] font-bold">
            Repeat. That is how real apps get built.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Why It Feels Overwhelming</h2>
          <p className="text-gray-300 leading-relaxed">
            Most beginners think they're struggling because they don't know how to code.
            Usually, the real challenge is learning how all the tools fit together.
          </p>
          <p className="text-gray-300 leading-relaxed">
            After a while, though, the tools become familiar. You stop wondering where to click
            and start thinking about your app. That's when building becomes exciting.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Before We Begin Checklist</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ A laptop or desktop computer</li>
            <li>✅ A reliable internet connection</li>
            <li>✅ An email account you can access</li>
            <li>✅ A cellphone nearby</li>
            <li>✅ A ChatGPT account or another AI assistant</li>
            <li>✅ A GitHub account</li>
            <li>✅ A Vercel account</li>
            <li>✅ Google Chrome installed</li>
            <li>✅ A notebook for ideas and questions</li>
          </ul>
        </div>

        <div className="bg-[#000000] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">The Most Important Thing</h2>
          <p className="text-gray-300 leading-relaxed">
            You don't need coding experience. You don't need a computer science degree.
            You just need to be willing to learn one step at a time.
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 transition"
          >
            ← Dashboard
          </a>

          <a
            href="/lesson-1"
            className="px-6 py-3 rounded-xl bg-[#00FF94] text-black font-semibold hover:opacity-90 transition"
          >
            Start Lesson 1 →
          </a>
        </div>
      </section>
    </main>
  );
}
