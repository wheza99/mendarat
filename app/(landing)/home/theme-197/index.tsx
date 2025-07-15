import React from "react";

export default function Theme197() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-purple-50 relative overflow-hidden font-sans">
      {/* SVG Background Brush Strokes & Abstract Shapes */}
      <svg className="absolute top-0 left-0 w-full h-72" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brush stroke */}
        <path d="M0,160 Q400,80 800,160 T1440,160" stroke="#a78bfa" strokeWidth="24" fill="none" opacity="0.18">
          <animate attributeName="d" values="M0,160 Q400,80 800,160 T1440,160;M0,170 Q400,100 800,170 T1440,170;M0,160 Q400,80 800,160 T1440,160" dur="7s" repeatCount="indefinite" />
        </path>
        {/* Cat tumpah */}
        <ellipse cx="200" cy="80" rx="60" ry="20" fill="#f472b6" fillOpacity="0.18">
          <animate attributeName="rx" values="60;80;60" dur="8s" repeatCount="indefinite" />
        </ellipse>
        {/* Geometris */}
        <rect x="1200" y="40" width="60" height="60" rx="20" fill="#fde68a" fillOpacity="0.18">
          <animate attributeName="y" values="40;80;40" dur="10s" repeatCount="indefinite" />
        </rect>
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg tracking-wide">Studio Seni & Desain Kreatif</h1>
        <p className="text-lg md:text-2xl text-purple-600 mb-6 max-w-2xl mx-auto">Mewujudkan ide menjadi karya visual yang inspiratif dan penuh warna. Jelajahi portofolio dan layanan desain kami!</p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 text-white rounded-full shadow-lg hover:from-purple-400 hover:to-pink-400 transition font-bold">Lihat Portofolio</button>
      </section>
      {/* Tentang Studio */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mt-8 mb-8 border-2 border-purple-200">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">Tentang Studio</h2>
        <p className="text-gray-800">Kami adalah studio seni dan desain yang berfokus pada kreativitas, inovasi, dan kolaborasi. Dari ilustrasi, branding, hingga desain digital, kami siap membantu mewujudkan visi Anda.</p>
      </section>
      {/* Portofolio Karya */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-purple-50 rounded-lg shadow p-6 flex flex-col items-center border-2 border-pink-200">
          <img src="https://img.icons8.com/color/96/000000/paint-palette.png" alt="Ilustrasi" className="mb-4 animate-bounce" />
          <h3 className="font-semibold text-pink-600 mb-1">Ilustrasi Digital</h3>
          <p className="text-gray-700 text-sm">Karya ilustrasi karakter, poster, dan komik dengan gaya unik.</p>
        </div>
        <div className="bg-purple-50 rounded-lg shadow p-6 flex flex-col items-center border-2 border-yellow-200">
          <img src="https://img.icons8.com/color/96/000000/brush.png" alt="Lukisan" className="mb-4 animate-bounce delay-200" />
          <h3 className="font-semibold text-yellow-600 mb-1">Lukisan Kanvas</h3>
          <p className="text-gray-700 text-sm">Lukisan cat air, akrilik, dan mural untuk dekorasi ruang.</p>
        </div>
        <div className="bg-purple-50 rounded-lg shadow p-6 flex flex-col items-center border-2 border-blue-200">
          <img src="https://img.icons8.com/color/96/000000/pencil-tip.png" alt="Desain Grafis" className="mb-4 animate-bounce delay-400" />
          <h3 className="font-semibold text-blue-600 mb-1">Desain Grafis</h3>
          <p className="text-gray-700 text-sm">Branding, logo, dan materi promosi untuk bisnis dan event.</p>
        </div>
      </section>
      {/* Layanan Desain */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-pink-200">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Layanan Desain</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Desain logo & branding</li>
          <li>Ilustrasi custom</li>
          <li>Desain kemasan & produk</li>
          <li>Desain media sosial & promosi</li>
        </ul>
      </section>
      {/* Testimoni Klien */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">Testimoni Klien</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-gray-700">“Hasil desainnya selalu kreatif dan sesuai keinginan. Prosesnya juga menyenangkan!”</p>
            <p className="text-pink-600 font-semibold mt-2">- Maya, Jakarta</p>
          </div>
          <div className="flex-1">
            <p className="italic text-gray-700">“Studio ini sangat profesional, portofolionya keren dan komunikatif.”</p>
            <p className="text-blue-600 font-semibold mt-2">- Rafi, Bandung</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-purple-200 rounded-xl shadow-lg p-8 mb-16 text-center border-2 border-pink-200">
        <h2 className="text-2xl font-bold text-pink-700 mb-2">Kontak</h2>
        <p className="text-pink-700 mb-4">Ingin konsultasi atau memesan layanan desain? Hubungi kami di <a href="mailto:info@studiokreatif.id" className="text-blue-600 underline">info@studiokreatif.id</a></p>
        <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-yellow-300 text-white rounded-full shadow hover:from-yellow-300 hover:to-pink-400 transition font-bold">Hubungi Studio</button>
      </section>
      {/* Floating Art Icons Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="16" ry="8" fill="#a78bfa" fillOpacity="0.3"/><rect x="24" y="40" width="16" height="8" rx="2" fill="#f472b6" fillOpacity="0.5"/></svg>
        <svg className="absolute right-10 top-24 w-20 h-20 animate-float-slow" viewBox="0 0 80 80" fill="none"><rect x="28" y="16" width="24" height="40" rx="10" fill="#fde68a" fillOpacity="0.4"/><circle cx="40" cy="56" r="8" fill="#a78bfa" fillOpacity="0.2"/></svg>
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