import React from 'react';

export default function SpaceServices() {
  const services = [
    {
      icon: '🚀',
      title: 'Rocket Launch Services',
      description: 'Professional rocket launch services with state-of-the-art propulsion systems',
      features: ['Satellite deployment', 'Cargo transport', 'Crew missions', 'Space tourism']
    },
    {
      icon: '👨‍🚀',
      title: 'Astronaut Training',
      description: 'Comprehensive astronaut training programs with NASA-certified instructors',
      features: ['Zero gravity training', 'Space suit operation', 'Mission simulation', 'Emergency procedures']
    },
    {
      icon: '🛰️',
      title: 'Satellite Operations',
      description: 'Complete satellite design, launch, and operations management services',
      features: ['Satellite design', 'Launch coordination', 'Orbital operations', 'Data collection']
    },
    {
      icon: '🌌',
      title: 'Space Research',
      description: 'Cutting-edge space research and development for scientific advancement',
      features: ['Astrophysics research', 'Planetary exploration', 'Space technology', 'Data analysis']
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-indigo-200">Space</span> Services
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional space services and cutting-edge technology for the next generation of space exploration
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="text-5xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <span className="text-indigo-300">✓</span>
                        <span className="text-purple-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                    🚀 Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Space decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <span className="text-2xl animate-pulse">🚀</span>
            <span className="text-lg font-light">ADVANCED SPACE TECHNOLOGY</span>
            <span className="text-2xl animate-bounce">👨‍🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
} 