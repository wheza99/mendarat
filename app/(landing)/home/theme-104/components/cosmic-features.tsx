import React from 'react';

export default function CosmicFeatures() {
  const features = [
    {
      title: "Stellar Navigation",
      description: "Advanced star mapping and cosmic navigation systems",
      icon: "⭐",
      color: "purple"
    },
    {
      title: "Nebula Scanner",
      description: "Real-time nebula detection and analysis",
      icon: "🌌",
      color: "blue"
    },
    {
      title: "Quantum Drive",
      description: "Faster-than-light quantum propulsion technology",
      icon: "🚀",
      color: "pink"
    },
    {
      title: "Cosmic Shield",
      description: "Advanced space radiation protection systems",
      icon: "🛡️",
      color: "green"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-12 font-mono tracking-wider">
          COSMIC FEATURES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-6 border-2 border-${feature.color}-400 bg-gradient-to-br from-${feature.color}-900/20 to-transparent hover:scale-105 transition-transform font-mono group`}
            >
              {/* Cosmic Glow Effect */}
              <div className={`absolute inset-0 bg-${feature.color}-400/10 blur-xl group-hover:bg-${feature.color}-400/20 transition-colors`}></div>
              
              <div className="relative z-10">
                <div className={`text-4xl mb-4 text-${feature.color}-400`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold text-${feature.color}-300 mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-blue-200 text-sm">
                  {feature.description}
                </p>
              </div>
              
              {/* Cosmic Border Animation */}
              <div className={`absolute inset-0 border-2 border-${feature.color}-400 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>
        
        {/* Cosmic Decorative Element */}
        <div className="mt-16 text-center">
          <svg className="w-32 h-8 mx-auto opacity-60" viewBox="0 0 128 32" fill="none">
            <path d="M0 16 L32 8 L64 24 L96 4 L128 16" stroke="#a855f7" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M0 20 L32 12 L64 28 L96 8 L128 20" stroke="#3b82f6" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          </svg>
        </div>
      </div>
    </section>
  );
} 