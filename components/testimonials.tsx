const testimonials = [
  {
    name: "Tony - Super Senior App Builder",
    quote:
      "Over the last decade I have often thought about having my own app. Frankly, as a person who was already 70 years old ten years ago, I thought it would never happen. When I found MyApptly it all changed. Now I have three. Thanks Terry for making this possible.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-14 px-6 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-10">
          What <span className="text-[#00FF94]">Members</span> Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#00FF94]/30 rounded-2xl p-6"
            >
              <div className="text-[#00FF94] mb-2">{"★".repeat(t.rating)}</div>
              <p className="text-gray-300 leading-relaxed mb-4">"{t.quote}"</p>
              <p className="text-white font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
