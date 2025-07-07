import React from 'react';

export default function NeonFeatures() {
  const features = [
    {
      title: "Geometric Precision",
      description: "Perfect geometric patterns with Art Deco precision and modern neon gradients.",
      icon: "🔷",
      color: "purple",
      stats: "99.9% Precision"
    },
    {
      title: "Neon Gradient Flow",
      description: "Smooth neon gradient transitions with vibrant color combinations and flow effects.",
      icon: "🌈",
      color: "pink",
      stats: "50K Gradients"
    },
    {
      title: "Art Deco Elegance",
      description: "Classic Art Deco design elements with contemporary neon aesthetics and elegance.",
      icon: "✨",
      color: "cyan",
      stats: "24/7 Elegance"
    },
    {
      title: "Modern Innovation",
      description: "Cutting-edge design technology with Art Deco inspiration and neon innovation.",
      icon: "🚀",
      color: "purple",
      stats: "2024 Tech"
    },
    {
      title: "Neon Animation",
      description: "Dynamic neon animations with smooth transitions and geometric precision.",
      icon: "⚡",
      color: "pink",
      stats: "60 FPS"
    },
    {
      title: "Gradient Harmony",
      description: "Perfect color harmony with neon gradients and Art Deco geometric balance.",
      icon: "🎨",
      color: "cyan",
      stats: "RGB Master"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#a855f7_0%,transparent_50%)] bg-[length:150px_150px] animate-art-deco-gear"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl border border-purple-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-neon-pulse"></div>
            <span className="text-sm font-bold text-purple-400 tracking-wider">
              NEON FEATURES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Art Deco</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect fusion of classic Art Deco aesthetics and modern neon gradient technology. 
            Our geometric precision delivers unmatched elegance and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-art-deco-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Feature Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-neon-pulse`}>
                  {feature.icon}
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 border-2 border-${feature.color}-400 rounded-lg animate-neon-spin`}></div>
              </div>

              {/* Feature Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-br from-${feature.color}-800/80 to-${feature.color}-600/80 backdrop-blur-xl border border-${feature.color}-400 rounded-lg`}>
                  <div className={`w-2 h-2 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600 rounded-full mr-2 animate-neon-pulse`}></div>
                  <span className={`text-sm font-bold text-${feature.color}-400 tracking-wider`}>
                    {feature.stats}
                  </span>
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/5 to-${feature.color}-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Neon Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-${feature.color}-400 rounded-full animate-neon-particle`}
                    style={{
                      left: `${i * 4}px`,
                      top: `${i * 4}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Corner Element */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 border-${feature.color}-400 rounded-lg animate-neon-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'Precision Rate', color: 'purple' },
            { number: '50K+', label: 'Gradients Created', color: 'pink' },
            { number: '24/7', label: 'Neon Operation', color: 'cyan' },
            { number: '1920s', label: 'Art Deco Era', color: 'purple' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-neon-glow`}>
                {stat.number}
              </div>
              <div className="text-sm font-light text-gray-400 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Neon Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent animate-art-deco-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/10 to-transparent animate-art-deco-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 