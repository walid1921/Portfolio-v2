import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Test from "@/components/test";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Test />
      {/* <Skills /> */}
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
