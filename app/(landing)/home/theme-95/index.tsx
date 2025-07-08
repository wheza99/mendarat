import React, { Suspense, lazy } from 'react';

const RetroHero = lazy(() => import('./components/retro-hero'));
const TechnoFeatures = lazy(() => import('./components/techno-features'));
const RetroShowcase = lazy(() => import('./components/retro-showcase'));
const TechnoServices = lazy(() => import('./components/techno-services'));
const RetroPricing = lazy(() => import('./components/retro-pricing'));
const RetroContact = lazy(() => import('./components/retro-contact'));

const RetroLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-[#0f172a] to-[#312e81]">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-blue-400 font-mono animate-pulse">Loading retro...</span>
    </div>
  </div>
);

export default function HomePageTheme95() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#1e293b] relative overflow-x-hidden">
      {/* Retro grid background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" fill="none">
          <defs>
            <linearGradient id="retroGrid" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#60a5fa" stopOpacity="0.2" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          {Array.from({ length: 18 }, (_, i) => (
            <line key={i} x1="0" y1={i * 50} x2="1440" y2={i * 50} stroke="url(#retroGrid)" strokeWidth="1" />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 24 }, (_, i) => (
            <line key={i} y1="0" x1={i * 60} y2="900" x2={i * 60} stroke="url(#retroGrid)" strokeWidth="1" />
          ))}
        </svg>
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_7px,rgba(255,255,255,0.03)_8px)]" />
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<RetroLoader />}>
          <RetroHero />
        </Suspense>
        <Suspense fallback={<RetroLoader />}>
          <TechnoFeatures />
        </Suspense>
        <Suspense fallback={<RetroLoader />}>
          <RetroShowcase />
        </Suspense>
        <Suspense fallback={<RetroLoader />}>
          <TechnoServices />
        </Suspense>
        <Suspense fallback={<RetroLoader />}>
          <RetroPricing />
        </Suspense>
        <Suspense fallback={<RetroLoader />}>
          <RetroContact />
        </Suspense>
      </div>
    </div>
  );
} 