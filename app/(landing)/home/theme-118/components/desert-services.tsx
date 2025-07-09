import React from 'react';

export default function DesertServices() {
  const services = [
    {
      icon: "🏜️",
      title: "Desert Safari",
      description: "Professional desert safari and adventure tours",
      price: "From $100",
      duration: "4-8 hours",
      features: ["4x4 Vehicles", "Expert Guide", "Safety Equipment"]
    },
    {
      icon: "🐪",
      title: "Camel Tours",
      description: "Traditional camel caravan experiences",
      price: "From $80",
      duration: "2-6 hours",
      features: ["Camel Ride", "Desert Views", "Cultural Experience"]
    },
    {
      icon: "🌴",
      title: "Oasis Retreats",
      description: "Peaceful oasis retreat and relaxation",
      price: "From $200",
      duration: "1-3 days",
      features: ["Private Oasis", "Spa Services", "Desert Views"]
    },
    {
      icon: "🏺",
      title: "Archaeological Tours",
      description: "Ancient artifact and historical site tours",
      price: "From $60",
      duration: "3-6 hours",
      features: ["Expert Guide", "Historical Sites", "Cultural Insight"]
    },
    {
      icon: "📸",
      title: "Photography Tours",
      description: "Professional desert photography experiences",
      price: "From $120",
      duration: "4-8 hours",
      features: ["Professional Guide", "Equipment Provided", "Best Locations"]
    },
    {
      icon: "🌟",
      title: "Cultural Experiences",
      description: "Traditional Arabian culture and customs",
      price: "From $150",
      duration: "Evening",
      features: ["Traditional Music", "Local Cuisine", "Cultural Activities"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            DESERT SERVICES
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Professional desert and cultural services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Service icon */}
              <div className="text-4xl mb-6">{service.icon}</div>
              
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-serif">
                {service.title}
              </h3>
              
              <p className="text-amber-200 mb-6 leading-relaxed font-serif">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Price:</span>
                  <span className="text-amber-400 font-bold font-serif">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Duration:</span>
                  <span className="text-amber-400 font-bold font-serif">{service.duration}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-amber-300 font-semibold mb-3 font-serif">Includes:</h4>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-amber-400 mr-2">🌵</span>
                      <span className="text-amber-200 text-sm font-serif">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                  BOOK SERVICE
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">
              DESERT GUARANTEE
            </h3>
            <p className="text-amber-200 mb-6 max-w-md mx-auto font-serif">
              All our desert services come with safety guarantee and satisfaction promise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                GET QUOTE
              </button>
              <button className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-amber-900 transition-all duration-300 font-serif">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 