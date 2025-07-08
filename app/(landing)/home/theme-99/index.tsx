import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const AdventureHero = lazy(() => import('./components/adventure-hero'));
const TravelFeatures = lazy(() => import('./components/travel-features'));
const DestinationShowcase = lazy(() => import('./components/destination-showcase'));
const AdventureServices = lazy(() => import('./components/adventure-services'));
const TravelPricing = lazy(() => import('./components/travel-pricing'));
const AdventureContact = lazy(() => import('./components/adventure-contact'));

const AdventureLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-sky-200 via-green-100 to-yellow-100">
    <div className="relative">
      {/* Adventure Loading Animation */}
      <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-green-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-yellow-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme99() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-green-50 to-yellow-50 relative overflow-x-hidden">
      {/* Adventure Travel Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Parallax Mountains */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-green-700 via-green-400/80 to-transparent" style={{zIndex: 1}} />
        {/* Sky with clouds */}
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-sky-300/60 to-transparent" style={{zIndex: 0}} />
        {/* Sun */}
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-60" style={{zIndex: 2}} />
        {/* Clouds */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute bg-white rounded-full opacity-60 blur-sm animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 2) * 10}%`,
              width: `${60 + i * 10}px`,
              height: `${30 + i * 8}px`,
              animationDelay: `${i * 0.7}s`,
              zIndex: 3
            }}
          />
        ))}
        {/* Birds */}
        {Array.from({ length: 3 }, (_, i) => (
          <svg
            key={`bird-${i}`}
            className="absolute animate-bounce"
            style={{
              left: `${20 + i * 25}%`,
              top: `${18 + i * 7}%`,
              width: '32px',
              height: '16px',
              zIndex: 4,
              animationDelay: `${i * 1.2}s`
            }}
            viewBox="0 0 32 16"
            fill="none"
          >
            <path d="M2 14 Q8 2 16 8 Q24 14 30 2" stroke="#795548" strokeWidth="2" fill="none" />
          </svg>
        ))}
        {/* Map/Compass Overlay */}
        <div className="absolute right-8 bottom-8 opacity-30 z-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#795548" strokeWidth="2" fill="#fffbe6" />
            <path d="M40 10 L44 40 L40 70 L36 40 Z" fill="#ff9800" stroke="#795548" strokeWidth="1" />
            <circle cx="40" cy="40" r="4" fill="#43a047" />
          </svg>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<AdventureLoader />}>
          <AdventureHero />
        </Suspense>
        <Suspense fallback={<AdventureLoader />}>
          <TravelFeatures />
        </Suspense>
        <Suspense fallback={<AdventureLoader />}>
          <DestinationShowcase />
        </Suspense>
        <Suspense fallback={<AdventureLoader />}>
          <AdventureServices />
        </Suspense>
        <Suspense fallback={<AdventureLoader />}>
          <TravelPricing />
        </Suspense>
        <Suspense fallback={<AdventureLoader />}>
          <AdventureContact />
        </Suspense>
      </div>
      {/* Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/3 to-transparent" />
      </div>
    </div>
  );
} 