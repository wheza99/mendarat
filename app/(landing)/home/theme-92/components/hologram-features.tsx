import React from 'react';

export default function HologramFeatures() {
  const features = [
    {
      icon: "⚛️",
      title: "Quantum Processing",
      description: "Harness the power of quantum superposition for parallel computation beyond classical limits.",
      color: "emerald"
    },
    {
      icon: "🌐",
      title: "Holographic Interface",
      description: "Interactive 3D holographic displays that respond to your thoughts and gestures.",
      color: "cyan"
    },
    {
      icon: "🔬",
      title: "Quantum Entanglement",
      description: "Instant communication across any distance using quantum entangled particle pairs.",
      color: "lime"
    },
    {
      icon: "💫",
      title: "Matrix Visualization",
      description: "Real-time visualization of quantum states and probability wave functions.",
      color: "yellow"
    },
    {
      icon: "🔮",
      title: "Probability Engine",
      description: "Predict multiple outcomes simultaneously using quantum probability calculations.",
      color: "emerald"
    },
    {
      icon: "🌌",
      title: "Dimensional Portal",
      description: "Access parallel dimensions through quantum dimensional bridging technology.",
      color: "cyan"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-conic from-emerald-500/10 via-cyan-500/10 to-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-lime-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(34,197,94,0.3)_25px,rgba(34,197,94,0.3)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.3)_75px,rgba(6,182,212,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(34,197,94,0.3)_25px,rgba(34,197,94,0.3)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.3)_75px,rgba(6,182,212,0.3)_76px,transparent_77px)] bg-[length:100px_100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-mono">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
              [QUANTUM FEATURES]
            </span>
          </h2>
          <p className="text-xl text-emerald-300/70 max-w-3xl mx-auto font-light">
            Advanced quantum computing capabilities with holographic visualization interface
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-emerald-950/20 to-cyan-950/20 border border-emerald-400/20 rounded-lg p-8 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* Holographic Border Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                feature.color === 'emerald' ? 'from-emerald-500/30 to-transparent' :
                feature.color === 'cyan' ? 'from-cyan-500/30 to-transparent' :
                feature.color === 'lime' ? 'from-lime-500/30 to-transparent' :
                'from-yellow-500/30 to-transparent'
              }`}></div>
              
              {/* Icon with Quantum Glow */}
              <div className="text-5xl mb-6 relative">
                <div className={`absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${
                  feature.color === 'emerald' ? 'bg-emerald-400' :
                  feature.color === 'cyan' ? 'bg-cyan-400' :
                  feature.color === 'lime' ? 'bg-lime-400' :
                  'bg-yellow-400'
                }`}></div>
                <span className="relative z-10">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-semibold mb-4 font-mono transition-colors duration-300 ${
                feature.color === 'emerald' ? 'text-emerald-400 group-hover:text-emerald-300' :
                feature.color === 'cyan' ? 'text-cyan-400 group-hover:text-cyan-300' :
                feature.color === 'lime' ? 'text-lime-400 group-hover:text-lime-300' :
                'text-yellow-400 group-hover:text-yellow-300'
              }`}>
                {feature.title}
              </h3>
              
              <p className="text-emerald-300/70 leading-relaxed group-hover:text-emerald-300/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Quantum Processing Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  feature.color === 'emerald' ? 'bg-emerald-400' :
                  feature.color === 'cyan' ? 'bg-cyan-400' :
                  feature.color === 'lime' ? 'bg-lime-400' :
                  'bg-yellow-400'
                }`}></div>
              </div>

              {/* Holographic Scanlines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                    style={{
                      top: `${25 + i * 25}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Data Stream */}
        <div className="mt-16 flex justify-center space-x-6">
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Quantum Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 border border-emerald-400/50 rounded-sm transform rotate-45 animate-bounce bg-emerald-400/20"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 border border-cyan-400/50 rounded-sm transform -rotate-12 animate-bounce bg-cyan-400/20"></div>
      <div className="absolute top-1/2 left-5 w-1 h-1 border border-lime-400/50 rounded-sm transform rotate-90 animate-bounce bg-lime-400/20"></div>
    </section>
  );
} 