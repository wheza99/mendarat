'use client';

export default function VoidServices() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 animate-void-fade-in">
            Void Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-void-fade-in" style={{ animationDelay: '0.3s' }}>
            Teknologi canggih berbasis quantum void dan dark matter untuk solusi komputasi yang melampaui realitas
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Quantum Computing */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 group animate-void-slide-in">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Quantum Computing</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-void-pulse"></div>
                <span className="text-gray-300">Infinite parallel processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-void-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-gray-300">Quantum entanglement networks</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-void-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-gray-300">Superposition algorithms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-void-pulse" style={{ animationDelay: '1.5s' }}></div>
                <span className="text-gray-300">Zero-latency computation</span>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Quantum Efficiency</span>
                <span className="text-purple-400 text-sm">∞%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-violet-600 rounded-full animate-void-progress"></div>
              </div>
            </div>

            <button className="w-full bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/50 rounded-xl py-3 font-semibold text-purple-400 transition-all duration-300">
              Explore Quantum →
            </button>
          </div>

          {/* Void Networks */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-300 group animate-void-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🕳️</div>
            <h3 className="text-2xl font-bold text-violet-400 mb-6">Void Networks</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-void-pulse"></div>
                <span className="text-gray-300">Interdimensional routing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-void-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-gray-300">Dark matter protocols</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-void-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-gray-300">Void compression</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-void-pulse" style={{ animationDelay: '1.5s' }}></div>
                <span className="text-gray-300">Infinite bandwidth</span>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Network Coverage</span>
                <span className="text-violet-400 text-sm">∞ Dimensions</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-void-progress" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            <button className="w-full bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/50 rounded-xl py-3 font-semibold text-violet-400 transition-all duration-300">
              Access Network →
            </button>
          </div>

          {/* Dark Security */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-300 group animate-void-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-6">Dark Security</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-void-pulse"></div>
                <span className="text-gray-300">Void encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-void-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-gray-300">Quantum shields</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-void-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-gray-300">Dark matter barriers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-void-pulse" style={{ animationDelay: '1.5s' }}></div>
                <span className="text-gray-300">Infinite key strength</span>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Security Level</span>
                <span className="text-gray-400 text-sm">∅ Breaches</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gray-500 to-zinc-600 rounded-full animate-void-progress" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <button className="w-full bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/50 rounded-xl py-3 font-semibold text-gray-400 transition-all duration-300">
              Secure Data →
            </button>
          </div>
        </div>

        {/* Void System Monitor */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 animate-void-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Void System Monitor</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm mb-2">Quantum Cores</div>
              <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto animate-void-pulse"></div>
            </div>
            
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-violet-400 mb-2">Ø</div>
              <div className="text-gray-400 text-sm mb-2">Void Storage</div>
              <div className="w-2 h-2 bg-violet-400 rounded-full mx-auto animate-void-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-gray-400 mb-2">∅</div>
              <div className="text-gray-400 text-sm mb-2">Dark Energy</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto animate-void-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-zinc-400 mb-2">√-1</div>
              <div className="text-gray-400 text-sm mb-2">Imaginary RAM</div>
              <div className="w-2 h-2 bg-zinc-400 rounded-full mx-auto animate-void-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-void-pulse"></div>
              All void systems operational • No dimensional breaches detected • Reality stable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 