'use client';

import { useState } from 'react';

const researchLabs = [
  {
    name: 'Quantum Physics Institute',
    location: 'Europa Research Station',
    field: 'Quantum Mechanics',
    breakthroughs: 23,
    projects: 156,
    description: 'Pioneering research in quantum entanglement and manipulation of spacetime fabric.',
    icon: '⚛️',
    discoveries: ['Quantum Teleportation', 'Time Dilation Fields', 'Parallel Universe Detection']
  },
  {
    name: 'Xenobiology Research Center',
    location: 'TRAPPIST-1 Orbital Lab',
    field: 'Alien Life Sciences',
    breakthroughs: 47,
    projects: 89,
    description: 'Study of alien life forms and development of inter-species communication protocols.',
    icon: '🧬',
    discoveries: ['Silicon-based Life', 'Telepathic Species', 'Energy-based Organisms']
  },
  {
    name: 'Consciousness Transfer Lab',
    location: 'Mars Neural Network',
    field: 'Digital Consciousness',
    breakthroughs: 12,
    projects: 67,
    description: 'Research into uploading human consciousness and creating digital immortality.',
    icon: '🧠',
    discoveries: ['Memory Encoding', 'Digital Souls', 'Consciousness Backup']
  },
  {
    name: 'Dimensional Gateway Facility',
    location: 'Deep Space Void',
    field: 'Interdimensional Physics',
    breakthroughs: 8,
    projects: 34,
    description: 'Experimental research into alternate dimensions and parallel reality access.',
    icon: '🌀',
    discoveries: ['Portal Stability', 'Dimension Mapping', 'Reality Anchoring']
  }
];

const discoveries = [
  { year: '2157', title: 'Quantum Consciousness Theory', impact: 'Revolutionary' },
  { year: '2154', title: 'FTL Communication Protocol', impact: 'Breakthrough' },
  { year: '2152', title: 'Alien Agriculture Synthesis', impact: 'Major' },
  { year: '2151', title: 'Temporal Stabilization Matrix', impact: 'Critical' },
  { year: '2149', title: 'Dark Matter Manipulation', impact: 'Revolutionary' }
];

export default function Innovation() {
  const [selectedLab, setSelectedLab] = useState(0);
  const [activeDiscovery, setActiveDiscovery] = useState(0);

  return (
    <section className="py-20 px-4 relative">
      {/* Background research elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Molecular structure */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
          <div className="relative w-full h-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-cyan-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${60 * i}deg) 
                    translateY(-40px)
                  `
                }}
              />
            ))}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        {/* DNA helix */}
        <div className="absolute bottom-20 right-20 w-8 h-48 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                top: `${i * 8}%`,
                left: `${Math.sin(i * 0.5) * 20 + 50}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-400/30 rounded-full mb-8">
            <span className="text-xl">🔬</span>
            <span className="font-mono text-purple-400 tracking-wider uppercase text-sm">Research & Innovation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8">
            Scientific Frontiers
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge research facilities pushing the boundaries of human knowledge. 
            Every breakthrough brings us closer to understanding the 
            <span className="text-purple-400"> fundamental nature of reality</span>.
          </p>
        </div>

        {/* Research Labs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="space-y-6">
            {researchLabs.map((lab, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  selectedLab === index
                    ? 'bg-slate-800/50 border-2 border-purple-400/50 quantum-pulse'
                    : 'bg-slate-800/20 border border-slate-700/50 hover:border-slate-600/50'
                }`}
                onClick={() => setSelectedLab(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`text-4xl transition-all duration-300 ${
                        selectedLab === index ? 'hologram-flicker scale-110' : ''
                      }`}>
                        {lab.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          selectedLab === index ? 'text-purple-400' : 'text-white'
                        }`}>
                          {lab.name}
                        </h3>
                        <p className="text-slate-400 text-sm">{lab.location}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-purple-400 font-mono text-lg">{lab.breakthroughs}</div>
                      <div className="text-slate-400 text-xs">Breakthroughs</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {lab.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400 text-sm">Research Field:</span>
                    <span className="text-cyan-400 font-semibold">{lab.field}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Active Projects:</span>
                    <span className="text-green-400 font-mono">{lab.projects}</span>
                  </div>
                </div>

                {selectedLab === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500 rounded-r" />
                )}
              </div>
            ))}
          </div>

          {/* Lab Details Panel */}
          <div className="relative">
            <div className="sticky top-8 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{researchLabs[selectedLab].icon}</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  {researchLabs[selectedLab].name}
                </h3>
                <p className="text-slate-400">{researchLabs[selectedLab].field}</p>
              </div>
              
              {/* Lab Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-purple-400 font-mono text-2xl">{researchLabs[selectedLab].breakthroughs}</div>
                  <div className="text-slate-400 text-sm">Breakthroughs</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-cyan-400 font-mono text-2xl">{researchLabs[selectedLab].projects}</div>
                  <div className="text-slate-400 text-sm">Active Projects</div>
                </div>
              </div>
              
              {/* Recent Discoveries */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Recent Discoveries</h4>
                <div className="space-y-3">
                  {researchLabs[selectedLab].discoveries.map((discovery, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/20 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-slate-300">{discovery}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Discoveries */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Timeline of Major Discoveries</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-500" />
            
            <div className="space-y-8">
              {discoveries.map((discovery, index) => (
                <div
                  key={index}
                  className={`relative flex items-center cursor-pointer transition-all duration-300 ${
                    activeDiscovery === index ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveDiscovery(index)}
                >
                  {/* Timeline dot */}
                  <div className={`relative w-4 h-4 rounded-full mr-6 transition-all duration-300 ${
                    activeDiscovery === index
                      ? 'bg-purple-400 quantum-pulse'
                      : 'bg-slate-600'
                  }`} />
                  
                  {/* Discovery card */}
                  <div className={`flex-1 p-6 rounded-xl transition-all duration-300 ${
                    activeDiscovery === index
                      ? 'bg-slate-800/50 border border-purple-400/50'
                      : 'bg-slate-800/20 border border-slate-700/50'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className={`text-lg font-bold transition-colors duration-300 ${
                          activeDiscovery === index ? 'text-purple-400' : 'text-white'
                        }`}>
                          {discovery.title}
                        </h4>
                        <p className="text-slate-400 font-mono">{discovery.year}</p>
                      </div>
                      
                      <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                        discovery.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                        discovery.impact === 'Critical' ? 'bg-orange-500/20 text-orange-400' :
                        discovery.impact === 'Breakthrough' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {discovery.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Research Facilities', value: '847', icon: '🏗️' },
            { label: 'Active Scientists', value: '12.5K', icon: '👨‍🔬' },
            { label: 'Patents Filed', value: '234K', icon: '📜' },
            { label: 'Breakthrough Rate', value: '2.3/day', icon: '💡' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/20 border border-slate-700/50 rounded-xl hover:border-purple-400/30 transition-all duration-300">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400 font-mono mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 