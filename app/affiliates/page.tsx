import Image from "next/image";

export default function AffiliatesPage() {
  return (
    <section className="relative bg-[#0D0F0C] text-[#EDE9E2] min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
            
        {/* APPTLY Logo */}
        <div className="mb-2 flex justify-center">
          <Image alt="APPTLY Logo" className="h-auto w-auto w-[420px] sm:w-[500px]"
          height={500} priority src="/apptly real logo.png" width={420}/>
        </div>

        {/* Badge */}
        <span className="text-xs font-mono font-semibold tracking-widest uppercase bg-[#39FF8C]/10 text-[#39FF8C] border border-[#39FF8C]/30 px-3 py-1 rounded-full">
          Partner Network
        </span>

        {/* Headline */}
        <h1 className="font-black uppercase tracking-tight text-[clamp(2rem,4vw,3rem)] leading-tight">
          Earn 60% Commission <br />
          <span className="text-[#39FF8C]">On Every Single Sale</span>
        </h1>

        <p className="text-sm text-[#EDE9E2]/80 font-normal max-w-lg">
          No caps, no complicated tiers. Promote APPTLY and get paid 60% on our $37 course or custom done-for-you builds.
        </p>

        {/* Offers Grid */}
        <div className="grid gap-4 sm:grid-cols-2 w-full text-left mt-4">
          {/* Offer 1 */}
          <div className="bg-[#161914] p-5 rounded-lg border border-[#272B24]">
            <div className="text-xs font-mono text-[#39FF8C] font-bold">OFFER 01</div>
            <h3 className="font-bold text-lg text-[#EDE9E2] mt-1">$37 APPTLY Program</h3>
            <div className="text-2xl font-black text-[#39FF8C] mt-2">$22.20 <span className="text-xs text-[#9A9E92] font-normal">/ sale</span></div>
            <p className="text-xs text-[#9A9E92] mt-2 leading-relaxed">
              Perfect for social media audiences, creators, and beginner builders. Low barrier to entry, high conversion.
            </p>
          </div>

          {/* Offer 2 */}
          <div className="bg-[#161914] p-5 rounded-lg border border-[#272B24]">
            <div className="text-xs font-mono text-[#39FF8C] font-bold">OFFER 02</div>
            <h3 className="font-bold text-lg text-[#EDE9E2] mt-1">Done-For-You Builds</h3>
            <div className="text-2xl font-black text-[#39FF8C] mt-2">$75 – $300+ <span className="text-xs text-[#9A9E92] font-normal">/ client</span></div>
            <p className="text-xs text-[#9A9E92] mt-2 leading-relaxed">
              Refer local businesses, colleagues, or clients needing custom apps or sites. Massive payouts on every deal.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full bg-[#161914] p-6 rounded-lg border border-[#39FF8C]/30 mt-4">
          <h3 className="font-bold text-base text-[#EDE9E2] mb-2">Ready to Start Earning?</h3>
          <p className="text-xs text-[#9A9E92] mb-5">
            Send us a quick message to get your unique tracking link and promo code setup.
          </p>
          <a
            href="mailto:partner@myapptly.com?subject=APPTLY Affiliate Application"
            className="inline-block text-xs font-mono font-bold text-black bg-[#39FF8C] px-8 py-3.5 rounded-full hover:bg-[#39FF8C]/90 transition-transform transform hover:scale-105"
          >
            Apply For Partner Link
          </a>
        </div>

      </div>
    </section>
  );
}

 
