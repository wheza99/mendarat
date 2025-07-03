"use client";

import { TemplateSwitcher } from "../../../components/layout/template-switcher";
import { useState, useEffect, Suspense, lazy } from "react";

// Dynamic imports for all themes to prevent ChunkLoadError
const HomePageTheme1 = lazy(() => import("./theme-1"));
const HomePageTheme2 = lazy(() => import("./theme-2"));
const HomePageTheme3 = lazy(() => import("./theme-3"));
const HomePageTheme4 = lazy(() => import("./theme-4"));
const HomePageTheme5 = lazy(() => import("./theme-5"));
const HomePageTheme6 = lazy(() => import("./theme-6"));
const HomePageTheme7 = lazy(() => import("./theme-7"));
const HomePageTheme8 = lazy(() => import("./theme-8"));
const HomePageTheme9 = lazy(() => import("./theme-9"));
const HomePageTheme10 = lazy(() => import("./theme-10"));
const HomePageTheme11 = lazy(() => import("./theme-11"));
const HomePageTheme14 = lazy(() => import("./theme-14"));
const Theme12 = lazy(() => import("./theme-12"));
const Theme13 = lazy(() => import("./theme-13"));
const Theme15 = lazy(() => import("./theme-15"));
const Theme16 = lazy(() => import("./theme-16"));
const Theme17 = lazy(() => import("./theme-17"));
const Theme18 = lazy(() => import("./theme-18"));
const Theme19 = lazy(() => import("./theme-19"));
const Theme20 = lazy(() => import("./theme-20"));
const Theme21 = lazy(() => import("./theme-21"));
const Theme22 = lazy(() => import("./theme-22"));
const Theme23 = lazy(() => import("./theme-23"));
const Theme24 = lazy(() => import("./theme-24"));
const Theme25 = lazy(() => import("./theme-25"));
const Theme26 = lazy(() => import("./theme-26"));
const Theme27 = lazy(() => import("./theme-27"));
const Theme28 = lazy(() => import("./theme-28"));
const Theme29 = lazy(() => import("./theme-29"));
const Theme30 = lazy(() => import("./theme-30"));
const Theme31 = lazy(() => import("./theme-31"));
const Theme32 = lazy(() => import("./theme-32"));
const Theme33 = lazy(() => import("./theme-33"));
const Theme34 = lazy(() => import("./theme-34"));
const Theme35 = lazy(() => import("./theme-35"));
const Theme36 = lazy(() => import("./theme-36"));
const Theme37 = lazy(() => import("./theme-37"));
const Theme38 = lazy(() => import("./theme-38"));
const Theme39 = lazy(() => import("./theme-39"));
const Theme40 = lazy(() => import("./theme-40"));
const Theme41 = lazy(() => import("./theme-41"));
const Theme42 = lazy(() => import("./theme-42"));
const Theme43 = lazy(() => import("./theme-43"));
const Theme44 = lazy(() => import("./theme-44"));

export type LandingPageTheme = "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10" | "theme-11" | "theme-14" | "theme-12" | "theme-13" | "theme-15" | "theme-16" | "theme-17" | "theme-18" | "theme-19" | "theme-20" | "theme-21" | "theme-22" | "theme-23" | "theme-24" | "theme-25" | "theme-26" | "theme-27" | "theme-28" | "theme-29" | "theme-30" | "theme-31" | "theme-32" | "theme-33" | "theme-34" | "theme-35" | "theme-36" | "theme-37" | "theme-38" | "theme-39" | "theme-40" | "theme-41" | "theme-42" | "theme-43" | "theme-44";

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-mono">Loading theme...</p>
    </div>
  </div>
);

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState<LandingPageTheme>("theme-44");
  
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
      case "theme-38":
        return <Theme38 />;
      case "theme-39":
        return <Theme39 />;
      case "theme-40":
        return <Theme40 />;
      case "theme-41":
        return <Theme41 />;
      case "theme-42":
        return <Theme42 />;
      case "theme-43":
        return <Theme43 />;
      case "theme-44":
        return <Theme44 />;
      default:
        return <HomePageTheme1 />;
    }
  };

  return (
    <>
      <TemplateSwitcher onThemeChange={handleThemeChange} activeTheme={activeTheme} />
      <Suspense fallback={<LoadingFallback />}>
        {renderTheme()}
      </Suspense>
    </>
  );
}
