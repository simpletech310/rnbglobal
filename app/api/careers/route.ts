import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

const CAREERS_TO_EMAIL = "wilform.thomas@gmail.com";

const schema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(40),
  address: z.string().max(200).optional(),
  city: z.string().max(80).optional(),
  state: z.string().max(40).optional(),
  zip: z.string().max(20).optional(),
  dob: z.string().max(40).optional(),
  guardCard: z.enum(["yes", "no", "in-progress"]).optional(),
  guardCardNumber: z.string().max(40).optional(),
  firearmPermit: z.enum(["yes", "no"]).optional(),
  yearsExperience: z.string().max(40).optional(),
  previousEmployer: z.string().max(200).optional(),
  availability: z.string().max(120).optional(),
  shiftPreference: z.string().max(80).optional(),
  hasTransportation: z.enum(["yes", "no"]).optional(),
  felony: z.enum(["yes", "no"]).optional(),
  felonyExplanation: z.string().max(2000).optional(),
  references: z.string().max(2000).optional(),
  whyJoin: z.string().max(4000).optional(),
  certifyTrue: z.literal("on").optional(),
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

  const subject = `Guard application — ${d.firstName} ${d.lastName}`;

  const row = (label: string, value?: string) =>
    value && value.trim().length > 0
      ? `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top"><strong>${label}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
      : "";

  const html = `
    <h2 style="margin:0 0 12px">New guard application</h2>
    <p style="margin:0 0 16px;color:#555">Submitted via randbglobalsecurity.com</p>
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;line-height:1.4">
      ${row("Name", `${d.firstName} ${d.lastName}`)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Address", d.address)}
      ${row("City", d.city)}
      ${row("State", d.state)}
      ${row("ZIP", d.zip)}
      ${row("Date of birth", d.dob)}
      ${row("Guard Card", d.guardCard)}
      ${row("Guard Card #", d.guardCardNumber)}
      ${row("Firearm Permit", d.firearmPermit)}
      ${row("Years experience", d.yearsExperience)}
      ${row("Previous employer", d.previousEmployer)}
      ${row("Availability", d.availability)}
      ${row("Shift preference", d.shiftPreference)}
      ${row("Reliable transportation", d.hasTransportation)}
      ${row("Felony conviction", d.felony)}
      ${row("Felony explanation", d.felonyExplanation)}
      ${row("References", d.references)}
      ${row("Why R&B", d.whyJoin)}
      ${row("Certified accurate", d.certifyTrue ? "Yes" : "No")}
    </table>
  `;

  await sendEmail({ subject, html, replyTo: d.email, to: CAREERS_TO_EMAIL });
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
