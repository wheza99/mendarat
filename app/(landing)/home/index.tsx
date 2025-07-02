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
import Theme15 from "./theme-15";
import Theme16 from "./theme-16";
import Theme17 from "./theme-17";
import Theme18 from "./theme-18";
import Theme19 from "./theme-19";
import Theme20 from "./theme-20";
import Theme21 from "./theme-21";
import Theme22 from "./theme-22";
import Theme23 from "./theme-23";
import Theme24 from "./theme-24";
import Theme25 from "./theme-25";
import Theme26 from "./theme-26";
import Theme27 from "./theme-27";
import Theme28 from "./theme-28";
import Theme29 from "./theme-29";
import Theme30 from "./theme-30";
import Theme31 from "./theme-31";
import Theme32 from "./theme-32";
import Theme33 from "./theme-33";
import Theme34 from "./theme-34";
import Theme35 from "./theme-35";
import Theme36 from "./theme-36";
import Theme37 from "./theme-37";
import { TemplateSwitcher } from "../../../components/layout/template-switcher";
import { useState, useEffect } from "react";

export type LandingPageTheme = "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10" | "theme-11" | "theme-14" | "theme-12" | "theme-13" | "theme-15" | "theme-16" | "theme-17" | "theme-18" | "theme-19" | "theme-20" | "theme-21" | "theme-22" | "theme-23" | "theme-24" | "theme-25" | "theme-26" | "theme-27" | "theme-28" | "theme-29" | "theme-30" | "theme-31" | "theme-32" | "theme-33" | "theme-34" | "theme-35" | "theme-36" | "theme-37";

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
      case "theme-15":
        return <Theme15 />;
      case "theme-16":
        return <Theme16 />;
      case "theme-17":
        return <Theme17 />;
      case "theme-18":
        return <Theme18 />;
      case "theme-19":
        return <Theme19 />;
      case "theme-20":
        return <Theme20 />;
      case "theme-21":
        return <Theme21 />;
      case "theme-22":
        return <Theme22 />;
      case "theme-23":
        return <Theme23 />;
      case "theme-24":
        return <Theme24 />;
      case "theme-25":
        return <Theme25 />;
      case "theme-26":
        return <Theme26 />;
      case "theme-27":
        return <Theme27 />;
      case "theme-28":
        return <Theme28 />;
      case "theme-29":
        return <Theme29 />;
      case "theme-30":
        return <Theme30 />;
      case "theme-31":
        return <Theme31 />;
      case "theme-32":
        return <Theme32 />;
      case "theme-33":
        return <Theme33 />;
      case "theme-34":
        return <Theme34 />;
      case "theme-35":
        return <Theme35 />;
      case "theme-36":
        return <Theme36 />;
      case "theme-37":
        return <Theme37 />;
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
