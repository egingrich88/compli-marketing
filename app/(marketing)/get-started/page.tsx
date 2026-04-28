import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Get started — Compli",
  description:
    "Compli subscriptions open June 24, 2026. Sign up for early notification.",
};

export default function GetStartedPage() {
  return (
    <ComingSoon
      eyebrow="Get started"
      title="Subscribe to Compli"
      description="Compli subscriptions open at the June 24, 2026 launch. Tap below to get notified the moment it goes live."
      ctaText="Get notified"
    />
  );
}
