import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const HolographicHero = lazy(() => import('./components/holographic-hero'));
const MinimalFeatures = lazy(() => import('./components/minimal-features'));
const HolographicServices = lazy(() => import('./components/holographic-services'));
const MinimalShowcase = lazy(() => import('./components/minimal-showcase'));
const HolographicPricing = lazy(() => import('./components/holographic-pricing'));
const MinimalContact = lazy(() => import('./components/minimal-contact'));

const HolographicLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
    <div className="relative">
      {/* Holographic Loading Container */}
      <div className="bg-gradient-to-br from-slate-800/90 to-blue-800/90 backdrop-blur-xl border border-slate-400 rounded-lg p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-holographic-pulse text-slate-300">
            HOLOGRAPHIC
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-slate-400 via-blue-400 to-indigo-400 animate-holographic-float"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-slate-300 font-light">
            MINIMALISM LOADING
          </div>
        </div>
      </div>
      
      {/* Holographic Corner Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-slate-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme80() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-x-hidden">
      {/* Holographic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Holographic Patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Geometric Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#64748b_0%,transparent_50%)] bg-[length:100px_100px] animate-holographic-gear"></div>
          
          {/* Holographic Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:150px_150px] animate-holographic-flow"></div>
        </div>

        {/* Floating Holographic Elements */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`holographic-${i}`}
            className="absolute animate-holographic-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-12 h-12 border-2 border-${['slate', 'blue', 'indigo'][i % 3]}-400 rounded-lg animate-holographic-spin`}></div>
          </div>
        ))}

        {/* Holographic Rays */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-2 h-16 bg-gradient-to-t from-slate-400 to-transparent animate-holographic-ray"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-holographic-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#64748b', '#3b82f6', '#6366f1'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 animate-holographic-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-blue-400 to-slate-400 animate-holographic-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-400 via-blue-400 to-indigo-400 animate-holographic-border"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-indigo-400 via-blue-400 to-slate-400 animate-holographic-border"></div>
        </div>

        {/* Holographic Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-slate-400 rounded-lg animate-holographic-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Holographic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50"></div>
        
        {/* Holographic Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-400/5 to-transparent animate-holographic-scanlines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<HolographicLoader />}>
          <HolographicHero />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <MinimalFeatures />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <HolographicServices />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <MinimalShowcase />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <HolographicPricing />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <MinimalContact />
        </Suspense>
      </div>

      {/* Holographic Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/30"></div>
        
        {/* Holographic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40"></div>
        
        {/* Holographic Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-400/2 via-blue-400/2 to-indigo-400/2 animate-holographic-atmosphere"></div>
      </div>
    </div>
  );
} 