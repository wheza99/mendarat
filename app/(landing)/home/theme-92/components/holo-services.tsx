import React from 'react';

export default function HoloServices() {
  const services = [
    {
      title: "Quantum Computing",
      description: "Access quantum supremacy through our cloud-based quantum processors",
      features: ["2048-Qubit Processor", "Quantum Error Correction", "Superposition Computing", "Entanglement as a Service"],
      icon: "⚛️",
      color: "emerald"
    },
    {
      title: "Holographic Visualization",
      description: "Immersive 3D holographic displays for data and interface interaction",
      features: ["8K Holographic Display", "Gesture Recognition", "3D Data Visualization", "Volumetric Projection"],
      icon: "🌐",
      color: "cyan"
    },
    {
      title: "Quantum Entanglement Network",
      description: "Secure quantum communication through entangled particle networks",
      features: ["Instant Communication", "Quantum Encryption", "Global Network", "Zero Latency"],
      icon: "🔗",
      color: "lime"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Quantum Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-950/20 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-conic from-lime-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-yellow-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Holographic Matrix */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(132,204,22,0.3)_25px,rgba(132,204,22,0.3)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.3)_75px,rgba(6,182,212,0.3)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(132,204,22,0.3)_25px,rgba(132,204,22,0.3)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.3)_75px,rgba(6,182,212,0.3)_76px,transparent_77px)] bg-[length:120px_120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-mono">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
              [QUANTUM SERVICES]
            </span>
          </h2>
          <p className="text-xl text-emerald-300/70 max-w-3xl mx-auto font-light">
            Revolutionary quantum computing and holographic services for the future
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-400/30 rounded-lg p-8 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Holographic Border Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-25 transition-opacity duration-300 ${
                service.color === 'emerald' ? 'from-emerald-500/30 to-transparent' :
                service.color === 'cyan' ? 'from-cyan-500/30 to-transparent' :
                'from-lime-500/30 to-transparent'
              }`}></div>
              
              {/* Service Icon */}
              <div className="text-6xl mb-6 text-center relative">
                <div className={`absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 ${
                  service.color === 'emerald' ? 'bg-emerald-400' :
                  service.color === 'cyan' ? 'bg-cyan-400' :
                  'bg-lime-400'
                }`}></div>
                <span className="relative z-10">{service.icon}</span>
              </div>
              
              {/* Service Title */}
              <h3 className={`text-2xl font-semibold mb-4 text-center font-mono transition-colors duration-300 ${
                service.color === 'emerald' ? 'text-emerald-400 group-hover:text-emerald-300' :
                service.color === 'cyan' ? 'text-cyan-400 group-hover:text-cyan-300' :
                'text-lime-400 group-hover:text-lime-300'
              }`}>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-emerald-300/70 text-center leading-relaxed mb-8 group-hover:text-emerald-300/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      service.color === 'emerald' ? 'bg-emerald-400' :
                      service.color === 'cyan' ? 'bg-cyan-400' :
                      'bg-lime-400'
                    }`}></div>
                    <span className="text-emerald-300/80 text-sm font-mono group-hover:text-emerald-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quantum Processing Indicators */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>

              {/* Holographic Scanlines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg overflow-hidden">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
                    style={{
                      top: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.25}s`
                    }}
                  />
                ))}
              </div>

              {/* Service Action Button */}
              <div className="mt-8 text-center">
                <button className={`group/btn relative px-6 py-3 border-2 font-semibold text-sm font-mono rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                  service.color === 'emerald' ? 'border-emerald-400/50 text-emerald-300 hover:border-emerald-400 hover:shadow-emerald-500/30' :
                  service.color === 'cyan' ? 'border-cyan-400/50 text-cyan-300 hover:border-cyan-400 hover:shadow-cyan-500/30' :
                  'border-lime-400/50 text-lime-300 hover:border-lime-400 hover:shadow-lime-500/30'
                } hover:shadow-xl`}>
                  <span className="relative z-10">[ACCESS SERVICE]</span>
                  <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
                    service.color === 'emerald' ? 'bg-emerald-500/20' :
                    service.color === 'cyan' ? 'bg-cyan-500/20' :
                    'bg-lime-500/20'
                  }`}></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Service Matrix */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-400/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-400 mb-1 font-mono animate-pulse">24/7</div>
              <div className="text-emerald-300/70 text-xs font-mono">QUANTUM UPTIME</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-cyan-400/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1 font-mono animate-pulse">∞</div>
              <div className="text-emerald-300/70 text-xs font-mono">SCALABILITY</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-lime-400/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-lime-400 mb-1 font-mono animate-pulse">100%</div>
              <div className="text-emerald-300/70 text-xs font-mono">SECURITY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quantum Nodes */}
      <div className="absolute top-20 left-5 w-3 h-3 border border-emerald-400/50 rounded-sm transform rotate-45 animate-bounce bg-emerald-400/20"></div>
      <div className="absolute bottom-20 right-5 w-4 h-4 border border-cyan-400/50 rounded-sm transform -rotate-30 animate-bounce bg-cyan-400/20"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 border border-lime-400/50 rounded-sm transform rotate-60 animate-bounce bg-lime-400/20"></div>
    </section>
  );
} 