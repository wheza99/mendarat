import React from 'react';

export default function CosmicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Orchestra Conductor */}
      <div className="absolute top-20 right-10 opacity-30">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-cosmic-pulse" />
          <div className="absolute inset-0 w-32 h-32 border-4 border-dashed border-white/20 rounded-full animate-cosmic-spin" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">🎼</div>
        </div>
      </div>

      {/* Floating Music Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-cosmic-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 30 + 20}px`
            }}
          >
            <span className="text-gradient-cosmic opacity-60">
              {['🎵', '🎶', '🎸', '🎹', '🥁', '🎺', '🎻'][Math.floor(Math.random() * 7)]}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Cosmic Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
          <span className="text-cyan-400 text-sm font-medium animate-cosmic-glow">
            🌌 Cosmic Symphony Experience
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-cosmic-text">
          Harmony of the
          <br />
          <span className="relative">
            Universe
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30 animate-cosmic-pulse"></div>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-cosmic-fade-in">
          Experience the celestial orchestra where galaxies compose melodies,
          <br />
          stars conduct symphonies, and nebulae dance to cosmic rhythms.
        </p>

        {/* Cosmic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Galactic Symphonies', value: '∞', unit: 'compositions' },
            { label: 'Stellar Musicians', value: '47.2B', unit: 'artists' },
            { label: 'Cosmic Frequencies', value: '432Hz', unit: 'harmony' },
            { label: 'Universal Listeners', value: '99.9%', unit: 'satisfied' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-800/30 to-cyan-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/5">
                <div className="text-3xl font-bold text-gradient-cosmic mb-2 animate-cosmic-count">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mb-1">{stat.unit}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25 animate-cosmic-glow">
            🎼 Start Cosmic Journey
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            🌌 Explore Galaxy
          </button>
        </div>

        {/* Musical Waveform Visualization */}
        <div className="mt-16">
          <div className="flex justify-center items-end space-x-1 h-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-purple-600 to-cyan-400 rounded-t-lg opacity-70 animate-cosmic-wave"
                style={{
                  width: '4px',
                  height: `${Math.random() * 60 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${Math.random() * 2 + 1}s`
                }}
              />
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4 animate-cosmic-pulse">
            Real-time cosmic frequency visualization
          </p>
        </div>
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/10 rounded-full animate-cosmic-orbit"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + i * 10}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 