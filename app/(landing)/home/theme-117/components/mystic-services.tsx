import React from 'react';

export default function MysticServices() {
  const services = [
    {
      icon: "🔮",
      title: "Crystal Reading",
      description: "Professional crystal ball and tarot readings",
      price: "From $100",
      duration: "1-2 hours",
      features: ["Future Predictions", "Past Life Reading", "Spiritual Guidance"]
    },
    {
      icon: "✨",
      title: "Spell Casting",
      description: "Custom spell casting for various purposes",
      price: "From $300",
      duration: "1-3 days",
      features: ["Love Spells", "Protection Magic", "Success Rituals"]
    },
    {
      icon: "🌟",
      title: "Astral Journey",
      description: "Guided astral projection and meditation",
      price: "From $200",
      duration: "2-4 hours",
      features: ["Soul Travel", "Spirit Communication", "Realm Exploration"]
    },
    {
      icon: "💫",
      title: "Energy Cleansing",
      description: "Spiritual energy cleansing and purification",
      price: "From $150",
      duration: "1-2 hours",
      features: ["Aura Cleansing", "Space Purification", "Negative Energy Removal"]
    },
    {
      icon: "🌙",
      title: "Moon Rituals",
      description: "Lunar phase rituals and ceremonies",
      price: "From $250",
      duration: "Full moon cycle",
      features: ["Full Moon Magic", "New Moon Intentions", "Lunar Energy"]
    },
    {
      icon: "⚡",
      title: "Spiritual Healing",
      description: "Mystical healing and energy restoration",
      price: "From $180",
      duration: "1-3 sessions",
      features: ["Chakra Balancing", "Energy Healing", "Spiritual Recovery"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 font-serif">
            MYSTICAL SERVICES
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-serif">
            Professional mystical and spiritual services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Service icon */}
              <div className="text-4xl mb-6">{service.icon}</div>
              
              <h3 className="text-xl font-bold text-purple-400 mb-4 font-serif">
                {service.title}
              </h3>
              
              <p className="text-purple-200 mb-6 leading-relaxed font-serif">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Price:</span>
                  <span className="text-purple-400 font-bold font-serif">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Duration:</span>
                  <span className="text-purple-400 font-bold font-serif">{service.duration}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-purple-300 font-semibold mb-3 font-serif">Includes:</h4>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-purple-400 mr-2">✨</span>
                      <span className="text-purple-200 text-sm font-serif">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 font-serif">
                  BOOK SERVICE
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 font-serif">
              MYSTICAL GUARANTEE
            </h3>
            <p className="text-purple-200 mb-6 max-w-md mx-auto font-serif">
              All our mystical services come with spiritual protection and satisfaction guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 font-serif">
                GET QUOTE
              </button>
              <button className="px-6 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-purple-900 transition-all duration-300 font-serif">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 