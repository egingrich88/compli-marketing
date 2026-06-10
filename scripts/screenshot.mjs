/**
 * Capture full-page screenshots of site pages at 375 / 768 / 1440 px.
 * Usage: node scripts/screenshot.mjs [path ...]   (defaults to "/")
 * Output: .screenshots/<page>-<width>.png  (gitignored)
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3100";
const WIDTHS = [375, 768, 1440];
const paths = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];

mkdirSync(".screenshots", { recursive: true });

const browser = await chromium.launch();
for (const p of paths) {
  const slug = p === "/" ? "home" : p.replace(/\//g, "-").replace(/^-/, "");
  for (const width of WIDTHS) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
    });
    await page.goto(BASE + p, { waitUntil: "networkidle" });
    // force reveal animations to their final state for the capture
    await page.addStyleTag({
      content: `.reveal{opacity:1 !important;transform:none !important}
        .diagram-draw{stroke-dashoffset:0 !important}`,
    });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `.screenshots/${slug}-${width}.png`,
      fullPage: true,
    });
    await page.close();
    console.log(`captured ${slug} @ ${width}`);
  }
}
await browser.close();
