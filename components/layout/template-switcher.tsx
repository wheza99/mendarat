"use client";

import { useState, useEffect, useRef } from "react";

interface ThemeSwitcherProps {
  onThemeChange: (theme: string) => void;
  activeTheme: string;
}

export function TemplateSwitcher({ onThemeChange, activeTheme }: ThemeSwitcherProps) {
  const themes = [
    "theme-1", "theme-2", "theme-3", "theme-4", "theme-5", 
    "theme-6", "theme-7", "theme-8", "theme-9", "theme-10", 
    "theme-11", "theme-12", "theme-13", "theme-14", "theme-15", 
    "theme-16", "theme-17", "theme-18", "theme-19", "theme-20", 
    "theme-21", "theme-22", "theme-23", "theme-24", "theme-25", 
    "theme-26", "theme-27", "theme-28", "theme-29", "theme-30", 
    "theme-31", "theme-32", "theme-33", "theme-34", "theme-35", 
    "theme-36", "theme-37", "theme-38", "theme-39", "theme-40", 
    "theme-41", "theme-42", "theme-43", "theme-44", "theme-45", 
    "theme-46", "theme-47", "theme-48", "theme-49", "theme-50",
    "theme-51", "theme-52", "theme-53", "theme-54", "theme-55",
    "theme-56", "theme-57", "theme-58", "theme-59", "theme-60", 
    "theme-61", "theme-62", "theme-63", "theme-64", "theme-65", 
    "theme-66", "theme-67", "theme-68", "theme-69", "theme-70", 
    "theme-71", "theme-72", "theme-73", "theme-74", "theme-75", "theme-76", "theme-77"
  ];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Format theme name for display
  const formatThemeName = (theme: string) => {
    const themeNumber = theme.split("-")[1];
    return `Theme ${themeNumber}`;
  };
  
  // Get theme number
  const getThemeNumber = (theme: string) => {
    return theme.split("-")[1];
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Handle theme selection
  const handleThemeSelect = (theme: string) => {
    onThemeChange(theme);
    setIsOpen(false);
  };
  
  return (
    <div ref={dropdownRef} className="fixed top-4 right-4 z-[9999] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg p-3 pointer-events-auto">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium mb-1">Theme Switcher</h3>
        
        {/* Dropdown button */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-sm rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <div className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-medium mr-2">
                {getThemeNumber(activeTheme)}
              </span>
              <span>{formatThemeName(activeTheme)}</span>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-[10000] max-h-80 overflow-y-auto pointer-events-auto">
              {themes.map((theme) => {
                const themeNumber = getThemeNumber(theme);
                return (
                  <button
                    key={theme}
                    onClick={() => handleThemeSelect(theme)}
                    className={`w-full text-left px-3 py-2 text-sm transition-all flex items-center ${activeTheme === theme
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium mr-2 ${activeTheme === theme ? 'bg-white text-blue-500' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                      {themeNumber}
                    </span>
                    <span>{formatThemeName(theme)}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
