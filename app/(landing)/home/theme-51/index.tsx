'use client';

import Hero from './components/hero';
import HolographicDisplay from './components/holographic-display';
import QuantumCore from './components/quantum-core';
import HoloInterface from './components/holo-interface';
import DimensionalServices from './components/dimensional-services';
import QuantumPortal from './components/quantum-portal';

export default function Theme51() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-950 text-white relative overflow-hidden">
      {/* Holographic Particle System */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Quantum Hologram Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                conic-gradient(from 0deg at 25% 25%, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.5)),
                conic-gradient(from 90deg at 75% 75%, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.4), rgba(168, 85, 247, 0.5)),
                radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Holographic Particles */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-holo-float"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-70 animate-holo-drift"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-emerald-400 rounded-full opacity-50 animate-holo-spiral"></div>
        <div className="absolute bottom-20 right-24 w-3 h-3 bg-violet-400 rounded-full opacity-80 animate-holo-float"></div>
        <div className="absolute top-1/2 left-1/4 w-5 h-5 bg-cyan-400 rounded-full opacity-40 animate-holo-drift"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pink-400 rounded-full opacity-70 animate-holo-spiral"></div>
        
        {/* Holographic Grid Network */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="holoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="holoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Holographic Network Lines */}
          <path 
            d="M 0 100 Q 300 50 600 100 T 1200 120 Q 1400 80 1600 100"
            stroke="url(#holoGradient1)" 
            strokeWidth="3" 
            fill="none"
            className="animate-holo-pulse"
          />
          <path 
            d="M 0 250 Q 400 200 800 250 T 1600 270"
            stroke="url(#holoGradient2)" 
            strokeWidth="2" 
            fill="none"
            className="animate-holo-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <path 
            d="M 0 400 Q 200 350 400 400 T 800 420 Q 1000 380 1200 400"
            stroke="url(#holoGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-holo-pulse"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M 0 550 Q 500 500 1000 550 T 2000 570"
            stroke="url(#holoGradient2)" 
            strokeWidth="1" 
            fill="none"
            className="animate-holo-pulse"
            style={{ animationDelay: '4.5s' }}
          />
        </svg>
        
        {/* Quantum Field Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 3px, transparent 3px),
                radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 150px 150px, 60px 60px',
              animation: 'holo-grid 20s linear infinite'
            }}
          />
        </div>
        
        {/* Holographic Interference Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 animate-holo-interference"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <HolographicDisplay />
        <QuantumCore />
        <HoloInterface />
        <DimensionalServices />
        <QuantumPortal />
      </div>
    </div>
  );
} 