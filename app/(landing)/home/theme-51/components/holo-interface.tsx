'use client';

export default function HoloInterface() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-blue-400">
            <span className="block">HOLO</span>
            <span className="block -mt-2">INTERFACE</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced holographic user interface with quantum gesture recognition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="p-8 border-2 border-emerald-400/30 bg-black/50 backdrop-blur-sm rounded-3xl">
              <h3 className="text-3xl font-bold text-emerald-300 mb-6 flex items-center gap-3">
                <span className="text-4xl">🌌</span>
                Dimensional Navigation
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-emerald-400/50 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <span className="text-emerald-400">👁</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Eye Tracking</div>
                    <div className="text-slate-400 text-sm">Quantum precision gaze control</div>
                  </div>
                  <div className="ml-auto">
                    <div className="px-3 py-1 bg-emerald-400/20 text-emerald-300 text-xs rounded-full border border-emerald-400/40">
                      ACTIVE
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-purple-400/50 rounded-full bg-purple-400/10 flex items-center justify-center">
                    <span className="text-purple-400">✋</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Gesture Control</div>
                    <div className="text-slate-400 text-sm">Multi-dimensional hand tracking</div>
                  </div>
                  <div className="ml-auto">
                    <div className="px-3 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full border border-purple-400/40">
                      READY
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-blue-400/50 rounded-full bg-blue-400/10 flex items-center justify-center">
                    <span className="text-blue-400">🧠</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Neural Link</div>
                    <div className="text-slate-400 text-sm">Direct brain-computer interface</div>
                  </div>
                  <div className="ml-auto">
                    <div className="px-3 py-1 bg-blue-400/20 text-blue-300 text-xs rounded-full border border-blue-400/40">
                      SYNC
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border border-purple-400/30 bg-purple-950/30 backdrop-blur-sm rounded-2xl text-center">
                <div className="text-purple-400 text-3xl mb-3">🔮</div>
                <div className="text-2xl font-bold text-purple-300 mb-2">∞⁴</div>
                <div className="text-slate-400 text-sm">Holo Dimensions</div>
              </div>
              
              <div className="p-6 border border-emerald-400/30 bg-emerald-950/30 backdrop-blur-sm rounded-2xl text-center">
                <div className="text-emerald-400 text-3xl mb-3">⚡</div>
                <div className="text-2xl font-bold text-emerald-300 mb-2">1ms</div>
                <div className="text-slate-400 text-sm">Quantum Latency</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="border-4 border-emerald-400/30 bg-black/30 backdrop-blur-sm p-8 rounded-3xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">🌌 HOLO CONTROL PANEL</h3>
                <p className="text-slate-400 text-sm">Interactive dimensional interface</p>
              </div>
              
              <div className="relative h-96 bg-black/50 border border-emerald-500/30 rounded-2xl overflow-hidden">
                <div className="absolute inset-4 grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-emerald-400/30 bg-emerald-400/10 rounded-lg flex items-center justify-center relative group cursor-pointer hover:bg-emerald-400/20 transition-all duration-300"
                      style={{
                        animation: `holo-pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-purple-400/10 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-emerald-400 text-lg relative z-10">
                        {['🔮', '⚛', '🌌', '💎', '⚡', '🧠', '👁', '✋'][i % 8]}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                  <span>Interface: Active</span>
                  <span>Sync: 99.9%</span>
                  <span>Neural: Connected</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-6">
                <button className="p-3 border border-emerald-400/40 bg-emerald-400/10 rounded-xl text-emerald-300 hover:bg-emerald-400/20 transition-all duration-300 text-center">
                  <div className="text-lg mb-1">🔮</div>
                  <div className="text-xs">ACTIVATE</div>
                </button>
                <button className="p-3 border border-purple-400/40 bg-purple-400/10 rounded-xl text-purple-300 hover:bg-purple-400/20 transition-all duration-300 text-center">
                  <div className="text-lg mb-1">⚛</div>
                  <div className="text-xs">QUANTUM</div>
                </button>
                <button className="p-3 border border-blue-400/40 bg-blue-400/10 rounded-xl text-blue-300 hover:bg-blue-400/20 transition-all duration-300 text-center">
                  <div className="text-lg mb-1">🌌</div>
                  <div className="text-xs">NEURAL</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { feature: "Real-time Tracking", status: "99.9%", icon: "👁" },
              { feature: "Gesture Recognition", status: "98.7%", icon: "✋" },
              { feature: "Neural Integration", status: "97.8%", icon: "🧠" },
              { feature: "Quantum Processing", status: "99.8%", icon: "⚛" }
            ].map((item, index) => (
              <div
                key={item.feature}
                className="p-6 border border-purple-400/30 bg-purple-950/20 backdrop-blur-sm rounded-2xl text-center"
                style={{
                  animation: `holo-fade-in 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-purple-300 font-bold text-lg mb-2">{item.status}</div>
                <div className="text-slate-400 text-sm">{item.feature}</div>
                <div className="mt-3 w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full"
                    style={{ 
                      width: item.status,
                      animation: `holo-grow 2s ease-out forwards`,
                      animationDelay: `${index * 0.2 + 1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 