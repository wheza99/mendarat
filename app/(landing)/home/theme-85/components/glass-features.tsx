import React from 'react';

export default function GlassFeatures() {
  const features = [
    {
      icon: "🔮",
      title: "Holographic Display",
      description: "Advanced 3D holographic projection technology",
      color: "indigo"
    },
    {
      icon: "💎",
      title: "Glassmorphism UI",
      description: "Modern glass-like interface with blur effects",
      color: "purple"
    },
    {
      icon: "⚡",
      title: "Quantum Processing",
      description: "Next-generation quantum computing integration",
      color: "pink"
    },
    {
      icon: "🌐",
      title: "Neural Network",
      description: "AI-powered neural network architecture",
      color: "indigo"
    },
    {
      icon: "🔒",
      title: "Quantum Security",
      description: "Unbreakable quantum encryption protocols",
      color: "purple"
    },
    {
      icon: "🚀",
      title: "Light Speed",
      description: "Ultra-fast data transmission capabilities",
      color: "pink"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-indigo-400/50 rounded-2xl bg-indigo-800/20 backdrop-blur-sm mb-6">
          <span className="text-indigo-300 font-mono text-sm tracking-wider">FEATURES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-indigo-400">GLASS</span>
          <span className="text-purple-400"> FEATURES</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Experience the future with cutting-edge holographic technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 border border-indigo-400/30 rounded-2xl bg-indigo-800/20 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"
            >
              {/* Glass Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-indigo-400/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-400/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-indigo-400/50 rounded-br-2xl"></div>

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
              <div className="absolute inset-0 border border-indigo-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 