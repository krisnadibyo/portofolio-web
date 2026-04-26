"use client";

import type { CSSProperties } from "react";
import { Eyebrow, Icon } from "@/components/primitives";

const iconCoreStyle: CSSProperties = {
  padding: 0,
  overflow: "hidden",
  background: "none",
  boxShadow: "0 20px 60px -10px oklch(from var(--accent-c) l c h / 0.5)",
  position: "relative",
  zIndex: 1,
};

function ProjectKakiLima() {
  return (
    <div className="project glass reveal">
      <div className="project-tag">Side project · Founder</div>
      <div className="project-title" style={{ fontStyle: "italic" }}>
        KakiLima
      </div>
      <p className="project-desc">
        A location based commerce app connecting street vendors to the millions of Indonesians who live
        alongside them. Designed, built, and shipped end-to-end — Compose Multiplatform front-end,
        Go backend, Postgres, and Redis.
      </p>
      <a className="project-link" href="https://kakilima.app" target="_blank" rel="noopener noreferrer">
        kakilima.app <Icon name="ext" />
      </a>
      <div className="project-visual">
        <div className="orbit">
          <div className="ring r2" />
          <div className="ring r1" />
          <a
            className="core"
            style={iconCoreStyle}
            href="https://kakilima.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open KakiLima"
          >
            <img src="/kakilima.png" alt="KakiLima" width={80} height={80} />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectIndodana() {
  return (
    <div className="project glass reveal" style={{ "--reveal-delay": "100ms" } as CSSProperties}>
      <div className="project-tag">Flagship · Cermati</div>
      <div className="project-title">Indodana Finance & Fintech</div>
      <p className="project-desc">
        Finance super apps with 10M+ monthly users. Top 3 Leading fintech super apps in Indonesia. Leading the rewrite from imperative Views to Jetpack
        Compose, modularising the codebase, and shipping on-device AI with MLKit.
      </p>
      <a className="project-link" href="#" onClick={(e) => e.preventDefault()}>
        Enterprise · Fintech
      </a>
      <div className="project-visual">
        <div className="orbit">
          <div className="ring r2" />
          <div className="ring r1" />
          <a
            className="core"
            style={iconCoreStyle}
            href="https://play.google.com/store/apps/details?id=com.indodana.app&gl=ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Indodana"
          >
            <img
              src="/indodana.webp"
              alt="Indodana"
              width={80}
              height={80}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectIna() {
  return (
    <div className="project glass reveal">
      <div className="project-tag">Gov-scale · Edutech</div>
      <div className="project-title">Ruang GTK (Platform Merdeka Mengajar)</div>
      <p className="project-desc">
        Built from zero to 4M teachers. Highest-rated Indonesian government app — 4.9★ with 99.9%
        stability. Led 15 engineers across Mobile, Web, and QA platforms.
      </p>
      <a className="project-link" href="#" onClick={(e) => e.preventDefault()}>
        Case study on request
      </a>
      <div className="project-visual">
        <div className="orbit">
          <div className="ring r2" />
          <div className="ring r1" />
          <a
            className="core"
            style={iconCoreStyle}
            href="https://play.google.com/store/apps/details?id=id.belajar.app&hl=id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ina Digital Edu"
          >
            <img src="/pmm.webp" alt="Ina Digital Edu" width={80} height={80} />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectBL() {
  return (
    <div className="project glass reveal" style={{ "--reveal-delay": "100ms" } as CSSProperties}>
      <div className="project-tag">Scale · E-commerce</div>
      <div className="project-title">Bukalapak</div>
      <p className="project-desc">
        50M+ monthly users. one of largest e-commerce in Indonesia.
      </p>
      <a className="project-link" href="#" onClick={(e) => e.preventDefault()}>
        2014–2020
      </a>
      <div className="project-visual">
        <div className="orbit">
          <div className="ring r2" />
          <div className="ring r1" />
          <a
            className="core"
            style={iconCoreStyle}
            href="https://play.google.com/store/apps/details?id=com.bukalapak.android&hl=id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Bukalapak"
          >
            <img src="/bukalapak.webp" alt="Bukalapak" width={80} height={80} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" data-screen-label="04 Projects">
      <div className="reveal">
        <Eyebrow>Selected work</Eyebrow>
      </div>
      <h2 className="section-title reveal">
        Things I <em>shipped</em>.
      </h2>
      <div className="projects-grid">
        <ProjectIndodana />
        <ProjectIna />
        <ProjectBL />  
        <ProjectKakiLima />
      </div>
    </section>
  );
}
