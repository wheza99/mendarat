'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Ocean Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-ocean-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-ocean-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/18 rounded-full blur-3xl animate-ocean-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Theme Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border border-blue-400/30 bg-blue-950/50 backdrop-blur-sm rounded-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center animate-ocean-spin">
              <span className="text-sm font-bold text-white">54</span>
            </div>
            <span className="text-blue-200 font-medium">DIGITAL OCEAN</span>
          </div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <span className="text-teal-300 text-sm">🌊 UNDERWATER</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 animate-ocean-gradient">
            DIGITAL
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 animate-ocean-gradient" style={{ animationDelay: '1s' }}>
            OCEAN
          </span>
        </h1>

        {/* Aquatic Separators */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full animate-ocean-flow" />
          <div className="w-14 h-14 border-2 border-teal-400 rounded-full bg-teal-400/20 backdrop-blur-sm flex items-center justify-center animate-ocean-spin">
            <div className="w-8 h-8 bg-teal-400 rounded-full animate-pulse"></div>
          </div>
          <div className="w-24 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ocean-wave" />
          <div className="w-10 h-10 border border-blue-400 rounded-full bg-blue-400/30 backdrop-blur-sm animate-ocean-drift"></div>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-ocean-flow" style={{ animationDelay: '3s' }} />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Dive into the <span className="text-blue-300 font-semibold">digital depths</span> where 
          <span className="text-teal-300 font-semibold"> data streams flow</span> like ocean currents through 
          <span className="text-cyan-300 font-semibold"> infinite underwater realms</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              <span>🌊 DIVE DEEPER</span>
              <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"></div>
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-blue-400/50 text-blue-200 rounded-full font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300">
            <span className="flex items-center gap-3">
              <span>💧 EXPLORE DEPTHS</span>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            </span>
          </button>
        </div>

        {/* Ocean Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Data Depth */}
          <div className="p-6 border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-blue-300 mb-2">∞ Meters</div>
            <div className="text-sm text-slate-400 mb-3">Data Depth</div>
            <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-ocean-progress"></div>
            </div>
          </div>

          {/* Current Flow */}
          <div className="p-6 border border-teal-400/30 bg-teal-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-teal-300 mb-2">🌊 99.2%</div>
            <div className="text-sm text-slate-400 mb-3">Current Flow</div>
            <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ocean-progress" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Aqua Nodes */}
          <div className="p-6 border border-cyan-400/30 bg-cyan-950/30 backdrop-blur-sm rounded-2xl">
            <div className="text-3xl font-bold text-cyan-300 mb-2">888.9K</div>
            <div className="text-sm text-slate-400 mb-3">Aqua Nodes</div>
            <div className="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ocean-progress" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Ocean Status Indicator */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">DIGITAL OCEAN STATUS: FLOWING</span>
            <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-ocean-flow"></div>
            <span className="text-teal-300 text-sm">🌊 UNDERWATER LINK STABLE</span>
          </div>
        </div>
      </div>

      {/* Corner Ocean Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-18 h-18 border-2 border-blue-400/50 rounded-full bg-blue-400/10 backdrop-blur-sm flex items-center justify-center animate-ocean-spin">
          <div className="w-10 h-10 border border-teal-400/70 rounded-full bg-teal-400/20 animate-ocean-drift"></div>
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="w-14 h-14 border border-teal-400/50 rounded-full bg-teal-400/10 backdrop-blur-sm animate-ocean-pulse"></div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="w-24 h-4 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full animate-ocean-wave"></div>
      </div>

      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 border-2 border-cyan-400/40 rounded-full bg-cyan-400/5 backdrop-blur-sm flex items-center justify-center animate-ocean-drift">
          <span className="text-cyan-400 text-sm font-bold">🌊</span>
        </div>
      </div>
    </section>
  );
} 