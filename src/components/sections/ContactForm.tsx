"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_FORM_URL, SUPPORT_EMAIL } from "@/lib/metadata";

const SUBJECT_OPTIONS = [
  "General Question",
  "Technical Support",
  "Billing & Subscription",
  "Feature Request",
  "Bug Report",
  "Account Issue",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_CLASSES =
  "w-full rounded-[10px] border-[1.5px] border-neutral-300 bg-white px-[15px] py-3 text-[14.5px] text-neutral-900 outline-none transition-colors focus:border-primary";
const LABEL_CLASSES = "mb-1.5 block text-[13.5px] font-semibold text-neutral-900";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: SUBJECT_OPTIONS[0] as string,
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, subject, message } = form;
    if (!name.trim() || !EMAIL_RE.test(email.trim()) || !message.trim()) {
      setError("Please fill in your name, a valid email, and a message.");
      return;
    }

    setSending(true);
    setError(null);
    try {
      const response = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!response.ok) throw new Error("failed");
      setSent(true);
    } catch {
      setError(`Failed to send. Please try again or email us directly at ${SUPPORT_EMAIL}.`);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="rounded-[18px] border border-line bg-white px-6 py-12 text-center">
        <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary-light text-[26px] text-secondary">
          ✓
        </div>
        <h3 className="text-[19px] font-bold">Message sent!</h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-neutral-700">
          Thank you for reaching out. We’ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-[18px] rounded-[18px] border border-line bg-white p-6 sm:p-9"
    >
      <div className="grid gap-[18px] sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASSES}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            className={FIELD_CLASSES}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={LABEL_CLASSES}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={update("email")}
            className={FIELD_CLASSES}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={LABEL_CLASSES}>
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={update("subject")}
          className={FIELD_CLASSES}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASSES}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          value={form.message}
          onChange={update("message")}
          className={`${FIELD_CLASSES} resize-y`}
        />
      </div>

      {error && (
        <p role="alert" className="text-[13.5px] text-error">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="cursor-pointer rounded-xl bg-primary py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
