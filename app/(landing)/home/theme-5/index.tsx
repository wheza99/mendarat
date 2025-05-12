"use client";

// Import components directly
// @ts-ignore - Ignoring TypeScript errors for component imports
import Hero from "./components/hero";
// @ts-ignore
import Stats from "./components/stats";
// @ts-ignore
import Services from "./components/services";
// @ts-ignore
import Projects from "./components/projects";
// @ts-ignore
import Team from "./components/team";
// @ts-ignore
import Clients from "./components/clients";
// @ts-ignore
import Process from "./components/process";
// @ts-ignore
import Testimonials from "./components/testimonials";
// @ts-ignore
import Pricing from "./components/pricing";
// @ts-ignore
import Contact from "./components/contact";

export default function HomePageTheme5() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Team />
      <Clients />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
