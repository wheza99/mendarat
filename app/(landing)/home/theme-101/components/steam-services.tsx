import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="16" width="32" height="16" rx="4" fill="#92400e" stroke="#d97706" strokeWidth="2" />
        <rect x="12" y="20" width="24" height="8" rx="2" fill="#d97706" />
        <rect x="16" y="24" width="4" height="4" fill="#92400e" />
        <rect x="24" y="24" width="4" height="4" fill="#92400e" />
        <rect x="32" y="24" width="4" height="4" fill="#92400e" />
        <rect x="20" y="28" width="8" height="2" fill="#92400e" />
      </svg>
    ),
    title: 'Steam Engineering',
    desc: 'Expert steam engineering services for industrial power systems and machinery.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 48 48">
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
    title: 'Brass Fabrication',
    desc: 'Custom brass fabrication and precision machining for industrial applications.'
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
    title: 'Industrial Maintenance',
    desc: 'Comprehensive maintenance services for steam-powered industrial equipment.'
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
    title: 'Mechanical Design',
    desc: 'Custom mechanical design and engineering for steampunk-inspired projects.'
  }
];

export default function SteamServices() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-8 text-center font-serif">STEAM SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-b from-amber-900/50 via-orange-900/50 to-yellow-900/50 rounded-none border-2 border-orange-400 p-6">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 font-serif">{s.title}</h3>
              <p className="text-amber-200 text-center font-serif text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 