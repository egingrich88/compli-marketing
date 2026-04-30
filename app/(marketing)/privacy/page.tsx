import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Compli",
  description:
    "Compli Privacy Policy. How we collect, use, and protect visitor information on compli.biz.",
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
              <p className="mt-6 text-sm text-white/70">
                Last updated: April 2026
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-5 text-lg text-body leading-relaxed">
              <p>
                Compli LLC (&ldquo;Compli,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
                protecting the privacy of visitors to our marketing website at
                compli.biz. This Privacy Policy explains what information we
                collect, how we use it, and your rights regarding your data.
              </p>
              <p>
                This policy applies to compli.biz, our public marketing
                website. It does not currently cover the Compli platform
                application (app.compli.biz), which is in development ahead of
                our Summer 2026 launch. A comprehensive Privacy Policy
                covering both the marketing site and the platform will be
                published prior to launch.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Information We Collect
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>
                <strong className="text-ink">
                  Information you provide directly.
                </strong>{" "}
                When you contact us through our website (for example, by
                submitting our contact form or requesting to be notified at
                launch), we collect the information you choose to share, which
                may include your name, email address, company name, role, and
                the contents of your message.
              </p>
              <p>
                <strong className="text-ink">
                  Server and log information.
                </strong>{" "}
                Like most websites, our hosting provider automatically
                collects standard server information when you visit, including
                your IP address, browser type, referring page, and the date
                and time of your visit. This information is used for security,
                performance monitoring, and abuse prevention.
              </p>
              <p>
                We do not currently use website analytics, tracking pixels, or
                advertising cookies on compli.biz. We may add analytics tools
                (such as Google Analytics) in the future, and we will update
                this policy before doing so.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              How We Use Your Information
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and requests</li>
                <li>
                  Notify you of product launches, updates, or other
                  communications you have requested
                </li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect the security and integrity of our website</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              How We Share Your Information
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>We share your information only with:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-ink">Service providers</strong> who
                  help us operate the website and respond to inquiries.
                  Currently, this includes Vercel (website hosting) and Resend
                  (email delivery for contact form submissions). These
                  providers are contractually required to protect your
                  information and use it only for the services they provide
                  to us.
                </li>
                <li>
                  <strong className="text-ink">Legal authorities</strong> when
                  required by law, subpoena, or other valid legal process, or
                  when necessary to protect our rights, your safety, or the
                  safety of others.
                </li>
              </ul>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Data Retention
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>
                We retain contact form submissions and inquiry records for as
                long as necessary to respond to your request and maintain a
                record of our communications. Server logs are typically
                retained by our hosting provider for a limited period as part
                of standard operational practice.
              </p>
              <p>
                You may request deletion of your information at any time using
                the contact information below.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Your Rights
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
                <li>Receive a copy of your information in a portable format</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                information below. We will respond to verified requests in
                accordance with applicable law.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Security
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>
                We use reasonable technical and organizational measures to
                protect the information you provide, including encrypted
                connections (HTTPS) and secure handling by our service
                providers. No method of transmission or storage is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Children&apos;s Privacy
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>
                Compli is a business-to-business service. Our website and
                services are not directed to children under 13, and we do not
                knowingly collect personal information from children. If you
                believe we have inadvertently collected information from a
                child, please contact us so we can delete it.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Changes to This Policy
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>
                This Privacy Policy will continue to evolve as we approach our
                Summer 2026 platform launch. We will update the &ldquo;Last
                updated&rdquo; date at the top of this page when we make
                changes. Material changes will be communicated to subscribers
                and contact form respondents.
              </p>
            </div>

            <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-ink tracking-tight leading-tight">
              Contact Us
            </h2>
            <div className="mt-5 space-y-5 text-body leading-relaxed">
              <p>
                For questions about this Privacy Policy, to exercise your
                rights, or to request information about how we handle your
                data, please contact us through our{" "}
                <Link
                  href="/contact"
                  className="text-green underline hover:text-green-dark"
                >
                  contact form
                </Link>{" "}
                and indicate &ldquo;Privacy&rdquo; in the subject or message.
              </p>
              <p>You may also reach us by mail at:</p>
              <address className="not-italic bg-surface border border-line rounded-lg p-5 text-body leading-relaxed">
                Compli LLC
                <br />
                272 Bell Ave
                <br />
                Cadillac, MI 49601
              </address>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
