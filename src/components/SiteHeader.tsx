"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Our Works" },
  { href: "/#machines", label: "Machines" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        mounted && scrolled
          ? "border-b border-white/10 bg-ink/80 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="/" aria-label="Balme Ayas home" className="relative z-50">
          <Logo variant="light" />
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/quote"
            className="btn-shine hidden rounded-sm bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a quote
          </a>
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/25 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-md lg:hidden">
          <nav className="flex h-full flex-col justify-center gap-6 px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-bold text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit rounded-sm bg-leaf px-5 py-3 text-sm font-semibold text-white"
            >
              Get a quote
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
