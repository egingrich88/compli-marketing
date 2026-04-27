import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  inquiryType?: unknown;
  message?: unknown;
};

const VALID_INQUIRY_TYPES = ["general", "partnership", "press"] as const;
type InquiryType = (typeof VALID_INQUIRY_TYPES)[number];

const INQUIRY_LABELS: Record<InquiryType, string> = {
  general: "General",
  partnership: "Partnership",
  press: "Press",
};

const FROM_ADDRESS = "Compli Contact <onboarding@resend.dev>";
const TO_ADDRESS = "erica@compli.biz";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    let body: ContactPayload;
    try {
      body = (await request.json()) as ContactPayload;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, company, phone, inquiryType, message } = body;

    if (!isNonEmptyString(name)) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }
    if (!isNonEmptyString(email) || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!isNonEmptyString(company)) {
      return NextResponse.json(
        { error: "Company is required." },
        { status: 400 }
      );
    }
    if (
      !isNonEmptyString(inquiryType) ||
      !VALID_INQUIRY_TYPES.includes(inquiryType as InquiryType)
    ) {
      return NextResponse.json(
        { error: "Inquiry type must be General, Partnership, or Press." },
        { status: 400 }
      );
    }
    if (!isNonEmptyString(message)) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const nameClean = name.trim();
    const emailClean = email.trim();
    const companyClean = company.trim();
    const phoneClean = typeof phone === "string" ? phone.trim() : "";
    const messageClean = message.trim();
    const inquiryClean = inquiryType as InquiryType;
    const inquiryLabel = INQUIRY_LABELS[inquiryClean];

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `[Compli Contact] ${inquiryLabel} — ${nameClean}, ${companyClean}`;

    const text = [
      "New Compli contact form submission",
      "",
      `Inquiry type: ${inquiryLabel}`,
      `Name: ${nameClean}`,
      `Email: ${emailClean}`,
      `Company: ${companyClean}`,
      `Phone: ${phoneClean || "(not provided)"}`,
      "",
      "Message:",
      messageClean,
    ].join("\n");

    const html = `<!DOCTYPE html>
<html>
  <body style="font-family: -apple-system, system-ui, sans-serif; color: #0F172A; line-height: 1.5;">
    <h2 style="margin: 0 0 16px 0; color: #1B3A5C;">New Compli contact form submission</h2>
    <table style="border-collapse: collapse;">
      <tr><td style="padding: 4px 12px 4px 0; color: #475569;"><strong>Inquiry type</strong></td><td style="padding: 4px 0;">${inquiryLabel}</td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #475569;"><strong>Name</strong></td><td style="padding: 4px 0;">${escapeHtml(nameClean)}</td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #475569;"><strong>Email</strong></td><td style="padding: 4px 0;">${escapeHtml(emailClean)}</td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #475569;"><strong>Company</strong></td><td style="padding: 4px 0;">${escapeHtml(companyClean)}</td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #475569;"><strong>Phone</strong></td><td style="padding: 4px 0;">${phoneClean ? escapeHtml(phoneClean) : "<span style='color:#94A3B8;'>(not provided)</span>"}</td></tr>
    </table>
    <h3 style="margin: 24px 0 8px 0; color: #1B3A5C;">Message</h3>
    <div style="white-space: pre-wrap; padding: 12px 16px; background: #F8FAFC; border-left: 3px solid #2FAE66; border-radius: 4px;">${escapeHtml(messageClean)}</div>
  </body>
</html>`;

    const { error: resendError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: emailClean,
      subject,
      text,
      html,
    });

    if (resendError) {
      console.error("Contact form: Resend send failed:", resendError);
      return NextResponse.json(
        {
          error:
            "We couldn't deliver your message right now. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form: unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
