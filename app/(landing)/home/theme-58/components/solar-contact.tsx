export default function SolarContact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Solar Transmission
            </span>
          </h2>
          <p className="text-xl text-orange-200/70 max-w-3xl mx-auto">
            Establish stellar communication through our advanced solar wind transmission systems and corona frequency networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Stellar Communication Form */}
          <div className="group">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 animate-solar-pulse"></div>
                Stellar Communication
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-orange-300/80 text-sm font-medium mb-2">
                      Star System ID
                    </label>
                    <input
                      type="text"
                      placeholder="SOL-001"
                      className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white placeholder-orange-300/50 focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-300/80 text-sm font-medium mb-2">
                      Transmission Type
                    </label>
                    <select className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white focus:border-orange-400 focus:outline-none transition-colors">
                      <option value="solar-wind">Solar Wind</option>
                      <option value="corona-burst">Corona Burst</option>
                      <option value="plasma-stream">Plasma Stream</option>
                      <option value="fusion-pulse">Fusion Pulse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-orange-300/80 text-sm font-medium mb-2">
                    Fusion Email
                  </label>
                  <input
                    type="email"
                    placeholder="commander@stellar.fusion"
                    className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white placeholder-orange-300/50 focus:border-orange-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-orange-300/80 text-sm font-medium mb-2">
                    Solar Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Transmit your stellar communication..."
                    className="w-full px-4 py-3 bg-black/30 border border-orange-500/30 rounded-lg text-white placeholder-orange-300/50 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                >
                  <span className="flex items-center justify-center gap-2">
                    Initiate Solar Transmission
                    <div className="w-2 h-2 rounded-full bg-white animate-solar-pulse"></div>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Solar Channels */}
          <div className="space-y-8">
            {/* Communication Channels */}
            <div className="bg-gradient-to-br from-red-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-yellow-600 animate-solar-pulse"></div>
                Solar Channels
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-solar-pulse"></div>
                    <div>
                      <div className="text-red-400 font-semibold">Fusion Command</div>
                      <div className="text-red-300/60 text-sm">Instant response</div>
                    </div>
                  </div>
                  <span className="text-green-400 font-mono">Active</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-solar-pulse"></div>
                    <div>
                      <div className="text-orange-400 font-semibold">Stellar Support</div>
                      <div className="text-orange-300/60 text-sm">24/7 solar cycle</div>
                    </div>
                  </div>
                  <span className="text-green-400 font-mono">Online</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-solar-pulse"></div>
                    <div>
                      <div className="text-yellow-400 font-semibold">Corona Emergency</div>
                      <div className="text-yellow-300/60 text-sm">Priority channel</div>
                    </div>
                  </div>
                  <span className="text-yellow-400 font-mono">Standby</span>
                </div>
              </div>
            </div>

            {/* Response Matrix */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 animate-solar-pulse"></div>
                Response Matrix
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/20">
                  <div className="text-yellow-400 font-semibold mb-1">Solar Wind</div>
                  <div className="text-yellow-300/70 text-sm mb-2">Standard transmission</div>
                  <div className="text-2xl font-bold text-yellow-400">~8.3 min</div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-orange-500/20">
                  <div className="text-orange-400 font-semibold mb-1">Corona Burst</div>
                  <div className="text-orange-300/70 text-sm mb-2">Priority transmission</div>
                  <div className="text-2xl font-bold text-orange-400">~4.1 min</div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-red-500/20">
                  <div className="text-red-400 font-semibold mb-1">Plasma Stream</div>
                  <div className="text-red-300/70 text-sm mb-2">High-energy burst</div>
                  <div className="text-2xl font-bold text-red-400">~2.7 min</div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-orange-500/20">
                  <div className="text-orange-400 font-semibold mb-1">Fusion Pulse</div>
                  <div className="text-orange-300/70 text-sm mb-2">Emergency channel</div>
                  <div className="text-2xl font-bold text-orange-400">~1.2 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solar Network Status */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-red-300 mb-2">Solar Network Status</h3>
            <p className="text-red-200/70">Global stellar communication network monitoring and status overview</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 animate-solar-pulse">
                <span className="text-white font-bold">🌍</span>
              </div>
              <div className="text-green-400 font-semibold">Sol System</div>
              <div className="text-green-300/70 text-sm">All nodes active</div>
              <div className="text-green-400 text-xs mt-1">99.9% uptime</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold">⭐</span>
              </div>
              <div className="text-yellow-400 font-semibold">Proxima Net</div>
              <div className="text-yellow-300/70 text-sm">4.24 LY range</div>
              <div className="text-green-400 text-xs mt-1">Signal strong</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '2s' }}>
                <span className="text-white font-bold">🌟</span>
              </div>
              <div className="text-orange-400 font-semibold">Alpha Link</div>
              <div className="text-orange-300/70 text-sm">4.37 LY range</div>
              <div className="text-green-400 text-xs mt-1">Connected</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4 animate-solar-pulse" style={{ animationDelay: '3s' }}>
                <span className="text-white font-bold">✨</span>
              </div>
              <div className="text-red-400 font-semibold">Sirius Hub</div>
              <div className="text-red-300/70 text-sm">8.6 LY range</div>
              <div className="text-yellow-400 text-xs mt-1">Synchronizing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 