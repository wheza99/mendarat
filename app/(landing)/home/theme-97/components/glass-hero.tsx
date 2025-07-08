import React from 'react';

export default function GlassHero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Glass card utama */}
      <div className="backdrop-blur-xl bg-white/30 border border-cyan-200 rounded-3xl shadow-xl p-10 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-600 mb-6 leading-tight drop-shadow-[0_2px_20px_#67e8f9]">
          Futuristic<br />
          <span className="text-blue-500">Glassmorphism</span>
        </h1>
        <p className="text-lg md:text-2xl text-blue-900/80 max-w-xl mb-8 font-sans">
          Experience the next generation of design with elegant glass effects, neon borders, and a modern digital look.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow hover:bg-cyan-600 transition">Get Started</button>
          <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 transition">Learn More</button>
        </div>
      </div>
      {/* Glass accent */}
      <div className="absolute right-8 bottom-8 w-24 h-24 rounded-3xl bg-white/30 border border-blue-200 backdrop-blur-xl shadow-xl opacity-30"></div>
    </section>
  );
} 