import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Rp500.000',
    features: ['1 ilustrasi', '1x revisi', 'File digital'],
    popular: false
  },
  {
    name: 'Pro',
    price: 'Rp1.200.000',
    features: ['3 ilustrasi', '3x revisi', 'Cetak + digital', 'Custom palette'],
    popular: true
  },
  {
    name: 'Ultimate',
    price: 'Rp2.500.000',
    features: ['Unlimited ilustrasi', 'Unlimited revisi', 'Konsultasi kreatif', 'Prioritas pengerjaan'],
    popular: false
  },
];

export default function ArtPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-400 text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white/80 rounded-2xl border-4 ${plan.popular ? 'border-pink-400' : 'border-pink-100'} shadow p-8 flex flex-col items-center text-center`} style={{boxShadow:'0 0 0 4px #f9a8d4, 0 0 16px #a5b4fc'}}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-400 text-white text-xs font-serif px-4 py-1 rounded-full shadow">Most Popular</span>
              )}
              <h3 className="text-xl font-serif font-semibold text-pink-400 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-blue-900/80 font-sans flex items-center justify-center gap-2">
                    <span className="text-pink-300">●</span> {f}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-pink-400 text-white font-serif rounded-full hover:bg-blue-400 hover:text-white transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 