'use client';

import Hero from './components/hero';
import Stats from './components/stats';
import Services from './components/services';
import Projects from './components/projects';
import Team from './components/team';
import Clients from './components/clients';
import Process from './components/process';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import Contact from './components/contact';
import QuantumField from './components/quantum-field';
import NebulaCore from './components/nebula-core';
import GalaxyPortal from './components/galaxy-portal';
import StellarServices from './components/stellar-services';
import CosmicContact from './components/cosmic-contact';

export default function Theme53() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white relative overflow-hidden">
      {/* Quantum Nebula Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Nebula Gradient Background */}
        <div className="absolute inset-0 opacity-50">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.8), transparent 70%),
                radial-gradient(ellipse at 80% 70%, rgba(59, 130, 246, 0.6), transparent 60%),
                radial-gradient(ellipse at 40% 80%, rgba(236, 72, 153, 0.7), transparent 65%),
                radial-gradient(ellipse at 70% 20%, rgba(168, 85, 247, 0.5), transparent 80%),
                radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4), transparent 90%)
              `
            }}
          />
        </div>
        
        {/* Floating Quantum Particles */}
        <div className="absolute top-16 left-16 w-6 h-6 bg-purple-400 rounded-full opacity-90 animate-quantum-float"></div>
        <div className="absolute top-32 right-24 w-4 h-4 bg-blue-400 rounded-full opacity-80 animate-quantum-drift"></div>
        <div className="absolute bottom-24 left-20 w-8 h-8 bg-pink-400 rounded-full opacity-70 animate-quantum-spiral"></div>
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-indigo-400 rounded-full opacity-85 animate-quantum-float"></div>
        <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-violet-400 rounded-full opacity-75 animate-quantum-drift"></div>
        <div className="absolute top-2/3 right-1/4 w-7 h-7 bg-cyan-400 rounded-full opacity-60 animate-quantum-spiral"></div>
        
        {/* Nebula Energy Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-40" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="nebulaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B92F6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="nebulaGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#EC4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 300 100 600 150 T 1200 170 Q 1400 120 1600 150 L 1600 0 L 0 0 Z"
            fill="url(#nebulaGradient1)" 
            className="animate-quantum-wave"
          />
          <path 
            d="M 0 250 Q 400 200 800 240 T 1600 260 L 1600 0 L 0 0 Z"
            fill="url(#nebulaGradient2)" 
            className="animate-quantum-wave"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M 0 350 Q 350 300 700 330 T 1400 350 Q 1500 320 1600 350 L 1600 0 L 0 0 Z"
            fill="url(#nebulaGradient1)" 
            className="animate-quantum-wave"
            style={{ animationDelay: '6s', opacity: '0.5' }}
          />
        </svg>
        
        {/* Quantum Energy Grid */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(147, 51, 234, 0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'quantum-grid 25s linear infinite'
            }}
          />
        </div>
        
        {/* Interdimensional Portal Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-quantum-spin"></div>
            <div className="absolute inset-4 border border-blue-400 rounded-full animate-quantum-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
            <div className="absolute inset-8 border border-pink-400 rounded-full animate-quantum-spin" style={{ animationDuration: '12s' }}></div>
          </div>
        </div>
        
        {/* Cosmic Dust Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-purple-900/20"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Team />
        <Clients />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
        <QuantumField />
        <NebulaCore />
        <GalaxyPortal />
        <StellarServices />
        <CosmicContact />
      </div>
    </div>
  );
}