import React from 'react';

export default function TokyoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Neon background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-cyan-900"></div>
      
      {/* Animated neon grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(90deg, transparent 98%, rgba(236, 72, 153, 0.3) 100%),
                            linear-gradient(0deg, transparent 98%, rgba(168, 85, 247, 0.3) 100%)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main heading with neon effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            NEON TOKYO
          </h1>
          <div className="text-2xl md:text-4xl font-mono text-pink-200 mb-6 animate-pulse">
            🗾 ストリートカルチャー 🎌
          </div>
        </div>

        {/* Subtitle with Japanese text */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-pink-100 mb-4 font-light">
            Experience the vibrant energy of Japanese street culture
          </p>
          <p className="text-lg md:text-xl text-purple-200 font-mono">
            Where tradition meets innovation in the heart of neon-lit streets
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50">
            🏮 Explore Culture
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-bold rounded-lg hover:bg-cyan-400 hover:text-purple-900 transition-all duration-300 transform hover:scale-105">
            ⛩️ Learn More
          </button>
        </div>

        {/* Floating Japanese elements */}
        <div className="absolute top-20 left-20 text-pink-400 text-4xl animate-bounce">
          🎎
        </div>
        <div className="absolute top-40 right-20 text-purple-400 text-3xl animate-pulse">
          🏮
        </div>
        <div className="absolute bottom-40 left-10 text-cyan-400 text-2xl animate-spin">
          ⛩️
        </div>
        <div className="absolute bottom-20 right-10 text-pink-300 text-3xl animate-bounce">
          🗾
        </div>
      </div>

      {/* Neon scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
    </section>
  );
} 