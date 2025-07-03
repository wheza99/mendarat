'use client';

import Hero from './components/hero';
import QuantumField from './components/quantum-field';
import AuroraCore from './components/aurora-core';
import CosmicFlow from './components/cosmic-flow';
import EnergyServices from './components/energy-services';
import QuantumContact from './components/quantum-contact';

export default function Theme49() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Aurora Borealis Gradient Background */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(139, 92, 246, 0.6), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.4), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.5), transparent 55%),
                radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-emerald-400 rounded-full opacity-80 animate-aurora-float"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-violet-400 rounded-full opacity-70 animate-aurora-drift"></div>
        <div className="absolute bottom-20 left-32 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-aurora-spiral"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-blue-400 rounded-full opacity-90 animate-aurora-float"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-aurora-drift"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-80 animate-aurora-spiral"></div>
        
        {/* Aurora Light Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="auroraGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#22C55E" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#EC4899" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="auroraGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 200 50 400 100 T 800 120 Q 1000 80 1200 100 L 1200 0 L 0 0 Z"
            fill="url(#auroraGradient1)" 
            className="animate-aurora-wave"
          />
          <path 
            d="M 0 200 Q 300 150 600 180 T 1200 200 L 1200 0 L 0 0 Z"
            fill="url(#auroraGradient2)" 
            className="animate-aurora-wave"
            style={{ animationDelay: '2s' }}
          />
          <path 
            d="M 0 300 Q 250 250 500 280 T 1000 300 Q 1100 270 1200 300 L 1200 0 L 0 0 Z"
            fill="url(#auroraGradient1)" 
            className="animate-aurora-wave"
            style={{ animationDelay: '4s', opacity: '0.4' }}
          />
        </svg>
        
        {/* Cosmic Energy Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'aurora-grid 20s linear infinite'
            }}
          />
        </div>
        
        {/* Quantum Field Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-purple-900/10"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <QuantumField />
        <AuroraCore />
        <CosmicFlow />
        <EnergyServices />
        <QuantumContact />
      </div>
    </div>
  );
} 