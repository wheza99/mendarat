'use client';

import Hero from './components/hero';
import VoidField from './components/void-field';
import QuantumCore from './components/quantum-core';
import DarkMatter from './components/dark-matter';
import VoidServices from './components/void-services';
import QuantumContact from './components/quantum-contact';

export default function Theme57() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Quantum Void Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Space Gradient Background */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(88, 28, 135, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(17, 24, 39, 0.6), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(55, 65, 81, 0.5), transparent 55%),
                radial-gradient(ellipse at center, rgba(75, 85, 99, 0.3), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-80 animate-void-float"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-violet-400 rounded-full opacity-70 animate-void-drift"></div>
        <div className="absolute bottom-20 left-32 w-5 h-5 bg-indigo-400 rounded-full opacity-60 animate-void-spiral"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-gray-400 rounded-full opacity-90 animate-void-float"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-slate-400 rounded-full opacity-50 animate-void-drift"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-zinc-400 rounded-full opacity-80 animate-void-spiral"></div>
        
        {/* Quantum Void Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="voidGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#6B7280" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#4F46E5" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#374151" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="voidGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4B5563" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 200 50 400 100 T 800 120 Q 1000 80 1200 100 L 1200 0 L 0 0 Z"
            fill="url(#voidGradient1)" 
            className="animate-void-wave"
          />
          <path 
            d="M 0 200 Q 300 150 600 180 T 1200 200 L 1200 0 L 0 0 Z"
            fill="url(#voidGradient2)" 
            className="animate-void-wave"
            style={{ animationDelay: '2s' }}
          />
          <path 
            d="M 0 300 Q 250 250 500 280 T 1000 300 Q 1100 270 1200 300 L 1200 0 L 0 0 Z"
            fill="url(#voidGradient1)" 
            className="animate-void-wave"
            style={{ animationDelay: '4s', opacity: '0.4' }}
          />
        </svg>
        
        {/* Dark Matter Grid */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(107, 114, 128, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'void-grid 25s linear infinite'
            }}
          />
        </div>
        
        {/* Quantum Field Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-zinc-900/20"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <VoidField />
        <QuantumCore />
        <DarkMatter />
        <VoidServices />
        <QuantumContact />
      </div>
    </div>
  );
} 