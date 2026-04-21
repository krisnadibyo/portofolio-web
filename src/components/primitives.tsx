"use client";

import type { ReactNode, SVGProps } from "react";
import { useCountUp } from "@/hooks/useCountUp";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function Stat({
  num,
  suffix = "",
  label,
  decimals = 0,
}: {
  num: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const [ref, val] = useCountUp(num, { decimals });
  return (
    <div className="stat reveal" ref={ref}>
      <div className="stat-num">
        {val}
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const ICON_PATHS: Record<string, string> = {
  pin: "M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock:
    "M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm1 4v4.5l3 1.7-.8 1.3L11 13V8h2z",
  globe:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm7.9 9h-3a15 15 0 00-1.1-5A8 8 0 0119.9 11zM12 4.1c1 1.2 1.8 3.3 2 6.9h-4c.2-3.6 1-5.7 2-6.9zM4.1 13h3a15 15 0 001.1 5A8 8 0 014.1 13zm1.9-2a8 8 0 014.2-5.9A14 14 0 009 11H6zm8 0c-.2-2.5-.7-4.6-1.4-5.9A8 8 0 0118 11h-4zm-4 2h4c-.2 2.5-.7 4.6-1.4 5.9A8 8 0 0110 13zm-4 0h3c.2 2.5.7 4.6 1.4 5.9A8 8 0 016 13z",
  mail: "M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-11zm2 .5v.3l7 4.2 7-4.2V7H5zm14 2.7l-7 4.2-7-4.2V17h14V9.7z",
  ext: "M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zm-9 4h6v2H7v10h10v-4h2v6H5V7z",
};

export function Icon({
  name,
  size = 14,
  ...rest
}: { name: keyof typeof ICON_PATHS; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...rest}>
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
