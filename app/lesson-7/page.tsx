export default function Lesson7() {
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
            Lesson 7
          </p>
          <h1 className="text-5xl font-black mt-3">Market Your App</h1>
          <p className="text-gray-300 mt-4 text-xl">
            The best app in the world will not succeed if nobody knows it exists.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Share Before You Feel Ready</h2>
          <p className="text-gray-300 leading-relaxed">
            You do not need a perfect app before you start talking about it.
            People enjoy watching something being built. Share your progress,
            your lessons, your mistakes, and your wins.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">You Already Have Content</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✅ What problem your app solves</li>
            <li>✅ Why you built it</li>
            <li>✅ A feature you just added</li>
            <li>✅ A mistake you fixed</li>
            <li>✅ A screenshot or demo video</li>
            <li>✅ A customer success story</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Where to Post</h2>
          <p className="text-gray-300 leading-relaxed">
            You do not need to be everywhere. Start with two or three places
            where your future customers already spend time.
          </p>
          <ul className="space-y-3 text-gray-300 mt-4">
            <li>✅ Facebook</li>
            <li>✅ Instagram</li>
            <li>✅ LinkedIn</li>
            <li>✅ TikTok</li>
            <li>✅ YouTube Shorts</li>
            <li>✅ Reddit or niche groups</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Let AI Help You Market</h2>
          <ul className="space-y-3 text-gray-300">
            <li>💬 Write a Facebook post about today&apos;s update.</li>
            <li>💬 Turn this into a LinkedIn post.</li>
            <li>💬 Give me five short posts for X.</li>
            <li>💬 Create a 30-second TikTok script.</li>
            <li>💬 Write an email announcing my launch.</li>
          </ul>
        </div>

        <div className="bg-[#0d0d0d] border border-[#00FF94]/40 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Your Action Step</h2>
          <p className="text-gray-300 leading-relaxed">
            Post something about your app today. It does not have to sell.
            Just share your progress. People love following builders.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Cliff&apos;s Tip</h2>
          <p className="text-gray-300 leading-relaxed">
            Marketing is not convincing people to buy. It is helping the right
            people discover something that can genuinely help them.
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <a href="/lesson-6" className="text-[#00FF94] font-bold hover:underline">
            ← Previous Lesson
          </a>
          <a href="/lesson-8" className="text-[#00FF94] font-bold hover:underline">
            Next Lesson →
          </a>
        </div>
      </section>
    </main>
  );
} 
