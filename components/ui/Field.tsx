import { cn } from "@/lib/cn";

const inputBase =
  "w-full rounded-lg border border-ink-200 bg-bone-50 px-4 py-3.5 text-base text-ink-900 placeholder:text-ink-400 transition-colors focus:border-ink-900 focus:outline-none focus:ring-2 focus:ring-signal-400 focus:ring-offset-2 focus:ring-offset-bone-100 disabled:bg-ink-100 sm:text-sm";

export function Label({ children, htmlFor, required }: { children: React.ReactNode; htmlFor: string; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-500"
    >
      {children}
      {required && <span className="ml-1 text-signal-600">*</span>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputBase, props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(inputBase, "min-h-32", props.className)} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(inputBase, "appearance-none pr-9", props.className)} />;
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-600">{message}</p>;
}

export function FormField({
  label,
  htmlFor,
  required,
  error,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="w-full">
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink-500">{hint}</p>}
      <FieldError message={error} />
    </div>
  );
}
