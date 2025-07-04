'use client';

import Hero from './components/hero';
import OceanField from './components/ocean-field';
import DeepCore from './components/deep-core';
import TidalPortal from './components/tidal-portal';
import AquaServices from './components/aqua-services';
import AquaContact from './components/aqua-contact';

export default function Theme54() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-teal-950 to-cyan-900 text-white relative overflow-hidden">
      {/* Digital Ocean Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Ocean Gradient Background */}
        <div className="absolute inset-0 opacity-60">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.8), transparent 70%),
                radial-gradient(ellipse at 70% 80%, rgba(6, 182, 212, 0.7), transparent 65%),
                radial-gradient(ellipse at 20% 70%, rgba(34, 197, 94, 0.6), transparent 60%),
                radial-gradient(ellipse at 80% 30%, rgba(14, 165, 233, 0.5), transparent 75%),
                radial-gradient(ellipse at center, rgba(8, 145, 178, 0.4), transparent 90%)
              `
            }}
          />
        </div>
        
        {/* Floating Cyber Bubbles */}
        <div className="absolute top-20 left-12 w-8 h-8 bg-blue-400 rounded-full opacity-80 animate-ocean-float"></div>
        <div className="absolute top-32 right-16 w-6 h-6 bg-teal-400 rounded-full opacity-70 animate-ocean-drift"></div>
        <div className="absolute bottom-28 left-24 w-10 h-10 bg-cyan-400 rounded-full opacity-60 animate-ocean-bubble"></div>
        <div className="absolute bottom-44 right-20 w-4 h-4 bg-green-400 rounded-full opacity-85 animate-ocean-float"></div>
        <div className="absolute top-1/2 left-1/5 w-7 h-7 bg-sky-400 rounded-full opacity-75 animate-ocean-drift"></div>
        <div className="absolute top-2/3 right-1/3 w-9 h-9 bg-blue-300 rounded-full opacity-55 animate-ocean-bubble"></div>
        
        {/* Ocean Current Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="oceanGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#0EA5E9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="oceanGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#22C55E" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 180 Q 350 130 700 180 T 1400 200 Q 1600 150 1800 180 L 1800 0 L 0 0 Z"
            fill="url(#oceanGradient1)" 
            className="animate-ocean-wave"
          />
          <path 
            d="M 0 280 Q 450 230 900 270 T 1800 290 L 1800 0 L 0 0 Z"
            fill="url(#oceanGradient2)" 
            className="animate-ocean-wave"
            style={{ animationDelay: '4s' }}
          />
          <path 
            d="M 0 380 Q 400 330 800 360 T 1600 380 Q 1700 350 1800 380 L 1800 0 L 0 0 Z"
            fill="url(#oceanGradient1)" 
            className="animate-ocean-wave"
            style={{ animationDelay: '8s', opacity: '0.4' }}
          />
        </svg>
        
        {/* Ocean Data Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'ocean-grid 30s linear infinite'
            }}
          />
        </div>
        
        {/* Tidal Vortex Effects */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 opacity-15">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ocean-spin"></div>
            <div className="absolute inset-6 border border-teal-400 rounded-full animate-ocean-spin" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
            <div className="absolute inset-12 border border-cyan-400 rounded-full animate-ocean-spin" style={{ animationDuration: '18s' }}></div>
          </div>
        </div>
        
        {/* Deep Ocean Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-teal-900/20"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <OceanField />
        <DeepCore />
        <TidalPortal />
        <AquaServices />
        <AquaContact />
      </div>
    </div>
  );
} 