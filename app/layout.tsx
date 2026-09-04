import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myapptly.com"),
  applicationName: "APPTLY",
  icons: {
    icon: "/apptly-logo.png",
    apple: "/apptly-logo.png",
  },
  title: "Winston-Salem Web Design & Business Apps | APPTLY",
  description:
    "Affordable small-business website design, business web apps and digital business cards from APPTLY in Winston-Salem, NC. Clear one-time pricing from $99 with no required monthly APPTLY maintenance fee.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "APPTLY | Winston-Salem Web Design & Business Apps",
    description:
      "Professional websites, business web apps and digital business cards for small businesses, with clear one-time pricing and no required monthly APPTLY maintenance fee.",
    url: "https://www.myapptly.com/",
    siteName: "APPTLY",
    locale: "en_US",
    images: [
      {
        url: "https://www.myapptly.com/apptly-logo.png",
        width: 1200,
        height: 630,
        alt: "APPTLY - Built For You",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APPTLY | Winston-Salem Web Design & Business Apps",
    description:
      "Affordable professional websites, business web apps and digital business cards for small businesses.",
    images: ["https://www.myapptly.com/apptly-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.myapptly.com/#organization",
      name: "APPTLY",
      url: "https://www.myapptly.com/",
      logo: "https://www.myapptly.com/apptly-logo.png",
      email: "support@myapptly.com",
      description:
        "APPTLY builds affordable websites, business web apps and digital business cards for small businesses.",
      areaServed: [
        { "@type": "City", name: "Winston-Salem" },
        { "@type": "AdministrativeArea", name: "Piedmont Triad, North Carolina" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "APPTLY Small Business Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Small Business Website Design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Web Apps",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Business Cards",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.myapptly.com/#website",
      url: "https://www.myapptly.com/",
      name: "APPTLY",
      publisher: {
        "@id": "https://www.myapptly.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PMDMDBH2LF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMDMDBH2LF');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
