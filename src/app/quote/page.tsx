import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { QuoteForm } from "@/components/QuoteForm";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a manufacturing quote from Balme Ayas — share specs, materials, quantity, and drawings.",
};

export default function QuotePage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-line bg-ink px-6 pb-16 pt-28 text-white md:px-8 md:pb-20 md:pt-32">
        <div
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            Quote request
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Get a quote
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Share your requirement details and we&apos;ll come back with a clear
            next step for your CNC or EDM project.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-xl font-bold tracking-wide text-ink uppercase md:text-2xl">
            Please fill the below form to get a quote
          </h2>
          <div className="mt-10 border border-line bg-surface p-6 shadow-[0_20px_60px_rgba(12,21,32,0.06)] md:p-10">
            <QuoteForm />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center text-sm text-muted">
            <p>
              Prefer to talk? Call{" "}
              <a
                href={`tel:${company.phones[0]}`}
                className="font-semibold text-ink hover:text-accent"
              >
                {company.phones[0]}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-accent hover:underline"
              >
                {company.email}
              </a>
            </p>
            <Link
              href="/"
              className="text-sm font-semibold text-ink transition-colors hover:text-leaf"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-line bg-ink px-6 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div className="text-center">
            <div className="inline-flex justify-center">
              <Logo variant="light" />
            </div>
            <p className="mt-3 text-sm text-white/60">
              {company.phones[0]} / {company.email}
            </p>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs tracking-wide text-white/45 uppercase sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright © 2026 Balme Ayas — All rights reserved.</p>
            <p>{company.legalName}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
