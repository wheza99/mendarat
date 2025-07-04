export default function NatureServices() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6 animate-mystic-fade-in">
            Nature Services
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-mystic-fade-in" style={{ animationDelay: '0.3s' }}>
            Layanan teknologi berkelanjutan yang terinspirasi dari kearifan alam dan kekuatan mistis hutan
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Eco Computing */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-emerald-900/40 animate-mystic-slide-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-mystic-pulse">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-300 mb-2">Eco Computing</h3>
              <p className="text-emerald-400 text-sm">Sustainable Technology Solutions</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Green cloud processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Solar-powered servers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-200 text-sm">Carbon-neutral hosting</span>
              </div>
            </div>

            <div className="border-t border-emerald-500/20 pt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-emerald-400">Efficiency</span>
                <span className="text-emerald-300">99.8%</span>
              </div>
              <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-mystic-progress"></div>
              </div>
            </div>
          </div>

          {/* Forest Networks */}
          <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-green-900/40 animate-mystic-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-mystic-pulse" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-green-300 mb-2">Forest Networks</h3>
              <p className="text-green-400 text-sm">Nature-Inspired Connectivity</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-200 text-sm">Bio-neural networks</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-200 text-sm">Organic data flow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-200 text-sm">Self-healing systems</span>
              </div>
            </div>

            <div className="border-t border-green-500/20 pt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-green-400">Network Health</span>
                <span className="text-green-300">Perfect</span>
              </div>
              <div className="w-full h-2 bg-green-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-mystic-progress" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          </div>

          {/* Mystic Security */}
          <div className="bg-teal-900/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-teal-900/40 animate-mystic-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-mystic-pulse" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-300 mb-2">Mystic Security</h3>
              <p className="text-teal-400 text-sm">Enchanted Protection Systems</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-teal-200 text-sm">Magical encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-teal-200 text-sm">Spirit-guard protocols</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-teal-200 text-sm">Nature's shield</span>
              </div>
            </div>

            <div className="border-t border-teal-500/20 pt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-teal-400">Protection Level</span>
                <span className="text-teal-300">Ultimate</span>
              </div>
              <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-mystic-progress" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nature System Monitor */}
        <div className="bg-lime-900/20 backdrop-blur-sm border border-lime-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-lime-300 mb-8 text-center">Nature System Monitor</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2 animate-mystic-pulse">🌱</div>
              <div className="text-emerald-400 font-medium mb-1">Eco Computing</div>
              <div className="text-emerald-600 text-sm">Operational</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2 animate-mystic-pulse" style={{ animationDelay: '0.5s' }}>🌐</div>
              <div className="text-green-400 font-medium mb-1">Forest Networks</div>
              <div className="text-green-600 text-sm">Connected</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-300 mb-2 animate-mystic-pulse" style={{ animationDelay: '1s' }}>🛡️</div>
              <div className="text-teal-400 font-medium mb-1">Mystic Security</div>
              <div className="text-teal-600 text-sm">Protected</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-300 mb-2 animate-mystic-pulse" style={{ animationDelay: '1.5s' }}>✨</div>
              <div className="text-lime-400 font-medium mb-1">Magic Systems</div>
              <div className="text-lime-600 text-sm">Enchanted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 