// Shared contract for the contact form, used by both the client form
// (components/pages/ContactContent.tsx) and the API route handler
// (app/api/contact/route.ts). Keeping validation here means the form and the
// backend agree on the shape, and swapping in a real email service later only
// touches the route handler.

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message: string;
};

export const INTEREST_OPTIONS = [
  "AI Digital Humans",
  "MarsX AI Platform",
  "SABR — Knowledge Foundation",
  "AI Experiences",
  "Custom AI Solution",
  "General enquiry",
] as const;

export type ContactValidation =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: string[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: unknown): ContactValidation {
  const errors: string[] = [];
  const data = (input ?? {}) as Record<string, unknown>;

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (name.length < 2) errors.push("Please enter your name.");
  if (!EMAIL_RE.test(email)) errors.push("Please enter a valid email address.");
  if (message.length < 10)
    errors.push("Please include a few words about your project.");

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      message,
      company:
        typeof data.company === "string" ? data.company.trim() : undefined,
      phone: typeof data.phone === "string" ? data.phone.trim() : undefined,
      interest:
        typeof data.interest === "string" ? data.interest.trim() : undefined,
    },
  };
}
