import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="#d97706" strokeWidth="3" />
        <circle cx="24" cy="24" r="12" fill="none" stroke="#92400e" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="#d97706" />
        {Array.from({ length: 8 }, (_, i) => (
          <rect
            key={i}
            x="20"
            y="6"
            width="8"
            height="6"
            fill="#d97706"
            transform={`rotate(${i * 45} 24 24)`}
          />
        ))}
      </svg>
    ),
    title: 'Steam Power',
    desc: 'Harness the raw power of steam with our advanced industrial systems.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="12" width="32" height="24" rx="4" fill="#92400e" stroke="#d97706" strokeWidth="2" />
        <rect x="12" y="16" width="24" height="16" rx="2" fill="#a16207" />
        <rect x="16" y="20" width="4" height="4" fill="#d97706" />
        <rect x="24" y="20" width="4" height="4" fill="#d97706" />
        <rect x="32" y="20" width="4" height="4" fill="#d97706" />
        <rect x="16" y="28" width="4" height="4" fill="#d97706" />
        <rect x="24" y="28" width="4" height="4" fill="#d97706" />
        <rect x="32" y="28" width="4" height="4" fill="#d97706" />
      </svg>
    ),
    title: 'Brass Craftsmanship',
    desc: 'Exquisite brass work and precision engineering for lasting quality.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" viewBox="0 0 48 48">
        <rect x="12" y="8" width="24" height="32" rx="4" fill="#92400e" stroke="#d97706" strokeWidth="2" />
        <rect x="16" y="12" width="16" height="24" rx="2" fill="#a16207" />
        <rect x="20" y="16" width="8" height="4" fill="#d97706" />
        <rect x="20" y="24" width="8" height="4" fill="#d97706" />
        <rect x="20" y="32" width="8" height="4" fill="#d97706" />
        <circle cx="24" cy="40" r="3" fill="#d97706" />
      </svg>
    ),
    title: 'Mechanical Precision',
    desc: 'Perfect precision engineering with gears, cogs, and mechanical systems.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-amber-600" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#92400e" stroke="#d97706" strokeWidth="2" />
        <rect x="12" y="12" width="24" height="24" rx="2" fill="#a16207" />
        <rect x="16" y="16" width="4" height="4" fill="#d97706" />
        <rect x="24" y="16" width="4" height="4" fill="#d97706" />
        <rect x="32" y="16" width="4" height="4" fill="#d97706" />
        <rect x="16" y="24" width="4" height="4" fill="#d97706" />
        <rect x="24" y="24" width="4" height="4" fill="#d97706" />
        <rect x="32" y="24" width="4" height="4" fill="#d97706" />
        <rect x="16" y="32" width="4" height="4" fill="#d97706" />
        <rect x="24" y="32" width="4" height="4" fill="#d97706" />
        <rect x="32" y="32" width="4" height="4" fill="#d97706" />
      </svg>
    ),
    title: 'Industrial Innovation',
    desc: 'Cutting-edge industrial solutions with Victorian aesthetic charm.'
  }
];

export default function IndustrialFeatures() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-8 text-center font-serif">INDUSTRIAL FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-b from-amber-900/50 via-orange-900/50 to-yellow-900/50 rounded-none border-2 border-amber-400 p-6">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 font-serif">{f.title}</h3>
              <p className="text-amber-200 text-center font-serif text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 