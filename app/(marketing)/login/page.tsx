import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Sign in — Compli",
  description:
    "Sign in to your Compli account. Public access begins Summer 2026.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LoginPage() {
  return (
    <ComingSoon
      title="Sign in to Compli"
      description="The Compli platform opens to customers in Summer 2026."
      ctaText="Become a partner"
      ctaHref="/become-a-partner"
    />
  );
}
