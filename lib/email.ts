import { Resend } from "resend";

type SendArgs = { subject: string; html: string; replyTo?: string };

export async function sendEmail({ subject, html, replyTo }: SendArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@randbglobalsecurity.com";
  const from = process.env.CONTACT_FROM_EMAIL || "R&B Global Security <onboarding@resend.dev>";

  if (!apiKey) {
    console.log("[email] RESEND_API_KEY not set — logging instead.");
    console.log("[email] to:", to, "subject:", subject);
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
  });
  if (result.error) throw new Error(result.error.message);
  return result.data;
}
