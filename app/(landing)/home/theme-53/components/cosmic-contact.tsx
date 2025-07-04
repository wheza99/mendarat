'use client';

export default function CosmicContact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 border border-cyan-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-medium">GALACTIC COMMUNICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Cosmic Contact
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Establish interdimensional communication through quantum channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-200 mb-8">Quantum Transmission</h3>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Galactic Identity
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your cosmic designation"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Quantum Frequency
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@quantum.frequency"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* Dimension Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Origin Dimension
                </label>
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-pink-400/30 rounded-xl text-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all">
                  <option value="">Select your dimension</option>
                  <option value="alpha">Dimension Alpha (∞.247.∞)</option>
                  <option value="beta">Dimension Beta (247.∞.777)</option>
                  <option value="gamma">Dimension Gamma (777.777.∞)</option>
                  <option value="other">Other Dimension</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Quantum Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Transmit your interdimensional message through quantum channels..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-400/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* Transmission Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Transmission Priority
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="flex items-center gap-2 p-3 bg-slate-800/30 border border-cyan-400/30 rounded-xl cursor-pointer hover:bg-slate-700/30 transition-colors">
                    <input type="radio" name="priority" value="standard" className="text-cyan-400" />
                    <span className="text-sm text-slate-300">Standard</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-slate-800/30 border border-purple-400/30 rounded-xl cursor-pointer hover:bg-slate-700/30 transition-colors">
                    <input type="radio" name="priority" value="urgent" className="text-purple-400" />
                    <span className="text-sm text-slate-300">Urgent</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-slate-800/30 border border-pink-400/30 rounded-xl cursor-pointer hover:bg-slate-700/30 transition-colors">
                    <input type="radio" name="priority" value="quantum" className="text-pink-400" />
                    <span className="text-sm text-slate-300">Quantum</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform duration-300 group"
              >
                <span className="flex items-center justify-center gap-3">
                  <span>🌌 Transmit to Nebula</span>
                  <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin group-hover:animate-pulse"></div>
                </span>
              </button>
            </form>

            {/* Security Note */}
            <div className="mt-6 p-4 bg-slate-800/30 border border-slate-600/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">Quantum Encryption Active</span>
              </div>
              <p className="text-xs text-slate-400">
                All transmissions are secured with quantum encryption and transmitted through secure nebula channels.
              </p>
            </div>
          </div>

          {/* Contact Information & Status */}
          <div className="space-y-8">
            {/* Communication Channels */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-200 mb-6">Communication Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-purple-950/30 border border-purple-400/20 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">📡</span>
                  </div>
                  <div>
                    <div className="text-purple-200 font-semibold">Quantum Communication</div>
                    <div className="text-slate-400 text-sm">frequency@quantum.nebula</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-950/30 border border-blue-400/20 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌌</span>
                  </div>
                  <div>
                    <div className="text-blue-200 font-semibold">Galactic Network</div>
                    <div className="text-slate-400 text-sm">network.nebula.galaxy</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-pink-950/30 border border-pink-400/20 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌀</span>
                  </div>
                  <div>
                    <div className="text-pink-200 font-semibold">Portal Direct</div>
                    <div className="text-slate-400 text-sm">portal://dimension.alpha</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-cyan-200 mb-4">Response Matrix</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Standard Queries</span>
                  <span className="text-cyan-300 font-medium">Kurang dari 1 Quantum Hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Urgent Transmissions</span>
                  <span className="text-purple-300 font-medium">Kurang dari 15 Quantum Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Quantum Priority</span>
                  <span className="text-pink-300 font-medium">Instant Sync</span>
                </div>
              </div>
            </div>

            {/* Network Status */}
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-green-200 mb-4">Network Status</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-950/30 rounded-xl border border-green-400/20">
                  <div className="text-lg font-bold text-green-300">99.9%</div>
                  <div className="text-xs text-slate-400">Uptime</div>
                </div>
                <div className="text-center p-3 bg-blue-950/30 rounded-xl border border-blue-400/20">
                  <div className="text-lg font-bold text-blue-300">Kurang dari 1ms</div>
                  <div className="text-xs text-slate-400">Latency</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm">All communication channels operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 