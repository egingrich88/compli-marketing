import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing — Compli",
  description:
    "Compli pricing for employers and partners. One monthly price for the federal compliance platform — straightforward monthly billing, no lock-in.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const planHighlights = [
  "Federal benefits, leave & labor programs",
  "SPD Builder & POP Plan Builder",
  "ACA 1094/1095 reporting",
  "COBRA & FMLA tracking",
  "Form 5500 filings",
  "OSHA compliance",
  "Compliance calendar & deadlines",
  "Audit-ready documentation",
];

const suiteModules = [
  { code: "AI-3", name: "Performance Monitoring" },
  { code: "AI-4", name: "Governance & Federal Readiness" },
  { code: "CONV-2", name: "AI Background Check & FCRA" },
  { code: "CONV-3", name: "Emerging Federal AI Preparation" },
  { code: "BIO-3", name: "Biometric Data Lifecycle (Federal Scope)" },
];

const dotAddOns = [
  {
    code: "DOT-FMCSA",
    name: "DOT FMCSA Manager",
    price: "$59",
    blurb:
      "For employers with Federal Motor Carrier Safety Administration obligations.",
  },
  {
    code: "DOT-FTA",
    name: "DOT FTA Manager",
    price: "$59",
    blurb: "For employers with Federal Transit Administration obligations.",
  },
];

const billingFacts = [
  {
    title: "Monthly billing",
    body: "One monthly price, billed month to month from day one.",
  },
  {
    title: "No lock-in",
    body: "No long-term contracts. Your subscription is monthly, period.",
  },
  {
    title: "Launching Summer 2026",
    body: "Subscriptions open at launch. Get on the early-notification list.",
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

export default function PricingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-ink">
        <Container>
          <div className="py-20 lg:py-24">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent-bright">Pricing</span>
              <span className="h-px w-10 bg-white/20" aria-hidden="true" />
              <span className="mono-label text-white/50">Summer 2026</span>
            </div>
            <h1 className="display mt-7 text-5xl sm:text-6xl lg:text-7xl text-white max-w-3xl">
              One platform.
              <br />
              One monthly price.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">
              Straightforward monthly billing, no lock-in. Subscriptions open
              at the Summer 2026 launch.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BASE PLAN ─────────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.4fr] border border-line-strong bg-white">
              {/* price column */}
              <div className="border-b lg:border-b-0 lg:border-r border-line-strong p-8 lg:p-12">
                <span className="mono-label text-accent">COMPLI-01 · Base</span>
                <h2 className="font-serif text-4xl text-ink tracking-tight mt-4">
                  Compli
                </h2>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="display text-7xl text-ink">$97</span>
                  <span className="font-mono text-sm uppercase tracking-[0.12em] text-faint">
                    / month
                  </span>
                </div>
                <p className="mt-6 text-body leading-relaxed">
                  The federal compliance platform for American employers — the
                  benefits, leave, labor, and safety work productized.
                </p>
                <div className="mt-8">
                  <Button href="/get-started" variant="primary">
                    Get notified at launch
                  </Button>
                </div>
                <p className="mono-label !text-[0.6rem] mt-5 text-faint">
                  Monthly billing · No lock-in
                </p>
              </div>

              {/* what's in it */}
              <div className="p-8 lg:p-12">
                <span className="mono-label text-faint">What&apos;s included</span>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {planHighlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <Tick className="mt-1 shrink-0 text-accent" />
                      <span className="text-[0.95rem] text-ink">{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-line pt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">
                  Federal-only at launch · Full program catalog publishing
                  ahead of launch
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── FLAGSHIP: AI & BIOMETRICS SUITE ───────────────── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="h-1 bg-accent" aria-hidden="true" />
        <Container>
          <div className="py-20 lg:py-28">
            <Reveal>
              <SectionHeader
                index="01"
                eyebrow="The flagship add-on"
                dark
                title="AI & Biometrics Suite, Federal Edition."
                lede="The federal AI compliance work nobody else has productized for the mid-market. EEOC AI hiring guidance, FCRA applied to algorithmic screening, NIST AI RMF documentation — five programs, built early so you're positioned ahead of federal AI legislation."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
                <ul className="border-t border-white/15">
                  {suiteModules.map((m) => (
                    <li
                      key={m.code}
                      className="grid grid-cols-[5.5rem_1fr] gap-4 items-baseline border-b border-white/15 py-4"
                    >
                      <span className="font-mono text-[0.78rem] font-semibold tracking-wide text-accent-bright">
                        {m.code}
                      </span>
                      <span className="text-white/90">{m.name}</span>
                    </li>
                  ))}
                </ul>

                <div className="border border-white/20 p-7">
                  <p className="mono-label text-white/50">Suite pricing</p>
                  <p className="font-serif mt-4 text-3xl text-white tracking-tight">
                    Announced at launch
                  </p>
                  <p className="mt-4 text-sm text-white/65 leading-relaxed">
                    Suite pricing publishes with the full catalog ahead of the
                    Summer 2026 launch.
                  </p>
                  <div className="mt-6">
                    <Button href="/get-started" variant="outline-light">
                      Get notified
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── DOT ADD-ONS ───────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              index="02"
              eyebrow="Add-ons"
              title="DOT compliance managers."
              lede="For employers carrying Department of Transportation obligations alongside the federal backbone."
            />
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 border-t border-l border-line-strong">
            {dotAddOns.map((a, i) => (
              <Reveal
                key={a.code}
                delay={i * 100}
                className="border-b border-r border-line-strong bg-white p-8 lg:p-10"
              >
                <span className="mono-label text-accent">{a.code}</span>
                <h3 className="font-serif mt-3 text-2xl text-ink tracking-tight">
                  {a.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="display text-4xl text-ink">{a.price}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-faint">
                    / month
                  </span>
                </div>
                <p className="mt-4 text-body leading-relaxed">{a.blurb}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BILLING FACTS ─────────────────────────────────── */}
      <section className="bg-white border-y border-line py-16 lg:py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-10">
            {billingFacts.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <span className="mono-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif mt-3 text-xl text-ink tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-body leading-relaxed text-[0.95rem]">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="display text-4xl md:text-5xl text-white">
              Questions about pricing?
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl">
              Talk to us about your headcount and obligations — or about
              partner pricing for brokers, CPAs, and consultants.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
              <Button href="/become-a-partner" variant="outline-light">
                Become a partner
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/60">
              Ready for launch?{" "}
              <Link
                href="/get-started"
                className="text-white underline underline-offset-4 hover:text-accent-bright transition-colors"
              >
                Get on the early-notification list.
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
