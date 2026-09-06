"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <section className="max-w-3xl mx-auto space-y-8 px-6 py-16">
        <div>
          <h1 className="text-4xl font-black text-[#00FF7F]">
            Terms & Refund Policy
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Last updated: September 6, 2026
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">1. What You&apos;re Purchasing</h2>
          <p className="text-gray-300">
            APPTLY creates custom digital products for small businesses,
            organizations, entrepreneurs, and individuals. Depending on the
            package selected, your purchase may include a digital business card,
            business web app, website, QR code, forms, booking or payment links,
            editable content, or related design and development services.
          </p>
          <p className="text-gray-300">
            The exact scope of a project is determined by the package purchased,
            the information supplied by the customer, and any additional features
            agreed to in writing before or during development.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Payment & Project Start</h2>
          <p className="text-gray-300">
            Payment is due at the time of purchase unless APPTLY and the customer
            agree to another arrangement in writing. After purchase, the customer
            may be asked to provide business information, contact details, images,
            logos, links, colors, preferences, and other materials needed to build
            the project.
          </p>
          <p className="text-gray-300">
            Work may be delayed when required information, approvals, access, or
            third-party account details have not yet been provided.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Delivery Time</h2>
          <p className="text-gray-300">
            APPTLY does not promise a universal delivery date because project size,
            complexity, customer response time, and third-party services vary. We
            will make reasonable efforts to complete projects promptly and keep the
            customer informed of material delays.
          </p>
          <p className="text-gray-300">
            If a specific delivery date is important, it must be agreed to in writing
            before purchase or before APPTLY accepts that deadline.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Revisions</h2>
          <p className="text-gray-300">
            APPTLY includes reasonable revisions needed to bring the delivered project
            into line with the approved scope and customer-provided instructions.
            Revision requests should be consolidated and submitted during the review
            stage whenever practical.
          </p>
          <p className="text-gray-300">
            A request that adds new pages, features, integrations, content, redesigns,
            or functionality beyond the original scope may be treated as additional
            work and may require a separate price or agreement before work begins.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">5. 7-Day Refund Guarantee</h2>
          <p className="text-gray-300">
            If you decide APPTLY is not right for you, contact us within 7 days of
            your original purchase and we will issue a full refund. No complicated
            form or explanation is required.
          </p>
          <p className="text-gray-300">
            To request a refund,{" "}
            <a
              href="mailto:support@myapptly.com"
              className="underline hover:text-lime-400"
            >
              Email APPTLY
            </a>
            .
          </p>
          <p className="text-gray-300">
            Refund requests received more than 7 days after the original purchase
            date may be considered case by case but are not guaranteed.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Customer Content & Responsibilities</h2>
          <p className="text-gray-300">
            Customers are responsible for providing accurate information and for
            ensuring they have permission to use any text, photographs, logos,
            trademarks, graphics, music, video, or other materials they provide to
            APPTLY.
          </p>
          <p className="text-gray-300">
            APPTLY is not responsible for errors in customer-supplied information or
            for claims involving material the customer did not have permission to use.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">7. Ownership & Source Code</h2>
          <p className="text-gray-300">
            Customers retain ownership of the original logos, photographs, written
            content, trademarks, and other materials they provide to APPTLY.
          </p>
          <p className="text-gray-300">
            After a custom project is paid in full, the customer owns the finished
            custom design, customer-specific content, and customer-specific source code
            created by APPTLY for that project, except for third-party materials and
            reusable APPTLY tools, components, methods, templates, or code that were not
            created exclusively for that customer.
          </p>
          <p className="text-gray-300">
            APPTLY may retain archival or portfolio copies of completed work unless the
            customer and APPTLY agree otherwise in writing. Third-party software,
            platforms, fonts, libraries, services, and other materials remain subject to
            the ownership and license terms of their respective providers.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">8. Handoff, Domains & Accounts</h2>
          <p className="text-gray-300">
            APPTLY&apos;s normal goal is to leave the customer in control of the business
            assets needed to operate the finished project. Customer-owned domains and
            business accounts remain the customer&apos;s property and should remain under
            the customer&apos;s control whenever practical.
          </p>
          <p className="text-gray-300">
            If source code, a repository, or another project asset is held in an
            APPTLY-managed account during development, APPTLY will make reasonable
            efforts to transfer or provide a usable copy of the customer-owned portion
            of the completed project after final payment when requested and when the
            third-party platform permits it.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">9. Hosting, Domains & Third-Party Costs</h2>
          <p className="text-gray-300">
            APPTLY does not charge a required monthly APPTLY maintenance fee unless a
            separate ongoing service is specifically purchased or agreed to in writing.
          </p>
          <p className="text-gray-300">
            Some projects may still require third-party services such as domain
            registration, hosting, payment processing, email, booking, database,
            analytics, storage, or other online services. Those providers may charge
            their own recurring or usage-based fees. APPTLY will identify known paid
            third-party requirements before approval when reasonably possible.
          </p>
          <p className="text-gray-300">
            Free hosting or other free third-party plans are subject to the provider&apos;s
            limits and may change. APPTLY does not guarantee that a third-party service
            will remain free or available indefinitely.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">10. Ongoing Support & Maintenance</h2>
          <p className="text-gray-300">
            APPTLY will make reasonable efforts to correct defects that prevent the
            delivered project from functioning as intended at launch. Routine content
            changes, new features, redesigns, third-party account management, ongoing
            technical maintenance, and future compatibility work are not automatically
            included unless the purchased package or a separate written agreement says
            they are.
          </p>
          <p className="text-gray-300">
            Some APPTLY projects may include owner-editable content or may display or
            link to information maintained on the customer&apos;s existing website or other
            services. In those cases, the customer remains responsible for keeping that
            underlying information current.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">11. Backups & Business Continuity</h2>
          <p className="text-gray-300">
            APPTLY may keep working or archival copies of project files, but APPTLY is
            not a guaranteed long-term backup service. After handoff, customers should
            retain copies of source code, credentials, content, images, and other
            business-critical materials they control.
          </p>
          <p className="text-gray-300">
            If APPTLY stops operating, customer-owned domains and accounts that are
            already under the customer&apos;s control remain with the customer. For assets
            still held in an APPTLY-managed account, APPTLY will make reasonable efforts,
            when possible, to provide or transfer the customer-owned project materials.
            Continued operation may require the customer to establish or pay for its own
            hosting or other third-party services.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">12. Sensitive Data & Customer Databases</h2>
          <p className="text-gray-300">
            APPTLY&apos;s standard website and business-app packages are designed primarily
            for presentation, communication, customer convenience, forms, links, and
            ordinary small-business functions. They are not automatically intended to
            serve as regulated or high-risk data systems.
          </p>
          <p className="text-gray-300">
            A project that will store sensitive personal information, detailed records
            about children, medical information, financial-account credentials, or other
            high-risk data requires separate review and may require additional security,
            privacy, hosting, access-control, or legal requirements before APPTLY agrees
            to build or host that functionality.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">13. No Guarantee of Business Results</h2>
          <p className="text-gray-300">
            APPTLY strives to create professional, useful, and attractive digital
            products, but we cannot guarantee a specific amount of traffic, sales,
            leads, customers, revenue, search-engine placement, app installs, or other
            business result.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">14. Third-Party Availability & Limitations</h2>
          <p className="text-gray-300">
            APPTLY will make reasonable efforts to deliver products that function as
            intended at completion. We cannot guarantee uninterrupted operation of
            third-party platforms, browsers, hosting services, external links, APIs,
            social networks, payment services, app-install behavior, or other
            technologies outside APPTLY&apos;s control.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">15. Changes to These Terms</h2>
          <p className="text-gray-300">
            APPTLY may update these terms as our services evolve. Updated terms will be
            posted on this page with a revised date. Changes do not retroactively alter
            a separate written agreement already accepted for a specific project.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00FF7F]/20 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">16. Contact</h2>
          <p className="text-gray-300">
            Questions about these terms, your project, or a refund request?{" "}
            <a
              href="mailto:support@myapptly.com"
              className="underline hover:text-lime-400"
            >
              Email APPTLY
            </a>
            . We will respond as promptly as possible.
          </p>
        </div>
      </section>
    </main>
  );
}
