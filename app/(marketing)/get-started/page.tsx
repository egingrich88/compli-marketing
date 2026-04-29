import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Get started — Compli",
  description:
    "Compli subscriptions open Summer 2026. Sign up for early notification.",
};

export default function GetStartedPage() {
  return (
    <ComingSoon
      eyebrow="Get started"
      title="Subscribe to Compli"
      description="Federal AI & Biometrics compliance launches Summer 2026. Tap below to get on the early-notification list."
      ctaText="Get notified"
    />
  );
}
