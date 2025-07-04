import React from 'react';
import Hero from './components/hero';
import DreamCore from './components/dream-core';
import VirtualRealms from './components/virtual-realms';
import DigitalConsciousness from './components/digital-consciousness';
import DreamServices from './components/dream-services';
import DreamscapeContact from './components/dreamscape-contact';

export default function HomePageTheme61() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 relative overflow-hidden">
      {/* Digital Dream Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Floating Dream Bubbles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full animate-dream-float backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 120 + 20}px`,
                height: `${Math.random() * 120 + 20}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>
        
        {/* Digital Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dreamGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#dreamGradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="dreamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.8}} />
                <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:0.6}} />
                <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:0.4}} />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#dreamGrid)" className="animate-dream-grid" />
          </svg>
        </div>

        {/* Digital Rain Effect */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent opacity-40 animate-dream-rain"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 300 + 100}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0}} />
              <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
              <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:0}} />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <g key={`neural-${i}`}>
              <path
                d={`M ${i * 15},0 Q ${i * 15 + 20},30 ${i * 15 + 10},60 T ${i * 15 + 5},100`}
                stroke="url(#neuralGradient)"
                strokeWidth="0.8"
                fill="none"
                className="animate-dream-neural"
                style={{animationDelay: `${i * 0.8}s`}}
              />
              <circle
                cx={i * 15 + 5}
                cy={Math.random() * 100}
                r="1"
                fill="#06b6d4"
                className="animate-dream-pulse"
                style={{animationDelay: `${i * 0.5}s`}}
              />
            </g>
          ))}
        </svg>

        {/* Dream Particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full opacity-30 animate-dream-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 8 + 12}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <DreamCore />
        <VirtualRealms />
        <DigitalConsciousness />
        <DreamServices />
        <DreamscapeContact />
      </div>

      {/* Dream Wave Overlay */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-cyan-500/5 animate-dream-wave" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent animate-dream-shimmer" />
      </div>
    </div>
  );
} 