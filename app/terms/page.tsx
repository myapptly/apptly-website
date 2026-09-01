"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <section className="max-w-3xl mx-auto space-y-8 px-6 py-16">
        <div>
          <h1 className="text-4xl font-black text-[#00FF7F]">Terms & Refund Policy</h1>
          <p className="text-sm text-gray-400 mt-2">Last updated: July 15, 2026</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">1. What You're Purchasing</h2>
          <p className="text-gray-300">
            APPTLY creates digital products for small businesses and indivdual use. 
            If for any reason you are not satisfied with any product, notify us within 
            7 days of your purchase and we will gladly refund your money, no questions asked.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">2. 7-Day Refund Guarantee</h2>
          <p className="text-gray-300">
            If APPTLY isn't right for you, email us within 7 days of purchase at {" "}
            <a
  href="mailto:tbledsoe1954@gmail.com"
  className="underline hover:text-lime-400"
>
  Click Here
</a>
            and we'll issue a full refund. No forms, no reason required.
          </p>
          <p className="text-gray-300">
            Refund requests made after 7 days from the original purchase date will be
            considered on a case-by-case basis but are not guaranteed.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">3. No Income Guarantee</h2>
          <p className="text-gray-300">
            APPTLY builds quality, professional digital products for small businesses.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Access & Account</h2>
          <p className="text-gray-300">
            Access to APPTLY is for your personal, individual use. Please don't share
            login access or resell course content. We reserve the right to revoke access
            for violations of these terms.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
          <p className="text-gray-300">
            All course content, videos, graphics, and materials are the property of
            APPTLY and may not be copied, redistributed, or resold without written
            permission.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Changes to These Terms</h2>
          <p className="text-gray-300">
            We may update these terms from time to time. Continued use of APPTLY after
            changes are posted means you accept the updated terms.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">7. Contact</h2>
          <p className="text-gray-300">
            Questions about these terms or a refund request? Email{" "}
            <a
  href="mailto:tbledsoe1954@gmail.com"
  className="underline hover:text-lime-400"
>
  Click Here
</a> 
            . I personally read and respond to every message.
          </p>
        </div>
      </section>
    </main>
  );
} 

