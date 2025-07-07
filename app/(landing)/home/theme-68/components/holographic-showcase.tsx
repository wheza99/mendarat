import React, { useState } from 'react';

export default function HolographicShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 'PROJ_001',
      name: 'NEURAL_MATRIX',
      description: 'Advanced neural network simulation with quantum processing capabilities and real-time learning algorithms.',
      tech: ['Quantum AI', 'Neural Networks', 'Deep Learning', 'Real-time Processing'],
      status: 'ACTIVE',
      progress: 98,
      color: 'green'
    },
    {
      id: 'PROJ_002', 
      name: 'CYBER_FORTRESS',
      description: 'Military-grade cybersecurity system with quantum encryption and autonomous threat detection.',
      tech: ['Quantum Encryption', 'AI Security', 'Threat Detection', 'Auto Response'],
      status: 'SECURED',
      progress: 95,
      color: 'cyan'
    },
    {
      id: 'PROJ_003',
      name: 'REALITY_ENGINE',
      description: 'Immersive virtual reality platform with photorealistic rendering and physics simulation.',
      tech: ['16K Rendering', 'Ray Tracing', 'Physics Engine', 'VR/AR'],
      status: 'RENDERING',
      progress: 87,
      color: 'magenta'
    },
    {
      id: 'PROJ_004',
      name: 'QUANTUM_CORE',
      description: 'Quantum computing infrastructure providing exponential computational power for complex calculations.',
      tech: ['1024 Qubits', 'Superposition', 'Entanglement', 'Quantum Gates'],
      status: 'ENHANCED',
      progress: 92,
      color: 'blue'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black border-2 border-magenta-500 rounded-lg p-6 max-w-2xl mx-auto font-mono">
            <div className="text-magenta-500 text-sm mb-2">
              <span className="text-green-500">root@matrix:~$</span> display_projects --holographic
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-magenta-500 mb-4 animate-matrix-neon-glow">
              PROJECT_SHOWCASE
            </h2>
            <p className="text-white/80 leading-relaxed">
              Explore our cutting-edge projects powered by advanced cybernetic technology and quantum computing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-black border-2 border-green-500 rounded-lg p-6 font-mono">
              <div className="text-green-500 text-sm mb-4">
                <span className="text-cyan-500">root@matrix:~$</span> ls projects/
              </div>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                      activeProject === index
                        ? `border-${project.color}-500 bg-${project.color}-500/10 text-${project.color}-500`
                        : 'border-white/20 text-white/70 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold">{project.id}</div>
                        <div className="text-xs">{project.name}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        project.color === 'green' ? 'bg-green-500/20 text-green-500' :
                        project.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-500' :
                        project.color === 'magenta' ? 'bg-magenta-500/20 text-magenta-500' :
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className={`bg-black border-2 rounded-lg p-8 font-mono ${
              projects[activeProject].color === 'green' ? 'border-green-500' :
              projects[activeProject].color === 'cyan' ? 'border-cyan-500' :
              projects[activeProject].color === 'magenta' ? 'border-magenta-500' :
              'border-blue-500'
            }`}>
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className={`w-3 h-3 rounded-full ${
                    projects[activeProject].color === 'green' ? 'bg-green-500' :
                    projects[activeProject].color === 'cyan' ? 'bg-cyan-500' :
                    projects[activeProject].color === 'magenta' ? 'bg-magenta-500' :
                    'bg-blue-500'
                  }`}></div>
                </div>
                <div className="text-sm text-white/60">
                  PROJECT_VIEWER_v3.0
                </div>
              </div>

              {/* Project Content */}
              <div className={`text-sm mb-4 ${
                projects[activeProject].color === 'green' ? 'text-green-500' :
                projects[activeProject].color === 'cyan' ? 'text-cyan-500' :
                projects[activeProject].color === 'magenta' ? 'text-magenta-500' :
                'text-blue-500'
              }`}>
                <span className="text-white/60">root@matrix:~$</span> cat projects/{projects[activeProject].id.toLowerCase()}.info
              </div>

              <h3 className={`text-3xl font-bold mb-4 ${
                projects[activeProject].color === 'green' ? 'text-green-500' :
                projects[activeProject].color === 'cyan' ? 'text-cyan-500' :
                projects[activeProject].color === 'magenta' ? 'text-magenta-500' :
                'text-blue-500'
              } animate-matrix-neon-glow`}>
                {projects[activeProject].name}
              </h3>

              <p className="text-white/80 mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              {/* Technology Stack */}
              <div className="mb-6">
                <div className="text-white/60 text-sm mb-3">TECHNOLOGY_STACK:</div>
                <div className="grid grid-cols-2 gap-3">
                  {projects[activeProject].tech.map((tech, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        projects[activeProject].color === 'green' ? 'bg-green-500' :
                        projects[activeProject].color === 'cyan' ? 'bg-cyan-500' :
                        projects[activeProject].color === 'magenta' ? 'bg-magenta-500' :
                        'bg-blue-500'
                      } animate-matrix-pulse`}></div>
                      <span className="text-white/80 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/60 text-sm">COMPLETION:</span>
                  <span className={`text-sm font-bold ${
                    projects[activeProject].color === 'green' ? 'text-green-500' :
                    projects[activeProject].color === 'cyan' ? 'text-cyan-500' :
                    projects[activeProject].color === 'magenta' ? 'text-magenta-500' :
                    'text-blue-500'
                  }`}>
                    {projects[activeProject].progress}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      projects[activeProject].color === 'green' ? 'bg-green-500' :
                      projects[activeProject].color === 'cyan' ? 'bg-cyan-500' :
                      projects[activeProject].color === 'magenta' ? 'bg-magenta-500' :
                      'bg-blue-500'
                    } animate-matrix-neon-pulse`}
                    style={{ width: `${projects[activeProject].progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-6 py-3 border-2 font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                  projects[activeProject].color === 'green' ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black' :
                  projects[activeProject].color === 'cyan' ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black' :
                  projects[activeProject].color === 'magenta' ? 'border-magenta-500 text-magenta-500 hover:bg-magenta-500 hover:text-black' :
                  'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black'
                }`}>
                  LAUNCH_PROJECT
                </button>
                <button className="px-6 py-3 border-2 border-white/30 text-white/70 font-bold rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">
                  VIEW_DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 