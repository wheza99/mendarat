'use client';

export default function QuantumField() {
  const quantumStats = [
    {
      value: "4.127 × 10²³",
      label: "Quantum Particles",
      unit: "particles/m³",
      color: "purple",
      icon: "⚛"
    },
    {
      value: "∞ Hz",
      label: "Field Frequency",
      unit: "cycles/sec",
      color: "emerald",
      icon: "〰"
    },
    {
      value: "99.8%",
      label: "Energy Coherence",
      unit: "quantum state",
      color: "pink",
      icon: "◈"
    },
    {
      value: "2.847 eV",
      label: "Photon Energy",
      unit: "electron volts",
      color: "blue",
      icon: "✦"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Quantum Background Field */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.4), transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.3), transparent 45%),
                radial-gradient(circle at 60% 20%, rgba(236, 72, 153, 0.35), transparent 50%)
              `
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-pink-400">
            <span className="block">QUANTUM</span>
            <span className="block -mt-2">FIELD</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-aurora-flow" />
            <div className="w-10 h-10 border-2 border-emerald-400 rounded-full bg-emerald-400/20 backdrop-blur-sm flex items-center justify-center animate-aurora-spin">
              <span className="text-emerald-400 text-sm">⚛</span>
            </div>
            <div className="w-16 h-2 bg-gradient-to-r from-emerald-400 to-pink-400 rounded-full animate-aurora-wave" />
            <div className="w-8 h-8 border border-pink-400 rounded-full bg-pink-400/20 backdrop-blur-sm animate-aurora-drift" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-aurora-flow" style={{ animationDelay: '2s' }} />
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Exploring the fundamental fabric of reality through quantum field dynamics and energy particle interactions
          </p>
        </div>

        {/* Quantum Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {quantumStats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{
                animation: `aurora-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className={`p-6 border-2 border-${stat.color}-400/30 bg-${stat.color}-950/30 backdrop-blur-sm rounded-3xl hover:border-${stat.color}-400/60 transition-all duration-300 relative overflow-hidden`}>
                {/* Quantum Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `conic-gradient(from 0deg, rgba(139, 92, 246, 0.5), rgba(34, 197, 94, 0.3), rgba(236, 72, 153, 0.4))`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Stat Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{stat.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{stat.label}</h3>
                      <p className="text-slate-400 text-sm">{stat.unit}</p>
                    </div>
                  </div>
                  
                  {/* Stat Value */}
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
                      {stat.value}
                    </div>
                    
                    {/* Quantum Progress Indicator */}
                    <div className="relative">
                      <div className="w-full h-3 bg-slate-800/50 rounded-full border border-slate-700 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${stat.color}-400 to-${stat.color === 'purple' ? 'pink' : stat.color === 'emerald' ? 'cyan' : stat.color === 'pink' ? 'purple' : 'emerald'}-400 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: `${85 + index * 3}%`,
                            animation: `aurora-grow 2s ease-out forwards`,
                            animationDelay: `${index * 0.3 + 0.5}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <div className={`w-5 h-5 bg-white border-2 border-${stat.color}-400 rounded-full flex items-center justify-center`}>
                          <div className={`w-2 h-2 bg-${stat.color}-400 rounded-full animate-pulse`} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`text-lg font-bold text-${stat.color}-400`}>ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Field Laboratory */}
        <div className="relative">
          <div className="border-4 border-purple-400/30 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
            {/* Lab Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">⚛ QUANTUM FIELD LABORATORY</h3>
              <p className="text-slate-300">Real-time analysis of quantum field fluctuations and energy distributions</p>
            </div>
            
            {/* Lab Interface Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Particle Detector */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-purple-400/50 rounded-full bg-purple-950/30 backdrop-blur-sm flex items-center justify-center relative">
                  <span className="text-3xl">🔬</span>
                  <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full animate-aurora-spin"></div>
                </div>
                <h4 className="font-bold text-white mb-2">Particle Detection</h4>
                <p className="text-slate-400 text-sm mb-3">Scanning quantum particle distributions</p>
                <div className="text-purple-300 font-mono text-xs">
                  [SCAN] ████████████ 100%
                </div>
                <div className="mt-3 w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-aurora-progress" />
                </div>
              </div>
              
              {/* Energy Field Analysis */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-emerald-400/50 rounded-full bg-emerald-950/30 backdrop-blur-sm flex items-center justify-center relative">
                  <span className="text-3xl">⚡</span>
                  <div className="absolute inset-0 border-4 border-emerald-400/30 rounded-full animate-aurora-drift"></div>
                </div>
                <h4 className="font-bold text-white mb-2">Energy Field</h4>
                <p className="text-slate-400 text-sm mb-3">Measuring field strength variations</p>
                <div className="text-emerald-300 font-mono text-xs">
                  [FIELD] ██████████░░ 87%
                </div>
                <div className="mt-3 w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-aurora-progress" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              {/* Wave Function */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-pink-400/50 rounded-full bg-pink-950/30 backdrop-blur-sm flex items-center justify-center relative">
                  <span className="text-3xl">〰</span>
                  <div className="absolute inset-0 border-4 border-pink-400/30 rounded-full animate-aurora-pulse"></div>
                </div>
                <h4 className="font-bold text-white mb-2">Wave Function</h4>
                <p className="text-slate-400 text-sm mb-3">Analyzing probability distributions</p>
                <div className="text-pink-300 font-mono text-xs">
                  [WAVE] ████████████ 94%
                </div>
                <div className="mt-3 w-full h-2 bg-pink-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-aurora-progress" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>
            
            {/* Terminal Output */}
            <div className="mt-8 p-6 bg-black/50 border border-emerald-400/30 rounded-xl font-mono text-sm">
              <div className="text-emerald-400 mb-2">[QUANTUM_LAB] ./field_analysis --live</div>
              <div className="text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span>▸ Quantum coherence level:</span>
                  <span className="text-purple-400">99.7% stable</span>
                </div>
                <div className="flex justify-between">
                  <span>▸ Energy fluctuation rate:</span>
                  <span className="text-emerald-400">2.34 × 10⁻¹⁵ Hz</span>
                </div>
                <div className="flex justify-between">
                  <span>▸ Particle entanglement:</span>
                  <span className="text-pink-400">847 pairs detected</span>
                </div>
                <div className="flex justify-between">
                  <span>▸ Field resonance:</span>
                  <span className="text-cyan-400">SYNCHRONIZED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                <span>⚛ ANALYZE FIELD</span>
                <div className="w-5 h-5 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-emerald-400/50 text-emerald-300 rounded-full font-semibold text-lg hover:bg-emerald-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>〰 VIEW WAVES</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}