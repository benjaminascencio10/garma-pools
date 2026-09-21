import type { QuoteServiceId } from "@/data/quoteWizard";

export interface QuoteContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
}

export interface QuoteSubmission {
  service: QuoteServiceId;
  details: Record<string, string>;
  contact: QuoteContactInfo;
  submittedAt: string;
}

/**
 * There is no backend integration yet. This function is the single place
 * to wire up the quote pipeline later: CRM, WhatsApp, email, Google Sheets,
 * or a payment step. For now it only resolves locally so the wizard can
 * show a confirmation step.
 *
 * TODO: replace this with a real call, e.g.:
 *   await fetch("/api/quote", { method: "POST", body: JSON.stringify(submission) })
 */
export async function submitQuoteRequest(
  submission: QuoteSubmission,
): Promise<{ ok: true }> {
  if (process.env.NODE_ENV !== "production") {
    console.info("[Garma Pools] Quote request captured (no backend yet):", submission);
  }
  return { ok: true };
}
