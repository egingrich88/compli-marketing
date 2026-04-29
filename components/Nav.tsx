"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";

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
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Compli home"
          >
            <Image
              src="/compli-logo-light.png"
              alt="Compli"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-sm font-medium text-body hover:text-navy transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-body hover:text-navy transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/insights"
              className="text-sm font-medium text-body hover:text-navy transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/become-a-partner"
              className="text-sm font-medium text-body hover:text-navy transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-body hover:text-navy transition-colors"
            >
              Log in
            </Link>
            <Button href="/pricing" variant="primary" className="px-5 py-2.5 text-sm">
              See Pricing
            </Button>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-navy hover:bg-surface"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 overflow-y-auto">
          <Container>
            <nav className="flex flex-col gap-1 py-8">
              <Link
                href="/features"
                className="text-xl font-medium text-ink py-4 border-b border-line"
                onClick={() => setOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-xl font-medium text-ink py-4 border-b border-line"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/insights"
                className="text-xl font-medium text-ink py-4 border-b border-line"
                onClick={() => setOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/become-a-partner"
                className="text-xl font-medium text-ink py-4 border-b border-line"
                onClick={() => setOpen(false)}
              >
                Become a Partner
              </Link>
              <Link
                href="/login"
                className="text-xl font-medium text-ink py-4 border-b border-line"
                onClick={() => setOpen(false)}
              >
                Log in
              </Link>
              <div className="pt-8">
                <Button
                  href="/pricing"
                  variant="primary"
                  className="w-full"
                >
                  See Pricing
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
