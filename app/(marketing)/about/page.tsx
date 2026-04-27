import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import RegulationStrip from "@/components/RegulationStrip";

export const metadata: Metadata = {
  title: "About — Compli",
  description:
    "Compli is a compliance platform for employers without a dedicated compliance department. Federal coverage at launch, state rollout 2026–2027.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

const pillars = [
  {
    heading: "Built for the gap",
    body: "Compli is designed for employers without a compliance department — not for enterprise legal teams. The product assumes you don't have a full-time compliance specialist on staff, and works that way.",
  },
  {
    heading: "AI-assisted, expert-grounded",
    body: "AI handles the routine work — tracking deadlines, generating notices, flagging changes. Compliance experts shape what the platform tells you and how it tells you. The AI is the engine; the experts are the source of truth.",
  },
  {
    heading: "Federal coverage at launch, expanding to all states",
    body: "Compli launches with federal compliance and three states — Michigan, Ohio, and Indiana — and rolls out additional state coverage through 2026 and 2027. Disciplined rollout, not vaporware promises.",
  },
];

const audiences = [
  {
    heading: "Employers",
    body: "Small to mid-sized businesses, roughly 5 to 500 employees, without a dedicated compliance team. The kind of company where compliance lands on the HR manager, the CFO, the operations lead — or no one in particular.",
  },
  {
    heading: "Brokers and consultants",
    body: "Benefits brokers, CPAs, and HR consultants who advise employers and want a compliance backbone for their book. Compli's partner program adds co-branded portals and shared workflows so partners can deliver compliance without becoming compliance shops themselves.",
  },
  {
    heading: "Industries with high compliance exposure",
    body: "Healthcare, manufacturing, hospitality, transportation, retail, and professional services — sectors where overlapping federal and state requirements create real risk for employers without a specialist.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>About Compli</Eyebrow>
              <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                Compliance made manageable.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed">
                Compli is a software platform — not a consulting firm — for
                employers who know compliance matters but don&apos;t have a
                compliance department to run it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY COMPLI EXISTS */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Eyebrow>Why we built this</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              The middle is where compliance breaks.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-body leading-relaxed">
              <p>
                Most employers without a dedicated compliance department are
                flying blind on dozens of overlapping federal and state
                requirements. Form 5500 deadlines, ACA filings, BIPA
                acknowledgments, OSHA postings, FMLA notices — the list keeps
                growing. Penalties stack up silently. By the time someone
                catches a missed obligation, it&apos;s usually a fine in the
                mail.
              </p>
              <p>
                The existing options are narrow. Hire an outside compliance
                consultant — expensive, and slow to scale. Bolt a generic HR
                tool onto your stack — light on real compliance depth.
                Maintain it yourself in spreadsheets — fragile, and dependent
                on whoever set them up.
              </p>
              <p>
                Compli is built specifically for the employer in the middle:
                someone who takes compliance seriously, but doesn&apos;t have
                a compliance team to run it. The platform does the routine
                work, surfaces what matters, and stays out of your way the
                rest of the time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW COMPLI IS DIFFERENT */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Three principles.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p) => (
              <div
                key={p.heading}
                className="bg-white border border-line rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-ink leading-tight">
                  {p.heading}
                </h3>
                <p className="mt-4 text-body leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center mb-4">
              Coverage areas
            </p>
            <RegulationStrip variant="light" />
          </div>
        </Container>
      </section>

      {/* WHAT'S IN SCOPE */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Eyebrow>What Compli covers</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              42 programs. Three suites. Built for what employers actually
              face.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-body leading-relaxed">
              <p>
                Compli covers 42 distinct compliance programs, organized into
                three suites that span the work most employers face — benefits
                administration, employment regulations, workplace safety,
                privacy and biometric obligations, and the documentation that
                ties them together.
              </p>
              <p>
                Federal coverage is live at the June 24, 2026 launch. State
                coverage begins with Michigan, Ohio, and Indiana at launch,
                with additional states rolling out through 2026 and 2027.
                We&apos;d rather ship a state when it&apos;s done than promise
                fifty up front.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Who Compli serves</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              Built for the people closest to the work.
            </h2>
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

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
              See what Compli covers — or partner with us.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              The full platform opens June 24, 2026. Until then, explore what
              we&apos;re building or talk to us about partnering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/features" variant="primary" className="px-8 py-4">
                See the platform
              </Button>
              <Button
                href="/become-a-partner"
                variant="secondary"
                className="px-8 py-4"
              >
                Become a partner
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
