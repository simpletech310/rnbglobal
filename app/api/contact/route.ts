import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

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

  const html = `
    <h2>${subject}</h2>
    <p><strong>Topic:</strong> ${d.topic}</p>
    <p><strong>Name:</strong> ${d.name}</p>
    <p><strong>Email:</strong> ${d.email}</p>
    <p><strong>Phone:</strong> ${d.phone}</p>
    ${d.organization ? `<p><strong>Organization:</strong> ${d.organization}</p>` : ""}
    ${d.propertyType ? `<p><strong>Property type:</strong> ${d.propertyType}</p>` : ""}
    ${d.course ? `<p><strong>Course:</strong> ${d.course}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(d.message)}</p>
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
