import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const SynthwaveHero = lazy(() => import('./components/synthwave-hero'));
const RetroFeatures = lazy(() => import('./components/retro-features'));
const NeonServices = lazy(() => import('./components/neon-services'));
const VintageShowcase = lazy(() => import('./components/vintage-showcase'));
const ChromePricing = lazy(() => import('./components/chrome-pricing'));
const ArcadeContact = lazy(() => import('./components/arcade-contact'));

const SynthwaveLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-b from-purple-900 via-purple-800 to-pink-900">
    <div className="relative">
      {/* Retro Loading Animation */}
      <div className="bg-black/80 border-2 border-pink-500 rounded-lg p-8 font-mono text-pink-500 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-synthwave-glow">
            LOADING...
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-pink-500 to-cyan-400 animate-synthwave-bars"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm opacity-70">
            INITIALIZING SYNTHWAVE PROTOCOL...
          </div>
        </div>
      </div>
      
      {/* Retro Scan Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent animate-synthwave-scan"></div>
    </div>
  </div>
);

export default function HomePageTheme69() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-900 relative overflow-x-hidden">
      {/* Synthwave Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Neon Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          {/* Perspective Grid */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/50 to-transparent">
            {/* Horizontal Grid Lines */}
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={`h-grid-${i}`}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-synthwave-pulse"
                style={{
                  bottom: `${i * 5}%`,
                  animationDelay: `${i * 0.1}s`,
                  transform: `perspective(500px) rotateX(60deg) translateZ(${i * 10}px)`
                }}
              />
            ))}
            
            {/* Vertical Grid Lines */}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={`v-grid-${i}`}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-synthwave-pulse"
                style={{
                  left: `${(i * 100) / 30}%`,
                  animationDelay: `${i * 0.05}s`,
                  transform: `perspective(500px) rotateX(60deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Neon Orbs */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-synthwave-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle, ${['#ff0080', '#00ffff', '#8000ff', '#ff4000'][Math.floor(Math.random() * 4)]}, transparent)`,
              boxShadow: `0 0 20px ${['#ff0080', '#00ffff', '#8000ff', '#ff4000'][Math.floor(Math.random() * 4)]}`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Retro Sun */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 rounded-full bg-gradient-to-t from-orange-500 via-pink-500 to-yellow-400 animate-synthwave-sun">
            {/* Sun Grid Lines */}
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={`sun-line-${i}`}
                className="absolute inset-0 border border-black/20 rounded-full"
                style={{
                  transform: `scale(${1 - i * 0.1})`,
                  opacity: 0.7 - i * 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Neon Mountains */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff0080" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#8000ff" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <polygon 
              points="0,200 0,100 200,50 400,80 600,40 800,70 1000,30 1200,60 1200,200" 
              fill="url(#mountainGradient)"
              className="animate-synthwave-glow"
            />
            <polygon 
              points="0,200 100,120 300,90 500,110 700,80 900,100 1100,70 1200,90 1200,200" 
              fill="url(#mountainGradient)"
              opacity="0.6"
              className="animate-synthwave-glow"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        {/* Retro Scan Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent animate-synthwave-scanlines"></div>
        
        {/* Chrome Reflections */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-synthwave-chrome"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<SynthwaveLoader />}>
          <SynthwaveHero />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <RetroFeatures />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <NeonServices />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <VintageShowcase />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <ChromePricing />
        </Suspense>
        
        <Suspense fallback={<SynthwaveLoader />}>
          <ArcadeContact />
        </Suspense>
      </div>

      {/* Synthwave Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Retro Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-purple-900/30"></div>
        
        {/* Neon Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 via-transparent to-cyan-400/5 animate-synthwave-atmosphere"></div>
        
        {/* CRT Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent animate-synthwave-crt"></div>
      </div>
    </div>
  );
} 