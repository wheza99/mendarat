import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const ArtDecoHero = lazy(() => import('./components/art-deco-hero'));
const NeonFeatures = lazy(() => import('./components/neon-features'));
const GradientServices = lazy(() => import('./components/gradient-services'));
const DecoShowcase = lazy(() => import('./components/deco-showcase'));
const NeonPricing = lazy(() => import('./components/neon-pricing'));
const ArtDecoContact = lazy(() => import('./components/art-deco-contact'));

const ArtDecoLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="relative">
      {/* Art Deco Loading Container */}
      <div className="bg-gradient-to-br from-slate-800/90 to-purple-800/90 backdrop-blur-xl border-2 border-cyan-400 rounded-lg p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-neon-pulse text-cyan-400">
            ART DECO
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-cyan-400 via-purple-400 to-pink-400 animate-neon-bars"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-cyan-300 font-light">
            NEON GRADIENT INITIALIZING
          </div>
        </div>
      </div>
      
      {/* Art Deco Geometric Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme73() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Art Deco Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Zigzag Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:100px_100px] animate-art-deco-scan"></div>
          
          {/* Diamond Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:150px_150px] animate-art-deco-scan-reverse"></div>
        </div>

        {/* Floating Art Deco Elements */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`deco-${i}`}
            className="absolute animate-art-deco-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-12 h-12 border-2 border-${['cyan', 'purple', 'pink'][i % 3]}-400 rotate-45 animate-neon-pulse`}></div>
          </div>
        ))}

        {/* Art Deco Sunburst */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-1 h-16 bg-gradient-to-t from-cyan-400 to-transparent animate-art-deco-ray"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Neon Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-neon-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#06b6d4', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Art Deco Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-neon-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-neon-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 animate-neon-border"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-cyan-400 animate-neon-border"></div>
        </div>

        {/* Art Deco Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-cyan-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Art Deco Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50"></div>
        
        {/* Neon Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-neon-scanlines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<ArtDecoLoader />}>
          <ArtDecoHero />
        </Suspense>
        
        <Suspense fallback={<ArtDecoLoader />}>
          <NeonFeatures />
        </Suspense>
        
        <Suspense fallback={<ArtDecoLoader />}>
          <GradientServices />
        </Suspense>
        
        <Suspense fallback={<ArtDecoLoader />}>
          <DecoShowcase />
        </Suspense>
        
        <Suspense fallback={<ArtDecoLoader />}>
          <NeonPricing />
        </Suspense>
        
        <Suspense fallback={<ArtDecoLoader />}>
          <ArtDecoContact />
        </Suspense>
      </div>

      {/* Art Deco Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/30"></div>
        
        {/* Art Deco Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40"></div>
        
        {/* Neon Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/2 via-purple-400/2 to-pink-400/2 animate-neon-atmosphere"></div>
      </div>
    </div>
  );
} 