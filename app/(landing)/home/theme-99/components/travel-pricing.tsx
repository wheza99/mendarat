import React from 'react';

const tiers = [
  {
    name: 'Explorer',
    price: '$299',
    features: ['Guided day trips', 'Essential gear included', 'Group activities'],
    highlight: false
  },
  {
    name: 'Adventurer',
    price: '$799',
    features: ['Multi-day expeditions', 'Premium gear', 'Custom itineraries', 'All Explorer features'],
    highlight: true
  },
  {
    name: 'Expedition',
    price: '$1499',
    features: ['Private guide', 'All gear included', 'Exclusive destinations', 'All Adventurer features'],
    highlight: false
  }
];

export default function TravelPricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 via-green-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center font-serif">Choose Your Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-xl shadow-xl p-8 bg-white border-4 ${tier.highlight ? 'border-orange-400 scale-105 z-10' : 'border-green-200'} transition-transform`}
            >
              <h3 className="text-2xl font-bold text-orange-700 mb-2 font-serif">{tier.name}</h3>
              <div className="text-4xl font-extrabold text-green-800 mb-4">{tier.price}</div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-sky-800 flex items-center"><span className="mr-2">✔️</span> {f}</li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 