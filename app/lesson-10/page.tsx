export default function Lesson10() {
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
            Lesson 10
          </p>
          <h1 className="text-5xl font-black mt-3">Your Next App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            Finishing this course is not the end. It is the beginning of what you can build next.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">You Built More Than an App</h2>
          <p className="text-gray-300 leading-relaxed">
            You learned how to think through an idea, use AI as a building partner,
            launch something real, improve it, market it, and grow it.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            That is a skill you can use again and again.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Second App Will Be Easier</h2>
          <p className="text-gray-300 leading-relaxed">
            The first app teaches you the process. The second app lets you move faster.
            You now understand the path: idea, build, launch, improve, market, and grow.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Keep Building Useful Things</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Build apps that solve real problems</li>
            <li>✅ Start simple</li>
            <li>✅ Listen to users</li>
            <li>✅ Improve one thing at a time</li>
            <li>✅ Use AI to move faster</li>
            <li>✅ Keep learning by building</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Share What You Learned</h2>
          <p className="text-gray-300 leading-relaxed">
            When people ask how you learned to build apps with AI, share your story.
            Show them what you built. Help them believe they can start too.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            If APPTLY helped you, tell someone else who could use it.
          </p>
        </div>

        <div className="bg-[#0d0d0d] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Final Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Write down your next app idea today. It does not have to be perfect.
            It only has to be worth exploring.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Little Reminder</h2>
          <p className="text-gray-300 leading-relaxed">
            You did not just finish ten lessons. You proved that you can learn something new,
            build something real, and keep going. Do not let this be your last app.
            Let it be your first.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">A Final Word From Terry</h2>
          <p className="text-gray-300 leading-relaxed">
            Thank you for taking this journey with me. APPTLY was built for people who may
            have thought app building was out of reach. I hope these lessons helped you see
            that with AI, patience, and a willingness to keep learning, you can build more
            than you ever expected.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Keep building. Keep improving. Keep proving to yourself what is possible.
          </p>
          <p className="text-[#00FF94] font-bold mt-4">
            — Terry Bledsoe, Founder of APPTLY
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="/lesson-9"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ← Previous Lesson
          </a>

          <a
            href="/dashboard"
            className="bg-[#00FF94] text-black hover:bg-[#00dd80] px-6 py-3 rounded-xl font-bold transition"
          >
            Return to Dashboard
          </a>
        </div>
      </section>
    </main>
  );
} 
