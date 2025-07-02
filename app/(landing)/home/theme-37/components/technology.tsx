'use client';

import { useState } from 'react';

const technologies = [
  {
    name: 'Quantum Drive Engines',
    category: 'Propulsion Systems',
    description: 'Revolutionary quantum entanglement propulsion that enables faster-than-light travel through folded space-time.',
    capabilities: ['FTL Travel', 'Zero Fuel', 'Instant Acceleration', 'Temporal Stability'],
    icon: '⚛️',
    progress: 95,
    status: 'Operational'
  },
  {
    name: 'Neural Interface Matrix',
    category: 'Human Enhancement',
    description: 'Direct brain-computer interface allowing seamless integration with spacecraft systems and AI networks.',
    capabilities: ['Thought Control', 'Memory Upload', 'Skill Transfer', 'Consciousness Backup'],
    icon: '🧠',
    progress: 78,
    status: 'Beta Testing'
  },
  {
    name: 'Holographic Matter',
    category: 'Material Science',
    description: 'Programmable matter that can reshape itself into any configuration using holographic blueprint technology.',
    capabilities: ['Shape Shifting', 'Self Repair', 'Density Control', 'Molecular Programming'],
    icon: '🔷',
    progress: 67,
    status: 'Development'
  },
  {
    name: 'Temporal Field Generator',
    category: 'Spacetime Manipulation',
    description: 'Creates localized time dilation fields for scientific research and emergency escape protocols.',
    capabilities: ['Time Dilation', 'Temporal Shields', 'Chronoport', 'Timeline Stabilization'],
    icon: '⏳',
    progress: 45,
    status: 'Research Phase'
  },
  {
    name: 'AI Consciousness Core',
    category: 'Artificial Intelligence',
    description: 'Sentient AI system capable of independent thought, emotion, and creative problem-solving.',
    capabilities: ['Self Awareness', 'Emotional Processing', 'Creative Thinking', 'Quantum Learning'],
    icon: '🤖',
    progress: 89,
    status: 'Limited Deployment'
  },
  {
    name: 'Dimensional Gateway',
    category: 'Interdimensional Tech',
    description: 'Portal technology enabling travel between parallel dimensions and alternate realities.',
    capabilities: ['Portal Creation', 'Dimension Scanning', 'Reality Mapping', 'Cross-Dimensional Comm'],
    icon: '🌀',
    progress: 23,
    status: 'Theoretical'
  }
];

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(0);

  return (
    <section className="py-20 px-4 relative">
      {/* Background tech patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit patterns */}
        <div className="absolute top-10 left-10 w-48 h-48 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="1" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#circuit)" className="text-cyan-400" />
          </svg>
        </div>
        
        {/* Floating data nodes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full space-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 border border-blue-400/30 rounded-full mb-8">
            <span className="text-xl">⚗️</span>
            <span className="font-mono text-blue-400 tracking-wider uppercase text-sm">Advanced Technologies</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
            Future Tech Arsenal
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Breakthrough technologies that push the boundaries of physics and redefine what's possible. 
            Each innovation brings humanity closer to becoming a 
            <span className="text-blue-400"> Type III civilization</span>.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                selectedTech === index
                  ? 'bg-slate-800/50 border-2 border-cyan-400/50 quantum-pulse'
                  : 'bg-slate-800/20 border border-slate-700/50 hover:border-slate-600/50'
              }`}
              onClick={() => setSelectedTech(index)}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl transition-all duration-300 ${
                    selectedTech === index ? 'hologram-flicker scale-110' : ''
                  }`}>
                    {tech.icon}
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                    tech.progress >= 80 ? 'bg-green-500/20 text-green-400' :
                    tech.progress >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {tech.status}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  selectedTech === index ? 'text-cyan-400' : 'text-white'
                }`}>
                  {tech.name}
                </h3>
                
                <p className="text-slate-400 text-sm mb-3">{tech.category}</p>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {tech.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-xs">Development Progress</span>
                    <span className="text-cyan-400 text-xs font-mono">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                      style={{ width: `${tech.progress}%` }}
                    />
                  </div>
                </div>
                
                {/* Capabilities */}
                <div className="space-y-2">
                  <span className="text-slate-400 text-xs uppercase tracking-wider">Key Capabilities</span>
                  <div className="flex flex-wrap gap-2">
                    {tech.capabilities.map((capability, capIndex) => (
                      <span
                        key={capIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selection glow */}
              {selectedTech === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Technology Details Panel */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Detailed Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{technologies[selectedTech].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                    {technologies[selectedTech].name}
                  </h3>
                  <p className="text-slate-400">{technologies[selectedTech].category}</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {technologies[selectedTech].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Operational Specifications</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-cyan-400 font-mono text-2xl">{technologies[selectedTech].progress}%</div>
                    <div className="text-slate-400 text-sm">Completion Rate</div>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-purple-400 font-mono text-2xl">{technologies[selectedTech].capabilities.length}</div>
                    <div className="text-slate-400 text-sm">Core Functions</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Interactive Visualization */}
            <div className="relative h-64 lg:h-full">
              <div className="relative h-full bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden">
                {/* Holographic display simulation */}
                <div className="absolute inset-4 border border-cyan-400/20 rounded-lg">
                  <div className="absolute inset-2 border border-cyan-400/10 rounded" />
                </div>
                
                {/* Central tech visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`relative w-32 h-32 rounded-full border-4 border-cyan-400/50 quantum-pulse ${
                    technologies[selectedTech].progress >= 80 ? 'bg-green-500/20' :
                    technologies[selectedTech].progress >= 50 ? 'bg-yellow-500/20' :
                    'bg-red-500/20'
                  }`}>
                    {/* Inner tech icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {technologies[selectedTech].icon}
                    </div>
                    
                    {/* Orbiting elements */}
                    {technologies[selectedTech].capabilities.map((_, capIndex) => (
                      <div
                        key={capIndex}
                        className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `
                            translate(-50%, -50%) 
                            rotate(${(360 / technologies[selectedTech].capabilities.length) * capIndex}deg) 
                            translateY(-60px)
                          `,
                          animation: `spin ${5 + capIndex}s linear infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Data readouts */}
                <div className="absolute top-4 left-4 text-cyan-400/70 font-mono text-xs">
                  STATUS: {technologies[selectedTech].status.toUpperCase()}
                </div>
                <div className="absolute top-4 right-4 text-cyan-400/70 font-mono text-xs">
                  PROGRESS: {technologies[selectedTech].progress}%
                </div>
                <div className="absolute bottom-4 left-4 text-cyan-400/70 font-mono text-xs">
                  TECH_ID: {String(selectedTech + 1).padStart(3, '0')}
                </div>
                
                {/* Scan lines */}
                <div className="absolute inset-0 scanning-lines opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg) translateY(-60px); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateY(-60px); }
        }
      `}</style>
    </section>
  );
} 