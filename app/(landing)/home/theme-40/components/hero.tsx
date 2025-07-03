'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [solDay, setSolDay] = useState(1247);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate Mars sol (day) counter
    const interval = setInterval(() => {
      setSolDay(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Mars surface background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red planet glow */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/20 rounded-full mars-glow" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-500/15 rounded-full mars-glow" style={{ animationDelay: '2s' }} />
        
        {/* Rocky terrain silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-900/30 to-transparent" />
        <div className="absolute bottom-0 left-10 w-16 h-24 bg-red-800/20" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }} />
        <div className="absolute bottom-0 right-32 w-20 h-20 bg-orange-800/20" style={{ clipPath: 'polygon(0 100%, 30% 0, 80% 0, 100% 100%)' }} />
        
        {/* Spacecraft trails */}
        <div className="absolute top-1/4 left-1/4 w-64 h-1 bg-gradient-to-r from-orange-400/20 to-transparent rocket-boost" />
        <div className="absolute top-1/3 right-1/3 w-48 h-1 bg-gradient-to-r from-red-400/20 to-transparent rocket-boost" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className={'text-center relative z-10 transition-all duration-2000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20')}>
        {/* Sol counter */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-900/30 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <span className="text-2xl">🚀</span>
            <span className="font-mono text-orange-300 tracking-wider uppercase text-sm">Sol {solDay.toLocaleString()}</span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mars-glow">
            Mars
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 mars-glow" style={{ animationDelay: '1s' }}>
            Colony
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-orange-200 leading-relaxed mb-6">
            Pioneering humanity's future on the Red Planet through 
            <span className="text-orange-400 font-semibold"> advanced terraforming technology</span> and 
            <span className="text-red-400 font-semibold"> sustainable colonization</span>
          </p>
          <p className="text-lg text-slate-300">
            Join the greatest adventure in human history - building civilization on Mars
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 rocket-boost">
            <span className="flex items-center gap-3">
              <span>Join Colony</span>
              <span className="group-hover:translate-x-1 transition-transform">🚀</span>
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-transparent border-2 border-orange-400/50 hover:border-orange-400 rounded-full font-semibold text-orange-400 hover:text-orange-300 transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center gap-3">
              <span>Mission Data</span>
              <span className="group-hover:rotate-12 transition-transform">📡</span>
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Colonists', value: '2,847', icon: '👨‍🚀' },
            { label: 'Habitat Modules', value: '156', icon: '🏠' },
            { label: 'Years on Mars', value: '12', icon: '🔴' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-red-900/20 border border-orange-500/20 rounded-xl backdrop-blur-sm terraforming" style={{ animationDelay: index * 0.5 + 's' }}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-orange-400 font-mono mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-orange-400 mb-2 text-sm font-mono">Explore Colony</div>
        <div className="w-1 h-16 bg-gradient-to-b from-orange-400 to-transparent rounded-full mx-auto rocket-boost" style={{ animationDuration: '2s' }} />
      </div>
    </section>
  );
} 