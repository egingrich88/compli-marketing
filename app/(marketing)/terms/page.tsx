import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Terms of Service — Compli",
  description:
    "Compli's terms of service, publishing prior to platform launch in June 2026.",
};

export default function TermsPage() {
  return (
    <ComingSoon
      title="Terms of Service"
      description="Compli's full terms of service are being finalized and will be published before launch."
      ctaText=""
      ctaHref=""
    />
  );
}
