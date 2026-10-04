import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { QuoteServiceId } from "@/data/quoteWizard";

const FROM_EMAIL = "Garma Pools Website <quotes@garmapools.com>";
const CIRO_EMAIL = "ciro.garza@garmapools.com";
const MAIRA_EMAIL = "maira.garza@garmapools.com";

// Build a New Pool / Pool Repair go to Ciro; everything else goes to Maira.
const ROUTING: Record<QuoteServiceId, string> = {
  "new-pool": CIRO_EMAIL,
  repair: CIRO_EMAIL,
  maintenance: MAIRA_EMAIL,
  products: MAIRA_EMAIL,
  other: MAIRA_EMAIL,
};

const SERVICE_LABELS: Record<QuoteServiceId, string> = {
  "new-pool": "Build a New Pool",
  maintenance: "Pool Maintenance & Cleaning",
  repair: "Pool Repair",
  products: "Pool Products",
  other: "Other",
};

interface QuoteContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
}

interface QuoteRequestBody {
  service: QuoteServiceId;
  details: Record<string, string>;
  contact: QuoteContactInfo;
  submittedAt: string;
}

function isValidBody(body: unknown): body is QuoteRequestBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.service === "string" &&
    b.service in ROUTING &&
    typeof b.details === "object" &&
    b.details !== null &&
    typeof b.contact === "object" &&
    b.contact !== null &&
    typeof b.submittedAt === "string"
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function humanize(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[Garma Pools] Missing RESEND_API_KEY");
    return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!isValidBody(body)) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const { service, details, contact, submittedAt } = body;
  const to = ROUTING[service];
  const serviceLabel = SERVICE_LABELS[service];

  const detailsRows = Object.entries(details)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#667085;">${escapeHtml(
          humanize(key),
        )}</td><td style="padding:4px 0;"><strong>${escapeHtml(value)}</strong></td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0a2438;">New quote request: ${escapeHtml(serviceLabel)}</h2>
      <table style="margin-bottom:16px;">
        <tr><td style="padding:4px 12px 4px 0;color:#667085;">Name</td><td style="padding:4px 0;"><strong>${escapeHtml(
          contact.firstName,
        )} ${escapeHtml(contact.lastName)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#667085;">Phone</td><td style="padding:4px 0;"><strong>${escapeHtml(
          contact.phone,
        )}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#667085;">Email</td><td style="padding:4px 0;"><strong>${escapeHtml(
          contact.email,
        )}</strong></td></tr>
      </table>
      <table>${detailsRows}</table>
      <p style="color:#98a2b3;font-size:12px;margin-top:20px;">Submitted ${escapeHtml(
        submittedAt,
      )}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      replyTo: contact.email || undefined,
      subject: `New quote request: ${serviceLabel} — ${contact.firstName} ${contact.lastName}`,
      html,
    });

    if (error) {
      console.error("[Garma Pools] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Email failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Garma Pools] Quote email error:", err);
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
