import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — Compli",
  description:
    "Federal compliance perspectives, AI & Biometrics analysis, and platform updates from the Compli team.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

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
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-ink">
        <Container>
          <div className="py-20 lg:py-24">
            <span className="mono-label text-accent-bright">Insights</span>
            <h1 className="display mt-7 text-5xl sm:text-6xl lg:text-7xl text-white">
              Compliance, explained.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">
              Plain-language explainers on the regulations employers actually
              face — deadlines, penalties, and what to do about them.
            </p>
          </div>
        </Container>
      </section>

      {/* ── ARTICLES / EMPTY STATE ────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          {articles.length === 0 ? (
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="mono-label text-accent">Status</span>
                <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
                <span className="mono-label text-faint">
                  First articles publishing soon
                </span>
              </div>
              <h2 className="display mt-7 text-3xl md:text-4xl text-ink">
                Compliance shouldn&apos;t require a law degree.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                We&apos;re writing the kind of explainers employers actually
                need: what a regulation requires, who it applies to, what
                missing it costs, and the practical steps to stay covered.
                Articles begin publishing alongside the platform launch.
              </p>
              <div className="mt-10">
                <Button href="/contact" variant="secondary">
                  Tell us what to write about
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line-strong">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group border-b border-r border-line-strong bg-white p-7 lg:p-8 transition-colors hover:bg-paper-2"
                >
                  <time
                    dateTime={article.date.toISOString()}
                    className="mono-label !text-[0.65rem] text-faint"
                  >
                    {formatDate(article.date)}
                  </time>
                  <h2 className="mt-3 font-serif text-xl text-ink tracking-tight leading-snug group-hover:text-accent-deep transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-[0.95rem] text-body leading-relaxed">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
