import React from 'react';

export default function FuturisticFeatures() {
  const features = [
    {
      icon: '🔮',
      title: 'Quantum Transparency',
      description: 'Advanced glassmorphism technology that creates seamless transparency layers with perfect clarity.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '✨',
      title: 'Holographic Effects',
      description: 'Multi-dimensional visual effects that respond to user interaction with real-time feedback.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '⚡',
      title: 'Lightning Performance',
      description: 'Optimized rendering engine that delivers 60fps glassmorphism effects across all devices.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🌊',
      title: 'Fluid Animations',
      description: 'Smooth, organic animations that mimic the natural flow of liquid and light.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: '🎯',
      title: 'Precision Blur',
      description: 'Intelligent blur algorithms that create perfect depth and focus in every interface.',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: '🔮',
      title: 'Crystal Reflections',
      description: 'Advanced reflection mapping that creates realistic light interactions and shadows.',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="features" className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Geometric Glass Shapes */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute backdrop-blur-md bg-white/5 border border-white/10 rounded-lg animate-glassmorphism-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${40 + Math.random() * 30}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2 animate-glassmorphism-pulse"></div>
            FUTURISTIC FEATURES
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen
            </span>
            <br />
            <span className="text-white">Capabilities</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the revolutionary features that make our glassmorphism system the most advanced in the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 backdrop-blur-md bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="mr-2">Explore All Features</span>
            <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 