import React from 'react';
import CosmicHero from './components/cosmic-hero';
import GalacticOrchestra from './components/galactic-orchestra';
import StellarInstruments from './components/stellar-instruments';
import NebulaComposer from './components/nebula-composer';
import CosmicConcerts from './components/cosmic-concerts';
import UniversalHarmony from './components/universal-harmony';

export default function HomePageTheme62() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Cosmic Symphony Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Floating Musical Notes */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 animate-cosmic-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 15 + 20}s`
              }}
            >
              {['♪', '♫', '♬', '♭', '♯', '𝄞', '𝄢'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
        
        {/* Galaxy Spiral */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="galaxyGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
                <stop offset="30%" style={{stopColor:'#3b82f6', stopOpacity:0.6}} />
                <stop offset="60%" style={{stopColor:'#06b6d4', stopOpacity:0.4}} />
                <stop offset="100%" style={{stopColor:'#10b981', stopOpacity:0.2}} />
              </radialGradient>
            </defs>
            <path
              d="M50,50 Q70,30 90,50 Q70,70 50,50 Q30,70 10,50 Q30,30 50,50 Z"
              fill="url(#galaxyGradient)"
              className="animate-cosmic-spiral"
            />
          </svg>
        </div>

        {/* Cosmic Dust Particles */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-cosmic-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 20 + 30}s`
            }}
          />
        ))}

        {/* Sound Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(6)].map((_, i) => (
            <g key={`wave-${i}`}>
              <path
                d={`M0,${50 + i * 5} Q25,${30 + i * 3} 50,${50 + i * 5} T100,${50 + i * 5}`}
                stroke="#06b6d4"
                strokeWidth="0.5"
                fill="none"
                className="animate-cosmic-wave"
                style={{animationDelay: `${i * 0.5}s`}}
              />
            </g>
          ))}
        </svg>

        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#8b5cf6', stopOpacity:0}} />
              <stop offset="50%" style={{stopColor:'#06b6d4', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#10b981', stopOpacity:0}} />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <g key={`constellation-${i}`}>
              <line
                x1={i * 8 + 10}
                y1="20"
                x2={i * 7 + 15}
                y2="80"
                stroke="url(#constellationGradient)"
                strokeWidth="0.3"
                className="animate-cosmic-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
              <circle
                cx={i * 8 + 10}
                cy="20"
                r="0.5"
                fill="#06b6d4"
                className="animate-cosmic-twinkle"
                style={{animationDelay: `${i * 0.2}s`}}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <CosmicHero />
        <GalacticOrchestra />
        <StellarInstruments />
        <NebulaComposer />
        <CosmicConcerts />
        <UniversalHarmony />
      </div>

      {/* Cosmic Energy Overlay */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-cyan-600/10 animate-cosmic-energy" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-cosmic-shimmer" />
      </div>
    </div>
  );
} 