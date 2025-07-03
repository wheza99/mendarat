'use client';

export default function VaporWave() {
  const vaporStats = [
    { label: "Aesthetic Level", value: "MAX", color: "pink" },
    { label: "Nostalgia Factor", value: "∞", color: "cyan" },
    { label: "Vibe Quality", value: "A+", color: "yellow" },
    { label: "Retro Score", value: "9.87", color: "purple" }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Vaporwave Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-pink-800/30 to-cyan-800/40" />
        
        {/* Floating Palm Trees (Simple Geometric) */}
        <div className="absolute bottom-0 left-10">
          <div className="relative">
            {/* Palm Tree Trunk */}
            <div className="w-2 h-32 bg-gradient-to-t from-yellow-600 to-yellow-400 mx-auto" />
            {/* Palm Leaves */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-1 bg-green-400 transform -rotate-45 origin-left" />
              <div className="w-16 h-1 bg-green-400 transform rotate-45 origin-right" />
              <div className="w-12 h-1 bg-green-400 transform -rotate-12 origin-center mt-1" />
              <div className="w-12 h-1 bg-green-400 transform rotate-12 origin-center" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-16">
          <div className="relative">
            <div className="w-2 h-24 bg-gradient-to-t from-yellow-600 to-yellow-400 mx-auto" />
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-1 bg-green-400 transform -rotate-45 origin-left" />
              <div className="w-12 h-1 bg-green-400 transform rotate-45 origin-right" />
              <div className="w-8 h-1 bg-green-400 transform -rotate-12 origin-center mt-1" />
            </div>
          </div>
        </div>
        
        {/* Retro Shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animation: `vapor-drift ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            {i % 5 === 0 && (
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 transform rotate-45 neon-glow-pink" />
            )}
            {i % 5 === 1 && (
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full neon-glow-cyan" />
            )}
            {i % 5 === 2 && (
              <div 
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 neon-glow-yellow"
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              />
            )}
            {i % 5 === 3 && (
              <div className="w-12 h-2 bg-gradient-to-r from-purple-400 to-pink-500 neon-glow-purple" />
            )}
            {i % 5 === 4 && (
              <div className="w-6 h-6 border-2 border-cyan-400 transform rotate-12 neon-glow-cyan" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-mono">
            <span className="neon-text-pink">VAPOR</span>
            <span className="neon-text-cyan">WAVE</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            <div 
              className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 transform rotate-45"
              style={{ animation: 'retro-glow 3s ease-in-out infinite' }}
            />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            A E S T H E T I C &nbsp;&nbsp;•&nbsp;&nbsp; N O S T A L G I A &nbsp;&nbsp;•&nbsp;&nbsp; V I B E S
          </p>
        </div>

        {/* Vaporwave Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {vaporStats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{
                animation: `retro-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              <div className={`relative p-8 border-2 bg-black/60 text-center retro-glow ${
                stat.color === 'pink' ? 'border-pink-400' :
                stat.color === 'cyan' ? 'border-cyan-400' :
                stat.color === 'yellow' ? 'border-yellow-400' :
                'border-purple-400'
              }`}>
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/50" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white/50" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/50" />
                
                <div className={`text-4xl font-bold font-mono mb-3 ${
                  stat.color === 'pink' ? 'neon-text-pink' :
                  stat.color === 'cyan' ? 'neon-text-cyan' :
                  stat.color === 'yellow' ? 'neon-text-yellow' :
                  'text-purple-400'
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-mono text-sm tracking-wider">
                  {stat.label.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Retro Cassette Player */}
        <div className="relative max-w-2xl mx-auto mb-20">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-4 border-gray-600 rounded-lg p-8 retro-glow">
            {/* Cassette Player Top */}
            <div className="bg-black border-2 border-gray-500 rounded p-6 mb-6">
              <div className="flex items-center justify-center gap-8 mb-6">
                {/* Cassette Reels */}
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-400 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full bg-gray-600" />
                  </div>
                  <div className="absolute inset-0 border-4 border-pink-400 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-400 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full bg-gray-600" />
                  </div>
                  <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                </div>
              </div>
              
              {/* Cassette Window */}
              <div className="bg-gray-800 border border-gray-500 p-3 text-center">
                <div className="text-pink-400 font-mono text-sm mb-1">NOW PLAYING:</div>
                <div className="text-cyan-400 font-mono font-bold">SYNTHWAVE MIX 47</div>
                <div className="text-yellow-400 font-mono text-xs">SIDE A • TRACK 05</div>
              </div>
            </div>
            
            {/* Control Buttons */}
            <div className="flex justify-center gap-4">
              {[
                { label: '⏮', color: 'pink' },
                { label: '⏸', color: 'yellow' },
                { label: '▶', color: 'green' },
                { label: '⏹', color: 'red' },
                { label: '⏭', color: 'cyan' }
              ].map((button, i) => (
                <button
                  key={i}
                  className={`w-12 h-12 border-2 bg-black font-bold text-lg hover:scale-110 transition-all duration-200 ${
                    button.color === 'pink' ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black' :
                    button.color === 'yellow' ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' :
                    button.color === 'green' ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black' :
                    button.color === 'red' ? 'border-red-400 text-red-400 hover:bg-red-400 hover:text-black' :
                    'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
            
            {/* Volume Sliders */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-gray-400 font-mono text-xs mb-2">BASS</div>
                <div className="w-2 h-16 bg-gray-700 border border-gray-500 mx-auto relative">
                  <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-pink-400 to-purple-500" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 font-mono text-xs mb-2">MID</div>
                <div className="w-2 h-16 bg-gray-700 border border-gray-500 mx-auto relative">
                  <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-cyan-400 to-blue-500" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 font-mono text-xs mb-2">HIGH</div>
                <div className="w-2 h-16 bg-gray-700 border border-gray-500 mx-auto relative">
                  <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-yellow-400 to-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retro TV Screen */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gray-800 border-8 border-gray-600 rounded-lg p-4">
            {/* TV Screen */}
            <div className="bg-black border-4 border-gray-700 rounded p-8 relative overflow-hidden">
              {/* Static Effect */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(100)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${0.5 + Math.random() * 1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Screen Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl font-bold font-mono mb-4 synthwave-gradient bg-clip-text text-transparent">
                  WELCOME TO 1987
                </div>
                <div className="text-gray-300 font-mono mb-6">
                  You are now entering the retro dimension
                </div>
                
                {/* Retro Progress Bar */}
                <div className="max-w-md mx-auto mb-6">
                  <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
                    <span>LOADING AESTHETIC...</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-3 border-2 border-pink-400 bg-black">
                    <div className="h-full synthwave-gradient" />
                  </div>
                </div>
                
                <div className="text-pink-400 font-mono text-sm animate-pulse">
                  [ PRESS ANY KEY TO CONTINUE ]
                </div>
              </div>
              
              {/* TV Scanlines */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div 
                  className="w-full h-full"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255, 255, 255, 0.1) 4px, rgba(255, 255, 255, 0.1) 6px)'
                  }}
                />
              </div>
            </div>
            
            {/* TV Controls */}
            <div className="flex justify-between items-center mt-4 px-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-500" />
                <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-500" />
              </div>
              <div className="text-gray-400 font-mono text-sm">
                RETRO-VISION™ v47
              </div>
              <div className="w-6 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 