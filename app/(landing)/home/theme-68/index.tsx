import React, { Suspense, lazy } from 'react';

// Lazy load all components for optimal performance
const MatrixHero = lazy(() => import('./components/matrix-hero'));
const CyberFeatures = lazy(() => import('./components/cyber-features'));
const NeonServices = lazy(() => import('./components/neon-services'));
const HolographicShowcase = lazy(() => import('./components/holographic-showcase'));
const QuantumPricing = lazy(() => import('./components/quantum-pricing'));
const TerminalContact = lazy(() => import('./components/terminal-contact'));

const CyberpunkLoader = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-black">
    <div className="relative">
      {/* Terminal Loading Animation */}
      <div className="bg-black border-2 border-green-500 rounded-lg p-6 font-mono text-green-500">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm">
          <div className="animate-matrix-type">INITIALIZING MATRIX...</div>
          <div className="animate-matrix-type" style={{ animationDelay: '1s' }}>LOADING NEURAL NETWORKS...</div>
          <div className="animate-matrix-type" style={{ animationDelay: '2s' }}>ACCESSING MAINFRAME...</div>
          <div className="animate-matrix-scan mt-4">
            <span className="animate-matrix-cursor">█</span>
          </div>
        </div>
      </div>
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-matrix-scan"></div>
    </div>
  </div>
);

export default function HomePageTheme68() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Matrix Digital Rain Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Digital Rain Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute top-0 text-green-500 font-mono text-sm opacity-60 animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {Array.from({ length: 20 }, (_, j) => (
                <div key={j} className="block">
                  {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Neon Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          {/* Vertical Lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-matrix-glow"
              style={{
                left: `${(i * 5)}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Horizontal Lines */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-matrix-glow"
              style={{
                top: `${(i * 7)}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Neon Particles */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full animate-matrix-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `${['#00ff00', '#00ffff', '#ff00ff', '#0080ff'][Math.floor(Math.random() * 4)]}`,
              boxShadow: `0 0 10px ${['#00ff00', '#00ffff', '#ff00ff', '#0080ff'][Math.floor(Math.random() * 4)]}`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Holographic Overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-green-500/10 via-cyan-500/10 to-magenta-500/10 rounded-full blur-3xl animate-matrix-hologram"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-conic from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-matrix-hologram-reverse"></div>
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-matrix-scan"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<CyberpunkLoader />}>
          <MatrixHero />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <CyberFeatures />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <NeonServices />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <HolographicShowcase />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <QuantumPricing />
        </Suspense>
        
        <Suspense fallback={<CyberpunkLoader />}>
          <TerminalContact />
        </Suspense>
      </div>

      {/* Cyberpunk Overlay Effects */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Glitch Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 animate-matrix-glitch"></div>
        
        {/* Neon Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/2 via-cyan-500/2 to-magenta-500/2 animate-matrix-neon-pulse"></div>
        
        {/* Terminal Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/1 to-transparent animate-matrix-scanlines"></div>
      </div>
    </div>
  );
} 