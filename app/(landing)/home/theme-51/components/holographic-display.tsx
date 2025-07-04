'use client';

export default function HolographicDisplay() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
            <span className="block">HOLOGRAPHIC</span>
            <span className="block -mt-2">DISPLAY</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced 3D holographic projections with quantum-enhanced visual fidelity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "3D Projection", resolution: "8K Ultra", layers: "∞", stability: "99.8%", icon: "🔮" },
            { name: "Quantum Rendering", resolution: "Quantum HD", layers: "247K", stability: "98.7%", icon: "⚛" },
            { name: "Holo Interface", resolution: "Neural Link", layers: "∞²", stability: "99.9%", icon: "🌌" }
          ].map((display, index) => (
            <div
              key={display.name}
              className="group relative"
              style={{
                animation: `holo-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-purple-400/30 bg-black/50 backdrop-blur-sm rounded-3xl hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{display.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{display.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-100/10 text-purple-300 text-sm font-medium rounded-full border border-purple-400/30">
                          PROJECTING
                        </span>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Stability</span>
                      <span className="text-purple-400 font-bold">{display.stability}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-black/50 rounded-full border border-purple-500/30 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: display.stability,
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
                        <div className="text-lg font-bold text-purple-400">{display.resolution}</div>
                        <div className="text-xs text-slate-400">Resolution</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{display.layers}</div>
                        <div className="text-xs text-slate-400">Layers</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-black/30 border border-purple-500/30 rounded-xl">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-purple-400 font-mono">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mb-16">
          <div className="border-4 border-purple-400/30 bg-black/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">🔮 HOLOGRAM MATRIX</h3>
              <p className="text-slate-300">Real-time 3D holographic projection and quantum rendering</p>
            </div>
            
            <div className="relative h-80 bg-black/50 border border-purple-500/30 rounded-2xl overflow-hidden">
              <div className="absolute inset-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 border-2 border-purple-400/50 rounded-full bg-purple-400/5 flex items-center justify-center animate-holo-pulse">
                      <div className="w-48 h-48 border border-blue-400/50 rounded-full bg-blue-400/5 flex items-center justify-center animate-holo-drift">
                        <div className="w-32 h-32 border border-emerald-400/50 rounded-full bg-emerald-400/5 flex items-center justify-center animate-holo-spin">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Holographic Projection Points */}
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-400 rounded-full animate-holo-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-holo-pulse transform -translate-x-1/2 translate-y-1/2" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-holo-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-holo-pulse transform translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '3s' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>Projection: 3D Active</span>
                <span>Quantum Sync: 99.8%</span>
                <span>Holo Stability: Optimal</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-black/30 border border-purple-500/30 rounded-xl text-center">
                <div className="text-purple-400 text-2xl mb-2">🔮</div>
                <div className="text-purple-400 font-bold text-lg">8K</div>
                <div className="text-slate-400 text-sm">3D Projection</div>
              </div>
              <div className="p-4 bg-black/30 border border-blue-500/30 rounded-xl text-center">
                <div className="text-blue-400 text-2xl mb-2">⚛</div>
                <div className="text-blue-400 font-bold text-lg">247K</div>
                <div className="text-slate-400 text-sm">Quantum Layers</div>
              </div>
              <div className="p-4 bg-black/30 border border-emerald-500/30 rounded-xl text-center">
                <div className="text-emerald-400 text-2xl mb-2">🌌</div>
                <div className="text-emerald-400 font-bold text-lg">∞²</div>
                <div className="text-slate-400 text-sm">Neural Interface</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 