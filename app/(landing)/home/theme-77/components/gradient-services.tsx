import React from 'react';

export default function GradientServices() {
  const services = [
    {
      title: 'ART DECO DESIGN',
      description: 'Classic geometric patterns with modern neon accents',
      icon: '◈',
      gradient: 'from-purple-400 via-pink-400 to-cyan-400',
      features: ['Geometric Precision', 'Symmetrical Layouts', 'Neon Accents']
    },
    {
      title: 'NEON GRADIENTS',
      description: 'Vibrant color transitions and stunning visual effects',
      icon: '◆',
      gradient: 'from-pink-400 via-cyan-400 to-purple-400',
      features: ['Color Transitions', 'Visual Depth', 'Modern Effects']
    },
    {
      title: 'MODERN ANIMATIONS',
      description: 'Smooth, fluid animations that bring designs to life',
      icon: '◇',
      gradient: 'from-cyan-400 via-purple-400 to-pink-400',
      features: ['Fluid Motion', 'Interactive Elements', 'Performance Optimized']
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#a855f7_0%,transparent_50%)] bg-[length:180px_180px] animate-art-deco-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:280px_280px] animate-art-deco-flow"></div>
      </div>

      {/* Art Deco Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-4 border-purple-400 rounded-lg animate-neon-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 border-4 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 border-4 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            GRADIENT SERVICES
          </div>
          <div className="text-xl text-purple-200 font-light">
            Art Deco Excellence with Modern Innovation
          </div>
          
          {/* Art Deco Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-neon-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-xl border border-purple-400/40 rounded-lg p-8 h-full hover:border-purple-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Art Deco Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-neon-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-pink-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-cyan-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Service Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-purple-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-sm text-purple-200 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Art Deco Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-art-deco-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Art Deco Center Showcase */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl border border-purple-400/50 rounded-lg p-12 max-w-4xl">
            {/* Art Deco Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-purple-400 rounded-lg animate-neon-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-pink-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-cyan-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-purple-400 rounded-lg animate-neon-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                ART DECO
              </span>
              <span className="text-white"> MEETS </span>
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                NEON
              </span>
            </h3>
            
            <p className="text-lg text-purple-200 mb-8 leading-relaxed">
              Experience the perfect fusion of classic Art Deco elegance with cutting-edge neon gradient technology. 
              Our designs combine timeless geometric precision with vibrant modern aesthetics.
            </p>

            {/* Art Deco Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '1920s', label: 'ART DECO ERA', color: 'purple' },
                { number: '2024', label: 'MODERN TECH', color: 'pink' },
                { number: '∞', label: 'POSSIBILITIES', color: 'cyan' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br from-${stat.color}-800/50 to-${stat.color}-900/50 backdrop-blur-xl border border-${stat.color}-400/50 rounded-lg p-4 hover:border-${stat.color}-400 transition-all duration-300`}>
                    <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-purple-200 font-light uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Art Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-art-deco-float"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            >
              <div className={`w-8 h-8 border-2 border-${['purple', 'pink', 'cyan'][i % 3]}-400 rounded-sm animate-neon-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 