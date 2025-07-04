'use client';

export default function AquaServices() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">AQUATIC SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Ocean Solutions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dive into our comprehensive underwater digital services and solutions
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Deep Sea Analytics */}
          <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-6 group-hover:animate-ocean-spin">
                <span className="text-2xl">📊</span>
              </div>
              
              <h3 className="text-xl font-bold text-blue-200 mb-4">Deep Sea Analytics</h3>
              <p className="text-slate-400 mb-6">
                Explore data depths with advanced underwater analytics and ocean intelligence systems.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">Ocean Data Mining</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-slate-300">Current Flow Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-slate-300">Depth Mapping</span>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-blue-600/30 border border-blue-400/30 rounded-xl text-blue-200 hover:bg-blue-600/50 transition-colors">
                🌊 Explore Depths
              </button>
            </div>
          </div>

          {/* Tidal Networks */}
          <div className="group relative bg-gradient-to-br from-teal-900/20 to-blue-900/20 border border-teal-400/20 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:animate-ocean-spin">
                <span className="text-2xl">🌐</span>
              </div>
              
              <h3 className="text-xl font-bold text-teal-200 mb-4">Tidal Networks</h3>
              <p className="text-slate-400 mb-6">
                Connect through fluid underwater networks with wave-based communication protocols.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">Wave Communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-slate-300">Current Routing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-slate-300">Deep Mesh Networks</span>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-teal-600/30 border border-teal-400/30 rounded-xl text-teal-200 hover:bg-teal-600/50 transition-colors">
                🌊 Join Current
              </button>
            </div>
          </div>

          {/* Aqua Security */}
          <div className="group relative bg-gradient-to-br from-cyan-900/20 to-sky-900/20 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-sky-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-full flex items-center justify-center mb-6 group-hover:animate-ocean-spin">
                <span className="text-2xl">🛡️</span>
              </div>
              
              <h3 className="text-xl font-bold text-cyan-200 mb-4">Aqua Security</h3>
              <p className="text-slate-400 mb-6">
                Protect your digital ocean with advanced underwater security and encryption barriers.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">Tidal Encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-slate-300">Current Barriers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-slate-300">Deep Authentication</span>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-cyan-600/30 border border-cyan-400/30 rounded-xl text-cyan-200 hover:bg-cyan-600/50 transition-colors">
                🌊 Secure Ocean
              </button>
            </div>
          </div>
        </div>

        {/* Ocean System Status */}
        <div className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-blue-200 mb-8 text-center">Ocean System Status</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Current Flow */}
            <div className="text-center p-6 bg-blue-950/30 rounded-2xl border border-blue-400/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">OPERATIONAL</span>
              </div>
              <div className="text-lg font-bold text-blue-300 mb-1">Current Flow</div>
              <div className="text-2xl font-bold text-blue-200">99.8%</div>
            </div>

            {/* Data Depth */}
            <div className="text-center p-6 bg-teal-950/30 rounded-2xl border border-teal-400/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">DEEP</span>
              </div>
              <div className="text-lg font-bold text-teal-300 mb-1">Data Depth</div>
              <div className="text-2xl font-bold text-teal-200">∞ M</div>
            </div>

            {/* Ocean Temperature */}
            <div className="text-center p-6 bg-cyan-950/30 rounded-2xl border border-cyan-400/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-300 text-sm font-medium">COOL</span>
              </div>
              <div className="text-lg font-bold text-cyan-300 mb-1">Temperature</div>
              <div className="text-2xl font-bold text-cyan-200">4°C</div>
            </div>

            {/* Pressure Level */}
            <div className="text-center p-6 bg-sky-950/30 rounded-2xl border border-sky-400/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-300 text-sm font-medium">HIGH</span>
              </div>
              <div className="text-lg font-bold text-sky-300 mb-1">Pressure</div>
              <div className="text-2xl font-bold text-sky-200">888 ATM</div>
            </div>
          </div>

          {/* System Overview */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-950/30 rounded-xl border border-blue-400/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-200 font-medium">Ocean Nodes</span>
                <span className="text-blue-300 text-lg font-bold">888</span>
              </div>
              <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ocean-progress"></div>
              </div>
            </div>

            <div className="p-4 bg-teal-950/30 rounded-xl border border-teal-400/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-teal-200 font-medium">Active Currents</span>
                <span className="text-teal-300 text-lg font-bold">24</span>
              </div>
              <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ocean-progress" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <div className="p-4 bg-cyan-950/30 rounded-xl border border-cyan-400/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-200 font-medium">Data Streams</span>
                <span className="text-cyan-300 text-lg font-bold">∞</span>
              </div>
              <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
                <div className="h-full w-[100%] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ocean-progress" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 