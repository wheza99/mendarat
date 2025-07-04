'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Quantum Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-quantum-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-quantum-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/18 rounded-full blur-3xl animate-quantum-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Theme Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-purple-400/30 bg-purple-950/50 backdrop-blur-sm rounded-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center animate-quantum-spin">
              <span className="text-sm font-bold text-white">53</span>
            </div>
            <span className="text-purple-200 font-medium">QUANTUM NEBULA</span>
          </div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-300 text-sm">🌌 INTERDIMENSIONAL</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 animate-quantum-gradient">
            QUANTUM
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-purple-400 animate-quantum-gradient" style={{ animationDelay: '1s' }}>
            NEBULA
          </span>
        </h1>

        {/* Cosmic Separators */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-quantum-flow" />
          <div className="w-12 h-12 border-2 border-blue-400 rounded-full bg-blue-400/20 backdrop-blur-sm flex items-center justify-center animate-quantum-spin">
            <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          <div className="w-20 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full animate-quantum-wave" />
          <div className="w-8 h-8 border border-purple-400 rounded-full bg-purple-400/30 backdrop-blur-sm animate-quantum-drift"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-quantum-flow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Traverse the <span className="text-purple-300 font-semibold">cosmic nebula</span> through 
          <span className="text-blue-300 font-semibold"> quantum portals</span>, accessing infinite 
          <span className="text-pink-300 font-semibold"> galactic dimensions</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              <span>🌌 ENTER NEBULA</span>
              <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-purple-400/50 text-purple-200 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300">
            <span className="flex items-center gap-3">
              <span>⚛️ QUANTUM SCAN</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </span>
          </button>
        </div>

        {/* Cosmic Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Quantum Energy */}
          <div className="p-6 border border-purple-400/30 bg-purple-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-purple-300 mb-2">∞ QE</div>
            <div className="text-sm text-slate-400 mb-3">Quantum Energy</div>
            <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-quantum-progress"></div>
            </div>
          </div>

          {/* Nebula Stability */}
          <div className="p-6 border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-blue-300 mb-2">🌌 98.7%</div>
            <div className="text-sm text-slate-400 mb-3">Nebula Stability</div>
            <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-pink-400 rounded-full animate-quantum-progress" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Portal Nodes */}
          <div className="p-6 border border-pink-400/30 bg-pink-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-pink-300 mb-2">777.3K</div>
            <div className="text-sm text-slate-400 mb-3">Portal Nodes</div>
            <div className="w-full h-2 bg-pink-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-quantum-progress" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Quantum Status Indicator */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">QUANTUM NEBULA STATUS: ACTIVE</span>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-quantum-flow"></div>
            <span className="text-blue-300 text-sm">🌌 INTERDIMENSIONAL LINK STABLE</span>
          </div>
        </div>
      </div>

      {/* Corner Cosmic Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border-2 border-purple-400/50 rounded-full bg-purple-400/10 backdrop-blur-sm flex items-center justify-center animate-quantum-spin">
          <div className="w-8 h-8 border border-blue-400/70 rounded-full bg-blue-400/20 animate-quantum-drift"></div>
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="w-12 h-12 border border-blue-400/50 rounded-full bg-blue-400/10 backdrop-blur-sm animate-quantum-pulse"></div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="w-20 h-4 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full animate-quantum-wave"></div>
      </div>

      <div className="absolute bottom-8 right-8">
        <div className="w-14 h-14 border-2 border-pink-400/40 rounded-full bg-pink-400/5 backdrop-blur-sm flex items-center justify-center animate-quantum-drift">
          <span className="text-pink-400 text-xs font-bold">🌌</span>
        </div>
      </div>
    </section>
  );
} 