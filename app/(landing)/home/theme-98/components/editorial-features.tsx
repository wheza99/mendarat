import React from 'react';

const features = [
  { icon: '📰', title: 'Trusted News', desc: 'Berita terpercaya dan terverifikasi.' },
  { icon: '✍️', title: 'Expert Writers', desc: 'Ditulis oleh jurnalis dan pakar berpengalaman.' },
  { icon: '📊', title: 'In-Depth Analysis', desc: 'Analisis mendalam dan data faktual.' },
  { icon: '🕰️', title: 'Daily Updates', desc: 'Update berita setiap hari, real-time.' },
  { icon: '🌍', title: 'Global Coverage', desc: 'Liputan nasional dan internasional.' },
  { icon: '📚', title: 'Editorial Archive', desc: 'Akses arsip editorial dan artikel lama.' },
];

export default function EditorialFeatures() {
  return (
    <section className="py-16 bg-white/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-10">Editorial Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white border-2 border-gray-700/20 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-700 font-sans">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 