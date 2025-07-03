"use client";

import { TemplateSwitcher } from "../../../components/layout/template-switcher";
import { useState, useEffect, Suspense, lazy } from "react";

// Dynamic imports for all themes with error handling
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
const HomePageTheme12 = lazy(() => import("./theme-12"));
const HomePageTheme13 = lazy(() => import("./theme-13"));
const HomePageTheme14 = lazy(() => import("./theme-14"));
const HomePageTheme15 = lazy(() => import("./theme-15"));
const HomePageTheme16 = lazy(() => import("./theme-16"));
const HomePageTheme17 = lazy(() => import("./theme-17"));
const HomePageTheme18 = lazy(() => import("./theme-18"));
const HomePageTheme19 = lazy(() => import("./theme-19"));
const HomePageTheme20 = lazy(() => import("./theme-20"));
const HomePageTheme21 = lazy(() => import("./theme-21"));
const HomePageTheme22 = lazy(() => import("./theme-22"));
const HomePageTheme23 = lazy(() => import("./theme-23"));
const HomePageTheme24 = lazy(() => import("./theme-24"));
const HomePageTheme25 = lazy(() => import("./theme-25"));
const HomePageTheme26 = lazy(() => import("./theme-26"));
const HomePageTheme27 = lazy(() => import("./theme-27"));
const HomePageTheme28 = lazy(() => import("./theme-28"));
const HomePageTheme29 = lazy(() => import("./theme-29"));
const HomePageTheme30 = lazy(() => import("./theme-30"));
const HomePageTheme31 = lazy(() => import("./theme-31"));
const HomePageTheme32 = lazy(() => import("./theme-32"));
const HomePageTheme33 = lazy(() => import("./theme-33"));
const HomePageTheme34 = lazy(() => import("./theme-34"));
const HomePageTheme35 = lazy(() => import("./theme-35"));
const HomePageTheme36 = lazy(() => import("./theme-36"));
const HomePageTheme37 = lazy(() => import("./theme-37"));
const HomePageTheme38 = lazy(() => import("./theme-38"));
const HomePageTheme39 = lazy(() => import("./theme-39"));
const HomePageTheme40 = lazy(() => import("./theme-40"));
const HomePageTheme41 = lazy(() => import("./theme-41"));
const HomePageTheme42 = lazy(() => import("./theme-42"));
const HomePageTheme43 = lazy(() => import("./theme-43"));

// These themes might have issues, so we add error handling
const HomePageTheme44 = lazy(() => 
  import("./theme-44").catch(() => {
    console.warn("Theme 44 failed to load, falling back to Theme 1");
    return import("./theme-1");
  })
);
const HomePageTheme45 = lazy(() => 
  import("./theme-45").catch(() => {
    console.warn("Theme 45 failed to load, falling back to Theme 1");
    return import("./theme-1");
  })
);
const HomePageTheme46 = lazy(() => 
  import("./theme-46").catch(() => {
    console.warn("Theme 46 failed to load, falling back to Theme 1");
    return import("./theme-1");
  })
);
const HomePageTheme47 = lazy(() => 
  import("./theme-47").catch(() => {
    console.warn("Theme 47 failed to load, falling back to Theme 1");
    return import("./theme-1");
  })
);
const HomePageTheme48 = lazy(() => 
  import("./theme-48").catch(() => {
    console.warn("Theme 48 failed to load, falling back to Theme 1");
    return import("./theme-1");
  })
);
const HomePageTheme49 = lazy(() => 
  import("./theme-49").catch(() => {
    console.warn("Theme 49 failed to load, falling back to Theme 1");
    return import("./theme-1");
  })
);

export type LandingPageTheme = "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10" | "theme-11" | "theme-12" | "theme-13" | "theme-14" | "theme-15" | "theme-16" | "theme-17" | "theme-18" | "theme-19" | "theme-20" | "theme-21" | "theme-22" | "theme-23" | "theme-24" | "theme-25" | "theme-26" | "theme-27" | "theme-28" | "theme-29" | "theme-30" | "theme-31" | "theme-32" | "theme-33" | "theme-34" | "theme-35" | "theme-36" | "theme-37" | "theme-38" | "theme-39" | "theme-40" | "theme-41" | "theme-42" | "theme-43" | "theme-44" | "theme-45" | "theme-46" | "theme-47" | "theme-48" | "theme-49";

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
      case "theme-12":
        return <HomePageTheme12 />;
      case "theme-13":
        return <HomePageTheme13 />;
      case "theme-14":
        return <HomePageTheme14 />;
      case "theme-15":
        return <HomePageTheme15 />;
      case "theme-16":
        return <HomePageTheme16 />;
      case "theme-17":
        return <HomePageTheme17 />;
      case "theme-18":
        return <HomePageTheme18 />;
      case "theme-19":
        return <HomePageTheme19 />;
      case "theme-20":
        return <HomePageTheme20 />;
      case "theme-21":
        return <HomePageTheme21 />;
      case "theme-22":
        return <HomePageTheme22 />;
      case "theme-23":
        return <HomePageTheme23 />;
      case "theme-24":
        return <HomePageTheme24 />;
      case "theme-25":
        return <HomePageTheme25 />;
      case "theme-26":
        return <HomePageTheme26 />;
      case "theme-27":
        return <HomePageTheme27 />;
      case "theme-28":
        return <HomePageTheme28 />;
      case "theme-29":
        return <HomePageTheme29 />;
      case "theme-30":
        return <HomePageTheme30 />;
      case "theme-31":
        return <HomePageTheme31 />;
      case "theme-32":
        return <HomePageTheme32 />;
      case "theme-33":
        return <HomePageTheme33 />;
      case "theme-34":
        return <HomePageTheme34 />;
      case "theme-35":
        return <HomePageTheme35 />;
      case "theme-36":
        return <HomePageTheme36 />;
      case "theme-37":
        return <HomePageTheme37 />;
      case "theme-38":
        return <HomePageTheme38 />;
      case "theme-39":
        return <HomePageTheme39 />;
      case "theme-40":
        return <HomePageTheme40 />;
      case "theme-41":
        return <HomePageTheme41 />;
      case "theme-42":
        return <HomePageTheme42 />;
      case "theme-43":
        return <HomePageTheme43 />;
      case "theme-44":
        return <HomePageTheme44 />;
      case "theme-45":
        return <HomePageTheme45 />;
      case "theme-46":
        return <HomePageTheme46 />;
      case "theme-47":
        return <HomePageTheme47 />;
      case "theme-48":
        return <HomePageTheme48 />;
      case "theme-49":
        return <HomePageTheme49 />;
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
