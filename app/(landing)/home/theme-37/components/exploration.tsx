'use client';

import { useState, useEffect } from 'react';

const explorationDestinations = [
  {
    name: 'Kepler-452b',
    type: 'Earth-like Exoplanet',
    distance: '1,400 Light Years',
    status: 'Habitable Zone',
    description: 'A rocky planet orbiting in the habitable zone of a sun-like star. Potential for liquid water and life.',
    icon: '🌍',
    color: 'from-green-400 to-blue-500',
    discovered: '2015'
  },
  {
    name: 'Proxima Centauri b',
    type: 'Red Dwarf Exoplanet',
    distance: '4.24 Light Years',
    status: 'Closest to Earth',
    description: 'The nearest known exoplanet to our solar system, orbiting within the habitable zone.',
    icon: '🔴',
    color: 'from-red-400 to-orange-500',
    discovered: '2016'
  },
  {
    name: 'TRAPPIST-1 System',
    type: 'Seven Earth-sized Worlds',
    distance: '40 Light Years',
    status: 'Multiple Habitables',
    description: 'Seven terrestrial planets, three of which are in the habitable zone around an ultra-cool dwarf star.',
    icon: '🪐',
    color: 'from-purple-400 to-pink-500',
    discovered: '2017'
  },
  {
    name: 'TOI-715 b',
    type: 'Super-Earth',
    distance: '137 Light Years',
    status: 'Recently Discovered',
    description: 'A super-Earth exoplanet that orbits within the conservative habitable zone of its red dwarf star.',
    icon: '🌌',
    color: 'from-cyan-400 to-blue-600',
    discovered: '2024'
  }
];

export default function Exploration() {
  const [activeDestination, setActiveDestination] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('exploration-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="exploration-section" className="py-20 px-4 relative">
      {/* Section Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbital paths */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/10 rounded-full space-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-400/10 rounded-full space-float" style={{ animationDelay: '2s' }} />
        
        {/* Space particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full data-stream"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 4 + 's',
              animationDuration: (3 + Math.random() * 2) + 's'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={'text-center mb-20 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-400/30 rounded-full mb-8">
            <span className="text-xl">🔭</span>
            <span className="font-mono text-purple-400 tracking-wider uppercase text-sm">Galactic Exploration</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
            Discover New Worlds
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Journey to the most fascinating exoplanets and star systems discovered by humanity. 
            Each destination offers unique opportunities for <span className="text-cyan-400">scientific research</span> and 
            <span className="text-purple-400"> potential colonization</span>.
          </p>
        </div>

        {/* Interactive Galaxy Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Destination Cards */}
          <div className="space-y-6">
            {explorationDestinations.map((destination, index) => (
              <div
                key={index}
                className={'group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ' + (
                  activeDestination === index
                    ? 'bg-slate-800/50 border-2 border-cyan-400/50 quantum-pulse'
                    : 'bg-slate-800/20 border border-slate-700/50 hover:border-slate-600/50'
                )}
                onClick={() => setActiveDestination(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={'text-4xl ' + (activeDestination === index ? 'hologram-flicker' : '')}>
                        {destination.icon}
                      </div>
                      <div>
                        <h3 className={'text-2xl font-bold transition-colors duration-300 ' + (
                          activeDestination === index ? 'text-cyan-400' : 'text-white'
                        )}>
                          {destination.name}
                        </h3>
                        <p className="text-slate-400 text-sm">{destination.type}</p>
                      </div>
                    </div>
                    
                    <div className={'px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ' + (
                      activeDestination === index
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-slate-700/50 text-slate-400'
                    )}>
                      {destination.status}
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">📏</span>
                      <span className="text-slate-400">Distance:</span>
                      <span className="text-cyan-400 font-mono">{destination.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">📅</span>
                      <span className="text-slate-400">Discovered:</span>
                      <span className="text-purple-400 font-mono">{destination.discovered}</span>
                    </div>
                  </div>
                </div>

                {/* Selection indicator */}
                {activeDestination === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r" />
                )}
              </div>
            ))}
          </div>

          {/* 3D Visualization Area */}
          <div className="relative">
            <div className="relative h-96 lg:h-full bg-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden">
              {/* Holographic display */}
              <div className="absolute inset-4 border border-cyan-400/20 rounded-xl">
                <div className="absolute inset-2 border border-cyan-400/10 rounded-lg" />
              </div>
              
              {/* Planet visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={'relative w-48 h-48 rounded-full bg-gradient-to-br ' + explorationDestinations[activeDestination].color + ' quantum-pulse'}>
                  {/* Planet surface details */}
                  <div className="absolute inset-4 rounded-full bg-black/20" />
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/10" />
                  <div className="absolute bottom-12 right-12 w-8 h-8 rounded-full bg-white/20" />
                  
                  {/* Orbital ring */}
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  
                  {/* Data overlay */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-2xl mb-2">{explorationDestinations[activeDestination].icon}</div>
                    <div className="font-mono text-cyan-400 text-sm">{explorationDestinations[activeDestination].name}</div>
                  </div>
                </div>
              </div>
              
              {/* Scan lines */}
              <div className="absolute inset-0 scanning-lines opacity-30" />
              
              {/* Corner UI elements */}
              <div className="absolute top-4 left-4 text-cyan-400/50 font-mono text-xs">
                DEEP_SPACE_SCAN_v2.1
              </div>
              <div className="absolute top-4 right-4 text-cyan-400/50 font-mono text-xs">
                [{String(activeDestination + 1).padStart(2, '0')}/04]
              </div>
              <div className="absolute bottom-4 left-4 text-cyan-400/50 font-mono text-xs">
                STATUS: {explorationDestinations[activeDestination].status.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Exoplanets Catalogued', value: '5,638', icon: '🪐' },
            { label: 'Habitable Candidates', value: '847', icon: '🌍' },
            { label: 'Active Probes', value: '23', icon: '🛰️' },
            { label: 'Data Transmitted', value: '2.4 PB', icon: '📡' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/20 border border-slate-700/50 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 font-mono mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 