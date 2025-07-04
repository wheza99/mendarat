'use client';

import Hero from './components/hero';
import BioField from './components/bio-field';
import LuminescentCore from './components/luminescent-core';
import DeepCurrent from './components/deep-current';
import BioServices from './components/bio-services';
import OceanContact from './components/ocean-contact';

export default function Theme59() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-teal-950 to-cyan-900 text-white relative overflow-hidden">
      {/* Bioluminescent Ocean Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Ocean Gradient Background */}
        <div className="absolute inset-0 opacity-50">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center top, rgba(34, 211, 238, 0.4), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(6, 148, 162, 0.6), transparent 70%),
                radial-gradient(ellipse at bottom right, rgba(14, 165, 233, 0.5), transparent 65%),
                radial-gradient(ellipse at center, rgba(8, 145, 178, 0.3), transparent 80%)
              `
            }}
          />
        </div>
        
        {/* Floating Bioluminescent Particles */}
        <div className="absolute top-12 left-16 w-3 h-3 bg-cyan-400 rounded-full opacity-90 animate-bio-float"></div>
        <div className="absolute top-24 right-20 w-4 h-4 bg-teal-400 rounded-full opacity-75 animate-bio-drift"></div>
        <div className="absolute bottom-16 left-24 w-2 h-2 bg-blue-400 rounded-full opacity-85 animate-bio-pulse"></div>
        <div className="absolute bottom-28 right-32 w-5 h-5 bg-sky-400 rounded-full opacity-70 animate-bio-glow"></div>
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-teal-300 rounded-full opacity-80 animate-bio-drift"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-cyan-300 rounded-full opacity-65 animate-bio-spiral"></div>
        
        {/* Bioluminescent Currents */}
        <svg className="absolute inset-0 w-full h-full opacity-25" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="bioGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#0891B2" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="bioGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 300 100 600 140 T 1200 160 Q 1350 130 1400 150 L 1400 0 L 0 0 Z"
            fill="url(#bioGradient1)" 
            className="animate-bio-wave"
          />
          <path 
            d="M 0 250 Q 400 200 800 230 T 1400 250 L 1400 0 L 0 0 Z"
            fill="url(#bioGradient2)" 
            className="animate-bio-wave"
            style={{ animationDelay: '4s' }}
          />
          <path 
            d="M 0 350 Q 350 300 700 330 T 1300 350 Q 1350 320 1400 350 L 1400 0 L 0 0 Z"
            fill="url(#bioGradient1)" 
            className="animate-bio-wave"
            style={{ animationDelay: '8s', opacity: '0.4' }}
          />
        </svg>
        
        {/* Bioluminescent Grid Pattern */}
        <div className="absolute inset-0 opacity-12">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(8, 145, 178, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'bio-grid 30s linear infinite'
            }}
          />
        </div>
        
        {/* Ocean Depth Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-teal-900/20"></div>
        
        {/* Floating Bioluminescent Orbs */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-gradient-to-r from-cyan-400/40 to-teal-400/40 rounded-full animate-bio-float blur-sm"></div>
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-gradient-to-r from-blue-400/50 to-sky-400/50 rounded-full animate-bio-drift blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-teal-300/30 to-cyan-300/30 rounded-full animate-bio-glow blur-md" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <BioField />
        <LuminescentCore />
        <DeepCurrent />
        <BioServices />
        <OceanContact />
      </div>
    </div>
  );
} 