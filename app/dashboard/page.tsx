export default function Dashboard() {
  const lessons = [
  "Welcome to APPTLY",
  "Choose Your First App Idea",
  "Build with AI",
  "Launch Your App",
  "Monetize Your App",
  "Grow Your App",
  "Market Your App",
  "Build Your Brand",
  "Scale Your App",
  "Your Next App",
];

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10">
      <section className="max-w-5xl mx-auto space-y-10">
        <div>
          <p className="text-[#00FF94] font-bold uppercase tracking-widest text-sm">
            Member Dashboard
          </p>
         <img
  src="/new%20logo.png"
  alt="APPTLY Logo"
  className="mx-auto mt-3 w-[350px] max-w-full h-auto"
/> 
          <p className="text-gray-300 text-xl mt-4 max-w-2xl">
            Start here. Follow the lessons one step at a time and build your first AI-powered app.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-3">A Word from the Founder, Terry Bledsoe</h2>
          <p className="text-gray-300 leading-relaxed">
            <p className="text-gray-300 leading-relaxed">
  I want to personally thank you for trusting me and choosing APPTLY.
  Just a short time ago, I had never built an app, never written code,
  and honestly wasn't sure someone my age could learn something this new.
  Then I discovered that AI changed everything.
  <br /><br />
  I created APPTLY because I believe ordinary people can build
  extraordinary things when they have the right guidance. My goal isn't
  just to help you build one app; my goal is to help you realize that you are capable
  of creating something meaningful, regardless of your age or technical
  experience.
  <br /><br />
  Thank you for taking this step and for putting your trust in me. I
  promise to keep improving APPTLY, adding new lessons, and giving you
  the best tools and encouragement I can. Welcome to the journey.
  Let's build something amazing together.
  <br /><br />
  <strong>— Terry Bledsoe, Founder of APPTLY</strong>
</p> 

          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-5">Start Your Lessons</h2>
          <div className="grid gap-4">
            {lessons.map((lesson, index) => {
              const isAvailable = index <= 9;
              const lessonNumber = index + 1;

              return (
                <a
                  key={lesson}
                  href={isAvailable ? `/lesson-${lessonNumber}` : "#"}
                  className="bg-[#1A1A1A] border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#00FF94]/50 transition"
                >
                  <div>
                    <p className="text-[#00FF94] font-bold">
                      Lesson {lessonNumber}
                    </p>
                    <h3 className="text-xl font-bold">{lesson}</h3>
                  </div>
                  <span className="text-gray-400">
                    {isAvailable ? "Start Lesson" : "Coming Soon"}
                  </span>
                </a>
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
