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
     "theme-71", "theme-72", "theme-73", "theme-74", "theme-75", 
     "theme-76", "theme-77", "theme-78", "theme-79", "theme-80",
    "theme-81", "theme-82", "theme-83", "theme-84", "theme-85", "theme-86", "theme-87", "theme-88", "theme-89", "theme-90", "theme-91", "theme-92", "theme-93", "theme-94", "theme-95", "theme-96", "theme-97", "theme-98", "theme-99", "theme-100", "theme-101", "theme-102", "theme-103", "theme-104", "theme-105", "theme-106", "theme-107", "theme-108", "theme-109", "theme-110", "theme-111", "theme-112", "theme-113", "theme-114", "theme-115", "theme-116", "theme-117", "theme-118", "theme-119", "theme-120", "theme-121", "theme-122", "theme-123", "theme-124", "theme-125", "theme-126", "theme-127", "theme-128", "theme-129", "theme-130", "theme-131", "theme-132", "theme-133", "theme-134", "theme-135", "theme-136", "theme-137", "theme-138", "theme-139", "theme-140", "theme-141", "theme-142", "theme-143", "theme-144", "theme-145", "theme-146", "theme-147", "theme-148", "theme-149", "theme-150", "theme-151", "theme-152", "theme-153", "theme-154", "theme-155", "theme-156", "theme-157", "theme-158", "theme-159", "theme-160", "theme-161", "theme-162", "theme-163", "theme-164", "theme-165", "theme-166", "theme-167", "theme-168", "theme-169", "theme-170", "theme-171", "theme-172", "theme-173", "theme-174", "theme-175", "theme-176", "theme-177", "theme-178", "theme-179", "theme-180", "theme-181", "theme-182", "theme-183", "theme-184", "theme-185", "theme-186", "theme-187", "theme-188", "theme-189", "theme-190", "theme-191"
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
