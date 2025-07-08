import React from 'react';

export default function AdventureHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gradient-to-b from-sky-200/60 via-green-100/60 to-yellow-50/60 overflow-hidden">
      {/* Mountain Illustration */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 opacity-80 z-0" viewBox="0 0 800 200" fill="none">
        <path d="M0 200 L100 120 L200 180 L300 100 L400 160 L500 80 L600 140 L700 60 L800 200 Z" fill="#43a047" />
        <path d="M100 120 L200 180 L300 100 L400 160 L500 80 L600 140 L700 60" stroke="#795548" strokeWidth="4" fill="none" />
        <circle cx="700" cy="60" r="12" fill="#ffeb3b" opacity="0.7" />
      </svg>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 drop-shadow-lg mb-4 font-serif">
          Embark on Your Next <span className="text-orange-500">Adventure</span>
        </h1>
        <p className="text-lg md:text-2xl text-sky-700 mb-8 max-w-2xl font-medium">
          Discover breathtaking destinations, thrilling journeys, and unforgettable experiences. Your adventure starts here!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
          Start Exploring
        </button>
      </div>
      {/* Map Pin Illustration */}
      <svg className="absolute right-8 top-8 w-12 h-12 opacity-70 z-10 animate-bounce" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="38" rx="10" ry="4" fill="#ffe082" />
        <path d="M24 6C16 6 10 13 10 20.5C10 29.5 24 44 24 44C24 44 38 29.5 38 20.5C38 13 32 6 24 6Z" fill="#43a047" stroke="#795548" strokeWidth="2" />
        <circle cx="24" cy="21" r="5" fill="#ff9800" stroke="#fffbe6" strokeWidth="2" />
      </svg>
    </section>
  );
} 