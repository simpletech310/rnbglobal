import { Resend } from "resend";
import { site } from "@/content/site";

type Attachment = { filename: string; content: string };
type SendArgs = {
  subject: string;
  html: string;
  replyTo?: string;
  to?: string;
  attachments?: Attachment[];
};

export async function sendEmail({ subject, html, replyTo, to: toOverride, attachments }: SendArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = toOverride || process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || `${site.shortName} <onboarding@resend.dev>`;

  if (!apiKey) {
    console.log("[email] RESEND_API_KEY not set, logging instead.");
    console.log("[email] to:", to, "subject:", subject);
    if (attachments?.length) {
      console.log("[email] attachments:", attachments.map((a) => a.filename).join(", "));
    }
    console.log("[email] html:", html);
    return { id: "logged-only" };
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to: [to],
    subject,
    html,
    replyTo,
    attachments,
  });
  if (result.error) throw new Error(result.error.message);
  return result.data;
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** One label/value row inside a details table built with `detailsTable`. Omits empty values. */
export function detailRow(label: string, value?: string) {
  if (!value || !value.trim()) return "";
  return `<tr>
    <td style="padding:7px 14px 7px 0;color:#6B7589;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
    <td style="padding:7px 0;font-size:13px;color:#141923;white-space:pre-wrap">${escapeHtml(value)}</td>
  </tr>`;
}

export function detailsTable(rows: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:4px 0 4px">${rows}</table>`;
}

const BRAND = {
  ink: "#0B0F17",
  gold: "#D89224",
  bone: "#FAF8F4",
  border: "#E9E4D9",
  muted: "#6B7589",
};

/**
 * Wraps email body HTML in the branded R&B Global Security shell: dark header
 * with the real logo, white content card, footer with contact details.
 */
// The custom domain (site.url) isn't resolving yet as of this writing, its DNS
// doesn't point at Vercel. Emails need an image URL that works today, so this
// defaults to the Vercel deployment URL and can be overridden once the custom
// domain is live.
const DEFAULT_EMAIL_LOGO_URL = "https://rnbglobal.vercel.app/brand/logo-mark.png";

export function emailShell({ heading, bodyHtml }: { heading: string; bodyHtml: string }) {
  const logoUrl = process.env.EMAIL_LOGO_URL || DEFAULT_EMAIL_LOGO_URL;
  return `<!doctype html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background:#F0EEE7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F0EEE7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid ${BRAND.border};">
            <tr>
              <td style="background:${BRAND.ink};padding:28px 32px;text-align:center;">
                <img src="${logoUrl}" alt="${site.shortName}" width="64" style="display:block;margin:0 auto;height:auto;border:0;" />
                <p style="margin:14px 0 0;color:${BRAND.bone};font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:600;">
                  ${site.shortName}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <h1 style="margin:0 0 18px;font-size:20px;line-height:1.3;color:${BRAND.ink};">${heading}</h1>
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;">
                <div style="border-top:1px solid ${BRAND.border};padding-top:20px;font-size:12.5px;line-height:1.6;color:${BRAND.muted};">
                  <strong style="color:${BRAND.ink}">${site.shortName}</strong><br/>
                  ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}<br/>
                  <a href="${site.phoneHref}" style="color:${BRAND.gold};text-decoration:none;">${site.phone}</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:${site.email}" style="color:${BRAND.gold};text-decoration:none;">${site.email}</a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
