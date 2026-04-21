const STACK = [
  "Kotlin",
  "Java",
  "Jetpack Compose",
  "Swift",
  "SwiftUI",
  "Kotlin MultiPlatform",
  "Go",
  "Spring Boot",
  "React JS",
  "Postgres",
  "Redis",
  "Kafka",
  "Docker",
  "GCP",
  "Bitrise",
  "MLKit",
  "Claude Code",
];

export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span className="marquee-item" key={i}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
