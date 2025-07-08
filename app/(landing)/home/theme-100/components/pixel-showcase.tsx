import React from 'react';

const games = [
  {
    name: 'Space Invaders',
    desc: 'Defend Earth from alien invasion in this classic arcade shooter.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#1e1b4b" />
        <rect x="8" y="8" width="8" height="8" fill="#06b6d4" />
        <rect x="24" y="8" width="8" height="8" fill="#ec4899" />
        <rect x="40" y="8" width="8" height="8" fill="#eab308" />
        <rect x="56" y="8" width="8" height="8" fill="#8b5cf6" />
        <rect x="72" y="8" width="8" height="8" fill="#06b6d4" />
        <rect x="16" y="24" width="8" height="8" fill="#ec4899" />
        <rect x="32" y="24" width="8" height="8" fill="#eab308" />
        <rect x="48" y="24" width="8" height="8" fill="#8b5cf6" />
        <rect x="64" y="24" width="8" height="8" fill="#06b6d4" />
        <rect x="80" y="24" width="8" height="8" fill="#ec4899" />
        <rect x="44" y="48" width="8" height="8" fill="#eab308" />
      </svg>
    )
  },
  {
    name: 'Pac-Man',
    desc: 'Navigate mazes and collect dots while avoiding ghosts in this iconic game.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#1e1b4b" />
        <circle cx="48" cy="32" r="16" fill="#eab308" />
        <path d="M48 16 A16 16 0 0 1 64 32 A16 16 0 0 1 48 48" fill="#1e1b4b" />
        <circle cx="52" cy="28" r="2" fill="#1e1b4b" />
        <rect x="16" y="16" width="8" height="8" fill="#06b6d4" />
        <rect x="72" y="16" width="8" height="8" fill="#ec4899" />
        <rect x="16" y="40" width="8" height="8" fill="#8b5cf6" />
        <rect x="72" y="40" width="8" height="8" fill="#06b6d4" />
      </svg>
    )
  },
  {
    name: 'Tetris',
    desc: 'Stack falling blocks to clear lines in this addictive puzzle game.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#1e1b4b" />
        <rect x="32" y="8" width="8" height="8" fill="#06b6d4" />
        <rect x="40" y="8" width="8" height="8" fill="#06b6d4" />
        <rect x="48" y="8" width="8" height="8" fill="#06b6d4" />
        <rect x="56" y="8" width="8" height="8" fill="#06b6d4" />
        <rect x="40" y="16" width="8" height="8" fill="#ec4899" />
        <rect x="48" y="16" width="8" height="8" fill="#ec4899" />
        <rect x="40" y="24" width="8" height="8" fill="#eab308" />
        <rect x="48" y="24" width="8" height="8" fill="#eab308" />
        <rect x="40" y="32" width="8" height="8" fill="#8b5cf6" />
        <rect x="48" y="32" width="8" height="8" fill="#8b5cf6" />
        <rect x="40" y="40" width="8" height="8" fill="#06b6d4" />
        <rect x="48" y="40" width="8" height="8" fill="#06b6d4" />
      </svg>
    )
  },
  {
    name: 'Donkey Kong',
    desc: 'Climb ladders and avoid barrels to rescue the princess from the giant ape.',
    img: (
      <svg className="w-24 h-16 mx-auto" viewBox="0 0 96 64" fill="none">
        <rect x="0" y="0" width="96" height="64" fill="#1e1b4b" />
        <rect x="16" y="8" width="64" height="8" fill="#8b5cf6" />
        <rect x="16" y="24" width="64" height="8" fill="#8b5cf6" />
        <rect x="16" y="40" width="64" height="8" fill="#8b5cf6" />
        <rect x="40" y="16" width="8" height="8" fill="#eab308" />
        <rect x="40" y="32" width="8" height="8" fill="#eab308" />
        <rect x="40" y="48" width="8" height="8" fill="#eab308" />
        <rect x="8" y="16" width="8" height="8" fill="#06b6d4" />
        <rect x="80" y="16" width="8" height="8" fill="#ec4899" />
        <rect x="8" y="32" width="8" height="8" fill="#06b6d4" />
        <rect x="80" y="32" width="8" height="8" fill="#ec4899" />
      </svg>
    )
  }
];

export default function PixelShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-900/50 via-cyan-900/50 to-pink-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center font-mono tracking-wider">FEATURED GAMES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, i) => (
            <div key={i} className="bg-black/50 rounded-none border-2 border-cyan-400 p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="mb-4">{game.img}</div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2 font-mono">{game.name}</h3>
              <p className="text-cyan-300 text-center font-mono text-sm">{game.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 