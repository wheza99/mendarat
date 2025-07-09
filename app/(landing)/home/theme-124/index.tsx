import React from 'react';

const features = [
  { icon: '⚡', title: 'Super Cepat', desc: 'Akses instan tanpa loading lama.' },
  { icon: '🔒', title: 'Keamanan Tinggi', desc: 'Data Anda terlindungi dengan enkripsi modern.' },
  { icon: '🎨', title: 'Desain Unik', desc: 'Tampilan bold dan berbeda dari yang lain.' },
];

const portfolios = [
  { title: 'Arsitektur Modern', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { title: 'Interior Elegan', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { title: 'Ruang Kerja Kreatif', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { title: 'Fasad Futuristik', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
];

export default function HomePageTheme124() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-bold">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-10 relative overflow-hidden">
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            Tampil <span className="text-pink-500">Berani</span>,
            <br />
            Beda dari yang Lain
          </h1>
          <p className="text-xl mb-8 text-gray-300 font-semibold">Landing page bold, gelap, dan penuh karakter untuk brand yang ingin menonjol.</p>
          <a href="#cta" className="inline-block bg-pink-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-pink-600 transition">Coba Sekarang</a>
        </div>
        {/* Hero Animation */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-pink-500 via-purple-700 to-indigo-900 animate-pulse blur-2xl absolute -top-10 -right-10 opacity-60"></div>
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-10">
            <circle cx="110" cy="110" r="100" stroke="#fff" strokeWidth="8" opacity="0.1" />
            <circle cx="110" cy="110" r="80" stroke="#fff" strokeWidth="4" opacity="0.2" />
            <circle cx="110" cy="110" r="60" stroke="#fff" strokeWidth="2" opacity="0.3" />
            <circle cx="110" cy="110" r="40" stroke="#fff" strokeWidth="2" opacity="0.5" />
            <circle cx="110" cy="110" r="20" fill="#fff" className="animate-ping" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border border-gray-700">
            <span className="text-4xl mb-4 animate-bounce">{f.icon}</span>
            <h3 className="text-2xl font-bold mb-2 text-pink-400">{f.title}</h3>
            <p className="text-gray-300 font-medium">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Portfolio Showcase */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-pink-400">Portofolio Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolios.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg group relative">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-lg font-bold text-white drop-shadow">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Glassmorphism */}
      <section id="cta" className="py-20 px-4 flex justify-center items-center">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Siap Menjadi Pusat Perhatian?</h2>
          <p className="mb-8 text-lg text-gray-200 font-semibold">Buat landing page bold dan unik untuk brand Anda sekarang juga.</p>
          <a href="#" className="inline-block bg-pink-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-pink-600 transition">Konsultasi Gratis</a>
        </div>
      </section>
    </div>
  );
} 