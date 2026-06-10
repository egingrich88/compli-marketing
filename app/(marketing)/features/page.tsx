import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import AbSuiteDiagram from "@/components/AbSuiteDiagram";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Features — Compli",
  description:
    "Compli ships 28 federal compliance programs and 5 AI & Biometrics programs at Summer 2026 — federal benefits, labor and safety frameworks, plus the AI & Biometrics Suite, Federal Edition.",
  alternates: {
    canonical: "/features",
  },
};

const backbone = [
  {
    code: "SPD",
    name: "SPD Builder",
    blurb: "Summary Plan Descriptions as generated documents, not templates.",
  },
  {
    code: "POP",
    name: "POP Plan Builder",
    blurb: "Premium-only plan documentation, built and maintained.",
  },
  {
    code: "ICHRA",
    name: "ICHRA / QSEHRA / FSA",
    blurb: "Account-based plan compliance for the mid-market.",
  },
  {
    code: "COBRA",
    name: "COBRA Tracking",
    blurb: "Election windows, notices, and deadlines tracked end to end.",
  },
  {
    code: "ACA",
    name: "ACA 1094/1095 Reporting",
    blurb: "Forms generated, deadlines tracked, audit trail maintained.",
  },
  {
    code: "FMLA",
    name: "FMLA Tracking",
    blurb: "Designation notices and leave tracking, documented.",
  },
  {
    code: "5500",
    name: "Form 5500 Filings",
    blurb: "The filing built, the deadline tracked, the SPD generated.",
  },
  {
    code: "OSHA",
    name: "OSHA Compliance",
    blurb: "Logs and workplace safety obligations, kept current.",
  },
];

const frameworks = [
  "ERISA",
  "ACA",
  "COBRA",
  "FMLA",
  "HIPAA",
  "OSHA",
  "FLSA",
  "FCRA",
];

export default function FeaturesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-ink">
        <Container>
          <div className="py-20 lg:py-24">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent-bright">Coverage</span>
              <span className="h-px w-10 bg-white/20" aria-hidden="true" />
              <span className="mono-label text-white/50">
                Launching Summer 2026
              </span>
            </div>
            <h1 className="display mt-7 text-5xl sm:text-6xl lg:text-7xl text-white max-w-3xl">
              33 federal compliance programs.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl">
              Compli ships 28 federal compliance programs and 5 AI &amp;
              Biometrics programs at Summer 2026 launch — federal benefits,
              labor and safety frameworks, plus the AI &amp; Biometrics Suite,
              Federal Edition.
            </p>
            <div className="mt-14 border-t border-white/15 pt-6 flex flex-wrap gap-x-6 gap-y-2">
              {frameworks.map((f) => (
                <span
                  key={f}
                  className="font-mono text-[0.78rem] tracking-wide text-white/80"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 01 · FEDERAL BACKBONE ─────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="01"
              eyebrow="Federal benefits, leave & labor"
              title="The compliance backbone."
              lede="ERISA, ACA, COBRA, FMLA, HIPAA, OSHA, FLSA, FCRA. The federal compliance work mid-market employers carry but rarely have a real platform for — as software output: documentation generated, deadlines scheduled, notices produced."
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line-strong">
            {backbone.map((p, i) => (
              <Reveal
                key={p.code}
                delay={(i % 4) * 70}
                className="border-b border-r border-line-strong bg-white p-6 lg:p-7"
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent">
                  {p.code}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink tracking-tight leading-snug">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-body leading-relaxed">
                  {p.blurb}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint">
            Eight of 28 federal programs · Full coverage details publishing
            ahead of launch
          </p>
        </Container>
      </section>

      {/* ── 02 · AI & BIOMETRICS SUITE ────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="h-1 bg-accent" aria-hidden="true" />
        <Container>
          <div className="py-24 lg:py-32">
            <Reveal>
              <SectionHeader
                index="02"
                eyebrow="AI & Biometrics Suite — Federal Edition"
                dark
                title="The part we built first."
                lede="EEOC AI hiring guidance. FCRA applied to algorithmic screening. NIST AI RMF documentation. Five programs covering the federal frameworks driving real enforcement — so the federal AI law expected in 2026–2027 lands on a platform that's already in market."
              />
            </Reveal>

            <Reveal className="mt-14 lg:mt-20" delay={150}>
              <AbSuiteDiagram />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 03 · ASK COMPLI ───────────────────────────────── */}
      <section className="bg-white border-b border-line py-24 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-24 items-center">
            <Reveal>
              <SectionHeader
                index="03"
                eyebrow="Built-in expertise"
                title="Ask Compli. Get answers."
                lede="Compli's AI assistant answers compliance questions 24/7 — trained on your specific configuration: your headcount, your benefits, your deadlines."
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-line-strong bg-paper">
                <div className="flex items-center justify-between border-b border-line-strong px-5 py-3">
                  <span className="mono-label text-ink">Ask Compli</span>
                  <span className="mono-label text-faint">24/7</span>
                </div>
                <div className="p-6 space-y-5">
                  <p className="text-ink leading-relaxed">
                    &ldquo;What does FCRA require for AI background
                    checks?&rdquo;
                  </p>
                  <div className="border-l-2 border-accent bg-white px-5 py-4">
                    <p className="text-[0.95rem] text-ink leading-relaxed">
                      FCRA applies to algorithmic screening as much as
                      traditional background checks — pre-adverse and adverse
                      action notices, the five-day window, and documented human
                      review. I track all three for you.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="display text-4xl md:text-5xl text-white">
              See it at launch.
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl">
              Federal AI &amp; Biometrics compliance launches Summer 2026. Get
              on the early-notification list.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/get-started" variant="primary">
                Get notified at launch
              </Button>
              <Button href="/pricing" variant="outline-light">
                See pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
