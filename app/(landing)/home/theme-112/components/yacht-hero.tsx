import React from 'react';

export default function YachtHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Ocean surface reflection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 mb-4 tracking-wider">
            LUXURY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
              YACHTS
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-12 leading-relaxed">
          Experience the ultimate in maritime luxury. 
          Discover pristine waters and unforgettable adventures aboard our premium fleet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">EXPLORE FLEET</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300">
            BOOK CHARTER
          </button>
        </div>
        
        {/* Marine stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">25+</div>
            <div className="text-cyan-100">Luxury Yachts</div>
            <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 group-hover:bg-cyan-300 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">50+</div>
            <div className="text-cyan-100">Destinations</div>
            <div className="w-16 h-1 bg-blue-400 mx-auto mt-2 group-hover:bg-blue-300 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">24/7</div>
            <div className="text-cyan-100">Support</div>
            <div className="w-16 h-1 bg-teal-400 mx-auto mt-2 group-hover:bg-teal-300 transition-colors"></div>
          </div>
        </div>
        
        {/* Nautical elements */}
        <div className="absolute top-20 left-20 text-cyan-400 text-sm opacity-60 animate-pulse">
          ⚓ Captain's Choice
        </div>
        <div className="absolute bottom-20 right-20 text-blue-400 text-sm opacity-60 animate-pulse">
          🌊 Ocean Ready
        </div>
      </div>
    </section>
  );
} 