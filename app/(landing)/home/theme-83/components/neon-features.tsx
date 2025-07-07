import React from 'react';

export default function NeonFeatures() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Ultra-fast performance with cutting-edge technology",
      color: "cyan"
    },
    {
      icon: "🔒",
      title: "Secure by Design",
      description: "Military-grade security with blockchain technology",
      color: "pink"
    },
    {
      icon: "🚀",
      title: "Scalable Architecture",
      description: "Built to handle millions of concurrent users",
      color: "purple"
    },
    {
      icon: "🎯",
      title: "Precision Engineered",
      description: "Every component optimized for maximum efficiency",
      color: "cyan"
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Distributed across 50+ data centers worldwide",
      color: "pink"
    },
    {
      icon: "⚙️",
      title: "Smart Automation",
      description: "AI-powered automation for seamless operations",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-cyan-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">FEATURES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-cyan-400">CYBER</span>
          <span className="text-pink-400"> FEATURES</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Experience the future with our cutting-edge cyberpunk features
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300"
            >
              {/* Cyber Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-pink-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-400"></div>

              {/* Icon */}
              <div className={`text-4xl mb-4 text-${feature.color}-400`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold text-${feature.color}-400 mb-4`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-cyan-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyber Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 