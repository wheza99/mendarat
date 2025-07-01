"use client";

import { BusinessData } from "../page";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

interface BusinessTheme4Props {
  businessData: BusinessData;
}

export default function BusinessTheme4({ businessData }: BusinessTheme4Props) {
  return (
    <div style={{
      '--primary-color': businessData.primary_color || '#047857',
      '--secondary-color': businessData.secondary_color || '#065F46',
      '--accent-color': '#ECFDF5',
    } as React.CSSProperties}>
      <Hero businessData={businessData} />
      <Stats businessData={businessData} />
      <Services businessData={businessData} />
      <Projects businessData={businessData} />
      <Contact businessData={businessData} />
    </div>
  );
} 