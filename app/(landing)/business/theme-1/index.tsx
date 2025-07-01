import { BusinessData } from "../page";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Contact from "./components/contact";

interface BusinessTheme1Props {
  businessData: BusinessData;
}

export default function BusinessTheme1({ businessData }: BusinessTheme1Props) {
  return (
    <div style={{ 
      '--primary-color': businessData.primary_color,
      '--secondary-color': businessData.secondary_color 
    } as React.CSSProperties}>
      <Hero businessData={businessData} />
      <Stats businessData={businessData} />
      <Services businessData={businessData} />
      <Contact businessData={businessData} />
    </div>
  );
} 