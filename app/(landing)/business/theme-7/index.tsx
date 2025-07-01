"use client";

import { useEffect } from "react";
import { BusinessData } from "../page";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

interface BusinessTheme7Props {
  data: BusinessData;
}

export default function BusinessTheme7({ data }: BusinessTheme7Props) {
  console.log("🚀 BusinessTheme7 component rendered with data:", data.name);
  
  useEffect(() => {
    console.log("🎨 Setting CSS variables for Digital Horizon theme");
    // Set CSS variables for Digital Horizon theme
    const root = document.documentElement;
    root.style.setProperty('--primary-color', data.primary_color || '#06b6d4'); // Cyan
    root.style.setProperty('--secondary-color', data.secondary_color || '#3b82f6'); // Blue
    root.style.setProperty('--accent-color', '#8b5cf6'); // Purple
    root.style.setProperty('--background-color', data.metadata?.background || '#111827'); // Dark Gray
    root.style.setProperty('--text-color', '#ffffff'); // White
  }, [data]);

  return (
    <div className="theme-7-digital-horizon bg-gray-950 text-white overflow-x-hidden">
      <Hero data={data} />
      <Stats data={data} />
      <Services data={data} />
      <Projects data={data} />
      <Contact data={data} />
    </div>
  );
} 