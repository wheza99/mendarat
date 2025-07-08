import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const RetroHero = lazy(() => import('./components/retro-hero'));
const GamingFeatures = lazy(() => import('./components/gaming-features'));
const PixelShowcase = lazy(() => import('./components/pixel-showcase'));
const ArcadeServices = lazy(() => import('./components/arcade-services'));
const RetroPricing = lazy(() => import('./components/retro-pricing'));
const GamingContact = lazy(() => import('./components/gaming-contact'));

const RetroLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-900 via-cyan-800 to-pink-700">
    <div className="relative">
      {/* Retro Loading Animation */}
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-pink-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-yellow-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme100() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-cyan-800 to-pink-700 relative overflow-x-hidden font-mono">
      {/* Retro Gaming Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* CRT Scanlines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`scanline-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
              style={{
                top: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Pixel Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(6,182,212,0.3)_25px,rgba(6,182,212,0.3)_26px,transparent_27px,transparent_74px,rgba(236,72,153,0.3)_75px,rgba(236,72,153,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(6,182,212,0.3)_25px,rgba(6,182,212,0.3)_26px,transparent_27px,transparent_74px,rgba(236,72,153,0.3)_75px,rgba(236,72,153,0.3)_76px,transparent_77px)] bg-[length:100px_100px] animate-pulse"></div>
        </div>

        {/* Retro Particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            <div className={`w-2 h-2 ${
              ['bg-cyan-400', 'bg-pink-400', 'bg-yellow-400', 'bg-purple-400'][Math.floor(Math.random() * 4)]
            } rounded-sm animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Arcade Cabinet Silhouettes */}
        <div className="absolute bottom-0 left-8 opacity-20">
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
            <rect x="20" y="40" width="80" height="160" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
            <rect x="30" y="60" width="60" height="40" rx="4" fill="#0ea5e9" />
            <rect x="35" y="110" width="50" height="80" rx="4" fill="#ec4899" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-8 opacity-20">
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
            <rect x="20" y="40" width="80" height="160" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
            <rect x="30" y="60" width="60" height="40" rx="4" fill="#eab308" />
            <rect x="35" y="110" width="50" height="80" rx="4" fill="#8b5cf6" />
          </svg>
        </div>

        {/* Retro Wave Patterns */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="retroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 150 1200 250" 
              stroke="url(#retroGradient1)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q1000 300 800 450 Q600 600 400 400 Q200 250 0 350" 
              stroke="url(#retroGradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
          </svg>
        </div>

        {/* CRT Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-conic from-cyan-400/20 via-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-yellow-400/15 via-cyan-400/15 to-pink-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<RetroLoader />}>
          <RetroHero />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <GamingFeatures />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <PixelShowcase />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <ArcadeServices />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <RetroPricing />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <GamingContact />
        </Suspense>
      </div>

      {/* Retro Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent" />
      </div>
    </div>
  );
} 