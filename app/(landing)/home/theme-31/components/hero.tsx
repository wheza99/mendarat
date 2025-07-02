"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentDate, setCurrentDate] = useState("");
  const [edition, setEdition] = useState(1);

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(today.toLocaleDateString('id-ID', options));
    setEdition(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <section className="relative px-6 py-12 bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Newspaper Masthead */}
      <div className="max-w-7xl mx-auto">
        {/* Header Info */}
        <div className="flex justify-between items-center mb-6 text-sm text-amber-800 border-b-2 border-amber-800 pb-2">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">EDISI {edition}</span>
            <span>•</span>
            <span>VOLUME XCII</span>
          </div>
          <div className="text-right">
            <div className="font-semibold">{currentDate}</div>
            <div className="text-xs">EST. 1932</div>
          </div>
        </div>

        {/* Main Masthead */}
        <div className="text-center mb-8 border-b-4 border-double border-amber-800 pb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-2" 
              style={{ fontFamily: 'Times, serif', letterSpacing: '0.05em' }}>
            THE DIGITAL
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-orange-800 mb-4"
              style={{ fontFamily: 'Times, serif' }}>
            CHRONICLE
          </h2>
          <div className="flex justify-center items-center space-x-8 text-amber-700">
            <div className="h-px bg-amber-700 w-20"></div>
            <p className="text-lg font-semibold tracking-widest">INNOVATION • TECHNOLOGY • EXCELLENCE</p>
            <div className="h-px bg-amber-700 w-20"></div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Lead Story */}
          <div className="lg:col-span-2">
            <div className="border-2 border-amber-800 p-6 bg-white shadow-lg">
              <div className="text-xs text-amber-600 font-semibold mb-2 tracking-widest">BERITA UTAMA</div>
              <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 leading-tight"
                  style={{ fontFamily: 'Times, serif' }}>
                Revolusi Digital Mengubah Cara Berbisnis di Era Modern
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                Dalam era transformasi digital yang pesat, perusahaan-perusahaan terdepan 
                telah menemukan formula rahasia untuk mengoptimalkan operasional mereka. 
                Teknologi canggih dan strategi inovatif menjadi kunci sukses dalam 
                menghadapi tantangan bisnis kontemporer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-800 text-white px-8 py-3 font-bold text-lg hover:bg-amber-900 transition-colors duration-300 border-2 border-amber-900 shadow-lg">
                  BACA SELENGKAPNYA
                </button>
                <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 font-bold text-lg hover:bg-amber-800 hover:text-white transition-colors duration-300">
                  KONSULTASI GRATIS
                </button>
              </div>
            </div>
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            {/* Breaking News Box */}
            <div className="bg-red-800 text-white p-4 border-4 border-red-900">
              <div className="text-center">
                <div className="text-xs font-bold tracking-widest mb-2">BREAKING NEWS</div>
                <h4 className="text-xl font-bold mb-2">Teknologi AI Terbaru Diluncurkan!</h4>
                <p className="text-sm">Solusi artificial intelligence revolusioner untuk bisnis modern.</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white border-2 border-amber-800 p-4">
              <h4 className="text-lg font-bold text-amber-900 mb-3 border-b border-amber-700 pb-1">
                STATISTIK HARI INI
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Proyek Selesai:</span>
                  <span className="font-bold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span>Klien Puas:</span>
                  <span className="font-bold">98.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Penghargaan:</span>
                  <span className="font-bold">24</span>
                </div>
                <div className="flex justify-between">
                  <span>Tim Ahli:</span>
                  <span className="font-bold">156</span>
                </div>
              </div>
            </div>

            {/* Advertisement Style */}
            <div className="bg-yellow-100 border-4 border-yellow-600 p-4 text-center">
              <div className="text-xs font-bold text-yellow-800 mb-1">IKLAN</div>
              <div className="text-lg font-bold text-yellow-900 mb-2">Konsultasi Teknologi</div>
              <div className="text-sm text-yellow-800">Hubungi: (021) 123-4567</div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center border-t-2 border-amber-800 pt-6">
          <div className="flex justify-center items-center space-x-6 text-amber-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <span className="text-sm font-semibold">INOVASI TERDEPAN</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              <span className="text-sm font-semibold">SOLUSI TERPERCAYA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <span className="text-sm font-semibold">LAYANAN 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-800"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-800"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-800"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-amber-800"></div>
    </section>
  );
} 