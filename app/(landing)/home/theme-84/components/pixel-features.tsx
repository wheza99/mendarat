import React from 'react';

export default function PixelFeatures() {
  const features = [
    {
      icon: "🎮",
      title: "Pixel Perfect",
      description: "Crisp pixel graphics with authentic retro feel",
      color: "green"
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Optimized for smooth 60fps gameplay",
      color: "blue"
    },
    {
      icon: "🎯",
      title: "Precise Controls",
      description: "Responsive controls for competitive gaming",
      color: "purple"
    },
    {
      icon: "🏆",
      title: "Leaderboards",
      description: "Compete with players worldwide",
      color: "green"
    },
    {
      icon: "🎨",
      title: "Custom Skins",
      description: "Personalize your gaming experience",
      color: "blue"
    },
    {
      icon: "🌐",
      title: "Multiplayer",
      description: "Play with friends online or locally",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border-4 border-green-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-green-400 font-mono text-sm tracking-wider">FEATURES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-green-400">PIXEL</span>
          <span className="text-blue-400"> FEATURES</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Experience the best of retro gaming with modern features
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 border-4 border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm hover:border-green-400 transition-all duration-300"
            >
              {/* Retro Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-green-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-blue-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-green-400"></div>

              {/* Icon */}
              <div className={`text-4xl mb-4 text-${feature.color}-400`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold text-${feature.color}-400 mb-4 font-mono`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-4 border-green-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-4 border-green-400 rounded-sm animate-retro-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-4 border-blue-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-4 border-purple-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-4 border-green-400 rounded-sm animate-retro-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 