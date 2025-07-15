import React from "react";

export default function Theme196() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-100 to-yellow-200 relative overflow-hidden font-serif">
      {/* SVG Background Pegunungan, Sungai, Burung */}
      <svg className="absolute top-0 left-0 w-full h-72" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gunung */}
        <path d="M0,240L120,200C240,160,480,80,720,112C960,144,1200,256,1320,288L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" fill="#14532d" fillOpacity="0.7" />
        {/* Sungai */}
        <path d="M0,320 Q400,200 800,320 T1440,320" fill="none" stroke="#38bdf8" strokeWidth="16" opacity="0.5" />
        {/* Matahari */}
        <circle cx="200" cy="60" r="40" fill="#fbbf24" fillOpacity="0.7">
          <animate attributeName="cy" values="60;80;60" dur="8s" repeatCount="indefinite" />
        </circle>
        {/* Burung */}
        <g>
          <path d="M300,80 Q310,70 320,80" stroke="#fff" strokeWidth="2" fill="none">
            <animate attributeName="d" values="M300,80 Q310,70 320,80;M300,85 Q310,75 320,85;M300,80 Q310,70 320,80" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M350,100 Q360,90 370,100" stroke="#fff" strokeWidth="2" fill="none">
            <animate attributeName="d" values="M350,100 Q360,90 370,100;M350,105 Q360,95 370,105;M350,100 Q360,90 370,100" dur="7s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4 drop-shadow-lg tracking-wide">Petualangan Alam & Ekowisata</h1>
        <p className="text-lg md:text-2xl text-green-800 mb-6 max-w-2xl mx-auto">Jelajahi keindahan alam Indonesia, temukan destinasi ekowisata, dan rasakan petualangan tak terlupakan bersama kami.</p>
        <button className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-yellow-500 transition">Lihat Destinasi</button>
      </section>
      {/* Tentang Ekowisata */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mt-8 mb-8 border-2 border-green-700">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Tentang Ekowisata</h2>
        <p className="text-green-900">Ekowisata adalah perjalanan bertanggung jawab ke area alami yang melestarikan lingkungan, mendukung kesejahteraan masyarakat lokal, dan melibatkan edukasi serta petualangan.</p>
      </section>
      {/* Destinasi Favorit */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-green-100 rounded-lg shadow p-6 flex flex-col items-center border-2 border-green-700">
          <img src="https://img.icons8.com/color/96/000000/mountain.png" alt="Gunung" className="mb-4 animate-bounce" />
          <h3 className="font-semibold text-green-800 mb-1">Gunung Rinjani</h3>
          <p className="text-green-900 text-sm">Pendakian menantang dengan pemandangan danau Segara Anak yang memukau.</p>
        </div>
        <div className="bg-green-100 rounded-lg shadow p-6 flex flex-col items-center border-2 border-blue-400">
          <img src="https://img.icons8.com/color/96/000000/river.png" alt="Sungai" className="mb-4 animate-bounce delay-200" />
          <h3 className="font-semibold text-blue-700 mb-1">Sungai Sekonyer</h3>
          <p className="text-green-900 text-sm">Wisata susur sungai di Kalimantan, habitat orangutan dan flora langka.</p>
        </div>
        <div className="bg-green-100 rounded-lg shadow p-6 flex flex-col items-center border-2 border-yellow-400">
          <img src="https://img.icons8.com/color/96/000000/forest.png" alt="Hutan" className="mb-4 animate-bounce delay-400" />
          <h3 className="font-semibold text-yellow-700 mb-1">Hutan Mangrove Bali</h3>
          <p className="text-green-900 text-sm">Eksplorasi ekosistem mangrove, trekking, dan edukasi lingkungan.</p>
        </div>
      </section>
      {/* Tips Petualangan */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-blue-400">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Tips Petualangan</h2>
        <ul className="list-disc list-inside text-green-900 space-y-2">
          <li>Bawa perlengkapan sesuai destinasi dan cuaca.</li>
          <li>Hormati alam dan budaya lokal.</li>
          <li>Jangan meninggalkan sampah di alam.</li>
          <li>Gunakan pemandu lokal untuk pengalaman terbaik.</li>
        </ul>
      </section>
      {/* Testimoni Traveler */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-yellow-400">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">Testimoni Traveler</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-green-900">“Petualangan di Rinjani sangat berkesan, pemandangannya luar biasa!”</p>
            <p className="text-green-700 font-semibold mt-2">- Lina, Lombok</p>
          </div>
          <div className="flex-1">
            <p className="italic text-green-900">“Wisata sungai di Kalimantan seru dan edukatif, anak-anak sangat senang.”</p>
            <p className="text-blue-700 font-semibold mt-2">- Budi, Banjarmasin</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-green-900 rounded-xl shadow-lg p-8 mb-16 text-center border-2 border-yellow-400">
        <h2 className="text-2xl font-bold text-yellow-100 mb-2">Kontak</h2>
        <p className="text-yellow-100 mb-4">Ingin bertanya atau bergabung dalam petualangan? Hubungi kami di <a href="mailto:info@ekowisata.id" className="text-yellow-300 underline">info@ekowisata.id</a></p>
        <button className="px-6 py-2 bg-yellow-400 text-green-900 rounded-full shadow hover:bg-yellow-500 transition">Hubungi Kami</button>
      </section>
      {/* Floating Adventure Icons Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="16" fill="#38bdf8" fillOpacity="0.3"/><rect x="24" y="40" width="16" height="8" rx="2" fill="#14532d" fillOpacity="0.5"/></svg>
        <svg className="absolute right-10 top-24 w-20 h-20 animate-float-slow" viewBox="0 0 80 80" fill="none"><rect x="28" y="16" width="24" height="40" rx="10" fill="#fbbf24" fillOpacity="0.4"/><circle cx="40" cy="56" r="8" fill="#38bdf8" fillOpacity="0.2"/></svg>
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