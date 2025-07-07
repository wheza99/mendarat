import React from 'react';

const plans = [
  {
    name: "Basic Nature",
    price: "Rp2jt",
    desc: "Desain minimalis, konsultasi 1x, revisi 1x.",
    features: ["Desain 2D", "Konsultasi 1x", "Revisi 1x"],
    color: "green-200"
  },
  {
    name: "Eco Living",
    price: "Rp5jt",
    desc: "Desain lengkap, konsultasi 3x, revisi 3x, support 1 bulan.",
    features: ["Desain 2D/3D", "Konsultasi 3x", "Revisi 3x", "Support 1 bulan"],
    color: "green-300",
    popular: true
  },
  {
    name: "Premium Nature",
    price: "Rp10jt",
    desc: "Desain custom, konsultasi tak terbatas, revisi tak terbatas, support 3 bulan.",
    features: ["Desain Custom", "Konsultasi Unlimited", "Revisi Unlimited", "Support 3 bulan"],
    color: "green-400"
  }
];

export default function EcoPricing() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto animate-nature-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10 text-center font-sans">Paket Harga</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className={`flex flex-col items-center bg-white rounded-2xl shadow p-8 border-2 border-${p.color} transition-transform duration-300 hover:scale-105 animate-nature-grow ${p.popular ? 'ring-2 ring-green-400' : ''}`}>
            {p.popular && (
              <div className="mb-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Paling Populer</div>
            )}
            <h3 className="text-lg font-semibold text-green-700 mb-2 font-sans">{p.name}</h3>
            <div className="text-3xl font-bold text-green-800 mb-2">{p.price}</div>
            <p className="text-green-800 text-sm font-light mb-4 text-center">{p.desc}</p>
            <ul className="mb-6 space-y-2">
              {p.features.map((f, idx) => (
                <li key={idx} className="text-green-700 text-sm flex items-center justify-center"><span className="mr-2">✔️</span>{f}</li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-200">Pilih Paket</button>
          </div>
        ))}
      </div>
    </section>
  );
} 