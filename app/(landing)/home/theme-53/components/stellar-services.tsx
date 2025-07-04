'use client';

export default function StellarServices() {
  const services = [
    {
      category: "Quantum Computing",
      icon: "⚛️",
      color: "purple",
      services: [
        "Quantum Algorithm Design",
        "Entanglement Networks",
        "Quantum Error Correction",
        "Quantum Machine Learning"
      ]
    },
    {
      category: "Nebula Networks",
      icon: "🌌",
      color: "blue", 
      services: [
        "Galactic Communications",
        "Stellar Data Transfer",
        "Cosmic Cloud Storage",
        "Interdimensional APIs"
      ]
    },
    {
      category: "Portal Solutions",
      icon: "🌀",
      color: "pink",
      services: [
        "Dimension Bridging",
        "Portal Optimization",
        "Reality Synchronization",
        "Multiverse Integration"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-900/30 border border-indigo-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-indigo-300 text-sm font-medium">STELLAR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              Cosmic Solutions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Advanced galactic technologies for interdimensional applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${service.color}-900/20 to-purple-900/20 border border-${service.color}-400/20 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${service.color}-400 to-purple-400 rounded-full flex items-center justify-center text-2xl animate-quantum-pulse`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold text-${service.color}-200 mb-2`}>
                  {service.category}
                </h3>
                <div className={`w-12 h-1 bg-gradient-to-r from-${service.color}-400 to-purple-400 rounded-full mx-auto animate-quantum-flow`}></div>
              </div>

              {/* Service List */}
              <div className="space-y-4">
                {service.services.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                  >
                    <div className={`w-2 h-2 bg-${service.color}-400 rounded-full animate-pulse`} style={{ animationDelay: `${itemIndex * 0.2}s` }}></div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Service Action */}
              <div className="mt-8">
                <button className={`w-full px-6 py-3 bg-${service.color}-600/30 border border-${service.color}-400/30 rounded-xl text-${service.color}-200 hover:bg-${service.color}-600/50 transition-colors`}>
                  Explore {service.category}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* System Status Monitor */}
        <div className="bg-gradient-to-br from-slate-900/20 to-indigo-900/20 border border-slate-600/20 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Galactic System Status</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* System Components */}
            <div className="text-center p-6 bg-purple-950/30 rounded-2xl border border-purple-400/20">
              <div className="text-3xl mb-3">⚛️</div>
              <div className="text-lg font-bold text-purple-300 mb-1">Online</div>
              <div className="text-sm text-slate-400 mb-3">Quantum Core</div>
              <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-quantum-progress"></div>
              </div>
            </div>

            <div className="text-center p-6 bg-blue-950/30 rounded-2xl border border-blue-400/20">
              <div className="text-3xl mb-3">🌌</div>
              <div className="text-lg font-bold text-blue-300 mb-1">Active</div>
              <div className="text-sm text-slate-400 mb-3">Nebula Network</div>
              <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-quantum-progress" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <div className="text-center p-6 bg-pink-950/30 rounded-2xl border border-pink-400/20">
              <div className="text-3xl mb-3">🌀</div>
              <div className="text-lg font-bold text-pink-300 mb-1">Stable</div>
              <div className="text-sm text-slate-400 mb-3">Portal Array</div>
              <div className="w-full h-2 bg-pink-900/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-quantum-progress" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            <div className="text-center p-6 bg-indigo-950/30 rounded-2xl border border-indigo-400/20">
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-lg font-bold text-indigo-300 mb-1">Optimal</div>
              <div className="text-sm text-slate-400 mb-3">Cosmic Engine</div>
              <div className="w-full h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-quantum-progress" style={{ animationDelay: '3s' }}></div>
              </div>
            </div>
          </div>

          {/* Overall Status */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-green-900/20 border border-green-400/30 rounded-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium">All Systems Operational</span>
              <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-quantum-flow"></div>
              <span className="text-blue-300">Galactic Network: STABLE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 