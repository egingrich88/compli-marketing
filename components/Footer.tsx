import Link from "next/link";
import Container from "./Container";

const PARTNERS_URL =
  "https://compli-platform-production.up.railway.app/marketing/become-a-partner.html";
const LOGIN_URL = "https://compli-platform-production.up.railway.app/login";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold tracking-tight">Compli</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xs">
              Stay Compliant. Stay Protected.
            </p>
            <p className="mt-6 text-xs text-white/50">
              &copy; {year} Compli. All rights reserved.
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
                <a
                  href={PARTNERS_URL}
                  className="text-sm text-white/70 hover:text-green transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Partners
                </a>
              </li>
              <li>
                <a
                  href={LOGIN_URL}
                  className="text-sm text-white/70 hover:text-green transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
