export default function PlasmaField() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Plasma Field Generator
            </span>
          </h2>
          <p className="text-xl text-orange-200/70 max-w-3xl mx-auto">
            Advanced solar plasma manipulation system with corona energy harvesting and magnetic field confinement technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Solar Reactor */}
          <div className="group">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-300 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 animate-solar-pulse"></div>
                Solar Reactor
              </h3>
              
              {/* Reactor Core */}
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto relative">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500/30 animate-solar-spin"></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute inset-4 rounded-full border-2 border-red-500/40 animate-solar-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                  
                  {/* Inner Core */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 animate-solar-pulse shadow-lg shadow-orange-500/50">
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">☉</span>
                    </div>
                  </div>
                  
                  {/* Plasma Streams */}
                  <div className="absolute top-1/2 left-0 w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent animate-solar-flow"></div>
                  <div className="absolute top-1/2 right-0 w-8 h-1 bg-gradient-to-l from-orange-500 to-transparent animate-solar-flow"></div>
                  <div className="absolute top-0 left-1/2 w-1 h-8 bg-gradient-to-b from-red-500 to-transparent animate-solar-flow"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-gradient-to-t from-red-500 to-transparent animate-solar-flow"></div>
                </div>
              </div>

              {/* Control Panel */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-orange-300/80">Plasma Density</span>
                  <span className="text-orange-400 font-mono">99.7%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-solar-progress" style={{ width: '99.7%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Fusion Control */}
          <div className="group">
            <div className="bg-gradient-to-br from-red-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-yellow-600 animate-solar-pulse"></div>
                Fusion Control
              </h3>

              {/* Fusion Dashboard */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/20 rounded-lg p-4 border border-red-500/20">
                  <div className="text-2xl font-bold text-red-400 mb-1">15.6M°C</div>
                  <div className="text-red-300/60 text-sm">Core Temp</div>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400 mb-1">3.8×10²⁸</div>
                  <div className="text-orange-300/60 text-sm">Fusion Rate</div>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">1.4 MW</div>
                  <div className="text-yellow-300/60 text-sm">Power Output</div>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-red-500/20">
                  <div className="text-2xl font-bold text-red-400 mb-1">∞ Hours</div>
                  <div className="text-red-300/60 text-sm">Fuel Life</div>
                </div>
              </div>

              {/* Magnetic Confinement */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-300">Magnetic Confinement</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-red-300/80">Toroidal Field</span>
                    <span className="text-red-400 font-mono">5.3 Tesla</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-solar-progress" style={{ width: '88%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-red-300/80">Poloidal Field</span>
                    <span className="text-red-400 font-mono">2.1 Tesla</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-solar-progress" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plasma Field Status */}
        <div className="mt-16 bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-orange-300 mb-2">Plasma Field Status</h3>
            <p className="text-orange-200/70">Real-time monitoring of solar plasma dynamics and energy harvesting systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3 animate-solar-pulse">
                <span className="text-white font-bold">☉</span>
              </div>
              <div className="text-orange-400 font-semibold">Plasma Active</div>
              <div className="text-orange-300/60 text-sm">99.8% Stability</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mb-3 animate-solar-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold">⚡</span>
              </div>
              <div className="text-red-400 font-semibold">Fusion Online</div>
              <div className="text-red-300/60 text-sm">Maximum Output</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-3 animate-solar-pulse" style={{ animationDelay: '2s' }}>
                <span className="text-white font-bold">🌟</span>
              </div>
              <div className="text-yellow-400 font-semibold">Corona Field</div>
              <div className="text-yellow-300/60 text-sm">Energy Optimal</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3 animate-solar-pulse" style={{ animationDelay: '3s' }}>
                <span className="text-white font-bold">🔥</span>
              </div>
              <div className="text-orange-400 font-semibold">Magnetic Lock</div>
              <div className="text-orange-300/60 text-sm">Containment OK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 