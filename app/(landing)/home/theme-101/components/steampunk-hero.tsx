import React from 'react';

export default function SteampunkHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          {/* Factory Silhouette */}
          <rect x="100" y="200" width="600" height="200" fill="#92400e" />
          <rect x="120" y="150" width="80" height="50" fill="#a16207" />
          <rect x="250" y="120" width="100" height="80" fill="#d97706" />
          <rect x="400" y="100" width="120" height="100" fill="#92400e" />
          <rect x="570" y="130" width="90" height="70" fill="#a16207" />
          
          {/* Chimneys */}
          <rect x="140" y="80" width="20" height="70" fill="#92400e" />
          <rect x="280" y="60" width="25" height="60" fill="#d97706" />
          <rect x="450" y="40" width="30" height="60" fill="#92400e" />
          <rect x="600" y="70" width="22" height="60" fill="#a16207" />
          
          {/* Steam Clouds */}
          <ellipse cx="150" cy="70" rx="15" ry="8" fill="#d97706" opacity="0.6" />
          <ellipse cx="292" cy="50" rx="20" ry="10" fill="#92400e" opacity="0.5" />
          <ellipse cx="465" cy="30" rx="25" ry="12" fill="#a16207" opacity="0.6" />
          <ellipse cx="611" cy="60" rx="18" ry="9" fill="#d97706" opacity="0.5" />
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-400 drop-shadow-lg mb-4 font-serif">
          <span className="text-orange-400">STEAMPUNK</span> INDUSTRIAL
        </h1>
        <p className="text-lg md:text-2xl text-yellow-300 mb-8 max-w-2xl font-serif">
          Where Victorian elegance meets industrial innovation. Experience the power of steam and brass!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-white font-bold rounded-none border-2 border-amber-400 hover:scale-105 transition-transform font-serif">
          IGNITE ENGINES
        </button>
      </div>
      
      {/* Gear Illustration */}
      <svg className="absolute right-8 top-8 w-20 h-20 opacity-70 z-10 animate-spin" viewBox="0 0 80 80" fill="none" style={{animationDuration: '10s'}}>
        <circle cx="40" cy="40" r="35" fill="none" stroke="#d97706" strokeWidth="4" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="#92400e" strokeWidth="3" />
        <circle cx="40" cy="40" r="15" fill="none" stroke="#a16207" strokeWidth="2" />
        <circle cx="40" cy="40" r="5" fill="#d97706" />
        {Array.from({ length: 12 }, (_, i) => (
          <rect
            key={i}
            x="35"
            y="8"
            width="10"
            height="12"
            fill="#d97706"
            transform={`rotate(${i * 30} 40 40)`}
          />
        ))}
      </svg>
    </section>
  );
} 