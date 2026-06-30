export default function Dashboard() {
  const lessons = [
    "Welcome to APPTLY",
    "Choose Your First App Idea",
    "Build with AI",
    "Launch Your App",
    "Monetize Your App",
  ];

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-5xl mx-auto space-y-10">

        <div className="mb-8">
  <img
    src="/apptly-logo.png"
    alt="APPTLY"
    className="h-28 w-auto"
  />
</div>
        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Member Dashboard
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-3">
            Welcome to APPTLY
          </h1>
          <p className="text-gray-300 text-xl mt-4 max-w-2xl">
            Start here. Follow the lessons one step at a time and build your first AI-powered app.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-3">A Message from Terry</h2>
          <p className="text-gray-300 leading-relaxed">
            I built APPTLY at 72 without knowing how to code. If I can learn this, you can too. Take your time, follow the steps, and keep moving forward.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-5">Start Your Lessons</h2>
          <div className="grid gap-4">
            {lessons.map((lesson, index) => {
              const card = (
                <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#00FF94]/50 transition">
                  <div>
                    <p className="text-[#00FF94] font-bold">Lesson {index + 1}</p>
                    <h3 className="text-xl font-bold">{lesson}</h3>
                  </div>
                  <span className="text-gray-400">
                    {index <= 2 ? "Start Lesson" : "Coming Soon"}
                  </span>
                </div>
              );

              return index <= 2 ? (
                <a key={lesson} href={`/lesson-${index + 1}`} 
                  {card}
                </a>
              ) : (
                <div key={lesson}>{card}</div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">Invite Friends & Earn</h2>
            <p className="text-gray-300">
              APPTLY Partners will let you earn commissions by sharing APPTLY with others.
            </p>
            <p className="text-[#00FF94] font-bold mt-4">Coming Soon</p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">Bonus Resources</h2>
            <p className="text-gray-300">
              Prompts, templates, checklists, and tools will be added here as the course grows.
            </p>
            <p className="text-[#00FF94] font-bold mt-4">Coming Soon</p>
          </div>
        </div>
      </section>
    </main>
  );
} 
