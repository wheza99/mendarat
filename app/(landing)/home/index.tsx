"use client";

import HomePageTheme1 from "./theme-1";
import HomePageTheme2 from "./theme-2";
import { useState } from "react";

export default function HomePage() {
  // You can toggle between themes or implement a theme switcher
  // For now, we'll use theme-2 as the default
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2">("theme-2");

  return (
    <>
      {activeTheme === "theme-1" ? <HomePageTheme1 /> : <HomePageTheme2 />}
    </>
  );
}
