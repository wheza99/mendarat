'use client';

export default function HoloTech() {
  const technologies = [
    {
      name: "Holographic Displays",
      description: "3D volumetric displays that project into physical space",
      progress: 95,
      category: "DISPLAY"
    },
    {
      name: "Neural Interfaces",
      description: "Direct brain-computer interaction protocols",
      progress: 88,
      category: "INTERFACE"
    },
    {
      name: "Quantum Encryption",
      description: "Unbreakable quantum-entangled security systems",
      progress: 92,
      category: "SECURITY"
    },
    {
      name: "AI Consciousness",
      description: "Self-aware artificial intelligence frameworks",
      progress: 78,
      category: "AI"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* 3D Holographic Background */}
      <div className="absolute inset-0">
        {/* Holographic Grid */}
        <div className="absolute inset-0 holo-shift">
          <div className="w-full h-full" style={{
            background: `
              linear-gradient(90deg, transparent 98%, rgba(6, 182, 212, 0.1) 100%),
              linear-gradient(0deg, transparent 98%, rgba(6, 182, 212, 0.1) 100%)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Holo Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `holo-shift ${8 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="w-16 h-16 border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 transform rotate-45 cyber-pulse" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 neon-glow">
            HOLO<span className="text-cyan-400">TECH</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 cyber-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next-generation holographic technologies reshaping digital interaction
          </p>
        </div>

        {/* Technology Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Holographic Display */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Hologram */}
              <div className="relative h-96 holo-shift">
                <div className="absolute inset-0 border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 cyber-pulse"
                     style={{
                       clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                     }}>
                  
                  {/* Holographic Content */}
                  <div className="absolute inset-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-cyan-400 neon-glow mb-4">
                      HOLO-OS
                    </div>
                    <div className="text-sm font-mono text-gray-300 mb-6">
                      v3.14.159
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="relative w-32 h-32 mb-6">
                      <div className="absolute inset-0 border border-cyan-400/50 rounded-full animate-spin" style={{ animationDuration: '10s' }}>
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1" />
                      </div>
                      <div className="absolute inset-2 border border-purple-400/50 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1" />
                      </div>
                      <div className="absolute inset-4 border border-blue-400/50 rounded-full animate-spin" style={{ animationDuration: '6s' }}>
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 cyber-pulse" />
                    </div>
                    
                    <div className="text-xs font-mono text-gray-400">
                      QUANTUM_STATE: ACTIVE
                    </div>
                  </div>
                </div>
                
                {/* Hologram Base */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full blur-sm" />
              </div>
              
              {/* Supporting Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border border-cyan-400/30 bg-black/60 cyber-pulse flex items-center justify-center">
                <div className="text-cyan-400 font-mono text-xs">3D</div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border border-purple-400/30 bg-black/60 cyber-pulse flex items-center justify-center">
                <div className="text-purple-400 font-mono text-xs">AI</div>
              </div>
            </div>
          </div>

          {/* Right: Technology List */}
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative p-6 border border-cyan-400/20 bg-black/40 hover:border-cyan-400/50 transition-all duration-500"
                style={{
                  animation: `clean-slide 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                      {tech.name}
                    </h3>
                    <div className="text-xs font-mono text-gray-400 mb-2">
                      [{tech.category}]
                    </div>
                    <p className="text-gray-300 text-sm">
                      {tech.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-cyan-400 neon-glow">
                      {tech.progress}%
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full cyber-pulse transition-all duration-1000"
                    style={{ width: `${tech.progress}%` }}
                  />
                </div>
                
                {/* Status Indicators */}
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">OPERATIONAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400">CONNECTED</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold text-xl text-black overflow-hidden cyber-pulse hover:scale-105 transition-all duration-300">
            <span className="relative z-10">ACCESS HOLOTECH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
} 