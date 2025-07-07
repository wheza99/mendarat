import React, { Suspense, lazy } from 'react';
import './holographic-animations.css';

// Lazy load all components for optimal performance
const HolographicHero = lazy(() => import('./components/holographic-hero'));
const GlassFeatures = lazy(() => import('./components/glass-features'));
const HolographicServices = lazy(() => import('./components/holographic-services'));
const TechShowcase = lazy(() => import('./components/tech-showcase'));
const GlassPricing = lazy(() => import('./components/glass-pricing'));
const HolographicContact = lazy(() => import('./components/holographic-contact'));

const HolographicLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
    <div className="relative">
      {/* Holographic Loading Container */}
      <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 backdrop-blur-xl border border-indigo-400/50 rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-holographic-pulse text-indigo-300 font-mono">
            HOLOGRAPHIC
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-indigo-400 via-purple-400 to-pink-400 animate-holographic-float rounded-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-indigo-300 font-light font-mono">
            INITIALIZING...
          </div>
        </div>
      </div>
      
      {/* Holographic Corner Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme85() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-x-hidden">
      {/* Holographic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        
        {/* Holographic Patterns */}
        <div className="absolute inset-0 opacity-30">
          {/* Geometric Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#6366f1_0%,transparent_50%)] bg-[length:150px_150px] animate-holographic-gear"></div>
          
          {/* Holographic Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#a855f7_50%,transparent_100%)] bg-[length:200px_200px] animate-holographic-flow"></div>
        </div>

        {/* Floating Holographic Elements */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`hologram-${i}`}
            className="absolute animate-holographic-float"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            <div className={`w-10 h-10 border-2 border-${['indigo', 'purple', 'pink'][i % 3]}-400/50 rounded-full animate-holographic-spin backdrop-blur-sm`}></div>
          </div>
        ))}

        {/* Holographic Rays */}
        <div className="absolute top-1/3 left-1/3 w-48 h-48">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-1 h-20 bg-gradient-to-t from-indigo-400/50 to-transparent animate-holographic-ray rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full animate-holographic-particle backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#6366f1', '#a855f7', '#ec4899'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400/50 via-purple-400/50 to-pink-400/50 animate-holographic-border backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400/50 via-purple-400/50 to-indigo-400/50 animate-holographic-border backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400/50 via-purple-400/50 to-pink-400/50 animate-holographic-border backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-400/50 via-purple-400/50 to-indigo-400/50 animate-holographic-border backdrop-blur-sm"></div>
        </div>

        {/* Holographic Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>

        {/* Holographic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-indigo-900/50"></div>
        
        {/* Holographic Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent animate-holographic-scanlines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<HolographicLoader />}>
          <HolographicHero />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <GlassFeatures />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <HolographicServices />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <TechShowcase />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <GlassPricing />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <HolographicContact />
        </Suspense>
      </div>

      {/* Holographic Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-indigo-900/30"></div>
        
        {/* Holographic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-indigo-900/50"></div>
        
        {/* Holographic Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 via-purple-400/5 to-pink-400/5 animate-holographic-atmosphere"></div>
        
        {/* Holographic Noise */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:3px_3px] animate-holographic-noise"></div>
        </div>
      </div>
    </div>
  );
} 