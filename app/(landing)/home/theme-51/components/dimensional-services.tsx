'use client';

export default function DimensionalServices() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            <span className="block">DIMENSIONAL</span>
            <span className="block -mt-2">SERVICES</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Multi-dimensional holographic services across infinite quantum realities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Quantum Computing",
              description: "Advanced quantum processing with holographic acceleration",
              features: ["∞ Qubits Processing", "Superposition States", "Entanglement Networks", "Quantum Tunneling"],
              icon: "⚛",
              gradient: "from-blue-400 to-purple-400",
              border: "border-blue-400/30"
            },
            {
              title: "Hologram Projection",
              description: "Ultra-high fidelity 3D holographic display systems",
              features: ["8K 3D Projection", "Neural Interface", "Gesture Control", "Dimensional Layers"],
              icon: "🔮",
              gradient: "from-purple-400 to-emerald-400",
              border: "border-purple-400/30"
            },
            {
              title: "Neural Networks",
              description: "Brain-computer interface with quantum consciousness",
              features: ["Direct Neural Link", "Consciousness Upload", "Memory Integration", "Thought Translation"],
              icon: "🧠",
              gradient: "from-emerald-400 to-cyan-400",
              border: "border-emerald-400/30"
            }
          ].map((service, index) => (
            <div
              key={service.title}
              className={`group relative ${service.border} border-2 bg-black/50 backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-all duration-500`}
              style={{
                animation: `holo-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mt-3">{service.description}</p>
                </div>
                
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 border border-white/10 bg-white/5 rounded-xl"
                      style={{
                        animation: `holo-slide-in 0.6s ease-out forwards`,
                        animationDelay: `${index * 0.3 + featureIndex * 0.1 + 0.5}s`,
                        opacity: 0,
                        transform: 'translateX(-20px)'
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse`}></div>
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className={`group px-6 py-3 border-2 ${service.border} bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-full font-semibold hover:bg-opacity-20 transition-all duration-300`}>
                    <span className="text-white flex items-center gap-2">
                      <span>Explore {service.icon}</span>
                      <div className="w-4 h-4 border border-white/50 rounded-full animate-spin"></div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="border-4 border-cyan-400/30 bg-black/30 backdrop-blur-sm p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-cyan-300 mb-4">🌌 DIMENSIONAL MATRIX</h3>
              <p className="text-slate-300 text-lg">Real-time multi-dimensional service orchestration</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-cyan-400/30 bg-cyan-950/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 border-2 border-cyan-400/50 rounded-full bg-cyan-400/10 flex items-center justify-center">
                      <span className="text-cyan-400">⚛</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Quantum Cores</div>
                      <div className="text-slate-400 text-sm">247 active processors</div>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-mono text-lg">99.8%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-purple-400/30 bg-purple-950/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 border-2 border-purple-400/50 rounded-full bg-purple-400/10 flex items-center justify-center">
                      <span className="text-purple-400">🔮</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Holo Projectors</div>
                      <div className="text-slate-400 text-sm">∞ dimensional layers</div>
                    </div>
                  </div>
                  <div className="text-purple-400 font-mono text-lg">97.9%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-emerald-400/30 bg-emerald-950/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 border-2 border-emerald-400/50 rounded-full bg-emerald-400/10 flex items-center justify-center">
                      <span className="text-emerald-400">🧠</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Neural Networks</div>
                      <div className="text-slate-400 text-sm">Direct consciousness link</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 font-mono text-lg">98.7%</div>
                </div>
              </div>
              
              <div className="relative h-80 border border-cyan-500/30 bg-black/50 rounded-2xl overflow-hidden">
                <div className="absolute inset-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 border-2 border-cyan-400/50 rounded-full bg-cyan-400/5 flex items-center justify-center animate-holo-pulse">
                        <div className="w-32 h-32 border border-purple-400/50 rounded-full bg-purple-400/5 flex items-center justify-center animate-holo-drift">
                          <div className="w-16 h-16 border border-emerald-400/50 rounded-full bg-emerald-400/5 flex items-center justify-center animate-holo-spin">
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Connection Points */}
                      <div className="absolute -top-2 left-1/2 w-6 h-6 bg-cyan-400 rounded-full animate-holo-pulse transform -translate-x-1/2"></div>
                      <div className="absolute -bottom-2 left-1/2 w-6 h-6 bg-purple-400 rounded-full animate-holo-pulse transform -translate-x-1/2" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute -left-2 top-1/2 w-6 h-6 bg-emerald-400 rounded-full animate-holo-pulse transform -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
                      <div className="absolute -right-2 top-1/2 w-6 h-6 bg-pink-400 rounded-full animate-holo-pulse transform -translate-y-1/2" style={{ animationDelay: '3s' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="text-cyan-300 text-sm font-mono">
                    DIMENSIONAL SERVICES: ONLINE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 