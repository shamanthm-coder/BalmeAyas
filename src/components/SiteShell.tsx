"use client";

import { useCallback, useState, type ReactNode } from "react";
import { ChatBot } from "@/components/ChatBot";
import { WelcomeScreen } from "@/components/WelcomeScreen";

type SiteShellProps = {
  children: ReactNode;
};

type Phase = "welcome" | "handoff" | "site";

export function SiteShell({ children }: SiteShellProps) {
  const [phase, setPhase] = useState<Phase>("welcome");

  // Mount the main site under the welcome while it still covers the screen.
  const handleExitStart = useCallback(() => {
    setPhase("handoff");
  }, []);

  // Remove welcome only after the exit animation finishes.
  const handleComplete = useCallback(() => {
    setPhase("site");
  }, []);

  return (
    <>
      {phase !== "site" ? (
        <WelcomeScreen
          onExitStart={handleExitStart}
          onComplete={handleComplete}
        />
      ) : null}

      {phase !== "welcome" ? (
        <>
          {children}
          <ChatBot />
        </>
      ) : null}
    </>
  );
}
