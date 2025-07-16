"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fitur = [
  { icon: "🤖", judul: "AI & Otomasi", deskripsi: "Sistem kota cerdas berbasis AI dan robotik." },
  { icon: "🌞", judul: "Energi Surya", deskripsi: "Panel surya di atap gedung untuk energi bersih." },
  { icon: "🚁", judul: "Drone & Transportasi", deskripsi: "Kendaraan terbang & drone pengantar barang." },
  { icon: "🌳", judul: "Taman Atap", deskripsi: "Ruang hijau di setiap gedung untuk kualitas hidup." },
];

const event = [
  { nama: "Smart City Expo 2024", tanggal: "15-17 Agustus 2024", lokasi: "Convention Center Futuria" },
  { nama: "Tech Innovator Meetup", tanggal: "5 September 2024", lokasi: "Skypark Tower" },
  { nama: "Green Energy Forum", tanggal: "20 September 2024", lokasi: "Eco Plaza" },
];

const testimoni = [
  {
    nama: "Andi Wijaya",
    avatar: "🧑‍💼",
    isi: "Kota ini benar-benar masa depan! Transportasi cepat, udara bersih, dan teknologi di mana-mana. Hidup jadi lebih mudah dan nyaman.",
  },
  {
    nama: "Siti Rahma",
    avatar: "👩‍🔬",
    isi: "Sebagai inovator, saya bangga bisa berkontribusi di ekosistem smart city. Kolaborasi di sini sangat terbuka dan inspiratif!",
  },
  {
    nama: "Budi Santoso",
    avatar: "🤖",
    isi: "Robot dan AI membantu pekerjaan sehari-hari. Anak-anak bisa bermain aman di taman atap. Kota impian!",
  },
];

const Theme220: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 relative overflow-hidden text-gray-900">
      {/* Background: Skyline Futuristik & Elemen Smart City */}
      <div className="absolute inset-0 z-0">
        {/* Skyline */}
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" fill="none">
          <defs>
            <linearGradient id="skyline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M0,320 L0,200 Q120,180 240,220 Q360,260 480,200 Q600,140 720,180 Q840,220 960,160 Q1080,100 1200,180 Q1320,260 1440,220 L1440,320Z" fill="url(#skyline)" />
          {/* Gedung tinggi */}
          {[...Array(12)].map((_, i) => {
            const x = 60 + i * 110;
            const h = 60 + Math.random() * 120;
            return (
              <rect key={i} x={x} y={320 - h} width={40 + Math.random() * 20} height={h} rx={6} fill="#e0e7ef" stroke="#60a5fa" strokeWidth="2" />
            );
          })}
          {/* Panel surya */}
          {[...Array(6)].map((_, i) => {
            const x = 80 + i * 220;
            return (
              <rect key={i} x={x} y={260} width={24} height={8} fill="#facc15" stroke="#eab308" strokeWidth="1" rx={2} />
            );
          })}
          {/* Taman atap */}
          {[...Array(6)].map((_, i) => {
            const x = 100 + i * 220;
            return (
              <ellipse key={i} cx={x} cy={255} rx={12} ry={5} fill="#4ade80" />
            );
          })}
        </svg>
        {/* Kendaraan terbang & drone */}
        <svg className="absolute left-1/4 top-32 w-32 h-16 animate-float-slow" viewBox="0 0 80 40">
          <ellipse cx="40" cy="20" rx="30" ry="10" fill="#bae6fd" />
          <rect x="35" y="10" width="10" height="10" fill="#facc15" rx="2" />
          <rect x="30" y="25" width="20" height="4" fill="#60a5fa" rx="2" />
        </svg>
        <svg className="absolute right-1/4 top-24 w-20 h-10 animate-float" viewBox="0 0 50 20">
          <ellipse cx="25" cy="10" rx="18" ry="6" fill="#e0e7ef" />
          <rect x="22" y="4" width="6" height="6" fill="#facc15" rx="1" />
        </svg>
        {/* Lampu kota neon */}
        {[...Array(10)].map((_, i) => (
          <circle key={i} cx={100 + i * 120} cy={310} r={6} fill="#fbbf24" className="animate-pulse" />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-yellow-300 to-white rounded-xl flex items-center justify-center border-2 border-blue-400 animate-pulse">
              <span className="text-2xl">🏙️</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-yellow-400 to-white bg-clip-text text-transparent">
              Futuria Smart City
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-blue-500 hover:text-yellow-400 font-semibold transition-colors">Beranda</a>
            <a href="#fitur" className="text-blue-500 hover:text-yellow-400 font-semibold transition-colors">Fitur</a>
            <a href="#event" className="text-blue-500 hover:text-yellow-400 font-semibold transition-colors">Event</a>
            <a href="#testimoni" className="text-blue-500 hover:text-yellow-400 font-semibold transition-colors">Testimoni</a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-400 via-yellow-300 to-white hover:from-blue-500 hover:to-yellow-400 text-blue-900 border-0 font-bold shadow-lg">
            Kolaborasi Inovator
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 text-center">
        <div className="container mx-auto px-4">
          <Badge className="bg-blue-400/20 text-blue-700 border-blue-400/30 mb-4 font-bold text-lg">
            🏙️ Kota Masa Depan
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-500 via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-xl">
            Futuria Smart City
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 max-w-2xl mx-auto mb-8 font-medium">
            Selamat datang di kota masa depan! Inovasi teknologi, transportasi cerdas, dan lingkungan hijau bersatu untuk kehidupan yang lebih baik dan berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-400 via-yellow-300 to-white hover:from-blue-500 hover:to-yellow-400 text-blue-900 px-8 py-4 text-lg border-0 font-bold shadow-lg">
              Lihat Fitur
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-700 hover:bg-blue-400/10 px-8 py-4 text-lg font-bold">
              Daftar Inovator
            </Button>
          </div>
        </div>
      </section>

      {/* Fitur Smart City */}
      <section id="fitur" className="relative z-10 py-16 bg-gradient-to-b from-white/80 to-blue-100/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 text-center">Fitur Smart City</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {fitur.map((f, i) => (
              <div key={i} className="bg-white/80 rounded-2xl p-6 flex flex-col items-center border border-blue-400/20 shadow-lg">
                <div className="text-5xl mb-4 animate-bounce-slow">{f.icon}</div>
                <div className="text-xl font-bold text-yellow-400 mb-1">{f.judul}</div>
                <div className="text-blue-700 font-medium text-center">{f.deskripsi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Event */}
      <section id="event" className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 text-center">Event Teknologi & Inovasi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {event.map((e, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-400/30 to-yellow-300/20 rounded-2xl p-8 border border-blue-400/20 shadow-lg">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{e.nama}</h3>
                <p className="text-blue-800 mb-2">{e.tanggal} - {e.lokasi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="relative z-10 py-16 bg-gradient-to-b from-blue-100/80 to-white/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 text-center">Testimoni Warga</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimoni.map((t, i) => (
              <div key={i} className="bg-white/80 rounded-2xl p-6 border border-yellow-400/20 shadow-lg flex flex-col items-center">
                <div className="text-4xl mb-4 animate-bounce">{t.avatar}</div>
                <div className="text-lg font-bold text-blue-700 mb-2">{t.nama}</div>
                <div className="text-blue-800 text-center">"{t.isi}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ajakan Kolaborasi */}
      <section className="relative z-10 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">Gabung Kolaborasi Inovator</h2>
          <p className="text-lg text-blue-800 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari perubahan! Kolaborasi terbuka untuk inovator, startup, dan warga yang ingin membangun masa depan bersama.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-400 via-yellow-300 to-white hover:from-blue-500 hover:to-yellow-400 text-blue-900 px-10 py-4 text-xl font-bold shadow-xl">
            Daftar Kolaborasi
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-blue-700 bg-white/80 border-t border-blue-400/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xl">🏙️</span>
              <span className="font-bold">Futuria Smart City</span>
            </div>
            <div className="text-sm">&copy; 2024 Futuria Smart City. All rights reserved.</div>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme220; 