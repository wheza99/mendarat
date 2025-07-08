import React from 'react';

const services = [
  { icon: '🧑‍💻', title: 'Custom Software', desc: 'Retro-inspired custom app development.' },
  { icon: '🕹️', title: 'Game Studio', desc: 'Classic and modern game creation.' },
  { icon: '🎨', title: 'Pixel Art Design', desc: 'Unique pixel art and retro branding.' },
];

export default function TechnoServices() {
  return (
    <section className="py-16 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-300 text-center mb-10 tracking-widest">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-[#181e2a] rounded-2xl border-2 border-blue-400/40 shadow-lg hover:shadow-yellow-300/40 hover:border-yellow-300 transition group">
              <div className="text-5xl mb-4 drop-shadow-[0_0_10px_#facc15] group-hover:animate-pulse">{s.icon}</div>
              <h3 className="text-xl font-mono font-semibold text-blue-200 mb-2">{s.title}</h3>
              <p className="text-blue-100/80 font-mono">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 