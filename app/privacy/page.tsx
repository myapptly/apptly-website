"use client";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <section className="max-w-3xl mx-auto space-y-8 px-6 py-16">
        <div>
          <h1 className="text-4xl font-black text-[#00FF7F]">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mt-2">Last updated: September 6, 2026</p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p className="text-gray-300">
            When you contact APPTLY, purchase a service, or submit project information,
            we may collect information such as your name, email address, phone number,
            business name, website address, project details, branding preferences,
            images, logos, links, and other information you choose to provide.
          </p>
          <p className="text-gray-300">
            Payments are processed securely by Stripe. APPTLY does not receive or store
            your full credit or debit card number.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p className="text-gray-300">We may use information you provide to:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Process your order and communicate about your project</li>
            <li>Design, build, revise, launch, and support the product or service you purchased</li>
            <li>Respond to questions, support requests, and refund requests</li>
            <li>Provide important service, account, or project updates</li>
            <li>Improve APPTLY&apos;s website, services, and customer experience</li>
            <li>Protect APPTLY, our customers, and our services from misuse or security threats</li>
          </ul>
          <p className="text-gray-300">
            APPTLY does not sell your personal information.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Project Content & Customer Information</h2>
          <p className="text-gray-300">
            APPTLY may receive business information and content needed to build a customer
            project. When a project includes a contact form, inquiry form, booking link,
            payment link, mailing-list signup, or similar feature, information submitted by
            that project&apos;s end users may be sent directly to the customer or to a third-party
            service selected for the project.
          </p>
          <p className="text-gray-300">
            Unless specifically agreed to in writing, APPTLY is not intended to serve as the
            primary database or system of record for sensitive personal information, including
            medical information, financial-account credentials, government identification
            numbers, or detailed personal information about children.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Third-Party Services</h2>
          <p className="text-gray-300">
            APPTLY uses third-party services to operate our business and build customer
            projects. Depending on the project, these may include services such as Stripe
            for payment processing, Vercel for hosting, GitHub for source-code storage,
            domain registrars, analytics providers, email or form services, maps, social
            platforms, booking systems, or other tools requested by the customer.
          </p>
          <p className="text-gray-300">
            These providers process information under their own terms and privacy policies,
            and APPTLY does not control their independent data practices.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Cookies & Analytics</h2>
          <p className="text-gray-300">
            APPTLY may use cookies, analytics, or similar technologies to understand site
            traffic, page usage, device types, and general interaction with our website.
            Analytics data may include technical information such as browser type, device,
            approximate location, referring page, and pages visited.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
          <p className="text-gray-300">
            We retain customer and project information only as long as reasonably necessary
            to provide services, maintain business records, meet legal or accounting
            obligations, resolve disputes, and support completed projects. Project files may
            also remain in development or hosting systems until they are transferred,
            archived, or no longer reasonably needed.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">7. Data Security</h2>
          <p className="text-gray-300">
            APPTLY uses reasonable administrative and technical measures intended to protect
            information from unauthorized access, loss, or misuse. No website, transmission,
            hosting platform, or storage system can be guaranteed to be completely secure,
            so APPTLY cannot guarantee absolute security.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">8. Your Choices & Requests</h2>
          <p className="text-gray-300">
            You may contact APPTLY to request access to, correction of, or deletion of
            personal information that APPTLY controls, subject to information we are required
            or reasonably need to retain for legal, accounting, fraud-prevention, or business
            record purposes.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">9. Children&apos;s Privacy</h2>
          <p className="text-gray-300">
            APPTLY&apos;s own website and purchasing services are directed to business owners and
            other adults, not children. APPTLY does not knowingly seek to collect personal
            information directly from children through myapptly.com.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy as our services or legal obligations change.
            The current version will be posted on this page with the revised date shown above.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">11. Contact</h2>
          <p className="text-gray-300">
            Questions or privacy requests?{" "}
            <a
              href="mailto:support@myapptly.com"
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
