import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Rp1.000.000',
    features: ['Konsultasi desain', '1x revisi', 'Material eco-friendly'],
    popular: false
  },
  {
    name: 'Pro',
    price: 'Rp2.500.000',
    features: ['Konsultasi & desain', '3x revisi', 'Material premium', 'Green landscape'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Rp5.000.000',
    features: ['Full project', 'Unlimited revisi', 'Custom eco solution', 'On-site support'],
    popular: false
  },
];

export default function EcoPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center border-2 ${plan.popular ? 'border-green-500' : 'border-green-100'}`}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-green-700 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-green-900/80 flex items-center justify-center gap-2">
                    <span className="text-green-400">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 