"use client";

import { useEffect, useRef, useState } from "react";

type Options = { duration?: number; decimals?: number };

export function useCountUp(target: number, { duration = 1600, decimals = 0 }: Options = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;

    const begin = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else setVal(target);
      };
      requestAnimationFrame(step);
    };

    const check = () => {
      if (started) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh - 40 && r.bottom > 0) begin();
    };

    check();
    const onScroll = () => check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const t = window.setTimeout(check, 1200);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target, duration]);

  const display = decimals ? val.toFixed(decimals) : String(Math.round(val));
  return [ref, display] as const;
}
