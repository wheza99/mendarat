import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Theme23() {
  return (
    <div className="bio-organic-naturalism-theme">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
