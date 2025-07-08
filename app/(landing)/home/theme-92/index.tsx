import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const QuantumHero = lazy(() => import('./components/quantum-hero'));
const HologramFeatures = lazy(() => import('./components/hologram-features'));
const QuantumShowcase = lazy(() => import('./components/quantum-showcase'));
const HoloServices = lazy(() => import('./components/holo-services'));
const QuantumPricing = lazy(() => import('./components/quantum-pricing'));
const HologramContact = lazy(() => import('./components/hologram-contact'));

const QuantumLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Quantum Loading Animation */}
      <div className="w-20 h-20 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-16 h-16 border-2 border-cyan-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-12 h-12 border-2 border-lime-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-6 w-8 h-8 border-2 border-yellow-400 border-l-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme92() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Quantum Hologram Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(34,197,94,0.2)_25px,rgba(34,197,94,0.2)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.2)_75px,rgba(6,182,212,0.2)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(34,197,94,0.2)_25px,rgba(34,197,94,0.2)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.2)_75px,rgba(6,182,212,0.2)_76px,transparent_77px)] bg-[length:100px_100px] animate-pulse"></div>
        </div>

        {/* Quantum Particles */}
        {Array.from({ length: 20 }, (_, i) => (
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
              ['bg-emerald-400', 'bg-cyan-400', 'bg-lime-400', 'bg-yellow-400'][Math.floor(Math.random() * 4)]
            } rounded-full animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Holographic Interference Patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="holoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#84cc16" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="holoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            
            {/* Quantum Wave Interference */}
            <path 
              d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 150 1200 250" 
              stroke="url(#holoGradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q1000 300 800 450 Q600 600 400 400 Q200 250 0 350" 
              stroke="url(#holoGradient2)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
            <path 
              d="M0 600 Q300 400 600 550 Q900 700 1200 500" 
              stroke="url(#holoGradient1)" 
              strokeWidth="1" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '2s'}}
            />
          </svg>
        </div>

        {/* Quantum Computing Matrix */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${5 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-8 h-8 border border-emerald-400/40 rounded-sm transform rotate-45 bg-emerald-400/10"></div>
          </div>
        ))}

        {/* Holographic Scanlines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`scanline-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
              style={{
                top: `${i * 12.5}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Quantum Field Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-conic from-emerald-400/20 via-cyan-400/20 to-lime-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-yellow-400/15 via-emerald-400/15 to-cyan-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<QuantumLoader />}>
          <QuantumHero />
        </Suspense>
        
        <Suspense fallback={<QuantumLoader />}>
          <HologramFeatures />
        </Suspense>
        
        <Suspense fallback={<QuantumLoader />}>
          <QuantumShowcase />
        </Suspense>
        
        <Suspense fallback={<QuantumLoader />}>
          <HoloServices />
        </Suspense>
        
        <Suspense fallback={<QuantumLoader />}>
          <QuantumPricing />
        </Suspense>
        
        <Suspense fallback={<QuantumLoader />}>
          <HologramContact />
        </Suspense>
      </div>

      {/* Quantum Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/3 to-transparent" />
      </div>
    </div>
  );
} 