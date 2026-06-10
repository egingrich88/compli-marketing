import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ProgramLedger from "@/components/ProgramLedger";
import RegulationStrip from "@/components/RegulationStrip";
import AbSuiteDiagram from "@/components/AbSuiteDiagram";
import Reveal from "@/components/Reveal";

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

const trustSignals = [
  "Federal-first by design — built around the federal frameworks employers can't afford to ignore",
  "AI & Biometrics — first-mover positioning in an emerging category",
  "33 federal programs · Launching Summer 2026",
];

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8.5l4 4 6-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* fine vertical grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:grid grid-cols-4"
        >
          <div className="border-l border-white/[0.06]" />
          <div className="border-l border-white/[0.06]" />
          <div className="border-l border-white/[0.06]" />
          <div className="border-l border-r border-white/[0.06]" />
        </div>

        <Container className="relative">
          <div className="pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-4">
                  <span className="mono-label text-accent-bright">
                    Federal compliance for American employers
                  </span>
                </div>

                <h1 className="display mt-7 text-[2.9rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] text-white">
                  Compliant today.
                  <br />
                  Protected tomorrow.
                </h1>

                <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">
                  The federal compliance platform for employers with federal
                  obligations and no compliance team — 33 programs across
                  benefits, leave, labor, and safety, leading in AI &amp;
                  Biometrics.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button href="/get-started" variant="primary">
                    Get notified at launch
                  </Button>
                  <Button href="/features" variant="outline-light">
                    See what we cover
                  </Button>
                </div>

                <p className="mono-label mt-7 !text-[0.62rem] text-white/60">
                  Launching Summer 2026 · EEOC · NIST AI RMF · FTC §5 · FCRA
                </p>
              </div>

              <Reveal className="hidden md:block">
                <ProgramLedger />
              </Reveal>
            </div>

            <div className="mt-16 lg:mt-20">
              <RegulationStrip categorized />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 01 · WHY NOW ──────────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-24">
            <Reveal>
              <SectionHeader
                index="01"
                eyebrow="Why now"
                title={
                  <>
                    AI &amp; Biometrics is the next decade&apos;s compliance
                    battleground.
                  </>
                }
                lede="Federal AI employment legislation is on the horizon for 2026 and 2027. EEOC enforcement actions and class-action settlements are already shaping the playing field. Mid-market American employers are the most exposed — they carry the obligations of large employers without the compliance teams that handle them. Compli is built specifically for this category."
              />
            </Reveal>

            <div>
              {pillars.map((p, i) => (
                <Reveal
                  key={p.number}
                  delay={i * 90}
                  className="border-t border-line-strong py-8 lg:py-10 first:lg:pt-2 grid sm:grid-cols-[4rem_1fr] gap-4"
                >
                  <span className="mono-label text-accent" aria-hidden="true">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-body leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02 · THE FEDERAL BACKBONE ─────────────────────── */}
      <section className="bg-white border-y border-line py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-24 items-start">
            <Reveal>
              <SectionHeader
                index="02"
                eyebrow="Coverage"
                title="The compliance backbone, productized."
                lede="ERISA, ACA, COBRA, FMLA, HIPAA, OSHA, FLSA, FCRA. Form 5500 filings, Summary Plan Descriptions, COBRA election windows, ACA 1094/1095 reporting, OSHA logs. The federal compliance work mid-market employers carry but rarely have a real platform for."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-line-strong">
                <div className="flex items-center justify-between border-b border-line-strong bg-paper px-5 py-3">
                  <span className="mono-label text-ink">
                    Federal benefits, leave &amp; labor
                  </span>
                  <span className="mono-label text-faint">28 programs</span>
                </div>
                <ul className="grid sm:grid-cols-2">
                  {backbonePrograms.map((p, i) => (
                    <li
                      key={p}
                      className={`flex items-center gap-3 px-5 py-4 border-line ${
                        i % 2 === 0 ? "sm:border-r" : ""
                      } ${i < backbonePrograms.length - 2 ? "border-b" : ""} ${
                        i === backbonePrograms.length - 2 ? "border-b sm:border-b-0" : ""
                      }`}
                    >
                      <Tick className="text-accent shrink-0" />
                      <span className="text-[0.95rem] font-medium text-ink">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-line-strong px-5 py-3">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">
                    Federal-only at launch · 28 federal programs + 5 AI &amp;
                    Biometrics programs
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 03 · AI & BIOMETRICS SUITE — the showcase ─────── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="h-1 bg-accent" aria-hidden="true" />
        <Container>
          <div className="py-24 lg:py-32">
            <Reveal>
              <SectionHeader
                index="03"
                eyebrow="AI & Biometrics Suite — Federal Edition"
                dark
                title="Ahead of the curve, by design."
                lede="EEOC AI hiring guidance. FCRA applied to algorithmic screening. NIST AI RMF documentation. The federal AI compliance work nobody else has productized for the mid-market — built early so customers are positioned ahead of federal AI legislation."
              />
            </Reveal>

            <Reveal className="mt-14 lg:mt-20" delay={150}>
              <AbSuiteDiagram />
            </Reveal>

            <div className="mt-14 lg:mt-16 border-t border-white/15 pt-8 grid sm:grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl text-white">5 programs</p>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  shipping in the suite at Summer 2026 launch
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-white">First mover</p>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  in mid-market AI &amp; Biometrics employer compliance
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-white">2026–2027</p>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  expected federal AI legislation — already in market when it
                  lands
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 04 · THE COST OF GETTING IT WRONG ─────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeader
              index="04"
              eyebrow="The cost of getting it wrong"
              title="The penalties are federal. The frameworks are real."
              lede="From EEOC enforcement against AI hiring tools, to FCRA penalties on algorithmic screening, to ERISA fines on missed Form 5500 filings — federal compliance exposure has teeth. Compli handles the documentation, deadlines, and defenses."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 border-t border-l border-line-strong">
            {caseStudies.map((c, i) => (
              <Reveal
                key={c.reg + c.title}
                delay={(i % 2) * 100}
                className="border-b border-r border-line-strong bg-white p-8 lg:p-10"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
                    {c.reg}
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-faint">
                    {c.jurisdiction}
                  </span>
                </div>
                <h3 className="font-serif mt-5 text-2xl text-ink tracking-tight leading-snug">
                  {c.title}
                </h3>
                <div className="mt-5 flex items-baseline gap-3 border-b border-line pb-5">
                  <span className="display text-4xl text-ink">{c.amount}</span>
                  <span className="text-sm text-faint">{c.amountSuffix}</span>
                </div>
                <p className="mt-5 text-[0.95rem] text-body leading-relaxed">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-faint">
            These are four of 33 compliance programs Compli covers.{" "}
            <Link
              href="/features"
              className="font-semibold text-accent hover:text-accent-deep"
            >
              See what we cover →
            </Link>
          </p>
        </Container>
      </section>

      {/* ── 05 · ASK COMPLI ───────────────────────────────── */}
      <section className="bg-white border-y border-line py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-24 items-center">
            <Reveal>
              <SectionHeader
                index="05"
                eyebrow="Built-in expertise"
                title={
                  <>
                    Ask Compli.
                    <br />
                    Get answers.
                  </>
                }
                lede="Compli's AI assistant answers compliance questions 24/7 — does my hiring tool need an EEOC AI audit, what does FCRA require for AI background checks, am I building NIST AI RMF documentation correctly — without calling a lawyer or guessing."
              />
              <p className="mt-5 text-lg text-body leading-relaxed max-w-2xl">
                Trained on your specific configuration: your headcount, your
                benefits, your deadlines.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-line-strong bg-paper">
                <div className="flex items-center justify-between border-b border-line-strong px-5 py-3">
                  <span className="mono-label text-ink">Ask Compli</span>
                  <span className="mono-label text-faint">Transcript</span>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                      You · 09:14
                    </p>
                    <p className="mt-2 text-ink leading-relaxed">
                      Does my hiring tool need an EEOC AI audit?
                    </p>
                  </div>
                  <div className="border-l-2 border-accent bg-white px-5 py-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent">
                      Compli · 09:14
                    </p>
                    <p className="mt-2 text-ink leading-relaxed">
                      Likely yes. Your applicant volume crosses the four-fifths
                      threshold for adverse impact analysis. I&apos;ve drafted
                      the audit framework using NIST AI RMF and queued the
                      vendor disclosure request. Ready to send?
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 06 · PARTNERS ─────────────────────────────────── */}
      <section className="bg-paper-2 py-24 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-[1.3fr_auto] gap-10 items-center">
            <Reveal>
              <SectionHeader
                index="06"
                eyebrow="Partners"
                title="Built for brokers, CPAs, and consultants."
                lede="If you advise employers, Compli gives your book a federal compliance backbone with AI & Biometrics work no one in the mid-market has productized. Co-branded portals, revenue share, and a partner team that helps you onboard."
              />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/become-a-partner" variant="secondary">
                Become a partner
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="relative bg-ink py-24 lg:py-32 overflow-hidden">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent-bright">Get started</span>
              <span className="h-px w-10 bg-white/20" aria-hidden="true" />
              <span className="mono-label text-white/50">Summer 2026</span>
            </div>
            <h2 className="display mt-7 text-5xl md:text-6xl lg:text-7xl text-white">
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
          </div>

          <div className="mt-20 border-t border-white/15 pt-10">
            <p className="mono-label text-white/60 mb-8">
              Why employers choose Compli
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {trustSignals.map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <Tick className="mt-1 shrink-0 text-accent-bright" />
                  <p className="text-sm text-white/75 leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-white/60">
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
