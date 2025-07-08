import React, { Suspense, lazy } from 'react';
import './neon-sunset-animations.css';

// Lazy load all components for optimal performance
const SunsetHero = lazy(() => import('./components/sunset-hero'));
const NeonFeatures = lazy(() => import('./components/neon-features'));
const SunsetServices = lazy(() => import('./components/sunset-services'));
const NeonShowcase = lazy(() => import('./components/neon-showcase'));
const SunsetPricing = lazy(() => import('./components/sunset-pricing'));
const NeonContact = lazy(() => import('./components/neon-contact'));

const SunsetLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-orange-600 via-pink-600 to-purple-800">
    <div className="relative">
      {/* Sunset Loading Container */}
      <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 backdrop-blur-xl border border-orange-400/50 rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-sunset-pulse text-orange-300 font-mono">
            NEON SUNSET
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-orange-400 via-pink-400 to-purple-400 animate-sunset-float rounded-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-orange-300 font-light font-mono">
            SUNSET LOADING...
          </div>
        </div>
      </div>
      
      {/* Sunset Corner Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-orange-400/50 rounded-full animate-sunset-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-sunset-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-orange-400/50 rounded-full animate-sunset-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme87() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-pink-600 to-purple-800 relative overflow-x-hidden">
      {/* Sunset Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-800"></div>
        
        {/* Sunset Sky Pattern */}
        <div className="absolute inset-0 opacity-40">
          {/* Sunset Rays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f97316_0%,transparent_60%)] animate-sunset-rays"></div>
          
          {/* Neon Sunset Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:300px_300px] animate-sunset-flow"></div>
        </div>

        {/* Floating Sunset Elements */}
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={`sunset-${i}`}
            className="absolute animate-sunset-float"
            style={{
              left: `${5 + (i % 6) * 16}%`,
              top: `${10 + Math.floor(i / 6) * 18}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            <div className={`w-12 h-12 border-2 border-${['orange', 'pink', 'purple'][i % 3]}-400/50 rounded-full animate-sunset-spin backdrop-blur-sm`}></div>
          </div>
        ))}

        {/* Sunset Rays */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64">
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-1 h-24 bg-gradient-to-t from-orange-400/60 to-transparent animate-sunset-ray rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                animationDelay: `${i * 0.08}s`
              }}
            />
          ))}
        </div>

        {/* Neon Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 45 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full animate-sunset-particle backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#f97316', '#ec4899', '#a855f7'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Sunset Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/60 via-pink-400/60 to-purple-400/60 animate-sunset-border backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400/60 via-pink-400/60 to-orange-400/60 animate-sunset-border backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400/60 via-pink-400/60 to-purple-400/60 animate-sunset-border backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-400/60 via-pink-400/60 to-orange-400/60 animate-sunset-border backdrop-blur-sm"></div>
        </div>

        {/* Sunset Corner Elements */}
        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-orange-400/50 rounded-full animate-sunset-pulse backdrop-blur-sm"></div>
        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-pink-400/50 rounded-full animate-sunset-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-2 border-purple-400/50 rounded-full animate-sunset-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-orange-400/50 rounded-full animate-sunset-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>

        {/* Sunset Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-transparent to-purple-800/40"></div>
        
        {/* Sunset Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/15 to-transparent animate-sunset-scanlines"></div>

        {/* Neon Glow Effects */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full animate-sunset-glow"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full animate-sunset-glow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<SunsetLoader />}>
          <SunsetHero />
        </Suspense>
        
        <Suspense fallback={<SunsetLoader />}>
          <NeonFeatures />
        </Suspense>
        
        <Suspense fallback={<SunsetLoader />}>
          <SunsetServices />
        </Suspense>
        
        <Suspense fallback={<SunsetLoader />}>
          <NeonShowcase />
        </Suspense>
        
        <Suspense fallback={<SunsetLoader />}>
          <SunsetPricing />
        </Suspense>
        
        <Suspense fallback={<SunsetLoader />}>
          <NeonContact />
        </Suspense>
      </div>

      {/* Sunset Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-transparent to-purple-800/30"></div>
        
        {/* Sunset Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-orange-600/40"></div>
        
        {/* Neon Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-pink-400/5 to-purple-400/5 animate-sunset-atmosphere"></div>
        
        {/* Sunset Noise */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:3px_3px] animate-sunset-noise"></div>
        </div>

        {/* Neon Pulse Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border border-orange-400/30 rounded-full animate-sunset-pulse-ring"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-pink-400/30 rounded-full animate-sunset-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/30 rounded-full animate-sunset-pulse-ring" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
} 