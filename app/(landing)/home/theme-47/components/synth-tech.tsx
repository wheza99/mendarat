'use client';

export default function SynthTech() {
  const technologies = [
    {
      name: "Neural Synthesizer",
      description: "Advanced AI music generation using retro-futuristic algorithms",
      progress: 95,
      year: "1987",
      status: "ACTIVE"
    },
    {
      name: "Hologram Display",
      description: "3D projection system with authentic 80s wireframe aesthetics",
      progress: 88,
      year: "1985",
      status: "ONLINE"
    },
    {
      name: "Neon Interface",
      description: "Glowing user interface with customizable color schemes",
      progress: 92,
      year: "1983",
      status: "READY"
    },
    {
      name: "Time Capsule",
      description: "Digital preservation of retro computing experiences",
      progress: 78,
      year: "1989",
      status: "BETA"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Tech Background */}
      <div className="absolute inset-0">
        {/* Circuit Patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          {/* Circuit Lines */}
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <line
                x1={Math.random() * 1000}
                y1={Math.random() * 1000}
                x2={Math.random() * 1000}
                y2={Math.random() * 1000}
                stroke="#FF00FF"
                strokeWidth="2"
                strokeDasharray="10,5"
                className="animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
              <circle
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="4"
                fill="#00FFFF"
                className="animate-pulse"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-mono">
            <span className="neon-text-cyan">SYNTH</span>{" "}
            <span className="neon-text-pink">TECH</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="w-8 h-2 bg-pink-400 retro-glow" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Experience technology from the future as imagined in the past
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{
                animation: `retro-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              {/* Main Card */}
              <div className="relative border-2 border-pink-400 bg-black/80 p-8 retro-glow hover:border-cyan-400 transition-all duration-500">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold neon-text-pink font-mono mb-2">
                      {tech.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm font-mono">
                      <span className="text-cyan-400">EST. {tech.year}</span>
                      <span className={`px-2 py-1 border ${
                        tech.status === 'ACTIVE' ? 'border-green-400 text-green-400' :
                        tech.status === 'ONLINE' ? 'border-blue-400 text-blue-400' :
                        tech.status === 'READY' ? 'border-yellow-400 text-yellow-400' :
                        'border-purple-400 text-purple-400'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Circle */}
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#333"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#00FFFF"
                        strokeWidth="2"
                        strokeDasharray={`${tech.progress}, 100`}
                        className="neon-glow-cyan"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-cyan-400 font-mono font-bold text-sm">
                        {tech.progress}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Tech Specs */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-gray-400">COMPATIBILITY:</span>
                    <span className="text-green-400">UNIVERSAL</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-gray-400">POWER_LEVEL:</span>
                    <span className="text-yellow-400">9000+</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-gray-400">NEON_FACTOR:</span>
                    <span className="text-pink-400">MAXIMUM</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                    <span>INSTALLATION PROGRESS</span>
                    <span>{tech.progress}%</span>
                  </div>
                  <div className="w-full h-2 border border-cyan-400 bg-black">
                    <div 
                      className="h-full synthwave-gradient transition-all duration-1000"
                      style={{ width: `${tech.progress}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 border-2 border-purple-400 bg-black hover:bg-purple-400 hover:text-black transition-all duration-300 font-mono font-bold retro-glow">
                  INITIALIZE SYSTEM
                </button>

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Retro Computer Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="border-4 border-gray-600 bg-gray-800 p-4 rounded-lg retro-glow">
            {/* Monitor Bezel */}
            <div className="border-2 border-black bg-black p-8 rounded">
              {/* Screen Content */}
              <div className="bg-black border-2 border-green-400 p-6 font-mono text-green-400">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-lg font-bold">SYNTHTECH_OS v1.987</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>&gt; BOOTING RETRO SYSTEM...</div>
                  <div>&gt; LOADING NEON DRIVERS... OK</div>
                  <div>&gt; INITIALIZING SYNTHWAVE MODULE... OK</div>
                  <div>&gt; CONNECTING TO MAINFRAME... OK</div>
                  <div className="text-cyan-400">&gt; SYSTEM READY FOR TIME TRAVEL</div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="border border-pink-400 p-2">
                    <div className="text-pink-400 font-bold">CPU</div>
                    <div className="text-xs">Z80 @ 4MHz</div>
                  </div>
                  <div className="border border-cyan-400 p-2">
                    <div className="text-cyan-400 font-bold">RAM</div>
                    <div className="text-xs">64KB</div>
                  </div>
                  <div className="border border-yellow-400 p-2">
                    <div className="text-yellow-400 font-bold">GFX</div>
                    <div className="text-xs">256 Colors</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="animate-pulse">█</span>
                </div>
              </div>
            </div>
            
            {/* Monitor Stand */}
            <div className="flex justify-center mt-4">
              <div className="w-24 h-8 bg-gray-600 rounded-b-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 