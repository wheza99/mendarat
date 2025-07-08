import React from 'react';

const tiers = [
  {
    name: 'PLAYER 1',
    price: '$9.99',
    features: ['Access to classic games', 'Basic arcade setup', 'Standard controls'],
    highlight: false
  },
  {
    name: 'PLAYER 2',
    price: '$19.99',
    features: ['All Player 1 features', 'Premium arcade cabinets', 'Tournament access', 'Priority booking'],
    highlight: true
  },
  {
    name: 'CHAMPION',
    price: '$39.99',
    features: ['All Player 2 features', 'Private gaming sessions', 'Exclusive events', 'VIP treatment'],
    highlight: false
  }
];

export default function RetroPricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-900/50 via-cyan-900/50 to-pink-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center font-mono tracking-wider">CHOOSE YOUR LEVEL</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-none border-4 p-8 bg-black/50 ${tier.highlight ? 'border-yellow-400 scale-105 z-10' : 'border-cyan-400'} transition-transform`}
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-2 font-mono tracking-wider">{tier.name}</h3>
              <div className="text-4xl font-extrabold text-cyan-400 mb-4 font-mono">{tier.price}</div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-yellow-300 flex items-center font-mono text-sm"><span className="mr-2">▶</span> {f}</li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 text-white font-bold rounded-none border-2 border-yellow-400 hover:scale-105 transition-transform font-mono">
                SELECT
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 