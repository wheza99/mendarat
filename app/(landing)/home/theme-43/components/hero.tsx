export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading with Swiss typography */}
        <div className="mb-16">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-gray-900 mb-8 clean-slide">
            DESIGN
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-8 type-reveal" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 tracking-wide clean-slide" style={{ animationDelay: '0.2s' }}>
            SIMPLICITY IN PERFECTION
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-16 clean-slide" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed">
            Where form meets function. Creating timeless digital experiences 
            through the principles of Swiss design methodology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20 clean-slide" style={{ animationDelay: '0.6s' }}>
          <button className="group px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse">
            <span className="flex items-center gap-3">
              VIEW PORTFOLIO
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="px-12 py-4 border border-gray-300 text-gray-700 font-light tracking-wide hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
            DISCOVER MORE
          </button>
        </div>

        {/* Design principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto clean-slide" style={{ animationDelay: '0.8s' }}>
          {[
            {
              number: "01",
              principle: "MINIMALISM",
              description: "Less is more. Every element serves a purpose."
            },
            {
              number: "02", 
              principle: "HIERARCHY",
              description: "Clear visual order guides the user experience."
            },
            {
              number: "03",
              principle: "PRECISION",
              description: "Mathematical precision in every design decision."
            }
          ].map((item, index) => (
            <div key={index} className="text-left">
              <div className="text-4xl font-extralight text-blue-500 mb-4 swiss-fade" style={{ animationDelay: `${1 + index * 0.2}s` }}>
                {item.number}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 tracking-wide">
                {item.principle}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Geometric accent */}
        <div className="absolute top-1/4 right-8 hidden lg:block">
          <div className="w-24 h-24 border-2 border-blue-500/20 geometric-float" />
        </div>

        <div className="absolute bottom-1/4 left-8 hidden lg:block">
          <div className="w-16 h-16 bg-gray-200/50 geometric-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 clean-slide" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gray-300" />
          <div className="text-xs text-gray-500 tracking-widest font-light">SCROLL</div>
          <svg className="w-4 h-4 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 