import React from 'react';

const services = [
  {
    icon: '🌿',
    title: 'Landscape Design',
    desc: 'Desain taman dan lanskap alami untuk rumah dan kantor.'
  },
  {
    icon: '🏡',
    title: 'Eco Architecture',
    desc: 'Arsitektur modern yang mengutamakan efisiensi energi dan lingkungan.'
  },
  {
    icon: '🪴',
    title: 'Urban Farming',
    desc: 'Solusi pertanian kota untuk ruang terbatas.'
  },
];

export default function EcoServices() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{s.title}</h3>
              <p className="text-green-900/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 