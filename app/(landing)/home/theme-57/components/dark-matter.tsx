'use client';

export default function DarkMatter() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 animate-void-fade-in">
            Dark Matter Portal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-void-fade-in" style={{ animationDelay: '0.3s' }}>
            Portal interdimensional yang menggunakan dark matter sebagai jembatan akses ke dimensi paralel dan void energy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Void Portal */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in">
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">🌀</span>
              Void Portal
            </h3>
            
            <div className="relative h-80 bg-gray-800/50 rounded-2xl p-6 mb-6 overflow-hidden">
              {/* Portal Rings */}
              <div className="absolute inset-6 flex items-center justify-center">
                <div className="relative">
                  {/* Outer Portal Ring */}
                  <div className="w-48 h-48 border-2 border-purple-400/20 rounded-full animate-void-spin" style={{ animationDuration: '20s' }}>
                    {/* Portal Anchors */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                  
                  {/* Middle Portal Ring */}
                  <div className="absolute inset-8 border-2 border-violet-400/30 rounded-full animate-void-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  </div>
                  
                  {/* Inner Portal Ring */}
                  <div className="absolute inset-16 border-2 border-gray-400/40 rounded-full animate-void-spin" style={{ animationDuration: '10s' }}>
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  
                  {/* Portal Core */}
                  <div className="absolute inset-20 bg-gradient-to-r from-purple-500/20 via-black to-gray-500/20 rounded-full animate-void-pulse flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-300 text-xs font-bold">VOID</div>
                      <div className="text-gray-400 text-xs">PORTAL</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portal Energy Streams */}
              <div className="absolute top-4 left-4 w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent animate-void-flow"></div>
              <div className="absolute top-4 right-4 w-1 h-8 bg-gradient-to-b from-violet-400 to-transparent animate-void-flow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-void-flow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-purple-400">∞</div>
                <div className="text-gray-400 text-sm">Dimensions</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-violet-400">Stable</div>
                <div className="text-gray-400 text-sm">Portal Status</div>
              </div>
            </div>
          </div>

          {/* Dimensional Archive */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">📁</span>
              Dimensional Archive
            </h3>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 font-semibold">Dimension α-∞</span>
                  <span className="text-purple-400 text-sm">Active</span>
                </div>
                <div className="text-gray-400 text-sm">Infinite probability matrix</div>
                <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full animate-void-progress"></div>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 hover:border-violet-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 font-semibold">Dimension β-Ø</span>
                  <span className="text-violet-400 text-sm">Standby</span>
                </div>
                <div className="text-gray-400 text-sm">Null space void energy</div>
                <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full animate-void-progress" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 font-semibold">Dimension γ-√-1</span>
                  <span className="text-gray-400 text-sm">Locked</span>
                </div>
                <div className="text-gray-400 text-sm">Imaginary number realm</div>
                <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gray-500 rounded-full animate-void-progress" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 text-sm">
                ACCESS PORTAL →
              </button>
            </div>
          </div>
        </div>

        {/* Portal Navigation */}
        <div className="mt-12 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 animate-void-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Portal Navigation Matrix</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Current Dimension */}
            <div className="text-center p-6 bg-gray-800/20 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-4">🌌</div>
              <div className="text-xl font-bold text-purple-400 mb-2">Reality Prime</div>
              <div className="text-gray-400 text-sm mb-4">Current dimension</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-purple-400">Coordinate</div>
                  <div className="text-gray-300">0,0,0,0</div>
                </div>
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-purple-400">Energy</div>
                  <div className="text-gray-300">100%</div>
                </div>
              </div>
            </div>

            {/* Void Transit */}
            <div className="text-center p-6 bg-gray-800/20 rounded-xl border border-gray-500/30">
              <div className="text-3xl mb-4">🕳️</div>
              <div className="text-xl font-bold text-gray-400 mb-2">Void Transit</div>
              <div className="text-gray-400 text-sm mb-4">Transportation protocol</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-gray-400">Speed</div>
                  <div className="text-gray-300">∞ c</div>
                </div>
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-gray-400">Safety</div>
                  <div className="text-gray-300">∅%</div>
                </div>
              </div>
            </div>

            {/* Portal History */}
            <div className="text-center p-6 bg-gray-800/20 rounded-xl border border-violet-500/30">
              <div className="text-3xl mb-4">📊</div>
              <div className="text-xl font-bold text-violet-400 mb-2">Travel Log</div>
              <div className="text-gray-400 text-sm mb-4">Dimensional history</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-violet-400">Visits</div>
                  <div className="text-gray-300">∞</div>
                </div>
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-violet-400">Success</div>
                  <div className="text-gray-300">∞%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 