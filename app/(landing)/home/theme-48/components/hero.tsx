'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      {/* Organic Hero Background */}
      <div className="absolute inset-0">
        {/* DNA Helix Strands */}
        <div className="absolute top-1/4 left-1/4 w-32 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full rotate-45 animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full -rotate-12 animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full rotate-30 animate-pulse opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Organic Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
            <span className="block animate-fade-in">
              BIO
            </span>
            <span className="block -mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              MIMETIC
            </span>
            <span className="block text-3xl md:text-5xl text-slate-600 tracking-wider -mt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              ORGANIC DESIGN
            </span>
          </h1>
          
          {/* Nature Badge */}
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full shadow-lg border border-emerald-200 rotate-1">
            <span className="text-emerald-700 font-semibold text-lg">🌿 THEME 48</span>
          </div>
        </div>
        
        {/* Organic Separator */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg" />
          <div className="w-12 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-bounce" />
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg" />
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Discover the harmony between{" "}
          <span className="text-emerald-600 font-semibold">nature's wisdom</span>
          {" "}and{" "}
          <span className="text-teal-600 font-semibold">digital innovation</span>
          {" "}through{" "}
          <span className="text-green-600 font-semibold">biomimetic design</span>
        </p>
        
        {/* Organic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="relative z-10">EXPLORE NATURE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-emerald-400 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300">
            <span className="relative z-10">LEARN BIOMIMETICS</span>
          </button>
        </div>
        
        {/* Ecosystem Stats */}
        <div className="mt-16">
          <div className="inline-block border-2 border-emerald-200 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">3.8B</div>
                <div className="text-slate-500 text-sm">YEARS OF EVOLUTION</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">∞</div>
                <div className="text-slate-500 text-sm">NATURE PATTERNS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-slate-500 text-sm">SUSTAINABLE</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Growth Indicator */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
            <span>🌱 GROWING BIOMIMETIC SOLUTIONS...</span>
            <span className="text-emerald-600 font-semibold">100%</span>
          </div>
          <div className="w-full h-3 border-2 border-emerald-200 bg-emerald-50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 w-full rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-emerald-400 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
          <div className="text-emerald-600 text-xs mt-2 tracking-wider font-medium">
            DISCOVER MORE
          </div>
        </div>
      </div>
      
      {/* Organic Corner Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border-l-4 border-t-4 border-emerald-300 rounded-tl-2xl animate-pulse" />
      </div>
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border-r-4 border-t-4 border-teal-300 rounded-tr-2xl animate-pulse" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 border-l-4 border-b-4 border-green-300 rounded-bl-2xl animate-pulse" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 border-r-4 border-b-4 border-emerald-300 rounded-br-2xl animate-pulse" />
      </div>
    </section>
  );
} 