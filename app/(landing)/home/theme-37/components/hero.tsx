'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [activeStats, setActiveStats] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: 'Galaxies Explored', value: '2,847', unit: 'Systems' },
    { label: 'Light Years Traveled', value: '∞', unit: 'Distance' },
    { label: 'Alien Civilizations', value: '156', unit: 'Contacted' },
    { label: 'Future Technologies', value: '2157', unit: 'Discovered' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStats(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Holographic UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Holographic grid */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-cyan-400/30 hologram-flicker space-float">
          <div className="absolute inset-2 border border-cyan-400/20" />
          <div className="absolute inset-4 border border-cyan-400/10" />
        </div>
        
        {/* Data streams */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-cyan-400 to-transparent data-stream"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
        
        {/* Floating tech icons */}
        <div className="absolute top-1/3 right-20 text-4xl text-cyan-400/50 space-float" style={{ animationDelay: '1s' }}>🛸</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl text-purple-400/50 space-float" style={{ animationDelay: '2s' }}>🌌</div>
        <div className="absolute top-1/2 right-1/3 text-2xl text-blue-400/50 space-float" style={{ animationDelay: '3s' }}>⚡</div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8 quantum-pulse">
            <span className="text-xl">🚀</span>
            <span className="font-mono text-cyan-400 tracking-wider uppercase text-sm">Space Exploration 2157</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hologram-flicker">
              BEYOND THE
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400">
              KNOWN UNIVERSE
            </span>
            
            {/* Glitch effect overlay */}
            <div className="absolute inset-0 text-cyan-300 opacity-30 animate-pulse">
              BEYOND THE<br />KNOWN UNIVERSE
            </div>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Embark on humanity's greatest adventure through the cosmos. 
            <span className="text-cyan-400"> Discover alien civilizations</span>, 
            explore distant galaxies, and unlock the secrets of 
            <span className="text-purple-400"> advanced technologies</span> 
            that will shape our future.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 quantum-pulse">
              <span className="flex items-center gap-3">
                <span>🛸</span>
                Launch Mission
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            
            <button className="group px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>🌌</span>
                Explore Galaxy Map
                <span className="group-hover:scale-110 transition-transform">🗺️</span>
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Stats Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                activeStats === index
                  ? 'border-cyan-400/50 bg-cyan-500/10 quantum-pulse'
                  : 'border-slate-700/50 bg-slate-800/20'
              }`}
            >
              {activeStats === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-2xl" />
              )}
              
              <div className="relative z-10 text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 font-mono transition-colors duration-500 ${
                  activeStats === index ? 'text-cyan-400' : 'text-slate-300'
                }`}>
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className={`text-xs transition-colors duration-500 ${
                  activeStats === index ? 'text-cyan-300' : 'text-slate-500'
                }`}>
                  {stat.unit}
                </div>
              </div>

              {/* Scanning line effect */}
              {activeStats === index && (
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-slate-400">
            <span className="text-sm font-mono uppercase tracking-wider">Explore</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full relative">
              <div className="w-1 h-3 bg-slate-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 