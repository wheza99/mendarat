import React from 'react';

const features = [
  { icon: '🎨', title: 'Handcrafted Design', desc: 'Setiap elemen dibuat dengan sentuhan seni.' },
  { icon: '🖌️', title: 'Watercolor Brush', desc: 'Aksen brush cat air di seluruh halaman.' },
  { icon: '🌈', title: 'Pastel Colors', desc: 'Palet warna pastel yang lembut dan menenangkan.' },
  { icon: '📝', title: 'Creative Typography', desc: 'Font handwriting dan serif untuk nuansa artistik.' },
  { icon: '🖼️', title: 'Gallery Ready', desc: 'Mudah menampilkan portofolio atau karya seni.' },
  { icon: '💡', title: 'Inspiring Layout', desc: 'Layout modern yang menginspirasi kreativitas.' },
];

export default function ArtFeatures() {
  return (
    <section className="py-16 bg-white/60">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-400 text-center mb-10">Art Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white/70 rounded-2xl shadow hover:shadow-lg transition border border-pink-100">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2 font-serif">{f.title}</h3>
              <p className="text-blue-900/80 font-sans">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 