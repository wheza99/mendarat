import React from 'react';

export default function MysticHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Mystical reflection effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 mb-4 tracking-wider font-serif">
            MYSTIC
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              REALMS
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-8 animate-pulse"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-12 leading-relaxed font-serif">
          Discover the ancient wisdom and mystical powers that lie beyond the veil of reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden font-serif">
            <span className="relative z-10">BEGIN JOURNEY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-purple-900 transition-all duration-300 font-serif">
            EXPLORE REALMS
          </button>
        </div>
        
        {/* Mystical stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">1000+</div>
            <div className="text-purple-200">Ancient Spells</div>
            <div className="w-16 h-1 bg-purple-400 mx-auto mt-2 group-hover:bg-purple-300 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors">500+</div>
            <div className="text-purple-200">Years Wisdom</div>
            <div className="w-16 h-1 bg-indigo-400 mx-auto mt-2 group-hover:bg-indigo-300 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-violet-400 mb-2 group-hover:text-violet-300 transition-colors">∞</div>
            <div className="text-purple-200">Mystical Power</div>
            <div className="w-16 h-1 bg-violet-400 mx-auto mt-2 group-hover:bg-violet-300 transition-colors"></div>
          </div>
        </div>
        
        {/* Mystical elements */}
        <div className="absolute top-20 left-20 text-purple-400 text-sm opacity-60 animate-pulse font-serif">
          ✨ MYSTICAL
        </div>
        <div className="absolute bottom-20 right-20 text-indigo-400 text-sm opacity-60 animate-pulse font-serif">
          🔮 ENCHANTED
        </div>
      </div>
    </section>
  );
} 