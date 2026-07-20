import { NextResponse, type NextRequest } from "next/server";
import { validateContact } from "@/lib/contact";
import { sendContactEmail } from "@/lib/mailer";

// Simple in-memory rate limit. The app runs as a single long-lived Node
// process on the VPS (`next start`), so a module-level Map persists across
// requests without needing external storage — no DB or third-party service
// required for basic abuse protection.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_SUBMISSIONS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, errors: ["Too many submissions. Please try again later."] },
      { status: 429 },
    );
  }

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
    await sendContactEmail(result.data);
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json(
      { ok: false, errors: ["Something went wrong. Please try again."] },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
