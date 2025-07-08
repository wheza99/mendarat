import React from 'react';

const features = [
  {
    title: 'Drag & Drop Builder',
    desc: 'Buat halaman dengan mudah seperti menempel potongan kertas.',
    icon: '✂️',
    color: 'bg-yellow-200',
    border: 'border-yellow-300',
    rotate: 'rotate-2',
  },
  {
    title: 'Handmade Illustrations',
    desc: 'Setiap elemen visual tampak seperti digambar tangan.',
    icon: '🖍️',
    color: 'bg-pink-200',
    border: 'border-pink-300',
    rotate: '-rotate-3',
  },
  {
    title: 'Playful Animations',
    desc: 'Animasi goyang dan transisi lembut seperti kertas.',
    icon: '📄',
    color: 'bg-blue-200',
    border: 'border-blue-300',
    rotate: 'rotate-1',
  },
  {
    title: 'Unique Layouts',
    desc: 'Setiap section punya bentuk dan posisi unik.',
    icon: '📐',
    color: 'bg-green-200',
    border: 'border-green-300',
    rotate: '-rotate-2',
  },
];

export default function CollageFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 text-center mb-12 font-sans tracking-wider drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>
          Creative Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative p-8 ${f.color} ${f.border} border-2 shadow-lg ${f.rotate} rounded-[18px] flex flex-col items-center transition-transform hover:scale-105 font-sans`}
              style={{boxShadow: '2px 4px 0 #fff7d6'}}
            >
              <div className="text-4xl mb-4 select-none">{f.icon}</div>
              <h3 className="text-xl font-bold text-yellow-800 mb-2 text-center drop-shadow" style={{textShadow: '1px 2px 0 #fff7d6'}}>{f.title}</h3>
              <p className="text-pink-700 text-center text-base">{f.desc}</p>
              {/* Decorative torn edge */}
              <div className="absolute left-0 bottom-0 w-full h-3 bg-repeat-x" style={{backgroundImage: 'url("/torn-edge.png")'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 