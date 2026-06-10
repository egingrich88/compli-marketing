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
  const dotColor = variant === "dark" ? "text-white/30" : "text-line-strong";

  if (categorized) {
    return (
      <div className={`border-t border-white/15 pt-6 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          {/* Federal backbone */}
          <div>
            <p className="mono-label !text-[0.62rem] text-white/60 mb-3">
              Federal backbone
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {FEDERAL_BACKBONE.map((reg) => (
                <span
                  key={reg}
                  className="font-mono text-[0.78rem] tracking-wide text-white/80 whitespace-nowrap"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Biometrics */}
          <div className="border-t border-white/15 pt-6 md:pt-0 md:border-t-0 md:border-l md:border-white/15 md:pl-8 lg:pl-12">
            <p className="mono-label !text-[0.62rem] text-accent-bright mb-3">
              AI &amp; Biometrics
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {AB_ANCHORS.map((reg) => (
                <span
                  key={reg}
                  className="font-mono text-[0.78rem] tracking-wide text-accent-bright whitespace-nowrap"
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

  const singleRowColor = variant === "dark" ? "text-white/65" : "text-faint";
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] ${singleRowColor} ${className}`}
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
