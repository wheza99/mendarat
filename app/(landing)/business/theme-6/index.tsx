"use client";

import { BusinessData } from "../page";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

interface BusinessTheme6Props {
  data: BusinessData;
}

export default function BusinessTheme6({ data }: BusinessTheme6Props) {
  console.log('🌿 BusinessTheme6 Natural Elegance rendering with data:', data);
  
  if (!data) {
    console.error('❌ BusinessTheme6: No data provided');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Business Theme-6</h1>
          <p>Natural Elegance - No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* CSS Variables for Dynamic Theming */}
      <style jsx global>{`
        :root {
          --theme-primary: ${data.primary_color || '#0d9488'};
          --theme-secondary: ${data.secondary_color || '#059669'};
          --theme-accent: #14b8a6;
          --theme-background: #f0fdfa;
          --theme-surface: #ffffff;
          --theme-text: #1f2937;
          --theme-text-light: #6b7280;
        }
      `}</style>
      
      {/* Test Header */}
      <div className="fixed top-4 left-4 z-50 bg-teal-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-lg border border-teal-300/20">
        <p className="text-sm font-bold">🌿 Natural Elegance Theme-6</p>
        <p className="text-xs text-teal-200">{data.name}</p>
      </div>
      
      {/* Hero Section */}
      <Hero data={data} />
      
      {/* Stats Section */}
      <Stats data={data} />
      
      {/* Services Section */}
      <Services data={data} />
      
      {/* Projects Section */}
      <Projects data={data} />
      
      {/* Contact Section */}
      <Contact data={data} />
    </div>
  );
} 