import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" stroke="#43a047" strokeWidth="3" fill="#e0f2f1" /><path d="M24 8 L28 24 L24 40 L20 24 Z" fill="#ff9800" stroke="#795548" strokeWidth="2" /><circle cx="24" cy="24" r="3" fill="#43a047" /></svg>
    ),
    title: 'Expert Guides',
    desc: 'Travel with seasoned guides who know every trail, peak, and hidden gem.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" rx="6" fill="#81d4fa" stroke="#0288d1" strokeWidth="2" /><path d="M24 16V36" stroke="#0288d1" strokeWidth="2" /><circle cx="24" cy="26" r="4" fill="#ffeb3b" /></svg>
    ),
    title: 'Custom Itineraries',
    desc: 'Personalized trips tailored to your interests and adventure level.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 48 48"><ellipse cx="24" cy="40" rx="16" ry="4" fill="#ffe082" /><path d="M12 40 L24 8 L36 40" stroke="#ff9800" strokeWidth="3" fill="none" /><circle cx="24" cy="8" r="3" fill="#43a047" /></svg>
    ),
    title: 'Stunning Destinations',
    desc: 'From mountains to beaches, explore the world’s most beautiful places.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 48 48"><rect x="10" y="18" width="28" height="12" rx="6" fill="#ffe0b2" stroke="#ff9800" strokeWidth="2" /><path d="M24 18V30" stroke="#ff9800" strokeWidth="2" /><circle cx="24" cy="24" r="3" fill="#43a047" /></svg>
    ),
    title: 'All-Inclusive Packages',
    desc: 'Enjoy stress-free adventures with everything taken care of for you.'
  }
];

export default function TravelFeatures() {
  return (
    <section className="py-16 bg-white/80">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center font-serif">Why Travel With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-b from-green-50 via-yellow-50 to-sky-50 rounded-xl shadow-lg p-6">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{f.title}</h3>
              <p className="text-sky-800 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 