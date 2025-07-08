import React from 'react';

const showcases = [
  {
    title: 'Retro Console',
    desc: 'Classic gaming with a modern twist.',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Pixel Monitor',
    desc: 'Sharp display, pixel-perfect for retro lovers.',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Synth Keyboard',
    desc: 'Create music with synthwave vibes.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
];

export default function RetroShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-300 text-center mb-10 tracking-widest">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <div key={i} className="bg-[#181e2a] rounded-2xl border-4 border-blue-400/40 shadow-lg flex flex-col items-center p-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-blue-900 text-xs font-mono px-4 py-1 rounded-full shadow">RETRO</div>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-blue-400/30" loading="lazy" />
              <h3 className="text-xl font-mono font-semibold text-blue-200 mb-2">{item.title}</h3>
              <p className="text-blue-100/80 font-mono text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 