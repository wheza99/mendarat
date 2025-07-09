import React from 'react';

export default function TropicalFeatures() {
  const features = [
    {
      icon: '🏖️',
      title: 'Pristine Beaches',
      description: 'White sand beaches with crystal-clear turquoise waters perfect for swimming and sunbathing'
    },
    {
      icon: '🤿',
      title: 'Scuba Diving',
      description: 'Explore vibrant coral reefs and marine life with certified diving instructors'
    },
    {
      icon: '🏄‍♂️',
      title: 'Water Sports',
      description: 'Surfing, paddleboarding, kayaking, and jet skiing for adventure seekers'
    },
    {
      icon: '🌅',
      title: 'Sunset Cruises',
      description: 'Romantic sunset cruises with dinner and live music on the open ocean'
    },
    {
      icon: '🏝️',
      title: 'Island Hopping',
      description: 'Visit multiple islands in one day with our guided island hopping tours'
    },
    {
      icon: '🍹',
      title: 'Beach Bars',
      description: 'Tropical cocktails and fresh seafood at beachfront bars and restaurants'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyan-600 to-blue-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-teal-200">Tropical</span> Experiences
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From relaxing on pristine beaches to thrilling water adventures, discover everything our tropical paradise has to offer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-6 text-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-blue-100 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Tropical decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <span className="text-2xl">🌴</span>
            <span className="text-lg font-light">TROPICAL PARADISE</span>
            <span className="text-2xl">🌊</span>
          </div>
        </div>
      </div>
    </section>
  );
} 