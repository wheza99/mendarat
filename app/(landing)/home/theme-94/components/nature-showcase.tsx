import React from 'react';

const showcases = [
  {
    title: 'Eco Home Design',
    desc: 'Rumah modern dengan sentuhan alam dan teknologi hijau.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Green Office',
    desc: 'Ruang kerja sehat, terang, dan ramah lingkungan.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Urban Garden',
    desc: 'Taman kota minimalis untuk udara lebih segar.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
];

export default function NatureShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center p-6">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-green-900/80 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 