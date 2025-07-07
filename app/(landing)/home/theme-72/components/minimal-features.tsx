import React from 'react';

export default function MinimalFeatures() {
  const features = [
    {
      icon: '✨',
      title: 'Clean Design',
      description: 'Minimalist aesthetics with maximum impact. Every element serves a purpose.',
      color: 'blue'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance that feels instant. Speed without compromise.',
      color: 'purple'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every layer of our platform.',
      color: 'pink'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect experience across all devices. From mobile to desktop.',
      color: 'blue'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Adapt to your brand. Flexible design system that grows with you.',
      color: 'purple'
    },
    {
      icon: '🚀',
      title: 'Future Ready',
      description: 'Built for tomorrow. Scalable architecture that evolves with technology.',
      color: 'pink'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle Holographic Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:200px_1px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:1px_200px]"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-gray-200/30 rounded-lg animate-holographic-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-gray-200/30 rounded-full animate-holographic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-gray-200/30 rounded-lg animate-holographic-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-xl">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
            <span className="text-xs font-light text-gray-600 tracking-wider">
              FEATURES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            <span className="block">Minimalist</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature is carefully crafted to provide maximum value with minimal complexity. 
            Clean, efficient, and beautiful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-holographic-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Holographic Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/5 to-${feature.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Holographic Accent */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-${feature.color}-400 to-${feature.color}-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Holographic Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-left">
              <div className="text-sm font-light text-gray-500 mb-1">READY TO EXPERIENCE</div>
              <div className="text-lg font-medium text-gray-900">Holographic Minimalism?</div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-holographic-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 