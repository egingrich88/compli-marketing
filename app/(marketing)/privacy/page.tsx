import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy — Compli",
  description:
    "Compli's privacy policy, publishing prior to platform launch in June 2026.",
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      title="Privacy Policy"
      description="Compli's full privacy policy is being finalized and will be published before launch."
      ctaText=""
      ctaHref=""
    />
  );
}
