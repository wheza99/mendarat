import React from 'react';

const services = [
  {
    title: 'Custom Illustration',
    desc: 'Ilustrasi unik sesuai kebutuhan brand Anda.',
    icon: '🎨',
    color: 'bg-yellow-200',
    border: 'border-yellow-300',
    badge: 'bg-pink-200 border-pink-300',
    rotate: 'rotate-2',
  },
  {
    title: 'Brand Collage Design',
    desc: 'Desain kolase kreatif untuk promosi dan branding.',
    icon: '🧩',
    color: 'bg-blue-200',
    border: 'border-blue-300',
    badge: 'bg-green-200 border-green-300',
    rotate: '-rotate-2',
  },
  {
    title: 'Playful Web Layouts',
    desc: 'Layout website dengan nuansa kertas dan animasi.',
    icon: '🖥️',
    color: 'bg-green-200',
    border: 'border-green-300',
    badge: 'bg-yellow-200 border-yellow-300',
    rotate: 'rotate-1',
  },
];

export default function CreativeServices() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 text-center mb-12 font-sans tracking-wider drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>
          Creative Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <div
              key={srv.title}
              className={`relative p-8 ${srv.color} ${srv.border} border-2 shadow-lg ${srv.rotate} rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              <div className="text-4xl mb-4 select-none">{srv.icon}</div>
              <span className={`px-4 py-1 text-xs font-bold rounded-full mb-4 border-2 ${srv.badge} shadow`} style={{boxShadow: '1px 2px 0 #fff7d6'}}>Service</span>
              <h3 className="text-lg font-bold text-yellow-800 text-center mb-2 drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>{srv.title}</h3>
              <p className="text-pink-700 text-center text-base">{srv.desc}</p>
              {/* Decorative torn edge */}
              <div className="absolute left-0 bottom-0 w-full h-3 bg-repeat-x" style={{backgroundImage: 'url("/torn-edge.png")'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 