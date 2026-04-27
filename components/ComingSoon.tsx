import Container from "@/components/Container";
import Button from "@/components/Button";

type ComingSoonProps = {
  title: string;
  description: string;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  launchDate?: string;
};

export default function ComingSoon({
  title,
  description,
  eyebrow = "Coming soon",
  ctaText = "Notify me at launch",
  ctaHref = "/contact",
  launchDate = "June 2026",
}: ComingSoonProps) {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
      <Container>
        <div className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-green">
              {eyebrow}
            </div>

            <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              {title}
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed">
              {description}
            </p>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <span
                className="w-2 h-2 rounded-full bg-green"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
                Launching {launchDate}
              </span>
            </div>

            {ctaText && ctaHref && (
              <div className="mt-10">
                <Button href={ctaHref} variant="primary" className="px-8 py-4">
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
