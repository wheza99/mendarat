import React from 'react';

const showcaseItems = [
  {
    name: 'StartupX',
    image: '/images/futuristic/startupx.png',
    desc: 'Landing page SaaS modern, clean, dan konversi tinggi.'
  },
  {
    name: 'PortoAI',
    image: '/images/futuristic/portoai.png',
    desc: 'Portofolio AI dengan animasi minimalis dan interaktif.'
  },
  {
    name: 'BizNeon',
    image: '/images/futuristic/bizneon.png',
    desc: 'Website bisnis dengan aksen biru neon dan UI futuristik.'
  }
];

export default function FuturisticShowcase() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-futuristic">
            Showcase
          </h2>
          <p className="text-xl text-blue-400 max-w-2xl mx-auto leading-relaxed">
            Beberapa project terbaik dengan sentuhan minimalis futuristik.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className="futuristic-card p-6 w-full md:w-1/3 flex flex-col items-center group hover:scale-105 transition-transform"
            >
              <div className="w-48 h-32 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-blue-300/30">
                {/* Dummy image, replace with real image if available */}
                <div className="w-32 h-20 bg-blue-100/40 rounded-xl animate-futuristic-pulse"></div>
              </div>
              <h3 className="text-xl font-bold neon-text-blue mb-2 text-center">
                {item.name}
              </h3>
              <p className="text-blue-400 text-sm text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 