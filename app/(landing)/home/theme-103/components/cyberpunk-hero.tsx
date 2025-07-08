import React from 'react';

export default function CyberpunkHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          {/* Neon Grid */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#grid)" />
          
          {/* Cyberpunk City */}
          <path d="M0 300 L100 200 L200 250 L300 150 L400 200 L500 100 L600 150 L700 50 L800 100 L800 300 Z" fill="url(#cityGradient)" />
          <defs>
            <linearGradient id="cityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 drop-shadow-lg mb-4 font-mono tracking-wider">
          <span className="text-pink-400">NEON</span> CYBERPUNK
        </h1>
        <p className="text-lg md:text-2xl text-green-300 mb-8 max-w-2xl font-mono">
          Welcome to the future where neon lights meet dark technology!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 via-pink-500 to-green-500 text-white font-bold rounded-none border-2 border-purple-400 hover:scale-105 transition-transform font-mono">
          ENTER THE MATRIX
        </button>
      </div>
      
      {/* Cyberpunk Hologram */}
      <svg className="absolute right-8 top-8 w-24 h-24 opacity-70 z-10 animate-pulse" viewBox="0 0 96 96" fill="none" style={{animationDuration: '2s'}}>
        <circle cx="48" cy="48" r="40" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="48" cy="48" r="30" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="48" cy="48" r="20" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="48" cy="48" r="10" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.2" />
        <circle cx="48" cy="48" r="5" fill="#3b82f6" />
      </svg>
    </section>
  );
} 