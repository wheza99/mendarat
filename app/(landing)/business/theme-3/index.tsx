import { BusinessData } from "../page";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

interface BusinessTheme3Props {
  businessData: BusinessData;
}

export default function BusinessTheme3({ businessData }: BusinessTheme3Props) {
  return (
    <div style={{ 
      '--primary-color': businessData.primary_color,
      '--secondary-color': businessData.secondary_color 
    } as React.CSSProperties}>
      <Hero businessData={businessData} />
      <Stats businessData={businessData} />
      <Services businessData={businessData} />
      <Projects businessData={businessData} />
      <Contact businessData={businessData} />
    </div>
  );
} 