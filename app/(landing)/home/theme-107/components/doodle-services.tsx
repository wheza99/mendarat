import React from 'react';

const services = [
  {
    icon: '🖌️',
    title: 'Custom Doodle',
    desc: 'Doodle sesuai request untuk brand, event, atau hadiah.',
    badge: 'CUSTOM',
    badgeColor: 'bg-blue-400 text-white',
    color: 'bg-yellow-100',
  },
  {
    icon: '🎯',
    title: 'Workshop',
    desc: 'Kelas doodle online/offline untuk semua usia.',
    badge: 'WORKSHOP',
    badgeColor: 'bg-pink-400 text-white',
    color: 'bg-pink-100',
  },
  {
    icon: '🛍️',
    title: 'Merchandise',
    desc: 'Notebook, totebag, dan produk unik dengan doodle.',
    badge: 'MERCH',
    badgeColor: 'bg-green-400 text-white',
    color: 'bg-green-100',
  },
];

function ZigzagBorder() {
  return (
    <svg viewBox="0 0 200 8" fill="none" className="absolute left-0 bottom-0 w-full h-2">
      <polyline points="0,8 10,0 20,8 30,0 40,8 50,0 60,8 70,0 80,8 90,0 100,8 110,0 120,8 130,0 140,8 150,0 160,8 170,0 180,8 190,0 200,8" stroke="#fbbf24" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function DoodleServices() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 text-center mb-12 font-sans tracking-wider" style={{textShadow: '1px 2px 0 #fff'}}>
          Doodle Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <div
              key={srv.title}
              className={`relative p-8 ${srv.color} shadow-lg rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans animate-wiggle`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              <div className="text-4xl mb-4 select-none">{srv.icon}</div>
              <span className={`px-4 py-1 text-xs font-bold rounded-full mb-4 border-2 border-white shadow ${srv.badgeColor}`}>{srv.badge}</span>
              <h3 className="text-lg font-bold text-blue-800 text-center mb-2 drop-shadow" style={{textShadow: '1px 2px 0 #fff'}}>{srv.title}</h3>
              <p className="text-pink-700 text-center text-base">{srv.desc}</p>
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