import React from 'react';

export default function ParadiseShowcase() {
  const destinations = [
    {
      name: 'Bali Paradise',
      location: 'Indonesia',
      image: '🏝️',
      description: 'Tropical beaches, ancient temples, and vibrant culture',
      price: '$1,299',
      rating: '4.9'
    },
    {
      name: 'Maldives Escape',
      location: 'Maldives',
      image: '🏖️',
      description: 'Overwater bungalows and pristine coral reefs',
      price: '$2,499',
      rating: '4.8'
    },
    {
      name: 'Hawaiian Dreams',
      location: 'Hawaii',
      image: '🌺',
      description: 'Volcanic landscapes and Pacific island culture',
      price: '$1,899',
      rating: '4.7'
    },
    {
      name: 'Caribbean Bliss',
      location: 'Caribbean',
      image: '🏄‍♂️',
      description: 'Crystal-clear waters and tropical island vibes',
      price: '$1,599',
      rating: '4.9'
    },
    {
      name: 'Fiji Adventure',
      location: 'Fiji',
      image: '🤿',
      description: 'Diving paradise with friendly island communities',
      price: '$1,799',
      rating: '4.8'
    },
    {
      name: 'Seychelles Luxury',
      location: 'Seychelles',
      image: '🌊',
      description: 'Exclusive island resorts and pristine nature',
      price: '$3,299',
      rating: '4.9'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-700 to-teal-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-200">Paradise</span> Destinations
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the world's most beautiful tropical destinations with our curated selection of island getaways
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {destination.image}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {destination.name}
                </h3>
                <p className="text-cyan-200 mb-3 font-medium">
                  {destination.location}
                </p>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-teal-200">
                    {destination.price}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-300">⭐</span>
                    <span className="text-white font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-full transition-all duration-300">
                  🌊 Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tropical wave decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-white/60">
            <span className="text-3xl animate-bounce">🏝️</span>
            <span className="text-xl font-light">DISCOVER YOUR PARADISE</span>
            <span className="text-3xl animate-pulse">🌊</span>
          </div>
        </div>
      </div>
    </section>
  );
} 