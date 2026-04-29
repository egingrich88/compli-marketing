import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Features — Compli",
  description:
    "Compli ships approximately 30 federal compliance programs at Summer 2026 — federal benefits, labor and safety frameworks, plus the AI & Biometrics Suite, Federal Edition.",
};

export default function FeaturesPage() {
  return (
    <ComingSoon
      title="Approximately 30 federal compliance programs."
      description="Compli ships ~30 federal compliance programs at Summer 2026 launch — federal benefits, labor and safety frameworks, plus the AI & Biometrics Suite, Federal Edition. Full coverage details publishing soon."
    />
  );
}
