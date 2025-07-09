import React from 'react';

export default function NordicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50"></div>
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(90deg, transparent 98%, rgba(100, 116, 139, 0.1) 100%),
                            linear-gradient(0deg, transparent 98%, rgba(148, 163, 184, 0.1) 100%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main heading with clean typography */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-slate-800 tracking-wide">
            Nordic
          </h1>
          <div className="text-2xl md:text-3xl font-light text-slate-600 mb-8 tracking-wide">
            🌲 Minimalist Living ❄️
          </div>
        </div>

        {/* Subtitle with hygge philosophy */}
        <div className="mb-16">
          <p className="text-xl md:text-2xl text-slate-700 mb-6 font-light leading-relaxed">
            Embrace the art of simple living with Scandinavian design principles
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light">
            Where comfort meets minimalism in perfect harmony
          </p>
        </div>

        {/* CTA Buttons with clean design */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-slate-800 text-white font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-sm">
            🌲 Explore Lifestyle
          </button>
          <button className="px-8 py-4 border border-slate-300 text-slate-700 font-light rounded-lg hover:bg-slate-50 transition-all duration-300 transform hover:scale-105">
            ❄️ Learn More
          </button>
        </div>

        {/* Floating Nordic elements */}
        <div className="absolute top-20 left-20 text-slate-400 text-3xl animate-pulse">
          🏔️
        </div>
        <div className="absolute top-40 right-20 text-gray-400 text-2xl animate-bounce">
          🧸
        </div>
        <div className="absolute bottom-40 left-10 text-blue-400 text-2xl animate-spin">
          🌲
        </div>
        <div className="absolute bottom-20 right-10 text-slate-300 text-2xl animate-bounce">
          ❄️
        </div>
      </div>

      {/* Subtle accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
} 