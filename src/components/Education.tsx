import { Eyebrow } from "@/components/primitives";

export function Education() {
  return (
    <section id="education" data-screen-label="06 Education">
      <div className="reveal">
        <Eyebrow>Education</Eyebrow>
      </div>
      <h2 className="section-title reveal">
        Where I <em>started</em>.
      </h2>
      <div className="education glass reveal">
        <div className="edu-icon">
          <img src="/itb_logo.png" alt="ITB" width={80} height={80} />
        </div>
        <div>
          <div className="edu-title">Bachelor in Informatics Engineering</div>
          <div className="edu-sub">Bandung Institute of Technology · Indonesia</div>
          <div className="edu-note">
            GPA 3.47 / 4.00 · Final project on gamification in LMS platforms
          </div>
        </div>
        <div className="edu-meta">2010 — 2014</div>
      </div>
    </section>
  );
}
