import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import RegulationStrip from "@/components/RegulationStrip";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

type Pillar = {
  number: string;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "The category is open",
    body: "No dominant competitor exists in mid-market AI & Biometrics employer compliance. Enterprise AI governance vendors serve the Fortune 500. Generic HR compliance platforms have thin AI content. State-specific biometric vendors are fragmented. Compli is the productized, broker-distributed answer for the mid-market.",
  },
  {
    number: "02",
    title: "The clock is ticking",
    body: "Federal AI employment legislation is advancing — the No Robot Bosses Act, EEOC's 2024–2028 strategic enforcement plan, accelerating NIST AI RMF adoption. When federal law passes in 2026 or 2027, every compliance platform will scramble to catch up. Compli will already be in market with subscribers, content, and documented workflows.",
  },
  {
    number: "03",
    title: "The exposure is real",
    body: "Class-action settlements like the BNSF $75M and Facebook $650M cases have driven employer awareness of biometric exposure. EEOC enforcement actions against AI hiring tools — Workday and iTutorGroup among them — signal where the federal teeth are. Mid-market employers who didn't know they had a problem in 2024 know they have one now.",
  },
];

type CaseStudy = {
  reg: string;
  jurisdiction: string;
  title: string;
  amount: string;
  amountSuffix: string;
  body: string;
};

const caseStudies: CaseStudy[] = [
  {
    reg: "EEOC + Title VII",
    jurisdiction: "Federal",
    title: "AI hiring tool screening out protected applicants?",
    amount: "$365K",
    amountSuffix: "iTutorGroup settlement (2023)",
    body: "EEOC's 2024–2028 strategic enforcement plan named AI hiring tools as a priority. Compli generates EEOC-aligned audit documentation, tracks vendor disclosures, and maintains the four-fifths rule analysis you'll need if challenged.",
  },
  {
    reg: "ACA §4980H",
    jurisdiction: "Federal",
    title: "ACA reporting late or wrong?",
    amount: "$3,470",
    amountSuffix: "per missed/incorrect 1094/1095, with size-based caps",
    body: "Mid-market employers must file Forms 1094-C and 1095-C with the IRS and distribute employee statements every year. Compli generates the forms, tracks the deadlines, and produces the audit trail the IRS asks for.",
  },
  {
    reg: "FCRA §1681",
    jurisdiction: "Federal",
    title: "AI background check without proper adverse action notice?",
    amount: "$1,000+",
    amountSuffix: "per violation, plus class-action exposure",
    body: "FCRA applies to algorithmic screening as much as traditional background checks. Compli generates pre-adverse and adverse action notices, tracks the five-day window, and maintains the human-review documentation FCRA requires.",
  },
  {
    reg: "ERISA §502",
    jurisdiction: "Federal",
    title: "Form 5500 missed or filed late?",
    amount: "$250",
    amountSuffix: "per day, up to $150,000",
    body: "Employer health and welfare plans subject to ERISA must file Form 5500 every year. Compli builds the filing, tracks the deadline, generates the SPD, and keeps the documentation an ERISA audit will ask for.",
  },
];

const backbonePrograms = [
  "SPD Builder",
  "POP Plan Builder",
  "ICHRA / QSEHRA / FSA",
  "COBRA Tracking",
  "ACA 1094/1095 Reporting",
  "FMLA Tracking",
  "Form 5500 Filings",
  "OSHA Compliance",
];

const launchModules = [
  { code: "AI-3", name: "Performance Monitoring" },
  { code: "AI-4", name: "Governance & Federal Readiness" },
  { code: "CONV-2", name: "AI Background Check & FCRA" },
  { code: "CONV-3", name: "Emerging Federal AI Preparation" },
  { code: "BIO-3", name: "Biometric Data Lifecycle (Federal Scope)" },
];

const trustSignals = [
  "Federal-first by design — built around the federal frameworks employers can't afford to ignore",
  "AI & Biometrics — first-mover positioning in an emerging category",
  "~30 federal programs · Launching Summer 2026",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-20 lg:py-28">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="text-center md:text-left">
                <Eyebrow>Federal compliance for American employers</Eyebrow>

                <h1 className="mt-5 font-serif text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight">
                  <span className="block whitespace-nowrap">Compliant today.</span>
                  <span className="block whitespace-nowrap">Protected tomorrow.</span>
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Federal compliance for American employers — protecting
                  today, securing tomorrow with AI &amp; Biometric compliance.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    href="/get-started"
                    variant="primary"
                    className="px-8 py-4"
                  >
                    Get notified at launch
                  </Button>
                  <Button
                    href="/features"
                    variant="secondary"
                    className="px-8 py-4 !border-white/30 !text-white hover:!bg-white hover:!text-navy"
                  >
                    See what we cover
                  </Button>
                </div>

                <p className="mt-5 text-xs text-white/50 max-w-xl mx-auto md:mx-0">
                  Launching Summer 2026 · Built around EEOC, NIST AI RMF, FTC
                  §5, FCRA
                </p>

                <div className="mt-12 md:mt-14">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 text-center md:text-left">
                    Coverage areas
                  </p>
                  <RegulationStrip categorized className="md:justify-start" />
                </div>
              </div>

              <div className="md:pl-4">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY A&B, WHY NOW */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Eyebrow>Why now</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
                AI &amp; Biometrics is the next decade&apos;s compliance
                battleground.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                Federal AI employment legislation is on the horizon for 2026
                and 2027. EEOC enforcement actions and class-action settlements
                are already shaping the playing field. Mid-market American
                employers are the most exposed — they carry the obligations of
                large employers without the compliance teams that handle them.
                Compli is built specifically for this category.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className="bg-white border border-line rounded-2xl p-8"
                >
                  <div className="text-sm font-semibold tracking-widest text-[color:var(--color-accent)]">
                    {p.number}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-body leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT COMPLI COVERS */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Eyebrow>Coverage</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
                What Compli covers.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                The federal compliance work American employers actually have
                to do — across benefits, leave, labor, safety, and the AI
                &amp; Biometrics edge.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {/* LEFT — Federal backbone */}
              <div className="bg-white border-2 border-navy rounded-2xl p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-green">
                  Federal benefits, leave &amp; labor
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-ink leading-tight">
                  The compliance backbone
                </h3>
                <p className="mt-4 text-body leading-relaxed">
                  ERISA, ACA, COBRA, FMLA, HIPAA, OSHA, FLSA, FCRA. Form 5500
                  filings, Summary Plan Descriptions, COBRA election windows,
                  ACA 1094/1095 reporting, OSHA logs. The federal compliance
                  work mid-market employers carry but rarely have a real
                  platform for.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-body">
                  {backbonePrograms.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-green mt-1.5 leading-none">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT — A&B Federal Edition */}
              <div className="bg-navy text-white rounded-2xl p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  AI &amp; Biometrics — Federal Edition
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white leading-tight">
                  Ahead of the curve
                </h3>
                <p className="mt-4 text-white/85 leading-relaxed">
                  EEOC AI hiring guidance. FCRA applied to algorithmic
                  screening. NIST AI RMF documentation. The federal AI
                  compliance work nobody else has productized for the
                  mid-market — built early so customers are positioned ahead
                  of federal AI legislation.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/90">
                  {launchModules.map((m) => (
                    <li key={m.code} className="flex items-start gap-3">
                      <span className="font-mono text-[color:var(--color-accent)] font-semibold tracking-wide whitespace-nowrap">
                        {m.code}
                      </span>
                      <span>— {m.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted">
                Federal-only at launch. Compli ships approximately 30 federal
                compliance programs at Summer 2026.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>The cost of getting it wrong</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              The penalties are federal. The frameworks are real. Compli
              handles them.
            </h2>
            <p className="mt-5 text-lg text-body leading-relaxed">
              From EEOC enforcement against AI hiring tools, to FCRA penalties
              on algorithmic screening, to ERISA fines on missed Form 5500
              filings — federal compliance exposure has teeth. Compli handles
              the documentation, deadlines, and defenses across AI &amp;
              Biometrics and the benefits backbone.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <div
                key={c.reg + c.title}
                className="bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-green">
                    {c.reg}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {c.jurisdiction}
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink leading-tight">
                  {c.title}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-ink">{c.amount}</span>
                  <span className="text-sm text-body">{c.amountSuffix}</span>
                </div>
                <p className="mt-4 text-body leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              These are four of approximately 30 federal compliance programs
              Compli covers.
              <Link
                href="/features"
                className="text-green hover:text-green-dark font-semibold ml-1"
              >
                See what we cover →
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* AI ASSISTANT */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Eyebrow>Built-in expertise</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
                Ask Compli.
                <br />
                Get answers.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                Compli&apos;s AI assistant answers compliance questions 24/7 —
                does my hiring tool need an EEOC AI audit, what does FCRA
                require for AI background checks, am I building NIST AI RMF
                documentation correctly — without calling a lawyer or guessing.
              </p>
              <p className="mt-4 text-lg text-body leading-relaxed">
                Trained on your specific configuration: your headcount, your
                benefits, your states, your deadlines.
              </p>
            </div>

            <div className="bg-surface border border-line rounded-2xl p-8 space-y-4">
              <div className="bg-white border border-line rounded-xl px-5 py-4">
                <p className="text-sm text-muted mb-1">You</p>
                <p className="text-ink">
                  Does my hiring tool need an EEOC AI audit?
                </p>
              </div>
              <div className="bg-navy text-white rounded-xl px-5 py-4">
                <p className="text-sm text-white/60 mb-1">Compli</p>
                <p>
                  Likely yes. Your applicant volume crosses the four-fifths
                  threshold for adverse impact analysis. I&apos;ve drafted the
                  audit framework using NIST AI RMF and queued the vendor
                  disclosure request. Ready to send?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PARTNER PROGRAM */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Partners</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Built for brokers, CPAs, and consultants.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              If you advise employers, Compli gives your book a federal
              compliance backbone with AI &amp; Biometrics work no one in the
              mid-market has productized. Co-branded portals, revenue share,
              and a partner team that helps you onboard.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                href="/become-a-partner"
                variant="primary"
                className="px-8 py-4"
              >
                Become a partner
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark py-20 md:py-28 overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-[1.1] tracking-tight">
              Stay Compliant. Stay Protected.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Federal AI &amp; Biometrics compliance launches Summer 2026.
              Get on the early-notification list, or talk to us about
              partnering.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/get-started"
                variant="primary"
                className="px-8 py-4"
              >
                Get notified at launch
              </Button>
              <Button
                href="/become-a-partner"
                variant="secondary"
                className="px-8 py-4 !border-white/30 !text-white hover:!bg-white hover:!text-navy"
              >
                Become a partner
              </Button>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-8">
                Why employers choose Compli
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
                {trustSignals.map((line) => (
                  <div
                    key={line}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-green"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 7l-8 10-4-4" />
                      </svg>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-sm text-white/60">
              Questions?{" "}
              <Link
                href="/contact"
                className="text-white underline hover:text-green transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
