import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title:
    "About Compli — The Federal AI & Biometrics Compliance Platform",
  description:
    "Compli is the federal compliance platform for American employers, leading in AI & Biometrics. Built around EEOC, NIST AI RMF, FTC §5, FCRA, and the federal frameworks employers actually need.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

const whyCards = [
  {
    number: "01",
    title: "Federal-first by design",
    body: "We don't claim coverage we can't actually deliver. The frameworks Compli is built around — EEOC, NIST AI RMF, FTC §5, FCRA, ERISA, ACA, OSHA — are the ones with real federal teeth.",
  },
  {
    number: "02",
    title: "Ahead on AI & Biometrics",
    body: "AI hiring tools, algorithmic background checks, biometric data lifecycles. The federal AI & Biometrics work nobody else has productized for the mid-market — and the part of the platform we built first.",
  },
  {
    number: "03",
    title: "Built for the mid-market",
    body: "5 to 500 employees, federal obligations, no compliance team. Brokers and CPAs distribute it. Mid-market employers use it. The category nobody else has built for.",
  },
];

const audiences = [
  {
    heading: "Direct-to-employer",
    body: "Small and mid-market employers without an in-house compliance function. We replace the compliance manual nobody opens with a working platform that handles the obligations as they come up.",
  },
  {
    heading: "Through brokers and CPAs",
    body: "Group health brokers, employee benefits consultants, payroll firms, and CPAs who advise mid-market employers. Co-branded portals, revenue share, and a product their clients haven't seen anywhere else.",
  },
  {
    heading: "Federal-only at launch",
    body: "Compli ships 28 federal compliance programs and 5 AI & Biometrics programs at Summer 2026 launch.",
  },
];

const backbonePrograms = [
  "SPD Builder",
  "POP Plan Builder",
  "ICHRA / QSEHRA / FSA",
  "COBRA tracking",
  "ACA 1094/1095 reporting",
  "FMLA tracking",
  "Form 5500 filings",
  "Workplace Safety / OSHA",
];

const launchModules = [
  { code: "AI-3", name: "Performance Monitoring" },
  { code: "AI-4", name: "Governance & Federal Readiness" },
  { code: "CONV-2", name: "AI Background Check & FCRA" },
  { code: "CONV-3", name: "Emerging Federal AI Preparation" },
  { code: "BIO-3", name: "Biometric Data Lifecycle (Federal Scope)" },
];

const commitments = [
  {
    heading: "Federal first, real and defensible",
    body: "We don't claim coverage we can't actually deliver. Federal frameworks at launch. The platform you can rely on in litigation is the platform that says no when the answer is no.",
  },
  {
    heading: "Productized, not consultative",
    body: "Compliance documentation as software output. Deadlines as scheduled work. Notices as generated artifacts. We're not selling you advisory hours — we're selling you a platform that does the work.",
  },
  {
    heading: "Built with brokers, for the mid-market",
    body: "Brokers, CPAs, and consultants are the distribution. Mid-market employers are the customer. We're aligned with both, designed for both, and competitive only against compliance vendors who don't take either seriously.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <Eyebrow>About Compli</Eyebrow>
              <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                We&apos;re building the federal compliance platform American
                employers actually need.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Compli is the federal compliance platform for American
                employers, leading in AI &amp; Biometrics. Built around EEOC,
                NIST AI RMF, FTC §5, FCRA — the federal frameworks employers
                can&apos;t afford to ignore — with the federal compliance
                backbone they&apos;ve always needed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY WE BUILT THIS */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <Eyebrow>Origin</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
                Mid-market employers were the most exposed and the least
                served.
              </h2>
              <div className="mt-8 space-y-5 text-lg text-body leading-relaxed">
                <p>
                  Federal compliance has always been complex for the
                  mid-market. Employers with 5–500 employees carry the same
                  federal obligations as Fortune 500 companies — ERISA, ACA,
                  COBRA, FMLA, OSHA, FCRA — without the in-house compliance
                  teams to handle them. They rely on brokers, CPAs, and
                  consultants who do their best, but the work was never
                  productized.
                </p>
                <p>
                  Then AI and biometrics changed the stakes. EEOC&apos;s
                  2024–2028 strategic enforcement plan named AI hiring tools
                  as a priority. FCRA penalties are now being applied to
                  algorithmic background checks. Class-action settlements
                  over biometric exposure run into the hundreds of millions.
                  The federal frameworks employers were ignoring became the
                  federal frameworks they couldn&apos;t afford to.
                </p>
                <p>
                  We built Compli specifically for this moment. A federal
                  compliance platform leading in AI &amp; Biometrics —
                  productized, broker-distributed, and built to be in market
                  before federal AI legislation passes in 2026 or 2027.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {whyCards.map((c) => (
                <div
                  key={c.number}
                  className="bg-surface border-l-4 border-[color:var(--color-accent)] pl-6 py-5 rounded-r-lg"
                >
                  <div className="text-xs font-semibold tracking-widest text-[color:var(--color-accent)]">
                    {c.number}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-ink leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-body leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Employers with federal obligations and no compliance team to
              handle them.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              American employers from 5 to 500 employees carry full federal
              compliance obligations. Compli is built for that gap — and for
              the partners who advise them.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((a) => (
              <div
                key={a.heading}
                className="bg-white border border-line rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-ink leading-tight">
                  {a.heading}
                </h3>
                <p className="mt-4 text-body leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT COMPLI IS — ARCHITECTURE */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Architecture</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              A federal foundation. Ahead on AI &amp; Biometrics.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Compli is two things working together. The federal benefits and
              labor backbone employers already need. And the AI &amp;
              Biometrics work no one in the mid-market has productized.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Federal benefits and labor backbone */}
            <div className="bg-surface border border-line rounded-2xl p-8 md:p-10">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                The reliable foundation
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-ink leading-tight">
                Federal benefits and labor backbone
              </h3>
              <p className="mt-4 text-body leading-relaxed">
                ERISA, ACA, COBRA, FMLA, HIPAA, OSHA, FLSA, FCRA. Form 5500
                filings, Summary Plan Descriptions, COBRA election windows,
                FMLA tracking, ACA 1094/1095 reporting. The federal
                regulatory work that mid-market employers have always needed
                and rarely had a real platform for.
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

            {/* AI & Biometrics Suite, Federal Edition */}
            <div className="bg-navy text-white rounded-2xl p-8 md:p-10">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Built early
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white leading-tight">
                AI &amp; Biometrics Suite, Federal Edition
              </h3>
              <p className="mt-4 text-white/85 leading-relaxed">
                Compli&apos;s AI &amp; Biometrics work covers the federal
                frameworks driving real enforcement. EEOC AI hiring guidance.
                FCRA applied to algorithmic screening. NIST AI RMF
                documentation. The federal AI law expected in 2026–2027 will
                land on a platform that&apos;s already in market.
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
        </Container>
      </section>

      {/* HOW WE WORK / COMMITMENTS */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Three commitments.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {commitments.map((c) => (
              <div
                key={c.heading}
                className="bg-white border border-line rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-ink leading-tight">
                  {c.heading}
                </h3>
                <p className="mt-4 text-body leading-relaxed">{c.body}</p>
              </div>
            ))}
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
