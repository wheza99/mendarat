import React, { useState, useEffect } from 'react';

export default function CosmicHero() {
  const [stats, setStats] = useState({
    galaxies: 0,
    stars: 0,
    planets: 0,
    lightYears: 0
  });

  useEffect(() => {
    const targetStats = {
      galaxies: 127,
      stars: 8420,
      planets: 2847,
      lightYears: 13800
    };

    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        galaxies: Math.floor(targetStats.galaxies * progress),
        stars: Math.floor(targetStats.stars * progress),
        planets: Math.floor(targetStats.planets * progress),
        lightYears: Math.floor(targetStats.lightYears * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin tracking-wider text-white mb-4">
            <span className="block">COSMIC</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              MINIMALISM
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Explore the infinite universe through the lens of simplicity. 
            Where vast cosmic wonders meet elegant, minimal design.
          </p>
        </div>

        {/* Cosmic Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-blue-400 mb-2">
              {stats.galaxies.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-widest">
              Galaxies Observed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-purple-400 mb-2">
              {stats.stars.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-widest">
              Stars Catalogued
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-cyan-400 mb-2">
              {stats.planets.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-widest">
              Planets Discovered
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-indigo-400 mb-2">
              {stats.lightYears.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-widest">
              Million Light Years
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white hover:border-white/40 transition-all duration-500 min-w-[200px]">
            <span className="relative z-10 text-sm uppercase tracking-widest">
              Explore Universe
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <button className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-500 min-w-[200px]">
            <span className="relative z-10 text-sm uppercase tracking-widest">
              View Gallery
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Cosmic Elements */}
        <div className="relative">
          {/* Central Cosmic Symbol */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 border border-white/20 rounded-full animate-cosmic-orbit"></div>
            <div className="absolute inset-2 border border-white/15 rounded-full animate-cosmic-orbit-reverse"></div>
            <div className="absolute inset-4 border border-white/10 rounded-full animate-cosmic-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-cosmic-pulse"></div>
          </div>

          {/* Floating Cosmic Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Planets */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-cosmic-float opacity-60"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-cosmic-drift opacity-50"></div>
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-cosmic-float opacity-40"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-cosmic-drift opacity-60"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-1/2 left-1/6 w-6 h-6 border border-white/20 rotate-45 animate-cosmic-spin opacity-30"></div>
            <div className="absolute top-1/6 right-1/6 w-4 h-4 border border-white/15 animate-cosmic-orbit opacity-40"></div>
            <div className="absolute bottom-1/6 left-1/2 w-8 h-8 border border-white/10 rounded-full animate-cosmic-pulse opacity-20"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mb-2"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-cosmic-pulse"></div>
            <div className="text-xs text-slate-400 mt-2 uppercase tracking-widest">
              Scroll
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 