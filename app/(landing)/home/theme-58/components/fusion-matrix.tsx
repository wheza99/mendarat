export default function FusionMatrix() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Fusion Matrix Portal
            </span>
          </h2>
          <p className="text-xl text-orange-200/70 max-w-3xl mx-auto">
            Navigate through stellar dimensions using advanced fusion-powered portals and solar energy teleportation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Stellar Portal */}
          <div className="group">
            <div className="bg-gradient-to-br from-yellow-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-yellow-300 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 animate-solar-pulse"></div>
                Stellar Portal
              </h3>
              
              {/* Portal Visualization */}
              <div className="relative mb-8">
                <div className="w-60 h-60 mx-auto relative">
                  {/* Outer Solar Ring */}
                  <div className="absolute inset-0 rounded-full border-4 animate-solar-spin" style={{ 
                    borderImage: 'linear-gradient(45deg, #FBBF24, #F97316, #EF4444) 1',
                    animationDuration: '20s'
                  }}>
                    <div className="w-full h-full rounded-full border-2 border-yellow-500/40"></div>
                    {/* Solar Anchors */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-solar-pulse"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 animate-solar-pulse"></div>
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-red-400 to-yellow-500 animate-solar-pulse"></div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 animate-solar-pulse"></div>
                  </div>
                  
                  {/* Middle Fusion Ring */}
                  <div className="absolute inset-8 rounded-full border-3 border-orange-500/50 animate-solar-spin" style={{ 
                    animationDirection: 'reverse', 
                    animationDuration: '15s' 
                  }}>
                    <div className="w-full h-full rounded-full border-2 border-orange-400/30"></div>
                  </div>
                  
                  {/* Inner Core Ring */}
                  <div className="absolute inset-16 rounded-full border-2 border-red-500/60 animate-solar-spin" style={{ animationDuration: '10s' }}>
                    <div className="w-full h-full rounded-full border border-red-300/40"></div>
                  </div>
                  
                  {/* Portal Center */}
                  <div className="absolute inset-20 rounded-full bg-gradient-radial from-yellow-500 via-orange-500 to-red-600 animate-solar-pulse shadow-2xl shadow-orange-500/60">
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">✦</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portal Controls */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300/80">Portal Stability</span>
                  <span className="text-yellow-400 font-mono">97.2%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-solar-progress" style={{ width: '97.2%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300/80">Fusion Lock</span>
                  <span className="text-orange-400 font-mono">Engaged</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-solar-progress" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stellar Archive */}
          <div className="group">
            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600 animate-solar-pulse"></div>
                Stellar Archive
              </h3>

              {/* Archive Access */}
              <div className="space-y-4 mb-8">
                <div className="bg-black/20 rounded-lg p-4 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-orange-400 font-semibold">Proxima Centauri</div>
                      <div className="text-orange-300/60 text-sm">4.24 light-years</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">☉</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-red-400 font-semibold">Alpha Centauri A</div>
                      <div className="text-red-300/60 text-sm">4.37 light-years</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✦</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-yellow-400 font-semibold">Sirius System</div>
                      <div className="text-yellow-300/60 text-sm">8.6 light-years</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">🌟</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Archive Status */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-orange-300">Archive Status</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300/80">Stellar Catalog</span>
                    <span className="text-orange-400 font-mono">1,247 Stars</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300/80">Portal Routes</span>
                    <span className="text-yellow-400 font-mono">89 Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300/80">Fusion Locks</span>
                    <span className="text-red-400 font-mono">All Stable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Navigation */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-red-300 mb-2">Portal Navigation Matrix</h3>
            <p className="text-red-200/70">Real-time stellar navigation and fusion portal management system</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4 animate-solar-pulse">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <div className="text-red-400 font-semibold text-lg">Stellar Jump</div>
              <div className="text-red-300/60">Ready for warp</div>
              <div className="text-green-400 text-sm mt-2">Portal: Active</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <div className="text-orange-400 font-semibold text-lg">Fusion Drive</div>
              <div className="text-orange-300/60">97.8% efficiency</div>
              <div className="text-green-400 text-sm mt-2">Power: Maximum</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '2s' }}>
                <span className="text-white font-bold text-xl">🌟</span>
              </div>
              <div className="text-yellow-400 font-semibold text-lg">Star Chart</div>
              <div className="text-yellow-300/60">1,247 destinations</div>
              <div className="text-green-400 text-sm mt-2">Navigation: Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 