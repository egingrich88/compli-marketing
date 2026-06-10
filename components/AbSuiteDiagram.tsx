const inputs = [
  { label: "AI hiring tool", framework: "EEOC · Title VII" },
  { label: "Algorithmic screening", framework: "FCRA §1681" },
  { label: "Biometric system", framework: "Federal scope" },
];

const modules = [
  { code: "AI-3", name: "Performance Monitoring" },
  { code: "AI-4", name: "Governance & Federal Readiness" },
  { code: "CONV-2", name: "AI Background Check & FCRA" },
  { code: "CONV-3", name: "Emerging Federal AI Preparation" },
  { code: "BIO-3", name: "Biometric Data Lifecycle" },
];

const outputs = [
  "Four-fifths adverse-impact analysis",
  "FCRA pre-adverse & adverse action notices",
  "NIST AI RMF documentation",
  "Audit-ready compliance file",
];

const MONO = "var(--font-geist-mono), ui-monospace, monospace";
const GREEN = "#43d17c";
const LINE = "rgba(255,255,255,0.28)";
const TEXT = "rgba(255,255,255,0.85)";
const FAINT = "rgba(255,255,255,0.5)";

/**
 * How the AI & Biometrics Suite works — custom SVG flow diagram for the
 * dark showcase section. Inputs → suite modules → defensible outputs.
 * Falls back to a stacked HTML version below md.
 */
export default function AbSuiteDiagram() {
  return (
    <>
      {/* Desktop / tablet SVG */}
      <svg
        viewBox="0 0 780 400"
        role="img"
        aria-label="Diagram: AI hiring tools, algorithmic screening, and biometric systems flow into the Compli AI & Biometrics Suite, which produces four-fifths analysis, FCRA notices, NIST AI RMF documentation, and an audit-ready compliance file."
        className="hidden md:block w-full h-auto"
      >
        {/* ── inputs ───────────────────────────── */}
        {inputs.map((inp, i) => {
          const y = 70 + i * 110;
          return (
            <g key={inp.label}>
              <rect
                x="8"
                y={y}
                width="188"
                height="58"
                fill="none"
                stroke={LINE}
                strokeWidth="1"
              />
              <text
                x="24"
                y={y + 26}
                fill={TEXT}
                fontSize="13"
                fontFamily="inherit"
                fontWeight="600"
              >
                {inp.label}
              </text>
              <text
                x="24"
                y={y + 44}
                fill={FAINT}
                fontSize="10"
                fontFamily={MONO}
                letterSpacing="0.08em"
              >
                {inp.framework}
              </text>
              {/* connector into engine */}
              <path
                className="diagram-draw"
                d={`M196 ${y + 29} H 246 V 200 H 276`}
                fill="none"
                stroke={LINE}
                strokeWidth="1"
              />
            </g>
          );
        })}

        {/* ── engine ───────────────────────────── */}
        <rect
          x="276"
          y="58"
          width="260"
          height="284"
          fill="rgba(67,209,124,0.05)"
          stroke={GREEN}
          strokeWidth="1.4"
        />
        {/* clipped corner detail */}
        <path d="M516 58 L536 78" stroke={GREEN} strokeWidth="1" />
        <text
          x="296"
          y="90"
          fill={GREEN}
          fontSize="11"
          fontFamily={MONO}
          letterSpacing="0.16em"
        >
          COMPLI A&amp;B SUITE
        </text>
        <text
          x="296"
          y="108"
          fill={FAINT}
          fontSize="9.5"
          fontFamily={MONO}
          letterSpacing="0.14em"
        >
          FEDERAL EDITION
        </text>
        <line x1="296" y1="124" x2="516" y2="124" stroke={LINE} strokeWidth="1" />
        {modules.map((m, i) => {
          const y = 150 + i * 38;
          return (
            <g key={m.code}>
              <text
                x="296"
                y={y}
                fill={GREEN}
                fontSize="10.5"
                fontFamily={MONO}
                fontWeight="600"
              >
                {m.code}
              </text>
              <text x="340" y={y} fill={TEXT} fontSize="9.5" fontFamily="inherit">
                {m.name}
              </text>
            </g>
          );
        })}

        {/* ── outputs ──────────────────────────── */}
        {outputs.map((out, i) => {
          const y = 88 + i * 76;
          return (
            <g key={out}>
              <path
                className="diagram-draw"
                d={`M536 200 H 551 V ${y} H 566`}
                fill="none"
                stroke={LINE}
                strokeWidth="1"
              />
              <path
                d={`M572 ${y - 4} l4 5 7-9`}
                fill="none"
                stroke={GREEN}
                strokeWidth="1.8"
                strokeLinecap="square"
              />
              <text
                x="592"
                y={y + 4}
                fill={TEXT}
                fontSize="12.5"
                fontFamily="inherit"
                fontWeight="500"
              >
                {out.length > 30 ? (
                  <>
                    <tspan x="592" dy="-4">
                      {out.slice(0, out.lastIndexOf(" ", 30))}
                    </tspan>
                    <tspan x="592" dy="16">
                      {out.slice(out.lastIndexOf(" ", 30) + 1)}
                    </tspan>
                  </>
                ) : (
                  out
                )}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Mobile stacked fallback */}
      <div className="md:hidden space-y-0">
        <p className="mono-label text-white/50">Inputs</p>
        <ul className="mt-3 border border-white/20 divide-y divide-white/10">
          {inputs.map((inp) => (
            <li key={inp.label} className="px-4 py-3">
              <span className="block text-sm font-semibold text-white/90">
                {inp.label}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-white/50">
                {inp.framework}
              </span>
            </li>
          ))}
        </ul>

        <div className="my-4 ml-5 h-6 w-px bg-white/30" aria-hidden="true" />

        <div className="border border-accent-bright/70 bg-accent-bright/5 px-4 py-4">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-bright">
            Compli A&amp;B Suite
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/50">
            Federal Edition
          </p>
          <ul className="mt-3 space-y-2">
            {modules.map((m) => (
              <li key={m.code} className="flex gap-3 text-sm">
                <span className="font-mono text-[0.7rem] font-semibold text-accent-bright w-14 shrink-0">
                  {m.code}
                </span>
                <span className="text-white/85">{m.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-4 ml-5 h-6 w-px bg-white/30" aria-hidden="true" />

        <p className="mono-label text-white/50">Outputs</p>
        <ul className="mt-3 space-y-2.5">
          {outputs.map((out) => (
            <li key={out} className="flex items-start gap-2.5 text-sm text-white/85">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-accent-bright"
              >
                <path
                  d="M2.5 7.5l3.5 3.5 5.5-8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                />
              </svg>
              {out}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
