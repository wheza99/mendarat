'use client';

export default function QuantumField() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm font-medium">QUANTUM FIELD ANALYSIS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Particle Field
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Manipulate quantum particles through interdimensional energy fields
          </p>
        </div>

        {/* Quantum Field Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Energy Spectrum */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-purple-200">Energy Spectrum</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm">ACTIVE</span>
              </div>
            </div>

            {/* Quantum Particles Visualization */}
            <div className="relative h-80 bg-gradient-to-br from-purple-950/50 to-blue-950/50 rounded-2xl border border-purple-400/30 overflow-hidden">
              {/* Floating Particles */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-purple-400 rounded-full opacity-80 animate-quantum-float"></div>
              <div className="absolute top-16 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-quantum-drift"></div>
              <div className="absolute top-12 left-32 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-quantum-spiral"></div>
              <div className="absolute top-20 left-44 w-2 h-2 bg-indigo-400 rounded-full opacity-90 animate-quantum-float"></div>
              <div className="absolute top-6 left-56 w-6 h-6 bg-violet-400 rounded-full opacity-50 animate-quantum-drift"></div>
              
              <div className="absolute top-32 left-12 w-3 h-3 bg-cyan-400 rounded-full opacity-85 animate-quantum-spiral"></div>
              <div className="absolute top-40 left-24 w-4 h-4 bg-purple-400 rounded-full opacity-75 animate-quantum-float"></div>
              <div className="absolute top-36 left-36 w-2 h-2 bg-blue-400 rounded-full opacity-95 animate-quantum-drift"></div>
              <div className="absolute top-44 left-48 w-5 h-5 bg-pink-400 rounded-full opacity-65 animate-quantum-spiral"></div>
              <div className="absolute top-28 left-60 w-3 h-3 bg-indigo-400 rounded-full opacity-80 animate-quantum-float"></div>

              <div className="absolute bottom-8 right-8 w-4 h-4 bg-purple-400 rounded-full opacity-80 animate-quantum-float"></div>
              <div className="absolute bottom-16 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-quantum-drift"></div>
              <div className="absolute bottom-12 right-32 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-quantum-spiral"></div>
              <div className="absolute bottom-20 right-44 w-2 h-2 bg-indigo-400 rounded-full opacity-90 animate-quantum-float"></div>
              <div className="absolute bottom-6 right-56 w-6 h-6 bg-violet-400 rounded-full opacity-50 animate-quantum-drift"></div>

              {/* Energy Connections */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#8B5CF6" strokeWidth="1" className="animate-quantum-flow" />
                <line x1="25%" y1="15%" x2="45%" y2="35%" stroke="#3B82F6" strokeWidth="1" className="animate-quantum-flow" style={{ animationDelay: '1s' }} />
                <line x1="40%" y1="25%" x2="60%" y2="45%" stroke="#EC4899" strokeWidth="1" className="animate-quantum-flow" style={{ animationDelay: '2s' }} />
                <line x1="55%" y1="20%" x2="75%" y2="40%" stroke="#A855F7" strokeWidth="1" className="animate-quantum-flow" style={{ animationDelay: '3s' }} />
                <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="#06B6D4" strokeWidth="1" className="animate-quantum-flow" style={{ animationDelay: '4s' }} />
              </svg>

              {/* Central Quantum Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 border-2 border-purple-400 rounded-full bg-purple-400/20 backdrop-blur-sm animate-quantum-spin"></div>
                  <div className="absolute inset-2 border border-blue-400 rounded-full bg-blue-400/30 animate-quantum-spin" style={{ animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Quantum Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">247</div>
                <div className="text-xs text-slate-400">Particles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">89.4%</div>
                <div className="text-xs text-slate-400">Stability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-300">∞ QE</div>
                <div className="text-xs text-slate-400">Energy</div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {/* Field Intensity */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Field Intensity</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Quantum Level</span>
                  <span className="text-blue-300 font-medium">87%</span>
                </div>
                <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-quantum-progress"></div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Particle Density</span>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-300 font-medium">High</span>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Energy Flow</span>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-300 font-medium">Stable</span>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimensional Status */}
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-pink-200 mb-4">Dimensional Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">Dimension Alpha</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-slate-300">Dimension Beta</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-slate-300">Dimension Gamma</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-pink-950/30 rounded-xl border border-pink-400/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-300">3</div>
                  <div className="text-xs text-slate-400">Active Portals</div>
                </div>
              </div>
            </div>

            {/* Quantum Controls */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-purple-200 mb-4">Quantum Controls</h4>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-purple-600/30 border border-purple-400/30 rounded-xl text-purple-200 hover:bg-purple-600/50 transition-colors">
                  🌌 Stabilize Field
                </button>
                <button className="w-full px-4 py-3 bg-blue-600/30 border border-blue-400/30 rounded-xl text-blue-200 hover:bg-blue-600/50 transition-colors">
                  ⚛️ Boost Energy
                </button>
                <button className="w-full px-4 py-3 bg-pink-600/30 border border-pink-400/30 rounded-xl text-pink-200 hover:bg-pink-600/50 transition-colors">
                  🔄 Reset Quantum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 