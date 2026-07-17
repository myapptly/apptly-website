import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "APPTLY — Build Profitable Apps Starting Today",
  description: "APPTLY teaches you to build, launch, and monetize your own profitable...",
  openGraph: {
    title: "APPTLY — Build Profitable Apps Starting Today",
    description: "Learn to build, launch, and grow real AI apps with simple step-by-step guidance. No coding experience required.",
    url: "https://myapptly.com",
    siteName: "APPTLY",
    images: [
      {
        url: "https://myapptly.com/apptly%20logo.png", 
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
