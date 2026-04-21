import type { CSSProperties } from "react";
import { Eyebrow, Stat } from "@/components/primitives";

export function About() {
  return (
    <section id="about" data-screen-label="02 About">
      <div className="reveal">
        <Eyebrow>About</Eyebrow>
      </div>
      <h2 className="section-title reveal">
        Eleven years of building
        <br />
        things people <em>actually use</em>.
      </h2>

      <div className="about">
        <div className="about-text reveal">
          <p className="lede">
            I&apos;ve worn most of the hats — <strong>Software Engineer, Engineering Manager, and Release Manager</strong>.
            Today I architect native mobile at Cermati Fintech Group while co-building KakiLima — a
            location based commerce app — from scratch on the side.
          </p>
          <p className="lede">
            My favourite work sits where <em>stability meets performance</em>: migrating legacy Views to
            Compose, breaking monolith apps into modules, running local AI models on-device, and
            shaping teams that ship without burning out.
          </p>
          <p className="lede" style={{ color: "var(--ink-faint)", fontSize: "0.95rem" }}>
            Outside of work I&apos;m a recovering tea maximalist and a very amateur runner.
          </p>
        </div>

        <div
          className="relocate glass reveal"
          style={{ "--reveal-delay": "150ms" } as CSSProperties}
        >
          <div className="relocate-row">
            <div className="relocate-title">Open to relocation.</div>
            <div className="relocate-badge">
              <span className="dot" />
              Active
            </div>
          </div>
          <p>
            Actively looking for my next long-term home. Strong preference for{" "}
            <strong style={{ color: "var(--ink)" }}>Europe</strong> — open to
            anywhere in the world. Visa sponsorship welcome; I&apos;m ready to move.
          </p>
          <div className="cities">
            <span className="city">🇳🇱 Netherlands</span>
            <span className="city">🇩🇪 Germany</span>
            <span className="city">🇬🇧 UK</span>
            <span className="city">🇪🇸 Spain</span>
            <span className="city">+ more</span>
          </div>
        </div>
      </div>

      <div className="stats">
        <Stat num={11} suffix="yrs" label="Years shipping software" />
        <Stat num={50} suffix="M" label="MAU at Bukalapak" />
        <Stat num={4} suffix="M" label="Teachers served at INA Digital Edu" />
        <Stat num={99.9} decimals={1} suffix="%" label="App stability at scale" />
      </div>
    </section>
  );
}
