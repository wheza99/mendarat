import React from 'react';

const features = [
  {
    icon: '🌱',
    title: 'Eco Materials',
    desc: 'Menggunakan bahan ramah lingkungan dan dapat didaur ulang.'
  },
  {
    icon: '💧',
    title: 'Water Saving',
    desc: 'Teknologi hemat air untuk keberlanjutan lingkungan.'
  },
  {
    icon: '🌞',
    title: 'Solar Energy',
    desc: 'Memanfaatkan energi matahari untuk operasional.'
  },
  {
    icon: '🌳',
    title: 'Green Spaces',
    desc: 'Desain dengan banyak ruang hijau dan tanaman.'
  },
  {
    icon: '🍃',
    title: 'Clean Air',
    desc: 'Sirkulasi udara alami dan penyaring udara modern.'
  },
  {
    icon: '🦋',
    title: 'Biodiversity',
    desc: 'Mendukung keanekaragaman hayati di lingkungan sekitar.'
  },
];

export default function EcoFeatures() {
  return (
    <section className="py-16 bg-white/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">Our Eco Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{f.title}</h3>
              <p className="text-green-900/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 