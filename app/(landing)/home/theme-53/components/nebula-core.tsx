'use client';

export default function NebulaCore() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">NEBULA CORE SYSTEMS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Galactic Core
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Monitor and control the cosmic energy systems of the quantum nebula
          </p>
        </div>

        {/* Core Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Core Processor */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue-200">Galactic Processor</h3>
              <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm">
                ∞ TFLOPS
              </div>
            </div>

            {/* Processor Visualization */}
            <div className="relative h-64 bg-gradient-to-br from-blue-950/50 to-purple-950/50 rounded-2xl border border-blue-400/30 overflow-hidden mb-6">
              {/* Central Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-24 h-24 border-3 border-blue-400 rounded-full bg-blue-400/20 backdrop-blur-sm animate-quantum-spin"></div>
                  <div className="absolute inset-3 border-2 border-purple-400 rounded-full bg-purple-400/30 animate-quantum-spin" style={{ animationDirection: 'reverse', animationDuration: '6s' }}></div>
                  <div className="absolute inset-6 border border-pink-400 rounded-full bg-pink-400/40 animate-quantum-spin" style={{ animationDuration: '4s' }}></div>
                  <div className="absolute inset-9 w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Energy Rings */}
              <div className="absolute inset-8 border border-blue-400/30 rounded-full animate-quantum-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-12 border border-purple-400/30 rounded-full animate-quantum-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute inset-16 border border-pink-400/30 rounded-full animate-quantum-spin" style={{ animationDuration: '10s' }}></div>

              {/* Energy Beams */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-quantum-flow"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 animate-quantum-flow" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Processor Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-300">99.9%</div>
                <div className="text-xs text-slate-400">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-300">0.1ms</div>
                <div className="text-xs text-slate-400">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-pink-300">∞ QHz</div>
                <div className="text-xs text-slate-400">Frequency</div>
              </div>
            </div>
          </div>

          {/* Energy Matrix */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-purple-200">Energy Matrix</h3>
              <div className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm">
                777 QW/s
              </div>
            </div>

            {/* Matrix Grid */}
            <div className="relative h-64 bg-gradient-to-br from-purple-950/50 to-pink-950/50 rounded-2xl border border-purple-400/30 overflow-hidden mb-6">
              {/* Energy Grid */}
              <div className="absolute inset-4">
                <div className="grid grid-cols-6 grid-rows-6 gap-2 h-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`bg-gradient-to-br ${
                        i % 3 === 0 ? 'from-purple-400/20 to-blue-400/20' :
                        i % 3 === 1 ? 'from-blue-400/20 to-pink-400/20' :
                        'from-pink-400/20 to-purple-400/20'
                      } rounded border border-purple-400/20 animate-quantum-neural`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Energy Connections */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <defs>
                  <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <path d="M 20 20 Q 100 50 180 20 Q 200 100 180 180 Q 100 200 20 180 Q 0 100 20 20" 
                      stroke="url(#energyGradient)" strokeWidth="2" fill="none" className="animate-quantum-flow" />
              </svg>
            </div>

            {/* Matrix Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Matrix Stability</span>
                <span className="text-purple-300 font-medium">98.7%</span>
              </div>
              <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                <div className="h-full w-[98.7%] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-quantum-progress"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Performance Dashboard */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-400/20 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-indigo-200 mb-8 text-center">Core Performance Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Quantum Processing */}
            <div className="text-center p-6 bg-indigo-950/30 rounded-2xl border border-indigo-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="text-2xl font-bold text-indigo-300 mb-2">∞ QFLOPS</div>
              <div className="text-sm text-slate-400">Quantum Processing</div>
              <div className="mt-3 w-full h-1 bg-indigo-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-quantum-progress"></div>
              </div>
            </div>

            {/* Nebula Memory */}
            <div className="text-center p-6 bg-blue-950/30 rounded-2xl border border-blue-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌌</span>
              </div>
              <div className="text-2xl font-bold text-blue-300 mb-2">777 PB/s</div>
              <div className="text-sm text-slate-400">Nebula Memory</div>
              <div className="mt-3 w-full h-1 bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-quantum-progress" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Cosmic Engine */}
            <div className="text-center p-6 bg-purple-950/30 rounded-2xl border border-purple-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="text-2xl font-bold text-purple-300 mb-2">∞³ OPS</div>
              <div className="text-sm text-slate-400">Cosmic Engine</div>
              <div className="mt-3 w-full h-1 bg-purple-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-quantum-progress" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Portal Network */}
            <div className="text-center p-6 bg-pink-950/30 rounded-2xl border border-pink-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌀</span>
              </div>
              <div className="text-2xl font-bold text-pink-300 mb-2">777 Nodes</div>
              <div className="text-sm text-slate-400">Portal Network</div>
              <div className="mt-3 w-full h-1 bg-pink-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-quantum-progress" style={{ animationDelay: '3s' }}></div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm">All Systems Operational</span>
            </div>
            <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-quantum-flow"></div>
            <div className="flex items-center gap-2">
              <span className="text-blue-300 text-sm">Nebula Core: STABLE</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 