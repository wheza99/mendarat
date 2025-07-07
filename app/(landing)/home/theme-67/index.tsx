import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const CosmicHero = lazy(() => import('./components/cosmic-hero'));
const StellarFeatures = lazy(() => import('./components/stellar-features'));
const GalacticServices = lazy(() => import('./components/galactic-services'));
const NebulaShowcase = lazy(() => import('./components/nebula-showcase'));
const OrbitPricing = lazy(() => import('./components/orbit-pricing'));
const VoidContact = lazy(() => import('./components/void-contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative">
      {/* Cosmic Loading Animation */}
      <div className="w-16 h-16 border-2 border-slate-800 border-t-blue-500 rounded-full animate-cosmic-orbit"></div>
      <div className="absolute inset-2 w-12 h-12 border-2 border-slate-700 border-r-purple-500 rounded-full animate-cosmic-orbit-reverse"></div>
      <div className="absolute inset-4 w-8 h-8 border-2 border-slate-600 border-b-indigo-500 rounded-full animate-cosmic-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-white rounded-full animate-cosmic-pulse"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme67() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-x-hidden">
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Starfield */}
        <div className="absolute inset-0">
          {Array.from({ length: 200 }, (_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-px h-px bg-white rounded-full animate-cosmic-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>

        {/* Nebula Clouds */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-cosmic-drift"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-indigo-500/25 via-pink-500/15 to-transparent rounded-full blur-3xl animate-cosmic-drift-reverse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-radial from-violet-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-cosmic-float"></div>
        </div>

        {/* Cosmic Particles */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-cosmic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200vw] h-[200vw] border border-white/5 rounded-full animate-cosmic-orbit-slow"></div>
          <div className="absolute w-[150vw] h-[150vw] border border-white/3 rounded-full animate-cosmic-orbit-slower"></div>
          <div className="absolute w-[100vw] h-[100vw] border border-white/2 rounded-full animate-cosmic-orbit-slowest"></div>
        </div>

        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          
          {/* Constellation Patterns */}
          <g className="animate-cosmic-constellation">
            <line x1="100" y1="100" x2="200" y2="150" stroke="url(#constellationGradient)" strokeWidth="1" />
            <line x1="200" y1="150" x2="300" y2="120" stroke="url(#constellationGradient)" strokeWidth="1" />
            <line x1="300" y1="120" x2="400" y2="180" stroke="url(#constellationGradient)" strokeWidth="1" />
            <circle cx="100" cy="100" r="2" fill="white" />
            <circle cx="200" cy="150" r="2" fill="white" />
            <circle cx="300" cy="120" r="2" fill="white" />
            <circle cx="400" cy="180" r="2" fill="white" />
          </g>

          <g className="animate-cosmic-constellation-delayed">
            <line x1="800" y1="200" x2="900" y2="250" stroke="url(#constellationGradient)" strokeWidth="1" />
            <line x1="900" y1="250" x2="1000" y2="220" stroke="url(#constellationGradient)" strokeWidth="1" />
            <line x1="1000" y1="220" x2="1100" y2="280" stroke="url(#constellationGradient)" strokeWidth="1" />
            <circle cx="800" cy="200" r="2" fill="white" />
            <circle cx="900" cy="250" r="2" fill="white" />
            <circle cx="1000" cy="220" r="2" fill="white" />
            <circle cx="1100" cy="280" r="2" fill="white" />
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <CosmicHero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <StellarFeatures />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <GalacticServices />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <NebulaShowcase />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <OrbitPricing />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <VoidContact />
        </Suspense>
      </div>

      {/* Cosmic Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-slate-950/10 animate-cosmic-ambient" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/2 to-transparent animate-cosmic-aurora" />
      </div>
    </div>
  );
} 