"use client";

import { useState, useEffect } from "react";

interface ThemeSwitcherProps {
  onThemeChange: (theme: string) => void;
  activeTheme: string;
}

export default function ThemeSwitcher({ onThemeChange, activeTheme }: ThemeSwitcherProps) {
  const themes = ["theme-1", "theme-2", "theme-3", "theme-4", "theme-5", "theme-6", "theme-7"];
  
  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg p-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium mb-1">Theme Switcher</h3>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => onThemeChange(theme)}
              className={`px-3 py-1 text-xs rounded-md transition-all ${
                activeTheme === theme
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {theme.replace("-", " ").charAt(0).toUpperCase() + theme.slice(7)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
