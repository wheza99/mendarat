'use client';

export default function TidalPortal() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 border border-cyan-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-medium">TIDAL PORTAL INTERFACE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Ocean Gateway
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Navigate through interdimensional ocean portals and explore digital depths
          </p>
        </div>

        {/* Portal Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Portal Visualization */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-cyan-200">Tidal Portal</h3>
              <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm">
                STABLE
              </div>
            </div>

            {/* Portal Visualization */}
            <div className="relative h-80 bg-gradient-to-br from-cyan-950/50 to-blue-950/50 rounded-2xl border border-cyan-400/30 overflow-hidden">
              {/* Central Portal */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Outer Ring */}
                  <div className="w-48 h-48 border-4 border-cyan-400/50 rounded-full bg-cyan-400/10 backdrop-blur-sm animate-ocean-spin"></div>
                  {/* Middle Ring */}
                  <div className="absolute inset-8 border-3 border-blue-400/60 rounded-full bg-blue-400/15 animate-ocean-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                  {/* Inner Ring */}
                  <div className="absolute inset-16 border-2 border-teal-400/70 rounded-full bg-teal-400/20 animate-ocean-spin" style={{ animationDuration: '10s' }}></div>
                  {/* Core */}
                  <div className="absolute inset-24 border border-white/80 rounded-full bg-white/30 animate-pulse"></div>
                  <div className="absolute inset-28 w-8 h-8 bg-white rounded-full animate-ocean-spin" style={{ animationDuration: '3s' }}></div>
                </div>
              </div>

              {/* Portal Energy Streams */}
              <svg className="absolute inset-0 w-full h-full opacity-60">
                <defs>
                  <radialGradient id="portalGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="30%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                <circle cx="50%" cy="50%" r="120" fill="url(#portalGradient)" className="animate-ocean-pulse" />
              </svg>

              {/* Portal Particles */}
              <div className="absolute top-16 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-ocean-float"></div>
              <div className="absolute top-20 right-24 w-2 h-2 bg-blue-400 rounded-full animate-ocean-drift"></div>
              <div className="absolute bottom-18 left-16 w-4 h-4 bg-teal-400 rounded-full animate-ocean-bubble"></div>
              <div className="absolute bottom-20 right-20 w-2 h-2 bg-sky-400 rounded-full animate-ocean-float"></div>
            </div>

            {/* Portal Status */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-300">99.9%</div>
                <div className="text-xs text-slate-400">Stability</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-300">∞ Layers</div>
                <div className="text-xs text-slate-400">Dimensions</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-teal-300">0.01ms</div>
                <div className="text-xs text-slate-400">Travel Time</div>
              </div>
            </div>
          </div>

          {/* Portal Controls */}
          <div className="space-y-6">
            {/* Destination Selector */}
            <div className="bg-gradient-to-br from-blue-900/20 to-sky-900/20 border border-blue-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Ocean Destinations</h4>
              <div className="space-y-3">
                <div className="p-4 bg-blue-950/30 border border-blue-400/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-blue-200">Shallow Waters</div>
                      <div className="text-sm text-slate-400">Safe depth zone</div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-teal-950/30 border border-teal-400/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-teal-200">Coral Gardens</div>
                      <div className="text-sm text-slate-400">Digital reef system</div>
                    </div>
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-cyan-950/30 border border-cyan-400/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-cyan-200">Abyssal Depths</div>
                      <div className="text-sm text-slate-400">Unknown territory</div>
                    </div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portal Controls */}
            <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-teal-200 mb-4">Portal Controls</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Portal Power</span>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-300 font-medium">∞ Units</span>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Dimensional Lock</span>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-300 font-medium">ENGAGED</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Flow Direction</span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300 font-medium">INWARD</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel History */}
            <div className="bg-gradient-to-br from-sky-900/20 to-blue-900/20 border border-sky-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-sky-200 mb-4">Recent Travels</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-xs font-bold">
                    01
                  </div>
                  <div>
                    <div className="text-sm font-medium text-sky-200">Deep Trench</div>
                    <div className="text-xs text-slate-400">2 hours ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">
                    02
                  </div>
                  <div>
                    <div className="text-sm font-medium text-sky-200">Crystal Caves</div>
                    <div className="text-xs text-slate-400">1 day ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                    03
                  </div>
                  <div>
                    <div className="text-sm font-medium text-sky-200">Thermal Vents</div>
                    <div className="text-xs text-slate-400">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <span>🌊 ENTER PORTAL</span>
                <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-200 rounded-full font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span>💧 SCAN DEPTHS</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 