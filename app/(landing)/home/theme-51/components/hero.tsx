'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Holographic Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-holo-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/12 rounded-full blur-3xl animate-holo-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-holo-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Theme Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-purple-400/30 bg-purple-950/50 backdrop-blur-sm rounded-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center animate-holo-spin">
              <span className="text-sm font-bold text-white">51</span>
            </div>
            <span className="text-purple-200 font-medium">QUANTUM HOLOGRAPHIC</span>
          </div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-300 text-sm">🔮 HOLO INTERFACE ACTIVE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 animate-holo-gradient">
            QUANTUM
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-holo-gradient" style={{ animationDelay: '1s' }}>
            HOLOGRAM
          </span>
        </h1>

        {/* Holographic Separators */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-holo-flow" />
          <div className="w-12 h-12 border-2 border-emerald-400 rounded-full bg-emerald-400/20 backdrop-blur-sm flex items-center justify-center animate-holo-spin">
            <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          <div className="w-20 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-holo-wave" />
          <div className="w-8 h-8 border border-purple-400 rounded-full bg-purple-400/30 backdrop-blur-sm animate-holo-drift"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-holo-flow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Experience next-generation <span className="text-purple-300 font-semibold">holographic computing</span> through 
          <span className="text-emerald-300 font-semibold"> quantum interfaces</span>, creating immersive experiences with 
          <span className="text-blue-300 font-semibold"> dimensional precision</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              <span>🔮 ACTIVATE HOLOGRAM</span>
              <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-purple-400/50 text-purple-200 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300">
            <span className="flex items-center gap-3">
              <span>⚡ EXPLORE QUANTUM</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </span>
          </button>
        </div>

        {/* Holographic Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Quantum Frequency */}
          <div className="p-6 border border-purple-400/30 bg-purple-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-purple-300 mb-2">∞ QHz</div>
            <div className="text-sm text-slate-400 mb-3">Quantum Frequency</div>
            <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-holo-progress"></div>
            </div>
          </div>

          {/* Hologram Stability */}
          <div className="p-6 border border-emerald-400/30 bg-emerald-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-emerald-300 mb-2">🔮 99.9%</div>
            <div className="text-sm text-slate-400 mb-3">Hologram Stability</div>
            <div className="w-full h-2 bg-emerald-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-holo-progress" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Dimensional Layers */}
          <div className="p-6 border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-blue-300 mb-2">247.8K</div>
            <div className="text-sm text-slate-400 mb-3">Dimensional Layers</div>
            <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-holo-progress" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Quantum Status Indicator */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">QUANTUM HOLOGRAM STATUS: STABLE</span>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full animate-holo-flow"></div>
            <span className="text-emerald-300 text-sm">🔮 DIMENSIONAL MATRIX ONLINE</span>
          </div>
        </div>
      </div>

      {/* Corner Holographic Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border-2 border-purple-400/50 rounded-full bg-purple-400/10 backdrop-blur-sm flex items-center justify-center animate-holo-spin">
          <div className="w-8 h-8 border border-emerald-400/70 rounded-full bg-emerald-400/20 animate-holo-drift"></div>
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="w-12 h-12 border border-blue-400/50 rounded-full bg-blue-400/10 backdrop-blur-sm animate-holo-pulse"></div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="w-20 h-4 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full animate-holo-wave"></div>
      </div>

      <div className="absolute bottom-8 right-8">
        <div className="w-14 h-14 border-2 border-emerald-400/40 rounded-full bg-emerald-400/5 backdrop-blur-sm flex items-center justify-center animate-holo-drift">
          <span className="text-emerald-400 text-xs font-bold">🔮</span>
        </div>
      </div>
    </section>
  );
} 