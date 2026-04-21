import type { CSSProperties } from "react";
import { Eyebrow } from "@/components/primitives";

type Job = {
  role: string;
  highlight?: string;
  company: string;
  period: string;
  current?: boolean;
  desc: string;
  tags: string[];
};

const JOBS: Job[] = [
  {
    role: "Principal Software Engineer",
    highlight: "Android & iOS",
    company: "PT Cermati Fintech Group — Indodana",
    period: "Oct 2025 – Now",
    current: true,
    desc: "Architect and maintain one of Cermati's flagship products, Indodana. Driving engineering excellence — improving code quality, migrating View → Compose, modularising the monorepo, and implementing on-device AI agents inside the native apps.",
    tags: ["Android", "Jetpack Compose", "Kotlin", "MLKit", "Bitrise", "Swift", "SwiftUI", "UIKit"],
  },
  {
    role: "Co-Founder & Fullstack Software Engineer",
    company: "KakiLima (Stealth Startup)",
    period: "Apr 2025 – Now",
    current: true,
    desc: "Doing everything end-to-end: product planning, UI/UX, system design, infra, backend, and native mobile apps. A solo-founded side bet on hyperlocal commerce — kakilima.app.",
    tags: ["Kotlin", "Swift", "Compose Multiplatform", "Go", "Postgres", "Redis", "Docker", "Figma"],
  },
  {
    role: "Senior Software Engineering Manager",
    highlight: "Mobile · Web · QA",
    company: "PT Metra-net — Ina Digital Edu",
    period: "Apr 2020 – Dec 2024",
    desc: "Led 15 engineers across 3 teams. Built an education super-app from scratch serving 4M teachers across Indonesia — the highest-rated government app at 4.9★ with 99.9% stability. Scaled QA automation and performance testing to handle 5,000+ RPS.",
    tags: [
      "Engineering Management",
      "Android",
      "Kotlin",
      "Compose",
      "React",
      "Next.js",
      "Go",
      "GCP",
    ],
  },
  {
    role: "Senior Software Engineer & Release Manager",
    company: "PT Bukalapak",
    period: "Dec 2014 – Mar 2020",
    desc: "Built core features of the Bukalapak marketplace (50M+ MAU) across Android & iOS. Shipped real-time chat over WebSocket, rescued payments (success rate 70% → 90%). As release manager, compressed release cycles from 3 weeks to 2, delivering 30 features per release.",
    tags: ["Android", "iOS", "Java", "Kotlin", "Swift", "Objective-C", "Release Management"],
  },
];

function Job({ job, index }: { job: Job; index: number }) {
  return (
    <div
      className="job glass reveal"
      data-current={job.current ? "true" : "false"}
      style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
    >
      <div className="job-head">
        <div>
          <div className="job-role">
            {job.role}
            {job.highlight && (
              <>
                <em> · {job.highlight}</em>
              </>
            )}
          </div>
          <div className="job-company">{job.company}</div>
        </div>
        <div className="job-meta">
          {job.current && (
            <div className="current">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "oklch(0.82 0.18 150)",
                  boxShadow: "0 0 8px oklch(0.82 0.18 150)",
                }}
              />{" "}
              Current
            </div>
          )}
          <div>{job.period}</div>
        </div>
      </div>
      <p className="job-desc">{job.desc}</p>
      <div className="job-tags">
        {job.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" data-screen-label="03 Experience">
      <div className="reveal">
        <Eyebrow>Experience</Eyebrow>
      </div>
      <h2 className="section-title reveal">
        The <em>work</em>, in order.
      </h2>
      <div className="timeline">
        {JOBS.map((j, i) => (
          <Job job={j} index={i} key={i} />
        ))}
      </div>
    </section>
  );
}
