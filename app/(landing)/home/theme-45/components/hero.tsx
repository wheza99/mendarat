'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center z-10">
      <div className="container mx-auto px-6 text-center">
        {/* Floating Bio Cells */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 cell-division opacity-20"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                backgroundColor: '#10B981',
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Tagline */}
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 organic-border text-emerald-300 text-lg font-medium tracking-wider">
              🧬 BIOLOGICAL INNOVATION • ORGANIC TECHNOLOGY 🧬
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 bio-glow leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300">
              BIOPUNK
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-green-300">
              EVOLUTION
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Merging biological systems with advanced technology to create 
            <span className="text-teal-300 font-semibold"> symbiotic solutions </span> 
            for tomorrow's challenges. Experience the fusion of nature and innovation.
          </p>

          {/* Bio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { label: 'Bio Compounds', value: '∞', unit: 'Active' },
              { label: 'Neural Networks', value: '99.7%', unit: 'Synced' },
              { label: 'DNA Sequences', value: '2.8M+', unit: 'Analyzed' },
              { label: 'Evolution Rate', value: '847x', unit: 'Accelerated' }
            ].map((stat, index) => (
              <div key={index} className="bio-card p-6 organic-pulse text-center">
                <div className="text-3xl font-bold text-emerald-300 mb-2">{stat.value}</div>
                <div className="text-sm text-emerald-200 mb-1">{stat.label}</div>
                <div className="text-xs text-teal-400">{stat.unit}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 organic-border text-white font-bold text-lg transition-all duration-300 hover:scale-105 organic-pulse">
              <span className="relative z-10">🧬 EXPLORE BIO-TECH</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 organic-border" />
            </button>
            
            <button className="group px-12 py-4 border-2 border-emerald-400 organic-border text-emerald-300 font-bold text-lg transition-all duration-300 hover:bg-emerald-400/10 hover:scale-105">
              <span className="flex items-center gap-3">
                🔬 RESEARCH LAB
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>

          {/* Floating Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-emerald-300 animate-bounce">
              <span className="text-sm tracking-wider">DISCOVER THE SYMBIOSIS</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Organic DNA Strand */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div className="w-1 h-32 bg-gradient-to-t from-transparent via-emerald-400 to-transparent relative">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-emerald-400 rounded-full"
                style={{
                  left: i % 2 === 0 ? '-6px' : '4px',
                  top: `${i * 16}px`,
                  animation: `organic-pulse ${2 + Math.random()}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 