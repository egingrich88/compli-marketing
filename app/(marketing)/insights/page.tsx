import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — Compli",
  description:
    "Federal compliance perspectives, AI & Biometrics analysis, and platform updates from the Compli team.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const articles = getAllInsights();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>Insights</Eyebrow>
              <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                Compliance, explained.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed">
                Plain-language explainers on the regulations employers actually
                face — deadlines, penalties, and what to do about them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ARTICLE LIST OR EMPTY STATE */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          {articles.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
                <span
                  className="w-2 h-2 rounded-full bg-green"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold uppercase tracking-widest text-muted">
                  First articles publishing soon
                </span>
              </div>
              <h2 className="mt-8 text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-tight">
                Compliance shouldn&apos;t require a law degree.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                We&apos;re writing the kind of explainers employers actually
                need: what a regulation requires, who it applies to, what
                missing it costs, and the practical steps to stay covered.
                Articles begin publishing alongside the platform launch.
              </p>
              <div className="mt-10">
                <Button href="/contact" variant="primary" className="px-8 py-4">
                  Tell us what to write about
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="group bg-white border border-line rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <time
                      dateTime={article.date.toISOString()}
                      className="text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      {formatDate(article.date)}
                    </time>
                    <h2 className="mt-3 text-xl font-semibold text-ink leading-tight group-hover:text-green transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-body leading-relaxed">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
