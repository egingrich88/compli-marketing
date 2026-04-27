import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  author: string;
};

const RESOURCES_DIR = path.join(process.cwd(), "content/resources");
const DEFAULT_AUTHOR = "The Compli Team";

function parseDate(value: unknown): Date | null {
  if (value instanceof Date && !isNaN(value.getTime())) return value;
  if (typeof value === "string") {
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

function readArticleFiles(): { slug: string; raw: string }[] {
  if (!fs.existsSync(RESOURCES_DIR)) return [];
  return fs
    .readdirSync(RESOURCES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(RESOURCES_DIR, file), "utf8");
      return { slug, raw };
    });
}

function articleFromFile({
  slug,
  raw,
}: {
  slug: string;
  raw: string;
}): Article | null {
  const { data } = matter(raw);
  const date = parseDate(data.date);
  if (
    typeof data.title !== "string" ||
    typeof data.description !== "string" ||
    !date
  ) {
    return null;
  }
  return {
    slug,
    title: data.title,
    description: data.description,
    date,
    author: typeof data.author === "string" ? data.author : DEFAULT_AUTHOR,
  };
}

export function getAllArticles(): Article[] {
  return readArticleFiles()
    .map(articleFromFile)
    .filter((a): a is Article => a !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}

export function getArticleBySlug(
  slug: string
): { article: Article; raw: string } | null {
  const safe = slug.replace(/[^a-z0-9-]/g, "");
  if (!safe || safe !== slug) return null;
  const filepath = path.join(RESOURCES_DIR, `${safe}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf8");
  const article = articleFromFile({ slug: safe, raw });
  if (!article) return null;
  return { article, raw };
}
