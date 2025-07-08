import React from 'react';

const services = [
  {
    icon: '✍️',
    title: 'Copywriting',
    desc: 'Professional editorial copy for articles, landing pages, and campaigns.',
    accent: 'border-red-500',
  },
  {
    icon: '📝',
    title: 'Editing',
    desc: 'Meticulous editing for clarity, style, and impact.',
    accent: 'border-yellow-400',
  },
  {
    icon: '🎨',
    title: 'Design',
    desc: 'Modern magazine layouts, typography, and visual storytelling.',
    accent: 'border-black',
  },
];

export default function MagazineServices() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12 font-serif tracking-tight uppercase border-b-4 border-black/10 pb-4">
          Editorial Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((srv, i) => (
            <div key={srv.title} className={`flex flex-col items-start gap-4 p-8 bg-gray-50 rounded shadow border-l-8 ${srv.accent} mb-4 md:mb-0`}>
              <div className="text-4xl mb-2 select-none">{srv.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-black mb-2 tracking-tight leading-tight">{srv.title}</h3>
              <p className="text-gray-700 text-base font-sans leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 