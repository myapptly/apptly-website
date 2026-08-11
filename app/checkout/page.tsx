 type CheckoutPageProps = {
  searchParams?: {
    package?: string;
  };
};

const packages = {
  "digital-card": {
    name: "Digital Business Card",
    price: "$99",
    stripeUrl:"https://buy.stripe.com/4gM00j6U7dRI8Dpdrdc3m0b",
  },
  "starter-app": {
    name: "Starter App",
    price: "$199",
    stripeUrl:"https://buy.stripe.com/28EdR9bancNE3j50Erc3m0c"
  },
  "business-app": {
    name: "Business App",
    price: "$299",
    stripeUrl:"https://buy.stripe.com/8x2eVd92f6pgbPBevhc3m0e"
  },
  "website-app": {
    name: "Website + App",
    price: "$449",
    stripeUrl:"https://buy.stripe.com/7sY28rdiv3d43j5af1c3m0d"
  },
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const packageKey = searchParams?.package || "digital-card";

  const selectedPackage =
    packages[packageKey as keyof typeof packages] || packages["digital-card"]; 

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Complete Your APPTLY Order
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#4b5563",
                maxWidth: "650px",
                margin: "0 auto",
              }}
            >
              You&apos;re one step away from getting your business online with
              a professional website or app built around what your customers
              actually need.
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
              marginTop: "20px",
            }}
          >

            <div
  style={{
    margin: "30px 0",
    padding: "24px",
    border: "2px solid #10b981",
    borderRadius: "14px",
    background: "#f0fdf4",
    textAlign: "center",
  }}
>
  <p
    style={{
      margin: "0 0 8px",
      fontSize: "16px",
      color: "#4b5563",
    }}
  >
    Your selected package
  </p>

  <h2
    style={{
      margin: "0",
      fontSize: "26px",
      color: "#111827",
    }}
  >
    {selectedPackage.name}
  </h2>

  <p
    style={{
      margin: "8px 0 0",
      fontSize: "28px",
      fontWeight: "700",
      color: "#166534",
    }}
  >
    {selectedPackage.price}
  </p>

  <p
    style={{
      margin: "5px 0 0",
      fontSize: "14px",
      color: "#6b7280",
    }}
  >
    One-time build price
  </p>
</div> 

<a
  href={selectedPackage.stripeUrl}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    width: "100%",
    margin: "0 0 30px",
    padding: "16px 20px",
    borderRadius: "12px",
    background: "#10b981",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "700",
    textAlign: "center",
    textDecoration: "none",
  }}
>
  Continue to Secure Payment
</a> 

            <h2
              style={{
                fontSize: "24px",
                color: "#111827",
                marginBottom: "18px",
              }}
            >
              What happens next?
            </h2>

            <div
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#374151",
              }}
            >
              <p>
                <strong>1.</strong> Review the APPTLY package you selected.
              </p>

              <p>
                <strong>2.</strong> Complete your payment securely through
                Stripe.
              </p>

              <p>
                <strong>3.</strong> Tell us about your business and what you
                want your project to accomplish.
              </p>

              <p>
                <strong>4.</strong> APPTLY will contact you to begin your
                project.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "35px",
              padding: "22px",
              borderRadius: "12px",
              background: "#f3f4f6",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#374151",
              }}
            >
              Secure payment processing is provided by Stripe. APPTLY does not
              store your credit or debit card information.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <a
              href="/"
              style={{
                color: "#166534",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              ← Return to APPTLY
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 
