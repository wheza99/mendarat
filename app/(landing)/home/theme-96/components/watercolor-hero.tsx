import React from 'react';

export default function WatercolorHero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Brush pastel accent */}
      <svg className="absolute left-0 top-0 w-48 h-48 opacity-30 -z-10" viewBox="0 0 200 200" fill="none">
        <ellipse cx="100" cy="100" rx="100" ry="80" fill="#f9a8d4" />
      </svg>
      <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-pink-400 mb-6 leading-tight drop-shadow-[0_2px_20px_#f9a8d4]">
        Artistic<br />
        <span className="text-blue-400 font-[cursive]">Watercolor</span>
      </h1>
      <p className="text-lg md:text-2xl text-blue-900/80 max-w-2xl mb-8 font-sans">
        Express your creativity with a soft, artistic, and modern landing page. Perfect for portfolios, agencies, and creative projects.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-3 bg-pink-400 text-white font-semibold rounded-full shadow hover:bg-pink-500 transition">Get Started</button>
        <button className="px-8 py-3 border-2 border-pink-400 text-pink-400 font-semibold rounded-full hover:bg-pink-50 transition">Learn More</button>
      </div>
      {/* Brush accent */}
      <svg className="absolute right-8 bottom-8 w-20 h-20 opacity-20 -z-10" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="50" ry="40" fill="#a5b4fc" />
      </svg>
    </section>
  );
} 