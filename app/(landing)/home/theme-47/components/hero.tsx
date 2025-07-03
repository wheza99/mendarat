'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      {/* Hero Background Elements */}
      <div className="absolute inset-0">
        {/* Simple Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-pink-400 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-cyan-400 rotate-45 animate-bounce"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 font-mono">
            <span className="block text-pink-500 tracking-wider animate-pulse">
              SYNTH
            </span>
            <span className="block text-cyan-400 tracking-wider -mt-4 animate-pulse">
              WAVE
            </span>
            <span className="block text-2xl md:text-4xl text-yellow-400 tracking-widest -mt-2 animate-pulse">
              RETRO FUTURE
            </span>
          </h1>
          
          {/* Theme Badge */}
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded rotate-12 shadow-lg">
            <span className="text-white font-mono text-sm font-bold">THEME 47</span>
          </div>
        </div>
        
        {/* Separator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          <div className="w-4 h-4 border-2 border-cyan-400 rotate-45 animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-mono">
          Welcome to the{" "}
          <span className="text-pink-400 font-semibold">digital frontier</span>
          {" "}where{" "}
          <span className="text-cyan-400 font-semibold">retro aesthetics</span>
          {" "}meet{" "}
          <span className="text-yellow-400 font-semibold">future technology</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-bold text-xl hover:scale-105 transition-all duration-300 font-mono shadow-lg">
            ENTER THE GRID
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 font-mono">
            EXPLORE NEON
          </button>
        </div>
        
        {/* Status Display */}
        <div className="mt-16">
          <div className="inline-block border-2 border-purple-400 bg-black/60 p-6 rounded shadow-lg">
            <div className="grid grid-cols-3 gap-8 text-center font-mono">
              <div>
                <div className="text-2xl font-bold text-pink-400 mb-2">1987</div>
                <div className="text-gray-400 text-sm">YEAR INSPIRED</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-gray-400 text-sm">POSSIBILITIES</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">RETRO VIBES</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex items-center gap-4 text-sm font-mono text-gray-400 mb-2">
            <span>LOADING NOSTALGIA...</span>
            <span className="text-cyan-400">100%</span>
          </div>
          <div className="w-full h-2 border border-pink-400 bg-black rounded">
            <div className="h-full bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 w-full rounded" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
          <div className="text-cyan-400 font-mono text-xs mt-2 tracking-wider">
            SCROLL DOWN
          </div>
        </div>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border-l-4 border-t-4 border-pink-400 animate-pulse" />
      </div>
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border-r-4 border-t-4 border-cyan-400 animate-pulse" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 border-l-4 border-b-4 border-yellow-400 animate-pulse" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 border-r-4 border-b-4 border-purple-400 animate-pulse" />
      </div>
    </section>
  );
} 