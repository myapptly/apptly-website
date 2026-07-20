export default function BuildForMe() {
  return (
    <section className="relative bg-[#0D0F0C] text-[#EDE9E2] min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="font-black uppercase tracking-tight text-[clamp(2rem,4vw,3.2rem)]">
          I Build Inexpensive, Professional Apps and Websites
        </h1>

        <p className="text-lg text-[#39FF8C] font-semibold">
          Fast, simple, and clean — built for you, with no agency markup. Affordable, done right.
        </p>

        <div className="w-full max-w-sm rounded-t bg-[#F7F3EA] p-6 pb-9 text-[#1C1B19] shadow-2xl mt-6">
          <div className="mb-3 border-b border-dashed border-[#C9C3B4] pb-3 text-center font-mono text-xs uppercase tracking-widest text-[#6B6E5F]">
            Pricing
          </div>
          <div className="flex justify-between py-1.5 font-mono text-sm">
            <span>First page (setup included)</span>
            <span className="font-medium">$125</span>
          </div>
          <div className="flex justify-between py-1.5 font-mono text-sm">
            <span>Each additional page</span>
            <span className="font-medium">$50</span>
          </div>
          <hr className="my-3 border-t border-dashed border-[#C9C3B4]" />
          <div className="flex justify-between py-1.5 font-mono text-sm">
            <span>Simple app setup</span>
            <span className="font-medium">$125</span>
          </div>
          <div className="flex justify-between py-1.5 font-mono text-sm">
            <span>Each additional screen/feature</span>
            <span className="font-medium">$75</span>
          </div>
        </div>

        <div className="w-full max-w-sm text-left mt-6">
          <h2 className="font-black uppercase tracking-tight text-[#39FF8C] mb-2">
            What You Provide
          </h2>
          <ul className="list-disc list-inside text-[#EDE9E2] space-y-1">
            <li>Your images/graphics</li>
            <li>Your preferred colors</li>
            <li>Your content (text, contact info, etc.)</li>
          </ul>
        </div>

        <p className="text-sm text-[#9A9E92] mt-4">
          Timeline depends on complexity and number of pages — you'll get an estimate before we start.
        </p>

        <a
          href="mailto:builditnow@myapptly.com"
          className="mt-8 rounded-full bg-[#39FF8C] text-black font-bold px-8 py-3 hover:bg-[#39FF8C]/90 transition-colors"
        >
          Tell Me What You Need
        </a>
      </div>
    </section>
  );
} 
