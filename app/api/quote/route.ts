import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

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

  const subject = `Quote request — ${d.organization} (${d.location})`;
  const html = `
    <h2>${subject}</h2>
    <p><strong>${d.name}</strong>${d.title ? ` · ${d.title}` : ""}</p>
    <p><strong>Organization:</strong> ${d.organization}${d.industry ? ` · ${d.industry}` : ""}</p>
    <p><strong>Email:</strong> ${d.email}</p>
    <p><strong>Phone:</strong> ${d.phone}</p>
    <hr/>
    <p><strong>Service type:</strong> ${d.serviceType || "—"}</p>
    <p><strong>Armed:</strong> ${d.armed || "—"}</p>
    <p><strong>Location:</strong> ${d.location}</p>
    <p><strong>Hours / week:</strong> ${d.hours || "—"}</p>
    <p><strong>Start date:</strong> ${d.startDate || "—"}</p>
    <p><strong>Budget:</strong> ${d.budget || "—"}</p>
    ${d.message ? `<p><strong>Notes:</strong></p><p style="white-space:pre-wrap">${escapeHtml(d.message)}</p>` : ""}
  `;

  await sendEmail({ subject, html, replyTo: d.email });
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
