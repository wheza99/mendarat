import React, { Suspense, lazy } from 'react';

const WatercolorHero = lazy(() => import('./components/watercolor-hero'));
const ArtFeatures = lazy(() => import('./components/art-features'));
const WatercolorShowcase = lazy(() => import('./components/watercolor-showcase'));
const ArtServices = lazy(() => import('./components/art-services'));
const ArtPricing = lazy(() => import('./components/art-pricing'));
const ArtContact = lazy(() => import('./components/art-contact'));

const WatercolorLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-pink-100 via-blue-100 to-green-100">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-pink-300 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-pink-400 font-serif animate-pulse">Loading art...</span>
    </div>
  </div>
);

export default function HomePageTheme96() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 relative overflow-x-hidden">
      {/* Watercolor brush background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute left-0 top-0 w-80 h-80 opacity-30" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#f9a8d4" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-96 h-96 opacity-20" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#a5b4fc" />
        </svg>
        <svg className="absolute left-1/2 top-1/2 w-96 h-96 opacity-10 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#bbf7d0" />
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<WatercolorLoader />}>
          <WatercolorHero />
        </Suspense>
        <Suspense fallback={<WatercolorLoader />}>
          <ArtFeatures />
        </Suspense>
        <Suspense fallback={<WatercolorLoader />}>
          <WatercolorShowcase />
        </Suspense>
        <Suspense fallback={<WatercolorLoader />}>
          <ArtServices />
        </Suspense>
        <Suspense fallback={<WatercolorLoader />}>
          <ArtPricing />
        </Suspense>
        <Suspense fallback={<WatercolorLoader />}>
          <ArtContact />
        </Suspense>
      </div>
    </div>
  );
} 