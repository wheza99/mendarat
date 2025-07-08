import React from 'react';

export default function NewsHero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Breaking news accent */}
      <div className="absolute left-8 top-8 bg-red-600 text-white font-bold px-6 py-2 rounded shadow-lg text-lg tracking-widest uppercase">Breaking News</div>
      <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-gray-900 mb-6 leading-tight border-b-4 border-gray-700 inline-block pb-2">
        THE MODERN<br />
        <span className="text-red-700">EDITORIAL</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-8 font-sans">
        Stay informed with the latest news, in-depth features, and expert analysis. Designed with a classic newspaper feel for the digital age.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded shadow hover:bg-red-700 transition">Read Now</button>
        <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-200 transition">Subscribe</button>
      </div>
      {/* Editorial accent */}
      <div className="absolute right-8 bottom-8 w-24 h-6 bg-gray-700/20 rounded shadow-lg"></div>
    </section>
  );
} 