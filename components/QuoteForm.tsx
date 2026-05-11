"use client";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { FormField, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
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
          Got it — we'll be in touch shortly.
        </p>
        <p className="mt-3 text-base text-ink-600">
          You should hear back within one business day with a transparent quote and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="border-b border-ink-200/70 pb-1">
        <span className="mono-tag text-signal-600">01 · Identity</span>
        <h2 className="mt-2 text-2xl sm:text-[1.75rem]">Tell us who you are.</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="name" required>
          <Input id="name" name="name" required autoComplete="name" />
        </FormField>
        <FormField label="Title / role" htmlFor="title">
          <Input id="title" name="title" placeholder="e.g. Property Manager" />
        </FormField>
        <FormField label="Organization" htmlFor="organization" required>
          <Input id="organization" name="organization" required autoComplete="organization" />
        </FormField>
        <FormField label="Industry" htmlFor="industry">
          <Select id="industry" name="industry" defaultValue="">
            <option value="" disabled>Select one…</option>
            <option>Retail</option>
            <option>Events / Hospitality</option>
            <option>Corporate Office</option>
            <option>Residential / HOA</option>
            <option>Construction / Industrial</option>
            <option>Other</option>
          </Select>
        </FormField>
        <FormField label="Email" htmlFor="email" required>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </FormField>
        <FormField label="Phone" htmlFor="phone" required>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </FormField>
      </div>

      <div className="border-b border-ink-200/70 pb-1 pt-4">
        <span className="mono-tag text-signal-600">02 · Coverage</span>
        <h2 className="mt-2 text-2xl sm:text-[1.75rem]">What kind of coverage?</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Type of service" htmlFor="serviceType">
          <Select id="serviceType" name="serviceType" defaultValue="">
            <option value="" disabled>Select one…</option>
            <option>Uniformed guards</option>
            <option>Mobile patrol</option>
            <option>Event security</option>
            <option>Camera / CCTV install</option>
            <option>Combination — let's discuss</option>
          </Select>
        </FormField>
        <FormField label="Armed or unarmed?" htmlFor="armed">
          <Select id="armed" name="armed" defaultValue="">
            <option value="" disabled>Select one…</option>
            <option>Unarmed</option>
            <option>Armed</option>
            <option>Mix / not sure</option>
          </Select>
        </FormField>
        <FormField label="Property location (city)" htmlFor="location" required>
          <Input id="location" name="location" required placeholder="e.g. Long Beach, CA" />
        </FormField>
        <FormField label="Approx. coverage hours / week" htmlFor="hours">
          <Input id="hours" name="hours" placeholder="e.g. 40 hrs/week or 24/7" />
        </FormField>
        <FormField label="Start date" htmlFor="startDate">
          <Input id="startDate" name="startDate" type="date" />
        </FormField>
        <FormField label="Budget range (optional)" htmlFor="budget">
          <Input id="budget" name="budget" placeholder="e.g. $5–10k / month" />
        </FormField>
      </div>

      <FormField label="Anything else we should know?" htmlFor="message">
        <Textarea id="message" name="message" rows={5} placeholder="Site details, special requirements, prior security experience, etc." />
      </FormField>

      <div className="flex flex-col gap-3 border-t border-ink-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline decoration-signal-500 decoration-2 underline-offset-4 hover:text-ink-900">
            Privacy Policy
          </a>.
        </p>
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Sending…" : (<><Send className="h-4 w-4" /> Send quote request</>)}
        </Button>
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg ?? "Something went wrong. Please try again or call 310-438-3044."}
        </p>
      )}
    </form>
  );
}
