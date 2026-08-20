export default function ChatGPTLandingPage() {
  const packages = [
    {
      key: "digital-card",
      name: "Digital Business Card",
      price: "$99",
      description:
        "A simple, professional mobile page that puts your business information in your customers’ hands.",
    },
    {
      key: "starter-app",
      name: "Starter Business App",
      price: "$199",
      description:
        "A polished business app with the essentials your customers need to reach and learn about you.",
    },
    {
      key: "business-app",
      name: "Business App",
      price: "$299",
      description:
        "A more complete business app with expanded information, features and customer connections.",
    },
    {
      key: "website-app",
      name: "Website + Business App",
      price: "$449",
      description:
        "Our complete package — a professional website and mobile-friendly business app built for you.",
      featured: true,
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8fbff 0%, #ffffff 45%, #f4f7fb 100%)",
        color: "#172033",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e9f0",
          padding: "16px 20px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 900,
              fontSize: 26,
              color: "#1769aa",
              textDecoration: "none",
              letterSpacing: "-0.5px",
            }}
          >
            APPTLY
          </a>

          <a
            href="#packages"
            style={{
              background: "#1769aa",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              padding: "11px 18px",
              borderRadius: 10,
              whiteSpace: "nowrap",
            }}
          >
            View Packages
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "72px 20px 54px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "#eaf4ff",
              color: "#1769aa",
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 800,
              marginBottom: 22,
            }}
          >
            Affordable websites & business apps
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 7vw, 66px)",
              lineHeight: 1.03,
              margin: "0 0 22px",
              letterSpacing: "-2px",
            }}
          >
            Need a Website for
            <br />
            Your Small Business?
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 3vw, 23px)",
              lineHeight: 1.55,
              maxWidth: 760,
              margin: "0 auto 18px",
              color: "#526070",
            }}
          >
            Professional websites and business apps don&apos;t have to cost
            thousands of dollars — or come with another monthly APPTLY fee.
          </p>

          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              margin: "0 auto 30px",
              color: "#172033",
            }}
          >
            We build it for you. One upfront price.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                background: "#1769aa",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 18,
                padding: "15px 24px",
                borderRadius: 12,
              }}
              >
            
              Visit APPTLY
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED OFFER */}
      <section style={{ padding: "0 20px 55px" }}>
        <div
          style={{
            maxWidth: 850,
            margin: "0 auto",
            background: "#172033",
            color: "#ffffff",
            padding: "32px",
            borderRadius: 22,
            boxShadow: "0 14px 40px rgba(23,32,51,.16)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontWeight: 800,
              color: "#9fd0ff",
              marginBottom: 8,
            }}
          >
            Complete Package
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 40px)",
              margin: "0 0 10px",
            }}
          >
            Website + Business App — $449
          </h2>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              margin: "0 0 22px",
              color: "#dce6ef",
            }}
          >
            Built for you. Mobile friendly. Professional. No DIY website
            builder and no monthly APPTLY maintenance fee.
          </p>

          <a
            href="/checkout?package=website-app"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#172033",
              textDecoration: "none",
              fontWeight: 900,
              padding: "14px 22px",
              borderRadius: 10,
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* WHY APPTLY */}
      <section
        style={{
          background: "#ffffff",
          padding: "58px 20px",
          borderTop: "1px solid #edf0f4",
          borderBottom: "1px solid #edf0f4",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px, 5vw, 42px)",
              margin: "0 0 38px",
            }}
          >
            Why Small Businesses Choose APPTLY
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            {[
              ["One Upfront Price", "Know what your project costs before we begin."],
              ["Built For You", "No templates to figure out and no complicated DIY setup."],
              ["Mobile Friendly", "Designed to look good and work well on phones and computers."],
              ["No APPTLY Monthly Fee", "We don't turn your website into another recurring bill."],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  padding: 24,
                  border: "1px solid #e2e8ef",
                  borderRadius: 16,
                  background: "#f9fbfd",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                    marginBottom: 9,
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    color: "#5c6977",
                    lineHeight: 1.55,
                    fontSize: 16,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        id="packages"
        style={{
          padding: "65px 20px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 46px)",
                margin: "0 0 12px",
              }}
            >
              Choose What Fits Your Business
            </h2>

            <p
              style={{
                fontSize: 18,
                color: "#5c6977",
                margin: 0,
              }}
            >
              Start small or go all the way to a complete website and business
              app.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))",
              gap: 20,
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                style={{
                  background: pkg.featured ? "#eef7ff" : "#ffffff",
                  border: pkg.featured
                    ? "2px solid #1769aa"
                    : "1px solid #dfe5ec",
                  borderRadius: 18,
                  padding: 26,
                  boxShadow: pkg.featured
                    ? "0 12px 30px rgba(23,105,170,.13)"
                    : "0 7px 20px rgba(0,0,0,.04)",
                }}
              >
                {pkg.featured && (
                  <div
                    style={{
                      color: "#1769aa",
                      fontWeight: 900,
                      fontSize: 13,
                      marginBottom: 9,
                    }}
                  >
                    BEST VALUE
                  </div>
                )}

                <h3
                  style={{
                    fontSize: 23,
                    margin: "0 0 10px",
                  }}
                >
                  {pkg.name}
                </h3>

                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    color: "#1769aa",
                    marginBottom: 16,
                  }}
                >
                  {pkg.price}
                </div>

                <p
                  style={{
                    color: "#5c6977",
                    lineHeight: 1.55,
                    minHeight: 100,
                  }}
                >
                  {pkg.description}
                </p>

                <a
                  href={`/checkout?package=${pkg.key}`} 
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: pkg.featured ? "#1769aa" : "#172033",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 800,
                    padding: "13px 16px",
                    borderRadius: 10,
                  }}
                >
                  Choose This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          padding: "30px 20px 75px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            background: "#1769aa",
            color: "#ffffff",
            borderRadius: 22,
            padding: "42px 25px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(29px, 5vw, 42px)",
              margin: "0 0 14px",
            }}
          >
            Ready to Give Your Business a Better Online Presence?
          </h2>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              margin: "0 auto 24px",
              maxWidth: 660,
              color: "#e7f3ff",
            }}
          >
            See what APPTLY can build for you without spending thousands or
            adding another monthly expense.
          </p>

          <a
            href="/checkout?package=website-app"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#1769aa",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: 18,
              padding: "15px 25px",
              borderRadius: 11,
            }}
          >
            
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px 40px",
          color: "#718091",
          fontSize: 14,
        }}
      >
        <div style={{ fontWeight: 800, color: "#172033", marginBottom: 7 }}>
          APPTLY
        </div>
        <div>Affordable websites and business apps for small businesses.</div>
        <div style={{ marginTop: 12, fontSize: 12 }}>
          APPTLY is an independent business and is not affiliated with OpenAI
          or ChatGPT.
        </div>
      </footer>
    </main>
  );
} 
