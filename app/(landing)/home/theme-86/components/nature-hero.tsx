import React from 'react';

export default function NatureHero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 pt-16 pb-8 text-center animate-nature-fade-in">
      {/* Ilustrasi daun/pegunungan */}
      <div className="mb-8 flex justify-center">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="70" rx="55" ry="10" fill="#bbf7d0" />
          <path d="M10 70 Q40 10 60 70 Q80 30 110 70" stroke="#34d399" strokeWidth="4" fill="none" />
          <ellipse cx="60" cy="40" rx="8" ry="18" fill="#4ade80" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4 font-sans tracking-tight leading-tight">
        Harmoni Alam, <span className="text-green-600">Desain Minimalis</span>
      </h1>
      <p className="text-lg md:text-xl text-green-800 mb-8 max-w-2xl mx-auto font-light">
        Menyatukan keindahan alam dan desain modern untuk ruang yang lebih sehat, nyaman, dan inspiratif.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition-all duration-200">
          Konsultasi Gratis
        </button>
        <button className="px-8 py-3 border border-green-400 text-green-700 rounded-full font-semibold hover:bg-green-100 transition-all duration-200">
          Lihat Portofolio
        </button>
      </div>
    </section>
  );
} 