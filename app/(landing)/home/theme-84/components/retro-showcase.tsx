import React from 'react';

export default function RetroShowcase() {
  const technologies = [
    {
      name: "Pixel Art",
      description: "Authentic retro graphics",
      icon: "🎨",
      color: "green"
    },
    {
      name: "8-bit Audio",
      description: "Chiptune music & effects",
      icon: "🎵",
      color: "blue"
    },
    {
      name: "NES Style",
      description: "Classic Nintendo aesthetics",
      icon: "🎮",
      color: "purple"
    },
    {
      name: "CRT Effect",
      description: "Authentic monitor look",
      icon: "📺",
      color: "green"
    },
    {
      name: "Scanlines",
      description: "Retro display effect",
      icon: "📡",
      color: "blue"
    },
    {
      name: "Glitch Art",
      description: "Digital distortion effects",
      icon: "⚡",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border-4 border-purple-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-purple-400 font-mono text-sm tracking-wider">TECHNOLOGY</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-purple-400">RETRO</span>
          <span className="text-green-400"> TECH</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Built with authentic retro gaming technology
        </p>
      </div>

      {/* Technology Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative group p-6 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 text-center"
            >
              {/* Retro Corner Elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-4 border-t-4 border-purple-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r-4 border-t-4 border-green-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-4 border-b-4 border-blue-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-4 border-b-4 border-purple-400"></div>

              {/* Tech Icon */}
              <div className="text-3xl mb-4">
                {tech.icon}
              </div>

              {/* Tech Name */}
              <h3 className={`text-lg font-bold text-${tech.color}-400 mb-2 font-mono`}>
                {tech.name}
              </h3>

              {/* Tech Description */}
              <p className="text-gray-400 text-sm">
                {tech.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-4 border-purple-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { number: "8-bit", label: "GRAPHICS", color: "green" },
          { number: "60fps", label: "FRAMERATE", color: "blue" },
          { number: "256", label: "COLORS", color: "purple" },
          { number: "4:3", label: "ASPECT RATIO", color: "green" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
            <div className={`text-3xl font-bold text-${stat.color}-400 mb-2 font-mono`}>
              {stat.number}
            </div>
            <div className="text-gray-400 font-mono text-sm tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Retro Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-4 border-purple-400 rounded-sm animate-retro-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-4 border-green-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-4 border-blue-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-4 border-purple-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 