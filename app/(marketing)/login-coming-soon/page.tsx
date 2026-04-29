import type { Metadata } from "next";
import Link from "next/link";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Log in — Compli",
  description:
    "Compli launches Summer 2026. Get notified when login goes live.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LoginComingSoonPage() {
  return (
    <ComingSoon
      title="Login is coming Summer 2026"
      description="Compli launches Summer 2026. Get notified when login goes live."
      ctaText="Get notified at launch"
      ctaHref="/get-started"
      launchDate="Summer 2026"
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
