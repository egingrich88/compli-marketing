const navItems = [
  "Dashboard",
  "Compliance Calendar",
  "AI & Biometrics",
  "Document Vault",
  "Ask Compli",
  "Programs",
];

const deadlines = [
  { dotClass: "bg-green", label: "AI hiring tool annual audit", when: "12 days" },
  {
    dotClass: "bg-[#F59E0B]",
    label: "Biometric consent refresh — new hires",
    when: "21 days",
  },
  { dotClass: "bg-green", label: "FCRA adverse action — 1 pending", when: "5 days" },
];

export default function DashboardMockup() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block rounded-xl overflow-hidden shadow-2xl border border-line bg-white"
    >
      {/* Browser chrome */}
      <div className="h-8 bg-surface border-b border-line flex items-center px-4 gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
        <div className="ml-4 bg-white border border-line rounded-md px-3 py-1 text-xs text-muted">
          app.compli.biz/dashboard
        </div>
        <div className="ml-auto flex items-center gap-1.5 bg-white border border-line rounded-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green/60" />
          Illustrative preview
        </div>
      </div>

      {/* Main mockup area */}
      <div className="flex bg-white">
        {/* Sidebar */}
        <div className="w-40 bg-surface border-r border-line p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/compli-logo-light.png"
            alt=""
            className="h-6 w-auto"
          />
          <nav className="mt-6 space-y-1">
            {navItems.map((item, i) => {
              const isActive = item === "AI & Biometrics";
              return (
                <div
                  key={item}
                  className={
                    isActive
                      ? "bg-white border-l-2 border-green text-navy font-semibold px-3 py-2 rounded-r text-xs"
                      : "text-body px-3 py-2 text-xs"
                  }
                >
                  {item}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 space-y-4">
          <h4 className="text-sm font-semibold text-ink">
            Compliance Dashboard
          </h4>

          <div className="bg-white border border-line rounded-lg p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted">
              Upcoming Deadlines
            </div>
            <div className="mt-2">
              {deadlines.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center justify-between py-2 border-b border-line last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${d.dotClass}`}
                    />
                    <span className="text-xs text-ink">{d.label}</span>
                  </div>
                  <span className="text-xs text-muted">{d.when}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-line rounded-lg p-3">
              <div className="text-xs text-muted uppercase tracking-wider">
                Programs Active
              </div>
              <div className="text-2xl font-bold text-ink">24</div>
            </div>
            <div className="bg-white border border-line rounded-lg p-3">
              <div className="text-xs text-muted uppercase tracking-wider">
                Compliance Score
              </div>
              <div className="text-2xl font-bold text-green">98%</div>
            </div>
          </div>

          {/* Ask Compli preview */}
          <div className="bg-surface border border-line rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-green flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-ink">Ask Compli</div>
            </div>
            <div className="text-xs text-body italic leading-relaxed">
              &ldquo;Does my hiring tool need an EEOC AI audit?&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
