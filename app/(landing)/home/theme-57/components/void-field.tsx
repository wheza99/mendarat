'use client';

export default function VoidField() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 animate-void-fade-in">
            Quantum Void Field
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-void-fade-in" style={{ animationDelay: '0.3s' }}>
            Visualisasi real-time dari field quantum void dengan dark matter processing dan void energy manipulation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Void Processor */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in">
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">🌌</span>
              Void Processor
            </h3>
            
            <div className="relative h-64 bg-gray-800/50 rounded-2xl p-6 mb-6 overflow-hidden">
              {/* Quantum Core Visualization */}
              <div className="absolute inset-6 flex items-center justify-center">
                <div className="relative">
                  {/* Outer Ring */}
                  <div className="w-32 h-32 border-2 border-purple-400/30 rounded-full animate-void-spin"></div>
                  {/* Middle Ring */}
                  <div className="absolute inset-4 border-2 border-violet-400/40 rounded-full animate-void-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                  {/* Inner Ring */}
                  <div className="absolute inset-8 border-2 border-gray-400/50 rounded-full animate-void-spin" style={{ animationDuration: '10s' }}></div>
                  {/* Core */}
                  <div className="absolute inset-12 bg-gradient-to-r from-purple-500/50 to-gray-500/50 rounded-full animate-void-pulse flex items-center justify-center">
                    <span className="text-gray-300 text-xs font-bold">VOID</span>
                  </div>
                </div>
              </div>

              {/* Quantum Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-void-float"></div>
              <div className="absolute bottom-6 left-8 w-1 h-1 bg-violet-400 rounded-full animate-void-drift"></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-gray-400 rounded-full animate-void-spiral"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-purple-400">∞</div>
                <div className="text-gray-400 text-sm">Quantum States</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-violet-400">-273.15°C</div>
                <div className="text-gray-400 text-sm">Absolute Zero</div>
              </div>
            </div>
          </div>

          {/* Dark Matter Generator */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">⚫</span>
              Dark Matter
            </h3>

            <div className="space-y-6 mb-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Void Energy</span>
                  <span className="text-purple-400 text-sm">99.7%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-violet-600 rounded-full animate-void-progress"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Dark Matter</span>
                  <span className="text-gray-400 text-sm">85.2%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-500 to-zinc-600 rounded-full animate-void-progress" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Quantum Field</span>
                  <span className="text-violet-400 text-sm">∞</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-void-progress" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                <div className="text-sm font-bold text-purple-400">Ø</div>
                <div className="text-gray-500 text-xs">Void</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                <div className="text-sm font-bold text-gray-400">∞</div>
                <div className="text-gray-500 text-xs">Infinite</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-3 text-center">
                <div className="text-sm font-bold text-violet-400">Ψ</div>
                <div className="text-gray-500 text-xs">Quantum</div>
              </div>
            </div>
          </div>
        </div>

        {/* Void Field Dashboard */}
        <div className="mt-12 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 animate-void-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Void Field Dashboard</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm">Parallel Dimensions</div>
              <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto mt-2 animate-void-pulse"></div>
            </div>
            
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-violet-400 mb-2">Ø</div>
              <div className="text-gray-400 text-sm">Void Singularities</div>
              <div className="w-2 h-2 bg-violet-400 rounded-full mx-auto mt-2 animate-void-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-gray-400 mb-2">√-1</div>
              <div className="text-gray-400 text-sm">Imaginary Numbers</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2 animate-void-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
              <div className="text-2xl font-bold text-zinc-400 mb-2">∅</div>
              <div className="text-gray-400 text-sm">Empty Sets</div>
              <div className="w-2 h-2 bg-zinc-400 rounded-full mx-auto mt-2 animate-void-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 