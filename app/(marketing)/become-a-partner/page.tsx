import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Become a Partner — Compli",
  description:
    "Join the Compli partner program. Co-branded federal compliance with an AI & Biometrics flagship for brokers, CPAs, and consultants.",
};

export default function BecomeAPartnerPage() {
  return (
    <ComingSoon
      title="Partner with Compli"
      description="Brokers, CPAs, and consultants — give your book a federal compliance backbone with an AI & Biometrics flagship that no one in the mid-market has productized. Partner program details publishing at launch."
    />
  );
}
