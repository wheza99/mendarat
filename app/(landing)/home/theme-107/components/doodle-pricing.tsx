import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: 'Rp99K',
    desc: 'Doodle digital sederhana',
    features: ['1 karya', 'Format PNG', 'Support email'],
    color: 'bg-yellow-100',
    badge: null,
  },
  {
    name: 'Fun',
    price: 'Rp199K',
    desc: 'Doodle custom & animasi',
    features: ['3 karya', 'Animasi GIF', 'Prioritas support', 'Request tema'],
    color: 'bg-pink-100',
    badge: 'Fun Pick',
  },
  {
    name: 'Ultimate',
    price: 'Rp399K',
    desc: 'Doodle premium & merchandise',
    features: ['5+ karya', 'Merchandise', 'Animasi custom', 'Konsultasi desain'],
    color: 'bg-blue-100',
    badge: null,
  },
];

function ZigzagBorder() {
  return (
    <svg viewBox="0 0 200 8" fill="none" className="absolute left-0 bottom-0 w-full h-2">
      <polyline points="0,8 10,0 20,8 30,0 40,8 50,0 60,8 70,0 80,8 90,0 100,8 110,0 120,8 130,0 140,8 150,0 160,8 170,0 180,8 190,0 200,8" stroke="#fbbf24" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function DoodlePricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 text-center mb-12 font-sans tracking-wider" style={{textShadow: '1px 2px 0 #fff'}}>
          Doodle Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 ${plan.color} shadow-lg rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans animate-wiggle ${plan.badge ? 'scale-105 z-10' : ''}`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              {/* Fun Pick Badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-white font-bold px-4 py-1 rounded-full shadow-lg text-xs rotate-3 border-2 border-pink-400" style={{boxShadow: '1px 2px 0 #fff'}}>{plan.badge}</span>
              )}
              <h3 className="text-xl font-bold text-blue-800 text-center mb-2 drop-shadow" style={{textShadow: '1px 2px 0 #fff'}}>{plan.name}</h3>
              <div className="text-3xl font-extrabold text-pink-500 mb-2">{plan.price}</div>
              <p className="text-pink-700 text-center text-base mb-4">{plan.desc}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-blue-900 font-mono">
                    <span className="mr-2">✔️</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-yellow-200 text-blue-900 font-bold rounded-[10px] border-2 border-pink-400 shadow hover:scale-105 transition-transform" style={{boxShadow: '1px 2px 0 #fff'}}>
                Pilih Paket
              </button>
              <ZigzagBorder />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wiggle { animation: wiggle 2s infinite; }
      `}</style>
    </section>
  );
} 