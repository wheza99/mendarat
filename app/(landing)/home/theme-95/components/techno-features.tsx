import React from 'react';

const features = [
  { icon: '🖥️', title: 'Digital Display', desc: 'Crystal clear retro digital screens.' },
  { icon: '💾', title: 'Data Storage', desc: 'Reliable and fast SSD retro storage.' },
  { icon: '🎛️', title: 'Synth Controls', desc: 'Customizable synthwave control panels.' },
  { icon: '🕹️', title: 'Game Ready', desc: 'Optimized for classic and modern games.' },
  { icon: '📡', title: 'Wireless Tech', desc: 'Retro-futuristic wireless connectivity.' },
  { icon: '🔊', title: 'Sound System', desc: 'Hi-fi audio with retro vibes.' },
];

export default function TechnoFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-blue-300 text-center mb-10 tracking-widest">Techno Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-[#181e2a] rounded-2xl border-2 border-blue-400/40 shadow-lg hover:shadow-blue-400/40 hover:border-blue-400 transition group">
              <div className="text-5xl mb-4 drop-shadow-[0_0_10px_#60a5fa] group-hover:animate-pulse">{f.icon}</div>
              <h3 className="text-xl font-mono font-semibold text-blue-200 mb-2">{f.title}</h3>
              <p className="text-blue-100/80 font-mono">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 