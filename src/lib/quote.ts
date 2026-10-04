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
 * Sends the quote request to /api/quote, which emails it to the right
 * person at Garma Pools based on the selected service.
 */
export async function submitQuoteRequest(
  submission: QuoteSubmission,
): Promise<{ ok: true }> {
  const response = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    throw new Error("Failed to submit quote request");
  }

  return { ok: true };
}
