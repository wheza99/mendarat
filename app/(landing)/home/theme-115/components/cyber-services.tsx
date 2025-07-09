import React from 'react';

export default function CyberServices() {
  const services = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Advanced quantum processing for complex computational problems',
      icon: '⚡',
      price: 'From $100K',
      duration: '6-12 months',
      features: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Simulation']
    },
    {
      title: 'AI Development Platform',
      description: 'Complete AI and machine learning development environment',
      icon: '🔮',
      price: 'From $50K',
      duration: '3-6 months',
      features: ['Neural Networks', 'Deep Learning', 'Predictive Models']
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Comprehensive security solutions for digital infrastructure',
      icon: '💻',
      price: 'From $25K',
      duration: '2-4 months',
      features: ['Threat Detection', 'Encryption', 'Penetration Testing']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud computing and deployment solutions',
      icon: '🚀',
      price: 'From $15K',
      duration: '1-3 months',
      features: ['Auto-scaling', 'Load Balancing', 'Global CDN']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 font-mono">
            CYBER SERVICES
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-mono">
            Advanced technology services for the digital frontier
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Cyber effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
                  {service.title}
                </h3>
                <p className="text-cyan-300 leading-relaxed mb-6 font-mono">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-cyan-400 font-mono">{service.price}</div>
                  <div className="text-sm text-cyan-500 font-mono">{service.duration}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cyan-300 font-mono">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 overflow-hidden font-bold font-mono">
                  <span className="relative z-10">DEPLOY</span>
                  <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Neon decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
              CUSTOM CYBER SOLUTION?
            </h3>
            <p className="text-cyan-300 mb-6 max-w-md mx-auto font-mono">
              Let us create a personalized cyber technology solution for your needs
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-mono">
              CONSULT NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 