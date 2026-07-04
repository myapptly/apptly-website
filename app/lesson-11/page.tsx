export default function Lesson11() {
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
            Lesson 11
          </p>
          <h1 className="text-5xl font-black mt-3">
            Build Like a Pro: Your AI Workflow
          </h1>
          <p className="text-gray-300 mt-4 text-xl">
            Learn how ChatGPT, GitHub, Vercel, screenshots, banners, testing, and fixes all work together.
          </p>
        </div>

         <div className="my-10">
  <img
    src="/the flow.png"
    alt="Lesson 11 AI Workflow"
    className="w-full rounded-2xl border border-[#00FF94]/30 shadow-2xl"
  />
</div> 
       
        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">The Real APPTLY Workflow</h2>
          <p className="text-gray-300 leading-relaxed">
            Building with AI is not one single action. It is a repeatable workflow. You ask,
            build, test, fix, and improve.
          </p>
          <div className="bg-black/40 border border-[#00FF94]/30 rounded-xl p-5 text-gray-200 text-lg leading-relaxed">
            Idea → ChatGPT → GitHub → Vercel → Test → Fix → Repeat
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">The Tabs You’ll Keep Open</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ ChatGPT — for planning, writing, coding, and troubleshooting</li>
            <li>✅ GitHub — for editing files and committing changes</li>
            <li>✅ Vercel — for deployment status and live publishing</li>
            <li>✅ Your live website — to test what users actually see</li>
            <li>✅ Your image folder or Canva — for graphics, banners, and assets</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">How to Ask AI Better Questions</h2>
          <p className="text-gray-300 leading-relaxed">
            Do not just say, “It doesn’t work.” Give AI enough information to help you.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>📸 Take a screenshot.</li>
            <li>🧭 Say what page or file you are working on.</li>
            <li>❌ Explain what went wrong.</li>
            <li>✅ Explain what you expected to happen.</li>
            <li>🧾 Include any error message if there is one.</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">The Build Cycle</h2>
          <ul className="space-y-3 text-gray-300">
            <li>1. Make one small change.</li>
            <li>2. Commit the change in GitHub.</li>
            <li>3. Wait for Vercel to deploy.</li>
            <li>4. Refresh your live website.</li>
            <li>5. Test it on desktop and mobile.</li>
            <li>6. Fix what needs fixing.</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">Making Banners, Images, and Videos</h2>
          <p className="text-gray-300 leading-relaxed">
            Graphics make your app feel more real. Use AI or Canva to create banners,
            lesson images, social posts, and short video ideas.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Save your images with simple file names like:
          </p>
          <div className="bg-black/40 border border-[#00FF94]/30 rounded-xl p-5 text-gray-200">
            lesson7-market-your-app.png<br />
            launch-your-app.png<br />
            dashboard-cover.png
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Common Beginner Problems</h2>
          <ul className="space-y-3 text-gray-300">
            <li>⚠️ The image was never uploaded to public.</li>
            <li>⚠️ The filename does not match exactly.</li>
            <li>⚠️ Capital letters or spaces caused the file not to load.</li>
            <li>⚠️ The change was edited but not committed.</li>
            <li>⚠️ Vercel is still deploying.</li>
            <li>⚠️ The browser is showing an old cached version.</li>
          </ul>
        </div>

        <div className="bg-[#000000] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Open the tools you use most: ChatGPT, GitHub, Vercel, your live app,
            and your image folder. Bookmark them. Keep them ready. This is your
            app-building command center.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Little Reminder</h2>
          <p className="text-gray-300 leading-relaxed">
            You are not just learning to build one app. You are learning a repeatable
            workflow you can use again and again.
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href="/lesson-10"
            className="px-6 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 transition"
          >
            ← Previous Lesson
          </a>

          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-[#00FF94] text-black font-semibold hover:opacity-90 transition"
          >
            Finish Course →
          </a>
        </div>
      </section>
    </main>
  );
} 
