import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Rp199K',
    desc: 'Landing page kolase sederhana',
    features: ['1 halaman', 'Ilustrasi standar', 'Support email'],
    color: 'bg-yellow-200',
    border: 'border-yellow-300',
    rotate: 'rotate-2',
    popular: false,
  },
  {
    name: 'Pro',
    price: 'Rp399K',
    desc: 'Kolase kreatif & fitur lengkap',
    features: ['3 halaman', 'Ilustrasi custom', 'Animasi playful', 'Prioritas support'],
    color: 'bg-pink-200',
    border: 'border-pink-300',
    rotate: '-rotate-2',
    popular: true,
  },
  {
    name: 'Elite',
    price: 'Rp799K',
    desc: 'Landing page kolase premium',
    features: ['5+ halaman', 'Ilustrasi premium', 'Animasi custom', 'Integrasi lanjutan'],
    color: 'bg-blue-200',
    border: 'border-blue-300',
    rotate: 'rotate-1',
    popular: false,
  },
];

export default function PaperPricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 text-center mb-12 font-sans tracking-wider drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>
          Paper Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 ${plan.color} ${plan.border} border-2 shadow-lg ${plan.rotate} rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans ${plan.popular ? 'scale-105 z-10' : ''}`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              {/* Best Value Sticker */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-200 border-2 border-green-400 text-green-900 font-bold px-4 py-1 rounded-full shadow-lg text-xs rotate-3" style={{boxShadow: '1px 2px 0 #fff7d6'}}>Best Value</span>
              )}
              <h3 className="text-xl font-bold text-yellow-800 text-center mb-2 drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>{plan.name}</h3>
              <div className="text-3xl font-extrabold text-pink-700 mb-2">{plan.price}</div>
              <p className="text-pink-700 text-center text-base mb-4">{plan.desc}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-green-900 font-mono">
                    <span className="mr-2">✔️</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-green-200 text-green-900 font-bold rounded-[10px] border-2 border-green-400 shadow hover:scale-105 transition-transform" style={{boxShadow: '1px 2px 0 #fff7d6'}}>Pilih Paket</button>
              {/* Decorative torn edge */}
              <div className="absolute left-0 bottom-0 w-full h-3 bg-repeat-x" style={{backgroundImage: 'url("/torn-edge.png")'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 