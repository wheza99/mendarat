import React from 'react';

export default function NeonFeatures() {
  const features = [
    {
      icon: '✨',
      title: 'Art Deco Design',
      description: 'Classic geometric patterns with modern neon gradients for timeless elegance.',
      color: 'cyan'
    },
    {
      icon: '⚡',
      title: 'Neon Performance',
      description: 'Lightning-fast performance with stunning neon visual effects and animations.',
      color: 'purple'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every layer with neon encryption.',
      color: 'pink'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect experience across all devices with art deco responsive design.',
      color: 'cyan'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Adapt to your brand with flexible art deco design system and neon themes.',
      color: 'purple'
    },
    {
      icon: '🚀',
      title: 'Future Ready',
      description: 'Built for tomorrow with scalable art deco architecture and neon technology.',
      color: 'pink'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Art Deco Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Art Deco Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:150px_150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:250px_250px]"></div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-400 rotate-45 animate-neon-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-2 border-purple-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-pink-400 rotate-45 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-cyan-400 rounded-lg shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-bold text-cyan-400 tracking-wider">
              FEATURES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Neon</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every feature is carefully crafted with art deco elegance and neon gradient innovation. 
            Clean, efficient, and beautiful with a touch of timeless sophistication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-purple-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-art-deco-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Art Deco Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/5 to-${feature.color}-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-slate-700 to-purple-700 rounded-lg border-2 border-gray-500 group-hover:border-gray-400 transition-colors duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Art Deco Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-${feature.color}-400 to-${feature.color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Art Deco Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-br from-slate-800/80 to-purple-800/80 backdrop-blur-xl border-2 border-gray-600 rounded-lg px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-400 mb-1">READY TO EXPERIENCE</div>
              <div className="text-lg font-bold text-white">Neon Gradient Art Deco?</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Art Deco Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 border-2 border-${['cyan', 'purple', 'pink', 'cyan', 'purple'][i]}-400 rotate-45 animate-neon-pulse`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 