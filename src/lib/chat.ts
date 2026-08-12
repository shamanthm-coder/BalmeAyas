import { company, machines, materials, services } from "@/lib/content";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What services do you offer?",
  "What materials can you machine?",
  "How precise can you go?",
  "How do I contact sales?",
];

export const chatSuggestions = suggestions;

function includesAny(text: string, words: string[]) {
  return words.some((w) => text.includes(w));
}

export function getAssistantReply(input: string): string {
  const q = input.toLowerCase().trim();

  if (!q) {
    return "Ask me about our CNC/EDM services, materials, machines, or how to get a quote.";
  }

  if (includesAny(q, ["hello", "hi", "hey", "good morning", "good evening"])) {
    return `Hello — I'm the Balme Ayas assistant. I can help with services, machine capacity, materials, and contact details. What do you need?`;
  }

  if (includesAny(q, ["contact", "phone", "email", "whatsapp", "call", "quote", "sales"])) {
    return [
      "You can reach our sales team here:",
      `• Phone: ${company.phones.join(" / ")}`,
      `• Email: ${company.email}`,
      `• WhatsApp: +${company.whatsapp}`,
      `• Web: ${company.websiteLabel}`,
      "",
      "Or fill the Get a Quote form at /quote — we're happy to review drawings and timelines.",
    ].join("\n");
  }

  if (includesAny(q, ["brochure", "pdf", "catalog"])) {
    return `You can download our brochure here: ${company.brochurePath} (also linked in the Contact section).`;
  }

  if (includesAny(q, ["service", "cnc", "edm", "prototype", "tool", "die", "machining", "offer"])) {
    const list = services.map((s) => `• ${s.title} — ${s.description}`).join("\n");
    return `Here are our core services:\n${list}\n\nTell me your part type and material if you want a more specific path.`;
  }

  if (includesAny(q, ["material", "steel", "aluminum", "titanium", "plastic", "inconel", "peek"])) {
    return [
      "We machine a wide material range:",
      `• Metals: ${materials.metals.join(", ")}`,
      `• Plastics: ${materials.plastics.join(", ")}`,
      `• Specialty: ${materials.specialty.join(", ")}`,
    ].join("\n");
  }

  if (includesAny(q, ["machine", "fleet", "capacity", "spindle", "fanuc", "bfw", "cosmos"])) {
    const list = machines
      .map((m) => `• ${m.category}: ${m.model}`)
      .join("\n");
    return `Our machine fleet includes:\n${list}\n\nAsk about a specific machine if you want specs.`;
  }

  if (includesAny(q, ["tolerance", "precision", "accurate", "micron", "0.002"])) {
    return "We routinely work to tight tolerances — down to ±0.002 mm on suitable EDM/CNC processes, with inspection on the floor for critical features.";
  }

  if (includesAny(q, ["industry", "defense", "aerospace", "automotive", "medical", "renewable"])) {
    return "We support defense, automotive, aerospace & aeronautics, renewable energy, industrial manufacturing, medical devices, and tool & die — especially where specs are demanding.";
  }

  if (includesAny(q, ["where", "location", "india", "address"])) {
    return `We're Balme Ayas — reach us via ${company.email} or ${company.phones[0]} and we'll coordinate your project details.`;
  }

  if (includesAny(q, ["who", "about", "company", "balme"])) {
    return `${company.legalName} delivers ${company.tagline.toLowerCase()}. ${company.about}`;
  }

  return [
    "I can help with Balme Ayas services, materials, machine capacity, precision, and contact info.",
    "Try asking: “What CNC machines do you run?” or “Can you machine titanium?”",
    `For a human quote, email ${company.email} or call ${company.phones[0]}.`,
  ].join("\n\n");
}
