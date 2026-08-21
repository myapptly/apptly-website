"use client";

import { useState } from "react";

export default function StartYourProjectPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Thank You!</h1>

          <p style={styles.intro}>
            I’ve received your project information. I’ll use what you provided
            to prepare a first APPTLY demonstration for your business.
          </p>

          <p style={styles.intro}>
            If I need anything else, I’ll contact you before moving forward.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Tell Me About Your Business</h1>

          <p style={styles.intro}>
            The more I know about your business, the better your first APPTLY
            demonstration can be. Most questions are quick, and you can skip
            anything that does not apply.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Section title="Business Information">
            <Field label="Business Name" required />
            <Field label="Contact Person" required />

            <div style={styles.twoColumn}>
              <Field label="Phone Number" />
              <Field label="Email Address" type="email" required />
            </div>

            <Field label="Business Address" />

            <div style={styles.twoColumn}>
              <Field label="City" />
              <Field label="State" />
            </div>

            <Field label="Website Address" />
            <Field label="Facebook Page" />
            <Field label="Instagram Page" />
          </Section>

          <Section title="Tell Me About Your Business">
            <TextArea
              label="What does your business do?"
              placeholder="Tell me briefly about your products, services, customers, or organization."
            />

            <TextArea
              label="What makes your business different?"
              placeholder="What would you most like a potential customer to know?"
            />

            <Field label="How long have you been in business?" />

            <TextArea
              label="What are your main products or services?"
              placeholder="List your most important products or services."
            />
          </Section>

          <Section title="What Are You Interested In?">
            <Check label="Digital Business Card" />
            <Check label="Business App" />
            <Check label="Website" />
            <Check label="Website + Business App" />
            <Check label="Not Sure — Help Me Decide" />
          </Section>

          <Section title="What Should Customers Be Able To Do?">
            <div style={styles.checkGrid}>
              <Check label="Call Us" />
              <Check label="Text Us" />
              <Check label="Email Us" />
              <Check label="Get Directions" />
              <Check label="Request a Quote" />
              <Check label="Book an Appointment" />
              <Check label="Shop Online" />
              <Check label="Order Online" />
              <Check label="Make a Payment" />
              <Check label="View Products" />
              <Check label="View Services" />
              <Check label="View Reviews" />
              <Check label="Visit Facebook" />
              <Check label="Visit Instagram" />
              <Check label="Share the Business" />
              <Check label="Something Else" />
            </div>
          </Section>

          <Section title="Pages or Sections You May Want">
            <div style={styles.checkGrid}>
              <Check label="Home" />
              <Check label="About Us" />
              <Check label="Services" />
              <Check label="Products" />
              <Check label="Photo Gallery" />
              <Check label="Reviews" />
              <Check label="Staff / Team" />
              <Check label="Locations" />
              <Check label="Hours" />
              <Check label="Events" />
              <Check label="FAQ" />
              <Check label="Contact" />
              <Check label="Financing" />
              <Check label="Request Form" />
            </div>
          </Section>

          <Section title="Look & Style">
            <Field label="What are your business colors?" />

            <TextArea
              label="Describe the look you would like"
              placeholder="Examples: clean, professional, elegant, modern, colorful, traditional, simple, upscale..."
            />

            <Field
              label="Is there a website or app whose style you like?"
              placeholder="Paste a website address if you have one."
            />
          </Section>

          <Section title="Your Most Important Priorities">
            <TextArea
              label="What are the three most important things you want customers to be able to do?"
              placeholder={`1.\n2.\n3.`}
            />

            <TextArea
              label="Is there anything special you want included?"
              placeholder="Tell me anything else that would help me understand what you want."
            />
          </Section>

          <Section title="Using Your Existing Business Information">
            <label style={styles.permission}>
              <input
                type="checkbox"
                required
                style={styles.checkbox}
              />

              <span>
                I authorize APPTLY to use publicly available information,
                images, logos, business details, and links from my existing
                website and business social-media pages for the purpose of
                preparing my APPTLY demonstration.
              </span>
            </label>
          </Section>

          <button type="submit" style={styles.submitButton}>
            Submit My Business Information
          </button>

          <p style={styles.footerNote}>
            Submitting this form does not obligate you to purchase anything.
            It simply gives me the information needed to prepare a better first
            demonstration.
          </p>
        </form>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder = "",
  required = false,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label style={styles.label}>
      {label}
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        style={styles.input}
      />
    </label>
  );
}

function TextArea({
  label,
  placeholder = "",
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <label style={styles.label}>
      {label}
      <textarea
        rows={5}
        placeholder={placeholder}
        style={styles.textarea}
      />
    </label>
  );
}

function Check({ label }: { label: string }) {
  return (
    <label style={styles.checkLabel}>
      <input type="checkbox" style={styles.checkbox} />
      <span>{label}</span>
    </label>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "40px 18px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  card: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "38px",
    borderRadius: "18px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "34px",
    marginBottom: "12px",
    color: "#111827",
  },

  intro: {
    fontSize: "17px",
    lineHeight: 1.6,
    color: "#4b5563",
  },

  section: {
    marginTop: "34px",
    paddingTop: "10px",
  },

  sectionTitle: {
    fontSize: "22px",
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: "10px",
    marginBottom: "20px",
    color: "#111827",
  },

  label: {
    display: "block",
    fontWeight: 600,
    marginBottom: "18px",
    color: "#374151",
  },

  input: {
    width: "100%",
    marginTop: "7px",
    padding: "12px 14px",
    borderRadius: "9px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    marginTop: "7px",
    padding: "12px 14px",
    borderRadius: "9px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    resize: "vertical",
    boxSizing: "border-box",
  },

  twoColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },

  checkGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "12px",
  },

  checkLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#111827",
  },

  checkbox: {
    width: "18px",
    height: "18px",
    flexShrink: 0,
  },

  permission: {
    display: "flex",
    gap: "12px",
    lineHeight: 1.5,
    fontSize: "15px",
    color: "#374151",
    background: "#f9fafb",
    padding: "16px",
    borderRadius: "10px",
  },

  submitButton: {
    display: "block",
    width: "100%",
    marginTop: "36px",
    padding: "16px",
    fontSize: "18px",
    fontWeight: 700,
    border: "none",
    borderRadius: "10px",
    background: "#111827",
    color: "#ffffff",
    cursor: "pointer",
  },

  footerNote: {
    textAlign: "center",
    marginTop: "14px",
    color: "#6b7280",
    fontSize: "14px",
  },
}; 
