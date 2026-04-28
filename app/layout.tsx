import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://compli.biz"),
  title: "Compli — Compliance made manageable.",
  description:
    "Compli is a compliance platform for employers without a dedicated compliance team. Every deadline, every notice, every filing — in one place.",
  keywords: [
    "employer compliance software",
    "compliance platform",
    "compliance calendar",
    "ACA compliance software",
    "BIPA compliance",
    "OSHA compliance",
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
        alt: "Compli — Compliance made manageable.",
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
      className={`${inter.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-ink">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
