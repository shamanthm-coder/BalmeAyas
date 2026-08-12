"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";

type WelcomeScreenProps = {
  /** Fires when exit begins — mount the main site underneath while welcome still covers. */
  onExitStart: () => void;
  /** Fires after the exit animation — safe to remove the welcome overlay. */
  onComplete: () => void;
};

export function WelcomeScreen({ onExitStart, onComplete }: WelcomeScreenProps) {
  const [exiting, setExiting] = useState(false);
  const started = useRef(false);
  const done = useRef(false);

  useEffect(() => {
    const startExit = () => {
      if (started.current) return;
      started.current = true;
      setExiting(true);
      onExitStart();
    };

    const finish = () => {
      if (done.current) return;
      done.current = true;
      onComplete();
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      startExit();
      finish();
      return;
    }

    const exitTimer = window.setTimeout(startExit, 2400);
    const doneTimer = window.setTimeout(finish, 3200);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onExitStart, onComplete]);

  return (
    <div
      className={`welcome-screen fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-white ${
        exiting ? "welcome-exit" : ""
      }`}
      role="dialog"
      aria-label="Welcome to Balme Ayas"
      aria-modal="true"
    >
      <div className="welcome-grid" aria-hidden />
      <div className="welcome-glow" aria-hidden />

      <div className="welcome-content relative z-10 flex flex-col items-center px-6 text-center">
        <div className="welcome-logo">
          <Logo
            variant="light"
            showWordmark={false}
            markClassName="h-24 w-24 md:h-28 md:w-28"
          />
        </div>

        <p className="welcome-brand mt-8 font-display text-4xl font-extrabold tracking-[0.12em] uppercase sm:text-5xl md:text-6xl">
          Balme Ayas
        </p>

        <div className="welcome-line mt-6 h-px w-40 bg-leaf" />

        <p className="welcome-tag mt-5 max-w-md text-sm tracking-[0.18em] text-white/70 uppercase sm:text-base">
          Precision Engineering
        </p>

        <div className="welcome-progress mt-10 h-[2px] w-40 overflow-hidden bg-white/15">
          <span className="welcome-progress-bar block h-full origin-left bg-leaf" />
        </div>
      </div>
    </div>
  );
}
