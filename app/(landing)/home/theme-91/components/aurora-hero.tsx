import React from 'react';

export default function AuroraHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-conic from-pink-400 via-purple-400 to-cyan-400 rounded-full blur-3xl opacity-30 animate-spin" style={{animationDuration: '15s'}}></div>
      </div>

      {/* Glass Morphism Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Aurora Orb */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-conic from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-spin opacity-80"></div>
                <div className="absolute inset-4 w-24 h-24 bg-gradient-conic from-cyan-400 via-teal-400 to-purple-400 rounded-full animate-spin opacity-60" style={{animationDirection: 'reverse'}}></div>
                <div className="absolute inset-8 w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              AURORA GLASS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-light tracking-wider">
            <span className="text-purple-300">ETHEREAL</span> • 
            <span className="text-pink-300">LUMINOUS</span> • 
            <span className="text-cyan-300">TRANSCENDENT</span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the mesmerizing beauty of aurora borealis combined with cutting-edge glassmorphism design. 
            Where light meets transparency in perfect harmony.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/30 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <span className="relative z-10">Explore Aurora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 hover:bg-white/10">
              <span className="relative z-10">See Through Glass</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Aurora Accent Lines */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl animate-bounce"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg animate-bounce"></div>

      {/* Prismatic Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-pink-400/40 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
} 