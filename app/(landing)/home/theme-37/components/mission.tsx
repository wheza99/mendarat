'use client';

import { useState, useEffect } from 'react';

const missionPhases = [
  {
    phase: 'Phase I',
    title: 'Solar System Mastery',
    timeline: '2157 - 2175',
    status: 'Active',
    description: 'Complete colonization and terraforming of all habitable planets and moons within our solar system.',
    objectives: [
      'Mars Colony Population: 50M+',
      'Europa Ocean Cities: 12 Stations',
      'Titan Atmospheric Mining: Operational',
      'Asteroid Belt Infrastructure: 200+ Facilities'
    ],
    progress: 78,
    icon: '🪐'
  },
  {
    phase: 'Phase II',
    title: 'Interstellar Expansion',
    timeline: '2175 - 2200',
    status: 'Planned',
    description: 'Establish permanent colonies in nearby star systems using quantum drive technology.',
    objectives: [
      'Proxima Centauri Outpost: Established',
      'Alpha Centauri Trade Route: Active',
      'TRAPPIST-1 Scientific Base: Operational',
      'Kepler-442b Terra-forming: Initiated'
    ],
    progress: 23,
    icon: '🌟'
  },
  {
    phase: 'Phase III',
    title: 'Galactic Network',
    timeline: '2200 - 2300',
    status: 'Development',
    description: 'Create a network of civilizations and establish humanity as a galactic power.',
    objectives: [
      'Galactic Council Membership: Achieved',
      'Inter-Species Alliances: 50+ Treaties',
      'Quantum Communication Grid: Galaxy-wide',
      'Technology Exchange Programs: Active'
    ],
    progress: 8,
    icon: '🌌'
  },
  {
    phase: 'Phase IV',
    title: 'Dimensional Mastery',
    timeline: '2300+',
    status: 'Theoretical',
    description: 'Transcend physical limitations and explore parallel dimensions and alternate realities.',
    objectives: [
      'Dimensional Portal Network: Established',
      'Multi-verse Exploration: Initiated',
      'Temporal Technology: Mastered',
      'Consciousness Transfer: Perfected'
    ],
    progress: 2,
    icon: '∞'
  }
];

const currentMissions = [
  {
    name: 'Operation Stellar Dawn',
    target: 'Proxima Centauri b',
    crew: 847,
    duration: '12.5 years',
    status: 'En Route',
    progress: 34
  },
  {
    name: 'Project Genesis',
    target: 'Europa Subsurface',
    crew: 156,
    duration: '3.2 years',
    status: 'Operational',
    progress: 89
  },
  {
    name: 'Quantum Gate Alpha',
    target: 'Deep Space',
    crew: 23,
    duration: '∞',
    status: 'Research',
    progress: 67
  }
];

export default function Mission() {
  const [activePhase, setActivePhase] = useState(0);
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

    const element = document.getElementById('mission-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="py-20 px-4 relative">
      {/* Background mission control elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mission control grid */}
        <div className="absolute top-1/4 right-10 w-40 h-40 border border-green-400/20 space-float">
          <div className="absolute inset-4 border border-green-400/10" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-green-400/20" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-green-400/20" />
        </div>
        
        {/* Floating mission icons */}
        <div className="absolute top-1/3 left-10 text-3xl text-green-400/30 space-float">🚀</div>
        <div className="absolute bottom-1/4 right-1/4 text-2xl text-blue-400/30 space-float" style={{ animationDelay: '2s' }}>🛰️</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-400/30 rounded-full mb-8">
            <span className="text-xl">🎯</span>
            <span className="font-mono text-green-400 tracking-wider uppercase text-sm">Mission Control</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-8">
            Humanity's Grand Mission
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A carefully orchestrated plan spanning centuries to transform humanity into a 
            <span className="text-green-400"> multi-dimensional civilization</span>. 
            Each phase builds upon the last, pushing the boundaries of what's possible.
          </p>
        </div>

        {/* Mission Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Mission Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-cyan-400 to-purple-400 rounded-full" />
            
            {/* Timeline phases */}
            <div className="space-y-16">
              {missionPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onClick={() => setActivePhase(index)}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-300 cursor-pointer ${
                    activePhase === index
                      ? 'bg-cyan-400 border-cyan-400 quantum-pulse'
                      : 'bg-slate-800 border-slate-600 hover:border-slate-500'
                  }`} />
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                      activePhase === index
                        ? 'bg-slate-800/50 border-2 border-cyan-400/50 quantum-pulse'
                        : 'bg-slate-800/20 border border-slate-700/50 hover:border-slate-600/50'
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`text-4xl transition-all duration-300 ${
                          activePhase === index ? 'hologram-flicker scale-110' : ''
                        }`}>
                          {phase.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className={`text-xl font-bold transition-colors duration-300 ${
                              activePhase === index ? 'text-cyan-400' : 'text-white'
                            }`}>
                              {phase.title}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                              phase.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                              phase.status === 'Planned' ? 'bg-yellow-500/20 text-yellow-400' :
                              phase.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {phase.status}
                            </span>
                          </div>
                          <p className="text-slate-400 font-mono text-sm">{phase.timeline}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {phase.description}
                      </p>
                      
                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-400 text-xs">Progress</span>
                          <span className="text-cyan-400 text-xs font-mono">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                            style={{ width: `${phase.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      {/* Objectives preview */}
                      <div className="text-slate-400 text-sm">
                        <span className="font-semibold">Key Objectives:</span> {phase.objectives.length} milestones
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Active Missions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Active Missions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentMissions.map((mission, index) => (
              <div key={index} className="relative p-6 bg-slate-800/20 border border-slate-700/50 rounded-2xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{mission.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                    mission.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                    mission.status === 'En Route' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {mission.status}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target:</span>
                    <span className="text-cyan-400">{mission.target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Crew:</span>
                    <span className="text-white">{mission.crew}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Duration:</span>
                    <span className="text-purple-400">{mission.duration}</span>
                  </div>
                </div>
                
                {/* Mission progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Mission Progress</span>
                    <span className="text-cyan-400 text-sm font-mono">{mission.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-1000"
                      style={{ width: `${mission.progress}%` }}
                    />
                  </div>
                </div>

                {/* Mission status indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Command Center */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-3xl">
            <div className="flex items-center gap-6">
              <div className="text-5xl space-float">🎮</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Join Mission Control</h3>
                <p className="text-slate-300 text-lg">Help guide humanity's expansion across the cosmos</p>
              </div>
              <div className="text-3xl animate-pulse">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 