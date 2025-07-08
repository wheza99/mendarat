import React from 'react';

export default function AuroraPricing() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 500rb",
      description: "Untuk personal & UMKM yang ingin tampil modern.",
      features: ["1 Landing Page", "Basic Support", "SEO Ready", "1x Revisi"],
      color: "cyan"
    },
    {
      name: "Pro",
      price: "Rp 1,5jt",
      description: "Untuk bisnis berkembang yang butuh fitur lebih.",
      features: ["3 Landing Page", "Prioritas Support", "Integrasi API", "3x Revisi"],
      color: "green"
    },
    {
      name: "Enterprise",
      price: "Rp 3jt+",
      description: "Untuk perusahaan besar & kebutuhan custom.",
      features: ["Custom Page", "Dedicated Support", "Integrasi Lanjutan", "Unlimited Revisi"],
      color: "indigo"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-aurora">
            Paket Harga
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang sesuai kebutuhan Anda, semua dengan sentuhan aurora.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="aurora-card p-8 text-center"
            >
              <h3 className={`text-2xl font-bold mb-2 neon-text-${plan.color}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>
              <p className="text-cyan-100 text-sm mb-4">
                {plan.description}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-cyan-100 text-sm justify-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-aurora-pulse"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="btn-aurora px-8 py-3 rounded-lg font-semibold">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 