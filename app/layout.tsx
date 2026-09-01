import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myapptly.com"),
  icons: {
  icon: "/apptly-logo.png",
  apple: "/apptly-logo.png",
}, 
  title: "APPTLY — Affordable Business Websites & Apps for Small Businesses",
description: "Professional websites, business apps and digital business cards for small businesses. Simple one-time pricing with no on-going monthly website fees.", 
  openGraph: {
    title: "APPTLY — Your Business App or Website, Built Just For You",
description: "Professional business apps and websites built for you, with simple one-time pricing and no required monthly APPTLY maintenance fee.", 
    url: "https://myapptly.com",
    siteName: "APPTLY",
    images: [
      {
        url: "https://myapptly.com/apptly-logo.png", 
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
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
