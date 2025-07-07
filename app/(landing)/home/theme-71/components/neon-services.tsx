import React from 'react';

export default function NeonServices() {
  const services = [
    {
      title: "DARK WEB DEVELOPMENT",
      description: "Custom solutions that thrive in the shadows of the digital realm.",
      icon: "🌐",
      features: ["Anonymous Hosting", "Encrypted Communication", "Stealth Deployment"],
      color: "red"
    },
    {
      title: "NEON UI/UX DESIGN",
      description: "Interfaces that glow with the intensity of a thousand neon signs.",
      icon: "🎨",
      features: ["Dark Mode First", "Neon Accents", "Shadow Depth"],
      color: "blue"
    },
    {
      title: "SHADOW ANALYTICS",
      description: "Data insights that reveal the hidden patterns in the darkness.",
      icon: "📊",
      features: ["Predictive Modeling", "Dark Data Mining", "Stealth Tracking"],
      color: "red"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Noir Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
        
        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-noir-pulse"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-noir-fade-in">
            <span className="text-white">NEON</span>
            <span className="text-blue-500 animate-noir-flicker"> SERVICES</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto animate-noir-fade-in-delayed">
            Professional services that shine brightest in the darkest corners of the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/60 border border-gray-800 rounded-lg p-8 hover:border-red-500/50 transition-all duration-500 animate-noir-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 animate-noir-pulse">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  service.color === 'red' ? 'text-red-500' : 'text-blue-500'
                } animate-noir-flicker`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className={`w-2 h-2 rounded-full mr-3 animate-noir-pulse ${
                        service.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                      }`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`mt-6 px-6 py-3 border-2 border-${service.color}-500 text-${service.color}-500 hover:bg-${service.color}-500 hover:text-black font-bold rounded-lg transition-all duration-300 animate-noir-pulse`}>
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="animate-noir-fade-in-delayed">
            <div className="text-3xl font-bold text-red-500 mb-2 animate-noir-count">500+</div>
            <div className="text-gray-400 font-mono text-sm">PROJECTS COMPLETED</div>
          </div>
          <div className="animate-noir-fade-in-delayed" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-blue-500 mb-2 animate-noir-count">24/7</div>
            <div className="text-gray-400 font-mono text-sm">SUPPORT AVAILABLE</div>
          </div>
          <div className="animate-noir-fade-in-delayed" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-red-500 mb-2 animate-noir-count">99.9%</div>
            <div className="text-gray-400 font-mono text-sm">UPTIME GUARANTEE</div>
          </div>
          <div className="animate-noir-fade-in-delayed" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-blue-500 mb-2 animate-noir-count">∞</div>
            <div className="text-gray-400 font-mono text-sm">POSSIBILITIES</div>
          </div>
        </div>
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-noir-float ${
              i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-blue-500' : 'bg-white'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 