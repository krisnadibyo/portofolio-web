"use client";

import { useMemo, type CSSProperties } from "react";
import { Eyebrow, Icon } from "@/components/primitives";
import { useMouse } from "@/hooks/useMouse";
import { useScrollY } from "@/hooks/useScrollY";

function Avatar() {
  const { x, y } = useMouse();
  const tilt = useMemo(() => {
    if (typeof window === "undefined" || (x === 0 && y === 0)) return { rx: 0, ry: 0 };
    const w = window.innerWidth;
    const h = window.innerHeight;
    return { rx: (y / h - 0.5) * -6, ry: (x / w - 0.5) * 8 };
  }, [x, y]);

  return (
    <div
      className="avatar"
      style={{
        transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.14 200)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.76 0.17 310)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="gradBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.15 30)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="oklch(0.76 0.17 310)" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="gradGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.82 0.14 200)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="90" fill="url(#gradGlow)">
          <animate attributeName="r" values="80;95;80" dur="6s" repeatCount="indefinite" />
        </circle>

        <path d="M40 220 L60 165 L140 165 L160 220 Z" fill="url(#gradBody)" opacity="0.85" />
        <rect x="90" y="140" width="20" height="30" fill="url(#gradFace)" opacity="0.7" />

        <path
          d="M 60 70 Q 60 30 100 30 Q 140 30 140 70 L 140 105 Q 140 145 100 145 Q 60 145 60 105 Z"
          fill="url(#gradFace)"
        />

        <rect x="62" y="78" width="76" height="18" rx="9" fill="oklch(0.12 0.03 270)" opacity="0.85" />
        <circle cx="82" cy="87" r="2.5" fill="oklch(0.82 0.14 200)">
          <animate attributeName="opacity" values="1;0.2;1" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="118" cy="87" r="2.5" fill="oklch(0.82 0.14 200)">
          <animate attributeName="opacity" values="1;0.2;1" dur="4s" begin="0.2s" repeatCount="indefinite" />
        </circle>

        <path
          d="M88 118 Q100 125 112 118"
          stroke="oklch(0.12 0.03 270)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />

        <circle cx="142" cy="105" r="4" fill="oklch(0.78 0.15 30)">
          <animate attributeName="cy" values="105;102;105" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function PhoneMock() {
  const { x, y } = useMouse();
  const tilt = useMemo(() => {
    if (typeof window === "undefined" || (x === 0 && y === 0)) return { rx: 0, ry: 0 };
    const w = window.innerWidth;
    const h = window.innerHeight;
    return { rx: (y / h - 0.5) * 10, ry: (x / w - 0.5) * -14 };
  }, [x, y]);

  const distances = ["0.2km", "0.5km", "1.1km"];

  return (
    <div
      className="phone"
      style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) rotate(6deg)` }}
    >
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-app-header">
          <div className="dot" />
          <div>
            <div
              className="label"
              style={{ color: "var(--ink)", fontSize: "0.72rem", marginBottom: 2 }}
            >
              KakiLima
            </div>
            <div className="label">5,231 vendors nearby</div>
          </div>
        </div>
        {[0, 1, 2].map((i) => (
          <div className="phone-row" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="avatar-mini" />
            <div className="lines">
              <i />
              <i />
            </div>
            <div
              style={{ fontSize: "0.55rem", color: "var(--accent-a)", fontFamily: "var(--font-geist-mono)" }}
            >
              {distances[i]}
            </div>
          </div>
        ))}
        <div className="phone-chart">
          <svg viewBox="0 0 200 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.14 200)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.82 0.14 200)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 45 L25 38 L50 42 L75 22 L100 28 L125 15 L150 20 L175 8 L200 12 L200 60 L0 60 Z"
              fill="url(#chartG)"
            />
            <path
              d="M0 45 L25 38 L50 42 L75 22 L100 28 L125 15 L150 20 L175 8 L200 12"
              stroke="oklch(0.82 0.14 200)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="code-card glass">
      <div className="code-line">
        <span className="dim">{"// building.kt"}</span>
      </div>
      <div className="code-line">
        <span className="kw">suspend fun</span> <span className="fn">scale</span>(users: {" "}
        <span className="kw">Int</span>) = {"{"}
      </div>
      <div className="code-line">&nbsp;&nbsp;withContext(IO) {"{"}</div>
      <div className="code-line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">deploy</span>(<span className="str">&quot;v4.2.0&quot;</span>)
      </div>
      <div className="code-line">&nbsp;&nbsp;{"}"}</div>
      <div className="code-line">{"}"}</div>
    </div>
  );
}

export function Hero() {
  const scrollY = useScrollY();
  const parallax = Math.min(scrollY * 0.15, 120);

  const stageStyle = {
    "--reveal-delay": "200ms",
    transform: `translateY(${-parallax * 0.3}px)`,
  } as CSSProperties;

  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <div>
        <div className="reveal">
          <Eyebrow>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "oklch(0.82 0.18 150)",
                  boxShadow: "0 0 8px oklch(0.82 0.18 150)",
                }}
              />
              Available — open to relocate, especially Europe
            </span>
          </Eyebrow>
        </div>

        <h1 className="hero-title reveal" style={{ "--reveal-delay": "100ms" } as CSSProperties}>
          Hi, I&apos;m <em>Krisna</em>.<br />
          <span className="soft">I build mobile</span>
          <br />
          <span className="soft">apps that scale.</span>
        </h1>

        <p className="hero-sub reveal" style={{ "--reveal-delay": "200ms" } as CSSProperties}>
          Staff Software Engineer with <strong style={{ color: "var(--ink)" }}>11 years</strong> shipping
          native Android, iOS &amp; multiplatform apps — from marketplaces with 50M MAU to gov-scale
          edutech serving 4M teachers across Indonesia.
        </p>

        <div className="btn-group reveal" style={{ "--reveal-delay": "300ms" } as CSSProperties}>
          <a className="btn" href="mailto:krisnatmojo@gmail.com">
            Email me
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H9M17 7V15" />
            </svg>
          </a>
        </div>

        <div className="hero-meta reveal" style={{ "--reveal-delay": "400ms" } as CSSProperties}>
          <span>
            <Icon name="pin" /> Jakarta, Indonesia
          </span>
          <span>
            <Icon name="globe" /> Open worldwide · EU preferred
          </span>
          <span>
            <Icon name="clock" /> GMT+7
          </span>
        </div>
      </div>

      <div className="stage reveal" style={stageStyle}>
        <Avatar />
        <CodeCard />
        <PhoneMock />
      </div>
    </section>
  );
}
