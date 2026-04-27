import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import RegulationStrip from "@/components/RegulationStrip";

const REGISTER_URL = "https://app.compli.biz/register";
const PARTNERS_URL = "https://app.compli.biz/become-a-partner";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

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
    reg: "ERISA",
    jurisdiction: "Federal",
    title: "Form 5500 filing missed?",
    amount: "$250",
    amountSuffix: "per day, up to $150,000",
    body: "Every year, employers with group health plans or 100+ participants must file Form 5500. Compli tracks the deadline, prepares the filing, and reminds you well before the 7-month deadline.",
  },
  {
    reg: "ACA",
    jurisdiction: "Federal",
    title: "1094/1095 forms delivered late?",
    amount: "$310",
    amountSuffix: "per form, annually",
    body: "Applicable Large Employers must furnish 1095-C to every employee and file 1094-C with the IRS. Compli generates forms, tracks distribution, and submits on your behalf.",
  },
  {
    reg: "BIPA",
    jurisdiction: "Illinois",
    title: "Biometric data collected without consent?",
    amount: "$1,000–$5,000",
    amountSuffix: "per violation",
    body: "Fingerprint time clocks, voiceprints, or facial recognition trigger BIPA. Compli generates consent forms, tracks acknowledgments, and maintains the audit trail.",
  },
  {
    reg: "OSHA",
    jurisdiction: "Federal",
    title: "Form 300A not posted on February 1?",
    amount: "$16,131",
    amountSuffix: "per violation (2026)",
    body: "Most employers with 11+ employees must post the annual injury summary February 1 through April 30. Compli auto-generates it from your log and sends reminders.",
  },
];

const trustSignals = [
  "Built by compliance experts",
  "Continuously updated as regulations change",
  "42 programs · federal coverage at launch · state coverage rolling out 2026–2027",
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
                <Eyebrow>Compliance platform for employers</Eyebrow>

                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                  Stay Compliant.
                  <br />
                  Stay Protected.
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                  A complete compliance solution. Every deadline, every notice,
                  every filing — handled.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button href="/pricing" variant="primary" className="px-8 py-4">
                    See pricing
                  </Button>
                  <Button
                    href={REGISTER_URL}
                    external
                    variant="secondary"
                    className="px-8 py-4 !border-white/30 !text-white hover:!bg-white hover:!text-navy"
                  >
                    Start your subscription
                  </Button>
                </div>

                <p className="mt-5 text-xs text-white/50 max-w-xl mx-auto md:mx-0">
                  Paid monthly · cancel any time · credit card required at
                  signup
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

      {/* REGULATION-ANCHORED CASE STUDIES */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>The cost of non-compliance</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              The penalties are real.
              <br />
              Compli handles them so you don&apos;t have to.
            </h2>
            <p className="mt-5 text-lg text-body leading-relaxed">
              Real regulations. Real deadlines. Real consequences — all tracked
              automatically in one platform.
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
              These are four of 42 programs Compli handles.
              <Link
                href="/features"
                className="text-green hover:text-green-dark font-semibold ml-1"
              >
                See the full list →
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* AI ASSISTANT VALUE PROP */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Eyebrow>Always-on assistant</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
                Ask Compli.
                <br />
                Get answers.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                Compli&apos;s AI assistant answers compliance questions 24/7 —
                when&apos;s my Form 5500 due, who needs a 1095-C, do I owe BIPA
                notice — without calling a lawyer or guessing.
              </p>
              <p className="mt-4 text-lg text-body leading-relaxed">
                Trained on your specific configuration: your headcount, your
                benefits, your states, your deadlines.
              </p>
            </div>

            <div className="bg-surface border border-line rounded-2xl p-8 space-y-4">
              <div className="bg-white border border-line rounded-xl px-5 py-4">
                <p className="text-sm text-muted mb-1">You</p>
                <p className="text-ink">When is my Form 5500 due?</p>
              </div>
              <div className="bg-navy text-white rounded-xl px-5 py-4">
                <p className="text-sm text-white/60 mb-1">Compli</p>
                <p>
                  Your 2025 Form 5500 is due July 31, 2026. I&apos;ve added it
                  to your calendar with a 30-day reminder. Want me to start the
                  filing?
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
            <Eyebrow>For partners</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Built for brokers, CPAs, and consultants.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              If you advise employers, Compli gives your book a compliance
              backbone. Co-branded portals, revenue share, and a partner team
              that helps you onboard.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                href={PARTNERS_URL}
                external
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
              Compliance made manageable.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Subscribe today and start handling compliance immediately. Cancel
              any time.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/pricing" variant="primary" className="px-8 py-4">
                See pricing
              </Button>
              <Button
                href={REGISTER_URL}
                external
                variant="secondary"
                className="px-8 py-4 !border-white/30 !text-white hover:!bg-white hover:!text-navy"
              >
                Start your subscription
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
