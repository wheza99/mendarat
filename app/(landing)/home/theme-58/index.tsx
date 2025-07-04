'use client';

import Hero from './components/hero';
import PlasmaField from './components/plasma-field';
import SolarCore from './components/solar-core';
import FusionMatrix from './components/fusion-matrix';
import FlareServices from './components/flare-services';
import SolarContact from './components/solar-contact';

export default function Theme58() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-red-950 to-yellow-900 text-white relative overflow-hidden">
      {/* Solar Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Solar Corona Background */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center top, rgba(251, 146, 60, 0.8), transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(239, 68, 68, 0.6), transparent 60%),
                radial-gradient(ellipse at bottom right, rgba(251, 191, 36, 0.7), transparent 55%),
                radial-gradient(ellipse at center, rgba(249, 115, 22, 0.5), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Solar Particles */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-80 animate-solar-float"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-red-400 rounded-full opacity-70 animate-solar-drift"></div>
        <div className="absolute bottom-20 left-32 w-5 h-5 bg-yellow-400 rounded-full opacity-90 animate-solar-flare"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-amber-400 rounded-full opacity-85 animate-solar-float"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-orange-500 rounded-full opacity-60 animate-solar-drift"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full opacity-80 animate-solar-flare"></div>
        
        {/* Solar Flare Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="solarGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#EF4444" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#FBBF24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="solarGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 120 Q 250 70 500 120 T 1000 140 Q 1200 100 1400 120 L 1400 0 L 0 0 Z"
            fill="url(#solarGradient1)" 
            className="animate-solar-wave"
          />
          <path 
            d="M 0 220 Q 350 170 700 200 T 1400 220 L 1400 0 L 0 0 Z"
            fill="url(#solarGradient2)" 
            className="animate-solar-wave"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M 0 320 Q 300 270 600 300 T 1200 320 Q 1300 290 1400 320 L 1400 0 L 0 0 Z"
            fill="url(#solarGradient1)" 
            className="animate-solar-wave"
            style={{ animationDelay: '6s', opacity: '0.5' }}
          />
        </svg>
        
        {/* Solar Energy Grid */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(251, 146, 60, 0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'solar-grid 25s linear infinite'
            }}
          />
        </div>
        
        {/* Solar Corona Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 via-transparent to-red-900/20"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <PlasmaField />
        <SolarCore />
        <FusionMatrix />
        <FlareServices />
        <SolarContact />
      </div>
    </div>
  );
} 