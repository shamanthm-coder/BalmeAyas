"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { works, type WorkItem } from "@/lib/content";

type Filter = "all" | "process" | "component";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "process", label: "On machine" },
  { id: "component", label: "Finished parts" },
];

/** Desktop bento spans that always fill complete rows of 12. */
function cellSpans(total: number): string[] {
  if (total <= 0) return [];
  if (total <= 2) return Array.from({ length: total }, () => "works-span-6");
  if (total === 3) return ["works-span-4", "works-span-4", "works-span-4"];

  const spans: string[] = [];
  let remaining = total;

  while (remaining > 0) {
    if (remaining >= 5 && (remaining - 2) % 3 === 0) {
      spans.push("works-span-7", "works-span-5");
      remaining -= 2;
    } else if (remaining >= 3 && remaining % 3 === 0) {
      spans.push("works-span-4", "works-span-4", "works-span-4");
      remaining -= 3;
    } else if (remaining >= 2) {
      spans.push("works-span-6", "works-span-6");
      remaining -= 2;
    } else {
      spans.push("works-span-12");
      remaining -= 1;
    }
  }

  return spans;
}

export function WorksGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return works;
    return works.filter((w) => w.category === filter);
  }, [filter]);

  const spans = useMemo(() => cellSpans(filtered.length), [filtered.length]);

  const active: WorkItem | null =
    lightboxIndex !== null ? (filtered[lightboxIndex] ?? null) : null;

  const openAt = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const close = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const step = useCallback(
    (delta: number) => {
      setLightboxIndex((current) => {
        if (current === null) return current;
        const len = filtered.length;
        return (current + delta + len) % len;
      });
    },
    [filtered.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, step]);

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-ink px-6 py-20 text-white md:px-8 md:py-28"
    >
      <div className="works-glow" aria-hidden />
      <div className="works-grid-bg" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-leaf uppercase">
                Portfolio
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Our works
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
                Precision parts from the shop floor — the cut, the finish, and
                the detail behind every component.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-x-6 gap-y-2"
              role="tablist"
              aria-label="Filter works"
            >
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  onClick={() => {
                    setFilter(item.id);
                    setLightboxIndex(null);
                  }}
                  className={`works-filter ${
                    filter === item.id ? "works-filter-active" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <ul className="works-gallery mt-10" key={filter}>
          {filtered.map((work, i) => (
            <Reveal
              key={work.src}
              as="li"
              delay={Math.min(i * 60, 240)}
              className={spans[i]}
            >
              <button
                type="button"
                onClick={() => openAt(i)}
                className="works-shot group"
                aria-label={`View ${work.title}`}
              >
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="works-shot-veil" />
                <div className="works-shot-meta">
                  <span className="text-[10px] tracking-[0.2em] text-leaf uppercase">
                    {work.tag}
                  </span>
                  <p className="mt-1 font-display text-lg font-semibold tracking-tight md:text-xl">
                    {work.title}
                  </p>
                </div>
                <span className="works-shot-index font-display" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {active && lightboxIndex !== null ? (
        <div
          className="works-lightbox fixed inset-0 z-[90] flex flex-col bg-ink/96 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-8">
            <div className="min-w-0">
              <p className="text-[11px] tracking-[0.18em] text-leaf uppercase">
                {active.tag} ·{" "}
                {active.category === "process" ? "Process" : "Component"}
              </p>
              <p className="mt-1 truncate font-display text-lg font-semibold md:text-xl">
                {active.title}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <p className="hidden font-display text-sm sm:block">
                <span className="text-leaf">
                  {String(lightboxIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-white/35"> / </span>
                <span className="text-white/60">
                  {String(filtered.length).padStart(2, "0")}
                </span>
              </p>
              <button
                type="button"
                className="border border-white/30 px-4 py-2 text-sm text-white transition-colors hover:border-white hover:bg-white/10"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-6 md:px-8">
            <button
              type="button"
              onClick={() => step(-1)}
              className="works-nav-btn absolute left-3 z-10 md:left-6"
              aria-label="Previous"
            >
              ←
            </button>
            <div className="relative mx-auto h-full min-h-[48vh] w-full max-w-4xl">
              <Image
                key={active.src}
                src={active.src}
                alt={active.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <button
              type="button"
              onClick={() => step(1)}
              className="works-nav-btn absolute right-3 z-10 md:right-6"
              aria-label="Next"
            >
              →
            </button>
          </div>

          <p className="mx-auto max-w-2xl px-6 pb-8 text-center text-sm leading-relaxed text-white/65 md:text-base">
            {active.description}
          </p>
        </div>
      ) : null}
    </section>
  );
}
