import { Fragment } from "react";

const DEFAULT_REGULATIONS = [
  "ERISA",
  "ACA",
  "COBRA",
  "FMLA",
  "HIPAA",
  "OSHA",
  "FLSA",
  "FCRA",
  "EEOC",
  "NIST AI RMF",
  "FTC §5",
  "NLRB",
];

const FEDERAL_BACKBONE = [
  "ERISA",
  "ACA",
  "COBRA",
  "FMLA",
  "HIPAA",
  "OSHA",
  "FLSA",
  "FCRA",
];
const AB_ANCHORS = ["EEOC", "NIST AI RMF", "FTC §5", "NLRB"];

type RegulationStripProps = {
  regulations?: string[];
  className?: string;
  variant?: "dark" | "light";
  categorized?: boolean;
};

export default function RegulationStrip({
  regulations = DEFAULT_REGULATIONS,
  className = "",
  variant = "dark",
  categorized = false,
}: RegulationStripProps) {
  const dotColor = variant === "dark" ? "text-white/30" : "text-line";

  if (categorized) {
    return (
      <div
        className={`bg-white/[0.03] rounded-lg py-6 md:py-8 px-6 md:px-10 ${className}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          {/* LEFT — Federal */}
          <div>
            <p className="font-serif italic text-sm text-white/60 mb-3">
              Federal
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {FEDERAL_BACKBONE.map((reg) => (
                <span
                  key={reg}
                  className="text-sm font-medium text-white/85 whitespace-nowrap"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — AI & Biometrics */}
          <div className="border-t-2 border-[color:var(--color-accent)] pt-6 md:pt-0 md:border-t-0 md:border-l-2 md:border-[color:var(--color-accent)] md:pl-8 lg:pl-12">
            <p className="font-serif italic text-sm text-white/60 mb-3">
              AI &amp; Biometrics
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {AB_ANCHORS.map((reg) => (
                <span
                  key={reg}
                  className="text-sm font-semibold text-green whitespace-nowrap"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Backward-compatible single-row layout (default — unchanged)
  const singleRowColor =
    variant === "dark" ? "text-white/60" : "text-muted";
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-widest ${singleRowColor} ${className}`}
    >
      {regulations.map((reg, i) => (
        <Fragment key={reg}>
          <span>{reg}</span>
          {i < regulations.length - 1 && (
            <span className={dotColor} aria-hidden="true">
              ·
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
