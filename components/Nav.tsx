"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";
import Wordmark from "./Wordmark";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
  { href: "/become-a-partner", label: "Become a Partner" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[68px]">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Compli home"
          >
            <Wordmark />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.9rem] font-medium text-body hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button
              href="/login-coming-soon"
              variant="secondary"
              className="!px-5 !py-2 !text-sm"
            >
              Log in
            </Button>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[2px] text-ink hover:bg-paper-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="square"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-paper z-40 overflow-y-auto">
          <Container>
            <nav className="flex flex-col py-8">
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-baseline gap-4 text-2xl font-medium text-ink py-5 border-b border-line"
                  onClick={() => setOpen(false)}
                >
                  <span className="mono-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif">{l.label}</span>
                </Link>
              ))}
              <div className="pt-8">
                <Button
                  href="/login-coming-soon"
                  variant="secondary"
                  className="w-full"
                >
                  Log in
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
