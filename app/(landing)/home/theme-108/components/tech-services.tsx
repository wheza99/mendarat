import React from 'react';

export default function TechServices() {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern applications',
      icon: '☁️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that learn and adapt',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced protection for your digital assets',
      icon: '🛡️',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: '📊',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions for the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Let's discuss how our technology solutions can drive your success
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 