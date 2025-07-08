import React from 'react';

export default function PaperHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Paper Collage Illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="w-[420px] h-[220px] relative">
          <div className="absolute top-0 left-0 w-40 h-24 bg-yellow-200 rounded-[18px] shadow-lg rotate-3 border-2 border-yellow-300 z-10" />
          <div className="absolute top-8 left-32 w-32 h-16 bg-pink-200 rounded-[12px] shadow-lg -rotate-6 border-2 border-pink-300 z-20" />
          <div className="absolute top-20 left-16 w-24 h-10 bg-blue-200 rounded-[10px] shadow-lg rotate-12 border-2 border-blue-300 z-30" />
          <div className="absolute top-12 left-56 w-16 h-8 bg-green-200 rounded-[8px] shadow-lg -rotate-3 border-2 border-green-300 z-40" />
          <div className="absolute top-16 left-4 w-12 h-6 bg-orange-200 rounded-[6px] shadow-lg border-2 border-orange-300 z-50" />
        </div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-700 drop-shadow-lg mb-4 font-sans tracking-wider" style={{textShadow: '2px 4px 0 #fff7d6, 4px 8px 0 #ffe4b5'}}>
          <span className="inline-block bg-pink-200 px-2 py-1 rounded-[8px] rotate-2 shadow border-2 border-pink-300">Paper</span>{' '}
          <span className="inline-block bg-blue-200 px-2 py-1 rounded-[8px] -rotate-2 shadow border-2 border-blue-300">Collage</span>
        </h1>
        <p className="text-lg md:text-2xl text-pink-700 mb-8 max-w-2xl font-sans bg-yellow-100 px-4 py-2 rounded-[10px] shadow border-2 border-yellow-200 inline-block">
          Unleash your creativity with playful, hand-crafted landing pages!
        </p>
        <button className="px-10 py-4 bg-green-200 text-green-900 font-bold rounded-[12px] border-2 border-green-400 shadow-lg hover:scale-105 transition-transform font-sans text-xl relative" style={{boxShadow: '2px 4px 0 #fff7d6'}}>
          <span className="relative z-10">Get Started</span>
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-pink-200 rounded-full border-2 border-pink-300 animate-wiggle" />
        </button>
      </div>
    </section>
  );
} 