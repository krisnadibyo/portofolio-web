import { About } from "@/components/About";
import { AppShell } from "@/components/AppShell";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Page() {
  return (
    <AppShell>
      <main>
        <Hero />
      </main>
      {/* <Marquee /> */}
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </AppShell>
  );
}
