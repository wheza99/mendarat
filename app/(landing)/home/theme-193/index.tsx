import React from "react";

export default function Theme193() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-yellow-50 relative overflow-hidden font-sans">
      {/* SVG Background Animation */}
      <svg className="absolute top-0 left-0 w-full h-64 animate-pulse" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#A7F3D0" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <circle cx="1200" cy="80" r="40" fill="#FDE68A" fillOpacity="0.7">
          <animate attributeName="cy" values="80;120;80" dur="6s" repeatCount="indefinite" />
        </circle>
        <ellipse cx="300" cy="120" rx="60" ry="20" fill="#6EE7B7" fillOpacity="0.6">
          <animate attributeName="rx" values="60;80;60" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-700 mb-4 drop-shadow-lg">Taman Botani Digital</h1>
        <p className="text-lg md:text-2xl text-green-900 mb-6 max-w-2xl mx-auto">Menjelajahi keindahan dan pengetahuan tanaman dalam satu platform modern. Temukan koleksi tanaman terbaik dan inspirasi hijau untuk hidup Anda!</p>
        <button className="px-8 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">Jelajahi Koleksi</button>
      </section>
      {/* Tentang Kami */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 mt-8 mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Tentang Kami</h2>
        <p className="text-green-900">Kami adalah komunitas pecinta tanaman yang berkomitmen untuk memperkenalkan keanekaragaman flora Indonesia melalui teknologi digital. Platform ini menyediakan informasi, inspirasi, dan komunitas bagi semua penggemar tanaman.</p>
      </section>
      {/* Koleksi Tanaman */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-green-50 rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://img.icons8.com/color/96/000000/monstera.png" alt="Monstera" className="mb-4 animate-bounce" />
          <h3 className="font-semibold text-green-700 mb-1">Monstera</h3>
          <p className="text-green-900 text-sm">Tanaman hias populer dengan daun unik berlubang, cocok untuk dekorasi rumah modern.</p>
        </div>
        <div className="bg-green-50 rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://img.icons8.com/color/96/000000/cactus.png" alt="Kaktus" className="mb-4 animate-bounce delay-200" />
          <h3 className="font-semibold text-green-700 mb-1">Kaktus</h3>
          <p className="text-green-900 text-sm">Simbol ketahanan dan keindahan gurun, mudah dirawat dan cocok untuk pemula.</p>
        </div>
        <div className="bg-green-50 rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://img.icons8.com/color/96/000000/bonsai.png" alt="Bonsai" className="mb-4 animate-bounce delay-400" />
          <h3 className="font-semibold text-green-700 mb-1">Bonsai</h3>
          <p className="text-green-900 text-sm">Seni menanam pohon miniatur yang penuh filosofi dan keindahan alami.</p>
        </div>
      </section>
      {/* Testimoni */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Testimoni</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-green-900">“Platform ini sangat membantu saya mengenal berbagai jenis tanaman dan cara merawatnya. Sukses selalu!”</p>
            <p className="text-green-700 font-semibold mt-2">- Rina, Jakarta</p>
          </div>
          <div className="flex-1">
            <p className="italic text-green-900">“Desainnya menarik dan informasinya lengkap. Saya jadi lebih semangat berkebun di rumah.”</p>
            <p className="text-green-700 font-semibold mt-2">- Budi, Bandung</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-green-100 rounded-xl shadow-lg p-8 mb-16 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Kontak</h2>
        <p className="text-green-900 mb-4">Ingin bergabung atau bertanya? Hubungi kami melalui email di <a href="mailto:info@tamanbotanidigital.id" className="text-blue-600 underline">info@tamanbotanidigital.id</a></p>
        <button className="px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition">Hubungi Kami</button>
      </section>
      {/* Floating Leaves Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-24 h-24 animate-float-slow" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="24" ry="10" fill="#6EE7B7" fillOpacity="0.5"/></svg>
        <svg className="absolute right-10 top-24 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="16" ry="6" fill="#A7F3D0" fillOpacity="0.7"/></svg>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 