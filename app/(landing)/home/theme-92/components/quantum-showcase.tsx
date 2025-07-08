import React from 'react';

export default function QuantumShowcase() {
  const showcaseItems = [
    {
      title: "Quantum Computing",
      description: "Superposition-based parallel processing capabilities",
      icon: "⚛️",
      stats: "10^18 QOPS"
    },
    {
      title: "Holographic Display",
      description: "3D volumetric projection in real space",
      icon: "🌐",
      stats: "8K RESOLUTION"
    },
    {
      title: "Quantum Entanglement",
      description: "Instantaneous information transfer",
      icon: "🔬",
      stats: "∞ DISTANCE"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-conic from-emerald-500/15 via-cyan-500/15 to-lime-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/15 via-lime-500/15 to-yellow-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-mono">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
              [QUANTUM SHOWCASE]
            </span>
          </h2>
          <p className="text-xl text-emerald-300/70 max-w-3xl mx-auto font-light">
            Witness the convergence of quantum mechanics and holographic technology
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-400/30 rounded-lg p-10 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Icon with Quantum Field */}
              <div className="text-7xl mb-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-conic from-emerald-400/40 via-cyan-400/40 to-lime-400/40 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                <span className="relative z-10">{item.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-center text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 font-mono">
                {item.title}
              </h3>
              
              <p className="text-emerald-300/70 text-center leading-relaxed mb-6 group-hover:text-emerald-300/90 transition-colors duration-300">
                {item.description}
              </p>

              {/* Quantum Stats */}
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400 font-mono bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                  {item.stats}
                </div>
              </div>

              {/* Processing Indicators */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Computing Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-400/20 rounded-lg p-6">
            <div className="text-4xl font-bold text-emerald-400 mb-2 font-mono animate-pulse">2048</div>
            <div className="text-emerald-300/70 text-sm font-mono">QUBITS</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-cyan-400/20 rounded-lg p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono animate-pulse">99.9%</div>
            <div className="text-emerald-300/70 text-sm font-mono">FIDELITY</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-lime-400/20 rounded-lg p-6">
            <div className="text-4xl font-bold text-lime-400 mb-2 font-mono animate-pulse">10μs</div>
            <div className="text-emerald-300/70 text-sm font-mono">COHERENCE</div>
          </div>
          <div className="text-center bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-yellow-400/20 rounded-lg p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2 font-mono animate-pulse">∞</div>
            <div className="text-emerald-300/70 text-sm font-mono">POTENTIAL</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-lime-500/20 border-2 border-emerald-400/50 text-emerald-300 font-semibold text-lg font-mono rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 hover:border-emerald-400">
            <span className="relative z-10">[ENTER QUANTUM REALM]</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-lime-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Floating Quantum Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 border border-emerald-400/50 rounded-sm transform rotate-45 animate-bounce bg-emerald-400/20"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 border border-cyan-400/50 rounded-sm transform -rotate-30 animate-bounce bg-cyan-400/20"></div>
      <div className="absolute top-1/2 right-5 w-2 h-2 border border-lime-400/50 rounded-sm transform rotate-12 animate-bounce bg-lime-400/20"></div>
    </section>
  );
} 