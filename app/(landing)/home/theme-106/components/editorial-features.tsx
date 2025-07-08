import React from 'react';

const features = [
  {
    icon: '📰',
    title: 'Bold Headlines',
    desc: 'Catch attention with large, impactful serif headlines.',
    accent: 'border-red-500',
  },
  {
    icon: '🖋️',
    title: 'Creative Copywriting',
    desc: 'Engaging stories and editorial content for your brand.',
    accent: 'border-yellow-400',
  },
  {
    icon: '🖼️',
    title: 'Striking Imagery',
    desc: 'Editorial-style images with bold borders and grayscale effect.',
    accent: 'border-black',
  },
  {
    icon: '📐',
    title: 'Asymmetric Layouts',
    desc: 'Modern magazine grid and creative section placement.',
    accent: 'border-gray-800',
  },
];

export default function EditorialFeatures() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12 font-serif tracking-tight uppercase border-b-4 border-black/10 pb-4">
          Editorial Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col md:flex-row items-start gap-6 p-8 bg-gray-50 rounded shadow border-l-8 ${f.accent} mb-4 md:mb-0`}>
              <div className="text-4xl md:text-5xl mb-2 md:mb-0 select-none">{f.icon}</div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-black mb-2 tracking-tight leading-tight">{f.title}</h3>
                <p className="text-gray-700 text-base font-sans leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 