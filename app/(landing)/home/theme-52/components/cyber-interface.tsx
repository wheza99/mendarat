'use client';

export default function CyberInterface() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-green-400 to-cyan-400">
            <span className="block">CYBER</span>
            <span className="block -mt-2">INTERFACE</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Neural interface controls with advanced cyber matrix manipulation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Eye Tracking", type: "Ocular Scan", precision: "∞x∞", latency: "0.001ms", icon: "👁️" },
            { name: "Gesture Control", type: "Neural Link", precision: "247K", latency: "0.1ms", icon: "👋" },
            { name: "Neural Link", type: "Brain Sync", precision: "∞³", latency: "0.01ms", icon: "🧠" }
          ].map((cyberInterface, index) => (
            <div
              key={cyberInterface.name}
              className="group relative"
              style={{
                animation: `cyber-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-pink-400/30 bg-black/50 backdrop-blur-sm rounded-3xl hover:border-pink-400/60 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-green-500/10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{cyberInterface.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{cyberInterface.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-pink-100/10 text-pink-300 text-sm font-medium rounded-full border border-pink-400/30">
                          CYBER
                        </span>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Precision</span>
                      <span className="text-pink-400 font-bold">{cyberInterface.precision}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-black/50 rounded-full border border-pink-500/30 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-pink-400 to-green-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: '99%',
                            animation: `cyber-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-pink-400">{cyberInterface.type}</div>
                        <div className="text-xs text-slate-400">Interface Type</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-pink-400">{cyberInterface.latency}</div>
                        <div className="text-xs text-slate-400">Response Time</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-black/30 border border-pink-500/30 rounded-xl">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-pink-400 font-mono">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="border-4 border-pink-400/30 bg-black/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-pink-300 mb-4">👁️ CYBER CONTROL PANEL</h3>
              <p className="text-slate-300">Advanced neural interface with gesture and eye tracking control</p>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-black/50 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400 font-bold text-lg hover:bg-pink-400/10 transition-all duration-300 cursor-pointer"
                  style={{
                    animation: `cyber-blink ${Math.random() * 3 + 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-black/30 border border-pink-500/30 rounded-xl text-center">
                <div className="text-pink-400 text-2xl mb-2">👁️</div>
                <div className="text-pink-400 font-bold text-lg">0.001ms</div>
                <div className="text-slate-400 text-sm">Eye Tracking</div>
              </div>
              <div className="p-4 bg-black/30 border border-green-500/30 rounded-xl text-center">
                <div className="text-green-400 text-2xl mb-2">👋</div>
                <div className="text-green-400 font-bold text-lg">247K</div>
                <div className="text-slate-400 text-sm">Gesture Points</div>
              </div>
              <div className="p-4 bg-black/30 border border-cyan-500/30 rounded-xl text-center">
                <div className="text-cyan-400 text-2xl mb-2">🧠</div>
                <div className="text-cyan-400 font-bold text-lg">∞³</div>
                <div className="text-slate-400 text-sm">Neural Sync</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">CYBER INTERFACE: ACTIVE</span>
                <div className="w-8 h-1 bg-gradient-to-r from-pink-400 to-green-400 rounded-full animate-cyber-flow"></div>
                <span className="text-green-300 text-sm">⚡ NEURAL LINK SYNCHRONIZED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 