import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://compli.biz"),
  title: "Compli — Federal AI & Biometrics Compliance for American Employers",
  description:
    "Compli is the federal compliance platform for American employers, leading in AI & Biometrics. Built around EEOC guidance, the NIST AI Risk Management Framework, FCRA, FTC Section 5, and federal HIPAA, ERISA, ACA, FMLA, and OSHA frameworks.",
  keywords: [
    "AI compliance for employers",
    "biometric compliance for employers",
    "federal AI employment law",
    "FCRA AI background check compliance",
    "EEOC AI hiring compliance",
    "NIST AI RMF compliance",
    "employer compliance platform",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Compli",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compli — Federal AI & Biometrics Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-ink">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
