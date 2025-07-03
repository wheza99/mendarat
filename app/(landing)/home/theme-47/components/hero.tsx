'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute inset-0">
        {/* Retro Wireframe Objects */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-40 h-40 retro-glow">
            {/* Wireframe Cube */}
            <div className="absolute inset-0 border-2 border-pink-400 transform rotate-12 perspective-cube">
              <div className="absolute inset-0 border-2 border-cyan-400 transform translate-x-4 translate-y-4" />
            </div>
            <div className="absolute inset-4 border border-yellow-400 transform rotate-45" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="relative w-32 h-32">
            {/* Retro Pyramid */}
            <div 
              className="w-full h-full border-2 border-purple-400 neon-glow-purple"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
            <div 
              className="absolute inset-4 border border-cyan-400"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
          </div>
        </div>
        
        {/* Floating Retro Elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `vapor-drift ${6 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 && <div className="w-3 h-3 bg-pink-400 rounded-full neon-glow-pink" />}
            {i % 3 === 1 && <div className="w-6 h-1 bg-cyan-400 neon-glow-cyan" />}
            {i % 3 === 2 && <div className="w-4 h-4 border border-yellow-400 rotate-45 neon-glow-yellow" />}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Title with Retro Effect */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
              <span className="block neon-text-pink font-mono tracking-wider">
                SYNTH
              </span>
              <span className="block neon-text-cyan font-mono tracking-wider -mt-4">
                WAVE
              </span>
              <span className="block text-2xl md:text-4xl neon-text-yellow font-mono tracking-widest -mt-2">
                RETRO FUTURE
              </span>
            </h1>
            
            {/* Retro Badge */}
            <div className="absolute -top-4 -right-8 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rotate-12 retro-glow">
              <span className="text-white font-mono text-sm font-bold">47</span>
            </div>
          </div>
          
          {/* Retro Separator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            <div className="w-4 h-4 border-2 border-cyan-400 rotate-45 neon-glow-cyan" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-mono">
          Welcome to the{" "}
          <span className="neon-text-pink font-semibold">digital frontier</span>
          {" "}where{" "}
          <span className="neon-text-cyan font-semibold">retro aesthetics</span>
          {" "}meet{" "}
          <span className="neon-text-yellow font-semibold">future technology</span>
        </p>
        
        {/* Retro CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-bold text-xl overflow-hidden retro-glow hover:scale-105 transition-all duration-300 font-mono">
            <span className="relative z-10">ENTER THE GRID</span>
            <div className="absolute inset-0 synthwave-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-bold text-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 neon-glow-cyan font-mono">
            <span className="relative z-10">EXPLORE NEON</span>
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
        
        {/* Retro Status Display */}
        <div className="mt-16">
          <div className="inline-block border-2 border-purple-400 bg-black/60 p-6 retro-glow">
            <div className="grid grid-cols-3 gap-8 text-center font-mono">
              <div>
                <div className="text-2xl font-bold neon-text-pink mb-2">1987</div>
                <div className="text-gray-400 text-sm">YEAR INSPIRED</div>
              </div>
              <div>
                <div className="text-2xl font-bold neon-text-cyan mb-2">∞</div>
                <div className="text-gray-400 text-sm">POSSIBILITIES</div>
              </div>
              <div>
                <div className="text-2xl font-bold neon-text-yellow mb-2">100%</div>
                <div className="text-gray-400 text-sm">RETRO VIBES</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Retro Progress Bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex items-center gap-4 text-sm font-mono text-gray-400 mb-2">
            <span>LOADING NOSTALGIA...</span>
            <span className="neon-text-cyan">100%</span>
          </div>
          <div className="w-full h-2 border border-pink-400 bg-black">
            <div 
              className="h-full synthwave-gradient"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      
      {/* Retro Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center retro-glow">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
          <div className="text-cyan-400 font-mono text-xs mt-2 tracking-wider">
            SCROLL DOWN
          </div>
        </div>
      </div>
      
      {/* Retro Corner Decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-16 h-16 border-l-4 border-t-4 border-pink-400 neon-glow-pink" />
      </div>
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border-r-4 border-t-4 border-cyan-400 neon-glow-cyan" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 border-l-4 border-b-4 border-yellow-400 neon-glow-yellow" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 border-r-4 border-b-4 border-purple-400 neon-glow-purple" />
      </div>
    </section>
  );
} 