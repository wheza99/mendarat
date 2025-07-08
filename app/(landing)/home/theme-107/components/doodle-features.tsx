import React from 'react';

const features = [
  {
    icon: '✏️',
    title: 'Hand-Drawn Style',
    desc: 'Semua elemen tampak seperti digambar tangan, unik dan fun.',
    color: 'bg-yellow-100',
    border: 'border-yellow-300',
  },
  {
    icon: '🌈',
    title: 'Colorful Palette',
    desc: 'Warna cerah dan kombinasi playful untuk suasana kreatif.',
    color: 'bg-pink-100',
    border: 'border-pink-300',
  },
  {
    icon: '🌀',
    title: 'Animated Doodles',
    desc: 'Animasi goyang dan hover seperti coretan hidup.',
    color: 'bg-blue-100',
    border: 'border-blue-300',
  },
  {
    icon: '⭐',
    title: 'Unique Borders',
    desc: 'Border zigzag/sketsa pada setiap card dan tombol.',
    color: 'bg-green-100',
    border: 'border-green-300',
  },
];

function ZigzagBorder() {
  return (
    <svg viewBox="0 0 200 8" fill="none" className="absolute left-0 bottom-0 w-full h-2">
      <polyline points="0,8 10,0 20,8 30,0 40,8 50,0 60,8 70,0 80,8 90,0 100,8 110,0 120,8 130,0 140,8 150,0 160,8 170,0 180,8 190,0 200,8" stroke="#fbbf24" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function DoodleFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 text-center mb-12 font-sans tracking-wider" style={{textShadow: '1px 2px 0 #fff'}}>
          Doodle Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative p-8 ${f.color} ${f.border} border-2 shadow-lg rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans animate-wiggle`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              <div className="text-4xl mb-4 select-none">{f.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2 text-center drop-shadow" style={{textShadow: '1px 2px 0 #fff'}}>{f.title}</h3>
              <p className="text-pink-700 text-center text-base">{f.desc}</p>
              <ZigzagBorder />
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