"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const artis = [
  { nama: "DJ Aurora", genre: "EDM", foto: "🎧" },
  { nama: "Band Harmoni", genre: "Pop Rock", foto: "🎸" },
  { nama: "MC Vibe", genre: "Hip-Hop", foto: "🎤" },
  { nama: "Sonic Sisters", genre: "Indie", foto: "🎹" },
];

const testimoni = [
  {
    nama: "Rizky Fadillah",
    avatar: "🕺",
    isi: "Festival ini luar biasa! Suasana konser, lampu, dan artisnya benar-benar memukau. Saya jadi makin cinta musik lokal!",
  },
  {
    nama: "Ayu Lestari",
    avatar: "💃",
    isi: "Pengalaman nonton konser terbaik! Crowd-nya seru, komunitasnya ramah, dan banyak teman baru. Wajib datang lagi!",
  },
  {
    nama: "Dimas Pratama",
    avatar: "🤘",
    isi: "Lineup artisnya keren, sound system mantap, dan dekorasi panggungnya modern banget. Energi festivalnya terasa sampai pagi!",
  },
];

const Theme219: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden text-white">
      {/* Background: Lampu Sorot & Crowd */}
      <div className="absolute inset-0 z-0">
        {/* Lampu sorot */}
        <svg className="absolute top-0 left-1/4 w-1/2 h-64 opacity-60" viewBox="0 0 400 200">
          <defs>
            <radialGradient id="lampu1" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
              <stop offset="0%" stopColor="#00E0FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="0" rx="180" ry="80" fill="url(#lampu1)" />
        </svg>
        <svg className="absolute top-0 right-0 w-1/3 h-48 opacity-50" viewBox="0 0 300 150">
          <defs>
            <radialGradient id="lampu2" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
              <stop offset="0%" stopColor="#FF00E0" stopOpacity="0.7" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="150" cy="0" rx="120" ry="60" fill="url(#lampu2)" />
        </svg>
        {/* Crowd */}
        <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1440 160" fill="none">
          <path d="M0,160 Q360,120 720,150 Q1080,180 1440,120 L1440,160 L0,160Z" fill="#22223b" />
          {[...Array(30)].map((_, i) => {
            const x = 40 + i * 46;
            const h = 30 + Math.random() * 30;
            return (
              <rect key={i} x={x} y={160 - h} width={18} height={h} rx={6} fill="#2d2d44" />
            );
          })}
        </svg>
        {/* Not balok & elemen musik */}
        <svg className="absolute left-10 top-1/2 w-24 h-24 opacity-40" viewBox="0 0 64 64">
          <g>
            <rect x="8" y="40" width="6" height="16" fill="#00E0FF" />
            <rect x="24" y="32" width="6" height="24" fill="#FF00E0" />
            <rect x="40" y="24" width="6" height="32" fill="#FFD600" />
            <circle cx="11" cy="58" r="3" fill="#00E0FF" />
            <circle cx="27" cy="55" r="3" fill="#FF00E0" />
            <circle cx="43" cy="51" r="3" fill="#FFD600" />
          </g>
        </svg>
        <svg className="absolute right-10 top-1/3 w-20 h-20 opacity-30" viewBox="0 0 64 64">
          <g>
            <rect x="28" y="8" width="8" height="40" rx="4" fill="#FFD600" />
            <ellipse cx="32" cy="52" rx="12" ry="6" fill="#FF00E0" />
            <rect x="24" y="48" width="16" height="6" fill="#00E0FF" />
          </g>
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-blue-500 to-yellow-400 rounded-xl flex items-center justify-center border-2 border-pink-400 animate-pulse">
              <span className="text-2xl">🎵</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent">
              MusikFest.ID
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-pink-300 hover:text-yellow-300 font-semibold transition-colors">Beranda</a>
            <a href="#event" className="text-pink-300 hover:text-yellow-300 font-semibold transition-colors">Event</a>
            <a href="#artis" className="text-pink-300 hover:text-yellow-300 font-semibold transition-colors">Artis</a>
            <a href="#testimoni" className="text-pink-300 hover:text-yellow-300 font-semibold transition-colors">Testimoni</a>
          </nav>
          <Button className="bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white border-0 font-bold shadow-lg">
            Gabung Komunitas
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 text-center">
        <div className="container mx-auto px-4">
          <Badge className="bg-pink-500/20 text-pink-300 border-pink-400/30 mb-4 font-bold text-lg">
            🎤 Festival Musik Modern
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl">
            MusikFest.ID
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-2xl mx-auto mb-8 font-medium">
            Rasakan sensasi konser musik terbesar, panggung megah, artis papan atas, dan crowd penuh energi! Gabung komunitas musik, temukan event seru, dan ekspresikan dirimu lewat musik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white px-8 py-4 text-lg border-0 font-bold shadow-lg">
              Lihat Event
            </Button>
            <Button size="lg" variant="outline" className="border-pink-400 text-pink-200 hover:bg-pink-400/10 px-8 py-4 text-lg font-bold">
              Daftar Artis
            </Button>
          </div>
        </div>
      </section>

      {/* Fitur Artis */}
      <section id="artis" className="relative z-10 py-16 bg-gradient-to-b from-gray-950/80 to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-300 text-center">Lineup Artis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {artis.map((a, i) => (
              <div key={i} className="bg-gray-900/80 rounded-2xl p-6 flex flex-col items-center border border-pink-400/20 shadow-lg">
                <div className="text-5xl mb-4 animate-bounce-slow">{a.foto}</div>
                <div className="text-xl font-bold text-yellow-300 mb-1">{a.nama}</div>
                <div className="text-pink-200 font-medium">{a.genre}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Event */}
      <section id="event" className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300 text-center">Info Event Terbaru</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-500/30 to-blue-500/20 rounded-2xl p-8 border border-pink-400/20 shadow-lg">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Konser Malam Minggu</h3>
              <p className="text-pink-100 mb-2">Sabtu, 20 Juli 2024 - Lapangan MusikFest.ID</p>
              <p className="text-pink-200">Lineup: DJ Aurora, Band Harmoni, MC Vibe</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/30 to-yellow-400/20 rounded-2xl p-8 border border-blue-400/20 shadow-lg">
              <h3 className="text-xl font-bold text-pink-300 mb-2">Indie Night Festival</h3>
              <p className="text-pink-100 mb-2">Jumat, 2 Agustus 2024 - Rooftop Arena</p>
              <p className="text-pink-200">Lineup: Sonic Sisters, Band Harmoni</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400/30 to-pink-500/20 rounded-2xl p-8 border border-yellow-400/20 shadow-lg">
              <h3 className="text-xl font-bold text-blue-300 mb-2">Hip-Hop Party</h3>
              <p className="text-pink-100 mb-2">Sabtu, 10 Agustus 2024 - Hall MusikFest.ID</p>
              <p className="text-pink-200">Lineup: MC Vibe, DJ Aurora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="relative z-10 py-16 bg-gradient-to-b from-black/80 to-gray-950/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-300 text-center">Testimoni Penonton</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimoni.map((t, i) => (
              <div key={i} className="bg-gray-900/80 rounded-2xl p-6 border border-yellow-400/20 shadow-lg flex flex-col items-center">
                <div className="text-4xl mb-4 animate-bounce">{t.avatar}</div>
                <div className="text-lg font-bold text-pink-200 mb-2">{t.nama}</div>
                <div className="text-pink-100 text-center">"{t.isi}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ajakan Komunitas */}
      <section className="relative z-10 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-300">Gabung Komunitas MusikFest.ID</h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Dapatkan info event terbaru, diskon tiket, akses eksklusif ke backstage, dan kesempatan kolaborasi dengan musisi favoritmu!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white px-10 py-4 text-xl font-bold shadow-xl">
            Daftar Sekarang
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-pink-200 bg-black/80 border-t border-pink-400/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xl">🎵</span>
              <span className="font-bold">MusikFest.ID</span>
            </div>
            <div className="text-sm">&copy; 2024 MusikFest.ID. All rights reserved.</div>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="hover:text-yellow-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">TikTok</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme219; 