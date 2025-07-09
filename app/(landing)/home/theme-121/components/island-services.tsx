import React from 'react';

export default function IslandServices() {
  const services = [
    {
      icon: '🏨',
      title: 'Luxury Resorts',
      description: '5-star accommodations with private beaches and world-class amenities',
      features: ['Private beach access', 'Spa treatments', 'Gourmet dining', 'Water sports']
    },
    {
      icon: '🚁',
      title: 'Helicopter Tours',
      description: 'Aerial views of pristine islands and hidden beaches from above',
      features: ['Scenic flights', 'Island hopping', 'Photography tours', 'Sunset rides']
    },
    {
      icon: '🛥️',
      title: 'Yacht Charters',
      description: 'Private yacht experiences with professional crew and gourmet meals',
      features: ['Private yacht', 'Professional crew', 'Gourmet meals', 'Water activities']
    },
    {
      icon: '🏄‍♂️',
      title: 'Adventure Tours',
      description: 'Thrilling water sports and outdoor activities for adventure seekers',
      features: ['Surfing lessons', 'Scuba diving', 'Snorkeling', 'Kayaking']
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-teal-600 to-cyan-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-blue-200">Premium</span> Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the ultimate tropical getaway with our premium island services and exclusive packages
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="text-5xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <span className="text-teal-300">✓</span>
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                    🌊 Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ocean decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <span className="text-2xl animate-pulse">🌴</span>
            <span className="text-lg font-light">PREMIUM TROPICAL EXPERIENCES</span>
            <span className="text-2xl animate-bounce">🏝️</span>
          </div>
        </div>
      </div>
    </section>
  );
} 