import Container from "@/components/Container";
import Button from "@/components/Button";

type ComingSoonProps = {
  title: string;
  description: string;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  launchDate?: string;
  microcopy?: React.ReactNode;
};

export default function ComingSoon({
  title,
  description,
  eyebrow = "Coming soon",
  ctaText = "Notify me at launch",
  ctaHref = "/contact",
  launchDate = "Summer 2026",
  microcopy,
}: ComingSoonProps) {
  return (
    <section className="relative bg-ink overflow-hidden">
      {/* fine vertical grid lines */}
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
        <div className="py-28 md:py-36">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent-bright">{eyebrow}</span>
              <span className="h-px w-10 bg-white/20" aria-hidden="true" />
              <span className="mono-label text-white/50">{launchDate}</span>
            </div>

            <h1 className="display mt-8 text-5xl sm:text-6xl lg:text-7xl text-white">
              {title}
            </h1>

            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">
              {description}
            </p>

            {ctaText && ctaHref && (
              <div className="mt-10">
                <Button href={ctaHref} variant="primary">
                  {ctaText}
                </Button>
              </div>
            )}

            {microcopy && (
              <p className="mt-5 text-xs text-white/55">{microcopy}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
