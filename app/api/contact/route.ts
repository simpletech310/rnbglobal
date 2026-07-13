import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, emailShell, detailsTable, detailRow, escapeHtml } from "@/lib/email";
import { site } from "@/content/site";

const schema = z.object({
  topic: z.enum(["hire", "training", "general"]).default("general"),
  name: z.string().min(1).max(120),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(40),
  organization: z.string().max(160).optional(),
  propertyType: z.string().max(80).optional(),
  course: z.string().max(120).optional(),
  message: z.string().min(1).max(4000),
  company_website: z.string().max(0).optional(),
});

const topicLabel = { hire: "Hire security", training: "Take a class", general: "Something else" } as const;

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

  const subject =
    d.topic === "hire"
      ? `New security inquiry — ${d.organization || d.name}`
      : d.topic === "training"
      ? `Training inquiry — ${d.course || "general"} — ${d.name}`
      : `Website inquiry — ${d.name}`;

  const internalHtml = emailShell({
    heading: subject,
    bodyHtml: `
      <p style="margin:0 0 16px;font-size:13px;color:#6B7589;">Submitted via the contact form on ${site.url.replace(/^https?:\/\//, "")}. Reply-to is set to the sender's email below.</p>
      ${detailsTable(
        detailRow("What's this about", topicLabel[d.topic]) +
          detailRow("Name", d.name) +
          detailRow("Email", d.email) +
          detailRow("Phone", d.phone) +
          detailRow("Organization", d.organization) +
          detailRow("Property type", d.propertyType) +
          detailRow("Course", d.course),
      )}
      <p style="margin:16px 0 0;font-size:13px;color:#141923;"><strong>Message</strong></p>
      <p style="margin:6px 0 0;font-size:14px;color:#141923;white-space:pre-wrap;">${escapeHtml(d.message)}</p>
    `,
  });

  try {
    await sendEmail({ subject, html: internalHtml, replyTo: d.email });
  } catch (err) {
    console.error("[contact] failed to notify:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please call us directly at 310-438-3044." },
      { status: 502 },
    );
  }

  try {
    const confirmHtml = emailShell({
      heading: "We got your message.",
      bodyHtml: `
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">Hi ${escapeHtml(d.name.split(" ")[0] || d.name)},</p>
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">
          Thanks for reaching out to ${site.shortName}. We received your message and typically respond the same business day.
        </p>
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">
          If it's urgent, call us directly at <a href="${site.phoneHref}" style="color:#B57718;font-weight:600;text-decoration:none;">${site.phone}</a>.
        </p>
        <p style="margin:20px 0 0;font-size:13px;color:#6B7589;">— The ${site.shortName} team</p>
      `,
    });
    await sendEmail({ subject: `We got your message — ${site.shortName}`, html: confirmHtml, to: d.email });
  } catch (err) {
    console.error("[contact] failed to send confirmation to submitter:", err);
  }

  return NextResponse.json({ ok: true });
}
