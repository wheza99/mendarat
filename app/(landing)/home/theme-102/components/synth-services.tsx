import React from 'react';

export default function SynthServices() {
  const services = [
    {
      title: "Neon Design",
      description: "Custom neon graphics and retro-futuristic designs",
      price: "$299",
      features: ["Custom neon effects", "Retro typography", "Synthwave aesthetics"]
    },
    {
      title: "Retro Development",
      description: "80s-inspired web development with neon elements",
      price: "$499",
      features: ["Neon animations", "Retro UI/UX", "Synthwave themes"]
    },
    {
      title: "Synthwave Branding",
      description: "Complete retro-futuristic brand identity",
      price: "$799",
      features: ["Neon logo design", "Retro color schemes", "Synthwave marketing"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-12 font-mono tracking-wider">
          SYNTHWAVE SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Service Card */}
              <div className="relative p-6 border-2 border-orange-400 bg-gradient-to-br from-orange-900/20 to-transparent hover:scale-105 transition-transform font-mono">
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-orange-400/10 blur-xl group-hover:bg-orange-400/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-orange-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-cyan-200 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-pink-400 mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-purple-200 text-sm flex items-center">
                        <span className="text-pink-400 mr-2">⚡</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold border border-cyan-400 hover:scale-105 transition-transform">
                    GET STARTED
                  </button>
                </div>
                
                {/* Neon Border Animation */}
                <div className="absolute inset-0 border-2 border-orange-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Synthwave Decorative Element */}
        <div className="mt-16 text-center">
          <svg className="w-48 h-12 mx-auto opacity-60" viewBox="0 0 192 48" fill="none">
            <path d="M0 24 L48 8 L96 40 L144 4 L192 24" stroke="#ec4899" strokeWidth="3" fill="none" className="animate-pulse" />
            <path d="M0 28 L48 12 L96 44 L144 8 L192 28" stroke="#8b5cf6" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.3s'}} />
            <path d="M0 32 L48 16 L96 48 L144 12 L192 32" stroke="#06b6d4" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '0.6s'}} />
          </svg>
        </div>
      </div>
    </section>
  );
} 