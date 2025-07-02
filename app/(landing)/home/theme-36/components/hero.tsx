'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100" />
      
      {/* Art Deco decorative border */}
      <div className="absolute inset-0 border-8 border-double border-amber-400/20 m-8 pointer-events-none" />
      
      {/* Luxury decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent art-deco-expand" />
        <div className="absolute top-20 right-20 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent art-deco-expand" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-20 left-20 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent art-deco-expand" style={{ animationDelay: '0.4s' }} />
        <div className="absolute bottom-20 right-20 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent art-deco-expand" style={{ animationDelay: '0.6s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full mb-8 elegant-reveal shadow-lg">
            <span className="text-lg">✨</span>
            <span className="font-semibold tracking-wide">HERITAGE SINCE 1892</span>
            <span className="text-lg">✨</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-yellow-700 to-orange-800 leading-tight font-serif">
            Keahlian Tinggi,
            <br />
            <span className="relative inline-block">
              Warisan Abadi
              <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 rounded-full art-deco-expand" style={{ animationDelay: '0.8s' }} />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-900 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Lebih dari seabad menghadirkan karya seni terbaik dengan dedikasi penuh terhadap 
            kualitas premium dan tradisi keahlian yang tak tertandingi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-semibold text-lg hover:from-amber-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Jelajahi Koleksi
                <span className="group-hover:translate-x-2 transition-transform duration-300">💎</span>
              </span>
              <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-10 py-5 border-3 border-amber-600 text-amber-800 rounded-full font-semibold text-lg hover:bg-amber-50 hover:border-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Pelajari Sejarah
            </button>
          </div>
          
          {/* Luxury Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center group hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors relative">
                130+
                <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-amber-700 font-medium uppercase tracking-wide">Tahun Pengalaman</div>
            </div>
            
            <div className="text-center group hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors relative">
                50K+
                <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-amber-700 font-medium uppercase tracking-wide">Karya Masterpiece</div>
            </div>
            
            <div className="text-center group hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors relative">
                200+
                <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-amber-700 font-medium uppercase tracking-wide">Penghargaan</div>
            </div>
            
            <div className="text-center group hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 group-hover:text-yellow-700 transition-colors relative">
                98%
                <div className="absolute inset-0 golden-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-amber-700 font-medium uppercase tracking-wide">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Luxury scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-amber-600 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-2 h-4 bg-gradient-to-b from-amber-600 to-yellow-600 rounded-full mt-2 animate-pulse" />
          <div className="absolute inset-0 golden-shine opacity-50" />
        </div>
      </div>
    </section>
  );
} 