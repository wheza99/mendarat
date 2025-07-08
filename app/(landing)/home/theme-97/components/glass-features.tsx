import React from 'react';

const features = [
  { icon: '💡', title: 'Smart UI', desc: 'Intelligent, adaptive, and user-friendly interface.' },
  { icon: '🔒', title: 'Secure', desc: 'Advanced security with glass-level encryption.' },
  { icon: '⚡', title: 'Fast Performance', desc: 'Lightning-fast load and response times.' },
  { icon: '🌐', title: 'Global Ready', desc: 'Optimized for worldwide access and scalability.' },
  { icon: '🎨', title: 'Customizable', desc: 'Easily adapt colors, layout, and style.' },
  { icon: '🧊', title: 'Glassmorphism', desc: 'Modern glass effect for all major elements.' },
];

export default function GlassFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-10">Glass Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 backdrop-blur-xl bg-white/30 border border-cyan-200 rounded-2xl shadow-xl hover:shadow-cyan-400/30 hover:border-cyan-400 transition group">
              <div className="text-5xl mb-4 drop-shadow-[0_0_10px_#22d3ee] group-hover:animate-pulse">{f.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">{f.title}</h3>
              <p className="text-blue-900/80 font-sans">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 