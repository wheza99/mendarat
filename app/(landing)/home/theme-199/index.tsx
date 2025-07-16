import React from "react";

export default function Theme199() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff] via-[#ffe5b4] to-[#ff6363] relative overflow-hidden font-sans">
      {/* SVG Background Makanan, Bubble, Pola */}
      <svg className="absolute top-0 left-0 w-full h-72" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Burger */}
        <ellipse cx="200" cy="80" rx="40" ry="18" fill="#ffb703" fillOpacity="0.7" />
        <rect x="160" y="90" width="80" height="12" rx="6" fill="#a3a380" />
        <ellipse cx="200" cy="102" rx="40" ry="10" fill="#e07a5f" />
        {/* Pizza */}
        <ellipse cx="350" cy="60" rx="28" ry="12" fill="#ffe066" fillOpacity="0.7" />
        <ellipse cx="350" cy="68" rx="28" ry="6" fill="#ff6363" fillOpacity="0.5" />
        {/* Minuman */}
        <rect x="500" y="60" width="18" height="40" rx="6" fill="#b7e4c7" />
        <ellipse cx="509" cy="60" rx="9" ry="5" fill="#fff" />
        {/* Bubble */}
        <circle cx="1200" cy="60" r="18" fill="#b7e4c7" fillOpacity="0.5">
          <animate attributeName="cy" values="60;100;60" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="1300" cy="100" r="12" fill="#ffb703" fillOpacity="0.4">
          <animate attributeName="cy" values="100;140;100" dur="9s" repeatCount="indefinite" />
        </circle>
        {/* Pola garis */}
        <rect x="0" y="160" width="1440" height="8" fill="#ff6363" fillOpacity="0.08" />
        <rect x="0" y="200" width="1440" height="8" fill="#b7e4c7" fillOpacity="0.08" />
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#ff6363] mb-4 drop-shadow-lg tracking-wide">Startup Kuliner & Food Delivery</h1>
        <p className="text-lg md:text-2xl text-[#a3a380] mb-6 max-w-2xl mx-auto">Nikmati makanan favorit Anda, pesan online, dan antar cepat ke rumah. Praktis, lezat, dan selalu fresh!</p>
        <button className="px-8 py-3 bg-[#ffb703] text-white rounded-full shadow-lg hover:bg-[#ff6363] transition font-bold animate-bounce">Order Sekarang</button>
      </section>
      {/* Tentang Startup */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mt-8 mb-8 border-2 border-[#ff6363]">
        <h2 className="text-2xl font-bold text-[#ff6363] mb-2">Tentang Kami</h2>
        <p className="text-[#a3a380]">Kami adalah startup kuliner yang menghadirkan layanan food delivery modern, menu variatif, dan pengalaman pemesanan yang mudah lewat aplikasi.</p>
      </section>
      {/* Menu Favorit */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#fff] rounded-lg shadow p-6 flex flex-col items-center border-2 border-[#ffb703]">
          <img src="https://img.icons8.com/color/96/000000/hamburger.png" alt="Burger" className="mb-4 animate-bounce" />
          <h3 className="font-semibold text-[#ff6363] mb-1">Burger Spesial</h3>
          <p className="text-[#a3a380] text-sm">Roti lembut, daging juicy, sayur segar, dan saus rahasia.</p>
        </div>
        <div className="bg-[#fff] rounded-lg shadow p-6 flex flex-col items-center border-2 border-[#b7e4c7]">
          <img src="https://img.icons8.com/color/96/000000/pizza.png" alt="Pizza" className="mb-4 animate-bounce delay-200" />
          <h3 className="font-semibold text-[#b7e4c7] mb-1">Pizza Keju</h3>
          <p className="text-[#ff6363] text-sm">Keju leleh, topping melimpah, dan pinggiran renyah.</p>
        </div>
        <div className="bg-[#fff] rounded-lg shadow p-6 flex flex-col items-center border-2 border-[#a3a380]">
          <img src="https://img.icons8.com/color/96/000000/cola.png" alt="Minuman" className="mb-4 animate-bounce delay-400" />
          <h3 className="font-semibold text-[#a3a380] mb-1">Minuman Segar</h3>
          <p className="text-[#ff6363] text-sm">Pilihan minuman dingin, jus buah, dan kopi kekinian.</p>
        </div>
      </section>
      {/* Cara Pesan */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-[#b7e4c7]">
        <h2 className="text-2xl font-bold text-[#b7e4c7] mb-4">Cara Pesan</h2>
        <ol className="list-decimal list-inside text-[#a3a380] space-y-2">
          <li>Pilih menu favorit di aplikasi atau website.</li>
          <li>Masukkan alamat pengantaran dan metode pembayaran.</li>
          <li>Konfirmasi pesanan dan tunggu kurir mengantar.</li>
          <li>Nikmati makanan hangat di rumah!</li>
        </ol>
      </section>
      {/* Testimoni Pelanggan */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-8 mb-12 border-2 border-[#ffb703]">
        <h2 className="text-2xl font-bold text-[#ffb703] mb-4">Testimoni Pelanggan</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-[#ff6363]">“Pesanannya cepat sampai, makanannya masih hangat dan enak!”</p>
            <p className="text-[#a3a380] font-semibold mt-2">- Rina, Jakarta</p>
          </div>
          <div className="flex-1">
            <p className="italic text-[#b7e4c7]">“Menu variatif, aplikasi mudah digunakan, dan kurir ramah.”</p>
            <p className="text-[#ff6363] font-semibold mt-2">- Dedi, Bandung</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-[#ff6363] rounded-xl shadow-lg p-8 mb-16 text-center border-2 border-[#ffb703]">
        <h2 className="text-2xl font-bold text-white mb-2">Kontak</h2>
        <p className="text-white mb-4">Ingin order atau bertanya? Hubungi kami di <a href="mailto:info@kulinerstartup.id" className="text-[#ffb703] underline">info@kulinerstartup.id</a></p>
        <button className="px-6 py-2 bg-[#ffb703] text-white rounded-full shadow hover:bg-[#b7e4c7] transition font-bold">Hubungi Kami</button>
      </section>
      {/* Floating Food Icons Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="16" ry="8" fill="#ffb703" fillOpacity="0.3"/><rect x="24" y="40" width="16" height="8" rx="2" fill="#ff6363" fillOpacity="0.5"/></svg>
        <svg className="absolute right-10 top-24 w-20 h-20 animate-float-slow" viewBox="0 0 80 80" fill="none"><rect x="28" y="16" width="24" height="40" rx="10" fill="#b7e4c7" fillOpacity="0.4"/><circle cx="40" cy="56" r="8" fill="#ffb703" fillOpacity="0.2"/></svg>
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