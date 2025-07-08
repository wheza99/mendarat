import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const AuroraHero = lazy(() => import('./components/aurora-hero'));
const GlassFeatures = lazy(() => import('./components/glass-features'));
const PrismShowcase = lazy(() => import('./components/prism-showcase'));
const CrystalServices = lazy(() => import('./components/crystal-services'));
const LuminousPricing = lazy(() => import('./components/luminous-pricing'));
const AuroraContact = lazy(() => import('./components/aurora-contact'));

const AuroraLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
    <div className="relative">
      {/* Aurora Loading Animation */}
      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute inset-2 w-12 h-12 bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute inset-4 w-8 h-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme91() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Dynamic Aurora Lights */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-pink-500/15 via-transparent to-teal-500/15 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating Aurora Particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-${1 + Math.floor(Math.random() * 3)} h-${1 + Math.floor(Math.random() * 3)} ${
              ['bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-teal-400'][Math.floor(Math.random() * 4)]
            } rounded-full opacity-60 animate-pulse`}></div>
          </div>
        ))}

        {/* Aurora Waves */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="auroraGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="auroraGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            
            {/* Aurora Wave Paths */}
            <path 
              d="M0 400 Q300 200 600 350 Q900 500 1200 300" 
              stroke="url(#auroraGradient1)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q900 300 600 450 Q300 600 0 400" 
              stroke="url(#auroraGradient2)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
          </svg>
        </div>

        {/* Glass Morphism Orbs */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 35}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20"></div>
          </div>
        ))}

        {/* Prismatic Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-conic from-purple-400 via-pink-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-conic from-cyan-400 via-teal-400 to-purple-400 rounded-full blur-3xl opacity-15 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<AuroraLoader />}>
          <AuroraHero />
        </Suspense>
        
        <Suspense fallback={<AuroraLoader />}>
          <GlassFeatures />
        </Suspense>
        
        <Suspense fallback={<AuroraLoader />}>
          <PrismShowcase />
        </Suspense>
        
        <Suspense fallback={<AuroraLoader />}>
          <CrystalServices />
        </Suspense>
        
        <Suspense fallback={<AuroraLoader />}>
          <LuminousPricing />
        </Suspense>
        
        <Suspense fallback={<AuroraLoader />}>
          <AuroraContact />
        </Suspense>
      </div>

      {/* Glass Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );
} 