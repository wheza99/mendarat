import React from 'react';

const services = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="8" y="16" width="20" height="12" rx="3" fill="#bbf7d0" /><polygon points="18,6 6,18 30,18" fill="#4ade80" /></svg>
    ),
    title: "Desain Hunian Sehat",
    desc: "Rumah dengan sirkulasi udara dan cahaya alami optimal."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#bbf7d0" /><rect x="15" y="10" width="6" height="16" rx="3" fill="#4ade80" /><ellipse cx="18" cy="10" rx="6" ry="4" fill="#4ade80" /></svg>
    ),
    title: "Ruang Hijau",
    desc: "Taman dan ruang terbuka hijau untuk relaksasi dan udara segar."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#bbf7d0" /><circle cx="18" cy="18" r="8" fill="#fde68a" /><path d="M18 6V2M18 34v-4M6 18H2M34 18h-4M28.28 7.72l2.83-2.83M7.72 28.28l-2.83 2.83M28.28 28.28l2.83 2.83M7.72 7.72L4.89 4.89" stroke="#fbbf24" strokeWidth="2"/></svg>
    ),
    title: "Pencahayaan Alami",
    desc: "Memaksimalkan sinar matahari untuk kesehatan dan efisiensi energi."
  }
];

export default function SustainServices() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto animate-nature-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10 text-center font-sans">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow p-8 transition-transform duration-300 hover:scale-105 animate-nature-grow">
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold text-green-700 mb-2 font-sans">{s.title}</h3>
            <p className="text-green-800 text-sm font-light text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 