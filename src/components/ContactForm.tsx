"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="font-display text-xl font-semibold text-ink">
        Drop us a line
      </p>

      <label className="block">
        <span className="sr-only">Name</span>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border-0 border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-ink"
        />
      </label>

      <label className="block">
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="Email*"
          className="w-full border-0 border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-ink"
        />
      </label>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Message"
          className="w-full resize-y border-0 border-b border-line bg-transparent py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-ink"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="rounded-sm bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-leaf"
        >
          Send
        </button>
        {status === "ready" ? (
          <p className="text-sm text-muted">Opening your email client…</p>
        ) : null}
      </div>
    </form>
  );
}
