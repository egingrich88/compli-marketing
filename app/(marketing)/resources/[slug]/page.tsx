import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Container from "@/components/Container";
import { getArticleBySlug, getArticleSlugs } from "@/lib/resources";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getArticleBySlug(slug);
  if (!found) {
    return { title: "Article not found — Compli" };
  }
  return {
    title: `${found.article.title} — Compli`,
    description: found.article.description,
  };
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const proseClasses = [
  "text-lg text-body leading-relaxed",
  "[&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:tracking-tight",
  "[&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink",
  "[&_p]:mt-5",
  "[&_a]:text-green [&_a]:underline [&_a:hover]:text-green-dark",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:mt-2",
  "[&_blockquote]:mt-5 [&_blockquote]:border-l-4 [&_blockquote]:border-green [&_blockquote]:pl-5 [&_blockquote]:italic",
  "[&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm",
].join(" ");

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const found = getArticleBySlug(slug);
  if (!found) notFound();

  const { article, raw } = found;

  const { content } = await compileMDX({
    source: raw,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="bg-white">
      <Container>
        <div className="max-w-2xl mx-auto py-20 md:py-28">
          <header>
            <time
              dateTime={article.date.toISOString()}
              className="text-xs font-semibold uppercase tracking-wider text-muted"
            >
              {formatDate(article.date)}
            </time>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight">
              {article.title}
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-body leading-relaxed">
              {article.description}
            </p>
            <p className="mt-6 text-sm text-muted">By {article.author}</p>
          </header>

          <div className={`mt-12 ${proseClasses}`}>{content}</div>

          <footer className="mt-16 pt-12 border-t border-line">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:text-green-dark transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to resources
            </Link>
            <p className="mt-8 text-sm text-muted">
              Questions about this topic?{" "}
              <Link
                href="/contact"
                className="text-green hover:text-green-dark font-semibold"
              >
                Get in touch.
              </Link>
            </p>
          </footer>
        </div>
      </Container>
    </article>
  );
}
