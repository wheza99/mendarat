'use client';

export default function RetroGrid() {
  const gridStats = [
    {
      label: "Pixels Generated",
      value: "2,048,576",
      unit: "PX",
      color: "pink"
    },
    {
      label: "Neon Intensity",
      value: "87.5",
      unit: "%",
      color: "cyan"
    },
    {
      label: "Retro Factor",
      value: "9,999",
      unit: "RF",
      color: "yellow"
    },
    {
      label: "Synthwave Level",
      value: "∞",
      unit: "SW",
      color: "purple"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Grid Background */}
      <div className="absolute inset-0">
        {/* 3D Perspective Grid */}
        <div className="absolute inset-0 perspective-1000">
          <div 
            className="w-full h-full opacity-40 transform rotateX-60"
            style={{
              background: `
                linear-gradient(rgba(255, 0, 255, 0.3) 2px, transparent 2px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.3) 2px, transparent 2px)
              `,
              backgroundSize: '80px 80px',
              transformStyle: 'preserve-3d'
            }}
          />
        </div>
        
        {/* Floating Grid Cubes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `retro-float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 border-2 border-pink-400 transform rotate-12 retro-glow" />
              <div className="absolute inset-0 border border-cyan-400 transform rotate-45 translate-x-2 translate-y-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-mono">
            <span className="neon-text-pink">RETRO</span>{" "}
            <span className="neon-text-cyan">GRID</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            <div className="w-6 h-6 border-2 border-yellow-400 rotate-45 neon-glow-yellow" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Navigate through the digital landscape of the 80s future
          </p>
        </div>

        {/* Grid Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {gridStats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{
                animation: `retro-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className={`p-8 border-2 bg-black/60 retro-glow relative overflow-hidden ${
                stat.color === 'pink' ? 'border-pink-400' :
                stat.color === 'cyan' ? 'border-cyan-400' :
                stat.color === 'yellow' ? 'border-yellow-400' :
                'border-purple-400'
              }`}>
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/50" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/50" />
                
                <div className="text-center relative z-10">
                  <div className={`text-3xl font-bold font-mono mb-2 ${
                    stat.color === 'pink' ? 'neon-text-pink' :
                    stat.color === 'cyan' ? 'neon-text-cyan' :
                    stat.color === 'yellow' ? 'neon-text-yellow' :
                    'text-purple-400'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-mono text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className={`font-mono text-xs px-2 py-1 border ${
                    stat.color === 'pink' ? 'border-pink-400 text-pink-400' :
                    stat.color === 'cyan' ? 'border-cyan-400 text-cyan-400' :
                    stat.color === 'yellow' ? 'border-yellow-400 text-yellow-400' :
                    'border-purple-400 text-purple-400'
                  }`}>
                    {stat.unit}
                  </div>
                </div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        currentColor 10px,
                        currentColor 12px
                      )`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Retro Display Panel */}
        <div className="relative">
          <div className="border-4 border-pink-400 bg-black p-8 retro-glow">
            {/* Screen Header */}
            <div className="border-b-2 border-cyan-400 pb-4 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                  <h3 className="text-cyan-400 font-mono text-xl font-bold">
                    RETRO_TERMINAL.EXE
                  </h3>
                </div>
                <div className="font-mono text-gray-400 text-sm">
                  V1.987
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-4 font-mono text-sm">
              <div className="text-green-400">
                &gt; INITIALIZING SYNTHWAVE PROTOCOL...
              </div>
              <div className="text-cyan-400">
                &gt; LOADING RETRO ASSETS... [████████████] 100%
              </div>
              <div className="text-yellow-400">
                &gt; NEON GRID ACTIVATED
              </div>
              <div className="text-pink-400">
                &gt; READY FOR TIME TRAVEL TO 1987
              </div>
              
              {/* Interactive Elements */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-purple-400 font-bold">SYSTEM_STATUS:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">CPU_RETRO:</span>
                      <span className="text-green-400">OPTIMAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">NEON_LEVEL:</span>
                      <span className="text-cyan-400">MAXIMUM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">SYNTHWAVE:</span>
                      <span className="text-pink-400">ACTIVE</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-yellow-400 font-bold">GRID_MATRIX:</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-6 border ${
                          Math.random() > 0.5 ? 'border-pink-400 bg-pink-400/20' : 'border-cyan-400 bg-cyan-400/20'
                        } animate-pulse`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Screen Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Retro Action Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 border-2 border-pink-400 bg-black hover:bg-pink-400 hover:text-black transition-all duration-300 retro-glow font-mono font-bold">
              <span className="relative z-10">ACCESS GRID</span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-cyan-400 bg-black hover:bg-cyan-400 hover:text-black transition-all duration-300 retro-glow font-mono font-bold">
              <span className="relative z-10">ENTER MATRIX</span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-yellow-400 bg-black hover:bg-yellow-400 hover:text-black transition-all duration-300 retro-glow font-mono font-bold">
              <span className="relative z-10">TIME WARP</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 