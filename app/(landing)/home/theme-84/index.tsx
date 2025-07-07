import React, { Suspense, lazy } from 'react';
import './retro-animations.css';

// Lazy load all components for optimal performance
const RetroHero = lazy(() => import('./components/retro-hero'));
const PixelFeatures = lazy(() => import('./components/pixel-features'));
const GameServices = lazy(() => import('./components/game-services'));
const RetroShowcase = lazy(() => import('./components/retro-showcase'));
const PixelPricing = lazy(() => import('./components/pixel-pricing'));
const RetroContact = lazy(() => import('./components/retro-contact'));

const RetroLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
    <div className="relative">
      {/* Retro Loading Container */}
      <div className="bg-gradient-to-br from-green-800/90 to-blue-800/90 backdrop-blur-xl border-4 border-green-400 rounded-lg p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-retro-pulse text-green-300 font-mono">
            RETRO GAMING
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="w-4 h-8 bg-gradient-to-t from-green-400 via-blue-400 to-purple-400 animate-retro-blink"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-green-300 font-light font-mono">
            LOADING...
          </div>
        </div>
      </div>
      
      {/* Retro Corner Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-4 border-green-400 rounded-lg animate-retro-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-blue-400 rounded-lg animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-purple-400 rounded-lg animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-4 border-green-400 rounded-lg animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme84() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 relative overflow-x-hidden">
      {/* Retro Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900"></div>
        
        {/* Pixel Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#22c55e_50%,transparent_100%)] bg-[length:20px_20px] animate-retro-grid"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:20px_20px] animate-retro-grid" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating Pixel Elements */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`pixel-${i}`}
            className="absolute animate-retro-float"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            <div className={`w-6 h-6 border-2 border-${['green', 'blue', 'purple'][i % 3]}-400 rounded-sm animate-retro-spin`}></div>
          </div>
        ))}

        {/* Retro Rays */}
        <div className="absolute top-1/3 left-1/3 w-40 h-40">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-2 h-16 bg-gradient-to-t from-green-400 to-transparent animate-retro-ray"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Pixel Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-sm animate-retro-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#22c55e', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${10 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Retro Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-retro-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 animate-retro-border"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 animate-retro-border"></div>
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 animate-retro-border"></div>
        </div>

        {/* Retro Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-green-400 rounded-lg animate-retro-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-4 border-blue-400 rounded-lg animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-purple-400 rounded-lg animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-green-400 rounded-lg animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Retro Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent animate-retro-scanlines"></div>
        
        {/* Retro CRT Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-retro-crt"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<RetroLoader />}>
          <RetroHero />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <PixelFeatures />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <GameServices />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <RetroShowcase />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <PixelPricing />
        </Suspense>
        
        <Suspense fallback={<RetroLoader />}>
          <RetroContact />
        </Suspense>
      </div>

      {/* Retro Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-green-900/50"></div>
        
        {/* Retro Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-green-900/60"></div>
        
        {/* Retro Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/3 via-blue-400/3 to-purple-400/3 animate-retro-atmosphere"></div>
        
        {/* Pixel Noise */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:4px_4px] animate-retro-noise"></div>
        </div>
      </div>
    </div>
  );
} 