"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { SUPPORT_EMAIL, WAITLIST_URL } from "@/lib/metadata";

const JOINED_STORAGE_KEY = "cpp_waitlist_joined";
const JOINED_EVENT = "cpp:waitlist-joined";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "done";

type Props = {
  /** `light` sits on the pale hero; `dark` sits on the navy closing section. */
  variant?: "light" | "dark";
  buttonLabel?: string;
  doneMessage?: string;
  /** Small helper text under the form (light variant only). */
  note?: string;
  className?: string;
};

function errorMessage(status: number | null): string {
  if (status === 400) return "Please enter a valid email address.";
  if (status === 429) return "Too many attempts from this address. Please try again in an hour.";
  return `Something went wrong. Please try again, or email ${SUPPORT_EMAIL}.`;
}

export default function WaitlistForm({
  variant = "light",
  buttonLabel = "Notify me at launch",
  doneMessage = "You’re on the list — we’ll email you the day we launch.",
  note,
  className = "",
}: Props) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Remember a signup across visits, and keep every form on the page in sync.
  useEffect(() => {
    try {
      if (localStorage.getItem(JOINED_STORAGE_KEY)) setStatus("done");
    } catch {
      /* storage unavailable — fall through to the empty form */
    }
    const onJoined = () => setStatus("done");
    window.addEventListener(JOINED_EVENT, onJoined);
    return () => window.removeEventListener(JOINED_EVENT, onJoined);
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError(errorMessage(400));
      return;
    }

    setStatus("sending");
    setError(null);

    let responseStatus: number | null = null;
    try {
      const response = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, source: window.location.pathname }),
      });
      responseStatus = response.status;
      if (!response.ok) throw new Error(`waitlist ${response.status}`);

      try {
        localStorage.setItem(JOINED_STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new Event(JOINED_EVENT));
      setStatus("done");
    } catch {
      setStatus("idle");
      setError(errorMessage(responseStatus));
    }
  }

  const dark = variant === "dark";

  if (status === "done") {
    return (
      <div
        role="status"
        className={
          dark
            ? `inline-flex items-center gap-3 rounded-xl border border-teal-glow/40 bg-teal-glow/15 px-6 py-4 text-[15px] font-semibold text-teal-glow ${className}`
            : `flex max-w-[460px] items-center gap-3 rounded-xl border border-line-teal bg-secondary-light px-5 py-4 text-[15px] font-semibold text-secondary-dark ${className}`
        }
      >
        <span className="text-lg" aria-hidden="true">
          ✓
        </span>
        {doneMessage}
      </div>
    );
  }

  const inputClasses = dark
    ? "flex-1 rounded-xl border-[1.5px] border-white/25 bg-white/8 px-4.5 py-3.5 text-[15px] text-white outline-none transition-colors focus:border-teal-glow placeholder:text-white/50"
    : "flex-1 rounded-xl border-[1.5px] border-neutral-300 bg-white px-4.5 py-3.5 text-[15px] text-neutral-900 outline-none transition-colors focus:border-primary";

  const buttonClasses = dark
    ? "rounded-xl bg-secondary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-60"
    : "rounded-xl bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60";

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className={`flex flex-col gap-2.5 sm:flex-row ${dark ? "mx-auto max-w-[440px]" : "max-w-[480px]"}`}>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          aria-invalid={error ? true : undefined}
          className={inputClasses}
        />
        <button type="submit" disabled={status === "sending"} className={buttonClasses}>
          {status === "sending" ? "Sending…" : buttonLabel}
        </button>
      </div>
      {error && (
        <p role="alert" className={`mt-2.5 text-[13px] ${dark ? "text-[#FFB4AE]" : "text-error"}`}>
          {error}
        </p>
      )}
      {note && !dark && (
        <p className="mt-3 text-[13px] text-neutral-500">{note}</p>
      )}
    </form>
  );
}
