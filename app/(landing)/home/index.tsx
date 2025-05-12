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
import ThemeSwitcher from "./theme-switcher";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10">("theme-1");
  
  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme as "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10");
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
      default:
        return <HomePageTheme1 />;
    }
  };

  return (
    <>
      <ThemeSwitcher onThemeChange={handleThemeChange} activeTheme={activeTheme} />
      {renderTheme()}
    </>
  );
}
