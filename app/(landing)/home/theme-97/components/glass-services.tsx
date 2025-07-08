import React from 'react';

const services = [
  { icon: '🧑‍💻', title: 'App Development', desc: 'Build modern apps with glassmorphism UI.' },
  { icon: '☁️', title: 'Cloud Integration', desc: 'Seamless cloud solutions for your business.' },
  { icon: '🔗', title: 'API Services', desc: 'Robust and secure API for all your needs.' },
];

export default function GlassServices() {
  return (
    <section className="py-16 bg-cyan-50/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 backdrop-blur-xl bg-white/30 border border-cyan-200 rounded-2xl shadow-xl hover:shadow-cyan-400/30 hover:border-cyan-400 transition group">
              <div className="text-5xl mb-4 drop-shadow-[0_0_10px_#22d3ee] group-hover:animate-pulse">{s.icon}</div>
              <h3 className="text-xl font-bold text-cyan-600 mb-2">{s.title}</h3>
              <p className="text-blue-900/80 font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 