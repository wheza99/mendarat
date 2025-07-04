'use client';

export default function OceanField() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">OCEAN FIELD ANALYSIS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Data Streams
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Navigate through flowing data currents in the digital ocean depths
          </p>
        </div>

        {/* Ocean Field Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Visualization */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-blue-200">Current Flow</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm">FLOWING</span>
              </div>
            </div>

            {/* Ocean Data Visualization */}
            <div className="relative h-80 bg-gradient-to-br from-blue-950/50 to-teal-950/50 rounded-2xl border border-blue-400/30 overflow-hidden">
              {/* Floating Data Bubbles */}
              <div className="absolute top-10 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-80 animate-ocean-float"></div>
              <div className="absolute top-20 left-24 w-4 h-4 bg-teal-400 rounded-full opacity-70 animate-ocean-drift"></div>
              <div className="absolute top-14 left-40 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-ocean-bubble"></div>
              <div className="absolute top-24 left-56 w-3 h-3 bg-sky-400 rounded-full opacity-90 animate-ocean-float"></div>
              <div className="absolute top-8 left-72 w-7 h-7 bg-blue-300 rounded-full opacity-50 animate-ocean-drift"></div>
              
              <div className="absolute top-40 left-14 w-5 h-5 bg-teal-400 rounded-full opacity-85 animate-ocean-bubble"></div>
              <div className="absolute top-48 left-28 w-6 h-6 bg-blue-400 rounded-full opacity-75 animate-ocean-float"></div>
              <div className="absolute top-44 left-44 w-3 h-3 bg-cyan-400 rounded-full opacity-95 animate-ocean-drift"></div>
              <div className="absolute top-52 left-60 w-8 h-8 bg-sky-400 rounded-full opacity-65 animate-ocean-bubble"></div>
              <div className="absolute top-36 left-76 w-4 h-4 bg-teal-300 rounded-full opacity-80 animate-ocean-float"></div>

              <div className="absolute bottom-10 right-10 w-6 h-6 bg-blue-400 rounded-full opacity-80 animate-ocean-float"></div>
              <div className="absolute bottom-20 right-24 w-4 h-4 bg-teal-400 rounded-full opacity-70 animate-ocean-drift"></div>
              <div className="absolute bottom-14 right-40 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-ocean-bubble"></div>
              <div className="absolute bottom-24 right-56 w-3 h-3 bg-sky-400 rounded-full opacity-90 animate-ocean-float"></div>
              <div className="absolute bottom-8 right-72 w-7 h-7 bg-blue-300 rounded-full opacity-50 animate-ocean-drift"></div>

              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40">
                <line x1="15%" y1="25%" x2="35%" y2="45%" stroke="#3B82F6" strokeWidth="2" className="animate-ocean-flow" />
                <line x1="30%" y1="20%" x2="50%" y2="40%" stroke="#14B8A6" strokeWidth="2" className="animate-ocean-flow" style={{ animationDelay: '1s' }} />
                <line x1="45%" y1="30%" x2="65%" y2="50%" stroke="#06B6D4" strokeWidth="2" className="animate-ocean-flow" style={{ animationDelay: '2s' }} />
                <line x1="60%" y1="25%" x2="80%" y2="45%" stroke="#0EA5E9" strokeWidth="2" className="animate-ocean-flow" style={{ animationDelay: '3s' }} />
                <line x1="75%" y1="35%" x2="95%" y2="55%" stroke="#0891B2" strokeWidth="2" className="animate-ocean-flow" style={{ animationDelay: '4s' }} />
              </svg>

              {/* Central Ocean Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-20 h-20 border-2 border-blue-400 rounded-full bg-blue-400/20 backdrop-blur-sm animate-ocean-spin"></div>
                  <div className="absolute inset-3 border border-teal-400 rounded-full bg-teal-400/30 animate-ocean-spin" style={{ animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-6 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Ocean Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">312</div>
                <div className="text-xs text-slate-400">Bubbles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-300">92.8%</div>
                <div className="text-xs text-slate-400">Flow Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">∞ Depth</div>
                <div className="text-xs text-slate-400">Data Depth</div>
              </div>
            </div>
          </div>

          {/* Ocean Control Panel */}
          <div className="space-y-6">
            {/* Depth Control */}
            <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 border border-teal-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-teal-200 mb-4">Ocean Depth</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Current Level</span>
                  <span className="text-teal-300 font-medium">92%</span>
                </div>
                <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ocean-progress"></div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Pressure</span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300 font-medium">Deep</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Temperature</span>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-300 font-medium">Cool</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-cyan-200 mb-4">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">North Current</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-slate-300">East Current</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-slate-300">Deep Current</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-cyan-950/30 rounded-xl border border-cyan-400/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-300">4</div>
                  <div className="text-xs text-slate-400">Active Streams</div>
                </div>
              </div>
            </div>

            {/* Ocean Tools */}
            <div className="bg-gradient-to-br from-blue-900/20 to-sky-900/20 border border-blue-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Ocean Tools</h4>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-blue-600/30 border border-blue-400/30 rounded-xl text-blue-200 hover:bg-blue-600/50 transition-colors">
                  🌊 Navigate Currents
                </button>
                <button className="w-full px-4 py-3 bg-teal-600/30 border border-teal-400/30 rounded-xl text-teal-200 hover:bg-teal-600/50 transition-colors">
                  💧 Deep Dive
                </button>
                <button className="w-full px-4 py-3 bg-cyan-600/30 border border-cyan-400/30 rounded-xl text-cyan-200 hover:bg-cyan-600/50 transition-colors">
                  🔄 Reset Ocean
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 