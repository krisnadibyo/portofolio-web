"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      el.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < vh - 40 && r.bottom > 0) {
          n.classList.add("in");
        }
      });
    };

    let raf = 0;
    const tick = (i = 0) => {
      check();
      if (i < 6) raf = requestAnimationFrame(() => tick(i + 1));
    };
    tick();

    const onScroll = () => check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const t = window.setTimeout(check, 1200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
