import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const OrigamiHero = lazy(() => import('./components/origami-hero'));
const FoldFeatures = lazy(() => import('./components/fold-features'));
const PaperServices = lazy(() => import('./components/paper-services'));
const MorphShowcase = lazy(() => import('./components/morph-showcase'));
const OrigamiPricing = lazy(() => import('./components/origami-pricing'));
const FoldContact = lazy(() => import('./components/fold-contact'));

const OrigamiLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
    <div className="relative">
      {/* Origami Loading Container */}
      <div className="bg-gradient-to-br from-blue-100/90 to-purple-100/90 backdrop-blur-xl border border-blue-200 rounded-lg p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-origami-pulse text-blue-600">
            ORIGAMI
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-blue-400 via-purple-400 to-indigo-400 animate-origami-fold"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-blue-500 font-light">
            FOLDING IN PROGRESS
          </div>
        </div>
      </div>
      
      {/* Origami Corner Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-400 rounded-lg animate-origami-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-indigo-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-blue-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme78() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-x-hidden">
      {/* Origami Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50"></div>
        
        {/* Origami Patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Geometric Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_50%)] bg-[length:100px_100px] animate-origami-gear"></div>
          
          {/* Fold Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:150px_150px] animate-origami-flow"></div>
        </div>

        {/* Floating Origami Elements */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`origami-${i}`}
            className="absolute animate-origami-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-12 h-12 border-2 border-${['blue', 'purple', 'indigo'][i % 3]}-400 rounded-lg animate-origami-spin`}></div>
          </div>
        ))}

        {/* Origami Rays */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-2 h-16 bg-gradient-to-t from-blue-400 to-transparent animate-origami-ray"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Origami Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-origami-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#6366f1'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Origami Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-origami-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 animate-origami-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 animate-origami-border"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-blue-400 animate-origami-border"></div>
        </div>

        {/* Origami Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-blue-400 rounded-lg animate-origami-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-purple-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-indigo-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-blue-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Origami Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 via-transparent to-blue-50/50"></div>
        
        {/* Origami Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-origami-scanlines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<OrigamiLoader />}>
          <OrigamiHero />
        </Suspense>
        
        <Suspense fallback={<OrigamiLoader />}>
          <FoldFeatures />
        </Suspense>
        
        <Suspense fallback={<OrigamiLoader />}>
          <PaperServices />
        </Suspense>
        
        <Suspense fallback={<OrigamiLoader />}>
          <MorphShowcase />
        </Suspense>
        
        <Suspense fallback={<OrigamiLoader />}>
          <OrigamiPricing />
        </Suspense>
        
        <Suspense fallback={<OrigamiLoader />}>
          <FoldContact />
        </Suspense>
      </div>

      {/* Origami Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-blue-50/30"></div>
        
        {/* Origami Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-blue-50/40"></div>
        
        {/* Origami Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/2 via-purple-400/2 to-indigo-400/2 animate-origami-atmosphere"></div>
      </div>
    </div>
  );
} 