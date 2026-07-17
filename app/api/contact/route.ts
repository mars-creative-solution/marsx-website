import { NextResponse, type NextRequest } from "next/server";
import { validateContact } from "@/lib/contact";

// Contact form endpoint.
//
// This is intentionally structured as an integration point: validation is
// shared with the client via lib/contact.ts, and the delivery step below is
// isolated behind `deliverContact()` so wiring a real email service (e.g.
// Resend, SendGrid, SES) or a CRM webhook is a single localized change.
//
// To enable email delivery later:
//   1. Add the provider SDK and set credentials in the environment
//      (e.g. RESEND_API_KEY, CONTACT_TO_ADDRESS).
//   2. Implement `deliverContact()` to send to SITE.email (info@marsx.ae).

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["Invalid request body."] },
      { status: 400 },
    );
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  try {
    await deliverContact(result.data);
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json(
      { ok: false, errors: ["Something went wrong. Please try again."] },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

import type { ContactPayload } from "@/lib/contact";

async function deliverContact(payload: ContactPayload): Promise<void> {
  // TODO: integrate an email service / CRM here. Until then, log server-side so
  // submissions are observable during development without dropping data silently.
  console.info("[contact] submission received", {
    name: payload.name,
    email: payload.email,
    company: payload.company ?? "-",
    phone: payload.phone ?? "-",
    interest: payload.interest ?? "-",
    message: payload.message,
    at: new Date().toISOString(),
  });
}
