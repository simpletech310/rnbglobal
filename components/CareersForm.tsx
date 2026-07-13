"use client";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { FormField, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4MB

export function CareersForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasFelony, setHasFelony] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const resume = formData.get("resume");
    if (resume instanceof File && resume.size > 0 && resume.size > MAX_RESUME_BYTES) {
      setStatus("error");
      setErrorMsg("Resume file is too large. Please attach a file under 4MB.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setHasFelony("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-signal-300/60 bg-signal-50/60 p-7 sm:p-8">
        <CheckCircle2 className="h-8 w-8 text-signal-600" />
        <p className="mt-5 font-display text-xl tracking-[-0.015em] text-ink-900 sm:text-2xl">
          Application received.
        </p>
        <p className="mt-3 text-base text-ink-600">
          Thanks for applying. We'll review your application and reach out if there's a fit.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="ring-focus mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-900 hover:text-signal-600"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Personal information</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <FormField label="First name" htmlFor="firstName" required>
            <Input id="firstName" name="firstName" required autoComplete="given-name" />
          </FormField>
          <FormField label="Last name" htmlFor="lastName" required>
            <Input id="lastName" name="lastName" required autoComplete="family-name" />
          </FormField>
          <FormField label="Email" htmlFor="email" required>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </FormField>
          <FormField label="Phone" htmlFor="phone" required>
            <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
          </FormField>
          <FormField label="Street address" htmlFor="address">
            <Input id="address" name="address" autoComplete="street-address" />
          </FormField>
          <FormField label="Date of birth" htmlFor="dob">
            <Input id="dob" name="dob" type="date" />
          </FormField>
          <FormField label="City" htmlFor="city">
            <Input id="city" name="city" autoComplete="address-level2" />
          </FormField>
          <div className="grid grid-cols-2 gap-5">
            <FormField label="State" htmlFor="state">
              <Input id="state" name="state" defaultValue="CA" autoComplete="address-level1" />
            </FormField>
            <FormField label="ZIP" htmlFor="zip">
              <Input id="zip" name="zip" autoComplete="postal-code" />
            </FormField>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Licensing & experience</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <FormField label="California Guard Card?" htmlFor="guardCard">
            <Select id="guardCard" name="guardCard" defaultValue="">
              <option value="" disabled>Select one…</option>
              <option value="yes">Yes, active</option>
              <option value="in-progress">In progress</option>
              <option value="no">No</option>
            </Select>
          </FormField>
          <FormField label="Guard Card number (if any)" htmlFor="guardCardNumber">
            <Input id="guardCardNumber" name="guardCardNumber" />
          </FormField>
          <FormField label="Exposed firearm permit?" htmlFor="firearmPermit">
            <Select id="firearmPermit" name="firearmPermit" defaultValue="">
              <option value="" disabled>Select one…</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </FormField>
          <FormField label="Years of security experience" htmlFor="yearsExperience">
            <Select id="yearsExperience" name="yearsExperience" defaultValue="">
              <option value="" disabled>Select one…</option>
              <option>None</option>
              <option>Less than 1 year</option>
              <option>1 – 3 years</option>
              <option>3 – 5 years</option>
              <option>5+ years</option>
            </Select>
          </FormField>
          <FormField label="Most recent security employer" htmlFor="previousEmployer">
            <Input id="previousEmployer" name="previousEmployer" />
          </FormField>
          <FormField label="Reliable transportation?" htmlFor="hasTransportation">
            <Select id="hasTransportation" name="hasTransportation" defaultValue="">
              <option value="" disabled>Select one…</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Availability</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <FormField label="Shift preference" htmlFor="shiftPreference">
            <Select id="shiftPreference" name="shiftPreference" defaultValue="">
              <option value="" disabled>Select one…</option>
              <option>Day</option>
              <option>Swing</option>
              <option>Graveyard</option>
              <option>Any</option>
            </Select>
          </FormField>
          <FormField label="Start availability" htmlFor="availability" hint="When can you start?">
            <Input id="availability" name="availability" placeholder="Immediately, 2 weeks, etc." />
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Resume</h3>
        <div className="mt-5">
          <FormField label="Attach your resume (optional)" htmlFor="resume" hint="PDF or Word doc, up to 4MB.">
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="file:mr-4 file:rounded-lg file:border-0 file:bg-ink-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-bone-50 file:transition-colors hover:file:bg-ink-800"
            />
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Background</h3>
        <div className="mt-5 grid gap-5">
          <FormField label="Have you been convicted of a felony?" htmlFor="felony">
            <Select
              id="felony"
              name="felony"
              defaultValue=""
              onChange={(e) => setHasFelony(e.currentTarget.value)}
            >
              <option value="" disabled>Select one…</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </Select>
          </FormField>
          {hasFelony === "yes" && (
            <FormField label="Please briefly explain" htmlFor="felonyExplanation">
              <Textarea id="felonyExplanation" name="felonyExplanation" rows={3} />
            </FormField>
          )}
          <FormField label="Professional references" htmlFor="references" hint="Name, relationship, phone, one per line.">
            <Textarea id="references" name="references" rows={4} />
          </FormField>
          <FormField label="Why do you want to work with R&B?" htmlFor="whyJoin">
            <Textarea id="whyJoin" name="whyJoin" rows={4} />
          </FormField>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-ink-200/70 pt-6">
        <label className="flex items-start gap-3 text-sm text-ink-700">
          <input
            type="checkbox"
            name="certifyTrue"
            required
            className="mt-1 h-4 w-4 rounded border-ink-300 text-signal-600 focus:ring-signal-400"
          />
          <span>
            I certify the information above is true and complete. I understand any false statement may disqualify me or be grounds for dismissal.
          </span>
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="underline decoration-signal-500 decoration-2 underline-offset-4 hover:text-ink-900">
              Privacy Policy
            </a>.
          </p>
          <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
            {submitting ? "Submitting…" : (<><Send className="h-4 w-4" /> Submit application</>)}
          </Button>
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg ?? "Something went wrong. Please try again or call 310-438-3044."}
        </p>
      )}
    </form>
  );
}
