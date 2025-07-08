import React from 'react';

const pricing = [
  {
    name: 'Starter',
    price: 'Rp1.500K',
    features: [
      'Landing Page',
      '1x Revisi',
      'SEO Basic',
      'Support 1 Bulan'
    ],
    highlight: false
  },
  {
    name: 'Pro',
    price: 'Rp3.000K',
    features: [
      'Landing Page + Blog',
      '3x Revisi',
      'SEO Advanced',
      'Support 3 Bulan',
      'Integrasi API'
    ],
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Semua Fitur Pro',
      'Integrasi Layanan Bisnis',
      'Kustomisasi Penuh',
      'Support Prioritas'
    ],
    highlight: false
  }
];

export default function FuturisticPricing() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-futuristic">
            Paket Harga
          </h2>
          <p className="text-xl text-blue-400 max-w-2xl mx-auto leading-relaxed">
            Pilih paket yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((pkg, idx) => (
            <div
              key={idx}
              className={`futuristic-card p-8 text-center border-2 ${pkg.highlight ? 'border-blue-400 neon-text-blue scale-105 shadow-xl' : 'border-blue-200'} transition-transform`}
            >
              <h3 className="text-2xl font-bold mb-2 neon-text-blue">
                {pkg.name}
              </h3>
              <div className="text-4xl font-bold mb-6 text-blue-700">
                {pkg.price}
              </div>
              <ul className="mb-8 space-y-2">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center text-blue-400 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-futuristic-pulse"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`btn-futuristic px-8 py-4 rounded-xl font-semibold ${pkg.highlight ? 'bg-blue-600 text-white' : ''}`}>
                {pkg.highlight ? 'Paling Populer' : 'Pilih Paket'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 