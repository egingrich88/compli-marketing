import type { Metadata } from "next";
import Link from "next/link";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Get started — Compli",
  description:
    "Compli subscriptions open Summer 2026. Sign up for early notification.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function GetStartedPage() {
  return (
    <ComingSoon
      eyebrow="Get started"
      title="Subscribe to Compli"
      description="Federal AI & Biometrics compliance launches Summer 2026. Tap below to get on the early-notification list."
      ctaText="Get notified"
      microcopy={
        <>
          By signing up, you agree to our{" "}
          <Link
            href="/privacy"
            className="underline hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </>
      }
    />
  );
}
