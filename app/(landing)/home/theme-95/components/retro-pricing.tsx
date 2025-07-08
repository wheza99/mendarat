import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    features: ['1 Project', 'Basic Support', 'Retro Theme'],
    popular: false
  },
  {
    name: 'Pro',
    price: '$129',
    features: ['5 Projects', 'Priority Support', 'Custom Pixel Art', 'Neon Effects'],
    popular: true
  },
  {
    name: 'Ultimate',
    price: '$299',
    features: ['Unlimited Projects', '24/7 Support', 'Full Customization', 'Game Ready'],
    popular: false
  },
];

export default function RetroPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-300 text-center mb-10 tracking-widest">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-[#181e2a] rounded-2xl border-4 ${plan.popular ? 'border-yellow-300' : 'border-blue-400/40'} shadow p-8 flex flex-col items-center text-center`} style={{boxShadow:'0 0 0 4px #0ea5e9, 0 0 16px #facc15'}}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-blue-900 text-xs font-mono px-4 py-1 rounded-full shadow">Most Popular</span>
              )}
              <h3 className="text-xl font-mono font-semibold text-blue-200 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-yellow-300 mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-blue-100/80 font-mono flex items-center justify-center gap-2">
                    <span className="text-yellow-300">■</span> {f}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-blue-500 text-white font-mono rounded hover:bg-yellow-300 hover:text-blue-900 transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 