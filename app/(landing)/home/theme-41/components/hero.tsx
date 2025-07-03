// Cyberpunk Hero Component
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Cyberpunk hero background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      {/* Neon geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400 rotate-45 neon-pulse opacity-30" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-pink-400 rotate-12 neon-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-yellow-400 rotate-45 neon-pulse opacity-25" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Glitch effect title */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mb-4 cyber-glitch">
            CYBER
          </h1>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 neon-pulse">
            FUTURE
          </h1>
          
          {/* Glitch overlay */}
          <div className="absolute inset-0 text-6xl md:text-8xl font-black text-red-400 opacity-30 cyber-glitch" style={{ animationDelay: '0.1s' }}>
            CYBER
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-2xl mx-auto leading-relaxed hologram-flicker">
          Welcome to the digital frontier where technology meets imagination. 
          Experience the future of web development in a cyberpunk world.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">ENTER THE MATRIX</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 neon-pulse">
            <span className="relative z-10">EXPLORE TECH</span>
            <div className="absolute inset-0 bg-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
        
        {/* Floating data stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { label: 'NEURAL NETWORKS', value: '∞', color: 'text-cyan-400' },
            { label: 'DATA STREAMS', value: '1337', color: 'text-pink-400' },
            { label: 'QUANTUM BITS', value: '2048', color: 'text-purple-400' },
            { label: 'CYBER NODES', value: '9001', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className={`text-3xl md:text-4xl font-black ${stat.color} neon-pulse hologram-flicker`} style={{ animationDelay: `${index * 0.5}s` }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60 data-particle" />
      <div className="absolute bottom-1/4 right-0 w-1 h-24 bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-60 data-particle" style={{ animationDelay: '2s' }} />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-cyan-400 text-sm mt-2 neon-pulse">SCROLL DOWN</p>
      </div>
    </section>
  );
} 