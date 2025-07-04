export default function ForestWisdom() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6 animate-mystic-fade-in">
            Forest Wisdom
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-mystic-fade-in" style={{ animationDelay: '0.3s' }}>
            Portal kearifan kuno yang menghubungkan pengetahuan ribuan tahun dengan teknologi modern
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ancient Portal */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 animate-mystic-slide-in">
            <h3 className="text-2xl font-bold text-emerald-300 mb-8 text-center">Ancient Portal</h3>
            
            {/* Portal Visualization */}
            <div className="relative h-80 mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Portal Ring */}
                <div className="w-64 h-64 border-4 border-emerald-400/30 rounded-full animate-mystic-spin" style={{ animationDuration: '30s' }}>
                  {/* Middle Portal Ring */}
                  <div className="absolute inset-4 border-3 border-green-400/40 rounded-full animate-mystic-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                    {/* Inner Portal Ring */}
                    <div className="absolute inset-4 border-2 border-teal-400/50 rounded-full animate-mystic-spin" style={{ animationDuration: '15s' }}>
                      {/* Portal Core */}
                      <div className="absolute inset-6 bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-full flex items-center justify-center animate-mystic-pulse">
                        <div className="text-4xl text-emerald-300">🌳</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Portal Runes */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center text-emerald-950 font-bold animate-mystic-pulse">
                    ☽
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-green-950 font-bold animate-mystic-pulse" style={{ animationDelay: '0.5s' }}>
                    ♦
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center text-teal-950 font-bold animate-mystic-pulse" style={{ animationDelay: '1s' }}>
                    ☾
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-lime-950 font-bold animate-mystic-pulse" style={{ animationDelay: '1.5s' }}>
                    ◆
                  </div>
                </div>
                
                {/* Floating Wisdom Particles */}
                <div className="absolute top-8 left-12 w-2 h-2 bg-emerald-300 rounded-full animate-mystic-float"></div>
                <div className="absolute top-16 right-8 w-3 h-3 bg-green-300 rounded-full animate-mystic-drift"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-teal-300 rounded-full animate-mystic-float"></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-lime-300 rounded-full animate-mystic-drift"></div>
              </div>
            </div>

            {/* Portal Navigation */}
            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold text-emerald-300 mb-3">Ancient Realms</h4>
              
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-emerald-800/40 hover:bg-emerald-700/40 border border-emerald-500/30 rounded-xl py-3 px-2 text-xs text-emerald-300 transition-all duration-300 transform hover:scale-105">
                  Elder Tree
                  <div className="text-emerald-400 text-xs mt-1">Ancient</div>
                </button>
                <button className="bg-green-800/40 hover:bg-green-700/40 border border-green-500/30 rounded-xl py-3 px-2 text-xs text-green-300 transition-all duration-300 transform hover:scale-105">
                  Wisdom Grove
                  <div className="text-green-400 text-xs mt-1">Eternal</div>
                </button>
                <button className="bg-teal-800/40 hover:bg-teal-700/40 border border-teal-500/30 rounded-xl py-3 px-2 text-xs text-teal-300 transition-all duration-300 transform hover:scale-105">
                  Spirit Realm
                  <div className="text-teal-400 text-xs mt-1">Mystic</div>
                </button>
              </div>
            </div>

            {/* Portal Controls */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105">
                Enter Portal
              </button>
              <button className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-950 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Seek Wisdom
              </button>
            </div>
          </div>

          {/* Wisdom Archive */}
          <div className="space-y-8">
            {/* Knowledge Repository */}
            <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Knowledge Repository
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-800/30 rounded-xl border border-green-500/20">
                  <div>
                    <div className="font-semibold text-green-300">Ancient Texts</div>
                    <div className="text-green-400 text-sm">Wisdom of ages past</div>
                  </div>
                  <div className="text-green-300">∞</div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-emerald-800/30 rounded-xl border border-emerald-500/20">
                  <div>
                    <div className="font-semibold text-emerald-300">Nature Secrets</div>
                    <div className="text-emerald-400 text-sm">Hidden forest knowledge</div>
                  </div>
                  <div className="text-emerald-300">🌿</div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-teal-800/30 rounded-xl border border-teal-500/20">
                  <div>
                    <div className="font-semibold text-teal-300">Mystic Arts</div>
                    <div className="text-teal-400 text-sm">Magical practices</div>
                  </div>
                  <div className="text-teal-300">✨</div>
                </div>
              </div>
            </div>

            {/* Wisdom Seekers */}
            <div className="bg-teal-900/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-teal-300 mb-6">Wisdom Seekers</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300 mb-1">777</div>
                  <div className="text-emerald-400 text-sm">Active Seekers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">∞</div>
                  <div className="text-green-400 text-sm">Knowledge Shared</div>
                </div>
              </div>

              {/* Seeker Status */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-teal-400">Portal Stability</span>
                  <span className="text-teal-300">Perfect</span>
                </div>
                <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-mystic-progress"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-teal-400">Wisdom Flow</span>
                  <span className="text-teal-300">Continuous</span>
                </div>
                <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-mystic-progress" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Ancient History */}
            <div className="bg-lime-900/30 backdrop-blur-sm border border-lime-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-lime-300 mb-6">Portal History</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-lime-400">Last Portal Opening</span>
                  <span className="text-lime-300">Now Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lime-400">Wisdom Exchange</span>
                  <span className="text-lime-300">Continuous</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lime-400">Knowledge Depth</span>
                  <span className="text-lime-300">Infinite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lime-400">Portal Age</span>
                  <span className="text-lime-300">Timeless</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 