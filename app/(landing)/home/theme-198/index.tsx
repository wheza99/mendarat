import React from "react";

export default function Theme198() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c7b198] via-[#f5f5dc] to-[#b7e4c7] relative overflow-hidden font-serif">
      {/* SVG Background Rak Buku, Buku, Daun */}
      <svg className="absolute top-0 left-0 w-full h-72" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rak buku */}
        <rect x="100" y="180" width="300" height="20" fill="#a67c52" fillOpacity="0.5" />
        <rect x="120" y="120" width="30" height="60" fill="#6d4c41" />
        <rect x="160" y="140" width="20" height="40" fill="#b7e4c7" />
        <rect x="190" y="130" width="25" height="50" fill="#f5f5dc" />
        <rect x="225" y="135" width="18" height="45" fill="#4682a9" />
        {/* Buku tumpuk */}
        <rect x="400" y="200" width="60" height="16" fill="#b7e4c7" rx="4" />
        <rect x="410" y="216" width="50" height="12" fill="#4682a9" rx="3" />
        <rect x="420" y="228" width="40" height="8" fill="#a67c52" rx="2" />
        {/* Daun melayang */}
        <ellipse cx="1300" cy="60" rx="24" ry="8" fill="#b7e4c7" fillOpacity="0.7">
          <animate attributeName="cy" values="60;100;60" dur="7s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="1350" cy="100" rx="16" ry="6" fill="#4682a9" fillOpacity="0.5">
          <animate attributeName="cy" values="100;140;100" dur="9s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#6d4c41] mb-4 drop-shadow-lg tracking-wide">Komunitas Pecinta Buku</h1>
        <p className="text-lg md:text-2xl text-[#4682a9] mb-6 max-w-2xl mx-auto">Bersama menumbuhkan budaya literasi, berbagi rekomendasi, dan memperluas wawasan lewat buku.</p>
        <button className="px-8 py-3 bg-[#a67c52] text-white rounded-full shadow-lg hover:bg-[#4682a9] transition font-bold">Gabung Komunitas</button>
      </section>
      {/* Tentang Komunitas */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mt-8 mb-8 border-2 border-[#a67c52]">
        <h2 className="text-2xl font-bold text-[#6d4c41] mb-2">Tentang Komunitas</h2>
        <p className="text-[#4682a9]">Komunitas ini adalah ruang bagi para pecinta buku untuk berdiskusi, berbagi rekomendasi, dan mengadakan event literasi secara rutin. Kami percaya membaca adalah jendela dunia.</p>
      </section>
      {/* Rekomendasi Buku */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#f5f5dc] rounded-lg shadow p-6 flex flex-col items-center border-2 border-[#a67c52]">
          <img src="https://img.icons8.com/color/96/000000/book-shelf.png" alt="Buku 1" className="mb-4 animate-bounce" />
          <h3 className="font-semibold text-[#6d4c41] mb-1">Laskar Pelangi</h3>
          <p className="text-[#4682a9] text-sm">Kisah inspiratif tentang pendidikan dan persahabatan di Belitung.</p>
        </div>
        <div className="bg-[#f5f5dc] rounded-lg shadow p-6 flex flex-col items-center border-2 border-[#4682a9]">
          <img src="https://img.icons8.com/color/96/000000/open-book--v2.png" alt="Buku 2" className="mb-4 animate-bounce delay-200" />
          <h3 className="font-semibold text-[#4682a9] mb-1">Bumi Manusia</h3>
          <p className="text-[#6d4c41] text-sm">Novel sejarah dan cinta karya Pramoedya Ananta Toer yang legendaris.</p>
        </div>
        <div className="bg-[#f5f5dc] rounded-lg shadow p-6 flex flex-col items-center border-2 border-[#b7e4c7]">
          <img src="https://img.icons8.com/color/96/000000/reading.png" alt="Buku 3" className="mb-4 animate-bounce delay-400" />
          <h3 className="font-semibold text-[#388e3c] mb-1">Negeri 5 Menara</h3>
          <p className="text-[#4682a9] text-sm">Perjalanan menuntut ilmu dan meraih mimpi di pondok pesantren.</p>
        </div>
      </section>
      {/* Event Literasi */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-[#4682a9]">
        <h2 className="text-2xl font-bold text-[#4682a9] mb-4">Event Literasi</h2>
        <ul className="list-disc list-inside text-[#6d4c41] space-y-2">
          <li>Bedah Buku & Diskusi Mingguan</li>
          <li>Book Swap: Tukar Buku Favorit</li>
          <li>Workshop Menulis Cerita</li>
          <li>Donasi Buku untuk Sekolah</li>
        </ul>
      </section>
      {/* Testimoni Anggota */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-[#b7e4c7]">
        <h2 className="text-2xl font-bold text-[#388e3c] mb-4">Testimoni Anggota</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-[#4682a9]">“Bergabung di komunitas ini membuat saya lebih semangat membaca dan menulis!”</p>
            <p className="text-[#6d4c41] font-semibold mt-2">- Sari, Surabaya</p>
          </div>
          <div className="flex-1">
            <p className="italic text-[#4682a9]">“Event literasinya seru dan bermanfaat, banyak teman baru yang suka buku.”</p>
            <p className="text-[#388e3c] font-semibold mt-2">- Dimas, Bandung</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-[#a67c52] rounded-xl shadow-lg p-8 mb-16 text-center border-2 border-[#4682a9]">
        <h2 className="text-2xl font-bold text-white mb-2">Kontak</h2>
        <p className="text-white mb-4">Ingin bergabung atau bertanya? Hubungi kami di <a href="mailto:info@bukuliterasi.id" className="text-[#b7e4c7] underline">info@bukuliterasi.id</a></p>
        <button className="px-6 py-2 bg-[#4682a9] text-white rounded-full shadow hover:bg-[#388e3c] transition font-bold">Hubungi Komunitas</button>
      </section>
      {/* Floating Book Icons Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><rect x="20" y="24" width="24" height="16" rx="4" fill="#b7e4c7" fillOpacity="0.5"/><rect x="28" y="40" width="8" height="8" rx="2" fill="#a67c52"/></svg>
        <svg className="absolute right-10 top-24 w-20 h-20 animate-float-slow" viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="40" rx="20" ry="8" fill="#4682a9" fillOpacity="0.3"/><rect x="36" y="56" width="8" height="8" rx="2" fill="#b7e4c7"/></svg>
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