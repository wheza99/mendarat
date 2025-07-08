import React from 'react';

const tiers = [
  {
    name: 'APPRENTICE',
    price: '$299',
    features: ['Basic steam engineering', 'Standard brass components', 'Industrial consultation'],
    highlight: false
  },
  {
    name: 'JOURNEYMAN',
    price: '$799',
    features: ['Advanced steam systems', 'Custom brass fabrication', 'Priority maintenance', 'All Apprentice features'],
    highlight: true
  },
  {
    name: 'MASTER',
    price: '$1499',
    features: ['Full industrial solutions', 'Exclusive brass work', '24/7 support', 'All Journeyman features'],
    highlight: false
  }
];

export default function IndustrialPricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-900/50 via-orange-900/50 to-yellow-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8 text-center font-serif">CHOOSE YOUR RANK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-none border-4 p-8 bg-black/50 ${tier.highlight ? 'border-yellow-400 scale-105 z-10' : 'border-amber-400'} transition-transform`}
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-2 font-serif">{tier.name}</h3>
              <div className="text-4xl font-extrabold text-amber-400 mb-4 font-serif">{tier.price}</div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-yellow-200 flex items-center font-serif text-sm"><span className="mr-2">⚙</span> {f}</li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white font-bold rounded-none border-2 border-amber-400 hover:scale-105 transition-transform font-serif">
                SELECT
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 