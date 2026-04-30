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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-green">
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden">
        <Container>
          <div className="py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                Get in touch.
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed">
                Questions about the platform, partnership inquiries, or press
                — we&apos;ll get back to you within two business days.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
