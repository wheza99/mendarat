import React from 'react';

export default function EcoHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Nature reflection effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mb-4 tracking-wider">
            SUSTAINABLE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500">
              LIVING
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-green-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Join the movement towards a zero-waste future. 
          Discover eco-friendly products and sustainable living solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">SHOP SUSTAINABLE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
            LEARN MORE
          </button>
        </div>
        
        {/* Eco stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-bold text-green-600 mb-2 group-hover:text-green-500 transition-colors">500+</div>
            <div className="text-green-700">Eco Products</div>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-2 group-hover:bg-green-400 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-500 transition-colors">10K+</div>
            <div className="text-green-700">Trees Planted</div>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-2 group-hover:bg-emerald-400 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-teal-600 mb-2 group-hover:text-teal-500 transition-colors">100%</div>
            <div className="text-green-700">Plastic Free</div>
            <div className="w-16 h-1 bg-teal-500 mx-auto mt-2 group-hover:bg-teal-400 transition-colors"></div>
          </div>
        </div>
        
        {/* Eco elements */}
        <div className="absolute top-20 left-20 text-green-500 text-sm opacity-60 animate-pulse">
          🌱 Plant Based
        </div>
        <div className="absolute bottom-20 right-20 text-emerald-500 text-sm opacity-60 animate-pulse">
          ♻️ Zero Waste
        </div>
      </div>
    </section>
  );
} 