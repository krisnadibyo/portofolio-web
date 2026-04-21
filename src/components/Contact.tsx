import { Eyebrow, Icon } from "@/components/primitives";

export function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="07 Contact">
      <div className="reveal">
        <Eyebrow>Let&apos;s talk</Eyebrow>
      </div>
      <h2 className="reveal">
        Got an app that
        <br />
        needs to <em>scale</em>?
      </h2>
      <p className="lede reveal">
        I&apos;m actively looking for my next role — staff-level mobile or engineering leadership,
        ideally in Europe. If you&apos;re hiring, let&apos;s chat.
      </p>

      <div className="social reveal">
        <a href="https://github.com/krisnadibyo" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Krisna Dibyo Atmojo · Jakarta, GMT+7</div>
        <div>Built with care · Hand-coded · No templates</div>
      </div>
    </section>
  );
}
