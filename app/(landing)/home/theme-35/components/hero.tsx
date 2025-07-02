'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100" />
      
      {/* Organic decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-green-300/40 animate-sway">🌿</div>
        <div className="absolute top-40 right-20 text-5xl text-amber-300/50 animate-sway" style={{ animationDelay: '1s' }}>🌱</div>
        <div className="absolute bottom-32 left-1/4 text-7xl text-emerald-300/30 animate-sway" style={{ animationDelay: '2s' }}>🍀</div>
        <div className="absolute bottom-20 right-1/3 text-4xl text-green-400/40 animate-sway" style={{ animationDelay: '3s' }}>🌾</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 via-emerald-700 to-lime-600 bg-clip-text text-transparent leading-tight">
            Bersama Membangun
            <br />
            <span className="relative">
              Masa Depan Hijau
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-grow" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dalam misi menciptakan dunia yang lebih berkelanjutan. 
            Setiap langkah kecil menuju perubahan besar untuk planet kita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Mulai Sekarang
                <span className="group-hover:translate-x-1 transition-transform duration-300">🌱</span>
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2 group-hover:text-emerald-600 transition-colors">
                50K+
              </div>
              <div className="text-green-600 font-medium">Pohon Ditanam</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2 group-hover:text-emerald-600 transition-colors">
                1M+
              </div>
              <div className="text-green-600 font-medium">Kg CO₂ Dikurangi</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2 group-hover:text-emerald-600 transition-colors">
                200+
              </div>
              <div className="text-green-600 font-medium">Komunitas</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2 group-hover:text-emerald-600 transition-colors">
                95%
              </div>
              <div className="text-green-600 font-medium">Energi Terbarukan</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
} 