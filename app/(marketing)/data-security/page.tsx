import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Data Security — Compli",
  description:
    "How Compli protects employer compliance data. Full security posture publishing prior to June 2026 launch.",
};

export default function DataSecurityPage() {
  return (
    <ComingSoon
      title="Data Security"
      description="Details on how Compli protects your data — encryption, access controls, and compliance posture — publishing before launch."
      ctaText=""
      ctaHref=""
    />
  );
}
