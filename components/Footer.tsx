import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image
              src="/compli-logo-white.png"
              alt="Compli"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-white/70">
              Stay Compliant. Stay Protected.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/become-a-partner"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/data-security"
                  className="text-sm text-white/70 hover:text-green transition-colors"
                >
                  Data Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            &copy; {year} Compli, LLC. All rights reserved.
          </p>
          <Link
            href="/login"
            className="text-xs text-white/50 hover:text-green transition-colors"
          >
            Log in
          </Link>
        </div>
      </Container>
    </footer>
  );
}
