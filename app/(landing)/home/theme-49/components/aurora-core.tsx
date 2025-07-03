'use client';

export default function AuroraCore() {
  const auroraCores = [
    {
      name: "Northern Lights",
      energy: "98.7%",
      frequency: "7.83 Hz",
      particles: "4.2M",
      color: "emerald",
      icon: "🌌"
    },
    {
      name: "Quantum Resonance",
      energy: "95.4%",
      frequency: "∞ Hz",
      particles: "8.9M",
      color: "purple",
      icon: "⚛"
    },
    {
      name: "Cosmic Aurora",
      energy: "99.9%",
      frequency: "42.0 Hz",
      particles: "15.7M",
      color: "pink",
      icon: "✦"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Aurora Core Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top center, rgba(139, 92, 246, 0.5), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.4), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(236, 72, 153, 0.6), transparent 55%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400">
            <span className="block">AURORA</span>
            <span className="block -mt-2">CORE</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-aurora-flow" />
            <div className="w-12 h-12 border-2 border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm flex items-center justify-center animate-aurora-spin">
              <span className="text-purple-400 text-lg">🌌</span>
            </div>
            <div className="w-16 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-aurora-wave" />
            <div className="w-8 h-8 border border-emerald-400 rounded-full bg-emerald-400/20 backdrop-blur-sm animate-aurora-drift" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-aurora-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Harnessing the power of aurora borealis energy fields for quantum computational systems
          </p>
        </div>

        {/* Aurora Core Systems */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {auroraCores.map((core, index) => (
            <div
              key={core.name}
              className="group relative"
              style={{
                animation: `aurora-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              <div className="p-8 border-2 border-purple-400/30 bg-slate-900/50 backdrop-blur-sm rounded-3xl hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
                {/* Aurora Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `conic-gradient(from ${index * 120}deg, rgba(139, 92, 246, 0.6), rgba(34, 197, 94, 0.4), rgba(236, 72, 153, 0.5))`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Core Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{core.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{core.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 bg-${core.color}-100/10 text-${core.color}-300 text-sm font-medium rounded-full border border-${core.color}-400/30`}>
                          ACTIVE
                        </span>
                        <div className={`w-2 h-2 bg-${core.color}-400 rounded-full animate-pulse`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Core Metrics */}
                  <div className="space-y-4">
                    {/* Energy Level */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">Energy Level</span>
                      <span className={`text-${core.color}-400 font-bold`}>{core.energy}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-3 bg-slate-800/50 rounded-full border border-slate-700 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${core.color}-400 to-${core.color === 'emerald' ? 'cyan' : core.color === 'purple' ? 'pink' : 'purple'}-400 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: core.energy,
                            animation: `aurora-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Core Statistics */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${core.color}-400`}>{core.frequency}</div>
                        <div className="text-xs text-slate-400">Frequency</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${core.color}-400`}>{core.particles}</div>
                        <div className="text-xs text-slate-400">Particles</div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="mt-6 p-3 bg-black/30 border border-slate-700 rounded-xl">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Core Status:</span>
                        <span className={`text-${core.color}-400 font-mono`}>SYNCHRONIZED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Aurora Visualization */}
        <div className="relative mb-16">
          <div className="border-4 border-emerald-400/30 bg-slate-900/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            {/* Aurora Visualization Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-300 mb-4">🌌 AURORA VISUALIZATION</h3>
              <p className="text-slate-300">Real-time aurora borealis energy field mapping</p>
            </div>
            
            {/* Aurora Simulation */}
            <div className="relative h-64 bg-black/50 border border-slate-700 rounded-2xl overflow-hidden">
              {/* Aurora Waves SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#22C55E" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="aurora2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="aurora3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                <path 
                  d="M 0 50 Q 200 30 400 50 T 800 60 Q 1000 40 1200 50"
                  stroke="url(#aurora1)" 
                  strokeWidth="4" 
                  fill="none"
                  className="animate-aurora-wave"
                />
                <path 
                  d="M 0 100 Q 300 80 600 100 T 1200 110"
                  stroke="url(#aurora2)" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-aurora-wave"
                  style={{ animationDelay: '1s' }}
                />
                <path 
                  d="M 0 150 Q 150 130 300 150 T 600 160 Q 900 140 1200 150"
                  stroke="url(#aurora3)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-aurora-wave"
                  style={{ animationDelay: '2s' }}
                />
              </svg>
              
              {/* Aurora Particles */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-purple-400 rounded-full animate-aurora-float"></div>
              <div className="absolute top-16 right-16 w-3 h-3 bg-emerald-400 rounded-full animate-aurora-drift"></div>
              <div className="absolute bottom-12 left-20 w-1 h-1 bg-pink-400 rounded-full animate-aurora-spiral"></div>
              <div className="absolute bottom-8 right-12 w-2 h-2 bg-cyan-400 rounded-full animate-aurora-float"></div>
              
              {/* Aurora Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>LAT: 69.6492°N</span>
                  <span>AURORA INTENSITY: HIGH</span>
                  <span>KP INDEX: 7.2</span>
                </div>
              </div>
            </div>
            
            {/* Aurora Data */}
            <div className="mt-8 grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">7.83 Hz</div>
                <div className="text-sm text-slate-400">Schumann Resonance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">47.2°</div>
                <div className="text-sm text-slate-400">Magnetic Inclination</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">2.847M</div>
                <div className="text-sm text-slate-400">Photon Flux</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">99.7%</div>
                <div className="text-sm text-slate-400">Field Coherence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Aurora Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                <span>🌌 ACTIVATE AURORA</span>
                <div className="w-5 h-5 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>✦ VISUALIZE FIELD</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}