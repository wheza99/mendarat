export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Bioluminescent Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border border-cyan-400/30 mb-8 animate-bio-pulse">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm animate-bio-glow">
            59
          </div>
          <span className="text-cyan-200 font-medium tracking-wider">BIOLUMINESCENT</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-bio-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-400 bg-clip-text text-transparent">
            DEEP
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
            OCEAN
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-cyan-200/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-bio-slide-in">
          Dive into the mysterious depths of bioluminescent technology where underwater 
          ecosystems meet advanced computational intelligence in perfect harmony.
        </p>

        {/* Ocean Separators */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent to-cyan-500 animate-bio-flow"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bio-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-bio-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-4 h-4 rounded-full bg-blue-400 animate-bio-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-l from-transparent to-teal-500 animate-bio-flow"></div>
        </div>

        {/* Ocean Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-2 animate-bio-count">
              11,000m
            </div>
            <div className="text-cyan-300/70 uppercase tracking-wider text-sm">Ocean Depth</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '1s' }}>
              ∞ Lux
            </div>
            <div className="text-cyan-300/70 uppercase tracking-wider text-sm">Bio Luminosity</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2 animate-bio-count" style={{ animationDelay: '2s' }}>
              🌊 Current
            </div>
            <div className="text-cyan-300/70 uppercase tracking-wider text-sm">Deep Streams</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 transition-all duration-300 font-semibold text-white shadow-lg hover:shadow-cyan-500/25 hover:scale-105 animate-bio-fade-in">
            <span className="flex items-center gap-2">
              Dive Into Depths
              <div className="w-2 h-2 rounded-full bg-white animate-bio-pulse"></div>
            </span>
          </button>
          <button className="group px-8 py-4 rounded-xl border border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 font-semibold text-cyan-300 hover:text-white backdrop-blur-sm hover:bg-cyan-500/10 animate-bio-fade-in">
            Ocean Explorer
          </button>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30 animate-bio-fade"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-teal-500/30 animate-bio-fade"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-blue-500/30 animate-bio-fade"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30 animate-bio-fade"></div>

        {/* Bioluminescent Orbs */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full animate-bio-crystal opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-bio-crystal opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bio-crystal opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
} 