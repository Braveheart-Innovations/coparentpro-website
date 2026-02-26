"use client";

import { useState, type FormEvent } from "react";
import { Container, Card, Button } from "@/components/ui";
import { SUPPORT_EMAIL } from "@/lib/metadata";

const CONTACT_FORM_URL =
  "https://us-central1-coparentpro-52435.cloudfunctions.net/contactForm";

const FAQ = [
  {
    q: "How do I connect with my co-parent?",
    a: "Go to the My Network tab, tap \u2018Add Connection\u2019, and search for your co-parent using their name or email. Send them a connection request from within the app. Once they accept, you\u2019ll be able to message, share calendars, and more.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. CoParentPro uses TLS/SSL encryption for all data in transit, Firebase Authentication for secure access, and Firestore security rules to ensure only authorized users can access data. We take your family's privacy very seriously.",
  },
  {
    q: "Can I export my messages for court?",
    a: "Yes. Go to any conversation, tap the export button, and generate a court-ready report. Reports include SHA-256 integrity verification to help verify the messages haven't been tampered with.",
  },
  {
    q: "How does the communication analysis work?",
    a: "Our AI analyzes your message tone in real-time using on-device natural language processing. Messages are classified as constructive (green), cautionary (yellow), or potentially harmful (red). The analysis runs on your device — your message content is not sent to external servers for analysis.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are managed through your app store. On iOS, go to Settings > Apple ID > Subscriptions. On Android, open Google Play > Menu > Subscriptions. You can cancel anytime and retain access until the end of your billing period.",
  },
  {
    q: "What happens to my data if I delete my account?",
    a: "When you request account deletion, there's a 30-day grace period during which you can cancel. After that, your personal data is permanently removed. Message content is anonymized but preserved for court compliance purposes.",
  },
  {
    q: "Do both parents need the app?",
    a: "For the best experience, yes. Both parents need their own CoParentPro account to use shared messaging, calendars, and expense tracking. Each parent manages their own subscription.",
  },
  {
    q: "Is CoParentPro available in my country?",
    a: "CoParentPro is currently available in the United States, Canada, United Kingdom, and Australia via the App Store and Google Play Store. We're working on expanding to additional regions.",
  },
];

const SUBJECT_OPTIONS = [
  "General Question",
  "Technical Support",
  "Billing & Subscription",
  "Feature Request",
  "Bug Report",
  "Account Issue",
  "Other",
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: SUBJECT_OPTIONS[0],
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setError(
        `Failed to send message. Please try again or email us directly at ${SUPPORT_EMAIL}.`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-16 sm:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              How can we help?
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              Find answers to common questions or reach out to our support team.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white" id="faq">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <Card key={item.q} interactive={false} className="border border-neutral-100">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {item.q}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {item.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact form */}
      <section className="py-16 sm:py-20 bg-neutral-100" id="contact">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight text-center mb-4">
              Contact Us
            </h2>
            <p className="text-center text-neutral-700 mb-10">
              Can&apos;t find what you&apos;re looking for? Send us a message
              and we&apos;ll get back to you as soon as possible.
            </p>

            {submitted ? (
              <Card interactive={false} className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Message sent!
                </h3>
                <p className="text-neutral-700">
                  Thank you for reaching out. We&apos;ll get back to you within
                  1-2 business days.
                </p>
              </Card>
            ) : (
              <Card interactive={false} className="border border-neutral-100">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-900 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-900 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-900 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-900 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg bg-error/10 border border-error/20 p-3 text-sm text-error">
                      {error}
                    </div>
                  )}

                  <Button type="submit" disabled={loading} className="w-full justify-center">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            )}

            <p className="text-center text-sm text-neutral-500 mt-6">
              You can also email us directly at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-primary hover:text-primary-dark underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
