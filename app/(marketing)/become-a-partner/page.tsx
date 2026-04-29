import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Become a Partner — Compli",
  description:
    "Join the Compli partner program. Co-branded federal compliance and AI & Biometrics work for brokers, CPAs, and consultants.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function BecomeAPartnerPage() {
  return (
    <ComingSoon
      title="Partner with Compli"
      description="Brokers, CPAs, and consultants — give your book a federal compliance backbone with AI & Biometrics work no one in the mid-market has productized. Partner program details publishing at launch."
    />
  );
}
