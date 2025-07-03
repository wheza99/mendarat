export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Art Deco ornament top */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent luxury-glow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-yellow-400 rotate-45 bg-yellow-400/20 deco-pulse" />
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="block mb-2 text-yellow-400 luxury-glow" style={{
            fontFamily: 'serif',
            letterSpacing: '0.1em'
          }}>
            ÉLÉGANCE
          </span>
          <span className="block text-3xl md:text-4xl font-light tracking-widest text-gray-300">
            INTEMPORELLE
          </span>
          
          {/* Decorative lines */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="w-16 h-px bg-gradient-to-r from-yellow-400 to-transparent" />
            <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-transparent mt-2" />
            <div className="w-8 h-px bg-gradient-to-r from-yellow-400 to-transparent mt-2" />
          </div>
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="w-16 h-px bg-gradient-to-l from-yellow-400 to-transparent" />
            <div className="w-12 h-px bg-gradient-to-l from-yellow-400 to-transparent mt-2" />
            <div className="w-8 h-px bg-gradient-to-l from-yellow-400 to-transparent mt-2" />
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed" style={{
          fontFamily: 'serif',
          fontStyle: 'italic'
        }}>
          "L'art de vivre dans l'excellence et la sophistication depuis 1925"
        </p>

        {/* Luxury stats */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mb-12 flex-wrap">
          <div className="text-center deco-pulse">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">98</div>
            <div className="text-sm text-gray-400 tracking-wider">ANNÉES D'EXCELLENCE</div>
          </div>
          <div className="w-px h-12 bg-yellow-400/30 hidden md:block" />
          <div className="text-center deco-pulse">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">1925</div>
            <div className="text-sm text-gray-400 tracking-wider">FONDATION</div>
          </div>
          <div className="w-px h-12 bg-yellow-400/30 hidden md:block" />
          <div className="text-center deco-pulse">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">∞</div>
            <div className="text-sm text-gray-400 tracking-wider">ÉLÉGANCE</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 golden-shimmer">
            <span className="relative z-10 font-medium tracking-wider">DÉCOUVRIR LA COLLECTION</span>
            <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button className="px-8 py-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300 relative vintage-swing">
            <span className="border-b border-gray-600 hover:border-yellow-400 transition-colors duration-300 tracking-wider">
              NOTRE HÉRITAGE
            </span>
          </button>
        </div>

        {/* Art Deco ornament bottom */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-24 h-24 border border-yellow-400/30 rotate-45 deco-scale">
              <div className="absolute inset-2 border border-yellow-400/50 rotate-45">
                <div className="absolute inset-2 border border-yellow-400/70 rotate-45">
                  <div className="absolute inset-2 bg-yellow-400/20 rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 