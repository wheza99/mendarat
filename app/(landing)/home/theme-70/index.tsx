import React, { Suspense, lazy } from 'react';
import './globals.css';

// Lazy load all components for optimal performance
const GlassmorphismHero = lazy(() => import('./components/glassmorphism-hero'));
const FuturisticFeatures = lazy(() => import('./components/futuristic-features'));
const HolographicServices = lazy(() => import('./components/holographic-services'));
const PrismaticShowcase = lazy(() => import('./components/prismatic-showcase'));
const CrystalPricing = lazy(() => import('./components/crystal-pricing'));
const QuantumContact = lazy(() => import('./components/quantum-contact'));

const GlassmorphismLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
    <div className="relative">
      {/* Glassmorphism Loading Container */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            INITIALIZING...
          </div>
          <div className="flex justify-center space-x-3 mb-6">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-glassmorphism-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-white/70 font-light">
            QUANTUM GLASSMORPHISM PROTOCOL
          </div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-float"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default function HomePageTheme70() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-x-hidden">
      {/* Glassmorphism Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl animate-glassmorphism-orb"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-pink-400/20 via-blue-400/10 to-transparent rounded-full blur-3xl animate-glassmorphism-orb-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-purple-400/15 via-cyan-400/10 to-transparent rounded-full blur-2xl animate-glassmorphism-orb-slow"></div>
        </div>

        {/* Geometric Glass Shapes */}
        <div className="absolute inset-0">
          {/* Hexagon Grid */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`hex-${i}`}
              className="absolute backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg animate-glassmorphism-float"
              style={{
                left: `${10 + (i % 4) * 20}%`,
                top: `${15 + Math.floor(i / 4) * 25}%`,
                width: `${80 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 30}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}

          {/* Circular Glass Elements */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`circle-${i}`}
              className="absolute rounded-full backdrop-blur-md bg-white/5 border border-white/10 animate-glassmorphism-float"
              style={{
                left: `${5 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 30}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Glassmorphism Particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Holographic Lines */}
        <div className="absolute inset-0">
          {/* Diagonal Lines */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`diagonal-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-glassmorphism-scan"
              style={{
                top: `${10 + i * 12}%`,
                left: `-20%`,
                right: `-20%`,
                transform: `rotate(${15 + i * 5}deg)`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}

          {/* Vertical Lines */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-glassmorphism-glow"
              style={{
                left: `${15 + i * 15}%`,
                top: `-10%`,
                bottom: `-10%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Prismatic Reflections */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent animate-glassmorphism-prism"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-cyan-400/3 to-transparent animate-glassmorphism-prism-reverse"></div>
        </div>

        {/* Quantum Field Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-conic from-cyan-400/5 via-purple-400/5 to-pink-400/5 animate-glassmorphism-quantum"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<GlassmorphismLoader />}>
          <GlassmorphismHero />
        </Suspense>
        
        <Suspense fallback={<GlassmorphismLoader />}>
          <FuturisticFeatures />
        </Suspense>
        
        <Suspense fallback={<GlassmorphismLoader />}>
          <HolographicServices />
        </Suspense>
        
        <Suspense fallback={<GlassmorphismLoader />}>
          <PrismaticShowcase />
        </Suspense>
        
        <Suspense fallback={<GlassmorphismLoader />}>
          <CrystalPricing />
        </Suspense>
        
        <Suspense fallback={<GlassmorphismLoader />}>
          <QuantumContact />
        </Suspense>
      </div>

      {/* Glassmorphism Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-blue-900/10"></div>
        
        {/* Holographic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/30"></div>
        
        {/* Quantum Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/2 via-purple-400/2 to-pink-400/2 animate-glassmorphism-atmosphere"></div>
        
        {/* Glassmorphism Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent animate-glassmorphism-scanlines"></div>
      </div>
    </div>
  );
} 