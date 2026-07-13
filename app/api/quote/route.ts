import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, emailShell, detailsTable, detailRow, escapeHtml } from "@/lib/email";
import { site } from "@/content/site";

const schema = z.object({
  name: z.string().min(1).max(120),
  title: z.string().max(120).optional(),
  organization: z.string().min(1).max(160),
  industry: z.string().max(80).optional(),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(40),
  serviceType: z.string().max(120).optional(),
  armed: z.string().max(80).optional(),
  location: z.string().min(1).max(120),
  hours: z.string().max(120).optional(),
  startDate: z.string().max(40).optional(),
  budget: z.string().max(80).optional(),
  message: z.string().max(4000).optional(),
  company_website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }
  const d = parsed.data;
  if (d.company_website && d.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const subject = `Quote request: ${d.organization} (${d.location})`;

  const internalHtml = emailShell({
    heading: subject,
    bodyHtml: `
      <p style="margin:0 0 16px;font-size:13px;color:#6B7589;">Submitted via the quote form on ${site.url.replace(/^https?:\/\//, "")}. Reply-to is set to the sender's email below.</p>
      ${detailsTable(
        detailRow("Name", `${d.name}${d.title ? ` · ${d.title}` : ""}`) +
          detailRow("Organization", `${d.organization}${d.industry ? ` · ${d.industry}` : ""}`) +
          detailRow("Email", d.email) +
          detailRow("Phone", d.phone) +
          detailRow("Service type", d.serviceType) +
          detailRow("Armed / unarmed", d.armed) +
          detailRow("Location", d.location) +
          detailRow("Hours / week", d.hours) +
          detailRow("Start date", d.startDate) +
          detailRow("Budget", d.budget),
      )}
      ${
        d.message
          ? `<p style="margin:16px 0 0;font-size:13px;color:#141923;"><strong>Notes</strong></p>
             <p style="margin:6px 0 0;font-size:14px;color:#141923;white-space:pre-wrap;">${escapeHtml(d.message)}</p>`
          : ""
      }
    `,
  });

  try {
    await sendEmail({ subject, html: internalHtml, replyTo: d.email });
  } catch (err) {
    console.error("[quote] failed to notify:", err);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please call us directly at 310-438-3044." },
      { status: 502 },
    );
  }

  try {
    const confirmHtml = emailShell({
      heading: "Got it - your quote request is in.",
      bodyHtml: `
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">Hi ${escapeHtml(d.name.split(" ")[0] || d.name)},</p>
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">
          Thanks for requesting a quote for <strong>${escapeHtml(d.organization)}</strong>. You should hear back within one business day with transparent pricing and next steps.
        </p>
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">
          Need it sooner? Call us directly at <a href="${site.phoneHref}" style="color:#B57718;font-weight:600;text-decoration:none;">${site.phone}</a>.
        </p>
        <p style="margin:20px 0 0;font-size:13px;color:#6B7589;">The ${site.shortName} team</p>
      `,
    });
    await sendEmail({ subject: `We got your quote request - ${site.shortName}`, html: confirmHtml, to: d.email });
  } catch (err) {
    console.error("[quote] failed to send confirmation to submitter:", err);
  }

  return NextResponse.json({ ok: true });
}
