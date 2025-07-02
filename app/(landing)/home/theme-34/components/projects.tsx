'use client';

import theme34Copy from '../copy';

const projects = [
  {
    title: "QUANTUM_NEXUS",
    category: "AI_SYSTEM",
    description: "Revolutionary quantum-AI hybrid system for predictive analytics.",
    tech: ["Quantum Computing", "TensorFlow", "Python", "Docker"],
    status: "DEPLOYED",
    version: "v2.1.4"
  },
  {
    title: "CYBER_FORTRESS", 
    category: "SECURITY",
    description: "Military-grade cybersecurity platform with threat detection.",
    tech: ["Blockchain", "Rust", "Kubernetes", "Redis"],
    status: "ACTIVE",
    version: "v1.8.2"
  },
  {
    title: "NEURAL_MESH",
    category: "BLOCKCHAIN",
    description: "Decentralized neural network for distributed machine learning and data processing.",
    tech: ["Ethereum", "Web3", "React", "Node.js"],
    status: "BETA",
    version: "v0.9.1"
  },
  {
    title: "MATRIX_CORE",
    category: "DATABASE",
    description: "High-performance distributed database system with real-time synchronization capabilities.",
    tech: ["PostgreSQL", "Go", "GraphQL", "AWS"],
    status: "PRODUCTION",
    version: "v3.0.0"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-cyan-900/10" />
        
        {/* Circuit lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute top-0 left-20 w-px h-full bg-gradient-to-b from-transparent via-pink-400/30 to-transparent" />
        <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent" />
        
        {/* Floating system codes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {['0x1A2B', '0xFF00', '0x7E8F', '0xDEAD', '0xBEEF'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 mb-6 tracking-wider">
            {theme34Copy.projects.title}
          </h2>
          <div className="text-green-400 font-mono text-lg border-l-2 border-green-400 pl-4 inline-block">
            {theme34Copy.projects.subtitle}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="bg-black border-2 border-green-400 p-8 hover:border-cyan-400 transition-all duration-500 relative overflow-hidden">
                {/* Data stream effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-black border border-cyan-400 px-3 py-1">
                      <span className="text-cyan-400 font-mono text-xs">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-black border border-pink-400 px-2 py-1">
                        <span className="text-pink-400 font-mono text-xs">
                          {project.version}
                        </span>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        project.status === 'DEPLOYED' ? 'bg-green-400' :
                        project.status === 'ACTIVE' ? 'bg-cyan-400' :
                        project.status === 'BETA' ? 'bg-yellow-400' :
                        'bg-pink-400'
                      } animate-pulse`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-black font-mono text-green-400 group-hover:text-cyan-400 transition-colors duration-300 mb-4 tracking-wider">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <div className="text-green-400 font-mono text-sm">$ dependencies --show</div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="bg-gray-900 border border-gray-700 px-3 py-2 hover:border-green-400 transition-colors duration-300 group/tech"
                        >
                          <span className="text-gray-300 font-mono text-sm group-hover/tech:text-green-400 transition-colors duration-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Status */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-gray-400 font-mono text-sm">STATUS:</span>
                      <span className={`font-mono text-sm font-bold ${
                        project.status === 'DEPLOYED' ? 'text-green-400' :
                        project.status === 'ACTIVE' ? 'text-cyan-400' :
                        project.status === 'BETA' ? 'text-yellow-400' :
                        'text-pink-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Circuit corners */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
              </div>

              {/* Outer glow */}
              <div className="absolute inset-0 border-2 border-green-400 group-hover:border-cyan-400 blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500" />
              
              {/* Project ID */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black border-2 border-pink-400 flex flex-col items-center justify-center">
                <span className="text-pink-400 font-mono text-xs">SYS</span>
                <span className="text-pink-400 font-mono text-xs font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Terminal */}
        <div className="mt-16 flex justify-center">
          <div className="bg-black border-2 border-green-400 px-8 py-4 font-mono text-green-400">
            <div className="flex items-center space-x-4">
              <span className="animate-pulse">{'>'}</span>
              <span>./deploy_all_systems.sh</span>
              <div className="w-2 h-4 bg-green-400 animate-pulse ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 