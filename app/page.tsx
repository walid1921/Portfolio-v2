import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Hero from "@/components/hero";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
