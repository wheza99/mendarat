import React from 'react';

const products = [
  {
    name: 'Steam Engine',
    desc: 'High-efficiency steam engines for industrial applications and power generation.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#92400e" />
        <rect x="8" y="8" width="80" height="48" rx="4" fill="#a16207" />
        <rect x="16" y="16" width="64" height="32" rx="2" fill="#d97706" />
        <circle cx="32" cy="32" r="8" fill="#92400e" />
        <circle cx="64" cy="32" r="8" fill="#92400e" />
        <rect x="28" y="28" width="8" height="8" fill="#d97706" />
        <rect x="60" y="28" width="8" height="8" fill="#d97706" />
        <rect x="40" y="40" width="16" height="4" fill="#92400e" />
      </svg>
    )
  },
  {
    name: 'Brass Gears',
    desc: 'Precision-crafted brass gears for mechanical systems and clockwork mechanisms.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#92400e" />
        <circle cx="32" cy="32" r="16" fill="none" stroke="#d97706" strokeWidth="3" />
        <circle cx="32" cy="32" r="8" fill="none" stroke="#92400e" strokeWidth="2" />
        <circle cx="32" cy="32" r="2" fill="#d97706" />
        {Array.from({ length: 8 }, (_, i) => (
          <rect
            key={i}
            x="28"
            y="8"
            width="8"
            height="6"
            fill="#d97706"
            transform={`rotate(${i * 45} 32 32)`}
          />
        ))}
        <circle cx="64" cy="32" r="12" fill="none" stroke="#d97706" strokeWidth="2" />
        <circle cx="64" cy="32" r="6" fill="none" stroke="#92400e" strokeWidth="1" />
        <circle cx="64" cy="32" r="2" fill="#d97706" />
        {Array.from({ length: 6 }, (_, i) => (
          <rect
            key={i}
            x="60"
            y="12"
            width="8"
            height="4"
            fill="#d97706"
            transform={`rotate(${i * 60} 64 32)`}
          />
        ))}
      </svg>
    )
  },
  {
    name: 'Steam Valves',
    desc: 'Reliable steam valves and pressure regulators for industrial control systems.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#92400e" />
        <rect x="32" y="8" width="32" height="48" rx="4" fill="#a16207" stroke="#d97706" strokeWidth="2" />
        <rect x="36" y="12" width="24" height="40" rx="2" fill="#d97706" />
        <circle cx="48" cy="20" r="4" fill="#92400e" />
        <circle cx="48" cy="44" r="4" fill="#92400e" />
        <rect x="44" y="24" width="8" height="16" fill="#92400e" />
        <rect x="40" y="28" width="16" height="8" fill="#a16207" />
      </svg>
    )
  },
  {
    name: 'Copper Pipes',
    desc: 'High-quality copper piping systems for steam distribution and industrial applications.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#92400e" />
        <rect x="8" y="24" width="80" height="16" rx="8" fill="#d97706" stroke="#92400e" strokeWidth="2" />
        <rect x="16" y="28" width="64" height="8" rx="4" fill="#a16207" />
        <circle cx="24" cy="32" r="6" fill="#92400e" />
        <circle cx="48" cy="32" r="6" fill="#92400e" />
        <circle cx="72" cy="32" r="6" fill="#92400e" />
        <rect x="20" y="30" width="8" height="4" fill="#d97706" />
        <rect x="44" y="30" width="8" height="4" fill="#d97706" />
        <rect x="68" y="30" width="8" height="4" fill="#d97706" />
      </svg>
    )
  }
];

export default function MechanicalShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-900/50 via-orange-900/50 to-yellow-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8 text-center font-serif">MECHANICAL PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-black/50 rounded-none border-2 border-amber-400 p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="mb-4">{product.img}</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2 font-serif">{product.name}</h3>
              <p className="text-amber-200 text-center font-serif text-sm">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 