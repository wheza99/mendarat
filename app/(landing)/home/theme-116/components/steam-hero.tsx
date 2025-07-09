import React from 'react';

export default function SteamHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Steam reflection effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 mb-4 tracking-wider font-serif">
            STEAM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400">
              WORKS
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8 animate-pulse"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-amber-200 max-w-3xl mx-auto mb-12 leading-relaxed font-serif">
          Where innovation meets tradition. Experience the power of steam and mechanical engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden font-serif">
            <span className="relative z-10">START ENGINE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-amber-900 transition-all duration-300 font-serif">
            VIEW WORKS
          </button>
        </div>
        
        {/* Industrial stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">100+</div>
            <div className="text-amber-200">Steam Engines</div>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 group-hover:bg-amber-300 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">50+</div>
            <div className="text-amber-200">Years Experience</div>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-2 group-hover:bg-orange-300 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">24/7</div>
            <div className="text-amber-200">Steam Power</div>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 group-hover:bg-yellow-300 transition-colors"></div>
          </div>
        </div>
        
        {/* Steampunk elements */}
        <div className="absolute top-20 left-20 text-amber-400 text-sm opacity-60 animate-pulse font-serif">
          ⚙️ INDUSTRIAL
        </div>
        <div className="absolute bottom-20 right-20 text-orange-400 text-sm opacity-60 animate-pulse font-serif">
          🔧 STEAM
        </div>
      </div>
    </section>
  );
} 