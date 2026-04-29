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

function Group({
  items,
  textColor,
  dotColor,
}: {
  items: string[];
  textColor: string;
  dotColor: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-widest ${textColor}`}
    >
      {items.map((reg, i) => (
        <Fragment key={reg}>
          <span>{reg}</span>
          {i < items.length - 1 && (
            <span className={dotColor} aria-hidden="true">
              ·
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default function RegulationStrip({
  regulations = DEFAULT_REGULATIONS,
  className = "",
  variant = "dark",
  categorized = false,
}: RegulationStripProps) {
  const dotColor = variant === "dark" ? "text-white/30" : "text-line";

  if (categorized) {
    const itemColor = variant === "dark" ? "text-white/80" : "text-body";
    const headerColor = variant === "dark" ? "text-white/60" : "text-muted";
    const dividerColor =
      variant === "dark" ? "border-white/10" : "border-line";

    return (
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 ${className}`}>
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-widest mb-4 ${headerColor}`}
          >
            Federal Compliance
          </p>
          <Group
            items={FEDERAL_BACKBONE}
            textColor={itemColor}
            dotColor={dotColor}
          />
        </div>
        <div className={`md:border-l md:pl-8 lg:pl-12 ${dividerColor}`}>
          <p
            className={`text-xs font-semibold uppercase tracking-widest mb-4 ${headerColor}`}
          >
            AI &amp; Biometrics Anchors
          </p>
          <Group
            items={AB_ANCHORS}
            textColor={itemColor}
            dotColor={dotColor}
          />
        </div>
      </div>
    );
  }

  // Backward-compatible single-row layout (default)
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
