export function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Build with AI",
      text: "Learn how to use AI to create real apps — even if you’ve never written a single line of code.",
    },
    {
      icon: "🌐",
      title: "Launch Your App",
      text: "Publish your app to the web or app stores with step-by-step guidance.",
    },
    {
      icon: "$",
      title: "Monetize It",
      text: "Turn your app into a real business with real paying customers.",
    },
    {
      icon: "📈",
      title: "Grow Your Audience",
      text: "Learn practical marketing strategies to attract your first users and customers.",
    },
  ];

  return (
    <section className="bg-[#000000] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What You’ll <span className="text-[#00FF94]">Learn</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Everything you need to go from idea to profitable app — organized into clear,
            actionable lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#00FF94]/30 bg-gradient-to-b from-[#0b2a1c] to-[#050505] p-6 min-h-[360px] flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="h-32 rounded-xl bg-black/40 border border-[#00FF94]/20 flex items-center justify-center mb-6">
                  <div className="text-6xl text-[#00FF94]">{feature.icon}</div>
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  <span className="text-[#00FF94]">
                    {feature.title.split(" ")[0]}
                  </span>{" "}
                  {feature.title.split(" ").slice(1).join(" ")}
                </h3>

                <div className="h-1 w-20 bg-[#00FF94] mb-4" />

                <p className="text-gray-300 leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
