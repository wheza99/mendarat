import React from 'react';

export default function StellarServices() {
  const services = [
    {
      title: "Space Navigation",
      description: "Advanced cosmic navigation and star mapping services",
      price: "$599",
      features: ["Star mapping", "Cosmic navigation", "Quantum positioning"]
    },
    {
      title: "Nebula Research",
      description: "Deep space nebula analysis and exploration",
      price: "$899",
      features: ["Nebula scanning", "Cosmic analysis", "Space exploration"]
    },
    {
      title: "Quantum Propulsion",
      description: "Faster-than-light quantum drive technology",
      price: "$1499",
      features: ["Quantum drive", "FTL technology", "Space propulsion"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-400 mb-12 font-mono tracking-wider">
          STELLAR SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Service Card */}
              <div className="relative p-6 border-2 border-pink-400 bg-gradient-to-br from-pink-900/20 to-transparent hover:scale-105 transition-transform font-mono">
                {/* Cosmic Glow Effect */}
                <div className="absolute inset-0 bg-pink-400/10 blur-xl group-hover:bg-pink-400/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-green-200 text-sm flex items-center">
                        <span className="text-pink-400 mr-2">⭐</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold border border-pink-400 hover:scale-105 transition-transform">
                    LAUNCH SERVICE
                  </button>
                </div>
                
                {/* Cosmic Border Animation */}
                <div className="absolute inset-0 border-2 border-pink-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stellar Decorative Element */}
        <div className="mt-16 text-center">
          <svg className="w-48 h-12 mx-auto opacity-60" viewBox="0 0 192 48" fill="none">
            <path d="M0 24 L48 8 L96 40 L144 4 L192 24" stroke="#a855f7" strokeWidth="3" fill="none" className="animate-pulse" />
            <path d="M0 28 L48 12 L96 44 L144 8 L192 28" stroke="#3b82f6" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.3s'}} />
            <path d="M0 32 L48 16 L96 48 L144 12 L192 32" stroke="#ec4899" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '0.6s'}} />
          </svg>
        </div>
      </div>
    </section>
  );
} 