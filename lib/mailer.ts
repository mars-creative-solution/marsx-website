import nodemailer, { type Transporter } from "nodemailer";
import type { ContactPayload } from "./contact";

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  // Hostinger: port 465 is implicit TLS (secure=true), 587 is STARTTLS (secure=false).
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  if (!host || !user || !pass) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD.",
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return cachedTransporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.SMTP_USER;

  if (!to || !from) {
    throw new Error(
      "Missing SMTP configuration. Set CONTACT_TO_EMAIL and SMTP_USER.",
    );
  }

  const fromName = process.env.CONTACT_FROM_NAME || "MarsX Website";
  const subject = payload.interest || "General enquiry";
  const submittedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dubai",
  });

  const fields: Array<[string, string]> = [
    ["Full Name", payload.name],
    ["Company", payload.company || "-"],
    ["Email", payload.email],
    ["Phone", payload.phone || "-"],
    ["Subject", subject],
    ["Submitted", `${submittedAt} (Asia/Dubai)`],
  ];

  const text = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #111111; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New contact form submission</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        ${fields
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight: 600; vertical-align: top; padding-right: 12px;">${escapeHtml(label)}</td>
            <td>${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="font-weight: 600; margin: 20px 0 4px;">Message</p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.message)}</p>
    </div>
  `;

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"${fromName}" <${from}>`,
    to,
    replyTo: payload.email,
    subject: `New enquiry from ${payload.name} — ${subject}`,
    text,
    html,
  });
}
