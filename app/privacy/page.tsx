"use client";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <section className="max-w-3xl mx-auto space-y-8 px-6 py-16">
        <div>
          <h1 className="text-4xl font-black text-[#00FF7F]">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mt-2">Last updated: July 15, 2026</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p className="text-gray-300">
            When you purchase APPTLY or contact us, we may collect your name, email
            address, and payment information. Payment details are processed securely
            by Stripe — we do not store your card information ourselves.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p className="text-gray-300">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Provide access to the course you purchased</li>
            <li>Respond to your questions and support requests</li>
            <li>Send you important updates about your purchase</li>
            <li>Improve APPTLY based on how it's used</li>
          </ul>
          <p className="text-gray-300">
            We do not sell your personal information to third parties.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Third-Party Services</h2>
          <p className="text-gray-300">
            We use trusted third-party services to operate APPTLY, including Stripe
            (payment processing) and Vercel (website hosting). These providers have
            their own privacy policies governing how they handle your data.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Cookies & Analytics</h2>
          <p className="text-gray-300">
            We may use basic analytics tools to understand how visitors use our site,
            which helps us improve it. This data is aggregated and not used to
            personally identify you.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
          <p className="text-gray-300">
            We take reasonable steps to protect your information, but no method of
            transmission or storage online is 100% secure. We can't guarantee absolute
            security.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Your Rights</h2>
          <p className="text-gray-300">
            You can request access to, correction of, or deletion of your personal
            information at any time by emailing us. We'll respond as promptly as we can.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">7. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this privacy policy from time to time. Changes will be posted
            on this page with an updated date.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">8. Contact</h2>
          <p className="text-gray-300">
            Questions about this policy? Email{" "}
            <a
  href="mailto:tbledsoe1954@gmail.com"
  className="underline hover:text-lime-400"
>
  Email APPTLY
</a> 
            .
          </p>
        </div>
      </section>
    </main>
  );
} 

