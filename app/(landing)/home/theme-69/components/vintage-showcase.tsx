import React, { useState } from 'react';

export default function VintageShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'PROJ_80',
      name: 'NEON_RUNNER',
      description: 'Retro-futuristic endless runner game with synthwave aesthetics and pulsing electronic soundtrack.',
      tech: ['Pixel Art', '8-bit Audio', 'Neon Effects', 'Retro Physics'],
      year: '1985',
      status: 'LEGENDARY',
      progress: 100,
      color: 'pink'
    },
    {
      id: 'PROJ_90',
      name: 'CYBER_ARCADE',
      description: 'Classic arcade cabinet simulator bringing the golden age of gaming to modern devices.',
      tech: ['Vector Graphics', 'Analog Controls', 'CRT Simulation', 'Coin System'],
      year: '1987',
      status: 'CLASSIC',
      progress: 95,
      color: 'cyan'
    },
    {
      id: 'PROJ_A0',
      name: 'SYNTH_STUDIO',
      description: 'Professional music production suite with vintage analog synthesizer emulations and effects.',
      tech: ['Analog Modeling', 'MIDI Support', 'Real-time Effects', 'Pattern Sequencer'],
      year: '1983',
      status: 'VINTAGE',
      progress: 88,
      color: 'purple'
    },
    {
      id: 'PROJ_B0',
      name: 'RETRO_OS',
      description: 'Operating system interface inspired by 80s computer terminals with modern functionality.',
      tech: ['Terminal UI', 'Neon Themes', 'Retro Fonts', 'Command Line'],
      year: '1989',
      status: 'FUTURISTIC',
      progress: 92,
      color: 'orange'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black/80 border-2 border-cyan-400 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-cyan-400 text-sm font-mono mb-2 animate-synthwave-glow">
              {'> LOADING VINTAGE_PORTFOLIO.EXE'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-synthwave-chrome-text">
              VINTAGE SHOWCASE
            </h2>
            <p className="text-white/80 leading-relaxed font-mono">
              Explore our collection of retro projects that defined the golden age of digital creativity and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-black/80 border-2 border-pink-500 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-pink-500 text-sm mb-4 font-mono animate-synthwave-glow">
                {'> DIR /PROJECTS'}
              </div>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 font-mono ${
                      activeProject === index
                        ? `border-${project.color}-500 bg-${project.color}-500/20 text-${project.color}-500`
                        : 'border-white/20 text-white/70 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-bold">{project.id}</div>
                      <div className="text-xs bg-black/50 px-2 py-1 rounded">{project.year}</div>
                    </div>
                    <div className="text-xs mb-1">{project.name}</div>
                    <div className={`text-xs px-2 py-1 rounded inline-block ${
                      project.color === 'pink' ? 'bg-pink-500/20 text-pink-500' :
                      project.color === 'cyan' ? 'bg-cyan-400/20 text-cyan-400' :
                      project.color === 'purple' ? 'bg-purple-500/20 text-purple-500' :
                      'bg-orange-500/20 text-orange-500'
                    }`}>
                      {project.status}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Retro Computer Display */}
              <div className="mt-6 bg-black/60 border border-green-500 rounded p-3">
                <div className="text-green-500 text-xs font-mono mb-2">SYSTEM STATUS:</div>
                <div className="text-green-500 text-xs font-mono">
                  {'> PROJECTS LOADED: 4'}
                  <br />
                  {'> MEMORY USAGE: 640KB'}
                  <br />
                  {'> STATUS: READY'}
                  <br />
                  <span className="animate-synthwave-pulse">{'> _'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className={`bg-black/80 border-2 rounded-lg p-8 backdrop-blur-sm ${
              projects[activeProject].color === 'pink' ? 'border-pink-500' :
              projects[activeProject].color === 'cyan' ? 'border-cyan-400' :
              projects[activeProject].color === 'purple' ? 'border-purple-500' :
              'border-orange-500'
            }`}>
              {/* CRT Monitor Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-synthwave-pulse"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-synthwave-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-synthwave-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="text-sm text-white/60 font-mono">
                  RETRO_MONITOR_v{projects[activeProject].year}
                </div>
              </div>

              {/* Project Header */}
              <div className={`text-sm mb-4 font-mono ${
                projects[activeProject].color === 'pink' ? 'text-pink-500' :
                projects[activeProject].color === 'cyan' ? 'text-cyan-400' :
                projects[activeProject].color === 'purple' ? 'text-purple-500' :
                'text-orange-500'
              }`}>
                {'> LOAD PROJECT ' + projects[activeProject].id}
              </div>

              {/* Project Title */}
              <h3 className={`text-3xl font-bold mb-4 font-mono ${
                projects[activeProject].color === 'pink' ? 'text-pink-500' :
                projects[activeProject].color === 'cyan' ? 'text-cyan-400' :
                projects[activeProject].color === 'purple' ? 'text-purple-500' :
                'text-orange-500'
              } animate-synthwave-glow`}>
                {projects[activeProject].name}
              </h3>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 font-mono text-sm">
                <div className="bg-black/40 rounded p-3">
                  <div className="text-white/60 mb-1">RELEASE YEAR:</div>
                  <div className="text-white font-bold">{projects[activeProject].year}</div>
                </div>
                <div className="bg-black/40 rounded p-3">
                  <div className="text-white/60 mb-1">STATUS:</div>
                  <div className={`font-bold ${
                    projects[activeProject].color === 'pink' ? 'text-pink-500' :
                    projects[activeProject].color === 'cyan' ? 'text-cyan-400' :
                    projects[activeProject].color === 'purple' ? 'text-purple-500' :
                    'text-orange-500'
                  }`}>
                    {projects[activeProject].status}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              {/* Technology Stack */}
              <div className="mb-6">
                <div className="text-white/60 text-sm mb-3 font-mono">TECH_STACK:</div>
                <div className="grid grid-cols-2 gap-3">
                  {projects[activeProject].tech.map((tech, idx) => (
                    <div key={idx} className="flex items-center font-mono text-sm">
                      <div className={`w-2 h-2 rounded-full mr-3 animate-synthwave-pulse ${
                        projects[activeProject].color === 'pink' ? 'bg-pink-500' :
                        projects[activeProject].color === 'cyan' ? 'bg-cyan-400' :
                        projects[activeProject].color === 'purple' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}></div>
                      <span className="text-white/80">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 font-mono text-sm">
                  <span className="text-white/60">COMPLETION:</span>
                  <span className={`font-bold ${
                    projects[activeProject].color === 'pink' ? 'text-pink-500' :
                    projects[activeProject].color === 'cyan' ? 'text-cyan-400' :
                    projects[activeProject].color === 'purple' ? 'text-purple-500' :
                    'text-orange-500'
                  }`}>
                    {projects[activeProject].progress}%
                  </span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-4 border border-white/20">
                  <div 
                    className={`h-4 rounded-full transition-all duration-1000 ${
                      projects[activeProject].color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-400' :
                      projects[activeProject].color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-cyan-300' :
                      projects[activeProject].color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-400' :
                      'bg-gradient-to-r from-orange-500 to-orange-400'
                    } animate-synthwave-progress`}
                    style={{ width: `${projects[activeProject].progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-3 border-2 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                  projects[activeProject].color === 'pink' ? 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black' :
                  projects[activeProject].color === 'cyan' ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' :
                  projects[activeProject].color === 'purple' ? 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black' :
                  'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black'
                }`}>
                  BOOT PROGRAM
                </button>
                <button className="px-8 py-3 border-2 border-white/30 text-white/70 font-mono font-bold rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">
                  VIEW SOURCE
                </button>
              </div>

              {/* Retro Terminal Output */}
              <div className="mt-6 bg-black/60 border border-green-500 rounded p-4">
                <div className="text-green-500 text-xs font-mono">
                  {'> PROJECT LOADED SUCCESSFULLY'}
                  <br />
                  {'> INITIALIZING RETRO PROTOCOLS...'}
                  <br />
                  {'> NEON EFFECTS: ACTIVE'}
                  <br />
                  {'> SYNTHWAVE MODE: ENABLED'}
                  <br />
                  <span className="animate-synthwave-pulse">{'> READY FOR EXECUTION_'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 