import React, { Suspense, lazy } from 'react';

const DoodleHero = lazy(() => import('./components/doodle-hero'));
const DoodleFeatures = lazy(() => import('./components/doodle-features'));
const DoodleShowcase = lazy(() => import('./components/doodle-showcase'));
const DoodleServices = lazy(() => import('./components/doodle-services'));
const DoodlePricing = lazy(() => import('./components/doodle-pricing'));
const ContactDoodle = lazy(() => import('./components/contact-doodle'));

const DoodleLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-white">
    <div className="flex flex-col items-center">
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="mb-2 animate-wiggle">
        <path d="M10 30 Q30 10 50 30 T90 30 Q110 50 120 30" stroke="#fbbf24" strokeWidth="3" fill="none"/>
        <circle cx="20" cy="20" r="4" fill="#60a5fa" />
        <circle cx="100" cy="40" r="3" fill="#f472b6" />
        <rect x="55" y="10" width="10" height="10" rx="3" fill="#34d399" />
      </svg>
      <span className="mt-2 text-blue-500 font-bold font-mono tracking-wider animate-pulse">Loading Doodle...</span>
    </div>
    <style jsx>{`
      @keyframes wiggle {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(3deg); }
      }
      .animate-wiggle { animation: wiggle 1.5s infinite; }
    `}</style>
  </div>
);

export default function HomePageTheme107() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-sans">
      {/* Doodle SVG background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg width="100vw" height="100vh" className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" fill="none">
          <path d="M100 100 Q200 50 300 100 T500 100 Q600 200 700 100" stroke="#fbbf24" strokeWidth="4" fill="none"/>
          <circle cx="400" cy="200" r="18" fill="#60a5fa" opacity="0.2" />
          <circle cx="1200" cy="300" r="12" fill="#f472b6" opacity="0.2" />
          <rect x="900" y="100" width="40" height="40" rx="12" fill="#34d399" opacity="0.2" />
          <path d="M200 700 Q300 800 400 700 T600 700 Q700 600 800 700" stroke="#fbbf24" strokeWidth="3" fill="none"/>
          <circle cx="1000" cy="800" r="16" fill="#fbbf24" opacity="0.15" />
        </svg>
      </div>
      <div className="relative z-10">
        <Suspense fallback={<DoodleLoader />}>
          <DoodleHero />
        </Suspense>
        <Suspense fallback={<DoodleLoader />}>
          <DoodleFeatures />
        </Suspense>
        <Suspense fallback={<DoodleLoader />}>
          <DoodleShowcase />
        </Suspense>
        <Suspense fallback={<DoodleLoader />}>
          <DoodleServices />
        </Suspense>
        <Suspense fallback={<DoodleLoader />}>
          <DoodlePricing />
        </Suspense>
        <Suspense fallback={<DoodleLoader />}>
          <ContactDoodle />
        </Suspense>
      </div>
    </div>
  );
} 