type LedgerRow = {
  code: string;
  name: string;
  status: string;
};

const federalRows: LedgerRow[] = [
  { code: "ERISA-5500", name: "Form 5500 Filings", status: "tracked" },
  { code: "ACA-1095", name: "ACA 1094/1095 Reporting", status: "tracked" },
  { code: "COBRA-ELE", name: "COBRA Election Windows", status: "tracked" },
  { code: "FMLA-TRK", name: "FMLA Tracking", status: "tracked" },
  { code: "OSHA-LOG", name: "OSHA Compliance", status: "tracked" },
];

const abRows: LedgerRow[] = [
  { code: "AI-4", name: "Governance & Federal Readiness", status: "active" },
  { code: "CONV-2", name: "AI Background Check & FCRA", status: "active" },
  { code: "BIO-3", name: "Biometric Data Lifecycle", status: "active" },
];

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 6.5l3 3 5-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
}

/**
 * Federal program registry — a precise ledger panel. The hero visual:
 * typography, hairlines, and mono program codes instead of a fake app.
 */
export default function ProgramLedger({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-paper text-ink border border-line-strong shadow-[0_24px_60px_-24px_rgba(4,10,18,0.55)] ${className}`}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-ink/80 px-5 py-3.5">
        <span className="mono-label text-ink">Program Registry</span>
        <span className="mono-label text-faint">Fed. Scope</span>
      </div>

      {/* federal backbone rows */}
      <ul>
        {federalRows.map((r) => (
          <li
            key={r.code}
            className="grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-3 border-b border-line px-5 py-2.5"
          >
            <span className="font-mono text-[0.7rem] tracking-wide text-faint">
              {r.code}
            </span>
            <span className="text-[0.82rem] font-medium">{r.name}</span>
            <span className="flex items-center gap-1.5 text-accent">
              <Tick />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em]">
                {r.status}
              </span>
            </span>
          </li>
        ))}
      </ul>

      {/* A&B suite block */}
      <div className="border-b border-line bg-ink px-5 py-2.5">
        <span className="mono-label !text-[0.62rem] text-accent-bright">
          AI &amp; Biometrics Suite — Federal Edition
        </span>
      </div>
      <ul className="bg-ink text-white">
        {abRows.map((r) => (
          <li
            key={r.code}
            className="grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-3 border-b border-white/10 px-5 py-2.5"
          >
            <span className="font-mono text-[0.7rem] tracking-wide text-accent-bright">
              {r.code}
            </span>
            <span className="text-[0.82rem] font-medium text-white/90">
              {r.name}
            </span>
            <span className="flex items-center gap-1.5 text-accent-bright">
              <Tick />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em]">
                {r.status}
              </span>
            </span>
          </li>
        ))}
      </ul>

      {/* footer */}
      <div className="flex items-center justify-between px-5 py-3.5">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">
          33 programs at launch
        </span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">
          Summer 2026
        </span>
      </div>
    </div>
  );
}
