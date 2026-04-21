import type { CSSProperties, ReactNode } from "react";
import { Eyebrow } from "@/components/primitives";

type Skill = {
  kicker: string;
  title: ReactNode;
  items: string[];
};

const SKILLS: Skill[] = [
  {
    kicker: "01 · Native mobile",
    title: (
      <>
        My <em>home turf</em>.
      </>
    ),
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Swift",
      "SwiftUI",
      "UIKit",
      "Java",
      "Objective-C",
      "Coroutines",
      "Combine",
      "Room",
      "CoreData",
    ],
  },
  {
    kicker: "02 · Cross-platform & web",
    title: (
      <>
        Where it <em>makes sense</em>.
      </>
    ),
    items: ["Compose Multiplatform", "React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    kicker: "03 · Backend & infra",
    title: (
      <>
        When I <em>have to</em>.
      </>
    ),
    items: ["Go", "Postgres", "Redis", "Docker", "GCP", "Gitlab CI", "Bitrise", "MLKit"],
  },
  {
    kicker: "04 · Leadership",
    title: (
      <>
        <em>Teams</em>, not just code.
      </>
    ),
    items: [
      "Engineering management",
      "15-engineer org",
      "3 teams",
      "Release management",
      "Hiring",
      "Performance reviews",
      "Mentorship",
    ],
  },
  {
    kicker: "05 · Domains",
    title: (
      <>
        Where I&apos;ve <em>shipped</em>.
      </>
    ),
    items: [
      "Fintech · Indodana",
      "Marketplace · Bukalapak",
      "Edutech · Ina Digital",
      "Hyperlocal · KakiLima",
      "Gov-scale",
    ],
  },
  {
    kicker: "06 · How I work",
    title: (
      <>
        Opinions I <em>hold lightly</em>.
      </>
    ),
    items: [
      "Stability > speed",
      "Small PRs",
      "Modular first",
      "Write the doc",
      "Hire better than you",
      "Ship weekly",
    ],
  },
];

function SkillCard({ kicker, title, items, index }: Skill & { index: number }) {
  return (
    <div
      className="skill-card glass reveal"
      style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
    >
      <div className="kicker">{kicker}</div>
      <h3>{title}</h3>
      <div className="skill-list">
        {items.map((i) => (
          <span className="tag" key={i}>
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" data-screen-label="05 Skills">
      <div className="reveal">
        <Eyebrow>What I do</Eyebrow>
      </div>
      <h2 className="section-title reveal">
        The <em>tools</em> in the belt.
      </h2>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <SkillCard key={i} index={i} {...s} />
        ))}
      </div>
    </section>
  );
}
