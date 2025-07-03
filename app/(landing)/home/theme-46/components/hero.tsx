'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Hero Background Effects */}
      <div className="absolute inset-0">
        {/* Central Hologram */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 holo-shift">
          <div className="w-full h-full border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 via-blue-500/20 to-purple-500/10 cyber-pulse" 
               style={{
                 clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
               }}>
            <div className="absolute inset-4 border border-cyan-300/30 bg-black/30"
                 style={{
                   clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'
                 }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold neon-glow">46</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Data Points */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full cyber-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `data-stream ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 neon-glow">
            CYBER
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 glitch-shake">
              NOIR
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 cyber-pulse" />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Step into the{" "}
          <span className="text-cyan-400 neon-glow font-semibold">digital underground</span>
          {" "}where technology meets mystery. Experience the future through a noir lens.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-black overflow-hidden cyber-pulse hover:scale-105 transition-all duration-300">
            <span className="relative z-10">Enter the Matrix</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 glitch-shake">
            <span className="relative z-10">Explore Systems</span>
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
        
        {/* Status Indicators */}
        <div className="mt-16 flex justify-center items-center gap-8 text-sm font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400">SYSTEMS ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400">NEURAL LINK ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400">QUANTUM READY</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center cyber-pulse">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
} 