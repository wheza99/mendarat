import React from 'react';

export default function HologramServices() {
  const services = [
    {
      title: "Holographic Design",
      description: "Custom holographic designs with cyberpunk geometric precision and futuristic aesthetics.",
      features: ["99.9% Precision", "Custom Design", "Futuristic Aesthetics"],
      color: "emerald",
      icon: "🎨"
    },
    {
      title: "Cyberpunk Consultation",
      description: "Expert consultation for cyberpunk aesthetics with contemporary holographic integration.",
      features: ["Period Accuracy", "Modern Integration", "Custom Styling"],
      color: "teal",
      icon: "✨"
    },
    {
      title: "Geometric Animation",
      description: "Dynamic geometric animations with holographic gradients and smooth transitions.",
      features: ["Smooth Transitions", "Holographic Effects", "Geometric Precision"],
      color: "cyan",
      icon: "⚡"
    },
    {
      title: "Holographic Branding",
      description: "Complete holographic branding solutions with cyberpunk inspiration and modern appeal.",
      features: ["Brand Identity", "Holographic Elements", "Cyberpunk Style"],
      color: "emerald",
      icon: "🏷️"
    },
    {
      title: "Gradient Technology",
      description: "Advanced gradient technology with holographic effects and geometric patterns.",
      features: ["Advanced Tech", "Holographic Effects", "Geometric Patterns"],
      color: "teal",
      icon: "🚀"
    },
    {
      title: "Futuristic Solutions",
      description: "Complete futuristic solutions with cyberpunk aesthetics and holographic innovation.",
      features: ["Futuristic Design", "Cyberpunk Style", "Holographic Innovation"],
      color: "cyan",
      icon: "💎"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#14b8a6_50%,transparent_100%)] bg-[length:200px_200px] animate-holographic-flow"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-emerald-800/80 to-teal-800/80 backdrop-blur-xl border border-emerald-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-2 animate-holographic-pulse"></div>
            <span className="text-sm font-bold text-emerald-400 tracking-wider">
              HOLOGRAM SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Holographic</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our holographic services combine cyberpunk craftsmanship with modern holographic innovation. 
            Experience the perfect blend of future and technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-emerald-800/60 to-teal-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-holographic-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-holographic-pulse`}>
                  {service.icon}
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 border-2 border-${service.color}-400 rounded-lg animate-holographic-spin`}></div>
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 rounded-full mr-3 animate-holographic-pulse`}></div>
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
              
              {/* Holographic Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-${service.color}-400 rounded-full animate-holographic-particle`}
                    style={{
                      left: `${i * 4}px`,
                      top: `${i * 4}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Corner Element */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 border-${service.color}-400 rounded-lg animate-holographic-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-emerald-800/80 to-teal-800/80 backdrop-blur-xl border-2 border-emerald-400 rounded-lg shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-4 animate-holographic-pulse"></div>
            <span className="text-lg font-bold text-emerald-400 tracking-wider">
              Ready to Start Your Holographic Journey?
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-emerald-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-teal-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-cyan-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-emerald-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Holographic Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent animate-holographic-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-teal-400/10 to-transparent animate-holographic-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 