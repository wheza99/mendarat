import React from 'react';

const showcases = [
  {
    title: 'Smart Dashboard',
    desc: 'Monitor everything in a futuristic glass UI.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Cloud Sync',
    desc: 'Seamless data sync with glassmorphism style.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'AI Assistant',
    desc: 'Your personal AI in a glass card.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
];

export default function GlassShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-10">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <div key={i} className="backdrop-blur-xl bg-white/30 border border-cyan-200 rounded-2xl shadow-xl flex flex-col items-center p-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-200 text-cyan-700 text-xs font-bold px-4 py-1 rounded-full shadow">GLASS</div>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-cyan-100" loading="lazy" />
              <h3 className="text-xl font-bold text-cyan-600 mb-2">{item.title}</h3>
              <p className="text-blue-900/80 font-sans text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 