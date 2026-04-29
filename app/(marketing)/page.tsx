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
    reg: "FCRA §1681",
    jurisdiction: "Federal",
    title: "AI background check without proper adverse action notice?",
    amount: "$1,000+",
    amountSuffix: "per violation, plus class-action exposure",
    body: "FCRA applies to algorithmic screening as much as traditional background checks. Compli generates pre-adverse and adverse action notices, tracks the five-day window, and maintains the human-review documentation FCRA requires.",
  },
  {
    reg: "NIST AI RMF",
    jurisdiction: "Federal framework",
    title: "No documented AI governance program?",
    amount: "Foundational",
    amountSuffix: "for any federal AI litigation defense",
    body: "The NIST AI Risk Management Framework is voluntary today and the de facto compliance standard tomorrow. Compli builds the governance documentation — risk identification, mitigation logs, vendor assessments — that becomes your federal defense when AI legislation passes.",
  },
  {
    reg: "ERISA + IRC",
    jurisdiction: "Federal",
    title: "Form 5500 missed or filed late?",
    amount: "$250",
    amountSuffix: "per day, up to $150,000",
    body: "Beyond A&B flagship, Compli's federal benefits backbone covers Form 5500, SPDs, COBRA, ACA filings, FMLA, and the federal regulatory work that keeps benefits programs compliant. The reliable foundation under the flagship.",
  },
];

const trustSignals = [
  "Federal-first by design — built around the frameworks that have teeth",
  "AI & Biometrics flagship — first-mover positioning in an emerging category",
  "~30 federal programs · Launching June 24, 2026",
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
                <Eyebrow>Federal compliance · AI &amp; Biometrics first</Eyebrow>

                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                  Federal compliance.
                  <br />
                  AI &amp; Biometrics first.
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Compli is the federal compliance platform for American
                  employers — built around EEOC, NIST AI RMF, FTC §5, FCRA, and
                  the federal frameworks with real teeth. Our flagship AI
                  &amp; Biometrics Suite leads the way.
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
                  Launching June 24, 2026 · Built around EEOC, NIST AI RMF, FTC
                  §5, FCRA
                </p>

                <div className="mt-12 md:mt-14">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 text-center md:text-left">
                    Coverage areas
                  </p>
                  <RegulationStrip className="md:justify-start" />
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
              the documentation, deadlines, and defenses across both flagship
              A&amp;B and the benefits backbone.
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
              These are four of approximately 30 federal programs Compli
              handles, with our AI &amp; Biometrics Suite at the flagship.
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
              compliance backbone with an AI &amp; Biometrics flagship that no
              one else in the market has productized. Co-branded portals,
              revenue share, and a partner team that helps you onboard.
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
              Federal AI &amp; Biometrics compliance launches June 24, 2026.
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
