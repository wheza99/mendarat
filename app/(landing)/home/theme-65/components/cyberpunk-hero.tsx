import React from 'react';

export default function CyberpunkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Neon Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 40 40" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, #00ffff 20px, #00ffff 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #00ffff 20px, #00ffff 21px)'}}>
          </svg>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Glitch Effect Title */}
        <div className="relative mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-retro-glow-text leading-tight">
            CYBERPUNK
          </h1>
          <h1 className="absolute inset-0 text-6xl sm:text-7xl lg:text-8xl font-bold text-pink-500 animate-retro-glitch-text opacity-70 leading-tight">
            CYBERPUNK
          </h1>
          <h1 className="absolute inset-0 text-6xl sm:text-7xl lg:text-8xl font-bold text-cyan-400 animate-retro-glitch-text-reverse opacity-50 leading-tight">
            CYBERPUNK
          </h1>
        </div>

        {/* Subtitle with Neon Effect */}
        <div className="relative mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-cyan-300 mb-4 animate-retro-fade-in" style={{animationDelay: '0.5s'}}>
            FUTURE • TECH • INNOVATION
          </h2>
          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-retro-pulse"></div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-retro-fade-in" style={{animationDelay: '1s'}}>
          Enter the digital realm where neon dreams meet cutting-edge technology. 
          Experience the future through our revolutionary cyberpunk solutions that blur the lines between reality and virtual worlds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-retro-fade-in" style={{animationDelay: '1.5s'}}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">ENTER THE GRID</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute inset-0 animate-retro-border-pulse border-2 border-cyan-400 rounded-lg"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105">
            <span className="relative z-10">EXPLORE TECH</span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-retro-fade-in" style={{animationDelay: '2s'}}>
          {[
            { number: "2084", label: "SYSTEMS ONLINE" },
            { number: "∞", label: "POSSIBILITIES" },
            { number: "24/7", label: "CYBER SUPPORT" },
            { number: "100%", label: "NEON POWERED" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-2">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 group-hover:text-pink-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="absolute inset-0 text-3xl sm:text-4xl font-bold text-pink-500 opacity-0 group-hover:opacity-50 animate-retro-pulse">
                  {stat.number}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-mono tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 border border-cyan-400/30 rotate-45 animate-retro-float-slow"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            <div className="w-full h-full border border-pink-500/20 transform -rotate-45 animate-retro-pulse" style={{animationDelay: `${i * 0.5}s`}}></div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-retro-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-retro-scroll"></div>
        </div>
        <div className="text-xs text-cyan-400 mt-2 font-mono">SCROLL</div>
      </div>
    </section>
  );
} 