import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-green-700" fill="none" viewBox="0 0 48 48"><rect x="12" y="20" width="24" height="16" rx="8" fill="#a5d6a7" /><path d="M24 20V36" stroke="#43a047" strokeWidth="2" /><circle cx="24" cy="28" r="4" fill="#43a047" /></svg>
    ),
    title: 'Guided Hikes',
    desc: 'Join expert-led hikes for all skill levels, from easy walks to summit climbs.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-700" fill="none" viewBox="0 0 48 48"><rect x="16" y="24" width="16" height="12" rx="6" fill="#ffe082" /><path d="M24 24V36" stroke="#ff9800" strokeWidth="2" /><circle cx="24" cy="30" r="3" fill="#ff9800" /></svg>
    ),
    title: 'Gear Rental',
    desc: 'Rent top-quality gear for camping, hiking, and adventure sports.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-sky-700" fill="none" viewBox="0 0 48 48"><ellipse cx="24" cy="40" rx="16" ry="4" fill="#81d4fa" /><rect x="12" y="16" width="24" height="16" rx="8" fill="#b3e5fc" /><circle cx="24" cy="24" r="6" fill="#0288d1" /></svg>
    ),
    title: 'Group Tours',
    desc: 'Meet fellow adventurers and explore together on our group expeditions.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-orange-700" fill="none" viewBox="0 0 48 48"><rect x="10" y="18" width="28" height="12" rx="6" fill="#ffe0b2" stroke="#ff9800" strokeWidth="2" /><path d="M24 18V30" stroke="#ff9800" strokeWidth="2" /><circle cx="24" cy="24" r="3" fill="#43a047" /></svg>
    ),
    title: 'Custom Expeditions',
    desc: 'Design your own adventure with our flexible, personalized planning.'
  }
];

export default function AdventureServices() {
  return (
    <section className="py-16 bg-white/90">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center font-serif">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-b from-yellow-50 via-green-50 to-sky-50 rounded-xl shadow-lg p-6">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{s.title}</h3>
              <p className="text-sky-800 text-center">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 