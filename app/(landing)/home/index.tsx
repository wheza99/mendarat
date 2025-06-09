"use client";

import HomePageTheme1 from "./theme-1";
import HomePageTheme2 from "./theme-2";
import HomePageTheme3 from "./theme-3";
import HomePageTheme4 from "./theme-4";
import HomePageTheme5 from "./theme-5";
import HomePageTheme6 from "./theme-6";
import HomePageTheme7 from "./theme-7";
import HomePageTheme8 from "./theme-8";
import HomePageTheme9 from "./theme-9";
import HomePageTheme10 from "./theme-10";
import HomePageTheme11 from "./theme-11";
import HomePageTheme14 from "./theme-14";
import Theme12 from "./theme-12";
import Theme13 from "./theme-13";
import { TemplateSwitcher } from "../../../components/layout/template-switcher";
import { useState, useEffect } from "react";

export type LandingPageTheme = "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10" | "theme-11" | "theme-14" | "theme-12" | "theme-13";

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState<LandingPageTheme>("theme-1");
  
  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme as LandingPageTheme);
  };

  // Render the appropriate theme component based on activeTheme
  const renderTheme = () => {
    switch (activeTheme) {
      case "theme-1":
        return <HomePageTheme1 />;
      case "theme-2":
        return <HomePageTheme2 />;
      case "theme-3":
        return <HomePageTheme3 />;
      case "theme-4":
        return <HomePageTheme4 />;
      case "theme-5":
        return <HomePageTheme5 />;
      case "theme-6":
        return <HomePageTheme6 />;
      case "theme-7":
        return <HomePageTheme7 />;
      case "theme-8":
        return <HomePageTheme8 />;
      case "theme-9":
        return <HomePageTheme9 />;
      case "theme-10":
        return <HomePageTheme10 />;
      case "theme-11":
        return <HomePageTheme11 />;
      case "theme-14":
        return <HomePageTheme14 />;
      case "theme-12":
        return <Theme12 />;
      case "theme-13":
        return <Theme13 />;
      default:
        return <HomePageTheme1 />;
    }
  };

  return (
    <>
      <TemplateSwitcher onThemeChange={handleThemeChange} activeTheme={activeTheme} />
      {renderTheme()}
    </>
  );
}
