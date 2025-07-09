import React from 'react';

export default function FeatureGrid() {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance that scales with your needs'
    },
    {
      icon: '🔒',
      title: 'Secure by Design',
      description: 'Enterprise-grade security built into every layer'
    },
    {
      icon: '⚡',
      title: 'Real-time Sync',
      description: 'Instant updates across all your devices'
    },
    {
      icon: '🎯',
      title: 'AI-Powered',
      description: 'Intelligent automation that learns and adapts'
    },
    {
      icon: '🌐',
      title: 'Global CDN',
      description: 'Lightning-fast delivery worldwide'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and reporting'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for the modern world with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 