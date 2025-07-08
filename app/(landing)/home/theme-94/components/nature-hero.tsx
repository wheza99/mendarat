import React from 'react';

export default function NatureHero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Ilustrasi daun besar */}
      <svg className="absolute left-0 top-0 w-40 h-40 opacity-20 -z-10" viewBox="0 0 200 200" fill="none">
        <ellipse cx="100" cy="100" rx="100" ry="80" fill="#22c55e" />
      </svg>
      <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 mb-6 leading-tight">
        Embrace Nature<br />
        <span className="text-green-500">Minimalist Living</span>
      </h1>
      <p className="text-lg md:text-2xl text-green-900/80 max-w-2xl mb-8">
        Discover the beauty of simplicity and sustainability. Our eco-friendly solutions bring you closer to nature, with modern design and a green touch.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600 transition">Get Started</button>
        <button className="px-8 py-3 border-2 border-green-500 text-green-700 font-semibold rounded-full hover:bg-green-50 transition">Learn More</button>
      </div>
      {/* Ilustrasi daun kecil */}
      <svg className="absolute right-8 bottom-8 w-16 h-16 opacity-20 -z-10" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="50" ry="40" fill="#a3e635" />
      </svg>
    </section>
  );
} 