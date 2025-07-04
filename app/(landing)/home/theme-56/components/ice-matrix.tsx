export default function IceMatrix() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6 animate-arctic-fade-in">
            Ice Matrix
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto animate-arctic-fade-in" style={{ animationDelay: '0.3s' }}>
            Portal synthwave yang menghubungkan dimensi arctic dengan realitas digital melalui matrix kristal beku
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Arctic Portal */}
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 animate-arctic-slide-in">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">Arctic Portal</h3>
            
            {/* Portal Visualization */}
            <div className="relative h-80 mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Portal Ring */}
                <div className="w-64 h-64 border-4 border-cyan-400/30 rounded-full animate-arctic-spin" style={{ animationDuration: '30s' }}>
                  {/* Middle Portal Ring */}
                  <div className="absolute inset-4 border-3 border-blue-400/40 rounded-full animate-arctic-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                    {/* Inner Portal Ring */}
                    <div className="absolute inset-4 border-2 border-indigo-400/50 rounded-full animate-arctic-spin" style={{ animationDuration: '15s' }}>
                      {/* Portal Core */}
                      <div className="absolute inset-6 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full flex items-center justify-center animate-arctic-pulse">
                        <div className="text-4xl text-cyan-300">❄️</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Portal Crystals */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400 rounded flex items-center justify-center text-cyan-950 font-bold animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                    ◆
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-blue-950 font-bold animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '0.5s' }}>
                    ◇
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-indigo-400 rounded flex items-center justify-center text-indigo-950 font-bold animate-arctic-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDelay: '1s' }}>
                    ◈
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-400 rounded flex items-center justify-center text-purple-950 font-bold animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '1.5s' }}>
                    ◉
                  </div>
                </div>
                
                {/* Floating Ice Particles */}
                <div className="absolute top-8 left-12 w-2 h-2 bg-cyan-300 rounded animate-arctic-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                <div className="absolute top-16 right-8 w-3 h-3 bg-blue-300 rounded animate-arctic-drift" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-indigo-300 rounded animate-arctic-float" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-purple-300 rounded animate-arctic-drift" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
              </div>
            </div>

            {/* Portal Navigation */}
            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">Arctic Dimensions</h4>
              
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-cyan-800/40 hover:bg-cyan-700/40 border border-cyan-400/30 rounded-xl py-3 px-2 text-xs text-cyan-300 transition-all duration-300 transform hover:scale-105">
                  Frost Alpha
                  <div className="text-cyan-400 text-xs mt-1">-273°C</div>
                </button>
                <button className="bg-blue-800/40 hover:bg-blue-700/40 border border-blue-400/30 rounded-xl py-3 px-2 text-xs text-blue-300 transition-all duration-300 transform hover:scale-105">
                  Ice Beta
                  <div className="text-blue-400 text-xs mt-1">Sub-Zero</div>
                </button>
                <button className="bg-indigo-800/40 hover:bg-indigo-700/40 border border-indigo-400/30 rounded-xl py-3 px-2 text-xs text-indigo-300 transition-all duration-300 transform hover:scale-105">
                  Crystal Gamma
                  <div className="text-indigo-400 text-xs mt-1">Absolute</div>
                </button>
              </div>
            </div>

            {/* Portal Controls */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105">
                Enter Portal
              </button>
              <button className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-cyan-950 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Sync Matrix
              </button>
            </div>
          </div>

          {/* Matrix Archive */}
          <div className="space-y-8">
            {/* Data Repository */}
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">💎</span>
                Data Repository
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-800/30 rounded-xl border border-blue-400/20">
                  <div>
                    <div className="font-semibold text-blue-300">Frozen Archives</div>
                    <div className="text-blue-400 text-sm">Crystallized data banks</div>
                  </div>
                  <div className="text-blue-300">∞</div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-cyan-800/30 rounded-xl border border-cyan-400/20">
                  <div>
                    <div className="font-semibold text-cyan-300">Ice Protocols</div>
                    <div className="text-cyan-400 text-sm">Synthesis algorithms</div>
                  </div>
                  <div className="text-cyan-300">❄️</div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-indigo-800/30 rounded-xl border border-indigo-400/20">
                  <div>
                    <div className="font-semibold text-indigo-300">Matrix Codes</div>
                    <div className="text-indigo-400 text-sm">Portal sequences</div>
                  </div>
                  <div className="text-indigo-300">🔷</div>
                </div>
              </div>
            </div>

            {/* Matrix Controllers */}
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Matrix Controllers</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-300 mb-1">777</div>
                  <div className="text-cyan-400 text-sm">Active Portals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-1">∞</div>
                  <div className="text-blue-400 text-sm">Data Streams</div>
                </div>
              </div>

              {/* Controller Status */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-400">Portal Stability</span>
                  <span className="text-indigo-300">Crystalline</span>
                </div>
                <div className="w-full h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-arctic-progress"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-indigo-400">Matrix Flow</span>
                  <span className="text-indigo-300">Synthesizing</span>
                </div>
                <div className="w-full h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-arctic-progress" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Dimensional History */}
            <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Portal History</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-400">Last Portal Access</span>
                  <span className="text-purple-300">Now Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Matrix Synchronization</span>
                  <span className="text-purple-300">Continuous</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Dimension Depth</span>
                  <span className="text-purple-300">Infinite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Crystal Age</span>
                  <span className="text-purple-300">Eternal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 