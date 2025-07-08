import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Rp100.000',
    features: ['Akses artikel harian', 'Newsletter mingguan', 'Tanpa iklan'],
    popular: false
  },
  {
    name: 'Pro',
    price: 'Rp250.000',
    features: ['Akses semua artikel', 'Newsletter harian', 'E-paper premium', 'Prioritas support'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Rp500.000',
    features: ['Akses tim', 'Konsultasi editorial', 'Custom report', 'Brand exposure'],
    popular: false
  },
];

export default function NewsPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white border-4 ${plan.popular ? 'border-red-700' : 'border-gray-700'} rounded-xl shadow p-8 flex flex-col items-center text-center`} style={{boxShadow:'0 0 0 4px #b91c1c, 0 0 16px #fbbf24'}}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
              )}
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-red-700 mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-gray-700 font-sans flex items-center justify-center gap-2">
                    <span className="text-red-700">●</span> {f}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-full font-bold hover:bg-red-700 hover:text-white transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 