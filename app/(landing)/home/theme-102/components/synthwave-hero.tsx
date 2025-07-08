import React from 'react';

export default function SynthwaveHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Synthwave Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          {/* Neon Grid */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#grid)" />
          
          {/* Neon Mountains */}
          <path d="M0 300 L150 200 L300 250 L450 150 L600 200 L750 180 L800 300 Z" fill="url(#mountainGradient)" />
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-400 drop-shadow-lg mb-4 font-mono tracking-wider">
          <span className="text-purple-400">NEON</span> SYNTHWAVE
        </h1>
        <p className="text-lg md:text-2xl text-cyan-300 mb-8 max-w-2xl font-mono">
          Experience the future of the past with our retro-futuristic neon aesthetic!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold rounded-none border-2 border-orange-400 hover:scale-105 transition-transform font-mono">
          RIDE THE WAVE
        </button>
      </div>
      
      {/* Neon Car Illustration */}
      <svg className="absolute right-8 top-8 w-20 h-20 opacity-70 z-10 animate-bounce" viewBox="0 0 80 40" fill="none" style={{animationDuration: '2s'}}>
        <rect x="10" y="20" width="60" height="15" rx="8" fill="#ec4899" stroke="#8b5cf6" strokeWidth="2" />
        <rect x="15" y="12" width="50" height="12" rx="6" fill="#8b5cf6" />
        <circle cx="20" cy="35" r="6" fill="#06b6d4" />
        <circle cx="60" cy="35" r="6" fill="#06b6d4" />
        <rect x="20" y="16" width="40" height="6" rx="3" fill="#ec4899" />
        <rect x="25" y="18" width="30" height="2" fill="#06b6d4" />
      </svg>
    </section>
  );
} 