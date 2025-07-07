import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const HolographicHero = lazy(() => import('./components/holographic-hero'));
const MinimalFeatures = lazy(() => import('./components/minimal-features'));
const HolographicServices = lazy(() => import('./components/holographic-services'));
const CleanShowcase = lazy(() => import('./components/clean-showcase'));
const MinimalPricing = lazy(() => import('./components/minimal-pricing'));
const HolographicContact = lazy(() => import('./components/holographic-contact'));

const HolographicLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-white">
    <div className="relative">
      {/* Holographic Loading Container */}
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-light mb-4 animate-holographic-glow">
            INITIALIZING...
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-blue-400 via-purple-400 to-pink-400 animate-holographic-bars"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 font-light">
            HOLOGRAPHIC MINIMALISM PROTOCOL
          </div>
        </div>
      </div>
      
      {/* Holographic Reflections */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/10 to-transparent animate-holographic-reflection"></div>
    </div>
  </div>
);

export default function HomePageTheme72() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Holographic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-20">
          {/* Horizontal Grid Lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`h-grid-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-holographic-pulse"
              style={{
                top: `${(i * 100) / 12}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Vertical Grid Lines */}
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={`v-grid-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-holographic-pulse"
              style={{
                left: `${(i * 100) / 16}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Floating Holographic Prisms */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`prism-${i}`}
            className="absolute animate-holographic-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-lg opacity-20 animate-holographic-rotate"></div>
          </div>
        ))}

        {/* Holographic Light Rays */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-holographic-scan"
              style={{
                top: `${15 + i * 15}%`,
                left: `-20%`,
                right: `-20%`,
                transform: `rotate(${20 + i * 10}deg)`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-holographic-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Reflections */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-400/5 to-transparent animate-holographic-reflection"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-purple-400/5 to-transparent animate-holographic-reflection-reverse"></div>
        </div>

        {/* Minimalist Geometric Shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute border border-gray-200/50 animate-holographic-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                borderRadius: i % 2 === 0 ? '50%' : '0',
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Holographic Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30"></div>
        
        {/* Subtle Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/10 to-transparent animate-holographic-scanlines"></div>
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
          <CleanShowcase />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <MinimalPricing />
        </Suspense>
        
        <Suspense fallback={<HolographicLoader />}>
          <HolographicContact />
        </Suspense>
      </div>

      {/* Holographic Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20"></div>
        
        {/* Holographic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/40"></div>
        
        {/* Holographic Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/2 via-purple-400/2 to-pink-400/2 animate-holographic-atmosphere"></div>
      </div>
    </div>
  );
} 