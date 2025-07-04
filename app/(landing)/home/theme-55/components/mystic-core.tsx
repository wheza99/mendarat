export default function MysticCore() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6 animate-mystic-fade-in">
            Mystic Core
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto animate-mystic-fade-in" style={{ animationDelay: '0.3s' }}>
            Pusat kekuatan alam yang memproses energi mistis menjadi teknologi canggih
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Nature Processor */}
          <div className="space-y-8">
            <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 animate-mystic-slide-in">
              <h3 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">🌳</span>
                Nature Processor
              </h3>
              
              {/* Core Visualization */}
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer Ring */}
                  <div className="w-48 h-48 border-2 border-emerald-400/30 rounded-full animate-mystic-spin">
                    {/* Middle Ring */}
                    <div className="absolute inset-4 border-2 border-green-400/40 rounded-full animate-mystic-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                      {/* Inner Core */}
                      <div className="absolute inset-4 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full flex items-center justify-center animate-mystic-pulse">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-emerald-950 font-bold text-lg">🍃</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Energy Nodes */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-mystic-pulse"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-mystic-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full animate-mystic-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-lime-400 rounded-full animate-mystic-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* Processing Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400">Nature Processing</span>
                  <span className="text-emerald-300">92%</span>
                </div>
                <div className="w-full h-3 bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-mystic-progress" style={{ width: '92%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400">Energy Harmony</span>
                  <span className="text-emerald-300">Perfect</span>
                </div>
                <div className="w-full h-3 bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-mystic-progress" style={{ width: '100%', animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Forest Memory */}
            <div className="bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                Forest Memory
              </h3>
              
              {/* Memory Grid */}
              <div className="grid grid-cols-8 gap-2 mb-6">
                {Array.from({ length: 64 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`w-6 h-6 rounded border ${
                      i % 3 === 0 ? 'bg-green-400/60 border-green-300' : 
                      i % 5 === 0 ? 'bg-emerald-400/60 border-emerald-300' :
                      'bg-green-900/40 border-green-600/30'
                    } animate-mystic-neural`}
                    style={{ animationDelay: `${i * 0.01}s` }}
                  ></div>
                ))}
              </div>

              {/* Memory Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-green-400 mb-1">Used Memory</div>
                  <div className="text-green-300 font-bold">64.7 TB</div>
                </div>
                <div>
                  <div className="text-green-400 mb-1">Wisdom Cache</div>
                  <div className="text-green-300 font-bold">Ancient</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Dashboard */}
          <div className="space-y-8">
            <div className="bg-teal-900/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-teal-300 mb-6">Performance Dashboard</h3>
              
              <div className="space-y-6">
                {/* Nature Processing */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-teal-400">🌿 Nature Processing</span>
                    <span className="text-teal-300">Optimal</span>
                  </div>
                  <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-mystic-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>

                {/* Forest Memory */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-emerald-400">🧠 Forest Memory</span>
                    <span className="text-emerald-300">Active</span>
                  </div>
                  <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-mystic-progress" style={{ width: '88%', animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                {/* Mystic Engine */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lime-400">⚡ Mystic Engine</span>
                    <span className="text-lime-300">Powerful</span>
                  </div>
                  <div className="w-full h-2 bg-lime-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-lime-400 to-green-500 rounded-full animate-mystic-progress" style={{ width: '92%', animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Spirit Network */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400">🌐 Spirit Network</span>
                    <span className="text-cyan-300">Connected</span>
                  </div>
                  <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full animate-mystic-progress" style={{ width: '97%', animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-lime-900/30 backdrop-blur-sm border border-lime-500/20 rounded-3xl p-8 animate-mystic-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-lime-300 mb-6">System Status</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-mystic-pulse">
                    <span className="text-emerald-950 font-bold">✓</span>
                  </div>
                  <div className="text-emerald-400 text-sm">Nature Sync</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-mystic-pulse" style={{ animationDelay: '0.5s' }}>
                    <span className="text-green-950 font-bold">◉</span>
                  </div>
                  <div className="text-green-400 text-sm">Core Stable</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-mystic-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-teal-950 font-bold">⚡</span>
                  </div>
                  <div className="text-teal-400 text-sm">Energy Full</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-mystic-pulse" style={{ animationDelay: '1.5s' }}>
                    <span className="text-lime-950 font-bold">🌿</span>
                  </div>
                  <div className="text-lime-400 text-sm">Spirit Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 