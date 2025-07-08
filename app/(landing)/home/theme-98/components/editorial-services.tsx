import React from 'react';

const services = [
  { icon: '🖋️', title: 'Editing & Proofreading', desc: 'Layanan editing dan proofreading profesional.' },
  { icon: '🗞️', title: 'Content Creation', desc: 'Pembuatan konten artikel, berita, dan opini.' },
  { icon: '📖', title: 'Magazine Design', desc: 'Desain layout majalah dan publikasi digital.' },
];

export default function EditorialServices() {
  return (
    <section className="py-16 bg-gray-100/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10">Editorial Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white border-4 border-gray-700 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-700 font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 