import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const SynthwaveHero = lazy(() => import('./components/synthwave-hero'));
const NeonFeatures = lazy(() => import('./components/neon-features'));
const RetroShowcase = lazy(() => import('./components/retro-showcase'));
const SynthServices = lazy(() => import('./components/synth-services'));
const NeonPricing = lazy(() => import('./components/neon-pricing'));
const SynthwaveContact = lazy(() => import('./components/synthwave-contact'));

const SynthwaveLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900">
    <div className="relative">
      {/* Synthwave Loading Animation */}
      <div className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 w-12 h-12 border-4 border-purple-400 border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
      <div className="absolute inset-4 w-8 h-8 border-4 border-cyan-400 border-b-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
      </div>
    </div>
  </div>
);

export default function HomePageTheme102() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900 relative overflow-x-hidden font-mono">
      {/* Synthwave Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(236,72,153,0.3)_25px,rgba(236,72,153,0.3)_26px,transparent_27px,transparent_74px,rgba(139,92,246,0.3)_75px,rgba(139,92,246,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(236,72,153,0.3)_25px,rgba(236,72,153,0.3)_26px,transparent_27px,transparent_74px,rgba(139,92,246,0.3)_75px,rgba(139,92,246,0.3)_76px,transparent_77px)] bg-[length:100px_100px] animate-pulse"></div>
        </div>

        {/* Neon Particles */}
        {Array.from({ length: 20 }, (_, i) => (
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
              ['bg-pink-400', 'bg-purple-400', 'bg-cyan-400', 'bg-orange-400'][Math.floor(Math.random() * 4)]
            } rounded-full animate-pulse shadow-lg`}></div>
          </div>
        ))}

        {/* Synthwave Mountains */}
        <div className="absolute bottom-0 w-full h-64 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
            <path d="M0 200 L200 120 L400 160 L600 80 L800 140 L1000 60 L1200 200 Z" fill="url(#mountainGradient)" />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Neon Sun */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-60 animate-pulse" style={{zIndex: 2}} />

        {/* Neon Lines */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            <path 
              d="M0 400 Q200 200 400 350 Q600 500 800 300 Q1000 150 1200 250" 
              stroke="url(#neonGradient1)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M1200 500 Q1000 300 800 450 Q600 600 400 400 Q200 250 0 350" 
              stroke="url(#neonGradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
          </svg>
        </div>

        {/* Neon Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-conic from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-conic from-orange-400/15 via-pink-400/15 to-purple-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>

        {/* Retro Cars */}
        <div className="absolute bottom-20 left-8 opacity-30">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <rect x="20" y="30" width="80" height="20" rx="10" fill="#ec4899" stroke="#8b5cf6" strokeWidth="2" />
            <rect x="30" y="20" width="60" height="15" rx="8" fill="#8b5cf6" />
            <circle cx="35" cy="50" r="8" fill="#06b6d4" />
            <circle cx="85" cy="50" r="8" fill="#06b6d4" />
            <rect x="40" y="25" width="40" height="8" rx="4" fill="#ec4899" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-8 opacity-30">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <rect x="20" y="30" width="80" height="20" rx="10" fill="#8b5cf6" stroke="#ec4899" strokeWidth="2" />
            <rect x="30" y="20" width="60" height="15" rx="8" fill="#ec4899" />
            <circle cx="35" cy="50" r="8" fill="#06b6d4" />
            <circle cx="85" cy="50" r="8" fill="#06b6d4" />
            <rect x="40" y="25" width="40" height="8" rx="4" fill="#8b5cf6" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<SynthwaveLoader />}>
          <SynthwaveHero />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <NeonFeatures />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <RetroShowcase />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <SynthServices />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <NeonPricing />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <SynthwaveContact />
        </Suspense>
      </div>

      {/* Synthwave Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-pink-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/3 to-transparent" />
      </div>
    </div>
  );
} 