import React from 'react';

export default function ArtDecoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Art Deco Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:200px_200px] animate-art-deco-scan"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:300px_300px] animate-art-deco-scan-reverse"></div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Art Deco Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-cyan-400 rounded-lg shadow-2xl animate-neon-pulse">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-neon-pulse"></div>
          <span className="text-sm font-bold text-cyan-400 tracking-wider">
            ART DECO NEON
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="block">NEON</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-neon-text">
            GRADIENT
          </span>
          <span className="block">ART DECO</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Where classic Art Deco elegance meets modern neon gradient innovation. 
          Experience the perfect fusion of 
          <span className="text-cyan-400 font-bold"> timeless design </span>
          and 
          <span className="text-purple-400 font-bold"> contemporary technology</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* Primary Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-neon-button border-2 border-cyan-400">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 rounded-lg animate-neon-reflection"></div>
          </button>

          {/* Secondary Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-purple-400 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '99.9%', label: 'Uptime', color: 'cyan' },
            { number: '50K+', label: 'Users', color: 'purple' },
            { number: '24/7', label: 'Support', color: 'pink' }
          ].map((stat, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-neon-glow`}>
                  {stat.number}
                </div>
                <div className="text-sm font-light text-gray-400 tracking-wider">
                  {stat.label}
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-400/5 to-${stat.color}-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Art Deco Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 border-2 border-${['cyan', 'purple', 'pink'][i]}-400 rotate-45 animate-neon-pulse`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Art Deco Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-neon-scan"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-neon-scan" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-neon-scan" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Art Deco Corner Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-cyan-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 