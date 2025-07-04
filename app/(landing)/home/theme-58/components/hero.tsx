export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Solar Flare Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 mb-8 animate-solar-pulse">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm animate-solar-spin">
            58
          </div>
          <span className="text-orange-200 font-medium tracking-wider">SOLAR FLARE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-solar-fade-in">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            SOLAR
          </span>
          <br />
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            FLARE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-orange-200/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-solar-slide-in">
          Harness the unlimited power of solar fusion technology with plasma-driven systems 
          and corona energy processing for next-generation computational excellence.
        </p>

        {/* Solar Separators */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-500 animate-solar-flow"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400 animate-solar-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-red-400 animate-solar-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400 animate-solar-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-l from-transparent to-red-500 animate-solar-flow"></div>
        </div>

        {/* Solar Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2 animate-solar-count">
              5,778K
            </div>
            <div className="text-orange-300/70 uppercase tracking-wider text-sm">Core Temperature</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent mb-2 animate-solar-count" style={{ animationDelay: '1s' }}>
              ∞ MW
            </div>
            <div className="text-orange-300/70 uppercase tracking-wider text-sm">Fusion Output</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2 animate-solar-count" style={{ animationDelay: '2s' }}>
              ☉ Corona
            </div>
            <div className="text-orange-300/70 uppercase tracking-wider text-sm">Plasma Fields</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition-all duration-300 font-semibold text-white shadow-lg hover:shadow-orange-500/25 hover:scale-105 animate-solar-fade-in">
            <span className="flex items-center gap-2">
              Ignite Fusion Core
              <div className="w-2 h-2 rounded-full bg-white animate-solar-pulse"></div>
            </span>
          </button>
          <button className="group px-8 py-4 rounded-xl border border-orange-400/50 hover:border-orange-400 transition-all duration-300 font-semibold text-orange-300 hover:text-white backdrop-blur-sm hover:bg-orange-500/10 animate-solar-fade-in">
            Solar Specifications
          </button>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-orange-500/30 animate-solar-fade"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-red-500/30 animate-solar-fade"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-yellow-500/30 animate-solar-fade"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-orange-500/30 animate-solar-fade"></div>

        {/* Solar Crystals */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-solar-crystal opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full animate-solar-crystal opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-solar-crystal opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
} 