import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Become a Partner — Compli",
  description:
    "Join the Compli partner program. Co-branded portals, revenue share, and partner support for brokers, CPAs, and consultants.",
};

export default function BecomeAPartnerPage() {
  return (
    <ComingSoon
      title="Partner with Compli"
      description="Brokers, CPAs, and consultants — give your book a compliance backbone. Partner program details publishing at launch."
    />
  );
}
