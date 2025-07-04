'use client';

export default function AquaContact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-900/30 border border-teal-400/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-300 text-sm font-medium">AQUA COMMUNICATION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Ocean Contact
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Send messages through underwater channels and connect with the digital ocean depths
          </p>
        </div>

        {/* Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-teal-200">Underwater Transmission</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm">CONNECTED</span>
              </div>
            </div>

            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-200 font-medium mb-2">Diver Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-teal-950/30 border border-teal-400/30 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Captain Aquarius"
                  />
                </div>
                <div>
                  <label className="block text-cyan-200 font-medium mb-2">Ocean Signal</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-400/30 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="signal@ocean.deep"
                  />
                </div>
              </div>

              {/* Depth Level */}
              <div>
                <label className="block text-blue-200 font-medium mb-2">Current Depth</label>
                <select className="w-full px-4 py-3 bg-blue-950/30 border border-blue-400/30 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors">
                  <option>Surface Waters (0-10m)</option>
                  <option>Shallow Zone (10-100m)</option>
                  <option>Deep Ocean (100-1000m)</option>
                  <option>Abyssal Depths (1000m+)</option>
                  <option>Oceanic Trench (Unknown)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-teal-200 font-medium mb-2">Ocean Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-teal-950/30 border border-teal-400/30 rounded-xl text-white placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  placeholder="Send your message through the digital ocean currents..."
                />
              </div>

              {/* Transmission Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-200 font-medium mb-2">Transmission Type</label>
                  <select className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-400/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors">
                    <option>Sonar Burst</option>
                    <option>Wave Packet</option>
                    <option>Current Stream</option>
                    <option>Deep Signal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-blue-200 font-medium mb-2">Priority Level</label>
                  <select className="w-full px-4 py-3 bg-blue-950/30 border border-blue-400/30 rounded-xl text-white focus:border-blue-400 focus:outline-none transition-colors">
                    <option>Surface</option>
                    <option>Medium</option>
                    <option>Deep</option>
                    <option>Emergency</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>🌊 SEND TRANSMISSION</span>
                <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
              </button>
            </form>
          </div>

          {/* Communication Channels */}
          <div className="space-y-6">
            {/* Active Channels */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-cyan-200 mb-4">Communication Channels</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-cyan-950/30 rounded-xl border border-cyan-400/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🌊</span>
                  </div>
                  <div>
                    <div className="font-medium text-cyan-200">Surface Radio</div>
                    <div className="text-xs text-slate-400">Signal: Strong</div>
                  </div>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-950/30 rounded-xl border border-blue-400/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">📡</span>
                  </div>
                  <div>
                    <div className="font-medium text-blue-200">Deep Sonar</div>
                    <div className="text-xs text-slate-400">Signal: Medium</div>
                  </div>
                  <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-teal-950/30 rounded-xl border border-teal-400/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🔊</span>
                  </div>
                  <div>
                    <div className="font-medium text-teal-200">Current Wave</div>
                    <div className="text-xs text-slate-400">Signal: Weak</div>
                  </div>
                  <div className="ml-auto w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Response Matrix */}
            <div className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Response Matrix</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Surface Response</span>
                  <span className="text-blue-300 font-medium">2 min</span>
                </div>
                <div className="w-full h-1 bg-blue-900/50 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ocean-progress"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Deep Response</span>
                  <span className="text-teal-300 font-medium">15 min</span>
                </div>
                <div className="w-full h-1 bg-teal-900/50 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ocean-progress" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Abyssal Response</span>
                  <span className="text-cyan-300 font-medium">2 hours</span>
                </div>
                <div className="w-full h-1 bg-cyan-900/50 rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ocean-progress" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>

            {/* Ocean Network Status */}
            <div className="bg-gradient-to-br from-teal-900/20 to-sky-900/20 border border-teal-400/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-teal-200 mb-4">Network Status</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-300">Atlantic Current</span>
                  </div>
                  <span className="text-green-300 text-xs font-medium">ONLINE</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-300">Pacific Stream</span>
                  </div>
                  <span className="text-blue-300 text-xs font-medium">ACTIVE</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-300">Arctic Flow</span>
                  </div>
                  <span className="text-teal-300 text-xs font-medium">COLD</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-300">Deep Trench</span>
                  </div>
                  <span className="text-yellow-300 text-xs font-medium">LIMITED</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-teal-950/30 rounded-xl border border-teal-400/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-300">99.2%</div>
                  <div className="text-xs text-slate-400">Network Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 