type CheckoutPageProps = {
  searchParams: Promise<{ package?: string }>;
};

const packages = {
  "digital-card": {
    name: "Digital Business Card",
    price: "$99",
    tagline: "Know me & contact me.",
    stripeUrl: "https://buy.stripe.com/4gM00j6U7dRI8Dpdrdc3m0b",
    included: [
      "One cellphone-size mobile page",
      "Name and business name/title",
      "One photo or logo",
      "Short description of what you do",
      "Phone with Call and Text actions",
      "Address with Directions",
      "Business hours",
      "Website or social link, when applicable",
      "Save Contact and Share, when practical",
    ],
    value: "A focused custom mobile presence at one clear build price, without a required monthly APPTLY maintenance fee.",
  },
  "starter-app": {
    name: "Starter Business App",
    price: "$199",
    tagline: "Explore my business.",
    stripeUrl: "https://buy.stripe.com/28EdR9bancNE3j50Erc3m0c",
    included: [
      "Everything appropriate from the Digital Business Card",
      "Services with descriptions",
      "About the business",
      "Multiple photos or a small gallery",
      "Social media links",
      "QR sharing",
      "Home-screen app installation",
      "Simple app navigation",
      "One primary customer action, such as Book, Request Quote, Order or Contact",
    ],
    value: "An installable custom business experience with substantially more content and capability than a digital card, at one clear build price.",
  },
  "business-app": {
    name: "Business App",
    price: "$299",
    tagline: "Do business with me.",
    stripeUrl: "https://buy.stripe.com/8x2eVd92f6pgbPBevhc3m0e",
    included: [
      "Everything appropriate from the Starter Business App",
      "Expanded services and business content",
      "Customer reviews or testimonials",
      "Contact, quote, service-request or inquiry forms",
      "Booking or appointment links",
      "Payment or order links, when appropriate",
      "Promotions, specials or announcements",
      "Expanded gallery capability",
      "Staff or service categories, when needed",
      "More customized calls-to-action and editable content where practical",
    ],
    value: "Interactive business functionality that can require significantly more custom development through a traditional agency, kept focused at one clear APPTLY build price.",
  },
  "website-app": {
    name: "Website + Business App",
    price: "$449",
    tagline: "My complete online presence.",
    stripeUrl: "https://buy.stripe.com/7sY28rdiv3d43j5af1c3m0d",
    included: [
      "Everything appropriate from the Business App",
      "Professional multi-page small-business website",
      "Up to 5 core pages",
      "Responsive desktop, tablet and mobile design",
      "Installable Business App experience",
      "Business branding, supplied photos and content",
      "Contact or inquiry forms",
      "Maps, directions, phone, text and social connections",
      "Reviews or testimonials",
      "Booking or payment links, when applicable",
      "Basic on-page SEO: titles, descriptions, headings and search-friendly structure",
      "Domain connection and launch assistance",
      "QR sharing and project handoff",
    ],
    value: "A complete website-and-app package at one clear build price. Traditional agency projects can involve much higher upfront costs and ongoing fees.",
    note: "Use a domain you already own, or APPTLY can obtain one for you at additional cost. Future domain renewals are your responsibility. E-commerce stores, large product catalogs, custom databases, complex integrations, unusually large sites or extensive custom functionality require a separate quote.",
  },
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const packageKey = params.package || "digital-card";
  const selectedPackage = packages[packageKey as keyof typeof packages] || packages["digital-card"];

  return (
    <main style={{ minHeight: "100vh", background: "#f5f7fa", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        <div style={{ background: "#ffffff", borderRadius: "18px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <div style={{ textAlign: "center", marginBottom: "35px" }}>
            <h1 style={{ fontSize: "36px", marginBottom: "10px", color: "#111827" }}>Complete Your APPTLY Order</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#4b5563", maxWidth: "650px", margin: "0 auto" }}>
              Review exactly what is included in your selected package before continuing to secure payment.
            </p>
          </div>

          <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "30px", marginTop: "20px" }}>
            <div style={{ margin: "30px 0 20px", padding: "24px", border: "2px solid #10b981", borderRadius: "14px", background: "#f0fdf4", textAlign: "center" }}>
              <p style={{ margin: "0 0 8px", fontSize: "16px", color: "#4b5563" }}>Your selected package</p>
              <h2 style={{ margin: 0, fontSize: "26px", color: "#111827" }}>{selectedPackage.name}</h2>
              <p style={{ margin: "8px 0 0", fontSize: "28px", fontWeight: "700", color: "#166534" }}>{selectedPackage.price}</p>
              <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#6b7280" }}>One-time build price</p>
              <p style={{ margin: "14px 0 0", fontSize: "18px", fontWeight: "700", color: "#047857" }}>{selectedPackage.tagline}</p>
            </div>

            <details style={{ margin: "0 0 24px", padding: "20px", border: "1px solid #d1d5db", borderRadius: "14px", background: "#ffffff" }} open>
              <summary style={{ cursor: "pointer", fontSize: "18px", fontWeight: "700", color: "#047857" }}>See What&apos;s Included</summary>
              <div style={{ marginTop: "16px", color: "#374151", fontSize: "16px", lineHeight: "1.6" }}>
                {selectedPackage.included.map((item) => <p key={item} style={{ margin: "8px 0" }}>✓ {item}</p>)}
                <div style={{ borderTop: "1px solid #e5e7eb", marginTop: "18px", paddingTop: "16px" }}>
                  <strong style={{ color: "#111827" }}>The APPTLY Value</strong>
                  <p style={{ margin: "8px 0 0" }}>{selectedPackage.value}</p>
                </div>
                {"note" in selectedPackage && selectedPackage.note ? (
                  <div style={{ marginTop: "16px", padding: "14px", borderRadius: "10px", background: "#f3f4f6", fontSize: "14px" }}>
                    <strong>Important:</strong> {selectedPackage.note}
                  </div>
                ) : null}
                <p style={{ margin: "16px 0 0", fontSize: "14px", color: "#6b7280" }}>
                  Third-party costs, when required for your project, are separate and remain the customer&apos;s responsibility.
                </p>
              </div>
            </details>

            <a href={selectedPackage.stripeUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", margin: "0 0 30px", padding: "16px 20px", borderRadius: "12px", background: "#10b981", color: "#ffffff", fontSize: "18px", fontWeight: "700", textAlign: "center", textDecoration: "none", boxSizing: "border-box" }}>
              Continue to Secure Payment
            </a>

            <h2 style={{ fontSize: "24px", color: "#111827", marginBottom: "18px" }}>What happens next?</h2>
            <div style={{ fontSize: "17px", lineHeight: "1.8", color: "#374151" }}>
              <p><strong>1.</strong> Review the APPTLY package you selected.</p>
              <p><strong>2.</strong> Complete your payment securely through Stripe.</p>
              <p><strong>3.</strong> Tell us about your business and what you want your project to accomplish.</p>
              <p><strong>4.</strong> APPTLY will contact you to begin your project.</p>
            </div>
          </div>

          <div style={{ marginTop: "35px", padding: "22px", borderRadius: "12px", background: "#f3f4f6", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: "1.6", color: "#374151" }}>Secure payment processing is provided by Stripe. APPTLY does not store your credit or debit card information.</p>
          </div>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a href="/" style={{ color: "#166534", fontWeight: "600", textDecoration: "none" }}>← Return to APPTLY</a>
          </div>
        </div>
      </div>
    </main>
  );
}
