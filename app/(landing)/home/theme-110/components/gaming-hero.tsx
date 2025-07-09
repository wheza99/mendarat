import React from 'react';

export default function GamingHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Retro CRT scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent animate-pulse"></div>
      </div>
      
      {/* Glitch effect container */}
      <div className="relative mb-8">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-4 tracking-wider">
          GAME
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
            ON
          </span>
        </h1>
        {/* Glitch overlay */}
        <div className="absolute inset-0 text-6xl md:text-8xl font-black text-green-400 opacity-20 animate-pulse">
          GAME<br />ON
        </div>
        <div className="absolute inset-0 text-6xl md:text-8xl font-black text-red-400 opacity-10 animate-pulse">
          GAME<br />ON
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed font-mono">
        Enter the digital realm where pixels meet passion. 
        Experience gaming like never before with cutting-edge technology and retro aesthetics.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
          <span className="relative z-10">PLAY NOW</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
        <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 font-mono">
          JOIN TOURNAMENT
        </button>
      </div>
      
      {/* Gaming stats with neon glow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center group">
          <div className="text-4xl font-black text-green-400 mb-2 group-hover:text-green-300 transition-colors">10K+</div>
          <div className="text-gray-400 font-mono">Active Players</div>
          <div className="w-16 h-1 bg-green-400 mx-auto mt-2 group-hover:bg-green-300 transition-colors"></div>
        </div>
        <div className="text-center group">
          <div className="text-4xl font-black text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">500+</div>
          <div className="text-gray-400 font-mono">Tournaments</div>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-2 group-hover:bg-blue-300 transition-colors"></div>
        </div>
        <div className="text-center group">
          <div className="text-4xl font-black text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">24/7</div>
          <div className="text-gray-400 font-mono">Live Gaming</div>
          <div className="w-16 h-1 bg-purple-400 mx-auto mt-2 group-hover:bg-purple-300 transition-colors"></div>
        </div>
      </div>
      
      {/* Retro gaming elements */}
      <div className="absolute top-20 right-20 text-green-400 text-sm opacity-60 animate-pulse font-mono">
        &lt;PLAYER_1&gt;
      </div>
      <div className="absolute bottom-20 left-20 text-blue-400 text-sm opacity-60 animate-pulse font-mono">
        {`{SCORE: 999999}`}
      </div>
    </section>
  );
} 