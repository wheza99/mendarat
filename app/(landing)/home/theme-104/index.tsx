import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const SpaceHero = lazy(() => import('./components/space-hero'));
const CosmicFeatures = lazy(() => import('./components/cosmic-features'));
const SpaceShowcase = lazy(() => import('./components/space-showcase'));
const StellarServices = lazy(() => import('./components/stellar-services'));
const NebulaPricing = lazy(() => import('./components/nebula-pricing'));
const SpaceContact = lazy(() => import('./components/space-contact'));

const SpaceLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
    <div className="relative">
      {/* Space Loading Animation */}
      <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-blue-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-pink-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme104() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-x-hidden font-mono">
      {/* Space Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Star Field */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className={`w-1 h-1 ${
                ['bg-purple-400', 'bg-blue-400', 'bg-pink-400', 'bg-green-400'][Math.floor(Math.random() * 4)]
              } rounded-full animate-pulse shadow-lg`}></div>
            </div>
          ))}
        </div>

        {/* Nebula Clouds */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-purple-400/20 via-blue-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-conic from-pink-400/15 via-green-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-conic from-blue-400/10 via-green-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
        </div>

        {/* Shooting Stars */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${15 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
        ))}

        {/* Space Debris */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`debris-${i}`}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              <div className={`w-1 h-1 ${
                ['bg-purple-400', 'bg-blue-400', 'bg-pink-400', 'bg-green-400'][Math.floor(Math.random() * 4)]
              } rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Cosmic Rays */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="cosmicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 150 1200 250" 
              stroke="url(#cosmicGradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q1000 300 800 450 Q600 600 400 400 Q200 250 0 350" 
              stroke="url(#cosmicGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
          </svg>
        </div>

        {/* Planet Orbits */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <circle cx="200" cy="200" r="80" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse" />
            <circle cx="1000" cy="600" r="60" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse" style={{animationDelay: '2s'}} />
            <circle cx="800" cy="150" r="40" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse" style={{animationDelay: '4s'}} />
          </svg>
        </div>

        {/* Space Station */}
        <div className="absolute top-20 right-20 opacity-40">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <rect x="20" y="30" width="80" height="20" rx="10" fill="#a855f7" stroke="#3b82f6" strokeWidth="2" />
            <rect x="30" y="20" width="60" height="15" rx="8" fill="#3b82f6" />
            <circle cx="40" cy="50" r="8" fill="#ec4899" />
            <circle cx="80" cy="50" r="8" fill="#ec4899" />
            <rect x="35" y="25" width="50" height="8" rx="4" fill="#a855f7" />
            <rect x="40" y="27" width="40" height="4" rx="2" fill="#10b981" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<SpaceLoader />}>
          <SpaceHero />
        </Suspense>
        
        <Suspense fallback={<SpaceLoader />}>
          <CosmicFeatures />
        </Suspense>
        
        <Suspense fallback={<SpaceLoader />}>
          <SpaceShowcase />
        </Suspense>
        
        <Suspense fallback={<SpaceLoader />}>
          <StellarServices />
        </Suspense>
        
        <Suspense fallback={<SpaceLoader />}>
          <NebulaPricing />
        </Suspense>
        
        <Suspense fallback={<SpaceLoader />}>
          <SpaceContact />
        </Suspense>
      </div>

      {/* Space Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/2 to-transparent" />
      </div>
    </div>
  );
} 