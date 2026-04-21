export function Nav() {
  return (
    <nav className="nav">
      <div className="brand">
        <span className="dot" />
        <span>krisnad.tech</span>
      </div>
      <div className="mid-links" style={{ display: "flex", gap: 2 }}>
        <a href="#about">About</a>
        <a href="#experience">Work</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
