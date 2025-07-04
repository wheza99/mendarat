'use client';

export default function CosmicFlow() {
  return (
    <section className="py-32 px-6 relative">
      {/* Cosmic Flow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at center top, rgba(6, 182, 212, 0.4), transparent 70%),
                radial-gradient(ellipse at bottom left, rgba(168, 85, 247, 0.3), transparent 60%),
                radial-gradient(ellipse at bottom right, rgba(34, 197, 94, 0.5), transparent 65%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">
            <span className="block">COSMIC</span>
            <span className="block -mt-2">FLOW</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-aurora-flow" />
            <div className="w-14 h-14 border-2 border-cyan-400 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center animate-aurora-spin">
              <span className="text-cyan-400 text-xl">🌟</span>
            </div>
            <div className="w-18 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-aurora-wave" />
            <div className="w-10 h-10 border border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm animate-aurora-drift" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-aurora-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Channeling cosmic energy flows through quantum field manipulations and stellar wind dynamics
          </p>
        </div>

        {/* Cosmic Flow Systems */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Stellar Winds",
              velocity: "2.4M km/s",
              density: "99.2%",
              temperature: "1.5M K",
              color: "cyan",
              icon: "🌟"
            },
            {
              name: "Quantum Streams",
              velocity: "∞ c",
              density: "97.8%",
              temperature: "∞ K",
              color: "purple",
              icon: "⚛"
            },
            {
              name: "Aurora Currents",
              velocity: "847 km/s",
              density: "95.6%",
              temperature: "2.1M K",
              color: "emerald",
              icon: "🌌"
            }
          ].map((flow, index) => (
            <div
              key={flow.name}
              className="group relative"
              style={{
                animation: `aurora-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-cyan-400/30 bg-slate-900/50 backdrop-blur-sm rounded-3xl hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
                {/* Cosmic Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `conic-gradient(from ${index * 120}deg, rgba(6, 182, 212, 0.6), rgba(168, 85, 247, 0.4), rgba(34, 197, 94, 0.5))`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Flow Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{flow.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{flow.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-100/10 text-cyan-300 text-sm font-medium rounded-full border border-cyan-400/30">
                          FLOWING
                        </span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flow Metrics */}
                  <div className="space-y-4">
                    {/* Density Level */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Flow Density</span>
                      <span className="text-cyan-400 font-bold">{flow.density}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-slate-800/50 rounded-full border border-slate-700 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ 
                            width: flow.density,
                            animation: `aurora-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Flow Statistics */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{flow.velocity}</div>
                        <div className="text-xs text-slate-400">Velocity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{flow.temperature}</div>
                        <div className="text-xs text-slate-400">Temperature</div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="mt-6 p-3 bg-black/30 border border-slate-700 rounded-xl">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Flow Status:</span>
                        <span className="text-cyan-400 font-mono">OPTIMAL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Cosmic Flow Visualization */}
        <div className="relative mb-16">
          <div className="border-4 border-cyan-400/30 bg-slate-900/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            {/* Flow Visualization Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-cyan-300 mb-4">🌟 COSMIC FLOW MATRIX</h3>
              <p className="text-slate-300">Real-time cosmic energy flow visualization and particle tracking</p>
            </div>
            
            {/* Flow Simulation */}
            <div className="relative h-64 bg-black/50 border border-slate-700 rounded-2xl overflow-hidden">
              {/* Cosmic Flow SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="cosmic1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="cosmic2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="cosmic3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                <path 
                  d="M 0 60 Q 200 40 400 60 T 800 70 Q 1000 50 1200 60"
                  stroke="url(#cosmic1)" 
                  strokeWidth="4" 
                  fill="none"
                  className="animate-aurora-wave"
                />
                <path 
                  d="M 0 120 Q 300 100 600 120 T 1200 130"
                  stroke="url(#cosmic2)" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-aurora-wave"
                  style={{ animationDelay: '1s' }}
                />
                <path 
                  d="M 0 180 Q 250 160 500 180 T 1000 190 Q 1100 170 1200 180"
                  stroke="url(#cosmic3)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-aurora-wave"
                  style={{ animationDelay: '2s' }}
                />
              </svg>
              
              {/* Floating Cosmic Particles */}
              <div className="absolute top-16 left-16 w-3 h-3 bg-cyan-400 rounded-full opacity-80 animate-aurora-float"></div>
              <div className="absolute top-24 right-24 w-2 h-2 bg-purple-400 rounded-full opacity-70 animate-aurora-drift"></div>
              <div className="absolute bottom-24 left-32 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-aurora-spiral"></div>
              <div className="absolute bottom-32 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-90 animate-aurora-float"></div>
              <div className="absolute top-32 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-aurora-drift"></div>
              <div className="absolute bottom-16 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-aurora-spiral"></div>
              
              {/* Flow Metrics Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-400">
                <span>Flow Rate: 2.4M km/s</span>
                <span>Particle Density: 97.8%</span>
                <span>Energy Level: 99.2%</span>
              </div>
            </div>
            
            {/* Flow Control Panel */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                <div className="text-cyan-400 text-2xl mb-2">🌟</div>
                <div className="text-cyan-400 font-bold text-lg">2.4M</div>
                <div className="text-slate-400 text-sm">Stellar Winds</div>
              </div>
              <div className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                <div className="text-purple-400 text-2xl mb-2">⚛</div>
                <div className="text-purple-400 font-bold text-lg">∞</div>
                <div className="text-slate-400 text-sm">Quantum Streams</div>
              </div>
              <div className="p-4 bg-black/30 border border-slate-700 rounded-xl text-center">
                <div className="text-emerald-400 text-2xl mb-2">🌌</div>
                <div className="text-emerald-400 font-bold text-lg">847K</div>
                <div className="text-slate-400 text-sm">Aurora Currents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 