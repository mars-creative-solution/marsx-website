import { NextResponse } from "next/server";

// Scheduled maintenance window (requested 2026-08-09): the site goes back
// live automatically at this time — no manual step needed on Tuesday.
// Delete this file (or just GO_LIVE_AT) once past go-live if it's no longer
// needed.
const GO_LIVE_AT = new Date("2026-08-11T05:00:00Z"); // Tue 09:00 Asia/Dubai (UTC+4)

export function middleware() {
  if (Date.now() >= GO_LIVE_AT.getTime()) {
    return NextResponse.next();
  }
  return new NextResponse(
    "MarsX AI Solutions is temporarily unavailable for scheduled maintenance. We'll be back Tuesday.",
    {
      status: 503,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "retry-after": "172800",
      },
    },
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
