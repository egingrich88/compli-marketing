import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Features — Compli",
  description:
    "Compli handles employer compliance across federal regulations, with state coverage rolling out 2026–2027.",
};

export default function FeaturesPage() {
  return (
    <ComingSoon
      title="What Compli does"
      description="A complete compliance platform — every deadline, every notice, every filing, in one place. Full feature breakdown publishing at launch."
    />
  );
}
