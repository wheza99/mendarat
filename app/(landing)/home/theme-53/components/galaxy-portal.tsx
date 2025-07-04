'use client';

export default function GalaxyPortal() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-900/30 border border-pink-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-pink-300 text-sm font-medium">INTERDIMENSIONAL PORTALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Galaxy Portal
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Access infinite dimensions through quantum portal technology
          </p>
        </div>

        {/* Portal System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portal Visualization */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Outer Rings */}
              <div className="absolute inset-0 border-2 border-pink-400/30 rounded-full animate-quantum-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border-2 border-purple-400/40 rounded-full animate-quantum-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute inset-8 border-2 border-blue-400/50 rounded-full animate-quantum-spin" style={{ animationDuration: '12s' }}></div>
              
              {/* Middle Rings */}
              <div className="absolute inset-12 border border-pink-400/60 rounded-full animate-quantum-spin" style={{ animationDirection: 'reverse', animationDuration: '10s' }}></div>
              <div className="absolute inset-16 border border-purple-400/70 rounded-full animate-quantum-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Inner Core */}
              <div className="absolute inset-20 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full backdrop-blur-sm border border-pink-400/80 animate-quantum-pulse">
                <div className="absolute inset-4 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full animate-quantum-spin" style={{ animationDuration: '6s' }}>
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-300/50 to-pink-300/50 rounded-full animate-quantum-pulse">
                    <div className="absolute inset-4 bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Energy Streams */}
              <svg className="absolute inset-0 w-full h-full opacity-60">
                <defs>
                  <linearGradient id="portalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="portalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                <circle cx="50%" cy="50%" r="180" stroke="url(#portalGradient1)" strokeWidth="2" fill="none" className="animate-quantum-flow" />
                <circle cx="50%" cy="50%" r="160" stroke="url(#portalGradient2)" strokeWidth="1" fill="none" className="animate-quantum-flow" style={{ animationDelay: '2s' }} />
                <circle cx="50%" cy="50%" r="140" stroke="url(#portalGradient1)" strokeWidth="1" fill="none" className="animate-quantum-flow" style={{ animationDelay: '4s' }} />
              </svg>

              {/* Portal Particles */}
              <div className="absolute top-8 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-quantum-float"></div>
              <div className="absolute top-1/4 right-8 w-3 h-3 bg-purple-400 rounded-full animate-quantum-drift"></div>
              <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-quantum-spiral"></div>
              <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-pink-400 rounded-full animate-quantum-float"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-purple-400 rounded-full animate-quantum-drift"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-blue-400 rounded-full animate-quantum-spiral"></div>
            </div>
          </div>

          {/* Portal Controls */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-400/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-pink-200 mb-6">Portal Navigation</h3>
              
              {/* Dimension Selector */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-purple-200">Available Dimensions</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between p-4 bg-pink-950/30 border border-pink-400/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                      <span className="text-pink-200">Dimension Alpha</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">∞.247.∞</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-950/30 border border-purple-400/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-purple-200">Dimension Beta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">247.∞.777</span>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-950/30 border border-blue-400/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-blue-200">Dimension Gamma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">777.777.∞</span>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portal Status */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-200">Portal Status</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-950/30 rounded-xl border border-purple-400/20">
                    <div className="text-xl font-bold text-purple-300">98.7%</div>
                    <div className="text-xs text-slate-400">Stability</div>
                  </div>
                  <div className="text-center p-3 bg-pink-950/30 rounded-xl border border-pink-400/20">
                    <div className="text-xl font-bold text-pink-300">3</div>
                    <div className="text-xs text-slate-400">Active</div>
                  </div>
                </div>
              </div>

              {/* Portal Controls */}
              <div className="mt-8 space-y-3">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform">
                  🌌 Activate Portal
                </button>
                <button className="w-full px-6 py-4 bg-purple-600/30 border border-purple-400/30 rounded-xl text-purple-200 hover:bg-purple-600/50 transition-colors">
                  ⚛️ Calibrate Quantum
                </button>
                <button className="w-full px-6 py-4 bg-blue-600/30 border border-blue-400/30 rounded-xl text-blue-200 hover:bg-blue-600/50 transition-colors">
                  🔄 Sync Dimensions
                </button>
              </div>
            </div>

            {/* Travel History */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-purple-200 mb-4">Recent Travel History</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Alpha → Beta</span>
                  <span className="text-slate-400">2min ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Gamma → Alpha</span>
                  <span className="text-slate-400">5min ago</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Beta → Gamma</span>
                  <span className="text-slate-400">12min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 