import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Compli",
  description:
    "Compli Privacy Policy. Contact privacy@compli.biz with questions.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                Privacy Policy
              </h1>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              Privacy Policy is in development. For questions about how Compli
              handles your data, contact{" "}
              <a
                href="mailto:privacy@compli.biz"
                className="text-green underline hover:text-green-dark"
              >
                privacy@compli.biz
              </a>
              .
            </p>
            <p className="mt-8 text-sm text-muted">
              Last updated: April 2026.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
