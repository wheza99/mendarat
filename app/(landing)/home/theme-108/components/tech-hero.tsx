import React from 'react';

export default function TechHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Glowing accent lines */}
      <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-cyan-400 to-transparent opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-32 h-1 bg-gradient-to-l from-purple-400 to-transparent opacity-60"></div>
      
      {/* Main heading with glow effect */}
      <div className="relative mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 mb-4">
          INNOVATE
        </h1>
        <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-cyan-400/20 blur-sm">
          INNOVATE
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
        Transform your ideas into reality with cutting-edge technology solutions. 
        We build the future, one innovation at a time.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
          Start Building
        </button>
        <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
          Learn More
        </button>
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 right-1/4 text-cyan-400 text-sm opacity-60 animate-pulse">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-purple-400 text-sm opacity-60 animate-pulse">
        {`{ }`}
      </div>
    </section>
  );
} 