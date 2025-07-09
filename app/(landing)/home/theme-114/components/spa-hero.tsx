import React from 'react';

export default function SpaHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Zen reflection effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-100/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4 tracking-wider">
            SERENITY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500">
              SPA
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-rose-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Experience ultimate relaxation and rejuvenation. 
          Discover inner peace through our luxurious wellness treatments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">BOOK TREATMENT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="px-8 py-4 border-2 border-rose-500 text-rose-600 font-bold rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300">
            VIEW PACKAGES
          </button>
        </div>
        
        {/* Wellness stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-bold text-rose-600 mb-2 group-hover:text-rose-500 transition-colors">50+</div>
            <div className="text-rose-700">Wellness Treatments</div>
            <div className="w-16 h-1 bg-rose-500 mx-auto mt-2 group-hover:bg-rose-400 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-pink-600 mb-2 group-hover:text-pink-500 transition-colors">1000+</div>
            <div className="text-rose-700">Happy Clients</div>
            <div className="w-16 h-1 bg-pink-500 mx-auto mt-2 group-hover:bg-pink-400 transition-colors"></div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-500 transition-colors">5★</div>
            <div className="text-rose-700">Average Rating</div>
            <div className="w-16 h-1 bg-purple-500 mx-auto mt-2 group-hover:bg-purple-400 transition-colors"></div>
          </div>
        </div>
        
        {/* Zen elements */}
        <div className="absolute top-20 left-20 text-rose-500 text-sm opacity-60 animate-pulse">
          🧘‍♀️ Inner Peace
        </div>
        <div className="absolute bottom-20 right-20 text-pink-500 text-sm opacity-60 animate-pulse">
          🌸 Wellness
        </div>
      </div>
    </section>
  );
} 