import React from 'react';

export default function RetroHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Retro Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#22c55e_20%,transparent_40%)] bg-[length:40px_40px] animate-retro-grid"></div>
        
        {/* Floating Pixel Elements */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`pixel-${i}`}
            className="absolute animate-retro-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-12 h-12 border-4 border-${['green', 'blue', 'purple'][i % 3]}-400 rounded-sm animate-retro-spin shadow-lg shadow-${['green', 'blue', 'purple'][i % 3]}-400/50`}></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Retro Badge */}
        <div className="inline-block mb-8 px-6 py-3 border-4 border-green-400 rounded-sm bg-black/50 backdrop-blur-sm">
          <span className="text-green-400 font-mono text-sm tracking-wider">RETRO GAMING</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white font-mono">
          <span className="text-green-400">GAME</span>
          <br />
          <span className="text-blue-400">ON</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Experience the nostalgia of classic gaming with modern technology and pixel-perfect design
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-sm hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105 border-4 border-green-400">
            START GAME
          </button>
          <button className="px-8 py-4 border-4 border-blue-400 text-blue-400 font-bold rounded-sm hover:bg-blue-400 hover:text-black transition-all duration-300">
            HIGH SCORES
          </button>
        </div>

        {/* Retro Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "1UP", label: "LIVES", color: "green" },
            { number: "999", label: "SCORE", color: "blue" },
            { number: "LEVEL", label: "MAX", color: "purple" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2 font-mono`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-mono text-sm tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro Corner Decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-4 border-green-400 rounded-sm animate-retro-pulse"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-4 border-blue-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-4 border-purple-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-4 border-green-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 