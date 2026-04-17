import { Fragment } from "react";

const DEFAULT_REGULATIONS = [
  "ERISA",
  "COBRA",
  "ACA",
  "FMLA",
  "BIPA",
  "FLSA",
  "OSHA",
  "HIPAA",
  "DOT",
  "EEO-1",
  "ADA",
  "PWFA",
];

type RegulationStripProps = {
  regulations?: string[];
  className?: string;
  variant?: "dark" | "light";
};

export default function RegulationStrip({
  regulations = DEFAULT_REGULATIONS,
  className = "",
  variant = "dark",
}: RegulationStripProps) {
  const textColor = variant === "dark" ? "text-white/60" : "text-muted";
  const dotColor = variant === "dark" ? "text-white/30" : "text-line";

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-widest ${textColor} ${className}`}
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
