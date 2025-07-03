'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDepth, setCurrentDepth] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate descending into ocean depths
    const interval = setInterval(() => {
      setCurrentDepth(prev => (prev + 1) % 11000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Deep ocean background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sunlight rays from above */}
        <div className="absolute top-0 left-1/4 w-2 h-96 bg-gradient-to-b from-cyan-200/20 to-transparent transform rotate-12 ocean-wave" />
        <div className="absolute top-0 left-1/2 w-3 h-80 bg-gradient-to-b from-cyan-300/30 to-transparent transform -rotate-6 ocean-wave" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/3 w-2 h-72 bg-gradient-to-b from-cyan-200/20 to-transparent transform rotate-8 ocean-wave" style={{ animationDelay: '2s' }} />
        
        {/* Floating bubbles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-300/20 bubble-rise"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 8 + 's',
              animationDuration: (6 + Math.random() * 4) + 's'
            }}
          />
        ))}
        
        {/* Deep sea creatures silhouettes */}
        <div className="absolute top-20 right-10 text-6xl opacity-20 current-flow">🐋</div>
        <div className="absolute top-40 left-20 text-4xl opacity-15 current-flow" style={{ animationDelay: '3s' }}>🦑</div>
        <div className="absolute bottom-40 right-1/4 text-3xl opacity-10 current-flow" style={{ animationDelay: '6s' }}>🐙</div>
      </div>

      {/* Main content */}
      <div className={'text-center relative z-10 transition-all duration-2000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20')}>
        {/* Depth indicator */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-900/30 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="text-2xl">🌊</span>
            <span className="font-mono text-cyan-300 tracking-wider uppercase text-sm">Depth: {currentDepth.toLocaleString()}m</span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bio-luminescence">
            Ocean
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bio-luminescence" style={{ animationDelay: '1s' }}>
            Depths
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-cyan-200 leading-relaxed mb-6">
            Explore the mysterious depths of our oceans through cutting-edge marine research and 
            <span className="text-cyan-400 font-semibold"> underwater exploration technology</span>
          </p>
          <p className="text-lg text-slate-300">
            Dive into the unknown and discover the wonders that lie beneath the waves
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            <span className="flex items-center gap-3">
              <span>Begin Expedition</span>
              <span className="group-hover:translate-x-1 transition-transform">🏊‍♂️</span>
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-transparent border-2 border-cyan-400/50 hover:border-cyan-400 rounded-full font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center gap-3">
              <span>Research Data</span>
              <span className="group-hover:rotate-12 transition-transform">📊</span>
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Ocean Coverage', value: '71%', icon: '🌍' },
            { label: 'Species Discovered', value: '230K+', icon: '🐠' },
            { label: 'Max Depth Reached', value: '11,034m', icon: '⚓' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-cyan-900/20 border border-cyan-500/20 rounded-xl backdrop-blur-sm deep-pressure" style={{ animationDelay: index * 0.5 + 's' }}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 font-mono mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-cyan-400 mb-2 text-sm font-mono">Dive Deeper</div>
        <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mx-auto bubble-rise" style={{ animationDuration: '2s' }} />
      </div>
    </section>
  );
} 