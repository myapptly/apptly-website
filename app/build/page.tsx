import Image from "next/image";

export default function BuildForMe() {
  return (
    <section className="relative bg-[#0D0F0C] text-[#EDE9E2] min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
       
        {/* APPTLY Logo */}
        <div className="mb-2">
          <Image alt="APPTLY Logo" className="h-auto w-auto max-w-[160px]" height={50} priority src="/apptly logo.png" width={180}/>
        </div>

        {/* Badge */}
        <span className="text-xs font-mono font-semibold tracking-widest uppercase bg-[#39FF8C]/10 text-[#39FF8C] border border-[#39FF8C]/30 px-3 py-1 rounded-full">
          Done-For-You Services
        </span>

        {/* Hero Title & Subtitle */}
        <h1 className="font-black uppercase tracking-tight text-[clamp(2rem,4vw,3.2rem)] leading-tight">
          I Build Inexpensive, Professional Apps and Websites
        </h1>

        <p className="text-lg text-[#39FF8C] font-semibold max-w-xl">
          Fast, simple, and clean — built for you, with no agency markup. Affordable, done right.
        </p>

        {/* Pricing Receipt Card */}
        <div className="w-full max-w-sm rounded-t bg-[#F7F3EA] p-6 pb-9 text-[#1C1B19] shadow-2xl mt-4 text-left">
          <div className="mb-3 border-b border-dashed border-[#C9C3B4] pb-3 text-center font-mono text-xs uppercase tracking-widest text-[#6B6E5F]">
            Transparent Pricing
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

        {/* Deliverables / Client Requirements */}
        <div className="w-full max-w-sm text-left mt-6 bg-[#161914] p-6 rounded-lg border border-[#272B24]">
          <h2 className="font-black uppercase tracking-tight text-[#39FF8C] mb-3 text-sm font-mono">
            What You Provide:
          </h2>
          <ul className="list-disc list-inside text-[#EDE9E2] space-y-2 text-sm">
            <li>Your images, logos, or graphics</li>
            <li>Your preferred brand colors</li>
            <li>Your core content (text, contact details, links)</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="w-full max-w-xl mt-10 text-left">
          <h2 className="text-center font-black uppercase text-xl text-[#39FF8C] mb-6">
            How It Works
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-[#161914] p-4 rounded-lg border border-[#272B24]">
              <span className="text-[#39FF8C] font-mono font-bold text-lg">01.</span>
              <h3 className="font-bold text-sm mt-1">Scope & Quote</h3>
              <p className="text-xs text-[#9A9E92] mt-1">Send over your idea or layout and get a straightforward price.</p>
            </div>
            <div className="bg-[#161914] p-4 rounded-lg border border-[#272B24]">
              <span className="text-[#39FF8C] font-mono font-bold text-lg">02.</span>
              <h3 className="font-bold text-sm mt-1">Fast Build</h3>
              <p className="text-xs text-[#9A9E92] mt-1">I build out your custom pages or web app quickly with zero bloated code.</p>
            </div>
            <div className="bg-[#161914] p-4 rounded-lg border border-[#272B24]">
              <span className="text-[#39FF8C] font-mono font-bold text-lg">03.</span>
              <h3 className="font-bold text-sm mt-1">Launch</h3>
              <p className="text-xs text-[#9A9E92] mt-1">We hook up your domain, test everything, and pass over 100% ownership.</p>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="w-full max-w-xl mt-8 text-left">
          <h2 className="font-black uppercase text-center text-[#39FF8C] mb-4 text-sm font-mono">
            Popular Requests
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Business Landing Pages",
              "Booking & Contact Tools",
              "Client Dashboards",
              "Internal Tooling",
              "Stripe Payment Portals",
              "MVP Web Apps"
            ].map((item) => (
              <span key={item} className="bg-[#161914] border border-[#272B24] text-[#EDE9E2] text-xs px-3 py-1.5 rounded-md">
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#9A9E92] mt-6">
          Timeline depends on complexity and scope — you&apos;ll get an exact estimate before we start.
        </p>

        {/* Call to Action CTA */}
        <a
          href="mailto:builditnow@myapptly.com"
          className="mt-4 inline-block rounded-full bg-[#39FF8C] text-black font-bold px-8 py-3.5 hover:bg-[#39FF8C]/90 transition-colors shadow-lg shadow-[#39FF8C]/20"
        >
          Tell Me What You Need
        </a>
      </div>
    </section>
  );
}

 
