import React from 'react';

const showcases = [
  {
    title: 'Abstract Art',
    desc: 'Karya abstrak dengan teknik cat air modern.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Nature Illustration',
    desc: 'Ilustrasi alam dengan warna pastel lembut.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Creative Portrait',
    desc: 'Potret kreatif dengan efek brush dan bleed.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
];

export default function WatercolorShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-400 text-center mb-10">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center p-6 border-2 border-pink-200 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-200 text-pink-600 text-xs font-serif px-4 py-1 rounded-full shadow">ART</div>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-blue-100" loading="lazy" />
              <h3 className="text-xl font-serif font-semibold text-pink-400 mb-2">{item.title}</h3>
              <p className="text-blue-900/80 font-sans text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 