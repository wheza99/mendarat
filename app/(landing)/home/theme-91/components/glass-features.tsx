import React from 'react';

export default function GlassFeatures() {
  const features = [
    {
      icon: "✨",
      title: "Aurora Effects",
      description: "Dynamic aurora borealis animations that dance across your interface with mesmerizing beauty.",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: "🔮",
      title: "Glass Morphism",
      description: "Cutting-edge glass morphism design with perfect transparency and blur effects.",
      gradient: "from-cyan-400 to-teal-400"
    },
    {
      icon: "🌈",
      title: "Prismatic Colors",
      description: "Full spectrum of colors that shift and blend like light through a crystal prism.",
      gradient: "from-pink-400 to-purple-400"
    },
    {
      icon: "💎",
      title: "Crystal Clarity",
      description: "Crystal-clear interfaces that maintain perfect readability while looking ethereal.",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      icon: "🌟",
      title: "Luminous Design",
      description: "Self-illuminating elements that glow with inner light and aurora-inspired brilliance.",
      gradient: "from-purple-400 to-cyan-400"
    },
    {
      icon: "🪐",
      title: "Cosmic Experience",
      description: "Otherworldly user experience that transcends traditional design boundaries.",
      gradient: "from-pink-400 to-teal-400"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-conic from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-teal-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ETHEREAL FEATURES
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the magical intersection of aurora borealis and modern glass design
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Aurora Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with Aurora Glow */}
              <div className="text-5xl mb-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <span className="relative z-10">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all duration-300`}>
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Glass Reflection Effect */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Aurora Accent Lines */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Glass Orbs */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
    </section>
  );
} 