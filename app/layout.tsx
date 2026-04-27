import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  title: "Compli — Stay Compliant. Stay Protected.",
  description:
    "Compliance workflow management for employers without a compliance department. 42 modules, real-time compliance calendar, and an AI assistant that handles every deadline, notice, and filing.",
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
        {children}
      </body>
    </html>
  );
}
