export default function EnchantedGrove() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6 animate-mystic-fade-in">
            Enchanted Grove
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-mystic-fade-in" style={{ animationDelay: '0.3s' }}>
            Jelajahi keajaiban hutan mistis dengan teknologi terdepan yang berpadu dengan kearifan alam
          </p>
        </div>

        {/* Grove Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Tree of Life */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 animate-mystic-slide-in">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌳</div>
              <h3 className="text-2xl font-bold text-emerald-300 mb-2">Tree of Life</h3>
              <p className="text-emerald-400">Ancient Wisdom Core</p>
            </div>
            
            {/* Tree Visualization */}
            <div className="relative h-48 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full animate-mystic-pulse">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/40 to-green-500/40 rounded-full animate-mystic-spin">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-mystic-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Life Essence */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-300 rounded-full animate-mystic-float"></div>
              <div className="absolute top-8 right-6 w-2 h-2 bg-green-300 rounded-full animate-mystic-drift"></div>
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-teal-300 rounded-full animate-mystic-float"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-lime-300 rounded-full animate-mystic-drift"></div>
            </div>

            {/* Life Metrics */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-400">Life Force</span>
                <span className="text-emerald-300">95%</span>
              </div>
              <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-mystic-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>

          {/* Sacred Grove */}
          <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-green-300 mb-2">Sacred Grove</h3>
              <p className="text-green-400">Nature's Sanctuary</p>
            </div>
            
            {/* Grove Control Panel */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-green-400">Grove Harmony</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-green-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full animate-mystic-progress"></div>
                  </div>
                  <span className="text-green-300 text-sm">Perfect</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-green-400">Nature Flow</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-green-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full animate-mystic-progress" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <span className="text-green-300 text-sm">Stable</span>
                </div>
              </div>
            </div>

            {/* Grove Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-green-800/40 hover:bg-green-700/40 border border-green-500/30 rounded-xl py-3 px-4 text-sm text-green-300 transition-all duration-300 transform hover:scale-105">
                Harmonize
              </button>
              <button className="bg-green-800/40 hover:bg-green-700/40 border border-green-500/30 rounded-xl py-3 px-4 text-sm text-green-300 transition-all duration-300 transform hover:scale-105">
                Nurture
              </button>
            </div>
          </div>

          {/* Mystic Spring */}
          <div className="bg-teal-900/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">💧</div>
              <h3 className="text-2xl font-bold text-teal-300 mb-2">Mystic Spring</h3>
              <p className="text-teal-400">Source of Magic</p>
            </div>
            
            {/* Spring Visualization */}
            <div className="relative h-48 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Water Ripples */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-teal-400/40 rounded-full animate-mystic-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-teal-400/30 rounded-full animate-mystic-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-teal-400/20 rounded-full animate-mystic-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Central Spring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-full animate-mystic-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spring Status */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-teal-400">Magic Flow</span>
                <span className="text-teal-300">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-teal-400">Purity Level</span>
                <span className="text-teal-300">Crystal Clear</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grove Central Dashboard */}
        <div className="bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-emerald-300 mb-6 text-center">Grove Harmony Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">98%</div>
              <div className="text-emerald-400 text-sm">Nature Balance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">🌱</div>
              <div className="text-green-400 text-sm">Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-300 mb-2">∞</div>
              <div className="text-teal-400 text-sm">Magic Essence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-300 mb-2">777</div>
              <div className="text-lime-400 text-sm">Spirit Nodes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 