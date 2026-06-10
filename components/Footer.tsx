import Link from "next/link";
import Container from "./Container";
import Wordmark from "./Wordmark";

const columns: { heading: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: "Product",
      links: [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/insights", label: "Insights" },
        { href: "/become-a-partner", label: "Become a Partner" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
        { href: "/data-security", label: "Data Security" },
      ],
    },
  ];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white mt-auto">
      <Container>
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Wordmark variant="dark" withTagline />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              The federal compliance platform for American employers — leading
              in AI &amp; Biometrics.
            </p>
            <p className="mono-label mt-6 text-accent-bright">
              Launching Summer 2026
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mono-label text-white/60">{col.heading}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            &copy; {year} Compli, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="mono-label !text-[0.6rem] text-white/55">
              Federal scope · 33 programs
            </span>
            <Link
              href="/login-coming-soon"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
