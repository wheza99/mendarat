export default function SolarCore() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
              Solar Core Systems
            </span>
          </h2>
          <p className="text-xl text-orange-200/70 max-w-3xl mx-auto">
            Advanced fusion processing with stellar-grade computational cores and helium-hydrogen plasma management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Fusion Processor */}
          <div className="group">
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-red-300 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-600 animate-solar-pulse"></div>
                Fusion Processor
              </h3>
              
              {/* Complex Processor Visualization */}
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto relative">
                  {/* Outer Corona Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-orange-500 to-red-500 animate-solar-spin">
                    <div className="w-full h-full rounded-full border-4 border-orange-500/40"></div>
                  </div>
                  
                  {/* Middle Fusion Ring */}
                  <div className="absolute inset-6 rounded-full border-3 border-red-500/50 animate-solar-spin" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
                    <div className="w-full h-full rounded-full border-2 border-red-400/30"></div>
                  </div>
                  
                  {/* Inner Plasma Core */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 animate-solar-pulse shadow-2xl shadow-orange-500/50">
                    <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
                      <span className="text-white font-bold text-3xl z-10">☉</span>
                      {/* Plasma Streams */}
                      <div className="absolute inset-0 bg-gradient-conic from-orange-500 via-red-500 to-yellow-500 animate-solar-spin opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* Fusion Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                    <defs>
                      <linearGradient id="fusionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#F97316" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <line x1="32" y1="128" x2="80" y2="128" stroke="url(#fusionGradient)" strokeWidth="2" className="animate-solar-flow" />
                    <line x1="232" y1="128" x2="184" y2="128" stroke="url(#fusionGradient)" strokeWidth="2" className="animate-solar-flow" />
                    <line x1="128" y1="32" x2="128" y2="80" stroke="url(#fusionGradient)" strokeWidth="2" className="animate-solar-flow" />
                    <line x1="128" y1="232" x2="128" y2="184" stroke="url(#fusionGradient)" strokeWidth="2" className="animate-solar-flow" />
                  </svg>
                </div>
              </div>

              {/* Processor Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-red-300/80">Fusion Efficiency</span>
                  <span className="text-red-400 font-mono">98.6%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-solar-progress" style={{ width: '98.6%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-red-300/80">Stellar Output</span>
                  <span className="text-orange-400 font-mono">1.2 PW</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-solar-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Solar Memory Matrix */}
          <div className="group">
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-yellow-300 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 animate-solar-pulse"></div>
                Solar Memory Matrix
              </h3>

              {/* 8x8 Memory Grid */}
              <div className="grid grid-cols-8 gap-1 mb-8 p-4 bg-black/20 rounded-lg">
                {Array.from({ length: 64 }, (_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 hover:from-yellow-400/40 hover:to-orange-400/40 transition-all duration-300 animate-solar-neural"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      background: i % 7 === 0 ? 'linear-gradient(to br, rgb(251 191 36 / 0.6), rgb(249 115 22 / 0.6))' : undefined 
                    }}
                  ></div>
                ))}
              </div>

              {/* Memory Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300/80">Helium Storage</span>
                  <span className="text-yellow-400 font-mono">94.2%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-solar-progress" style={{ width: '94.2%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300/80">Plasma Cache</span>
                  <span className="text-orange-400 font-mono">87.9%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-solar-progress" style={{ width: '87.9%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Dashboard */}
        <div className="mt-16 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-orange-300 mb-8 text-center">Solar Core Performance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/20 rounded-xl p-6 border border-orange-500/20 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 animate-solar-pulse">
                <span className="text-white font-bold">⚛️</span>
              </div>
              <div className="text-2xl font-bold text-orange-400 mb-2">15.6M°K</div>
              <div className="text-orange-300/70 text-sm">Core Temperature</div>
              <div className="text-green-400 text-xs mt-1">+2.3% ↗</div>
            </div>

            <div className="bg-black/20 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold">🔥</span>
              </div>
              <div className="text-2xl font-bold text-red-400 mb-2">99.8%</div>
              <div className="text-red-300/70 text-sm">Fusion Rate</div>
              <div className="text-green-400 text-xs mt-1">Optimal</div>
            </div>

            <div className="bg-black/20 rounded-xl p-6 border border-yellow-500/20 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '2s' }}>
                <span className="text-white font-bold">⚡</span>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">3.8×10²⁸</div>
              <div className="text-yellow-300/70 text-sm">Reactions/sec</div>
              <div className="text-green-400 text-xs mt-1">+5.7% ↗</div>
            </div>

            <div className="bg-black/20 rounded-xl p-6 border border-orange-500/20 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '3s' }}>
                <span className="text-white font-bold">☉</span>
              </div>
              <div className="text-2xl font-bold text-orange-400 mb-2">∞ MW</div>
              <div className="text-orange-300/70 text-sm">Power Output</div>
              <div className="text-green-400 text-xs mt-1">Stellar Class</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 