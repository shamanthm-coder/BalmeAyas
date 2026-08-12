"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/content";

type Field = {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
};

const leftFields: Field[] = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "phone", label: "Phone Number", required: true, type: "tel" },
  { name: "targetPrice", label: "Target Price", required: true },
  { name: "quantity", label: "Quantity Required", required: true },
];

const rightFields: Field[] = [
  { name: "email", label: "Email", required: true, type: "email" },
  { name: "cycleTime", label: "Total Cycle Time", required: true },
  { name: "material", label: "Material Required", required: true },
  { name: "timeline", label: "Timeline" },
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      "Quote request from website",
      "",
      `Full Name: ${String(data.get("fullName") || "").trim()}`,
      `Email: ${String(data.get("email") || "").trim()}`,
      `Phone: ${String(data.get("phone") || "").trim()}`,
      `Target Price: ${String(data.get("targetPrice") || "").trim()}`,
      `Total Cycle Time: ${String(data.get("cycleTime") || "").trim()}`,
      `Quantity Required: ${String(data.get("quantity") || "").trim()}`,
      `Material Required: ${String(data.get("material") || "").trim()}`,
      `Timeline: ${String(data.get("timeline") || "").trim() || "—"}`,
    ];

    if (fileName) {
      lines.push("", `Requirement PDF: ${fileName}`, "(Please attach this PDF to the email.)");
    }

    const name = String(data.get("fullName") || "").trim();
    const subject = encodeURIComponent(`Quote request from ${name || "website"}`);
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
        <div className="space-y-5">
          {leftFields.map((field) => (
            <QuoteField key={field.name} field={field} />
          ))}
        </div>
        <div className="space-y-5">
          {rightFields.map((field) => (
            <QuoteField key={field.name} field={field} />
          ))}
        </div>
      </div>

      <div className="border-t border-line pt-6">
        <label className="block">
          <span className="text-sm font-medium text-ink">
            Upload your Requirement in pdf formats only
          </span>
          <input
            name="requirement"
            type="file"
            accept="application/pdf,.pdf"
            className="mt-3 block w-full text-sm text-muted file:mr-4 file:border-0 file:bg-ink file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-leaf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileName(file?.name ?? "");
            }}
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-sm bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-ink"
        >
          Send Message
        </button>
        {status === "ready" ? (
          <p className="text-sm text-muted">
            Opening your email client
            {fileName ? " — remember to attach your PDF" : ""}…
          </p>
        ) : null}
      </div>
    </form>
  );
}

function QuoteField({ field }: { field: Field }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {field.required ? <span className="text-accent">* </span> : null}
        {field.label}
      </span>
      <input
        name={field.name}
        type={field.type ?? "text"}
        required={field.required}
        className="mt-2 w-full border border-line bg-background px-3 py-2.5 text-ink outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}
