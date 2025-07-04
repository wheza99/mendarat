import React from 'react';

export default function SynthWaveFeatures() {
  const features = [
    {
      title: "NEON PROTOCOLS",
      description: "Advanced communication systems with luminescent data transmission capabilities.",
      gradient: "from-cyan-500 to-blue-500",
      icon: "📡"
    },
    {
      title: "RETRO CORE",
      description: "Vintage-inspired processing units enhanced with modern quantum acceleration.",
      gradient: "from-pink-500 to-purple-500",
      icon: "⚙️"
    },
    {
      title: "WAVE SYNTHESIS",
      description: "Dynamic audio-visual generation creating immersive cyberpunk experiences.",
      gradient: "from-yellow-400 to-orange-500",
      icon: "🌊"
    },
    {
      title: "CYBER SECURITY",
      description: "Military-grade protection protocols safeguarding your digital presence.",
      gradient: "from-green-400 to-emerald-500",
      icon: "🛡️"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Synthwave Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black">
        {/* Animated Wave Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffff00" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Multiple Wave Layers */}
          {Array.from({ length: 6 }, (_, i) => (
            <path
              key={i}
              d={`M0,${50 + i * 5} Q25,${30 + i * 2} 50,${50 + i * 5} T100,${50 + i * 5}`}
              stroke={i % 2 === 0 ? "url(#waveGradient1)" : "url(#waveGradient2)"}
              strokeWidth="0.5"
              fill="none"
              className="animate-retro-wave"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative mb-8">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              SYNTHWAVE TECH
            </h2>
            <div className="absolute inset-0 text-5xl sm:text-6xl font-bold text-pink-500/20 blur-lg animate-retro-glow">
              SYNTHWAVE TECH
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Immerse yourself in the nostalgic future where retro aesthetics meet cutting-edge technology
          </p>
          
          {/* Animated Divider */}
          <div className="flex justify-center items-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-3 h-3 bg-pink-500 rotate-45 animate-retro-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
            <div className="w-3 h-3 bg-yellow-400 rotate-45 animate-retro-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg p-8 overflow-hidden hover:border-pink-500/50 transition-all duration-500"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:animate-retro-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>
                
                {/* Feature Progress Bar */}
                <div className="relative">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.gradient} animate-retro-progress`}
                      style={{animationDelay: `${index * 0.5}s`}}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 font-mono">SYSTEM OPTIMAL</div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/40 group-hover:border-pink-500/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Tech Specifications */}
        <div className="bg-gradient-to-r from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-center text-cyan-400 mb-8">TECH SPECIFICATIONS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "PROCESSING POWER", value: "2.084 THz", unit: "QUANTUM" },
              { label: "MEMORY CAPACITY", value: "∞", unit: "EXABYTES" },
              { label: "NETWORK SPEED", value: "LIGHT", unit: "VELOCITY" }
            ].map((spec, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="text-4xl font-bold text-pink-500 animate-retro-pulse">
                    {spec.value}
                  </div>
                  <div className="absolute inset-0 text-4xl font-bold text-cyan-400/30 blur-sm animate-retro-glow">
                    {spec.value}
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-mono tracking-wider">{spec.label}</div>
                <div className="text-xs text-yellow-400 font-mono">{spec.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Synth Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-retro-float-synth"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            <div 
              className={`w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-lg'} opacity-60`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
} 