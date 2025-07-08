import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Rp1.500K',
    desc: 'Basic editorial package for small projects.',
    features: ['1 Article', 'Basic Layout', 'Email Support'],
    accent: 'border-red-500',
    badge: null,
  },
  {
    name: 'Pro',
    price: 'Rp3.000K',
    desc: 'Full editorial suite for growing brands.',
    features: ['3 Articles', 'Custom Layout', 'Priority Support', 'Photo Editing'],
    accent: 'border-yellow-400',
    badge: "Editor's Pick",
  },
  {
    name: 'Elite',
    price: 'Rp6.000K',
    desc: 'Premium magazine experience for enterprises.',
    features: ['10+ Articles', 'Advanced Layout', 'Dedicated Editor', 'Brand Strategy'],
    accent: 'border-black',
    badge: null,
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12 font-serif tracking-tight uppercase border-b-4 border-black/10 pb-4">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div key={plan.name} className={`relative flex flex-col gap-4 p-8 bg-gray-50 rounded shadow border-l-8 ${plan.accent} border-b-4 border-black/10`}>
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white font-bold px-4 py-1 rounded shadow text-xs uppercase tracking-widest border-b-4 border-black">{plan.badge}</span>
              )}
              <h3 className="text-2xl font-serif font-bold text-black mb-2 tracking-tight leading-tight">{plan.name}</h3>
              <div className="text-3xl font-extrabold text-red-500 mb-2">{plan.price}</div>
              <p className="text-gray-700 text-base font-sans leading-relaxed mb-4">{plan.desc}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-black font-mono">
                    <span className="mr-2">✔️</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-black text-white font-bold rounded-none border-b-4 border-red-500 shadow hover:bg-red-500 hover:text-white transition-colors font-serif tracking-widest">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 