import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const NeonHero = lazy(() => import('./components/neon-hero'));
const CyberFeatures = lazy(() => import('./components/cyber-features'));
const GlitchShowcase = lazy(() => import('./components/glitch-showcase'));
const NeonServices = lazy(() => import('./components/neon-services'));
const CyberPricing = lazy(() => import('./components/cyber-pricing'));
const GlitchContact = lazy(() => import('./components/glitch-contact'));

const CyberLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Cyberpunk Loading Animation */}
      <div className="w-20 h-20 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-16 h-16 border-2 border-purple-500 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-12 h-12 border-2 border-cyan-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-6 w-8 h-8 border-2 border-yellow-400 border-l-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme93() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Neon Cyberpunk Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(236,72,153,0.3)_25px,rgba(236,72,153,0.3)_26px,transparent_27px,transparent_74px,rgba(168,85,247,0.3)_75px,rgba(168,85,247,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(236,72,153,0.3)_25px,rgba(236,72,153,0.3)_26px,transparent_27px,transparent_74px,rgba(168,85,247,0.3)_75px,rgba(168,85,247,0.3)_76px,transparent_77px)] bg-[length:100px_100px] animate-pulse"></div>
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
            <div className={`w-1 h-1 ${
              ['bg-pink-500', 'bg-purple-500', 'bg-cyan-400', 'bg-yellow-400'][Math.floor(Math.random() * 4)]
            } rounded-full animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Glitch Effects */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="neonGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Glitch Wave Patterns */}
            <path 
              d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 150 1200 250" 
              stroke="url(#neonGradient1)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q1000 300 800 450 Q600 600 400 400 Q200 250 0 350" 
              stroke="url(#neonGradient2)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
            <path 
              d="M0 600 Q300 400 600 550 Q900 700 1200 500" 
              stroke="url(#neonGradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '2s'}}
            />
          </svg>
        </div>

        {/* Cyberpunk Matrix */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-8 h-8 border border-pink-500/50 rounded-sm transform rotate-45 bg-pink-500/20"></div>
          </div>
        ))}

        {/* Neon Scanlines */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`scanline-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"
              style={{
                top: `${i * 10}%`,
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>

        {/* Neon Field Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-conic from-pink-500/30 via-purple-500/30 to-cyan-400/30 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-yellow-400/25 via-pink-500/25 to-purple-500/25 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
        </div>

        {/* Glitch Overlay */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`glitch-${i}`}
              className="absolute w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<CyberLoader />}>
          <NeonHero />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <CyberFeatures />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <GlitchShowcase />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <NeonServices />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <CyberPricing />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <GlitchContact />
        </Suspense>
      </div>

      {/* Neon Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent" />
      </div>
    </div>
  );
} 