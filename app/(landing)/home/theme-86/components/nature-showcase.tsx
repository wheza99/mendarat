import React from 'react';

const showcases = [
  {
    title: "Villa Alam Asri",
    desc: "Hunian modern di tengah alam dengan taman luas dan pencahayaan alami.",
    svg: (
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="38" rx="38" ry="6" fill="#bbf7d0" />
        <path d="M5 38 Q20 10 40 38 Q60 18 75 38" stroke="#4ade80" strokeWidth="3" fill="none" />
        <ellipse cx="40" cy="24" rx="6" ry="10" fill="#4ade80" />
      </svg>
    )
  },
  {
    title: "Kantor Hijau",
    desc: "Ruang kerja sehat dengan ventilasi silang dan area hijau terbuka.",
    svg: (
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="38" rx="38" ry="6" fill="#bbf7d0" />
        <rect x="30" y="18" width="20" height="12" rx="3" fill="#4ade80" />
        <ellipse cx="40" cy="24" rx="6" ry="10" fill="#bbf7d0" />
      </svg>
    )
  },
  {
    title: "Cafe Tepi Danau",
    desc: "Tempat bersantai dengan pemandangan danau dan desain terbuka.",
    svg: (
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="38" rx="38" ry="6" fill="#bbf7d0" />
        <ellipse cx="60" cy="30" rx="8" ry="4" fill="#4ade80" />
        <ellipse cx="20" cy="30" rx="8" ry="4" fill="#4ade80" />
      </svg>
    )
  }
];

export default function NatureShowcase() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto animate-nature-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10 text-center font-sans">Project Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {showcases.map((s, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow p-8 transition-transform duration-300 hover:scale-105 animate-nature-grow">
            <div className="mb-4">{s.svg}</div>
            <h3 className="text-lg font-semibold text-green-700 mb-2 font-sans">{s.title}</h3>
            <p className="text-green-800 text-sm font-light text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 