"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  chatSuggestions,
  getAssistantReply,
  type ChatMessage,
} from "@/lib/chat";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi — I'm the Balme Ayas assistant. Ask about CNC/EDM services, materials, machines, or how to get a quote.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function pushAssistant(text: string) {
    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "assistant", content: text },
      ]);
      setTyping(false);
    }, 450 + Math.min(text.length * 8, 900));
  }

  function ask(question: string) {
    const q = question.trim();
    if (!q || typing) return;
    setMessages((prev) => [...prev, { id: uid(), role: "user", content: q }]);
    setInput("");
    pushAssistant(getAssistantReply(q));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    ask(input);
  }

  return (
    <div className="chatbot fixed right-4 bottom-4 z-[120] flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {open ? (
        <div
          className="chatbot-panel flex h-[min(34rem,72vh)] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden border border-line bg-surface shadow-[0_24px_80px_rgba(12,21,32,0.28)]"
          role="dialog"
          aria-label="Balme Ayas AI assistant"
        >
          <header className="flex items-center justify-between gap-3 bg-ink px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-leaf/20">
                <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full border-2 border-ink bg-leaf" />
              </span>
              <div>
                <p className="font-display text-sm font-bold">BA Assistant</p>
                <p className="text-[11px] text-white/60">
                  Precision manufacturing help
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 transition-colors hover:text-white"
              aria-label="Close chat"
            >
              ✕
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-ink text-white"
                      : "border border-line bg-background text-ink"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {typing ? (
              <div className="flex justify-start">
                <div className="border border-line bg-background px-3 py-2 text-sm text-muted">
                  <span className="chat-dots">Thinking</span>
                </div>
              </div>
            ) : null}
            <div ref={endRef} />
          </div>

          {!typing && messages.length < 4 ? (
            <div className="flex flex-wrap gap-2 border-t border-line px-3 py-2">
              {chatSuggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="border border-line bg-background px-2.5 py-1 text-[11px] font-medium text-muted transition-colors hover:border-leaf hover:text-ink"
                >
                  {s}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-line bg-background p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about CNC, materials, quotes…"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="rounded-sm bg-leaf px-3 py-2 text-xs font-semibold tracking-wide text-white uppercase transition-opacity disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="chatbot-fab group relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_12px_40px_rgba(12,21,32,0.35)] transition-transform hover:scale-105"
        aria-label={open ? "Close assistant" : "Open AI assistant"}
        aria-expanded={open}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-leaf/30 opacity-40" />
        {open ? (
          <span className="relative text-lg">✕</span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="relative h-6 w-6 fill-current"
            aria-hidden
          >
            <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 5v2h10V9H7zm0 4v2h7v-2H7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
