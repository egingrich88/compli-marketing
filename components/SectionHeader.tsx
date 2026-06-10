import { ReactNode } from "react";

type SectionHeaderProps = {
  /** two-digit section index, e.g. "01" */
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** render for dark (ink) sections */
  dark?: boolean;
  /** left-aligned by default; center for closing sections */
  align?: "left" | "center";
  className?: string;
};

/**
 * Numbered section header — mono index, hairline, eyebrow, display title.
 * The structural backbone of every page section.
 */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  dark = false,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const rule = dark ? "bg-white/20" : "bg-line-strong";
  const eyebrowColor = dark ? "text-accent-bright" : "text-accent";
  const titleColor = dark ? "text-white" : "text-ink";
  const ledeColor = dark ? "text-white/75" : "text-body";
  const centered = align === "center";

  return (
    <header className={`${centered ? "text-center" : ""} ${className}`}>
      <div
        className={`flex items-center gap-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        {index && (
          <span className={`mono-label ${eyebrowColor}`} aria-hidden="true">
            {index}
          </span>
        )}
        <span className={`h-px w-10 ${rule}`} aria-hidden="true" />
        <span className={`mono-label ${dark ? "text-white/60" : "text-faint"}`}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={`display mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] ${titleColor} ${
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-6 text-lg leading-relaxed ${ledeColor} ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
