import React from "react";

export default function Theme195() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#0ea5e9] relative overflow-hidden font-sans">
      {/* SVG Background Digital Grid & Particles */}
      <svg className="absolute top-0 left-0 w-full h-80 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a21caf" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Digital grid */}
        <g stroke="#38bdf8" strokeWidth="0.5" opacity="0.2">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={i * 72} y1="0" x2={i * 72} y2="320" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 40} x2="1440" y2={i * 40} />
          ))}
        </g>
        {/* Glowing particles */}
        <circle cx="300" cy="100" r="18" fill="url(#glow)">
          <animate attributeName="cy" values="100;140;100" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="1200" cy="60" r="12" fill="#f472b6" fillOpacity="0.7">
          <animate attributeName="cy" values="60;120;60" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="180" r="10" fill="#38bdf8" fillOpacity="0.5">
          <animate attributeName="cy" values="180;220;180" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide">Startup Teknologi Masa Depan</h1>
        <p className="text-lg md:text-2xl text-cyan-200 mb-6 max-w-2xl mx-auto">Solusi inovatif berbasis AI dan teknologi digital untuk masa depan yang lebih cerdas dan efisien.</p>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-400 text-white rounded-full shadow-lg hover:from-cyan-400 hover:to-pink-500 transition font-bold border border-white/20 backdrop-blur-md">Lihat Produk</button>
      </section>
      {/* Tentang Startup */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/10 rounded-xl shadow-lg p-8 mt-8 mb-8 border-2 border-cyan-400 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-cyan-300 mb-2">Tentang Kami</h2>
        <p className="text-white">Kami adalah tim visioner yang berfokus pada pengembangan produk digital berbasis kecerdasan buatan, cloud, dan IoT untuk membantu bisnis tumbuh di era digital.</p>
      </section>
      {/* Produk Unggulan */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#1e293b]/80 rounded-lg shadow p-6 flex flex-col items-center border border-cyan-400">
          <img src="https://img.icons8.com/color/96/000000/artificial-intelligence.png" alt="AI" className="mb-4 animate-pulse" />
          <h3 className="font-semibold text-cyan-300 mb-1">AI Assistant</h3>
          <p className="text-white text-sm">Asisten virtual cerdas untuk otomasi bisnis dan layanan pelanggan 24/7.</p>
        </div>
        <div className="bg-[#1e293b]/80 rounded-lg shadow p-6 flex flex-col items-center border border-pink-400">
          <img src="https://img.icons8.com/color/96/000000/cloud.png" alt="Cloud" className="mb-4 animate-pulse delay-200" />
          <h3 className="font-semibold text-pink-300 mb-1">Cloud Platform</h3>
          <p className="text-white text-sm">Infrastruktur cloud scalable dan aman untuk aplikasi modern.</p>
        </div>
        <div className="bg-[#1e293b]/80 rounded-lg shadow p-6 flex flex-col items-center border border-blue-400">
          <img src="https://img.icons8.com/color/96/000000/internet-of-things.png" alt="IoT" className="mb-4 animate-pulse delay-400" />
          <h3 className="font-semibold text-blue-300 mb-1">IoT Solutions</h3>
          <p className="text-white text-sm">Integrasi perangkat pintar untuk monitoring dan kontrol otomatis.</p>
        </div>
      </section>
      {/* Tim Kami */}
      <section className="relative z-10 max-w-5xl mx-auto bg-white/10 rounded-xl shadow-lg p-8 mb-12 border-2 border-pink-400 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-pink-300 mb-4">Tim Kami</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1 text-center">
            <img src="https://img.icons8.com/color/96/000000/administrator-male.png" alt="CEO" className="mx-auto rounded-full border-2 border-cyan-400" />
            <p className="text-white font-semibold mt-2">Andi Pratama</p>
            <p className="text-cyan-200 text-sm">CEO & Founder</p>
          </div>
          <div className="flex-1 text-center">
            <img src="https://img.icons8.com/color/96/000000/administrator-female.png" alt="CTO" className="mx-auto rounded-full border-2 border-pink-400" />
            <p className="text-white font-semibold mt-2">Siti Rahma</p>
            <p className="text-pink-200 text-sm">CTO</p>
          </div>
          <div className="flex-1 text-center">
            <img src="https://img.icons8.com/color/96/000000/robot-2.png" alt="AI Engineer" className="mx-auto rounded-full border-2 border-blue-400" />
            <p className="text-white font-semibold mt-2">RoboDev</p>
            <p className="text-blue-200 text-sm">AI Engineer</p>
          </div>
        </div>
      </section>
      {/* Testimoni Klien */}
      <section className="relative z-10 max-w-4xl mx-auto bg-white/10 rounded-xl shadow-lg p-8 mb-12 border-2 border-blue-400 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-blue-300 mb-4">Testimoni Klien</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="italic text-cyan-100">“Solusi AI dari tim ini sangat membantu bisnis kami berkembang pesat!”</p>
            <p className="text-cyan-300 font-semibold mt-2">- PT Digital Maju</p>
          </div>
          <div className="flex-1">
            <p className="italic text-cyan-100">“Cloud platform-nya stabil dan aman, supportnya juga responsif.”</p>
            <p className="text-pink-300 font-semibold mt-2">- StartupX</p>
          </div>
        </div>
      </section>
      {/* Kontak */}
      <section className="relative z-10 max-w-3xl mx-auto bg-[#0ea5e9]/80 rounded-xl shadow-lg p-8 mb-16 text-center border-2 border-white/20 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-2">Kontak</h2>
        <p className="text-white mb-4">Tertarik bekerja sama atau ingin tahu lebih banyak? Hubungi kami di <a href="mailto:info@startupfuture.id" className="text-pink-300 underline">info@startupfuture.id</a></p>
        <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-cyan-400 text-white rounded-full shadow hover:from-cyan-400 hover:to-pink-500 transition font-bold">Hubungi Kami</button>
      </section>
      {/* Floating Neon Particles Animation */}
      <div className="pointer-events-none select-none">
        <svg className="absolute left-10 bottom-10 w-16 h-16 animate-float" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="16" fill="#38bdf8" fillOpacity="0.5"/></svg>
        <svg className="absolute right-10 top-24 w-20 h-20 animate-float-slow" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="20" fill="#f472b6" fillOpacity="0.4"/></svg>
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