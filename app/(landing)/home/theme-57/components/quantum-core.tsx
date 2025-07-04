'use client';

export default function QuantumCore() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 animate-void-fade-in">
            Quantum Core Systems
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-void-fade-in" style={{ animationDelay: '0.3s' }}>
            Sistem processing quantum dengan entanglement matrix dan dark energy computation yang melampaui fisika klasik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quantum Processor */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in">
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">⚛️</span>
              Quantum Processor
            </h3>
            
            <div className="relative h-80 bg-gray-800/50 rounded-2xl p-6 mb-6 overflow-hidden">
              {/* Multi-Ring Quantum Visualization */}
              <div className="absolute inset-6 flex items-center justify-center">
                <div className="relative">
                  {/* Outermost Ring */}
                  <div className="w-40 h-40 border border-purple-400/20 rounded-full animate-void-spin" style={{ animationDuration: '30s' }}></div>
                  {/* Second Ring */}
                  <div className="absolute inset-3 border border-violet-400/30 rounded-full animate-void-spin" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
                  {/* Third Ring */}
                  <div className="absolute inset-6 border border-gray-400/40 rounded-full animate-void-spin" style={{ animationDuration: '20s' }}></div>
                  {/* Fourth Ring */}
                  <div className="absolute inset-9 border border-zinc-400/50 rounded-full animate-void-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                  {/* Inner Core */}
                  <div className="absolute inset-12 bg-gradient-to-r from-purple-500/30 via-violet-500/30 to-gray-500/30 rounded-full animate-void-pulse flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-300 text-xs font-bold">QUANTUM</div>
                      <div className="text-gray-400 text-xs">CORE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantum Entanglement Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#quantumGradient)" strokeWidth="1" className="animate-void-fade"/>
                <line x1="70%" y1="20%" x2="30%" y2="80%" stroke="url(#quantumGradient)" strokeWidth="1" className="animate-void-fade" style={{ animationDelay: '1s' }}/>
                <line x1="10%" y1="60%" x2="90%" y2="40%" stroke="url(#quantumGradient)" strokeWidth="1" className="animate-void-fade" style={{ animationDelay: '2s' }}/>
                <defs>
                  <linearGradient id="quantumGradient">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#6B7280" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-xl p-4">
                <div className="text-lg font-bold text-purple-400 mb-1">∞ GHz</div>
                <div className="text-gray-400 text-sm">Quantum Frequency</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4">
                <div className="text-lg font-bold text-violet-400 mb-1">√-1 TB</div>
                <div className="text-gray-400 text-sm">Imaginary Memory</div>
              </div>
            </div>
          </div>

          {/* Void Memory Matrix */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 animate-void-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              <span className="text-3xl">🕳️</span>
              Void Memory
            </h3>

            <div className="h-64 bg-gray-800/50 rounded-2xl p-4 mb-6 overflow-hidden">
              {/* Memory Grid */}
              <div className="grid grid-cols-8 gap-1 h-full">
                {Array.from({ length: 64 }, (_, i) => (
                  <div 
                    key={i}
                    className={`
                      rounded-sm
                      ${i % 7 === 0 ? 'bg-purple-500/30 animate-void-pulse' : ''}
                      ${i % 11 === 0 ? 'bg-violet-500/30 animate-void-pulse' : ''}
                      ${i % 13 === 0 ? 'bg-gray-500/30 animate-void-pulse' : ''}
                      ${i % 17 === 0 ? 'bg-zinc-500/30 animate-void-pulse' : ''}
                      ${i % 5 === 0 && i % 7 !== 0 && i % 11 !== 0 && i % 13 !== 0 && i % 17 !== 0 ? 'bg-gray-700/20' : ''}
                      ${i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0 && i % 13 !== 0 && i % 17 !== 0 ? 'bg-gray-800/20' : ''}
                    `}
                    style={{
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Memory Usage</span>
                <span className="text-purple-400">∞%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Cache Hit Rate</span>
                <span className="text-violet-400">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Entanglement Rate</span>
                <span className="text-gray-400">∞/∞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Performance Dashboard */}
        <div className="mt-12 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 animate-void-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center">Quantum Performance Monitor</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Void Processing */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-void-spin" style={{ clipPath: 'inset(0 0 50% 50%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-sm">∞%</span>
                </div>
              </div>
              <div className="text-gray-300 font-semibold mb-2">Void Processing</div>
              <div className="text-gray-500 text-sm">Infinite computation power</div>
            </div>

            {/* Quantum States */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-violet-500 rounded-full animate-void-spin" style={{ clipPath: 'inset(0 25% 25% 0)', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-violet-400 font-bold text-sm">∞</span>
                </div>
              </div>
              <div className="text-gray-300 font-semibold mb-2">Quantum States</div>
              <div className="text-gray-500 text-sm">Superposition active</div>
            </div>

            {/* Dark Energy */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-gray-400 rounded-full animate-void-spin" style={{ clipPath: 'inset(25% 0 0 25%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">∅</span>
                </div>
              </div>
              <div className="text-gray-300 font-semibold mb-2">Dark Energy</div>
              <div className="text-gray-500 text-sm">Void manipulation</div>
            </div>

            {/* Entanglement */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-zinc-400 rounded-full animate-void-spin" style={{ clipPath: 'inset(0 0 25% 75%)', animationDirection: 'reverse', animationDuration: '8s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-zinc-400 font-bold text-sm">Ψ</span>
                </div>
              </div>
              <div className="text-gray-300 font-semibold mb-2">Entanglement</div>
              <div className="text-gray-500 text-sm">Quantum correlation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 