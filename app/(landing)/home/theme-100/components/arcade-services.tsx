import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="16" width="32" height="24" rx="4" fill="#1e1b4b" stroke="#06b6d4" strokeWidth="2" />
        <rect x="12" y="20" width="24" height="16" rx="2" fill="#06b6d4" />
        <rect x="16" y="24" width="4" height="4" fill="#1e1b4b" />
        <rect x="24" y="24" width="4" height="4" fill="#1e1b4b" />
        <rect x="32" y="24" width="4" height="4" fill="#1e1b4b" />
        <rect x="20" y="32" width="8" height="2" fill="#1e1b4b" />
      </svg>
    ),
    title: 'Arcade Cabinets',
    desc: 'Authentic arcade cabinets with classic games and retro controls.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-pink-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#1e1b4b" stroke="#ec4899" strokeWidth="2" />
        <text x="24" y="18" textAnchor="middle" fill="#ec4899" fontSize="6" fontFamily="monospace">VS</text>
        <text x="24" y="26" textAnchor="middle" fill="#06b6d4" fontSize="6" fontFamily="monospace">BATTLE</text>
        <text x="24" y="34" textAnchor="middle" fill="#eab308" fontSize="6" fontFamily="monospace">MODE</text>
      </svg>
    ),
    title: 'Tournaments',
    desc: 'Competitive gaming tournaments with prizes and leaderboards.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#1e1b4b" stroke="#eab308" strokeWidth="2" />
        <rect x="12" y="12" width="8" height="8" fill="#eab308" />
        <rect x="24" y="12" width="8" height="8" fill="#06b6d4" />
        <rect x="36" y="12" width="8" height="8" fill="#ec4899" />
        <rect x="12" y="24" width="8" height="8" fill="#8b5cf6" />
        <rect x="24" y="24" width="8" height="8" fill="#eab308" />
        <rect x="36" y="24" width="8" height="8" fill="#06b6d4" />
      </svg>
    ),
    title: 'Gaming Events',
    desc: 'Special gaming events and themed nights for retro enthusiasts.'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
        <rect x="12" y="12" width="8" height="8" fill="#8b5cf6" />
        <rect x="24" y="12" width="8" height="8" fill="#06b6d4" />
        <rect x="36" y="12" width="8" height="8" fill="#ec4899" />
        <rect x="12" y="24" width="8" height="8" fill="#eab308" />
        <rect x="24" y="24" width="8" height="8" fill="#8b5cf6" />
        <rect x="36" y="24" width="8" height="8" fill="#06b6d4" />
        <rect x="12" y="36" width="8" height="8" fill="#ec4899" />
        <rect x="24" y="36" width="8" height="8" fill="#eab308" />
        <rect x="36" y="36" width="8" height="8" fill="#8b5cf6" />
      </svg>
    ),
    title: 'Gaming Parties',
    desc: 'Private gaming parties and group events with multiple setups.'
  }
];

export default function ArcadeServices() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center font-mono tracking-wider">ARCADE SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-b from-purple-900/50 via-cyan-900/50 to-pink-900/50 rounded-none border-2 border-pink-400 p-6">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2 font-mono">{s.title}</h3>
              <p className="text-cyan-300 text-center font-mono text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 