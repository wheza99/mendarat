import React from 'react';

export default function ArtDecoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#a855f7_0%,transparent_50%)] bg-[length:200px_200px] animate-art-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:300px_300px] animate-art-deco-flow"></div>
      </div>

      {/* Art Deco Corner Decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-4 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-4 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Art Deco Header */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-6xl md:text-8xl font-bold mb-4 animate-neon-pulse">
            ART DECO
          </div>
          <div className="text-2xl md:text-4xl font-light text-purple-200 mb-2">
            NEON GRADIENT
          </div>
          <div className="text-lg md:text-xl text-purple-300 font-light">
            ELEGANCE MEETS INNOVATION
          </div>
        </div>

        {/* Art Deco Divider */}
        <div className="flex justify-center items-center mb-12">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="mx-4 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-neon-spin"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              MODERN
            </span>
            <br />
            <span className="text-white">
              ART DECO
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
            Where classic Art Deco elegance meets cutting-edge neon gradient technology. 
            Experience the perfect fusion of timeless design and modern innovation.
          </p>

          {/* Art Deco Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">EXPLORE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-purple-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">LEARN MORE</span>
              <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Art Deco Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '1920s', label: 'ART DECO ERA', color: 'purple' },
            { number: '2024', label: 'MODERN TECH', color: 'pink' },
            { number: '∞', label: 'POSSIBILITIES', color: 'cyan' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br from-${stat.color}-800/50 to-${stat.color}-900/50 backdrop-blur-xl border border-${stat.color}-400/50 rounded-lg p-6 hover:border-${stat.color}-400 transition-all duration-300`}>
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-purple-200 font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Art Deco Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-art-deco-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className={`w-8 h-8 border-2 border-${['purple', 'pink', 'cyan'][i % 3]}-400 rounded-lg animate-neon-spin`}></div>
          </div>
        ))}
      </div>

      {/* Art Deco Rays */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-24 bg-gradient-to-t from-purple-400 to-transparent animate-art-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 