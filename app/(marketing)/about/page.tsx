import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Compli — The Federal AI & Biometrics Compliance Platform",
  description:
    "Compli is the federal compliance platform for American employers, leading in AI & Biometrics. Built around EEOC, NIST AI RMF, FTC §5, FCRA, and the federal frameworks employers actually need.",
  alternates: {
    canonical: "/about",
  },
};

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

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.5 7.5l3.5 3.5 5.5-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-ink">
        <Container>
          <div className="py-20 lg:py-28">
            <span className="mono-label text-accent-bright">About Compli</span>
            <h1 className="display mt-7 text-[2.6rem] sm:text-6xl lg:text-[4.2rem] text-white max-w-4xl">
              The federal compliance platform American employers actually need.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl">
              Compli is the federal compliance platform for American employers,
              leading in AI &amp; Biometrics. Built around EEOC, NIST AI RMF,
              FTC §5, FCRA — the federal frameworks employers can&apos;t afford
              to ignore — with the federal compliance backbone they&apos;ve
              always needed.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 01 · ORIGIN ───────────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24 items-start">
            <Reveal>
              <SectionHeader
                index="01"
                eyebrow="Origin"
                title="Mid-market employers were the most exposed and the least served."
              />
              <div className="mt-8 space-y-5 text-lg text-body leading-relaxed max-w-2xl">
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
                  2024–2028 strategic enforcement plan named AI hiring tools as
                  a priority. FCRA penalties are now being applied to
                  algorithmic background checks. Class-action settlements over
                  biometric exposure run into the hundreds of millions. The
                  federal frameworks employers were ignoring became the federal
                  frameworks they couldn&apos;t afford to.
                </p>
                <p>
                  We built Compli specifically for this moment. A federal
                  compliance platform leading in AI &amp; Biometrics —
                  productized, broker-distributed, and built to be in market
                  before federal AI legislation passes in 2026 or 2027.
                </p>
              </div>
            </Reveal>

            <div>
              {whyCards.map((c, i) => (
                <Reveal
                  key={c.number}
                  delay={i * 90}
                  className="border-t border-line-strong py-7 grid grid-cols-[3.5rem_1fr] gap-4"
                >
                  <span className="mono-label text-accent" aria-hidden="true">
                    {c.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] text-body leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02 · WHO WE SERVE ─────────────────────────────── */}
      <section className="bg-white border-y border-line py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="02"
              eyebrow="Who we serve"
              title="Employers with federal obligations and no compliance team."
              lede="American employers from 5 to 500 employees carry full federal compliance obligations. Compli is built for that gap — and for the partners who advise them."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 border-t border-l border-line-strong">
            {audiences.map((a, i) => (
              <Reveal
                key={a.heading}
                delay={i * 90}
                className="border-b border-r border-line-strong bg-paper p-7 lg:p-8"
              >
                <span className="mono-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink tracking-tight">
                  {a.heading}
                </h3>
                <p className="mt-3 text-[0.95rem] text-body leading-relaxed">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 03 · ARCHITECTURE ─────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="03"
              eyebrow="Architecture"
              title="A federal foundation. Ahead on AI & Biometrics."
              lede="Compli is two things working together. The federal benefits and labor backbone employers already need. And the AI & Biometrics work no one in the mid-market has productized."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 border border-line-strong">
            {/* backbone */}
            <Reveal className="bg-white p-8 lg:p-10 border-b md:border-b-0 md:border-r border-line-strong">
              <span className="mono-label text-faint">
                The reliable foundation
              </span>
              <h3 className="mt-3 font-serif text-2xl text-ink tracking-tight">
                Federal benefits and labor backbone
              </h3>
              <p className="mt-4 text-body leading-relaxed">
                ERISA, ACA, COBRA, FMLA, HIPAA, OSHA, FLSA, FCRA. Form 5500
                filings, Summary Plan Descriptions, COBRA election windows,
                FMLA tracking, ACA 1094/1095 reporting. The federal regulatory
                work that mid-market employers have always needed and rarely
                had a real platform for.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {backbonePrograms.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                    <Tick className="mt-0.5 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* A&B */}
            <Reveal delay={100} className="bg-ink p-8 lg:p-10">
              <span className="mono-label text-accent-bright">Built early</span>
              <h3 className="mt-3 font-serif text-2xl text-white tracking-tight">
                AI &amp; Biometrics Suite, Federal Edition
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed">
                Compli&apos;s AI &amp; Biometrics work covers the federal
                frameworks driving real enforcement. EEOC AI hiring guidance.
                FCRA applied to algorithmic screening. NIST AI RMF
                documentation. The federal AI law expected in 2026–2027 will
                land on a platform that&apos;s already in market.
              </p>
              <ul className="mt-6 space-y-2.5">
                {launchModules.map((m) => (
                  <li key={m.code} className="flex items-baseline gap-3 text-sm">
                    <span className="font-mono text-[0.72rem] font-semibold tracking-wide text-accent-bright whitespace-nowrap w-14 shrink-0">
                      {m.code}
                    </span>
                    <span className="text-white/85">{m.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 04 · COMMITMENTS ──────────────────────────────── */}
      <section className="bg-white border-y border-line py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="04"
              eyebrow="How we work"
              title="Three commitments."
            />
          </Reveal>

          <div className="mt-4">
            {commitments.map((c, i) => (
              <Reveal
                key={c.heading}
                delay={i * 90}
                className="border-b border-line-strong py-8 grid lg:grid-cols-[3.5rem_1fr_1.6fr] gap-4 lg:gap-8"
              >
                <span className="mono-label text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-ink tracking-tight leading-snug">
                  {c.heading}
                </h3>
                <p className="text-body leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="bg-ink py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent-bright">Get started</span>
              <span className="h-px w-10 bg-white/20" aria-hidden="true" />
              <span className="mono-label text-white/50">Summer 2026</span>
            </div>
            <h2 className="display mt-7 text-5xl md:text-6xl text-white">
              Stay Compliant.
              <br />
              Stay Protected.
            </h2>
            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl">
              Federal AI &amp; Biometrics compliance launches Summer 2026. Get
              on the early-notification list, or talk to us about partnering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/get-started" variant="primary">
                Get notified at launch
              </Button>
              <Button href="/become-a-partner" variant="outline-light">
                Become a partner
              </Button>
            </div>
            <p className="mt-10 text-sm text-white/60">
              Questions?{" "}
              <Link
                href="/contact"
                className="text-white underline underline-offset-4 hover:text-accent-bright transition-colors"
              >
                Get in touch
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
