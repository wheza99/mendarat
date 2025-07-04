'use client';

export default function GlacialContact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6 animate-arctic-fade-in">
            Glacial Contact
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto animate-arctic-fade-in" style={{ animationDelay: '0.3s' }}>
            Hubungkan dengan network Arctic Synth melalui glacial transmission protocols yang membekukan data dalam perjalanan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Arctic Transmission Form */}
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 animate-arctic-slide-in">
            <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center gap-3">
              <span className="text-3xl">❄️</span>
              Arctic Transmission
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-cyan-400 mb-2">Transmitter ID</label>
                <input 
                  type="text" 
                  className="w-full bg-cyan-900/50 border border-cyan-400/30 rounded-xl px-4 py-3 text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Enter your glacial identifier..."
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2">Contact Matrix</label>
                <input 
                  type="email" 
                  className="w-full bg-cyan-900/50 border border-cyan-400/30 rounded-xl px-4 py-3 text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="matrix@arctic.synth"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2">Transmission Type</label>
                <select className="w-full bg-cyan-900/50 border border-cyan-400/30 rounded-xl px-4 py-3 text-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                  <option>🧊 Ice Protocol</option>
                  <option>🌊 Synth Wave</option>
                  <option>🔷 Crystal Matrix</option>
                  <option>❄️ Frost Channel</option>
                </select>
              </div>

              <div>
                <label className="block text-cyan-400 mb-2">Arctic Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-cyan-900/50 border border-cyan-400/30 rounded-xl px-4 py-3 text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  placeholder="Transmit your glacial message through the arctic synthwave network..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                TRANSMIT ARCTIC ❄️
              </button>
            </form>
          </div>

          {/* Communication Dashboard */}
          <div className="space-y-8">
            {/* Glacial Channels */}
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">🌊</span>
                Glacial Channels
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-800/30 rounded-xl border border-blue-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-arctic-pulse"></div>
                    <div>
                      <div className="font-semibold text-blue-300">Frost Channel</div>
                      <div className="text-blue-400 text-sm">Ultra-low latency</div>
                    </div>
                  </div>
                  <div className="text-blue-300">ACTIVE</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-cyan-800/30 rounded-xl border border-cyan-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div>
                      <div className="font-semibold text-cyan-300">Ice Matrix</div>
                      <div className="text-cyan-400 text-sm">Crystalline encoding</div>
                    </div>
                  </div>
                  <div className="text-cyan-300">OPTIMAL</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-indigo-800/30 rounded-xl border border-indigo-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full animate-arctic-pulse" style={{ animationDelay: '1s' }}></div>
                    <div>
                      <div className="font-semibold text-indigo-300">Synth Wave</div>
                      <div className="text-indigo-400 text-sm">Retro-futuristic</div>
                    </div>
                  </div>
                  <div className="text-indigo-300">STABLE</div>
                </div>
              </div>
            </div>

            {/* Response Matrix */}
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Response Matrix</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-indigo-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-300 mb-2">~0ms</div>
                  <div className="text-indigo-400 text-sm">Ice Protocol</div>
                </div>
                <div className="text-center p-4 bg-cyan-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-300 mb-2">~1ms</div>
                  <div className="text-cyan-400 text-sm">Synth Wave</div>
                </div>
                <div className="text-center p-4 bg-blue-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-blue-300 mb-2">~5ms</div>
                  <div className="text-blue-400 text-sm">Crystal Query</div>
                </div>
                <div className="text-center p-4 bg-purple-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-purple-300 mb-2">~10ms</div>
                  <div className="text-purple-400 text-sm">Matrix Sync</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-indigo-400 mb-2">Average Response Time</div>
                <div className="text-2xl font-bold text-indigo-300">&lt; 1ms</div>
              </div>
            </div>

            {/* Arctic Network Status */}
            <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Arctic Network Status</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-400">Global Ice Network</span>
                  <span className="text-purple-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-arctic-pulse"></div>
                    ONLINE
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-purple-400">Synth Relay Nodes</span>
                  <span className="text-purple-300">777 Active</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-purple-400">Crystal Bandwidth</span>
                  <span className="text-purple-300">∞ GB/s</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-purple-400">Arctic Coverage</span>
                  <span className="text-purple-300">100% Global</span>
                </div>

                <div className="mt-6">
                  <div className="text-center text-purple-400 text-sm mb-2">Network Performance</div>
                  <div className="w-full h-3 bg-purple-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-arctic-progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arctic Decorations */}
        <div className="absolute top-20 left-20 w-8 h-8 animate-arctic-crystal">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 transform rotate-45"></div>
        </div>
        <div className="absolute top-40 right-32 w-6 h-6 animate-arctic-crystal" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-indigo-500/30 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-32 left-40 w-10 h-10 animate-arctic-crystal" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-indigo-400/30 to-purple-500/30 transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
} 