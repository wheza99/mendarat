import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const NatureHero = lazy(() => import('./components/nature-hero'));
const EcoFeatures = lazy(() => import('./components/eco-features'));
const NatureShowcase = lazy(() => import('./components/nature-showcase'));
const EcoServices = lazy(() => import('./components/eco-services'));
const EcoPricing = lazy(() => import('./components/eco-pricing'));
const NatureContact = lazy(() => import('./components/nature-contact'));

const NatureLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-white">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-green-700 font-semibold">Loading nature...</span>
    </div>
  </div>
);

export default function HomePageTheme94() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-x-hidden">
      {/* Soft leaf background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute left-0 top-0 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#22c55e" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-80 h-80 opacity-10" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="100" ry="80" fill="#a3e635" />
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<NatureLoader />}>
          <NatureHero />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <EcoFeatures />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <NatureShowcase />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <EcoServices />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <EcoPricing />
        </Suspense>
        <Suspense fallback={<NatureLoader />}>
          <NatureContact />
        </Suspense>
      </div>
    </div>
  );
} 