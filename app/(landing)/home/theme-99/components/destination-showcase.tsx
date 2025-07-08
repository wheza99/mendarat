import React from 'react';

const destinations = [
  {
    name: 'Alpine Peaks',
    desc: 'Conquer breathtaking mountain trails and enjoy panoramic views.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none"><path d="M0 64 L24 32 L48 56 L72 16 L96 64 Z" fill="#43a047" /><path d="M24 32 L48 56 L72 16" stroke="#795548" strokeWidth="3" fill="none" /><circle cx="72" cy="16" r="4" fill="#ffeb3b" /></svg>
    )
  },
  {
    name: 'Tropical Shores',
    desc: 'Relax on golden beaches and swim in crystal-clear waters.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none"><ellipse cx="48" cy="56" rx="40" ry="8" fill="#ffe082" /><rect x="24" y="32" width="48" height="16" rx="8" fill="#81d4fa" /><circle cx="80" cy="16" r="8" fill="#ffeb3b" /></svg>
    )
  },
  {
    name: 'Desert Dunes',
    desc: 'Experience the thrill of vast, rolling sand dunes and starry nights.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none"><ellipse cx="48" cy="56" rx="40" ry="8" fill="#ffe082" /><path d="M0 64 Q24 32 48 56 Q72 80 96 64" stroke="#ff9800" strokeWidth="3" fill="none" /></svg>
    )
  },
  {
    name: 'Forest Trails',
    desc: 'Wander through lush forests and discover hidden waterfalls.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none"><rect x="40" y="24" width="16" height="32" rx="8" fill="#43a047" /><ellipse cx="48" cy="24" rx="24" ry="16" fill="#a5d6a7" /></svg>
    )
  }
];

export default function DestinationShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 via-green-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center font-serif">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((d, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="mb-4">{d.img}</div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{d.name}</h3>
              <p className="text-sky-800 text-center">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 