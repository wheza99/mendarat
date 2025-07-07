import React from 'react';

export default function HolographicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        
        {/* Holographic Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b981_0%,transparent_50%)] bg-[length:200px_200px] animate-holographic-grid"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#14b8a6_50%,transparent_100%)] bg-[length:300px_300px] animate-holographic-flow"></div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-emerald-400 rounded-lg animate-holographic-spin"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-teal-400 rounded-lg animate-holographic-spin" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-cyan-400 rounded-lg animate-holographic-spin" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Holographic Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-br from-emerald-800/80 to-teal-800/80 backdrop-blur-xl border-2 border-emerald-400 rounded-lg shadow-2xl animate-holographic-pulse">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 animate-holographic-pulse"></div>
          <span className="text-sm font-bold text-emerald-400 tracking-wider">
            HOLOGRAPHIC CYBERPUNK
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="block">HOLOGRAPHIC</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-holographic-text">
            CYBERPUNK
          </span>
          <span className="block">FUTURE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Where holographic technology meets cyberpunk aesthetics. 
          Experience the perfect fusion of 
          <span className="text-emerald-400 font-bold"> futuristic holograms </span>
          and 
          <span className="text-teal-400 font-bold"> cyberpunk innovation</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* Primary Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-holographic-button border-2 border-emerald-400">
            <span className="relative z-10">Enter Hologram</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 rounded-lg animate-holographic-reflection"></div>
          </button>

          {/* Secondary Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-br from-emerald-800/80 to-teal-800/80 backdrop-blur-xl border-2 border-teal-400 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '99.9%', label: 'Hologram Quality', color: 'emerald' },
            { number: '50K+', label: 'Cyberpunk Designs', color: 'teal' },
            { number: '24/7', label: 'Hologram Power', color: 'cyan' }
          ].map((stat, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-emerald-800/60 to-teal-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-holographic-glow`}>
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

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 border-2 border-${['emerald', 'teal', 'cyan'][i]}-400 rounded-lg animate-holographic-spin`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Holographic Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-holographic-scan"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/20 to-transparent animate-holographic-scan" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-holographic-scan" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Holographic Corner Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-2 border-emerald-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-2 border-teal-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-cyan-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-emerald-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 