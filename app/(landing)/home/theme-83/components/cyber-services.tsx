import React from 'react';

export default function CyberServices() {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions for your business needs",
      features: ["Machine Learning", "Neural Networks", "Predictive Analytics"],
      color: "cyan"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security protocols and threat detection",
      features: ["Penetration Testing", "Incident Response", "Security Audits"],
      color: "pink"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern applications",
      features: ["Auto-scaling", "Load Balancing", "Disaster Recovery"],
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-pink-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-pink-400 font-mono text-sm tracking-wider">SERVICES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-pink-400">CYBER</span>
          <span className="text-cyan-400"> SERVICES</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Cutting-edge services designed for the digital future
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-8 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm hover:border-pink-400 transition-all duration-300"
            >
              {/* Cyber Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-pink-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-purple-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-pink-400"></div>

              {/* Service Icon */}
              <div className={`text-3xl mb-6 text-${service.color}-400`}>
                {index === 0 && "🤖"}
                {index === 1 && "🛡️"}
                {index === 2 && "☁️"}
              </div>

              {/* Service Content */}
              <h3 className={`text-2xl font-bold text-${service.color}-400 mb-4`}>
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className={`w-2 h-2 bg-${service.color}-400 rounded-full mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`mt-8 px-6 py-3 border border-${service.color}-400 text-${service.color}-400 font-bold rounded-sm hover:bg-${service.color}-400 hover:text-black transition-all duration-300 w-full`}>
                LEARN MORE
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-pink-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Cyber Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 