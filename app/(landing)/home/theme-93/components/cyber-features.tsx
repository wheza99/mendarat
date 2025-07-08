import React from 'react';

export default function CyberFeatures() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Ultra-high performance with sub-millisecond response times powered by quantum computing technology.",
      color: "pink"
    },
    {
      icon: "🔒",
      title: "Bulletproof Security",
      description: "Military-grade encryption with multi-layer security protocols and real-time threat detection.",
      color: "purple"
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Distributed across 200+ data centers worldwide for maximum reliability and speed.",
      color: "cyan"
    },
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Advanced machine learning algorithms that adapt and optimize in real-time.",
      color: "yellow"
    },
    {
      icon: "⚙️",
      title: "Auto-Scaling",
      description: "Intelligent resource management that scales automatically based on demand.",
      color: "pink"
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with live data visualization and predictive insights.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "text-pink-500 border-pink-500 shadow-pink-500/50",
      purple: "text-purple-500 border-purple-500 shadow-purple-500/50",
      cyan: "text-cyan-400 border-cyan-400 shadow-cyan-400/50",
      yellow: "text-yellow-400 border-yellow-400 shadow-yellow-400/50"
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-pink-500/5 via-purple-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">CYBER</span>
            <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"> FEATURES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the cutting-edge technology that powers the future of digital innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 border-2 ${getColorClasses(feature.color)} rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]`}
            >
              {/* Glitch Effect */}
              <div className={`absolute inset-0 border-2 ${getColorClasses(feature.color)} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 relative z-10">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-4 ${getColorClasses(feature.color).split(' ')[0]}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Neon Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 