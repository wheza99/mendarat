'use client';

export default function CyberSystems() {
  const systems = [
    {
      id: "NEURAL_NET",
      name: "Neural Networks",
      description: "Advanced AI-driven neural processing systems that adapt and learn in real-time.",
      status: "ACTIVE",
      uptime: "99.98%",
      connections: "847,392"
    },
    {
      id: "QUANTUM_CORE",
      name: "Quantum Computing",
      description: "Quantum entanglement protocols for instantaneous data processing across dimensions.",
      status: "ONLINE",
      uptime: "99.99%",
      connections: "1,205,847"
    },
    {
      id: "HOLO_INTERFACE",
      name: "Holographic UI",
      description: "Immersive holographic interfaces that respond to neural commands and gestures.",
      status: "SYNCED",
      uptime: "99.95%",
      connections: "673,291"
    },
    {
      id: "CRYPTO_VAULT",
      name: "Encryption Vault",
      description: "Military-grade quantum encryption protecting your digital assets and identity.",
      status: "SECURED",
      uptime: "100%",
      connections: "2,847,193"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-black mb-6 neon-glow">
              CYBER SYSTEMS
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent cyber-pulse" />
          </div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
            Advanced technological infrastructure powering the digital frontier
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <div
              key={system.id}
              className="group relative"
              style={{
                animation: `clean-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              {/* System Panel */}
              <div className="relative p-8 border border-cyan-400/30 bg-gradient-to-br from-black/80 via-slate-900/50 to-black/80 hover:border-cyan-400/60 transition-all duration-500 cyber-pulse group-hover:scale-105">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />
                
                {/* System Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 neon-glow mb-2">
                      {system.name}
                    </h3>
                    <div className="text-sm font-mono text-gray-400">
                      ID: {system.id}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-mono px-3 py-1 rounded ${
                      system.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                      system.status === 'ONLINE' ? 'bg-blue-500/20 text-blue-400' :
                      system.status === 'SYNCED' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {system.status}
                    </div>
                  </div>
                </div>

                {/* System Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {system.description}
                </p>

                {/* System Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-black/40 border border-cyan-400/20">
                    <div className="text-cyan-400 font-mono text-lg font-bold">
                      {system.uptime}
                    </div>
                    <div className="text-xs text-gray-400">UPTIME</div>
                  </div>
                  <div className="text-center p-3 bg-black/40 border border-cyan-400/20">
                    <div className="text-cyan-400 font-mono text-lg font-bold">
                      {system.connections}
                    </div>
                    <div className="text-xs text-gray-400">CONNECTIONS</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full cyber-pulse"
                    style={{ width: system.uptime }}
                  />
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* System Connection Lines */}
              <div className="absolute -right-4 top-1/2 w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* System Status Bar */}
        <div className="mt-20 p-6 border border-cyan-400/30 bg-black/60 cyber-pulse">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-green-400">ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-8 text-sm font-mono">
              <div className="text-cyan-400">CPU: 45%</div>
              <div className="text-blue-400">RAM: 67%</div>
              <div className="text-purple-400">NET: 89%</div>
              <div className="text-green-400">PWR: 92%</div>
            </div>
            <div className="text-gray-400 font-mono text-sm">
              LAST_UPDATE: {new Date().toISOString().split('T')[0]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 