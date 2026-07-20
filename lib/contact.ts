// Shared contract for the contact form, used by both the client form
// (components/pages/ContactContent.tsx) and the API route handler
// (app/api/contact/route.ts). Keeping validation here means the form and the
// backend agree on the shape and on what counts as a valid submission.

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message: string;
};

// Raw shape posted by the client: ContactPayload plus anti-spam signals.
// `website` is a honeypot field (real users never see or fill it in);
// `startedAt` is the client timestamp (ms) of when the form was rendered,
// used to reject submissions that arrive faster than a human could type.
export type ContactSubmission = Partial<Record<keyof ContactPayload, string>> & {
  website?: string;
  startedAt?: number;
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
const PHONE_RE = /^[+()\-.\s\d]{6,20}$/;
const MIN_FILL_TIME_MS = 1500;

const MAX_LENGTHS = {
  name: 100,
  email: 200,
  company: 150,
  phone: 30,
  interest: 60,
  message: 3000,
};

export function validateContact(input: unknown): ContactValidation {
  const data = (input ?? {}) as Record<string, unknown>;

  // Honeypot: bots that auto-fill every field trip this; real users never see it.
  const honeypot = typeof data.website === "string" ? data.website.trim() : "";
  if (honeypot.length > 0) {
    return { ok: false, errors: ["Something went wrong. Please try again."] };
  }

  // Time trap: reject submissions completed faster than a human plausibly could.
  const startedAt = typeof data.startedAt === "number" ? data.startedAt : 0;
  if (startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { ok: false, errors: ["Something went wrong. Please try again."] };
  }

  const errors: string[] = [];
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const interest = typeof data.interest === "string" ? data.interest.trim() : "";

  if (name.length < 2 || name.length > MAX_LENGTHS.name) {
    errors.push("Please enter your name.");
  }
  if (!EMAIL_RE.test(email) || email.length > MAX_LENGTHS.email) {
    errors.push("Please enter a valid email address.");
  }
  if (phone && (!PHONE_RE.test(phone) || phone.length > MAX_LENGTHS.phone)) {
    errors.push("Please enter a valid phone number.");
  }
  if (company.length > MAX_LENGTHS.company) {
    errors.push("Organization name is too long.");
  }
  if (interest.length > MAX_LENGTHS.interest) {
    errors.push("Please choose a valid option for “I’m interested in”.");
  }
  if (message.length < 10 || message.length > MAX_LENGTHS.message) {
    errors.push("Please include a few words about your project.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      message,
      company: company || undefined,
      phone: phone || undefined,
      interest: interest || undefined,
    },
  };
}
