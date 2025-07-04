'use client';

export default function QuantumCore() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            <span className="block">QUANTUM</span>
            <span className="block -mt-2">CORE</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Quantum computing cores with holographic processing capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Quantum Processor", power: "∞ QFLOPS", qubits: "2048", coherence: "99.7%", icon: "⚛" },
            { name: "Holographic Memory", power: "247 PB/s", qubits: "∞", coherence: "98.9%", icon: "💎" },
            { name: "Dimensional Engine", power: "∞³ OPS", qubits: "∞²", coherence: "99.9%", icon: "🌀" }
          ].map((core, index) => (
            <div
              key={core.name}
              className="group relative"
              style={{
                animation: `holo-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-blue-400/30 bg-black/50 backdrop-blur-sm rounded-3xl hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{core.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{core.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-100/10 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30">
                          QUANTUM
                        </span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Coherence</span>
                      <span className="text-blue-400 font-bold">{core.coherence}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-black/50 rounded-full border border-blue-500/30 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: core.coherence,
                            animation: `holo-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">{core.power}</div>
                        <div className="text-xs text-slate-400">Power</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">{core.qubits}</div>
                        <div className="text-xs text-slate-400">Qubits</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-black/30 border border-blue-500/30 rounded-xl">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-blue-400 font-mono">SUPERPOSITION</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="border-4 border-blue-400/30 bg-black/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-300 mb-4">⚛ QUANTUM PROCESSING CENTER</h3>
              <p className="text-slate-300">Multi-dimensional quantum computing with holographic entanglement</p>
            </div>
            
            <div className="relative h-64 bg-black/50 border border-blue-500/30 rounded-2xl overflow-hidden">
              <div className="absolute inset-4">
                <div className="grid grid-cols-12 gap-1 h-full">
                  {Array.from({ length: 84 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-blue-400/20 to-purple-400/20 rounded-sm"
                      style={{
                        animation: `holo-quantum ${Math.random() * 3 + 1}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>Quantum State: Superposition</span>
                <span>Entanglement: 99.7%</span>
                <span>Decoherence: 0.3%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-black/30 border border-blue-500/30 rounded-xl text-center">
                <div className="text-blue-400 text-2xl mb-2">⚛</div>
                <div className="text-blue-400 font-bold text-lg">2048</div>
                <div className="text-slate-400 text-sm">Quantum Bits</div>
              </div>
              <div className="p-4 bg-black/30 border border-purple-500/30 rounded-xl text-center">
                <div className="text-purple-400 text-2xl mb-2">💎</div>
                <div className="text-purple-400 font-bold text-lg">247 PB</div>
                <div className="text-slate-400 text-sm">Holo Memory</div>
              </div>
              <div className="p-4 bg-black/30 border border-emerald-500/30 rounded-xl text-center">
                <div className="text-emerald-400 text-2xl mb-2">🌀</div>
                <div className="text-emerald-400 font-bold text-lg">∞³</div>
                <div className="text-slate-400 text-sm">Dimensions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 