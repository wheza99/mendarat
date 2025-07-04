'use client';

export default function DeepCore() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-900/30 border border-teal-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-300 text-sm font-medium">DEEP CORE SYSTEMS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Ocean Core
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Control the deep underwater processing systems of the digital ocean
          </p>
        </div>

        {/* Core Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Aqua Processor */}
          <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 border border-teal-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-teal-200">Aqua Processor</h3>
              <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm">
                ∞ AFLOPS
              </div>
            </div>

            {/* Processor Visualization */}
            <div className="relative h-64 bg-gradient-to-br from-teal-950/50 to-cyan-950/50 rounded-2xl border border-teal-400/30 overflow-hidden mb-6">
              {/* Central Processor Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-28 h-28 border-3 border-teal-400 rounded-full bg-teal-400/20 backdrop-blur-sm animate-ocean-spin"></div>
                  <div className="absolute inset-4 border-2 border-cyan-400 rounded-full bg-cyan-400/30 animate-ocean-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
                  <div className="absolute inset-8 border border-blue-400 rounded-full bg-blue-400/40 animate-ocean-spin" style={{ animationDuration: '6s' }}></div>
                  <div className="absolute inset-12 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Processing Rings */}
              <div className="absolute inset-10 border border-teal-400/30 rounded-full animate-ocean-spin" style={{ animationDuration: '25s' }}></div>
              <div className="absolute inset-14 border border-cyan-400/30 rounded-full animate-ocean-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
              <div className="absolute inset-18 border border-blue-400/30 rounded-full animate-ocean-spin" style={{ animationDuration: '15s' }}></div>

              {/* Data Streams */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60 animate-ocean-flow"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60 animate-ocean-flow" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Processor Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-teal-300">99.8%</div>
                <div className="text-xs text-slate-400">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-300">0.2ms</div>
                <div className="text-xs text-slate-400">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-300">∞ AHz</div>
                <div className="text-xs text-slate-400">Frequency</div>
              </div>
            </div>
          </div>

          {/* Ocean Memory */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-sky-900/20 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-cyan-200">Ocean Memory</h3>
              <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
                888 AB/s
              </div>
            </div>

            {/* Memory Pool */}
            <div className="relative h-64 bg-gradient-to-br from-cyan-950/50 to-sky-950/50 rounded-2xl border border-cyan-400/30 overflow-hidden mb-6">
              {/* Memory Grid */}
              <div className="absolute inset-4">
                <div className="grid grid-cols-8 grid-rows-8 gap-1 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`bg-gradient-to-br ${
                        i % 4 === 0 ? 'from-cyan-400/20 to-blue-400/20' :
                        i % 4 === 1 ? 'from-blue-400/20 to-teal-400/20' :
                        i % 4 === 2 ? 'from-teal-400/20 to-cyan-400/20' :
                        'from-sky-400/20 to-cyan-400/20'
                      } rounded border border-cyan-400/20 animate-ocean-neural`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Memory Flow */}
              <svg className="absolute inset-0 w-full h-full opacity-50">
                <defs>
                  <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#14B8A6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path d="M 30 30 Q 120 60 210 30 Q 230 120 210 210 Q 120 230 30 210 Q 10 120 30 30" 
                      stroke="url(#memoryGradient)" strokeWidth="3" fill="none" className="animate-ocean-flow" />
              </svg>
            </div>

            {/* Memory Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Memory Usage</span>
                <span className="text-cyan-300 font-medium">94.2%</span>
              </div>
              <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
                <div className="h-full w-[94.2%] bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full animate-ocean-progress"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Core Performance Dashboard */}
        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center">Deep Core Performance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Aqua Processing */}
            <div className="text-center p-6 bg-teal-950/30 rounded-2xl border border-teal-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌊</span>
              </div>
              <div className="text-2xl font-bold text-teal-300 mb-2">∞ AFLOPS</div>
              <div className="text-sm text-slate-400">Aqua Processing</div>
              <div className="mt-3 w-full h-1 bg-teal-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ocean-progress"></div>
              </div>
            </div>

            {/* Ocean Memory */}
            <div className="text-center p-6 bg-cyan-950/30 rounded-2xl border border-cyan-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <div className="text-2xl font-bold text-cyan-300 mb-2">888 AB/s</div>
              <div className="text-sm text-slate-400">Ocean Memory</div>
              <div className="mt-3 w-full h-1 bg-cyan-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full animate-ocean-progress" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Current Engine */}
            <div className="text-center p-6 bg-blue-950/30 rounded-2xl border border-blue-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-2xl font-bold text-blue-300 mb-2">∞² OPS</div>
              <div className="text-sm text-slate-400">Current Engine</div>
              <div className="mt-3 w-full h-1 bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ocean-progress" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Tidal Network */}
            <div className="text-center p-6 bg-sky-950/30 rounded-2xl border border-sky-400/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-400 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <div className="text-2xl font-bold text-sky-300 mb-2">888 Nodes</div>
              <div className="text-sm text-slate-400">Tidal Network</div>
              <div className="mt-3 w-full h-1 bg-sky-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-blue-400 rounded-full animate-ocean-progress" style={{ animationDelay: '3s' }}></div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm">All Systems Flowing</span>
            </div>
            <div className="w-10 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-ocean-flow"></div>
            <div className="flex items-center gap-2">
              <span className="text-teal-300 text-sm">Deep Core: STABLE</span>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 