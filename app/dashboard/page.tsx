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
    "Build Like A Pro",
  ];

  const resources = [
    {
      title: "App Idea Worksheet",
      description:
        "Use the Lesson 2 exercises to identify a useful problem and choose your first app idea.",
      href: "/lesson-2",
      label: "Open Lesson 2",
    },
    {
      title: "AI Prompt Builder",
      description:
        "Use the Lesson 3 prompt formulas to explain your app clearly and get better results from AI.",
      href: "/lesson-3",
      label: "Open Lesson 3",
    },
    {
      title: "Launch Checklist",
      description:
        "Use Lesson 4 to prepare, test, and launch the first working version of your app.",
      href: "/lesson-4",
      label: "Open Lesson 4",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D0D0D] px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#00FF94]">
            Member Dashboard
          </p>

          <img
            src="/new%20logo.png"
            alt="APPTLY Logo"
            className="mx-auto mt-3 h-auto w-[350px] max-w-full"
          />

          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-gray-200">
            Start here. Follow the lessons one step at a time and build your first AI-powered app.
          </p>
        </div>

        <section className="rounded-2xl border border-[#00FF94]/30 bg-[#1A1A1A] p-6 shadow-2xl sm:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#00FF94]">
            A Personal Welcome
          </p>

          <h2 className="mb-6 text-3xl font-black text-white">
            A Word from the Founder, Terry Bledsoe
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-200">
            <p>
              I want to personally thank you for trusting me and choosing
              APPTLY. Just a short time ago, I had never built an app, never
              written code, and honestly was not sure someone my age could
              learn something this new. Then I discovered that AI changed
              everything.
            </p>

            <p>
              I created APPTLY because I believe ordinary people can build
              extraordinary things when they have the right guidance. My goal
              is not just to help you build one app. My goal is to help you
              realize that you are capable of creating something meaningful,
              regardless of your age or technical experience.
            </p>

            <p>
              Thank you for taking this step and for putting your trust in me.
              I promise to keep improving APPTLY, adding useful lessons, and
              giving you the best tools and encouragement I can.
            </p>

            <p className="text-xl font-bold text-[#00FF94]">
              Welcome to the journey. Let&apos;s build something amazing
              together.
            </p>

            <p className="border-t border-white/10 pt-5 font-bold text-white">
              — Terry Bledsoe, Founder of APPTLY
            </p>
          </div>
        </section>

        <div className="my-8">
  <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#00FF94]">
    Step 1 — Plan Your First App
  </p>

  <img
    src="/dash 2.png"
    alt="APPTLY Plan Your First App"
    className="mx-auto w-full max-w-2xl rounded-2xl border border-[#00FF94]/30 shadow-2xl"
  />
</div>

        <section>
          <h2 className="mb-5 text-3xl font-black">Start Your Lessons</h2>

          <a
            href="/before-we-begin"
            className="mb-5 flex items-center justify-between rounded-xl border border-[#00FF94]/30 bg-[#1A1A1A] p-5 transition hover:border-[#00FF94]"
          >
            <div>
              <p className="font-bold text-[#00FF94]">Start Here</p>
              <h3 className="text-xl font-bold">Before We Begin</h3>
              <p className="mt-1 text-sm text-gray-400">
                Understand the process, prepare your tools, and learn what to
                expect.
              </p>
            </div>

            <span className="ml-4 shrink-0 font-semibold text-[#00FF94]">
              Begin →
            </span>
          </a>

          <img
    src="/dash 3.png"
    alt="APPTLY Plan Your First App"
    className="mx-auto w-full max-w-2xl rounded-2xl border border-[#00FF94]/30 shadow-2xl"
  />

          <div className="grid gap-4 md:grid-cols-2">
            {lessons.map((lesson, index) => {
              const lessonNumber = index + 1;

              return (
                <a
                  key={lesson}
                  href={`/lesson-${lessonNumber}`}
                  className="flex min-h-[120px] items-center justify-between rounded-xl border border-white/10 bg-[#1A1A1A] p-5 transition hover:border-[#00FF94]/60 hover:bg-[#202020]"
                >
                  <div>
                    <p className="font-bold text-[#00FF94]">
                      Lesson {lessonNumber}
                    </p>

                    <h3 className="text-xl font-bold">{lesson}</h3>

                  </div>

                  <span className="ml-4 shrink-0 text-sm font-semibold text-gray-300">
                    Start Lesson →
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 sm:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#00FF94]">
            Included with APPTLY
          </p>

          <h2 className="text-3xl font-black">APPTLY Resource Library</h2>

          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-300">
            Use these course resources whenever you need help choosing an idea,
            writing a stronger prompt, or preparing your app for launch.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-black/30 p-5 transition hover:border-[#00FF94]/60"
              >
                <h3 className="text-xl font-bold text-white">
                  {resource.title}
                </h3>

                <p className="mt-3 flex-1 leading-relaxed text-gray-300">
                  {resource.description}
                </p>

                <p className="mt-5 font-bold text-[#00FF94]">
                  {resource.label} →
                </p>
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Additional downloadable worksheets, templates, and checklists can
            be added here as the APPTLY library grows.
          </p>
        </section>
      </section>
    </main>
  );
}
