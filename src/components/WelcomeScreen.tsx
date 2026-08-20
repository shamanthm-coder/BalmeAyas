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

      <div className="welcome-content relative z-10 flex flex-col items-center justify-center gap-5 sm:gap-6">
        <div className="welcome-logo">
          <Logo
            variant="light"
            showWordmark={false}
            markClassName="h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64"
          />
        </div>
        <p className="welcome-brand font-display text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl">
          Balmeayas
        </p>
      </div>
    </div>
  );
}
