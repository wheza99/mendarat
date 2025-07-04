export default function PolarServices() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6 animate-arctic-fade-in">
            Polar Services
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto animate-arctic-fade-in" style={{ animationDelay: '0.3s' }}>
            Layanan teknologi Arctic Synth yang mengintegrasikan komputasi kriogenik dengan estetika synthwave
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Arctic Computing */}
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-cyan-900/40 animate-arctic-slide-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-arctic-pulse">
                <span className="text-3xl">❄️</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Arctic Computing</h3>
              <p className="text-cyan-400">Kriogenik processing dengan zero-latency performance</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-cyan-800/30 rounded-xl">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-arctic-pulse"></div>
                <span className="text-cyan-300 text-sm">Sub-Zero Processing</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-cyan-800/30 rounded-xl">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span className="text-cyan-300 text-sm">Frost Optimization</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-cyan-800/30 rounded-xl">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.6s' }}></div>
                <span className="text-cyan-300 text-sm">Ice Memory Allocation</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105">
                Access Arctic
              </button>
            </div>
          </div>

          {/* Synth Networks */}
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-900/40 animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-arctic-pulse">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Synth Networks</h3>
              <p className="text-blue-400">Retro-futuristik connectivity dengan wave protocols</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-xl">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-arctic-pulse"></div>
                <span className="text-blue-300 text-sm">Wave Synchronization</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-xl">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span className="text-blue-300 text-sm">Grid Connectivity</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-xl">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.6s' }}></div>
                <span className="text-blue-300 text-sm">Neon Data Streams</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105">
                Connect Synth
              </button>
            </div>
          </div>

          {/* Crystal Security */}
          <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-indigo-900/40 animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-arctic-pulse">
                <span className="text-3xl">🔷</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-300 mb-2">Crystal Security</h3>
              <p className="text-indigo-400">Enkripsi crystalline dengan matrix protection</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-indigo-800/30 rounded-xl">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-arctic-pulse"></div>
                <span className="text-indigo-300 text-sm">Matrix Encryption</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-indigo-800/30 rounded-xl">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span className="text-indigo-300 text-sm">Crystal Shielding</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-indigo-800/30 rounded-xl">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.6s' }}></div>
                <span className="text-indigo-300 text-sm">Ice Wall Protection</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105">
                Secure Crystal
              </button>
            </div>
          </div>
        </div>

        {/* Arctic System Monitor */}
        <div className="bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">Arctic System Monitor</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frost Status */}
            <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 text-center animate-arctic-slide-in">
              <div className="text-4xl mb-3">❄️</div>
              <div className="text-2xl font-bold text-cyan-300 mb-2">ACTIVE</div>
              <div className="text-cyan-400 text-sm mb-3">Frost Engine</div>
              <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full animate-arctic-progress"></div>
              </div>
            </div>

            {/* Synth Status */}
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 text-center animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-3">🌊</div>
              <div className="text-2xl font-bold text-blue-300 mb-2">OPTIMAL</div>
              <div className="text-blue-400 text-sm mb-3">Synth Flow</div>
              <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full animate-arctic-progress" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>

            {/* Crystal Status */}
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-6 text-center animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl mb-3">🔷</div>
              <div className="text-2xl font-bold text-indigo-300 mb-2">STABLE</div>
              <div className="text-indigo-400 text-sm mb-3">Crystal Matrix</div>
              <div className="w-full h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-400 rounded-full animate-arctic-progress" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>

            {/* Network Status */}
            <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 text-center animate-arctic-slide-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl mb-3">🌌</div>
              <div className="text-2xl font-bold text-purple-300 mb-2">ONLINE</div>
              <div className="text-purple-400 text-sm mb-3">Network Grid</div>
              <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full animate-arctic-progress" style={{ animationDelay: '0.9s' }}></div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
              <div className="text-cyan-400">Arctic Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">∞</div>
              <div className="text-blue-400">Synth Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-300 mb-2">-273°C</div>
              <div className="text-indigo-400">Core Temperature</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 