import React from 'react';

const showcases = [
  {
    title: 'Tech Innovation 2025',
    desc: 'Bagaimana teknologi akan mengubah dunia di tahun-tahun mendatang.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Global Economy Update',
    desc: 'Analisis ekonomi global terbaru dan dampaknya untuk Indonesia.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Health & Lifestyle',
    desc: 'Tips hidup sehat dan tren gaya hidup masa kini.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
];

export default function NewsShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <div key={i} className="bg-white border-2 border-gray-700/20 rounded-xl shadow flex flex-col items-center p-6 relative">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded mb-4 border border-gray-200" loading="lazy" />
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 font-sans text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 