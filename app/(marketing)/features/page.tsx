import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Features — Compli",
  description:
    "Compli ships 28 federal compliance programs and 5 AI & Biometrics programs at Summer 2026 — federal benefits, labor and safety frameworks, plus the AI & Biometrics Suite, Federal Edition.",
};

export default function FeaturesPage() {
  return (
    <ComingSoon
      title="33 federal compliance programs."
      description="Compli ships 28 federal compliance programs and 5 AI & Biometrics programs at Summer 2026 launch — federal benefits, labor and safety frameworks, plus the AI & Biometrics Suite, Federal Edition. Full coverage details publishing soon."
    />
  );
}
