import React from 'react';

export default function NeonArcade() {
  const arcadeFeatures = [
    {
      icon: "🎮",
      title: "RETRO GAMING",
      description: "Experience classic arcade games with modern cyberpunk twists and neon-enhanced graphics."
    },
    {
      icon: "🔋",
      title: "POWER CORE",
      description: "High-performance energy systems powering your digital adventures with unlimited potential."
    },
    {
      icon: "🚀",
      title: "CYBER BOOST",
      description: "Advanced acceleration protocols to enhance your virtual reality experiences."
    },
    {
      icon: "⚡",
      title: "NEON SPEED",
      description: "Lightning-fast processing speeds that blur the boundaries between thought and action."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black">
        {/* Animated Neon Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-retro-pulse"
              style={{
                top: `${i * 12.5}%`,
                width: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
              NEON ARCADE
            </h2>
            <div className="absolute inset-0 text-5xl sm:text-6xl font-bold text-pink-500/30 animate-retro-glitch blur-sm">
              NEON ARCADE
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into our digital playground where retro gaming meets futuristic technology
          </p>
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>

        {/* Arcade Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arcadeFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-b from-purple-900/20 to-black/40 border border-cyan-400/30 rounded-lg backdrop-blur-sm hover:border-pink-500/60 transition-all duration-500 hover:scale-105"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:animate-retro-bounce">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-lg animate-retro-border-pulse"></div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 group-hover:border-pink-500 transition-colors duration-300"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50 group-hover:border-pink-500 transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50 group-hover:border-pink-500 transition-colors duration-300"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 group-hover:border-pink-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Arcade Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "∞", label: "LEVELS" },
              { stat: "2084", label: "HIGH SCORE" },
              { stat: "24/7", label: "ARCADE OPEN" },
              { stat: "100%", label: "NEON POWER" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="text-4xl sm:text-5xl font-bold text-cyan-400 group-hover:text-pink-500 transition-colors duration-300 animate-retro-pulse">
                    {item.stat}
                  </div>
                  <div className="absolute inset-0 text-4xl sm:text-5xl font-bold text-pink-500/30 blur-sm animate-retro-glow">
                    {item.stat}
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-mono tracking-wider mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">START GAME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute inset-0 animate-retro-border-pulse border-2 border-cyan-400/50 rounded-lg"></div>
          </button>
        </div>
      </div>

      {/* Floating Arcade Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 border border-cyan-400/20 animate-retro-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
} 