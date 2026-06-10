type WordmarkProps = {
  /** "dark" renders for dark backgrounds (white text) */
  variant?: "light" | "dark";
  className?: string;
  withTagline?: boolean;
};

/**
 * Compli wordmark — precision check inside a registration frame,
 * wordmark set in the display serif. Pure SVG + live text; crisp at any size.
 */
export default function Wordmark({
  variant = "light",
  className = "",
  withTagline = false,
}: WordmarkProps) {
  const text = variant === "dark" ? "text-white" : "text-ink";
  const frame = variant === "dark" ? "#43d17c" : "#0e7c4f";
  const tick = variant === "dark" ? "#43d17c" : "#0e7c4f";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* document frame with clipped corner */}
        <path
          d="M2.5 2.5h17l5.5 5.5v17h-22.5z"
          stroke={frame}
          strokeWidth="1.6"
          fill="none"
        />
        <path d="M19.5 2.5v5.5h5.5" stroke={frame} strokeWidth="1.2" fill="none" />
        {/* precision tick */}
        <path
          d="M8 14.5l4 4 7.5-9"
          stroke={tick}
          strokeWidth="2.4"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.45rem] font-semibold tracking-tight ${text}`}
          style={{ fontVariationSettings: "'opsz' 60" }}
        >
          Compli
        </span>
        {withTagline && (
          <span
            className={`mono-label mt-1.5 !text-[0.55rem] ${
              variant === "dark" ? "text-white/55" : "text-faint"
            }`}
          >
            Stay Compliant. Stay Protected.
          </span>
        )}
      </span>
    </span>
  );
}
