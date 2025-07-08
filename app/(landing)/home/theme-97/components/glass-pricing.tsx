import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    features: ['1 Project', 'Basic Support', 'Glass UI'],
    popular: false
  },
  {
    name: 'Pro',
    price: '$99',
    features: ['5 Projects', 'Priority Support', 'Custom Glass Effects', 'API Access'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$249',
    features: ['Unlimited Projects', '24/7 Support', 'Full Customization', 'Dedicated Manager'],
    popular: false
  },
];

export default function GlassPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative backdrop-blur-xl bg-white/30 rounded-2xl border-4 ${plan.popular ? 'border-cyan-400' : 'border-cyan-100'} shadow-xl p-8 flex flex-col items-center text-center`} style={{boxShadow:'0 0 0 4px #67e8f9, 0 0 16px #a5b4fc'}}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-cyan-600 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-blue-500 mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-blue-900/80 font-sans flex items-center justify-center gap-2">
                    <span className="text-cyan-400">●</span> {f}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-full font-bold hover:bg-blue-500 hover:text-white transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 