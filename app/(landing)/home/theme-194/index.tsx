import React from "react";

export default function Theme194() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-yellow-100 to-blue-900 relative overflow-hidden font-serif">
      {/* SVG Background Batik & Lampion */}
      <svg className="absolute top-0 left-0 w-full h-64" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batik" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="20" fill="#F59E42" fillOpacity="0.15" />
            <rect x="10" y="10" width="40" height="40" rx="10" fill="#B91C1C" fillOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="1440" height="320" fill="url(#batik)" />
        <g>
          <ellipse cx="200" cy="80" rx="40" ry="16" fill="#FDE68A" fillOpacity="0.7">
            <animate attributeName="cy" values="80;120;80" dur="7s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="1200" cy="100" rx="30" ry="12" fill="#F59E42" fillOpacity="0.6">
            <animate attributeName="cy" values="100;140;100" dur="9s" repeatCount="indefinite" />
          </ellipse>
        </g>
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-900 mb-4 drop-shadow-lg tracking-wide">Festival Budaya Nusantara</h1>
        <p className="text-lg md:text-2xl text-red-900 mb-6 max-w-2xl mx-auto">Merayakan kekayaan budaya Indonesia melalui seni, musik, tari, dan kuliner dari Sabang sampai Merauke.</p>
        <button className="px-8 py-3 bg-red-700 text-white rounded-full shadow-lg hover:bg-yellow-600 transition">Lihat Jadwal Acara</button>
      </section>
      {/* Tentang Festival */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mt-8 mb-8 border-4 border-yellow-200">
        <h2 className="text-2xl font-bold text-red-800 mb-2">Tentang Festival</h2>
        <p className="text-blue-900">Festival Budaya Nusantara adalah ajang tahunan yang mempertemukan berbagai seni dan tradisi dari seluruh penjuru Indonesia. Kami menghadirkan pertunjukan tari, musik, pameran kerajinan, dan kuliner khas daerah.</p>
      </section>
      {/* Jadwal Acara */}
      <section className="relative z-10 max-w-5xl mx-auto bg-yellow-50 rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-yellow-900 mb-4">Jadwal Acara</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white rounded-lg p-4 shadow border-l-4 border-red-700">
            <span className="font-bold text-red-700">09.00</span> - Pembukaan & Tari Saman
          </li>
          <li className="bg-white rounded-lg p-4 shadow border-l-4 border-yellow-600">
            <span className="font-bold text-yellow-600">11.00</span> - Workshop Batik & Wayang
          </li>
          <li className="bg-white rounded-lg p-4 shadow border-l-4 border-blue-800">
            <span className="font-bold text-blue-800">14.00</span> - Parade Musik Tradisional
          </li>
        </ul>
      </section>
      {/* Galeri Budaya */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-yellow-100 rounded-lg shadow p-6 flex flex-col items-center border-2 border-red-200">
          <img src="https://img.icons8.com/color/96/000000/wayang.png" alt="Wayang" className="mb-4 animate-bounce" />
          <h3 className="font-semibold text-red-700 mb-1">Wayang Kulit</h3>
          <p className="text-blue-900 text-sm">Seni pertunjukan boneka kulit yang sarat makna dan filosofi Jawa.</p>
        </div>
        <div className="bg-yellow-100 rounded-lg shadow p-6 flex flex-col items-center border-2 border-yellow-400">
          <img src="https://img.icons8.com/color/96/000000/batik-pattern.png" alt="Batik" className="mb-4 animate-bounce delay-200" />
          <h3 className="font-semibold text-yellow-700 mb-1">Batik</h3>
          <p className="text-blue-900 text-sm">Kain tradisional Indonesia dengan motif dan teknik pewarnaan khas.</p>
        </div>
        <div className="bg-yellow-100 rounded-lg shadow p-6 flex flex-col items-center border-2 border-blue-300">
          <img src="https://img.icons8.com/color/96/000000/angklung.png" alt="Angklung" className="mb-4 animate-bounce delay-400" />
          <h3 className="font-semibold text-blue-800 mb-1">Angklung</h3>
          <p className="text-blue-900 text-sm">Alat musik bambu dari Sunda yang dimainkan secara bersama-sama.</p>
        </div>
      </section>
      {/* Testimoni Pengunjung */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-yellow-300">
        <h2 className="text-2xl font-bold text-yellow-900 mb-4">Testimoni Pengunjung</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-blue-900">“Festival ini sangat meriah dan penuh warna! Saya bangga dengan budaya Indonesia.”</p>
            <p className="text-red-700 font-semibold mt-2">- Sari, Yogyakarta</p>
          </div>
          <div className="flex-1">
            <p className="italic text-blue-900">“Banyak pengalaman baru dan makanan enak. Anak-anak juga senang belajar budaya.”</p>
            <p className="text-yellow-700 font-semibold mt-2">- Dedi, Surabaya</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-red-900 rounded-xl shadow-lg p-8 mb-16 text-center">
        <h2 className="text-2xl font-bold text-yellow-100 mb-2">Kontak</h2>
        <p className="text-yellow-100 mb-4">Tertarik berpartisipasi atau ingin tahu lebih banyak? Hubungi kami di <a href="mailto:info@festivalnusantara.id" className="text-yellow-300 underline">info@festivalnusantara.id</a></p>
        <button className="px-6 py-2 bg-yellow-500 text-red-900 rounded-full shadow hover:bg-yellow-600 transition">Hubungi Panitia</button>
      </section>
      {/* Floating Lanterns Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><rect x="20" y="10" width="24" height="36" rx="8" fill="#FDE68A" fillOpacity="0.7"/><rect x="28" y="40" width="8" height="8" rx="2" fill="#F59E42"/></svg>
        <svg className="absolute right-10 top-24 w-20 h-20 animate-float-slow" viewBox="0 0 80 80" fill="none"><rect x="28" y="16" width="24" height="40" rx="10" fill="#F59E42" fillOpacity="0.6"/><rect x="36" y="56" width="8" height="8" rx="2" fill="#FDE68A"/></svg>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-24px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 