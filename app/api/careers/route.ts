import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, emailShell, detailsTable, detailRow, escapeHtml } from "@/lib/email";
import { site } from "@/content/site";

// Testing address — switch to info@randbglobalsecurity.com (or set CAREERS_TO_EMAIL) when ready to go live.
const CAREERS_TO_EMAIL = process.env.CAREERS_TO_EMAIL || "wilform.thomas@gmail.com";

const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4MB — headroom under Vercel's serverless request body limit
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

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
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  let resumeFile: File | null = null;
  for (const [key, value] of formData.entries()) {
    if (key === "resume") {
      if (value instanceof File && value.size > 0) resumeFile = value;
    } else {
      fields[key] = String(value);
    }
  }

  const parsed = schema.safeParse(fields);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }
  const d = parsed.data;
  if (d.company_website && d.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  let attachments: { filename: string; content: string }[] | undefined;
  if (resumeFile) {
    if (resumeFile.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ error: "Resume file is too large. Please attach a file under 4MB." }, { status: 400 });
    }
    if (resumeFile.type && !ALLOWED_RESUME_TYPES.has(resumeFile.type)) {
      return NextResponse.json({ error: "Please attach your resume as a PDF or Word document." }, { status: 400 });
    }
    const buf = Buffer.from(await resumeFile.arrayBuffer());
    attachments = [{ filename: resumeFile.name || "resume", content: buf.toString("base64") }];
  }

  const subject = `Guard application — ${d.firstName} ${d.lastName}`;

  const internalHtml = emailShell({
    heading: subject,
    bodyHtml: `
      <p style="margin:0 0 16px;font-size:13px;color:#6B7589;">
        Submitted via the careers application on ${site.url.replace(/^https?:\/\//, "")}. Reply-to is set to the applicant's email below.
        ${attachments ? " Resume attached." : ""}
      </p>
      ${detailsTable(
        detailRow("Name", `${d.firstName} ${d.lastName}`) +
          detailRow("Email", d.email) +
          detailRow("Phone", d.phone) +
          detailRow("Address", d.address) +
          detailRow("City", d.city) +
          detailRow("State", d.state) +
          detailRow("ZIP", d.zip) +
          detailRow("Date of birth", d.dob) +
          detailRow("Guard Card", d.guardCard) +
          detailRow("Guard Card #", d.guardCardNumber) +
          detailRow("Firearm Permit", d.firearmPermit) +
          detailRow("Years experience", d.yearsExperience) +
          detailRow("Previous employer", d.previousEmployer) +
          detailRow("Availability", d.availability) +
          detailRow("Shift preference", d.shiftPreference) +
          detailRow("Reliable transportation", d.hasTransportation) +
          detailRow("Felony conviction", d.felony) +
          detailRow("Felony explanation", d.felonyExplanation) +
          detailRow("References", d.references) +
          detailRow("Why R&B", d.whyJoin) +
          detailRow("Certified accurate", d.certifyTrue ? "Yes" : "No"),
      )}
    `,
  });

  try {
    await sendEmail({ subject, html: internalHtml, replyTo: d.email, to: CAREERS_TO_EMAIL, attachments });
  } catch (err) {
    console.error("[careers] failed to notify:", err);
    return NextResponse.json(
      { error: "We couldn't submit your application right now. Please call us directly at 310-438-3044." },
      { status: 502 },
    );
  }

  try {
    const confirmHtml = emailShell({
      heading: "Application received.",
      bodyHtml: `
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">Hi ${escapeHtml(d.firstName)},</p>
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">
          Thanks for applying to ${site.shortName}. We've received your application${attachments ? " and resume" : ""} and our hiring team will review it shortly.
        </p>
        <p style="margin:0 0 14px;font-size:14px;color:#141923;line-height:1.6;">
          If there's a fit, we'll reach out at ${escapeHtml(d.email)} or by phone. Questions in the meantime? Call us at
          <a href="${site.phoneHref}" style="color:#B57718;font-weight:600;text-decoration:none;">${site.phone}</a>.
        </p>
        <p style="margin:20px 0 0;font-size:13px;color:#6B7589;">— The ${site.shortName} hiring team</p>
      `,
    });
    await sendEmail({ subject: `Application received — ${site.shortName}`, html: confirmHtml, to: d.email });
  } catch (err) {
    console.error("[careers] failed to send confirmation to applicant:", err);
  }

  return NextResponse.json({ ok: true });
}
