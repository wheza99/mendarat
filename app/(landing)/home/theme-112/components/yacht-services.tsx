import React from 'react';

export default function YachtServices() {
  const services = [
    {
      title: 'Private Charter',
      description: 'Exclusive yacht rentals with personalized itineraries and dedicated crew',
      icon: '🛥️',
      price: 'From $10,000/day',
      duration: '1-14 days',
      features: ['Custom Itinerary', 'Professional Crew', 'All-Inclusive']
    },
    {
      title: 'Corporate Events',
      description: 'Luxury yacht experiences for business meetings and corporate entertainment',
      icon: '🏢',
      price: 'From $15,000/day',
      duration: '1-3 days',
      features: ['Meeting Facilities', 'Catering', 'AV Equipment']
    },
    {
      title: 'Wedding Charters',
      description: 'Romantic wedding ceremonies and receptions aboard luxury yachts',
      icon: '💒',
      price: 'From $20,000/day',
      duration: '1 day',
      features: ['Wedding Coordinator', 'Photography', 'Catering']
    },
    {
      title: 'Fishing Expeditions',
      description: 'Professional fishing trips with expert guides and top-quality equipment',
      icon: '🎣',
      price: 'From $5,000/day',
      duration: '1-7 days',
      features: ['Fishing Gear', 'Expert Guide', 'Catch Processing']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            CHARTER SERVICES
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Tailored yacht experiences for every occasion and preference
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Ocean wave effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-cyan-100 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="text-sm text-cyan-300">{service.duration}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cyan-100">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 overflow-hidden font-bold">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Marine wave decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              CUSTOM CHARTER?
            </h3>
            <p className="text-cyan-100 mb-6 max-w-md mx-auto">
              Let us create a bespoke yacht experience tailored to your specific needs
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              REQUEST QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 