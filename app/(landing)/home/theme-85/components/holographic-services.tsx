import React from 'react';

export default function HolographicServices() {
  const services = [
    {
      title: "Holographic AI",
      description: "Advanced AI with holographic interface",
      features: ["3D Projection", "Voice Control", "Gesture Recognition"],
      color: "indigo"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum processing power",
      features: ["Quantum Bits", "Superposition", "Entanglement"],
      color: "purple"
    },
    {
      title: "Neural Interface",
      description: "Direct brain-computer connection",
      features: ["Brain Mapping", "Thought Control", "Memory Enhancement"],
      color: "pink"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-purple-400/50 rounded-2xl bg-purple-800/20 backdrop-blur-sm mb-6">
          <span className="text-purple-300 font-mono text-sm tracking-wider">SERVICES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-purple-400">HOLOGRAPHIC</span>
          <span className="text-indigo-400"> SERVICES</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Cutting-edge services powered by holographic technology
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-8 border border-purple-400/30 rounded-2xl bg-purple-800/20 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"
            >
              {/* Glass Corner Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-400/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-indigo-400/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pink-400/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-400/50 rounded-br-2xl"></div>

              {/* Service Icon */}
              <div className={`text-3xl mb-6 text-${service.color}-400`}>
                {index === 0 && "🔮"}
                {index === 1 && "⚛️"}
                {index === 2 && "🧠"}
              </div>

              {/* Service Content */}
              <h3 className={`text-2xl font-bold text-${service.color}-400 mb-4 font-mono`}>
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
              <button className={`mt-8 px-6 py-3 border border-${service.color}-400/50 text-${service.color}-400 font-bold rounded-2xl hover:bg-${service.color}-400/20 hover:text-white transition-all duration-300 w-full font-mono backdrop-blur-sm`}>
                EXPLORE NOW
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-purple-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border-2 border-indigo-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-pink-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-holographic-pulse backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 