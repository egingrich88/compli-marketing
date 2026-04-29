import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pricing — Compli",
  description:
    "Compli pricing for employers and partners. Publishing ahead of the June 24, 2026 launch. Federal compliance with our flagship AI & Biometrics Suite — productized, monthly billing, no annual lock-in.",
};

export default function PricingPage() {
  return (
    <ComingSoon
      title="Pricing"
      description="Compli pricing publishes ahead of the June 24, 2026 launch. Federal compliance with our flagship AI & Biometrics Suite — productized, monthly billing, no annual lock-in."
    />
  );
}
