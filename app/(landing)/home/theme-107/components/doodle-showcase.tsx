import React from 'react';

const showcases = [
  {
    title: 'Doodle Poster',
    label: 'ART',
    labelColor: 'bg-blue-400 text-white',
    icon: '🖼️',
    color: 'bg-yellow-100',
  },
  {
    title: 'Notebook Cover',
    label: 'MERCH',
    labelColor: 'bg-pink-400 text-white',
    icon: '📒',
    color: 'bg-pink-100',
  },
  {
    title: 'Workshop Kit',
    label: 'EVENT',
    labelColor: 'bg-green-400 text-white',
    icon: '🎨',
    color: 'bg-green-100',
  },
];

function DoodleFrame({children}:{children:React.ReactNode}) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
      <svg viewBox="0 0 140 140" fill="none" className="absolute inset-0 w-full h-full">
        <rect x="5" y="5" width="130" height="130" rx="24" stroke="#fbbf24" strokeWidth="5" strokeDasharray="12 8" fill="none" />
      </svg>
      <div className="relative z-10 text-6xl select-none">
        {children}
      </div>
    </div>
  );
}

export default function DoodleShowcase() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 text-center mb-12 font-sans tracking-wider" style={{textShadow: '1px 2px 0 #fff'}}>
          Doodle Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`relative p-6 ${item.color} shadow-lg rounded-[24px] flex flex-col items-center transition-transform hover:scale-105 font-sans animate-wiggle`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              <DoodleFrame>{item.icon}</DoodleFrame>
              <span className={`px-3 py-1 text-xs font-bold rounded-full mb-2 border-2 border-white shadow ${item.labelColor}`}>{item.label}</span>
              <h3 className="text-lg font-bold text-blue-800 text-center drop-shadow" style={{textShadow: '1px 2px 0 #fff'}}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wiggle { animation: wiggle 2s infinite; }
      `}</style>
    </section>
  );
} 