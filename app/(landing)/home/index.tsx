"use client";

import HomePageTheme1 from "./theme-1";
import HomePageTheme2 from "./theme-2";
import HomePageTheme3 from "./theme-3";
import HomePageTheme4 from "./theme-4";
import HomePageTheme5 from "./theme-5";
import HomePageTheme6 from "./theme-6";
import ThemeSwitcher from "./theme-switcher";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6">("theme-1");
  
  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme as "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6");
  };

  return (
    <>
      <ThemeSwitcher onThemeChange={handleThemeChange} activeTheme={activeTheme} />
      {activeTheme === "theme-1" ? <HomePageTheme1 /> : 
       activeTheme === "theme-2" ? <HomePageTheme2 /> : 
       activeTheme === "theme-3" ? <HomePageTheme3 /> : 
       activeTheme === "theme-4" ? <HomePageTheme4 /> : 
       activeTheme === "theme-5" ? <HomePageTheme5 /> :
       <HomePageTheme6 />
      }
    </>
  );
}
