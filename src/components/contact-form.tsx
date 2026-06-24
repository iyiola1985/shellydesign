"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { company, services } from "@/lib/site";

type Status = "idle" | "loading" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = encodeURIComponent(`Project Inquiry from ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    setTimeout(() => {
      setStatus("success");
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      }, 4000);
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border bg-[var(--card)] p-10 text-center shadow-luxe">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-green-500/15 text-green-500">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-navy-900 dark:text-white">
          Thank you!
        </h3>
        <p className="mt-3 max-w-sm text-sm text-navy-500 dark:text-white/60">
          Your message is on its way. Our team will get back to you within one business day. Your
          email client should now open to confirm.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-navy-900 outline-none transition-colors duration-200 placeholder:text-navy-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 dark:text-white dark:placeholder:text-white/40";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-[var(--card)] p-7 shadow-luxe sm:p-9"
    >
      <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
        Request a Free Quote
      </h3>
      <p className="mt-2 text-sm text-navy-500 dark:text-white/60">
        Fill out the form and our team will respond within 24 hours.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-white/70">
            Full Name
          </label>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-white/70">
            Email Address
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-white/70">
            Phone Number
          </label>
          <input
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 (308) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-white/70">
            Service Needed
          </label>
          <select value={form.service} onChange={update("service")} className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-white/70">
          Project Details
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project, timeline, and budget..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
