import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const CyberpunkHero = lazy(() => import('./components/cyberpunk-hero'));
const NeonArcade = lazy(() => import('./components/neon-arcade'));
const RetroGrid = lazy(() => import('./components/retro-grid'));
const SynthWaveFeatures = lazy(() => import('./components/synthwave-features'));
const HologramServices = lazy(() => import('./components/hologram-services'));
const CyberContact = lazy(() => import('./components/cyber-contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative">
      {/* Cyberpunk Loading Animation */}
      <div className="w-20 h-20 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-retro-spin"></div>
      <div className="absolute inset-2 w-16 h-16 border-4 border-pink-500/30 border-b-pink-500 rounded-full animate-retro-spin-reverse"></div>
      <div className="absolute inset-4 w-12 h-12 border-4 border-yellow-400/30 border-l-yellow-400 rounded-full animate-retro-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-retro-pulse"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme65() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="retroGrid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#00ffff" strokeWidth="0.2"/>
              </pattern>
              <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00ffff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffff00" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#retroGrid)" className="animate-retro-grid-slide" />
          </svg>
        </div>

        {/* Neon Scan Lines */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-retro-scan"
              style={{
                top: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Floating Neon Particles */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-retro-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              boxShadow: `0 0 10px currentColor`
            }}
          />
        ))}

        {/* Cyberpunk City Silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
                <stop offset="33%" stopColor="#00ffff" stopOpacity="0.6" />
                <stop offset="66%" stopColor="#ffff00" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ff0080" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path d="M0,200 L0,180 L50,160 L100,170 L150,140 L200,150 L250,120 L300,130 L350,100 L400,110 L450,90 L500,100 L550,80 L600,90 L650,70 L700,80 L750,60 L800,70 L850,50 L900,60 L950,40 L1000,50 L1050,30 L1100,40 L1150,20 L1200,30 L1200,200 Z" 
                  fill="url(#cityGradient)" 
                  className="animate-retro-glow" />
          </svg>
        </div>

        {/* Digital Glitch Effects */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`glitch-${i}`}
            className="absolute bg-gradient-to-r from-pink-500 to-cyan-500 opacity-60 animate-retro-glitch"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}

        {/* Neon Circuit Patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }, (_, i) => (
            <g key={`circuit-${i}`}>
              <path
                d={`M${i * 12},0 L${i * 12},25 L${i * 12 + 15},25 L${i * 12 + 15},50 L${i * 12 + 30},50 L${i * 12 + 30},75 L${i * 12 + 45},75 L${i * 12 + 45},100`}
                stroke="url(#circuitGradient)"
                strokeWidth="0.5"
                fill="none"
                className="animate-retro-circuit"
                style={{animationDelay: `${i * 0.5}s`}}
              />
              <circle
                cx={i * 12 + 15}
                cy="25"
                r="1"
                fill="#00ffff"
                className="animate-retro-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <CyberpunkHero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <NeonArcade />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <RetroGrid />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <SynthWaveFeatures />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <HologramServices />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <CyberContact />
        </Suspense>
      </div>

      {/* Neon Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-cyan-900/10 animate-retro-ambient" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent animate-retro-sweep" />
      </div>
    </div>
  );
} 