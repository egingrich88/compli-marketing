"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type InquiryType = "general" | "partnership" | "press";
type Status = "idle" | "submitting" | "success" | "error";

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: "general", label: "General" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
];

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors";

const labelBase = "block text-sm font-medium text-ink mb-1.5";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          inquiryType,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.error || "Something went wrong sending your message."
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setInquiryType("general");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your message."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-line rounded-2xl p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-green/15 flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-green"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7l-8 10-4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-ink">Message sent.</h3>
        <p className="mt-3 text-body leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-green hover:text-green-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-line rounded-2xl p-8 space-y-5"
    >
      <div>
        <label htmlFor="name" className={labelBase}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputBase}
          autoComplete="name"
          disabled={submitting}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputBase}
            autoComplete="email"
            disabled={submitting}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelBase}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputBase}
            autoComplete="organization"
            disabled={submitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputBase}
            autoComplete="tel"
            disabled={submitting}
          />
        </div>

        <div>
          <label htmlFor="inquiryType" className={labelBase}>
            Inquiry type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value as InquiryType)}
            className={inputBase}
            disabled={submitting}
          >
            {inquiryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputBase}
          disabled={submitting}
        />
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]"
        >
          {errorMessage}
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full">
        {submitting ? "Sending..." : "Send message"}
      </Button>

      <p className="mt-4 text-xs text-muted text-center">
        By submitting, you agree to our{" "}
        <Link
          href="/privacy"
          className="underline hover:text-navy transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
