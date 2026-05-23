"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "submitting" | "success" | "error";

// Inner component reads useSearchParams — must live inside a <Suspense> per
// Next.js 15+ rules. The default export below wraps it.
function QuoteFormInner() {
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [installation, setInstallation] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // If the user clicked a manufacturer CTA (e.g. /quote?brand=Loewen),
  // pre-fill the installation field with that context — they can edit it.
  useEffect(() => {
    const brand = searchParams.get("brand");
    if (brand) {
      setInstallation(`Interested in ${brand} — `);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    // TODO: hook to Supabase in the next pass. For now this simulates a
    // successful submission so we can see the success state.
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-background p-10 text-center sm:p-14">
        <p className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          Thank you, {name.split(" ")[0] || "there"}.
        </p>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
          Your request has been received. Mike will personally follow up
          within one business day. If you need to reach him sooner, call{" "}
          <a
            href="tel:+12393312390"
            className="text-foreground underline-offset-4 hover:text-accent hover:underline"
          >
            239.331.2390
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Field
        label="Name"
        name="name"
        value={name}
        onChange={setName}
        required
      />

      <Field
        label="Phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={setPhone}
        placeholder="Optional — Mike prefers to call when possible"
      />

      <Field
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={setEmail}
        required
      />

      <div>
        <label
          htmlFor="installation"
          className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted"
        >
          Tell us about your project
          <span className="text-accent"> *</span>
        </label>
        <textarea
          id="installation"
          name="installation"
          required
          rows={6}
          value={installation}
          onChange={(e) => setInstallation(e.target.value)}
          placeholder="e.g. Replacing 8 windows on a 2-story home in Naples. Custom front door. Any preferred manufacturer?"
          className="w-full border border-line bg-transparent p-4 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
        />
      </div>

      {errorMsg && <p className="text-sm text-accent">{errorMsg}</p>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a quote"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full border-0 border-b border-line bg-transparent py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
      />
    </div>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={null}>
      <QuoteFormInner />
    </Suspense>
  );
}
