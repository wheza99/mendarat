export default function FrostCore() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6 animate-arctic-fade-in">
            Frost Core
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto animate-arctic-fade-in" style={{ animationDelay: '0.3s' }}>
            Pusat pemrosesan kriogenik yang mengoperasikan teknologi synthwave dalam suhu absolute zero
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Arctic Processor */}
          <div className="space-y-8">
            <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 animate-arctic-slide-in">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">❄️</span>
                Arctic Processor
              </h3>
              
              {/* Core Visualization */}
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer Frost Ring */}
                  <div className="w-48 h-48 border-2 border-cyan-400/30 rounded-full animate-arctic-spin">
                    {/* Middle Ice Ring */}
                    <div className="absolute inset-4 border-2 border-blue-400/40 rounded-full animate-arctic-spin" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
                      {/* Inner Frost Core */}
                      <div className="absolute inset-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center animate-arctic-pulse">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-cyan-950 font-bold text-lg">❅</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Ice Crystal Nodes */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-indigo-400 rounded animate-arctic-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '1.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* Processing Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400">Freeze Processing</span>
                  <span className="text-cyan-300">98%</span>
                </div>
                <div className="w-full h-3 bg-cyan-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-arctic-progress" style={{ width: '98%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400">Thermal Stability</span>
                  <span className="text-cyan-300">Absolute</span>
                </div>
                <div className="w-full h-3 bg-cyan-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-arctic-progress" style={{ width: '100%', animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Ice Memory */}
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                <span className="text-3xl">🧊</span>
                Ice Memory
              </h3>
              
              {/* Memory Grid */}
              <div className="grid grid-cols-8 gap-2 mb-6">
                {Array.from({ length: 64 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`w-6 h-6 rounded border ${
                      i % 3 === 0 ? 'bg-cyan-400/60 border-cyan-300' : 
                      i % 5 === 0 ? 'bg-blue-400/60 border-blue-300' :
                      'bg-blue-900/40 border-blue-600/30'
                    } animate-arctic-crystal`}
                    style={{ animationDelay: `${i * 0.01}s` }}
                  ></div>
                ))}
              </div>

              {/* Memory Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-blue-400 mb-1">Frozen Data</div>
                  <div className="text-blue-300 font-bold">128 PB</div>
                </div>
                <div>
                  <div className="text-blue-400 mb-1">Cache State</div>
                  <div className="text-blue-300 font-bold">Crystallized</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Dashboard */}
          <div className="space-y-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Synth Performance</h3>
              
              <div className="space-y-6">
                {/* Arctic Processing */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-indigo-400">❄️ Arctic Processing</span>
                    <span className="text-indigo-300">Optimal</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-arctic-progress" style={{ width: '96%' }}></div>
                  </div>
                </div>

                {/* Ice Memory */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400">🧊 Ice Memory</span>
                    <span className="text-cyan-300">Frozen</span>
                  </div>
                  <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-arctic-progress" style={{ width: '94%', animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                {/* Synth Engine */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-400">🌊 Synth Engine</span>
                    <span className="text-blue-300">Synthesizing</span>
                  </div>
                  <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-arctic-progress" style={{ width: '99%', animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Crystal Network */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-400">🔷 Crystal Network</span>
                    <span className="text-purple-300">Connected</span>
                  </div>
                  <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-arctic-progress" style={{ width: '97%', animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">System Status</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-arctic-pulse">
                    <span className="text-cyan-950 font-bold">❄️</span>
                  </div>
                  <div className="text-cyan-400 text-sm">Frost Active</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-arctic-pulse" style={{ animationDelay: '0.5s' }}>
                    <span className="text-blue-950 font-bold">🌊</span>
                  </div>
                  <div className="text-blue-400 text-sm">Synth Flow</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-arctic-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-indigo-950 font-bold">🔷</span>
                  </div>
                  <div className="text-indigo-400 text-sm">Crystal Stable</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-arctic-pulse" style={{ animationDelay: '1.5s' }}>
                    <span className="text-purple-950 font-bold">⚡</span>
                  </div>
                  <div className="text-purple-400 text-sm">Power Optimal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 