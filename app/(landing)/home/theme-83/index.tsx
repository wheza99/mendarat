import React, { Suspense, lazy } from 'react';
import './cyber-animations.css';

// Lazy load all components for optimal performance
const CyberHero = lazy(() => import('./components/cyber-hero'));
const NeonFeatures = lazy(() => import('./components/neon-features'));
const CyberServices = lazy(() => import('./components/cyber-services'));
const TechShowcase = lazy(() => import('./components/tech-showcase'));
const CyberPricing = lazy(() => import('./components/cyber-pricing'));
const NeonContact = lazy(() => import('./components/neon-contact'));

const CyberLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Cyber Loading Container */}
      <div className="bg-black/80 backdrop-blur-xl border border-cyan-400 rounded-lg p-8 shadow-2xl">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 animate-pulse text-cyan-400 font-mono">
            CYBERPUNK
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="w-3 h-8 bg-gradient-to-t from-cyan-400 to-pink-400 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm text-cyan-400 font-light font-mono">
            NEON LOADING...
          </div>
        </div>
      </div>
      
      {/* Cyber Corner Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400 rounded-lg animate-pulse"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-pink-400 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-purple-400 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  </div>
);

export default function HomePageTheme83() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Cyber Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dark Base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#00ffff_50%,transparent_100%)] bg-[length:100px_100px] animate-cyber-grid"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,#ff00ff_50%,transparent_100%)] bg-[length:100px_100px] animate-cyber-grid" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating Cyber Elements */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`cyber-${i}`}
            className="absolute animate-cyber-float"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          >
            <div className={`w-8 h-8 border border-${['cyan', 'pink', 'purple'][i % 3]}-400 rounded-sm animate-cyber-spin`}></div>
          </div>
        ))}

        {/* Cyber Rays */}
        <div className="absolute top-1/3 left-1/3 w-40 h-40">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-1 h-20 bg-gradient-to-t from-cyan-400 to-transparent animate-cyber-ray"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Cyber Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-cyber-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#00ffff', '#ff00ff', '#8000ff'][Math.floor(Math.random() * 3)]}, transparent)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${10 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Cyber Borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 animate-cyber-border"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-cyber-border"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400 animate-cyber-border"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 animate-cyber-border"></div>
        </div>

        {/* Cyber Corner Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-cyan-400 rounded-sm animate-cyber-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Cyber Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-cyber-scanlines"></div>
        
        {/* Cyber Glitch Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-cyber-glitch"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<CyberLoader />}>
          <CyberHero />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <NeonFeatures />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <CyberServices />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <TechShowcase />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <CyberPricing />
        </Suspense>
        
        <Suspense fallback={<CyberLoader />}>
          <NeonContact />
        </Suspense>
      </div>

      {/* Cyber Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
        
        {/* Cyber Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
        
        {/* Cyber Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 via-pink-400/3 to-purple-400/3 animate-cyber-atmosphere"></div>
        
        {/* Cyber Noise */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:2px_2px] animate-cyber-noise"></div>
        </div>
      </div>
    </div>
  );
} 