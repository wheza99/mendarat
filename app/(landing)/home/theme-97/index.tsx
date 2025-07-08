import React, { Suspense, lazy } from 'react';

const GlassHero = lazy(() => import('./components/glass-hero'));
const GlassFeatures = lazy(() => import('./components/glass-features'));
const GlassShowcase = lazy(() => import('./components/glass-showcase'));
const GlassServices = lazy(() => import('./components/glass-services'));
const GlassPricing = lazy(() => import('./components/glass-pricing'));
const GlassContact = lazy(() => import('./components/glass-contact'));

const GlassLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-cyan-500 font-bold animate-pulse">Loading glass...</span>
    </div>
  </div>
);

export default function HomePageTheme97() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 relative overflow-x-hidden">
      {/* Glassmorphism background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute left-0 top-0 w-80 h-80 opacity-30" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#a5f3fc" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-96 h-96 opacity-20" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#c7d2fe" />
        </svg>
        <svg className="absolute left-1/2 top-1/2 w-96 h-96 opacity-10 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#f0fdfa" />
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<GlassLoader />}>
          <GlassHero />
        </Suspense>
        <Suspense fallback={<GlassLoader />}>
          <GlassFeatures />
        </Suspense>
        <Suspense fallback={<GlassLoader />}>
          <GlassShowcase />
        </Suspense>
        <Suspense fallback={<GlassLoader />}>
          <GlassServices />
        </Suspense>
        <Suspense fallback={<GlassLoader />}>
          <GlassPricing />
        </Suspense>
        <Suspense fallback={<GlassLoader />}>
          <GlassContact />
        </Suspense>
      </div>
    </div>
  );
} 