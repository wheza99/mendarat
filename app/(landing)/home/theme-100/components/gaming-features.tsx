import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#1e1b4b" stroke="#06b6d4" strokeWidth="2" />
        <rect x="12" y="12" width="8" height="8" fill="#06b6d4" />
        <rect x="24" y="12" width="8" height="8" fill="#ec4899" />
        <rect x="12" y="24" width="8" height="8" fill="#eab308" />
        <rect x="24" y="24" width="8" height="8" fill="#8b5cf6" />
      </svg>
    ),
    title: 'Classic Games',
    desc: 'Play timeless arcade classics and retro favorites from the golden age of gaming.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-pink-400" fill="none" viewBox="0 0 48 48">
        <rect x="12" y="16" width="24" height="16" rx="4" fill="#1e1b4b" stroke="#ec4899" strokeWidth="2" />
        <circle cx="20" cy="24" r="3" fill="#ec4899" />
        <circle cx="28" cy="24" r="3" fill="#06b6d4" />
        <rect x="16" y="28" width="16" height="2" fill="#eab308" />
      </svg>
    ),
    title: 'Arcade Experience',
    desc: 'Immerse yourself in authentic arcade atmosphere with CRT effects and retro sounds.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#1e1b4b" stroke="#eab308" strokeWidth="2" />
        <text x="24" y="20" textAnchor="middle" fill="#eab308" fontSize="8" fontFamily="monospace">HI</text>
        <text x="24" y="30" textAnchor="middle" fill="#06b6d4" fontSize="6" fontFamily="monospace">SCORE</text>
        <text x="24" y="38" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="monospace">999999</text>
      </svg>
    ),
    title: 'High Scores',
    desc: 'Compete for the highest scores and challenge your friends in classic leaderboards.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 48 48">
        <rect x="12" y="12" width="24" height="24" rx="4" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
        <rect x="16" y="16" width="4" height="4" fill="#8b5cf6" />
        <rect x="24" y="16" width="4" height="4" fill="#06b6d4" />
        <rect x="32" y="16" width="4" height="4" fill="#ec4899" />
        <rect x="16" y="24" width="4" height="4" fill="#eab308" />
        <rect x="24" y="24" width="4" height="4" fill="#8b5cf6" />
        <rect x="32" y="24" width="4" height="4" fill="#06b6d4" />
        <rect x="16" y="32" width="4" height="4" fill="#ec4899" />
        <rect x="24" y="32" width="4" height="4" fill="#eab308" />
        <rect x="32" y="32" width="4" height="4" fill="#8b5cf6" />
      </svg>
    ),
    title: 'Pixel Perfect',
    desc: 'Experience games exactly as they were meant to be played with authentic pixel graphics.'
  }
];

export default function GamingFeatures() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center font-mono tracking-wider">GAMING FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-b from-purple-900/50 via-cyan-900/50 to-pink-900/50 rounded-none border-2 border-cyan-400 p-6">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2 font-mono">{f.title}</h3>
              <p className="text-cyan-300 text-center font-mono text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 