import React from 'react';

const services = [
  { icon: '🖌️', title: 'Custom Illustration', desc: 'Ilustrasi unik sesuai permintaan klien.' },
  { icon: '📦', title: 'Product Branding', desc: 'Branding produk dengan sentuhan artistik.' },
  { icon: '🗂️', title: 'Portfolio Design', desc: 'Desain portofolio kreatif dan profesional.' },
];

export default function ArtServices() {
  return (
    <section className="py-16 bg-pink-50/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-400 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white/70 rounded-2xl shadow hover:shadow-pink-200 transition border border-pink-100">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-pink-400 mb-2">{s.title}</h3>
              <p className="text-blue-900/80 font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 