import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pricing — Compli",
  description:
    "Compli pricing for employers and partners. Monthly subscriptions, no long-term contracts. Full pricing available June 2026.",
};

export default function PricingPage() {
  return (
    <ComingSoon
      title="Pricing"
      description="Simple monthly pricing for the full Compli platform. Detailed plans publishing at launch."
    />
  );
}
