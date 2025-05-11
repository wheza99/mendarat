"use client";

import HomePageTheme1 from "./theme-1";
import HomePageTheme2 from "./theme-2";
import HomePageTheme3 from "./theme-3";
import { useState } from "react";

export default function HomePage() {
  // You can toggle between themes or implement a theme switcher
  // For now, we'll use theme-2 as the default
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3">("theme-3");

  return (
    <>
      {activeTheme === "theme-1" ? <HomePageTheme1 /> : activeTheme === "theme-2" ? <HomePageTheme2 /> : <HomePageTheme3 />}
    </>
  );
}
