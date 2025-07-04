'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Cyber Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-cyber-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400/12 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Theme Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-green-400/30 bg-green-950/50 backdrop-blur-sm rounded-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center animate-cyber-spin">
              <span className="text-sm font-bold text-black">52</span>
            </div>
            <span className="text-green-200 font-medium">CYBER NEURAL MATRIX</span>
          </div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-300 text-sm">⚡ NEURAL LINK ACTIVE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 animate-cyber-gradient">
            CYBER
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 animate-cyber-gradient" style={{ animationDelay: '1s' }}>
            MATRIX
          </span>
        </h1>

        {/* Cyber Separators */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full animate-cyber-flow" />
          <div className="w-12 h-12 border-2 border-cyan-400 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center animate-cyber-spin">
            <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="w-20 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-cyber-wave" />
          <div className="w-8 h-8 border border-green-400 rounded-full bg-green-400/30 backdrop-blur-sm animate-cyber-drift"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-cyber-flow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Enter the <span className="text-green-300 font-semibold">digital matrix</span> through advanced 
          <span className="text-cyan-300 font-semibold"> neural interfaces</span>, accessing unlimited 
          <span className="text-pink-300 font-semibold"> cyber capabilities</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              <span>⚡ ENTER MATRIX</span>
              <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-green-400/50 text-green-200 rounded-full font-semibold text-lg hover:bg-green-400/10 transition-all duration-300">
            <span className="flex items-center gap-3">
              <span>🔬 NEURAL SCAN</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </span>
          </button>
        </div>

        {/* Cyber Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Neural Processing */}
          <div className="p-6 border border-green-400/30 bg-green-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-green-300 mb-2">∞ THz</div>
            <div className="text-sm text-slate-400 mb-3">Neural Processing</div>
            <div className="w-full h-2 bg-green-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-cyber-progress"></div>
            </div>
          </div>

          {/* Matrix Stability */}
          <div className="p-6 border border-cyan-400/30 bg-cyan-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-cyan-300 mb-2">⚡ 99.8%</div>
            <div className="text-sm text-slate-400 mb-3">Matrix Stability</div>
            <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-cyber-progress" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Cyber Nodes */}
          <div className="p-6 border border-pink-400/30 bg-pink-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-pink-300 mb-2">888.7K</div>
            <div className="text-sm text-slate-400 mb-3">Cyber Nodes</div>
            <div className="w-full h-2 bg-pink-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-400 to-green-400 rounded-full animate-cyber-progress" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Neural Status Indicator */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">NEURAL MATRIX STATUS: ONLINE</span>
            <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-cyber-flow"></div>
            <span className="text-cyan-300 text-sm">⚡ CYBER LINK ESTABLISHED</span>
          </div>
        </div>
      </div>

      {/* Corner Cyber Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border-2 border-green-400/50 rounded-full bg-green-400/10 backdrop-blur-sm flex items-center justify-center animate-cyber-spin">
          <div className="w-8 h-8 border border-cyan-400/70 rounded-full bg-cyan-400/20 animate-cyber-drift"></div>
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="w-12 h-12 border border-cyan-400/50 rounded-full bg-cyan-400/10 backdrop-blur-sm animate-cyber-pulse"></div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="w-20 h-4 bg-gradient-to-r from-pink-400/30 to-green-400/30 rounded-full animate-cyber-wave"></div>
      </div>

      <div className="absolute bottom-8 right-8">
        <div className="w-14 h-14 border-2 border-pink-400/40 rounded-full bg-pink-400/5 backdrop-blur-sm flex items-center justify-center animate-cyber-drift">
          <span className="text-pink-400 text-xs font-bold">⚡</span>
        </div>
      </div>
    </section>
  );
} 