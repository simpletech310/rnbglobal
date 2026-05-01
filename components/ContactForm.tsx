"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { FormField, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

type Topic = "hire" | "training" | "general";

export function ContactForm() {
  const [topic, setTopic] = useState<Topic>("hire");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTopic("hire");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6 text-navy-900 sm:p-8">
        <p className="text-lg font-semibold sm:text-xl">Thanks — your message is on its way.</p>
        <p className="mt-2 text-sm text-steel-700 sm:text-base">
          We respond same business day. If it's urgent, call <a href="tel:+13104383044" className="font-semibold underline">310-438-3044</a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-navy-900 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <fieldset>
        <legend className="mb-2 block text-sm font-semibold text-navy-900">What's this about?</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {(
            [
              { id: "hire", label: "Hire security" },
              { id: "training", label: "Take a class" },
              { id: "general", label: "Something else" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.id}
              className={`ring-focus flex cursor-pointer items-center justify-center rounded-lg border px-3 py-3 text-sm font-semibold transition-colors ${
                topic === opt.id
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
              }`}
            >
              <input
                type="radio"
                name="topic"
                value={opt.id}
                checked={topic === opt.id}
                onChange={() => setTopic(opt.id)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Your name" htmlFor="name" required>
          <Input id="name" name="name" required autoComplete="name" />
        </FormField>
        <FormField label="Phone" htmlFor="phone" required>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </FormField>
      </div>

      <FormField label="Email" htmlFor="email" required>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </FormField>

      {topic === "hire" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Organization" htmlFor="organization">
            <Input id="organization" name="organization" autoComplete="organization" />
          </FormField>
          <FormField label="Property type" htmlFor="propertyType">
            <Select id="propertyType" name="propertyType" defaultValue="">
              <option value="" disabled>Select one…</option>
              <option>Retail / Storefront</option>
              <option>Event</option>
              <option>Office / Corporate</option>
              <option>Residential / HOA</option>
              <option>Construction / Industrial</option>
              <option>Other</option>
            </Select>
          </FormField>
        </div>
      )}

      {topic === "training" && (
        <FormField label="Which class?" htmlFor="course">
          <Select id="course" name="course" defaultValue="">
            <option value="" disabled>Select one…</option>
            <option>Guard Card Training</option>
            <option>Firearm Training</option>
            <option>Guard Card Processing</option>
            <option>Baton Training</option>
            <option>CPR / AED</option>
            <option>Handcuff Training</option>
            <option>Pepper Spray Training</option>
            <option>Not sure yet</option>
          </Select>
        </FormField>
      )}

      <FormField label="Message" htmlFor="message" required hint="The more detail, the faster we can help.">
        <Textarea id="message" name="message" required rows={5} />
      </FormField>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-steel-500">
          By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Sending…" : (<><Send className="h-4 w-4" /> Send message</>)}
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
