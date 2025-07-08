import React from 'react';

export default function SpaceHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          {/* Star Field */}
          <defs>
            <pattern id="stars" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#a855f7" opacity="0.3"/>
              <circle cx="10" cy="10" r="0.5" fill="#3b82f6" opacity="0.2"/>
              <circle cx="40" cy="40" r="0.8" fill="#ec4899" opacity="0.25"/>
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#stars)" />
          
          {/* Nebula */}
          <ellipse cx="200" cy="100" rx="150" ry="80" fill="url(#nebulaGradient)" opacity="0.3" />
          <ellipse cx="600" cy="300" rx="120" ry="60" fill="url(#nebulaGradient2)" opacity="0.2" />
          <defs>
            <radialGradient id="nebulaGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="nebulaGradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400 drop-shadow-lg mb-4 font-mono tracking-wider">
          <span className="text-blue-400">NEON</span> SPACE EXPLORER
        </h1>
        <p className="text-lg md:text-2xl text-pink-300 mb-8 max-w-2xl font-mono">
          Embark on a cosmic journey through the neon-lit universe!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white font-bold rounded-none border-2 border-green-400 hover:scale-105 transition-transform font-mono">
          LAUNCH MISSION
        </button>
      </div>
      
      {/* Rocket Illustration */}
      <svg className="absolute right-8 top-8 w-24 h-24 opacity-70 z-10 animate-bounce" viewBox="0 0 96 96" fill="none" style={{animationDuration: '3s'}}>
        <path d="M48 80 L44 60 L52 60 L48 80 Z" fill="#a855f7" stroke="#3b82f6" strokeWidth="2" />
        <rect x="44" y="20" width="8" height="40" rx="4" fill="#3b82f6" stroke="#ec4899" strokeWidth="2" />
        <circle cx="48" cy="15" r="5" fill="#ec4899" />
        <rect x="42" y="25" width="12" height="8" rx="4" fill="#10b981" />
        <rect x="40" y="35" width="16" height="4" rx="2" fill="#a855f7" />
        <rect x="38" y="45" width="20" height="3" rx="1.5" fill="#3b82f6" />
      </svg>
    </section>
  );
} 