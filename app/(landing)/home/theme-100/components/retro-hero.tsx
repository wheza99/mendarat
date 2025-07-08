import React from 'react';

export default function RetroHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Pixel Art Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          {/* Pixel Mountains */}
          <rect x="0" y="300" width="800" height="100" fill="#1e1b4b" />
          <rect x="50" y="250" width="100" height="50" fill="#6366f1" />
          <rect x="200" y="200" width="100" height="100" fill="#8b5cf6" />
          <rect x="350" y="220" width="100" height="80" fill="#06b6d4" />
          <rect x="500" y="180" width="100" height="120" fill="#ec4899" />
          <rect x="650" y="240" width="100" height="60" fill="#eab308" />
          
          {/* Pixel Stars */}
          <rect x="100" y="50" width="4" height="4" fill="#eab308" />
          <rect x="300" y="80" width="4" height="4" fill="#06b6d4" />
          <rect x="500" y="40" width="4" height="4" fill="#ec4899" />
          <rect x="700" y="70" width="4" height="4" fill="#8b5cf6" />
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg mb-4 font-mono tracking-wider">
          <span className="text-pink-400">RETRO</span> GAMING
        </h1>
        <p className="text-lg md:text-2xl text-yellow-400 mb-8 max-w-2xl font-mono">
          Relive the golden age of gaming with classic arcade experiences and pixel-perfect nostalgia!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-white font-bold rounded-none border-2 border-yellow-400 hover:scale-105 transition-transform font-mono">
          START GAME
        </button>
      </div>
      
      {/* Pixel Art Controller */}
      <svg className="absolute right-8 top-8 w-16 h-16 opacity-70 z-10 animate-bounce" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
        <circle cx="20" cy="28" r="4" fill="#06b6d4" />
        <circle cx="28" cy="28" r="4" fill="#ec4899" />
        <circle cx="36" cy="28" r="4" fill="#eab308" />
        <rect x="44" y="24" width="8" height="8" rx="2" fill="#8b5cf6" />
      </svg>
    </section>
  );
} 