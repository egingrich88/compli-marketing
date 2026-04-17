import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import RegulationStrip from "@/components/RegulationStrip";

const REGISTER_URL =
  "https://compli-platform-production.up.railway.app/register";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

type Step = { number: string; title: string; body: string };

const steps: Step[] = [
  {
    number: "01",
    title: "Tell us about your business",
    body:
      "Answer 9 questions about your company size, industry, and what you offer employees. Takes 5 minutes.",
  },
  {
    number: "02",
    title: "We build your compliance plan",
    body:
      "Compli analyzes your answers and recommends the right modules, generates required documents, and sets up your compliance calendar automatically.",
  },
  {
    number: "03",
    title: "Stay ahead of every deadline",
    body:
      "Real-time alerts, one-click document generation, and an AI assistant that answers your compliance questions 24/7.",
  },
];

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-20 lg:py-28">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left column — text */}
              <div className="text-center md:text-left">
                <Eyebrow>Compliance platform for employers</Eyebrow>

                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                  Stay Compliant.
                  <br />
                  Stay Protected.
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                  A complete compliance program. Every deadline, every
                  notice, every filing — handled.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    href="/pricing"
                    variant="primary"
                    className="px-8 py-4"
                  >
                    See Pricing
                  </Button>
                  <Button
                    href={REGISTER_URL}
                    external
                    variant="secondary"
                    className="px-8 py-4 !border-white/30 !text-white hover:!bg-white hover:!text-navy"
                  >
                    Get Started
                  </Button>
                </div>

                <div className="mt-12 md:mt-14">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 text-center md:text-left">
                    Compliance areas we cover
                  </p>
                  <RegulationStrip className="md:justify-start" />
                </div>
              </div>

              {/* Right column — mockup */}
              <div className="md:pl-4">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1.5 — VIDEO PLACEHOLDER */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="text-center">
            <Eyebrow>See It In Action</Eyebrow>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-ink tracking-tight max-w-2xl mx-auto">
              Watch how Compli works
            </h2>
            <p className="mt-4 text-lg text-body max-w-xl mx-auto">
              A 2-minute walkthrough of the platform.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center flex-col gap-4">
            {/* TODO: wire to actual video embed once content is ready */}
            <div
              className="cursor-pointer w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm ring-2 ring-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              role="button"
              aria-label="Play product walkthrough video"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="text-white/60 text-sm font-medium">Coming soon</div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — COMPLIANCE AREAS / CASE STUDIES */}
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
              Real regulations. Real deadlines. Real consequences — all
              tracked automatically in one platform.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {/* Card 1 — Form 5500 */}
            <div className="bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-green">
                  ERISA
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Federal
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink leading-tight">
                Form 5500 filing missed?
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink">$250</span>
                <span className="text-sm text-body">
                  per day, up to $150,000
                </span>
              </div>
              <p className="mt-4 text-body leading-relaxed">
                Every year, employers with group health plans or 100+
                participants must file Form 5500. Compli tracks the
                deadline, prepares the filing, and reminds you well before
                the 7-month deadline.
              </p>
            </div>

            {/* Card 2 — ACA */}
            <div className="bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-green">
                  ACA
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Federal
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink leading-tight">
                1094/1095 forms delivered late?
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink">$310</span>
                <span className="text-sm text-body">per form, annually</span>
              </div>
              <p className="mt-4 text-body leading-relaxed">
                Applicable Large Employers must furnish 1095-C to every
                employee and file 1094-C with the IRS. Compli generates
                forms, tracks distribution, and submits on your behalf.
              </p>
            </div>

            {/* Card 3 — BIPA */}
            <div className="bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-green">
                  BIPA
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Illinois
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink leading-tight">
                Biometric data collected without consent?
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink">
                  $1,000–$5,000
                </span>
                <span className="text-sm text-body">per violation</span>
              </div>
              <p className="mt-4 text-body leading-relaxed">
                Fingerprint time clocks, voiceprints, or facial recognition
                trigger BIPA. Compli generates consent forms, tracks
                acknowledgments, and maintains the audit trail.
              </p>
            </div>

            {/* Card 4 — OSHA */}
            <div className="bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-green">
                  OSHA
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Federal
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink leading-tight">
                Form 300A not posted on February 1?
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink">$16,131</span>
                <span className="text-sm text-body">
                  per violation (2026)
                </span>
              </div>
              <p className="mt-4 text-body leading-relaxed">
                Most employers with 11+ employees must post the annual
                injury summary February 1 through April 30. Compli
                auto-generates it from your log and sends reminders.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              These are just four of 42 regulations Compli handles.
              <a
                href="/features"
                className="text-green hover:text-green-dark font-semibold ml-1"
              >
                See the full list →
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight">
              How it works
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Three steps from onboarded to protected.
            </p>
          </div>

          <div className="relative mt-20">
            <div
              aria-hidden
              className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-px bg-line"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="relative z-10 bg-white pr-4">
                    <span className="text-6xl font-bold text-green/70 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body leading-relaxed max-w-sm">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — THREE SUITES */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Three suites. 42 modules.
              <br />
              Pick what fits your business.
            </h2>
            <p className="mt-5 text-lg text-body leading-relaxed">
              Start with the core platform. Add specialized suites as your
              compliance needs grow.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Core Platform */}
            <div className="relative bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
              <div className="absolute -top-3 left-8">
                <span className="inline-flex items-center gap-1.5 bg-green text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Start here
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-ink">
                  Core Platform
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  18–26 modules
                </p>
              </div>

              <p className="mt-6 text-body leading-relaxed flex-grow">
                ERISA, COBRA, ACA, FMLA, employee handbook, HR intake — the
                everyday compliance work every employer already has to do.
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  ERISA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  COBRA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  ACA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  FMLA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  HIPAA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  +13 more
                </span>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-muted">From</span>
                  <span className="text-3xl font-bold text-ink">$84</span>
                  <span className="text-sm text-body">/mo</span>
                </div>
              </div>
            </div>

            {/* AI & Biometric Suite */}
            <div className="relative bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
              <div>
                <h3 className="text-2xl font-semibold text-ink">
                  AI &amp; Biometric Suite
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  10 modules
                </p>
              </div>

              <p className="mt-6 text-body leading-relaxed flex-grow">
                Automated compliance for employers using AI hiring tools,
                video interviews, or biometric time clocks.
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  BIPA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  IL AI ACT
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  CO SB 205
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  EU AI ACT
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  +6 more
                </span>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-muted">From</span>
                  <span className="text-3xl font-bold text-ink">$49</span>
                  <span className="text-sm text-body">/mo</span>
                </div>
              </div>
            </div>

            {/* Employer Expansion Suite */}
            <div className="relative bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
              <div>
                <h3 className="text-2xl font-semibold text-ink">
                  Employer Expansion Suite
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  7 modules
                </p>
              </div>

              <p className="mt-6 text-body leading-relaxed flex-grow">
                DOT drug testing, EEO-1 reporting, contractor
                classification, payroll tax calendar, harassment training,
                accommodations.
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  DOT
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  EEO-1
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  ADA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  PWFA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface border border-line rounded px-2 py-1">
                  +3 more
                </span>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-muted">From</span>
                  <span className="text-3xl font-bold text-ink">$19</span>
                  <span className="text-sm text-body">
                    /mo or $149 bundle
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-green hover:text-green-dark font-semibold transition-colors"
            >
              See full pricing
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark py-20 md:py-28 overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-[1.1] tracking-tight">
              Compliance made manageable.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              No long-term contracts. No setup fees. Cancel anytime. Start
              with the plan that fits your business today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/pricing" variant="primary" className="px-8 py-4">
                See Pricing
              </Button>
              <Button
                href={REGISTER_URL}
                external
                variant="secondary"
                className="px-8 py-4 !border-white/30 !text-white hover:!bg-white hover:!text-navy"
              >
                Get Started
              </Button>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-8">
                Why employers choose Compli
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
                {/* Trust signal 1 */}
                <div className="flex flex-col items-center text-center">
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
                    Built by compliance experts
                  </p>
                </div>

                {/* Trust signal 2 */}
                <div className="flex flex-col items-center text-center">
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
                    Continuously updated as regulations change
                  </p>
                </div>

                {/* Trust signal 3 */}
                <div className="flex flex-col items-center text-center">
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
                    42 modules across federal and state jurisdictions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-sm text-white/60">
              Questions? Email{" "}
              <a
                href="mailto:hello@compli.biz"
                className="text-white underline hover:text-green transition-colors"
              >
                hello@compli.biz
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
