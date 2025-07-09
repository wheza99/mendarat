import React from 'react';

export default function SpaceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background space stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-black"></div>
      
      {/* Floating space elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🚀</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse">🌌</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-spin">👨‍🚀</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-bounce">🌟</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="text-indigo-200">Space</span> Exploration
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Embark on the ultimate cosmic journey with cutting-edge space technology and interstellar adventures
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            🚀 Launch Mission
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            🌌 Explore Space
          </button>
        </div>
        
        {/* Space stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-200 mb-2">100+</div>
            <div className="text-purple-100">Missions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-200 mb-2">50+</div>
            <div className="text-purple-100">Astronauts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-200 mb-2">24/7</div>
            <div className="text-purple-100">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-300 mb-2">∞</div>
            <div className="text-purple-100">Possibilities</div>
          </div>
        </div>
      </div>
      
      {/* Space star decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900 to-transparent opacity-60"></div>
    </section>
  );
} 