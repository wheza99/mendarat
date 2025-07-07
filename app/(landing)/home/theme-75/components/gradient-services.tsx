import React from 'react';

export default function GradientServices() {
  const services = [
    {
      title: "Neon Gradient Design",
      description: "Custom neon gradient designs with Art Deco geometric precision and modern aesthetics.",
      features: ["99.9% Precision", "Custom Design", "Modern Aesthetics"],
      color: "purple",
      icon: "🎨"
    },
    {
      title: "Art Deco Consultation",
      description: "Expert consultation for Art Deco aesthetics with contemporary neon integration.",
      features: ["Period Accuracy", "Modern Integration", "Custom Styling"],
      color: "pink",
      icon: "✨"
    },
    {
      title: "Geometric Animation",
      description: "Dynamic geometric animations with neon gradients and smooth transitions.",
      features: ["Smooth Transitions", "Neon Effects", "Geometric Precision"],
      color: "cyan",
      icon: "⚡"
    },
    {
      title: "Neon Branding",
      description: "Complete neon branding solutions with Art Deco inspiration and modern appeal.",
      features: ["Brand Identity", "Neon Elements", "Art Deco Style"],
      color: "purple",
      icon: "🏷️"
    },
    {
      title: "Gradient Technology",
      description: "Advanced gradient technology with neon effects and geometric patterns.",
      features: ["Advanced Tech", "Neon Effects", "Geometric Patterns"],
      color: "pink",
      icon: "🚀"
    },
    {
      title: "Elegance Solutions",
      description: "Complete elegance solutions with Art Deco aesthetics and neon innovation.",
      features: ["Elegant Design", "Art Deco Style", "Neon Innovation"],
      color: "cyan",
      icon: "💎"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:200px_200px] animate-art-deco-flow"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl border border-purple-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 animate-neon-pulse"></div>
            <span className="text-sm font-bold text-purple-400 tracking-wider">
              GRADIENT SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Neon</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our neon gradient services combine Art Deco craftsmanship with modern neon innovation. 
            Experience the perfect blend of tradition and technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-800/60 to-pink-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-art-deco-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-neon-pulse`}>
                  {service.icon}
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 border-2 border-${service.color}-400 rounded-lg animate-neon-spin`}></div>
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 rounded-full mr-3 animate-neon-pulse`}></div>
                      <span className="text-sm text-gray-300 font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className={`group/btn relative px-6 py-3 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-${service.color}-400`}>
                  <span className="relative z-10">Learn More</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${service.color}-600 to-${service.color}-800 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                </button>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-400/5 to-${service.color}-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Neon Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-${service.color}-400 rounded-full animate-neon-particle`}
                    style={{
                      left: `${i * 4}px`,
                      top: `${i * 4}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Corner Element */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 border-${service.color}-400 rounded-lg animate-neon-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl border-2 border-purple-400 rounded-lg shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 animate-neon-pulse"></div>
            <span className="text-lg font-bold text-purple-400 tracking-wider">
              Ready to Start Your Neon Journey?
            </span>
          </div>
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