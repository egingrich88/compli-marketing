import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Compli",
  description:
    "Get in touch with the Compli team. Questions about the platform, partnership inquiries, and press requests.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="bg-ink">
        <Container>
          <div className="py-20 lg:py-24">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent-bright">Contact</span>
              <span className="h-px w-10 bg-white/20" aria-hidden="true" />
              <span className="mono-label text-white/50">
                Two business days
              </span>
            </div>
            <h1 className="display mt-7 text-5xl sm:text-6xl lg:text-7xl text-white">
              Get in touch.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">
              Questions about the platform, partnership inquiries, or press —
              we&apos;ll get back to you within two business days.
            </p>
          </div>
        </Container>
      </section>

      {/* ── FORM ──────────────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
