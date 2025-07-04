'use client';

export default function QuantumContact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 animate-void-fade-in">
            Quantum Contact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-void-fade-in" style={{ animationDelay: '0.3s' }}>
            Hubungkan dengan void network menggunakan quantum communication protocols yang menembus dimensi ruang-waktu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quantum Transmission Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in">
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">📡</span>
              Quantum Transmission
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Quantum Identity
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your quantum signature..."
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Void Communication Channel
                </label>
                <input 
                  type="email" 
                  placeholder="quantum@void.dimension"
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Message Type
                </label>
                <select className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-gray-300 focus:border-purple-500/50 focus:outline-none transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Quantum Support</option>
                  <option>Void Technology</option>
                  <option>Dimensional Access</option>
                  <option>Dark Matter Research</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Quantum Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Transmit your message through the void..."
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                TRANSMIT TO VOID 🌌
              </button>
            </form>
          </div>

          {/* Quantum Channels Dashboard */}
          <div className="space-y-8">
            {/* Void Channels */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-violet-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">🌀</span>
                Void Channels
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-void-pulse"></div>
                    <span className="text-gray-300">Quantum Portal</span>
                  </div>
                  <span className="text-purple-400 text-sm">Online</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-violet-400 rounded-full animate-void-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span className="text-gray-300">Dark Matter Network</span>
                  </div>
                  <span className="text-violet-400 text-sm">Active</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-void-pulse" style={{ animationDelay: '1s' }}></div>
                    <span className="text-gray-300">Void Encryption</span>
                  </div>
                  <span className="text-gray-400 text-sm">Secured</span>
                </div>
              </div>
            </div>

            {/* Response Matrix */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-gray-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                Response Matrix
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
                  <div className="text-lg font-bold text-purple-400 mb-1">∞ ms</div>
                  <div className="text-gray-400 text-sm">Quantum Inquiry</div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
                  <div className="text-lg font-bold text-violet-400 mb-1">Ø time</div>
                  <div className="text-gray-400 text-sm">Void Support</div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
                  <div className="text-lg font-bold text-gray-400 mb-1">-1 day</div>
                  <div className="text-gray-400 text-sm">Dark Research</div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
                  <div className="text-lg font-bold text-zinc-400 mb-1">∅ hours</div>
                  <div className="text-gray-400 text-sm">Dimensional Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Void Network Status */}
        <div className="mt-12 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 animate-void-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Void Network Status</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global Network */}
            <div className="text-center p-6 bg-gray-800/20 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-4">🌐</div>
              <div className="text-xl font-bold text-purple-400 mb-2">Global Network</div>
              <div className="text-gray-400 text-sm mb-4">Quantum communication grid</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-purple-400">Nodes</div>
                  <div className="text-gray-300">∞ Active</div>
                </div>
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-purple-400">Latency</div>
                  <div className="text-gray-300">0 ms</div>
                </div>
              </div>
            </div>

            {/* Dimensional Links */}
            <div className="text-center p-6 bg-gray-800/20 rounded-xl border border-violet-500/30">
              <div className="text-3xl mb-4">🌀</div>
              <div className="text-xl font-bold text-violet-400 mb-2">Dimensional Links</div>
              <div className="text-gray-400 text-sm mb-4">Interdimensional connectivity</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-violet-400">Portals</div>
                  <div className="text-gray-300">∞ Open</div>
                </div>
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-violet-400">Stability</div>
                  <div className="text-gray-300">100%</div>
                </div>
              </div>
            </div>

            {/* Void Security */}
            <div className="text-center p-6 bg-gray-800/20 rounded-xl border border-gray-500/30">
              <div className="text-3xl mb-4">🛡️</div>
              <div className="text-xl font-bold text-gray-400 mb-2">Void Security</div>
              <div className="text-gray-400 text-sm mb-4">Quantum encryption status</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-gray-400">Encryption</div>
                  <div className="text-gray-300">∅ Breach</div>
                </div>
                <div className="bg-gray-700/30 rounded p-2">
                  <div className="text-gray-400">Threats</div>
                  <div className="text-gray-300">Ø Detected</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-void-pulse"></div>
              Void network operational • Quantum channels stable • All dimensions accessible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 