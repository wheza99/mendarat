import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const CyberpunkHero = lazy(() => import('./components/cyberpunk-hero'));
const NeonFeatures = lazy(() => import('./components/neon-features'));
const CyberpunkShowcase = lazy(() => import('./components/cyberpunk-showcase'));
const CyberpunkServices = lazy(() => import('./components/cyberpunk-services'));
const NeonPricing = lazy(() => import('./components/neon-pricing'));
const CyberpunkContact = lazy(() => import('./components/cyberpunk-contact'));

const CyberpunkLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Cyberpunk Loading Animation */}
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-pink-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-green-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme103() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden font-mono">
      {/* Cyberpunk Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.3)_25px,rgba(59,130,246,0.3)_26px,transparent_27px,transparent_74px,rgba(236,72,153,0.3)_75px,rgba(236,72,153,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(59,130,246,0.3)_25px,rgba(59,130,246,0.3)_26px,transparent_27px,transparent_74px,rgba(236,72,153,0.3)_75px,rgba(236,72,153,0.3)_76px,transparent_77px)] bg-[length:100px_100px] animate-pulse"></div>
        </div>

        {/* Neon Particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <div className={`w-2 h-2 ${
              ['bg-blue-400', 'bg-pink-400', 'bg-green-400', 'bg-purple-400'][Math.floor(Math.random() * 4)]
            } rounded-full animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Cyberpunk City Skyline */}
        <div className="absolute bottom-0 w-full h-48 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
            <path d="M0 200 L50 150 L100 180 L150 120 L200 160 L250 100 L300 140 L350 80 L400 120 L450 60 L500 100 L550 40 L600 80 L650 20 L700 60 L750 0 L800 40 L850 0 L900 40 L950 0 L1000 40 L1050 0 L1100 40 L1150 0 L1200 40 L1200 200 Z" fill="url(#cityGradient)" />
            <defs>
              <linearGradient id="cityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Neon Rain Effect */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute w-px h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Neon Lines */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 150 1200 250" 
              stroke="url(#neonGradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q1000 300 800 450 Q600 600 400 400 Q200 250 0 350" 
              stroke="url(#neonGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
          </svg>
        </div>

        {/* Cyberpunk Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-conic from-blue-400/20 via-pink-400/20 to-green-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-purple-400/15 via-blue-400/15 to-pink-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
        </div>

        {/* Holographic Scanlines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`scanline-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
              style={{
                top: `${i * 10}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Cyberpunk Matrix Code */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${15 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-6 h-6 border border-green-400/40 rounded-sm transform rotate-45 bg-green-400/10"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<CyberpunkLoader />}>
          <CyberpunkHero />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <NeonFeatures />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <CyberpunkShowcase />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <CyberpunkServices />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <NeonPricing />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <CyberpunkContact />
        </Suspense>
      </div>

      {/* Cyberpunk Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/2 to-transparent" />
      </div>
    </div>
  );
} 