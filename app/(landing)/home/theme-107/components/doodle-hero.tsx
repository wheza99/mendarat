import React from 'react';

export default function DoodleHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Doodle Illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg width="420" height="220" viewBox="0 0 420 220" fill="none">
          <path d="M30 110 Q70 30 130 110 T230 110 Q270 190 330 110" stroke="#fbbf24" strokeWidth="6" fill="none"/>
          <circle cx="80" cy="60" r="18" fill="#60a5fa" />
          <circle cx="340" cy="160" r="12" fill="#f472b6" />
          <rect x="180" y="40" width="40" height="40" rx="14" fill="#34d399" />
          <path d="M60 200 Q100 180 140 200 T220 200 Q260 220 300 200" stroke="#fbbf24" strokeWidth="4" fill="none"/>
        </svg>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-500 mb-4 font-sans tracking-wider" style={{textShadow: '2px 2px 0 #fff, 4px 4px 0 #fbbf24'}}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400" style={{WebkitTextStroke: '2px #222'}}>DOODLE</span>{' '}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400" style={{WebkitTextStroke: '2px #222'}}>LANDING</span>
        </h1>
        <p className="text-lg md:text-2xl text-pink-500 mb-8 max-w-2xl font-sans bg-yellow-50 px-4 py-2 rounded-[10px] shadow border-2 border-yellow-200 inline-block">
          Fun, hand-drawn, and creative landing pages for your next project!
        </p>
        <button className="px-10 py-4 bg-blue-200 text-blue-900 font-bold rounded-[16px] border-4 border-dashed border-pink-400 shadow-lg hover:scale-105 transition-transform font-sans text-xl relative animate-wiggle">
          <span className="relative z-10">Start Doodling</span>
          <span className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-200 rounded-full border-2 border-yellow-400 animate-wiggle" />
        </button>
      </div>
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-wiggle { animation: wiggle 1.5s infinite; }
      `}</style>
    </section>
  );
} 