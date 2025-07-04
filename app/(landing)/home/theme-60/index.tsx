import React from 'react';
import Hero from './components/hero';
import MagmaCore from './components/magma-core';
import VolcanicField from './components/volcanic-field';
import CosmicEruption from './components/cosmic-eruption';
import LavaServices from './components/lava-services';
import VolcanicContact from './components/volcanic-contact';

export default function HomePageTheme60() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-950 to-yellow-900 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Star Field */}
        <div className="absolute inset-0 bg-black opacity-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-volcanic-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Volcanic Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-red-600/30 via-orange-500/20 to-transparent animate-volcanic-glow" />
        
        {/* Lava Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`lava-${i}`}
            className="absolute bg-gradient-to-t from-red-500 to-orange-400 rounded-full opacity-80 animate-volcanic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 12 + 8}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 6 + 8}s`
            }}
          />
        ))}
        
        {/* Cosmic Energy Streams */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cosmicStream" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#fbbf24', stopOpacity:0}} />
              <stop offset="50%" style={{stopColor:'#f59e0b', stopOpacity:0.8}} />
              <stop offset="100%" style={{stopColor:'#dc2626', stopOpacity:0}} />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <path
              key={`stream-${i}`}
              d={`M ${i * 25},100 Q ${i * 25 + 15},50 ${i * 25 + 30},0`}
              stroke="url(#cosmicStream)"
              strokeWidth="0.5"
              fill="none"
              className="animate-volcanic-stream"
              style={{animationDelay: `${i * 1.5}s`}}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <MagmaCore />
        <VolcanicField />
        <CosmicEruption />
        <LavaServices />
        <VolcanicContact />
      </div>

      {/* Volcanic Heat Shimmer Effect */}
      <div className="fixed inset-0 z-20 pointer-events-none bg-gradient-to-t from-transparent via-red-500/5 to-transparent animate-volcanic-shimmer" />
    </div>
  );
} 