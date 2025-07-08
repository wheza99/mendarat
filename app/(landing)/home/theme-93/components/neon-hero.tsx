import React from 'react';

export default function NeonHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-pink-500/20 via-purple-500/20 to-cyan-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-conic from-yellow-400/15 via-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Glitch Text Effect */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 relative">
            <span className="block text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse">
              CYBER
            </span>
            <span className="block text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-pulse" style={{animationDelay: '0.5s'}}>
              FUTURE
            </span>
            <span className="block text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-pulse" style={{animationDelay: '1s'}}>
              NOW
            </span>
          </h1>
          
          {/* Glitch Overlay */}
          <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-pink-500 opacity-20 animate-pulse" style={{animationDuration: '0.1s'}}>
            <span className="block">CYBER</span>
            <span className="block">FUTURE</span>
            <span className="block">NOW</span>
          </div>
        </div>

        {/* Neon Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className="text-pink-400 font-semibold">Experience the future</span> with cutting-edge technology and 
          <span className="text-purple-400 font-semibold"> neon-powered</span> solutions that 
          <span className="text-cyan-400 font-semibold"> revolutionize</span> your digital world
        </p>

        {/* Neon CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 animate-pulse"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-cyan-400 hover:text-black">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Neon Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-500 mb-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
              99.9%
            </div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
              24/7
            </div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
              50K+
            </div>
            <div className="text-gray-400">Happy Users</div>
          </div>
        </div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
} 