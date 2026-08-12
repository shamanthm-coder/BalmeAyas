import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { WorksGallery } from "@/components/WorksGallery";
import {
  company,
  industries,
  machines,
  materials,
  reasons,
  services,
} from "@/lib/content";

const tickerItems = [
  "Defense",
  "Automotive",
  "Aerospace",
  "Aeronautics",
  "Renewable Energy",
  "Medical Devices",
  "Tool & Die",
];

export default function Home() {
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Balme Ayas, I would like to discuss a precision manufacturing requirement.",
  )}`;

  return (
    <div id="top" className="flex flex-1 flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
        <Image
          src="/hero/hero-bg.jpg"
          alt="Precision laser cutting of metal components at Balme Ayas"
          fill
          priority
          className="animate-hero-pan object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
          aria-hidden
        />
        <div className="noise-overlay" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-28 md:px-8 md:pb-24">
          <div className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 text-xs tracking-[0.18em] text-white/80 uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Precision manufacturing
          </div>

          <p className="animate-fade-up-delay-1 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[6.5rem] lg:leading-[0.95]">
            Balme Ayas
          </p>
          <div className="animate-line-draw mt-5 h-px w-28 bg-leaf" />
          <h1 className="animate-fade-up-delay-2 mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {company.tagline}
          </h1>
          <p className="animate-fade-up-delay-3 mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            High-quality components for defense, automotive, aerospace,
            aeronautics, and renewable energy — delivered with agile production
            and personalized partnership.
          </p>

          <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-3">
            <a
              href="/quote"
              className="btn-shine rounded-sm bg-leaf px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#7aa845]"
            >
              Get a quote
            </a>
            <a
              href="#works"
              className="rounded-sm border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              View our works
            </a>
            <a
              href={company.brochurePath}
              download
              className="rounded-sm border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Download brochure
            </a>
          </div>

          <div className="animate-fade-up-delay-4 mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
            <Stat label="Tolerance" value="±0.002 mm" />
            <Stat label="Spindle" value="12,000 RPM" />
            <Stat label="Focus" value="Critical industries" />
          </div>
        </div>

        <a
          href="#capabilities"
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.2em] text-white/60 uppercase md:flex"
        >
          <span>Scroll</span>
          <span className="scroll-cue block h-8 w-px bg-white/60" />
        </a>
      </section>

      {/* Industry ticker */}
      <div className="overflow-hidden border-y border-ink/10 bg-ink py-3 text-white">
        <div className="marquee-track gap-10 px-4">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-10 text-sm tracking-[0.16em] uppercase"
            >
              <span className="text-white/80">{item}</span>
              <span className="text-leaf">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="relative overflow-hidden bg-surface px-6 py-20 md:px-8 md:py-28"
      >
        <div
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Our capabilities
            </h2>
            <div className="mt-5 h-px w-16 bg-leaf" />
            <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden md:block">
              <Image
                src="/works/img1.webp"
                alt="In-process precision inspection"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-5 self-center text-base leading-relaxed text-muted md:text-lg">
            <p>{company.capabilities}</p>
            <p>{company.approach}</p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-ink transition-colors hover:text-leaf"
            >
              Explore services
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative overflow-hidden bg-ink px-6 py-20 text-white md:px-8 md:py-28"
      >
        <div
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-leaf/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
              What we do
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Expertise & services
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Precision-engineered solutions with cutting-edge technology and
              expert craftsmanship.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} as="li" delay={i * 70}>
                <div className="service-tile h-full border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-display text-sm text-leaf/90">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose */}
      <section className="border-t border-line px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Why choose Balme Ayas?
            </h2>
            <div className="mt-5 h-px w-16 bg-leaf" />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} as="li" delay={i * 80}>
                <div className="group h-full border border-line bg-surface/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:bg-surface">
                  <span className="inline-flex h-8 w-8 items-center justify-center border border-line font-display text-sm text-accent transition-colors group-hover:border-leaf group-hover:text-leaf">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="bg-surface px-6 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Industries we serve
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Critical applications across sectors that demand accuracy,
              reliability, and speed.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.name} as="li" delay={i * 50}>
                <div className="h-full border-t-2 border-ink/10 pt-5 transition-colors hover:border-leaf">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {industry.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Materials */}
      <section className="border-t border-line px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Material capabilities
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Reveal delay={0}>
              <MaterialGroup title="Metals" items={materials.metals} />
            </Reveal>
            <Reveal delay={100}>
              <MaterialGroup title="Plastics" items={materials.plastics} />
            </Reveal>
            <Reveal delay={200}>
              <MaterialGroup title="Specialty" items={materials.specialty} />
            </Reveal>
          </div>
        </div>
      </section>

      <WorksGallery />

      {/* Machines */}
      <section
        id="machines"
        className="border-t border-line bg-background px-6 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Our machine fleet
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              CNC and EDM capacity for micron-level accuracy across complex
              geometries.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {machines.map((machine, i) => (
              <Reveal key={machine.model} as="li" delay={i * 80}>
                <div className="h-full border border-line bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 md:p-8">
                  <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                    {machine.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {machine.model}
                  </h3>
                  <dl className="mt-6 grid grid-cols-2 gap-3">
                    {machine.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="border border-line bg-surface px-3 py-3"
                      >
                        <dt className="text-xs tracking-wide text-muted uppercase">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-line px-6 py-20 md:px-8 md:py-28"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-leaf/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Contact us
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Tell us about your component requirements — we&apos;ll respond
              with a clear next step.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal className="space-y-5">
              <a
                href={company.brochurePath}
                download
                className="inline-flex items-center gap-2 text-base font-semibold text-accent underline-offset-4 transition-colors hover:text-leaf hover:underline"
              >
                Download our brochure
                <span aria-hidden>↓</span>
              </a>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-display text-2xl font-bold text-ink transition-colors hover:text-accent"
              >
                {company.websiteLabel}
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-sm bg-[#2f3b42] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#243036]"
              >
                <WhatsAppIcon />
                Message us on WhatsApp
              </a>

              <div className="space-y-2 pt-2">
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block text-lg font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${company.email}`}
                  className="block text-lg font-semibold text-accent hover:underline"
                >
                  {company.email}
                </a>
              </div>

              <div className="pt-4">
                <Logo />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-line bg-surface p-6 shadow-[0_20px_60px_rgba(12,21,32,0.06)] md:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-ink px-6 py-10 text-white md:px-8">
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
            <p>
              Copyright © 2026 Balme Ayas — All rights reserved.
            </p>
            <p>{company.legalName}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] text-white/55 uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-sm font-semibold text-white md:text-base">
        {value}
      </p>
    </div>
  );
}

function MaterialGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-line bg-surface/60 p-6">
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-leaf" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.16c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.11-.42-.14-.97-.31-1.67-.61-2.94-1.27-4.85-4.24-5-4.44-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.16-.3.36-.43.49-.14.14-.29.29-.12.56.16.28.73 1.2 1.57 1.94 1.08.96 1.98 1.26 2.26 1.4.28.14.45.12.61-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}
