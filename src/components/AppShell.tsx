"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Tweaks, type TweaksState } from "@/components/Tweaks";
import { useReveal } from "@/hooks/useReveal";

const DEFAULT_TWEAKS: TweaksState = {
  palette: "aurora",
  motionIntensity: "reduced",
  cursorGlow: true,
};

export function AppShell({ children }: { children: ReactNode }) {
  const revealRef = useReveal<HTMLDivElement>();
  const [tweaks, setTweaks] = useState<TweaksState>(DEFAULT_TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.palette = tweaks.palette;
    document.body.dataset.motion = tweaks.motionIntensity;
    document.body.dataset.cursor = tweaks.cursorGlow ? "on" : "off";
  }, [tweaks]);

  useEffect(() => {
    if (!tweaks.cursorGlow) return;
    const el = document.getElementById("cursor-glow");
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [tweaks.cursorGlow]);

  return (
    <>
      <Nav />
      <div ref={revealRef}>{children}</div>
      {!tweaksOpen && (
        <button
          className="tweaks-toggle"
          onClick={() => setTweaksOpen(true)}
          aria-label="Open tweaks"
        >
          Tweaks
        </button>
      )}
      <Tweaks
        tweaks={tweaks}
        setTweaks={setTweaks}
        open={tweaksOpen}
        onClose={() => setTweaksOpen(false)}
      />
    </>
  );
}
