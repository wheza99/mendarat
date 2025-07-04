export default function CrystalField() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6 animate-arctic-fade-in">
            Crystal Field
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto animate-arctic-fade-in" style={{ animationDelay: '0.3s' }}>
            Eksplorasi field kristal digital yang mengolah data dalam suhu sub-zero dengan presisi nano-meter
          </p>
        </div>

        {/* Crystal Field Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Ice Processor */}
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 animate-arctic-slide-in">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">❄️</div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Ice Processor</h3>
              <p className="text-cyan-400">Quantum Cooling Core</p>
            </div>
            
            {/* Processor Visualization */}
            <div className="relative h-48 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full animate-arctic-pulse">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full animate-arctic-spin">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-arctic-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Ice Particles */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-300 rounded animate-arctic-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
              <div className="absolute top-8 right-6 w-2 h-2 bg-blue-300 rounded animate-arctic-drift" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
              <div className="absolute bottom-6 left-8 w-4 h-4 bg-indigo-300 rounded animate-arctic-float" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-300 rounded animate-arctic-drift" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            </div>

            {/* Processing Metrics */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-cyan-400">Freeze Rate</span>
                <span className="text-cyan-300">99.9%</span>
              </div>
              <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-arctic-progress" style={{ width: '99%' }}></div>
              </div>
            </div>
          </div>

          {/* Synth Generator */}
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-2">Synth Generator</h3>
              <p className="text-blue-400">Wave Synthesis Engine</p>
            </div>
            
            {/* Generator Control Panel */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-blue-400">Wave Frequency</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full animate-arctic-progress"></div>
                  </div>
                  <span className="text-blue-300 text-sm">80Hz</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-blue-400">Synth Amplitude</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full animate-arctic-progress" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <span className="text-blue-300 text-sm">Optimal</span>
                </div>
              </div>
            </div>

            {/* Synth Controls */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-800/40 hover:bg-blue-700/40 border border-blue-400/30 rounded-xl py-3 px-4 text-sm text-blue-300 transition-all duration-300 transform hover:scale-105">
                Modulate
              </button>
              <button className="bg-blue-800/40 hover:bg-blue-700/40 border border-blue-400/30 rounded-xl py-3 px-4 text-sm text-blue-300 transition-all duration-300 transform hover:scale-105">
                Harmonize
              </button>
            </div>
          </div>

          {/* Frost Matrix */}
          <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-3xl p-8 animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🔷</div>
              <h3 className="text-2xl font-bold text-indigo-300 mb-2">Frost Matrix</h3>
              <p className="text-indigo-400">Crystalline Network</p>
            </div>
            
            {/* Matrix Visualization */}
            <div className="relative h-48 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Crystal Lattice */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-indigo-400/40 transform rotate-45 animate-arctic-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-indigo-400/30 transform rotate-45 animate-arctic-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-indigo-400/20 transform rotate-45 animate-arctic-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Central Matrix Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-300 to-purple-400 transform rotate-45 animate-arctic-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix Status */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-indigo-400">Lattice Stability</span>
                <span className="text-indigo-300">Stable</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-indigo-400">Crystal Formation</span>
                <span className="text-indigo-300">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Field Central Dashboard */}
        <div className="bg-cyan-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Arctic Field Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">-273°C</div>
              <div className="text-cyan-400 text-sm">Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">🌊</div>
              <div className="text-blue-400 text-sm">Synth Waves</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-300 mb-2">∞</div>
              <div className="text-indigo-400 text-sm">Crystal Matrix</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">777</div>
              <div className="text-purple-400 text-sm">Ice Nodes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 